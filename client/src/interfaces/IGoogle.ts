export interface GeocodeResults {
  plus_code: PlusCode;
  results: GeocodeResult[];
  status: string;
}

export interface GeocodeResult {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  plus_code: PlusCode;
  types: string[];
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface Geometry {
  location: Location;
  location_type: string;
  viewport: Viewport;
  bounds: Bounds;
}

export interface Coords {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Coords;
  southwest: Coords;
}

export interface Bounds {
  northeast: Coords;
  southwest: Coords;
}
