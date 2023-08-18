import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import { places } from "../data/valencia_places";
import icon from "../assets/taronjeta.png";
import { Icon, Map } from "leaflet";
import React from "react";

// const valenciaBounds = TODO

const Tab1: React.FC = () => {
    const ref = useRef<Map>(null);
    useEffect(() => {
        setTimeout(() => {
            ref.current?.invalidateSize();
        }, 80);
    }, [ref]);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>FairlyMap</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <MapContainer
                    ref={ref}
                    className="full-height-map"
                    center={[39.46975, -0.37739]}
                    zoom={13}
                    minZoom={10}
                    maxBounds={[
                        [39.36975, -0.47739],
                        [39.56975, -0.27739],
                    ]}
                    scrollWheelZoom={true}
                >
                    {places.map((place) => (
                        <Marker
                            key={place.id}
                            position={[place.latitude, place.longitude]}
                            icon={
                                new Icon({
                                    iconUrl: icon,
                                    iconSize: [50, 50],
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
                    ))}
                    <TileLayer
                        maxNativeZoom={19}
                        maxZoom={20}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, contributors'
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
