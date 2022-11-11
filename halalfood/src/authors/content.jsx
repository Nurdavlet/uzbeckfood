import React from "react";
import Footer from "../global/footer";
import i18n from "../i18n/config";
import i18next from "i18next";
import "./css/content.css";
import lupa from "./img/lupa.png";
import colo from "./img/colo.png";
import razmarin from "./img/razamarin.png";
import io from "socket.io-client";
import imgaut1 from "./img/Снимок экрана_2022-11-10_21-25-06.png";
import imgaut2 from "./img/Снимок экрана_2022-11-10_21-26-22.png";


const host = 'http://localhost:8000';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {data: []};
        this.st = this.st.bind(this);
           
    }
    
    st(data) {
        this.setState({ data: JSON.parse( data) });
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
                                
                    
                    

                <Footer tr={this.props.tr}/>
            </div>
            
        );
    }
}

export default Content;