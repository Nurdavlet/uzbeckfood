import React from "react";
import Footer from "../global/footer";
import i18n from "../i18n/config";
import i18next from "i18next";
import "./css/content.css";
import lupa from "./img/lupa.png";
import colo from "./img/colo.png";
import razmarin from "./img/razamarin.png";
import io from "socket.io-client";
import imgaut1 from "./img/istockphoto-1192003808-1024x1024.jpg";
import imgaut2 from "./img/istockphoto-1217012868-1024x1024.jpg";
import defaults from "../global/defaultauthors.json";

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
        if(this.state.data != []) {
            this.st(JSON.stringify(defaults));
        }

        const mysocket = io(host, {path: "/api/authors"} , {transports: ['websocket']});
        let temp = (data) => {
            this.st(data);
            console.log(this.state);
        }
        mysocket.on('authors', function(data) {
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
                <div className="itemsb">{this.state.data.map(data => {
                    let imgs;
                    switch(data.img) {
                        case "1":  imgs = imgaut1; break;
                        case "2": imgs = imgaut2; break;
                        
                    }
                    
                    return(
                    <div className="itemb">
                        <div className="itemimgb" style={{backgroundImage: `url(${imgs})`}}>
                            
                        </div>
                        <div className="itemtextb">
                            {data.name}
                            <hr/>
                            <div className="itemingerb">
                                Возраст {data.age} &#09;  Стаж {data.xp} <br/>
                                {data.about}
                            </div>

                        </div>
                    </div>
                    );
                })}</div>               
                    
                    

                <Footer tr={this.props.tr}/>
            </div>
            
        );
    }
}

export default Content;