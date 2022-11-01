import { Link } from "react-router-dom";
import "./main.css";
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import * as React from "react";
import i18n from "../i18n/config";



export interface Main {

}

export function Main () {
    const { t } = useTranslation();
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <>
        <header>
            <div className="navbar">
                <ul>
                    <li><Link to="/recipes">{t('recipes')}</Link></li>
                    <li><Link to="/products">{t('products')}</Link></li>
                </ul>
                <div className="langchangebutton">
                    <button onClick={changeLanguage} value="en">en</button>
                    <button onClick={changeLanguage} value="ru">ru</button>
                </div>
            </div>
            <div>

            </div>
        </header>

        </>
    );
}