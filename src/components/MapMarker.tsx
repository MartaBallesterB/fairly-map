import { FC } from "react";
import { Marker, Popup } from "react-leaflet";
import { locationSharp } from "ionicons/icons";
import { Icon } from "leaflet";
import { Place } from "../domain/types";

type Props = {
    place: Place;
};

export const MapMarker: FC<Props> = ({ place }) => (
    <Marker
        position={[place.latitude, place.longitude]}
        icon={
            new Icon({
                iconUrl: locationSharp,
                iconSize: [40, 40],
                iconAnchor: [30, 41],
                popupAnchor: [-8, -40],
            })
        }
    >
        <Popup>
            <b>{place.name}</b>
            <br></br>
            {place.description}
        </Popup>
    </Marker>
);
