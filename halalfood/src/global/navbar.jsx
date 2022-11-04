import { Link } from "react-router-dom";

import '../i18n/config';
import { useTranslation } from 'react-i18next';
import * as React from "react";
import i18n from "../i18n/config.js";

// eslint-disable-next-line import/no-webpack-loader-syntax
const jpgEda = require ('../../front/assert/news.jpg');

export function NavBar(props) {
    const { t } = useTranslation();
    function changeLanguage(e)  {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <div className="navbar">
            <img src={props.imgs.eda}></img>
        <ul>
            <li><Link to="/recipes">{t('recipes')}</Link></li>
            <li><Link to="/products">{t('products')}</Link></li>
        </ul>
        <div className="langchangebutton">
            <button onClick={changeLanguage} value="en">en</button>
            <button onClick={changeLanguage} value="ru">ru</button>
        </div>
    </div>
    );
}


