import { AllRoutes } from "../interfaces/IBus";

export const sampleBusRoutes: AllRoutes = {
  status: "success",
  lastModified: "2022-11-19T20:39:38.626Z",
  data: {
    routes: [
      {
        code: "BE",
        service: "clever",
        name: "Buckeye Express",
        color: "#c25700",
        darkColor: "#EA7408",
      },
      {
        code: "CC",
        service: "clever",
        name: "Campus Connector",
        color: "#005716",
        darkColor: "#0A8721",
      },
      {
        code: "CLS",
        service: "clever",
        name: "Campus Loop South",
        color: "#850000",
        darkColor: "#DA3426",
      },
      {
        code: "ER",
        service: "clever",
        name: "East Residential",
        color: "#11196a",
        darkColor: "#397C9E",
      },
      {
        code: "MC",
        service: "clever",
        name: "Medical Center",
        color: "#e31665",
        darkColor: "#FE588E",
      },
    ],
  },
};
