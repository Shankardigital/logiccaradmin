import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"
import megamenuImg from "../../assets/images/megamenu-img.png"

// import images
import github from "../../assets/images/brands/github.png"
import bitbucket from "../../assets/images/brands/bitbucket.png"
import dribbble from "../../assets/images/brands/dribbble.png"
import dropbox from "../../assets/images/brands/dropbox.png"
import mail_chimp from "../../assets/images/brands/mail_chimp.png"
import slack from "../../assets/images/brands/slack.png"

import logo from "../../assets/images/logo.svg"
import logoLightSvg from "../../assets/images/logic 4.png"
import logo0 from "../../assets/images/latest/logo01.png"

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions"

import axios from "axios"

const Header = props => {
  const [search, setsearch] = useState(false)
  const [megaMenu, setmegaMenu] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  function tToggle() {
    var body = document.body
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable")
    } else {
      body.classList.toggle("vertical-collpsed")
      body.classList.toggle("sidebar-enable")
    }
  }

  useEffect(() => {
    getAllbranch()
  }, [])

  const [form, setform] = useState([])

  const [branch, setbranch] = useState([])

  // const city = dataz.

  var gets = localStorage.getItem("authUser")
  var dataz = JSON.parse(gets)
  var datas = dataz.token
  var citydata = dataz.city
  console.log(citydata)
  
  const getAllbranch = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/branch/getallactivebranches",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbranch(res.data.profiles)
        // localStorage.setItem("ids", res.data.profiles[0]._id)
        // localStorage.setItem("ids", res.data.profiles[0]._id)
      })
  }

  const [branch1, setbranch1] = useState([])

  const handlechange = e => {
    const myform = { ...form }
    myform[e.target.name] = e.target.value
    setform(myform)

    var token = datas

    const dataArray = new FormData()
    dataArray.append("_id", e.target.value)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/branch/getBranch",
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbranch1(res.data.profiles)
        localStorage.setItem("ids", res.data.profile._id)
        setTimeout(() => {
          window.location.reload(false)
        }, 100)
        console.log("page to reload")
      })
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box d-lg-none d-md-block">
              <Link to="/dashboard" className="logo logo-dark">
                <span className="logo-sm">
                  {/* <img src={logo} alt="" height="35" /> */}
                  <h2 style={{ color: "#fff" }}>FC</h2>
                </span>
              </Link>

              <Link to="/dashboard" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logo0} alt="" height="35" />
                  {/* <h2 style={{color:"#fff"}}>FC</h2> */}
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                tToggle()
              }}
              className="btn btn-sm px-3 font-size-16 header-item "
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            <form className="app-search d-none d-lg-block">
              {/* <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Search") + "..."}
                />
                <span className="bx bx-search-alt" />
              </div> */}
            </form>

            {/* <Dropdown
              className="dropdown-mega d-none d-lg-block ms-2"
              isOpen={megaMenu}
              toggle={() => {
                setmegaMenu(!megaMenu);
              }}
            >
              <DropdownToggle
                className="btn header-item "
                caret
                tag="button"
              >
                {" "}
                {props.t("Mega Menu")} <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu">
                <Row>
                  <Col sm={8}>
                    <Row>
                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          {props.t("UI Components")}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{props.t("Lightbox")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Range Slider")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Sweet Alert")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Rating")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Forms")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Tables")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Charts")}</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          {props.t("Applications")}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{props.t("Ecommerce")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Calendar")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Email")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Projects")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Tasks")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Contacts")}</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          {props.t("Extra Pages")}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{props.t("Light Sidebar")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Compact Sidebar")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Horizontal layout")}</Link>
                          </li>
                          <li>
                            <Link to="#"> {props.t("Maintenance")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Coming Soon")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Timeline")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("FAQs")}</Link>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={4}>
                    <Row>
                      <Col sm={6}>
                        <h5 className="font-size-14 mt-0">
                          {props.t("UI Components")}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{props.t("Lightbox")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Range Slider")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Sweet Alert")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Rating")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Forms")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Tables")}</Link>
                          </li>
                          <li>
                            <Link to="#">{props.t("Charts")}</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col sm={5}>
                        <div>
                          <img
                            src={megamenuImg}
                            alt=""
                            className="img-fluid mx-auto d-block"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DropdownMenu>
            </Dropdown> */}
          </div>
          <div className="d-flex">
            {/* <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                onClick={() => {
                  setsearch(!search)
                }}
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  search
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}

            {/* <LanguageDropdown /> */}

            {/* <Dropdown
              className="d-none d-lg-inline-block ms-1"
              isOpen={socialDrp}
              toggle={() => {
                setsocialDrp(!socialDrp);
              }}
            >
              <DropdownToggle
                className="btn header-item noti-icon "
                tag="button"
              >
                <i className="bx bx-customize" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                <div className="px-lg-2">
                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={github} alt="Github" />
                        <span>GitHub</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={bitbucket} alt="bitbucket" />
                        <span>Bitbucket</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dribbble} alt="dribbble" />
                        <span>Dribbble</span>
                      </Link>
                    </Col>
                  </Row>

                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dropbox} alt="dropbox" />
                        <span>Dropbox</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={mail_chimp} alt="mail_chimp" />
                        <span>Mail Chimp</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={slack} alt="slack" />
                        <span>Slack</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen();
                }}
                className="btn header-item noti-icon "
                data-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen" />
              </button>
            </div> */}

            {/* <select className="form-select mt-3" style={{width:"120px", height:"40px"}}>
              <option value="Dubai">Dubai</option>
              <option value="AbuDubai">Abu Dhabi</option>
            </select> */}

            {/* <NotificationDropdown /> */}
            <select
              className="form-select mt-3"
              style={{ width: "140px", height: "40px" }}
              value={form.branchid}
              name="branchid"
              onChange={(e) => { handlechange(e)}}
            // defaultValue={branch1}
            >
              {" "}
              <option value="">Select</option>
              {citydata.map((data, key) => {
                return (
                  <option
                    key={key}
                    value={data.value}
                    // selected={localStorage.getItem("ids") == data._id}
                  >
                    {data.label}
                  </option>
                )
              })}
            </select>

            {/* <NotificationDropdown /> */}
            <Link to="/notification">
              <DropdownToggle
                className="btn header-item noti-icon"
                tag="button"
                id="page-header-notifications-dropdown"
              >
                <i className="bx bx-bell bx-tada" />
                <span className="badge bg-danger rounded-pill">
                  {/* {notifi.length} */}
                </span>
              </DropdownToggle>
            </Link>
            <ProfileMenu />

            {/* <div
               onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar);
              }}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle "
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu, leftSideBarType } =
    state.Layout
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header))
