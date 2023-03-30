import React from "react";
import { ReactDOM } from "react";
function Navigation(){
    return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3" style={{"height":"72px"}} >
    <div className="container">
        <img src="assets/img/infinity_symblo_PNG34.png" width="48" height="66"/>
            <a className="navbar-brand d-flex align-items-center"
            href="#"><span className="fs-5" style={{"marginLeft": "10px"}}>Solar
                Infinity</span>
                </a><button data-bs-toggle="collapse" className="navbar-toggler"
            data-bs-target="#navcol-5"><span className="visually-hidden">Toggle navigation</span><span
            className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-5"><input
                className="border rounded border-light d-xl-flex align-items-xl-end text-center text-lg-start" type="search"
                data-bs-toggle="tooltip" data-bss-tooltip="" data-bs-placement="bottom" style={{"marginLeft": "12px"}}
                autoComplete="on" name="Search Locations" title="Search Your Location" placeholder="search..."/>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link active fs-5 text-center text-lg-start" href="#"
                        style={{"marginLeft": "0px","marginRight": "0px"}}>Map</a>
                </li>
                <li className="nav-item"><a className="nav-link fs-5 text-center text-lg-start" href="#api"
                        style={{"marginLeft": "0px","marginRight": "0px"}}>API</a>
                </li>
                <li className="nav-item">
                    <div className="nav-link dropdown text-center text-lg-start" >
                        <a className="dropdown-toggle fs-5 fw-normal link-light" aria-expanded="false"
                            data-bs-toggle="dropdown" href="#" style={{"textDecoration":"none"}}>About</a>
                        <div className="dropdown-menu border rounded"><a
                                className="dropdown-item fs-6 fw-normal link-dark border-5 border-dark">Introduction</a>
                                <a className="dropdown-item" href="#">Methodology</a>
                                <a className="dropdown-item" href="#">User guide</a></div>
                    </div>
                </li>
            </ul>
            <img src="assets/img/SMART-INDIA-HACKATHON-2020.png"
            style={{"marginRight": "20px","marginLeft": "12px"}}
                width="144" height="64"/><img src="assets/img/harghar-tiranga-logo-Eng-White.png" width="75"
                height="54"/>
        </div>
    </div>
</nav>);
}

export default Navigation;