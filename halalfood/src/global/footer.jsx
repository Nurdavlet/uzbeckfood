import React from "react";
import "./footer.css";


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="emailwrite">
                    <div className="text">{this.props.tr('subscription')}</div>
                    <div className="email" >
                        <form  >
                            
                            <input className="inputtext" type="text" name="email" />
                            
                            <input className="emailbutton" type="submit" value=">" />
                        </form>
                    </div>
                </div>
        );
    }
}

export default Footer;