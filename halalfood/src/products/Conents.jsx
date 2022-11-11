import React from "react";
import Footer from "../global/footer";
import colo from "./img/colo.png";
import lupa from "./img/lupa.png";
import razmarin from "./img/razamarin.png";
import io from "socket.io-client";
import halim from "./img/halim2.jpg";
import pilav from "./img/pilaf.jpg";
import sumalak from "./img/maxresdefault.jpg";
import besh from "./img/besh.jpg";
import ocloc from "./img/pngegg (1).png";
import chefhat from "./img/pngegg.png";
import runfast from "./img/icons8-exercise-24.png";
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

            <div className="itemsb">{this.state.data.map(data => {
                    let imgs;
                    switch(data.img) {
                        case "pilaf.jpg":  imgs = pilav; break;
                        case "maxresdefault.jpg": imgs = sumalak; break;
                        case "besh.jpg": imgs = besh; break;
                        case "halim2.jpg": imgs = halim;
                    }
                    
                    return(
                    <div className="itemb">
                        <div className="itemimgb" style={{backgroundImage: `url(${imgs})`}}>
                            
                        </div>
                        <div className="itemtextb">
                            <div>
                                <h2>{data.name}</h2>
                                    {/* <div className="iteminline"> */}
                                        <div className="iteminlineb"><img className="itemsicob" src={ocloc} /> {data.time} {this.props.tr('min')} </div>
                                        <div className="iteminlineb"><img className="itemsicob" src={chefhat} />  {this.props.tr(data.level)} </div>
                                        <div className="iteminlineb"><img className="itemsicob" src={runfast}/> {data.cal} {this.props.tr('kcal')}</div>
                                    {/* </div> */}
                            </div>
                            <hr/>
                            <div className="itemingerb">
                                {data.ingred}
                            </div>
                            <div className="itemingers">
                                {data.howcook}
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