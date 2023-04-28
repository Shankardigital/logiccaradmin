import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import { Link } from "react-router-dom";

// import logo from "../../assets/images/logo.svg";
// import logoLightPng from "../../assets/images/logo-light.png";
// import logoLightSvg from "../../assets/images/logo-light.svg";
// import logoDark from "../../assets/images/logo-dark.png";


import logo from "../../assets/images/logic 3.png";
import logoLightPng from "../../assets/images/logic 1.png";
import logoLightSvg from "../../assets/images/logic 4.png";
import logoDark from "../../assets/images/logic 1.png";
import logo0 from "../../assets/images/latest/logo01.png";
import logo01 from "../../assets/images/latest/logo02.png";

const Sidebar = props => {

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/dashboard" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo0} alt="" height="35" />
              {/* <h2 style={{color:"#fff",padding:" 19px 0px 12px 0px"}}>Logic Cars Admin</h2> */}
            </span>
            <span className="logo-lg">
              <img src={logo01} alt="" height="17" />
              {/* <h2 style={{color:"#fff",padding:" 19px 0px 12px 0px"}}>Logic Cars Admin</h2> */}
            </span>
          </Link>

          <Link to="/dashboard" className="logo logo-light">
            <span className="logo-sm">
              <img src={logo0} alt="" height="35" />
              {/* <h2 style={{color:"#fff",padding:" 19px 0px 12px 0px"}}>FC</h2> */}
            </span>
            <span className="logo-lg">
              <img  style={{width:"165px",height:"40px"}} src={logo01} alt="" height="25" />
              {/* <h2 style={{color:"#fff",padding:" 19px 0px 12px 0px"}} >Logic Cars Admin</h2> */}
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
