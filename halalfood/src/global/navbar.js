import { Link } from "react-router-dom";
import "./navbar.css";
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import * as React from "react";
import i18n from "../i18n/config";
import googlePng from './g.png';
import fb from './fb.png';
import vk from './vk.png';
import instagram from './instagram.png';

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
                <div className="navbaricons">
                    <a href="vk.com"><img className="navbarico" src={vk}/></a>
                    <a href="fb.com"><img className="navbarico" src={fb}/></a>
                    <a href="instagram.com"><img className="navbarico" src={instagram}/></a>
                    <a href="google.com"><img className="navbarico" src={googlePng}/></a>
                </div>
            </div>
            <div>

            </div>
        </header>

        </>
    );
}