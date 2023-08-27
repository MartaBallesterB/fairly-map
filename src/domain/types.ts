export type EstablishmentType =
    | "sanctuary"
    | "localFarmer"
    | "restaurant"
    | "clothingStore";

export type Place = {
    name: string;
    id: number;
    description?: string;
    latitude: number;
    longitude: number;
    establishment_type: EstablishmentType;
};

export type Places = Place[];
