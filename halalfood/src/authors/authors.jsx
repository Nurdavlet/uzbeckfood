import React from "react";
import { Navbar } from "../global/navbar";
import Content from "./content";
import { useTranslation } from 'react-i18next';
import i18n from "../i18n/config";
import "./css/authors.css"
function Authors()  {
 
        const { t } = useTranslation();
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }
    

        return(
            <div className="container">
            <Navbar/>
            <Content tr={t}/>
            </div>
        );
    
}
export default Authors;