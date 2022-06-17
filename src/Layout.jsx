import React from "react";
import HeaderBar from "./components/HeaderBar";
import { Outlet } from "react-router-dom";
import './css/App.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <HeaderBar profile={this.props.profile}></HeaderBar>
      <div className="layout-container">
        <Outlet />
      </div>
    </div>
    )
  }
}

export default Layout;