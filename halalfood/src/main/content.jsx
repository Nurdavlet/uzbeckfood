import React from "react";
import i18n from "../i18n/config";
import lupa from "./img/lupa.png";
import colo from "./img/colo.png";
import food1 from "./img/halim2.jpg";
import razmarin from "./img/razamarin.png";
import ocloc from "./img/pngegg (1).png";
import chefhat from "./img/pngegg.png";
import imgaut1 from "./img/Снимок экрана_2022-11-10_21-25-06.png";
import imgaut2 from "./img/Снимок экрана_2022-11-10_21-26-22.png";
import "./css/content.css";
//import io from "socket.io";
import halim from "./img/halim2.jpg"
import io from "socket.io-client";
import Footer from "../global/footer";
import { withTranslation, useTranslation } from "react-i18next";
const host = 'http://localhost:8000';


class Content extends React.Component {
        constructor() {
            super();
            this.state = {data:[]};
            this.st = this.st.bind(this);
               
        }
        
        st(data) {
            this.setState({ data: data });
        }
        componentDidMount() {
            const mysocket = io(host, {path: "/api/"} , {transports: ['websocket']});
            let temp = (data) => {
                this.st(data);
                console.log(this.state);
            }
            mysocket.on('my event', function(data) {
                temp (data);
                
            });
            
        }
         
        render() {
            
            return(
                
            <div className="content">
                <div className="lupacolo">    
                    <div className="searchbabel">
                        <button className="lupab"><img className="lupa" src={lupa}/></button>
                    </div>
                    <div className="colodiv">
                        <img src={colo} className="colo"/>
                    </div>
                </div>
                <div className="hrrazmarin">
                    <div className="hr"><hr/></div>
                    <img className="razmarin" src={razmarin}></img>
                    <div className="hr"><hr/></div>
                </div>
                <h1>{this.props.tr('recipes')}</h1>
                <div className="recomendations">
                <div className="items">{this.state.data.map(data => {
                    return(
                    <div className="item">
                        <div className="itemimg" style={{backgroundImage: `url(${food1})`}}>
                            
                        </div>
                        <div className="itemtext">
                            <div>
                                <h2>Халим</h2>
                                    {/* <div className="iteminline"> */}
                                        <div className="iteminline"><img className="itemsico" src={ocloc} /></div>
                                        <div className="iteminline"><img className="itemsico" src={chefhat} /></div>
                                        <div className="iteminline"></div>
                                    {/* </div> */}
                            </div>
                            <hr/>
                            <div>

                            </div>
                        </div>
                    </div>
                    );
                })}</div>
                </div>

                <h1>{this.props.tr('topauthor')}</h1>
                <div className="images">
                    <img className="imgaut" src={imgaut1}></img>
                    <img className="imgaut" src={imgaut2}></img>
                    <img className="imgaut" src={imgaut1}></img>
                    <img className="imgaut" src={imgaut2}></img>
                </div>
                <Footer tr={this.props.tr} />
            </div>
            )
        };

}

export default withTranslation()(Content)