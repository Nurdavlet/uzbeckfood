import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import googlePng from './g.png';
import fb from './fb.png';
import vk from './vk.png';
import instagram from './instagram.png';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <footer>
                <div className="emailwrite">
                    <div className="text">{this.props.tr('subscription')}</div>
                    <div className="email" >
                        <form  >
                            
                            <input className="inputtext" type="text" name="email" />
                            
                            <input className="emailbutton" type="submit" value=">" />
                        </form>
                    </div>
                </div>
                <div className="foot">
                    <div className="links">
                        <ul>
                            <li className="li"><Link to="#" className="linknav">{this.props.tr('menu')}</Link></li>
                            <li className="li"><Link to="#" className="linknav">{this.props.tr('recipes')}</Link></li>
                            <li className="li"><Link to="#" className="linknav">{this.props.tr('authors')}</Link></li>
                            <li className="li"><Link to="#" className="linknav">{this.props.tr('faq')}</Link></li>
                        </ul>
                    </div>
                    <div className="navbaricons">
                        <a href="http://www.vk.com"><img className="navbarico" src={vk}/></a>
                        <a href="http://www.fb.com"><img className="navbarico" src={fb}/></a>
                        <a href="http://www.instagram.com"><img className="navbarico" src={instagram}/></a>
                        <a href="http://www.google.com"><img className="navbarico" src={googlePng}/></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;