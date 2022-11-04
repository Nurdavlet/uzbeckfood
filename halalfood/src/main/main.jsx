import { Link } from "react-router-dom";
import "./main.css";
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import * as React from "react";
import i18n from "../i18n/config";





export function Main () {
    const { t } = useTranslation();
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <>
        <header>

            <div>

            </div>
        </header>

        </>
    );
}