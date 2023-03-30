import React,{useState} from "react";
import MapDiv from "./MapDiv";
import Navigation from "./Navigation";
import Info from "./Info"
function Main(){
    var [location,setLocation] = useState([40.215242186221865, 7.382812500000001])
    var [link, setLink] = useState("https://neo.gsfc.nasa.gov/servlet/RenderData?si=1820624&cs=rgb&format=TIFF&width=1440&height=720")
    const [data, setData] = useState({})
    const getData=()=>{
        fetch('http://127.0.0.1:8000/api/',{
            method:"POST",
            body: JSON.stringify({
                lat : location[0],
                lng : location[1]
              }),
              headers: {
                'Content-Type': 'application/json'
              }
        }).then(function(response){
                console.log(response);
                return response.json();
          }).then(function(json){
            setData(json);
          })
    }
    return(<>
    <Navigation/>
    <div className="main-parent">
        <MapDiv loc= {location} setLoc= {setLocation} l={link} getData={getData}/>
        <Info loc= {location} setLoc = {setLocation} data={data}/>
    </div>
    </>)
}

export default Main;