# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from re import S
import re
from tkinter.messagebox import NO
from unittest import result
from rasa_sdk import Action
from rasa_sdk.events import SlotSet
import requests
import json
from typing import Text, List, Any, Dict

from rasa_sdk import Tracker, FormValidationAction
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.types import DomainDict


class FetchProfileAction(Action):

    def name(self): 
        return "fetch_profile" 

    def run(self, dispatcher, tracker, domain): 
        url = "http://myprofileurl.com" 
        data = requests.get(url).json 
        return [SlotSet("account_type", data["account_type"])]

class extract_class_title(Action):
    def name(self): 
        return "extract_class_title" 

    def run(self, dispatcher, tracker, domain): 
        class_name = tracker.get_slot('class')
        # upper_class_name = class_name.upper()
        new_name = class_name.replace(' ', '%20')
        upper_one = class_name.upper()
        url = 'https://content.osu.edu/v2/classes/search?q=' + new_name
        print(url)
        data = requests.get(url).json()
        output = data["data"]["courses"][0]["course"]["shortDescription"]
        subject = data["data"]["courses"][0]["course"]["subject"]
        catalogNumber = data["data"]["courses"][0]["course"]["catalogNumber"]
        if subject in class_name and catalogNumber in upper_one:
            if output != None:
                print("The title of class " + str(class_name) + " is " + str(output))
                result = "The title of class " + str(class_name) + " is " + str(output)
            else:
                print("Sorry, I can't find the title of class " + str(class_name))
                result = "Sorry, I can't find the title of class " + str(class_name)
        else:
            print(str(class_name) + " is not a valid class")
            result = str(class_name) + " is not a valid class"
        return  [SlotSet("result", result)]


    
    
class extract_class_instructor(Action):
    def name(self): 
        return "extract_class_instructor" 

    def run(self, dispatcher, tracker, domain): 
        class_name = tracker.get_slot('class')
        # upper_class_name = class_name.upper()
        class_term = tracker.get_slot('course_term')
        new_name = class_name.replace(' ', '%20')
        upper_one = class_name.upper()
        url = "https://content.osu.edu/v2/classes/search?q=" + new_name
        data = requests.get(url).json()
        set_inst = set()
        for i in data["data"]["courses"]:
            from_web = str(i["course"]["term"])
            if from_web.upper() == class_term.upper():
                output = i["sections"][0]["meetings"][0]["instructors"][0]["displayName"]
                if output not in set_inst and output is not None:
                    set_inst.add(output)
            
        subject = data["data"]["courses"][0]["course"]["subject"]
        catalogNumber = data["data"]["courses"][0]["course"]["catalogNumber"]
        if subject in upper_one and catalogNumber in upper_one:
            lis = list(set_inst)
            result =class_name + " instructor of " + class_term + " are:  " + ', '.join(lis)
            print(result)
        else:
            print(class_name + " is not a valid class")
            result = class_name + " is not a valid class"
        return  [SlotSet("result", result)]

class extract_class_term(Action):
    def name(self): 
        return "extract_class_term" 

    def run(self, dispatcher, tracker, domain): 
        class_name = tracker.get_slot('class')
        # upper_class_name = class_name.upper()
        class_term = tracker.get_slot('course_term')
        new_name = class_name.replace(' ', '%20')
        upper_one = class_name.upper()
        url = "https://content.osu.edu/v2/classes/search?q=" + new_name
        print(url)
        data = requests.get(url).json()
        subject = data["data"]["courses"][0]["course"]["subject"]
        catalogNumber = data["data"]["courses"][0]["course"]["catalogNumber"]
        if subject in upper_one and catalogNumber in upper_one:
            print("The term of class " + class_name + " is " + class_term)
            result = "The term of class " + class_name + " is " + class_term
        else:
            print(class_name + " is not a valid class")
            result = class_name + " is not a valid class"
        return  [SlotSet("result", result)]


class extract_class_building(Action):
    def name(self): 
        return "extract_class_building" 

    def run(self, dispatcher, tracker, domain): 
        class_name = tracker.get_slot('class')
        class_term = tracker.get_slot('course_term')
        # upper_class_name = class_name.upper()
        new_name = class_name.replace(' ', '%20')
        upper_one = class_name.upper()
        url = "https://content.osu.edu/v2/classes/search?q=" + new_name
        print(url)
        data = requests.get(url).json()
        set_inst = set()
        for i in data["data"]["courses"]:
            from_web = str(i["course"]["term"])
            if from_web.upper() == class_term.upper():
                for j in i["sections"]:
                    output = j["meetings"][0]["buildingDescription"]
                    if output not in set_inst and output is not None:
                        set_inst.add(output)
            
        subject = data["data"]["courses"][0]["course"]["subject"]
        catalogNumber = data["data"]["courses"][0]["course"]["catalogNumber"]
        if subject in upper_one and catalogNumber in upper_one:
            lis = list(set_inst)
            result =class_name + " building of " + class_term + " are:  " + ', '.join(lis)
            print(result)
        else:
            print(class_name + " is not a valid class")
            result = class_name + " is not a valid class"
        return  [SlotSet("result", result)]

class extract_class_campus(Action):
    def name(self): 
        return "extract_class_campus" 

    def run(self, dispatcher, tracker, domain): 
        class_name = tracker.get_slot('class')
        class_term = tracker.get_slot('course_term')
        # upper_class_name = class_name.upper()
        new_name = class_name.replace(' ', '%20')
        upper_one = class_name.upper()
        url = "https://content.osu.edu/v2/classes/search?q=" + new_name
        print(url)
        data = requests.get(url).json()
        set_inst = set()
        for i in data["data"]["courses"]:
            from_web = str(i["course"]["term"])
            if from_web.upper() == class_term.upper():
                output = i["course"]["campus"]
                if output not in set_inst and output is not None:
                    set_inst.add(output)
            
        subject = data["data"]["courses"][0]["course"]["subject"]
        catalogNumber = data["data"]["courses"][0]["course"]["catalogNumber"]
        if subject in upper_one and catalogNumber in upper_one:
            lis = list(set_inst)
            result =class_name + " campus of " + class_term +" are:  " + ', '.join(lis)
            print(result)
        else:
            print(class_name + " is not a valid class")
            result = class_name + " is not a valid class"
        return  [SlotSet("result", result)]

class extract_all_route(Action):
    def name(self):
        return "extract_all_route"

    def run(self, dispatcher, tracker, domain):
        url = "https://content.osu.edu/v2/bus/routes"
        data = requests.get(url).json()
        route = []
        for i in data["data"]["routes"]:
            if i["code"] not in route:
                route.append(i["code"])
        routes = ", ".join(route)
        result = "The routes in the campus are" + routes
        return [SlotSet("result", result)]



        
#class ValidateRestaurantForm(FormValidationAction):
#    def name(self) -> Text:
#        return "validate_instructor_form"

#    @staticmethod
#    def term_db() -> List[Text]:
#        """Database of supported terms"""

#        return ["Autumn 2022", "Summer 2022", "Spring 2023"]

#   def validate_term(
#        self,
#        slot_value: Any,
#        dispatcher: CollectingDispatcher,
#        tracker: Tracker,
#        domain: DomainDict,
#    ) -> Dict[Text, Any]:
#        """Validate term value."""#

#        if slot_value.lower() in self.cuisine_db():
#            # validation succeeded, set the value of the "cuisine" slot to value
#            return {"cuisine": slot_value}
#        else:
            # validation failed, set this slot to None so that the
            # user will be asked for the slot again
#            return {"cuisine": None}

# from typing import Any, Text, Dict, List
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []
