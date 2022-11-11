import React from "react";
import { Navbar }  from "../global/navbar";
import Content from "./Conents";
import i18n from "../i18n/config";
import { useTranslation } from "react-i18next";
import "./css/content.css"
export default function Cookbook() {
    const { t } = useTranslation();
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <div className="container">
        <Navbar/>
        <Content tr={t}/>
        </div>
    );
}