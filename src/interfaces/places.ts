export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:         string;
    type:       string;
    place_type: string[];
    relevance:  number;
    properties: Properties;
    text:       string;
    place_name: string;
    center:     number[];
    geometry:   Geometry;
    context:    Context[];
}

export interface Context {
    id:          string;
    mapbox_id:   string;
    text:        string;
    wikidata?:   Wikidata;
    short_code?: ShortCode;
}

export enum ShortCode {
    Cl = "cl",
    ClAt = "CL-AT",
}

export enum Wikidata {
    Q2120 = "Q2120",
    Q298 = "Q298",
    Q3708 = "Q3708",
    Q3868 = "Q3868",
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Properties {
    foursquare: string;
    landmark:   boolean;
    address?:   string;
    category:   string;
    maki?:      string;
}
