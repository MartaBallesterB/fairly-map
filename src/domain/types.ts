export type Place = {
    name: string;
    id: number;
    description?: string;
    latitude: number;
    longitude: number;
    establishment_type: string;
};

export type Places = Place[];
