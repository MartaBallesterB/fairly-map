import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonModal,
    IonCheckbox,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
} from "@ionic/react";
import "./Tab1.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import { places } from "../data/valencia_places";
import { Icon, Map } from "leaflet";
import React from "react";
import { close, filter, locationSharp } from "ionicons/icons";

// const valenciaBounds = TODO

const Tab1: React.FC = () => {
    const ref = useRef<Map>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            ref.current?.invalidateSize();
        }, 80);
    }, [ref]);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Fairly Map</IonTitle>
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
                    ))}
                    <TileLayer
                        maxNativeZoom={19}
                        maxZoom={20}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, contributors'
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton onClick={() => setIsOpen(true)}>
                        <IonIcon icon={filter}></IonIcon>
                    </IonFabButton>
                </IonFab>
                <IonModal
                    isOpen={isOpen}
                    trigger="open-modal"
                    onIonModalDidDismiss={() => {
                        setIsOpen(false);
                    }}
                >
                    <IonContent>
                        <IonList inset={true}>
                            <IonItem>
                                <IonLabel>
                                    <IonCheckbox>
                                        <h2>Sanctuaries</h2>
                                    </IonCheckbox>
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    <IonCheckbox>
                                        <h2>Local farmers</h2>
                                    </IonCheckbox>
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    <IonCheckbox>
                                        <h2>Restaurant</h2>
                                    </IonCheckbox>
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    <IonCheckbox
                                        checked={checked}
                                        onIonChange={(e) =>
                                            setChecked(e.detail.checked)
                                        }
                                    >
                                        <h2>Clothing store</h2>
                                    </IonCheckbox>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonContent>
                    <IonButton onClick={() => setIsOpen(false)}>
                        <IonIcon icon={close}></IonIcon>
                    </IonButton>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
