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
import eda from './eda.png';


export function Navbar () {
    const { t } = useTranslation();
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <>
        <header>
            <Link to="/"> <img src={eda} className="eda"/></Link>
            <div className="navbar">
                
                <ul>
                    <li><Link to="/recipes" className="link">{t('recipes')}</Link></li>
                    <li><Link to="/cookbook" className="link">{t('cookbook')}</Link></li>
                    <li><Link to="/diary" className="link">{t('diary')}</Link></li>
                    <li><Link to="/authors" className="link">{t('authors')}</Link></li>
                </ul>
                <div className="langchangebutton">
                    <button onClick={changeLanguage} className="en" value="en">en</button>
                    <button onClick={changeLanguage} className="ru" value="ru">ru</button>
                </div>
                <div className="navbaricons">
                    <a href="http://www.vk.com"><img className="navbarico" src={vk}/></a>
                    <a href="http://www.fb.com"><img className="navbarico" src={fb}/></a>
                    <a href="http://www.instagram.com"><img className="navbarico" src={instagram}/></a>
                    <a href="http://www.google.com"><img className="navbarico" src={googlePng}/></a>
                </div>
            </div>
        </header>
        {/* <div className="navbarclone"></div> */}
        </>
    );
}