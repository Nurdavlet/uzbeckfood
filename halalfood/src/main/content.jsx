import React from "react";
import i18n from "../i18n/config";
import lupa from "./lupa.png";
export default function Content() {
        
        return(
            <div className="content">
                <div className="searchbabel">
                    <button className="lupab"><img className="lupa" src={lupa}/></button>
                </div>
            </div>
        );

}