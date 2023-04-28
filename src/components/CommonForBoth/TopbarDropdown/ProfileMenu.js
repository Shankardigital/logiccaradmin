import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import { URL } from "../../../Apiurl"
import axios from "axios"

// users
import user1 from "../../../assets/images/users/avatar-1.jpg"

const ProfileMenu = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  const [username, setusername] = useState("Admin")
  const [admininfo, setadmininfo] = useState([])

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        setusername(obj.displayName)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        setusername(obj.username)
      }
    }
    // const items1 = JSON.parse(localStorage.getItem('authUser'));
    // setItems(items1);
    // setuserinfo(items1.user);
    adprofile()
  }, [props.success])

  const userdata = localStorage.getItem("authUser")

  const usernames = userdata.token

  const [items, setItems] = useState([])
  const [userinfo, setuserinfo] = useState([])
  const [userinfo1, setuserinfo1] = useState([])

  // setItems1(items.user)

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  var datas1 = data.user

  const adprofile = () => {
    var token = datas
    const adinfo = datas1.id
    const dataArray = new FormData()
    dataArray.append("_id", adinfo)
    axios
      .post(URL.adminprofile, dataArray, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        setadmininfo(res.data.profileResult)
        // setform1(res.data.profileResult)
      })
  }

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={"http://103.186.185.77:5021/" + admininfo.profilePic}
            alt=""
          />
          <span className="d-none d-xl-inline-block ms-2 me-1 text-white">
            {admininfo.name}{" "}
          </span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block text-white " />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            {props.t("Profile")}{" "}
          </DropdownItem>
          {/* <DropdownItem tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle me-1" />
            {props.t("My Wallet")}
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <span className="badge bg-success float-end">11</span>
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            {props.t("Settings")}
          </DropdownItem>
          <DropdownItem tag="a" href="auth-lock-screen">
            <i className="bx bx-lock-open font-size-16 align-middle me-1" />
            {props.t("Lock screen")}
          </DropdownItem> */}
          <div className="dropdown-divider" />
          <Link to="/logout" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
)
