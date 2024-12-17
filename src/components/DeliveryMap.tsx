import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icons in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface DeliveryMapProps {
  pickup: [number, number];
  delivery: [number, number];
  driverLocation: [number, number];
}

const DeliveryMap: React.FC<DeliveryMapProps> = ({ pickup, delivery, driverLocation }) => {
  const center: [number, number] = [
    (pickup[0] + delivery[0]) / 2,
    (pickup[1] + delivery[1]) / 2
  ];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={pickup} icon={defaultIcon}>
        <Popup>Pickup Location</Popup>
      </Marker>
      <Marker position={delivery} icon={defaultIcon}>
        <Popup>Delivery Location</Popup>
      </Marker>
      <Marker position={driverLocation} icon={defaultIcon}>
        <Popup>Driver Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default DeliveryMap;