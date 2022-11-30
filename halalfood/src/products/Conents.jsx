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
import defaults from "../global/defaultmain.json";
const host = 'http://localhost:8000';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {data: []};
        this.st = this.st.bind(this);
        this.sumbit = this.sumbit.bind(this);
    }
    sumbit() {
        let textdata = document.querySelector('textarea');
        let imgdata = document.querySelector('input[type="file"]');
        let mindata = document.querySelector('input[type="number"]');
        let leveldata = document.querySelector('input[type="radio"]');
        let recipesdata = document.querySelector('input[type="text"]');
        console.log(textdata.value);
        console.log(imgdata?.files);
        console.log(mindata.value);
        console.log(leveldata.value);
        console.log(recipesdata.value);

    }
    st(data) {
        this.setState({ data: JSON.parse( data) });
    }
    componentDidMount() {
        if(this.state.data != []) {
            this.st(JSON.stringify(defaults));
        }
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
                        default: imgs = pilav; break;
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
                                {data.howcook}<br/>
                                Создано {new Date(data.createdAt).getDay() + "." + new Date(data.createdAt).getMonth() + "." + new Date(data.createdAt).getFullYear() }
                                <br/>
                                Обновлено {new Date(data.updatedAt).getDay() + "." + new Date(data.updatedAt).getMonth() + "." + new Date(data.updatedAt).getFullYear() }
                            </div>
                        </div>
                    </div>
                    );
                })}</div>
                <div className="CRUD">
                    <form className="fromCRUD" action="http://localhost:3001/api/form" method="POST"  target={"_blank"}>
                        <textarea className="txareaCRUD" name="text">

                        </textarea>
                        <div className="sumbit">

                            <div>
                                <label>Введите название еды</label>
                                <input type={"text"} id="foodnm" name="name"/>

                            </div>
                            <div>
                                <input type={"file"} name="img"/>
                            
                            </div>
                            <div>
                                <label for="min">Введите время приготовления</label>
                                <input id="min" type={"number"} name="min"/> <br/>
                            </div>
                            <div>
                                <label for="min">Введите количество ккал</label>
                                <input id="min" type={"number"} name="cal"/> <br/>
                            </div>
                            <label>Введите сложность готовки</label>
                            <div>
                                <input type="radio" id="easy" name="level" value={"easy"} />
                                <label for="easy">легкий</label>
                            </div>
                            <div>
                                <input type="radio" id="middle" name="level" value={"middle"}/>
                                <label for="middle">средний</label>
                            </div>
                            <div>
                                <input type={"radio"} id="hard" name="level" value={"hard"}/>
                                <label for="hard">сложно</label>
                            </div>
                            <div>
                                <label>Введите ингредиенты</label>
                                <input type={"text"} id="recipes" name="recipe"/>

                            </div>
                            <div>
                                <input type={"submit"} value="sumbit"></input>
                            </div>
                        </div>
                    </form>
                                {/* <button onClick={this.sumbit}  >Созадть</button> */}
                </div>
            <Footer tr={this.props.tr}/>
            </div>
        );
    }
}
export default Content;