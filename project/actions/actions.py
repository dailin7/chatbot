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
        new_name = class_name.replace(' ', '%20')
        upper_one = class_name.upper()
        url = "https://content.osu.edu/v2/classes/search?q=" + new_name
        print(url)
        data = requests.get(url).json()
        output = data['data']['courses'][0]["sections"][0]["meetings"][0]["instructors"][0]["displayName"]
        subject = data["data"]["courses"][0]["course"]["subject"]
        catalogNumber = data["data"]["courses"][0]["course"]["catalogNumber"]
        if subject in upper_one and catalogNumber in upper_one:
            if output != None:
                print("The instructor of class " + class_name + " is " + output)
                result = "The instructor of class " + class_name + " is " + output
            else:
                print("The instructor of class " + class_name + " is not available")
                result = "The instructor of class " + class_name + " is not available"
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
        new_name = class_name.replace(' ', '%20')
        upper_one = class_name.upper()
        url = "https://content.osu.edu/v2/classes/search?q=" + new_name
        print(url)
        data = requests.get(url).json()
        output = data['data']['courses'][0]["course"]["term"]
        subject = data["data"]["courses"][0]["course"]["subject"]
        catalogNumber = data["data"]["courses"][0]["course"]["catalogNumber"]
        if subject in upper_one and catalogNumber in upper_one:
            if output != None:
                print("The term of class " + class_name + " is " + output)
                result = "The term of class " + class_name + " is " + output
            else:
                print("The term of class " + class_name + " is not available")
                result = "The term of class " + class_name + " is not available"
        else:
            print(class_name + " is not a valid class")
            result = class_name + " is not a valid class"
        return  [SlotSet("result", result)]


class extract_class_building(Action):
    def name(self): 
        return "extract_class_building" 

    def run(self, dispatcher, tracker, domain): 
        class_name = tracker.get_slot('class')
        # upper_class_name = class_name.upper()
        new_name = class_name.replace(' ', '%20')
        upper_one = class_name.upper()
        url = "https://content.osu.edu/v2/classes/search?q=" + new_name
        print(url)
        data = requests.get(url).json()
        output = data['data']['courses'][0]['sections'][0]['meetings'][0]['buildingDescription']
        subject = data["data"]["courses"][0]["course"]["subject"]
        catalogNumber = data["data"]["courses"][0]["course"]["catalogNumber"]
        if subject in upper_one and catalogNumber in upper_one:
            if output != None:
                print("The building of class " + class_name + " is " + output)
                result = "The building of class " + class_name + " is " + output
            else:
                print("The building of class " + class_name + " is not available")
                result = "The building of class " + class_name + " is not available"
        else:
            print(str(class_name) + " is not a valid class")
            result = str(class_name) + " is not a valid class"
        return  [SlotSet("result", result)]

class extract_class_campus(Action):
    def name(self): 
        return "extract_class_campus" 

    def run(self, dispatcher, tracker, domain): 
        class_name = tracker.get_slot('class')
        # upper_class_name = class_name.upper()
        new_name = class_name.replace(' ', '%20')
        upper_one = class_name.upper()
        url = "https://content.osu.edu/v2/classes/search?q=" + new_name
        print(url)
        data = requests.get(url).json()
        output = data["data"]["courses"][0]["sections"][0]["campus"]
        subject = data["data"]["courses"][0]["course"]["subject"]
        catalogNumber = data["data"]["courses"][0]["course"]["catalogNumber"]
        if subject in upper_one and catalogNumber in upper_one:
            if output != None:
                print("The campus of class " + class_name + " is " + output)
                result = "The campus of class " + class_name + " is " + output
            else:
                print("The campus of class " + class_name + " is not available")
                result = "The campus of class " + class_name + " is not available"
        else:
            print(str(class_name) + " is not a valid class")
            result = str(class_name) + " is not a valid class"
        return  [SlotSet("result", result)]



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
