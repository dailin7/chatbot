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
