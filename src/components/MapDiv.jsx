import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {useMapEvents} from "react-leaflet"
// import { useLeafletContext } from '@react-leaflet/core'
// import { leafletGeotiff } from "leaflet-geotiff";



function MyComponent(props) {
  useMapEvents({
    click: (ev) => {
      props.mark([ev.latlng.lat, ev.latlng.lng])
      props.getData()
  }})
}

// function CustomLayer(props){
//   const context = useLeafletContext()
//   const container = context.layerContainer || context.map
//   var la = leafletGeotiff("https://neo.gsfc.nasa.gov/servlet/RenderData?si=1820312&cs=rgb&format=FLOAT.TIFF&width=1440&height=720").addTo(context.map)
  
// }

function MapDiv(props){
  return(<div className="container text-start float-start float-sm-start d-xxl-flex justify-content-xxl-center align-items-xxl-end"
    style={{"width": "60%","height":"90vh", "margin":"5px", "padding" :"0px"}}>
        <MapContainer center={props.loc} zoom={2} scrollWheelZoom={true}>
          <MyComponent mark={props.setLoc} l= {props.l} getData={props.getData}/>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
  <Marker position={props.loc}>
    <Popup>{props.loc[0]}, {props.loc[1]}</Popup>
  </Marker>
</MapContainer>
    </div>);
}
export default MapDiv