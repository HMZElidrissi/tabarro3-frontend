"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface MapComponentProps {
  centers: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  }[];
}

const MapComponent: React.FC<MapComponentProps> = ({ centers }) => {
  return (
    <div className="py-10 border-b border-gray-200" id="map">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Donation Centers
          </h2>
          <MapContainer
            center={[31.7917, -7.0926]}
            zoom={6}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {centers.map((center) => (
              <Marker
                key={center.id}
                position={[center.latitude, center.longitude]}
                icon={L.icon({
                  iconUrl: "/pin.svg",
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41],
                })}
              >
                <Popup>{center.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </div>
    </div>
  );
};

export default MapComponent;
