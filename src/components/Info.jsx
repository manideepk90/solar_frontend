import React from "react";
import InfoTable from "./info_table/InfoTable";
function Info(props){
    // var [address, setAddress] = useState("#15/2, Balaji Street, Rayachoti, Kadapa, AP - 517247")
    return(<div className="container text-start float-start float-sm-start d-xxl-flex justify-content-xxl-center align-items-xxl-end"
    style={{"width": "36%","height":"82vh","margin-left": "10px",
    "margin-top": "15px" }}>
        <h2 >Location Details</h2>
        <h6 ><i class="bi bi-geo-alt-fill"></i> {props.loc[0]} Lat, {props.loc[1]} Long</h6>
        {/* <h6 >{address}</h6> */}
        <InfoTable data={props.data}/>
    </div>)
}

export default Info;