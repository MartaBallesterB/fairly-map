import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { useEffect, useRef } from 'react';

// delete L.Icon.Default.prototype['_getIconUrl' as any as keyof L.Icon.Default];
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
//   iconUrl: require('leaflet/dist/images/marker-icon.png').default,
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
// });

const Tab1: React.FC = () => {
  const ref = useRef<Leaflet.Map>(null)
  useEffect(() => {
    setTimeout(() => {
      ref.current?.invalidateSize()
    }, 1)
  }, [ref])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
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
          center={[39.4697500, -0.3773900]}
          zoom={13}
          minZoom={3}
          maxZoom={19}
          maxBounds={[[-85.06, -180], [85.06, 180]]}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          {/* TODO: Add markers */}
        </MapContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;


