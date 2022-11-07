import React from "react";
import i18n from "../i18n/config";
import lupa from "./lupa.png";
import colo from "./colo.png";
import razmarin from "./razamarin.png";

export default function Content() {
        
        return(
            <div className="content">
                <div className="lupacolo">    
                    <div className="searchbabel">
                        <button className="lupab"><img className="lupa" src={lupa}/></button>
                    </div>
                    <div className="colodiv">
                        <img src={colo} className="colo"/>
                    </div>
                </div>
                <div className="hrrazmarin">
                    <div className="hr"><hr/></div>
                    <img className="razmarin" src={razmarin}></img>
                    <div className="hr"><hr/></div>
                </div>
            </div>
        );

}