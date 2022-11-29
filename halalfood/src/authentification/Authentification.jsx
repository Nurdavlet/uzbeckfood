import {ReactDOM, Component } from "react";
import i18n from "../i18n/config";
import './auth.css';
import i18next from "i18next";
const host = 'http://localhost:3001'
class Authentification extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        let params = 
    window
        .location
        .search
        .substr(1)
        .split('&')
        .reduce(
            function(p,e){
                var a = e.split('=');
                p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );
        if (params.verifi === "Ok") {
            window.location.href= "/cookbook?";
        }
         else if (params.verifi === "Bad") {
            alert("email and passowrd are not correct");
         }
        
        console.log(params); 
    }
    render() {
        return(
        <div className="authconatin">
            <form className="authform" method={"POST"} action={host + "/api/auth" }>
                <label>{i18n.t('Enter your email')}</label><br/>
                <input type={"email"} name="auth_email" placeholder={i18n.t('Enter your email')} required/><br/>
                <label>{i18n.t('Enter your password')}</label> <br/>
                <input type={'password'}  name="auth_password" placeholder={i18n.t("Enter the password")} required/> <br/>
                <input type={'submit'} value={i18n.t('entrance')} />
            </form>
        </div>);
    }
}
export default Authentification;