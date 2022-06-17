import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png"

class HeaderBar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
        <div className="header-bar">
            <Link to="/"><img src={Logo} alt="logo" /></Link>
            <h1>Earthquake Zen Garden</h1>
            <Link className="profile-detail-link" to="/profile">Welcome, {this.props.profile.firstName}</Link>
        </div>
        )
      }
    
}

export default HeaderBar