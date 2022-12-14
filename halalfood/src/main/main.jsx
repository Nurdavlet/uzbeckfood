import { Link } from "react-router-dom";
import "./css/main.css";
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import * as React from "react";
import i18n from "../i18n/config";
import { Navbar } from "../global/navbar";
import Content from "./content";
import Footer from "../global/footer";



export function Main () {
    const { t } = useTranslation();
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <div className="container">
        <Navbar/>
        <Content tr={t} />
        
        </div>
    );
}