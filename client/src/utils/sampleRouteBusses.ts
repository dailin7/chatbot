import { RouteBusses } from "../interfaces/IBus";

export const sampleRouteBusses: RouteBusses = {
  status: "success",
  lastModified: "2022-11-19T23:59:21.380Z",
  data: {
    vehicles: [
      {
        routeCode: "CC",
        distance: 5320,
        heading: 93,
        latitude: 39.99812042713167,
        patternId: "1133",
        destination: "Central Campus",
        delayed: false,
        speed: 24,
        predictions: [
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "DUE",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:00:00.000Z",
            timeToArrivalInSeconds: 60,
            destination: "Central Campus",
            stopId: "18",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 1320,
            stopName: "Kinnear Road Lot",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "3",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:02:00.000Z",
            timeToArrivalInSeconds: 180,
            destination: "Central Campus",
            stopId: "14",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 4554,
            stopName: "Blankenship Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "5",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:04:00.000Z",
            timeToArrivalInSeconds: 300,
            destination: "Central Campus",
            stopId: "20",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 6622,
            stopName: "Mid West Campus (Eastbound)",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "6",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:06:00.000Z",
            timeToArrivalInSeconds: 420,
            destination: "Central Campus",
            stopId: "21",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 8349,
            stopName: "St. John East Bound",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "8",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:07:00.000Z",
            timeToArrivalInSeconds: 480,
            destination: "Central Campus",
            stopId: "57",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 9719,
            stopName: "Knowlton Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "9",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:08:00.000Z",
            timeToArrivalInSeconds: 540,
            destination: "Central Campus",
            stopId: "58",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 10621,
            stopName: "Fontana Lab",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "11",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:10:00.000Z",
            timeToArrivalInSeconds: 660,
            destination: "Central Campus",
            stopId: "59",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 12107,
            stopName: "Stillman Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "16",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:16:00.000Z",
            timeToArrivalInSeconds: 1020,
            destination: "West Campus",
            stopId: "44",
            type: "departure",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 13695,
            stopName: "Ohio Union (Southbound)",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "19",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:18:00.000Z",
            timeToArrivalInSeconds: 1140,
            destination: "West Campus",
            stopId: "410",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 15591,
            stopName: "Siebert Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "20",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:20:00.000Z",
            timeToArrivalInSeconds: 1260,
            destination: "West Campus",
            stopId: "41",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 16539,
            stopName: "Mack Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "23",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:23:00.000Z",
            timeToArrivalInSeconds: 1440,
            destination: "West Campus",
            stopId: "405",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 18458,
            stopName: "Herrick Transit Hub",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "26",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:26:00.000Z",
            timeToArrivalInSeconds: 1620,
            destination: "West Campus",
            stopId: "23",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 20782,
            stopName: "Mid Towers",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "29",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:29:00.000Z",
            timeToArrivalInSeconds: 1800,
            destination: "West Campus",
            stopId: "24",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 23234,
            stopName: "St. John Arena (Westbound)",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "31",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:31:00.000Z",
            timeToArrivalInSeconds: 1920,
            destination: "West Campus",
            stopId: "25",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 24862,
            stopName: "Mid West Campus (Westbound)",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "35",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:35:00.000Z",
            timeToArrivalInSeconds: 2160,
            destination: "Central Campus",
            stopId: "10",
            type: "departure",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 28337,
            stopName: "Bevis Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "37",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:36:00.000Z",
            timeToArrivalInSeconds: 2220,
            destination: "Central Campus",
            stopId: "94",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 29883,
            stopName: "Carmack 5 + Stop 1",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "38",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:37:00.000Z",
            timeToArrivalInSeconds: 2280,
            destination: "Central Campus",
            stopId: "95",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "1109",
            vehicleDistanceInFeet: 30821,
            stopName: "Carmack 5 + Stop 2",
          },
        ],
        service: "clever",
        lastStop: null,
        id: "1109",
        bus_id: null,
        updated: "2022-11-19T23:59:00.000Z",
        longitude: -83.04139494895935,
      },
      {
        routeCode: "CC",
        distance: 2753,
        heading: 2,
        latitude: 39.99578892100941,
        patternId: "1134",
        destination: "West Campus",
        delayed: false,
        speed: 0,
        predictions: [
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "DUE",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-19T23:59:00.000Z",
            timeToArrivalInSeconds: 0,
            destination: "West Campus",
            stopId: "41",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 91,
            stopName: "Mack Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "3",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:02:00.000Z",
            timeToArrivalInSeconds: 180,
            destination: "West Campus",
            stopId: "405",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 2010,
            stopName: "Herrick Transit Hub",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "6",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:05:00.000Z",
            timeToArrivalInSeconds: 360,
            destination: "West Campus",
            stopId: "23",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 4334,
            stopName: "Mid Towers",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "9",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:08:00.000Z",
            timeToArrivalInSeconds: 540,
            destination: "West Campus",
            stopId: "24",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 6786,
            stopName: "St. John Arena (Westbound)",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "11",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:10:00.000Z",
            timeToArrivalInSeconds: 660,
            destination: "West Campus",
            stopId: "25",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 8414,
            stopName: "Mid West Campus (Westbound)",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "15",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:15:00.000Z",
            timeToArrivalInSeconds: 960,
            destination: "Central Campus",
            stopId: "10",
            type: "departure",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 11889,
            stopName: "Bevis Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "17",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:16:00.000Z",
            timeToArrivalInSeconds: 1020,
            destination: "Central Campus",
            stopId: "94",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 13435,
            stopName: "Carmack 5 + Stop 1",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "18",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:17:00.000Z",
            timeToArrivalInSeconds: 1080,
            destination: "Central Campus",
            stopId: "95",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 14373,
            stopName: "Carmack 5 + Stop 2",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "21",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:20:00.000Z",
            timeToArrivalInSeconds: 1260,
            destination: "Central Campus",
            stopId: "15",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 16632,
            stopName: "Research Center",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "22",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:22:00.000Z",
            timeToArrivalInSeconds: 1380,
            destination: "Central Campus",
            stopId: "18",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 18208,
            stopName: "Kinnear Road Lot",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "25",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:24:00.000Z",
            timeToArrivalInSeconds: 1500,
            destination: "Central Campus",
            stopId: "14",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 21442,
            stopName: "Blankenship Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "26",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:26:00.000Z",
            timeToArrivalInSeconds: 1620,
            destination: "Central Campus",
            stopId: "20",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 23510,
            stopName: "Mid West Campus (Eastbound)",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "28",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:27:00.000Z",
            timeToArrivalInSeconds: 1680,
            destination: "Central Campus",
            stopId: "21",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 25237,
            stopName: "St. John East Bound",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "29",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:29:00.000Z",
            timeToArrivalInSeconds: 1800,
            destination: "Central Campus",
            stopId: "57",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 26607,
            stopName: "Knowlton Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "30",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:30:00.000Z",
            timeToArrivalInSeconds: 1860,
            destination: "Central Campus",
            stopId: "58",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 27509,
            stopName: "Fontana Lab",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "32",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:32:00.000Z",
            timeToArrivalInSeconds: 1980,
            destination: "Central Campus",
            stopId: "59",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 28995,
            stopName: "Stillman Hall",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "36",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:36:00.000Z",
            timeToArrivalInSeconds: 2220,
            destination: "West Campus",
            stopId: "44",
            type: "departure",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 30583,
            stopName: "Ohio Union (Southbound)",
          },
          {
            routeCode: "CC",
            routeColor: "#005716",
            predictionCountdown: "39",
            isDelayed: false,
            darkColor: "#0A8721",
            predictionTime: "2022-11-20T00:38:00.000Z",
            timeToArrivalInSeconds: 2340,
            destination: "West Campus",
            stopId: "410",
            type: "arrival",
            systemTime: "2022-11-19T23:59:00.000Z",
            vehicleId: "2201",
            vehicleDistanceInFeet: 32479,
            stopName: "Siebert Hall",
          },
        ],
        service: "clever",
        lastStop: null,
        id: "2201",
        bus_id: null,
        updated: "2022-11-19T23:59:00.000Z",
        longitude: -83.01474299575344,
      },
    ],
  },
};
