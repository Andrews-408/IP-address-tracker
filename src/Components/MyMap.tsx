import React from "react"
import {MapContainer, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"


export default function MyMap() {
  const center: any = [7.338606356956359, -2.313385785454429]
  return (
    <div className="-mt-16 z-10">
      <MapContainer
        center={center}
        zoom={10}
        className="w-screen h-screen z-10 overflow-auto"
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yIheEwEZdqtzqJk7SXkD"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        ></TileLayer>


      </MapContainer>
    </div>
  )
}