import json
import requests
route_name = 'BE'
url = "https://content.osu.edu/v2/bus/routes/" + route_name + "/vehicles"
print(url)
data = requests.get(url).json()
stops = []
for i in data["data"]["vehicles"]:
    
