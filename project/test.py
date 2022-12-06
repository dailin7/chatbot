import requests
route_name = "BE"
url = "https://content.osu.edu/v2/bus/routes/" + route_name + "/vehicles"
data = requests.get(url).json()
bus_no = 0
for i in data["data"]["vehicles"]:
    bus_no = bus_no + 1
result = "There are " + str(bus_no) + " buses in route " + route_name
print(result)
