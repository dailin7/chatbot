export interface RouteDetail {
  status: string;
  lastModified: string;
  data: RouteData;
}

export interface RouteData {
  patterns: RoutePattern[];
  stops: RouteStop[];
}

export interface RoutePattern {
  length: number;
  id: string;
  encodedPolyline: string;
  direction: string;
}

export interface RouteStop {
  name: string;
  id: string;
  service: string;
  latitude: number;
  longitude: number;
}

export interface AllRoutes {
  status: string;
  lastModified: string;
  data: { routes: Route[] };
}

export interface Route {
  code: string;
  service: string;
  name: string;
  color: string;
  darkColor: string;
}

export interface RouteBusses {
  status: string;
  lastModified: string;
  data: { vehicles: Vehicle[] };
}

export interface Vehicle {
  routeCode: string;
  distance: number;
  heading: number;
  latitude: number;
  patternId: string;
  destination: string;
  delayed: boolean;
  speed: number;
  predictions: Prediction[];
  service: string;
  lastStop?: any;
  id: string;
  bus_id?: any;
  updated: string;
  longitude: number;
}

export interface Prediction {
  routeCode: string;
  routeColor: string;
  predictionCountdown: string;
  isDelayed: boolean;
  darkColor: string;
  predictionTime: string;
  timeToArrivalInSeconds: number;
  destination: string;
  stopId: string;
  type: string;
  systemTime: string;
  vehicleId: string;
  vehicleDistanceInFeet: number;
  stopName: string;
}
