// event.model.ts

export interface Event {
    id: string;
    title: string;
    description: string;
    link: string;
    categories: Category[];
    sources: Source[];
    geometries: Geometry[];
  }
  
  export interface Category {
    id: number;
    title: string;
  }
  
  export interface Source {
    id: string;
    url: string;
  }
  
  export interface Geometry {
    date: string;
    type: string;
    coordinates: number[];
  }
  