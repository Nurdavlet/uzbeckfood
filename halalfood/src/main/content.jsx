import React from "react";
import i18n from "../i18n/config";
import lupa from "./lupa.png";
export default function Content() {

        return(
            <div className="conent">
                <div className="searchbabel">
                    <div><img className="lupa" src={lupa}/></div>
                </div>
            </div>
        );

}