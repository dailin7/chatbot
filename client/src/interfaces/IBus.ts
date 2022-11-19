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
