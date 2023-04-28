import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col, Button } from "reactstrap"
import SimpleBar from "simplebar-react"


import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

//i18n
import { withTranslation } from "react-i18next"
import axios from "axios"

import { ToastContainer, toast } from "react-toastify"


// import toastr from "toastr";
// import "toastr/build/toastr.min.css";

const NotificationDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)
  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const [notification, setnotificationl] = useState([])
  const [notification1, setnotificationl1] = useState([])


  // const firebaseConfig = {
  //   apiKey: "AIzaSyApfXA4X_RY15S5Hq-wxYlzOs6-YfFOE80",
  //   authDomain: "react-test-3029f.firebaseapp.com",
  //   databaseURL: "https://react-test-3029f-default-rtdb.firebaseio.com",
  //   projectId: "react-test-3029f",
  //   storageBucket: "react-test-3029f.appspot.com",
  //   messagingSenderId: "547635026359",
  //   appId: "1:547635026359:web:2e0dde577ca138ef643032",
  //   measurementId: "G-3TP3S478Q5"
  // };
  // const fapp = initializeApp(firebaseConfig);
  // const messaging = getMessaging(fapp);

  // const [notifi, setnotifi] = useState([])

  // getToken(messaging, {
  //   vapidKey:
  //     "BCWe0EYdI17Qcl8G6_ZYD0XsoQcU4vnf_F5IL7ecc8qXFrCxIy2JHkCdSkBxrJeDXrECzNBEaduuIv1kr-YLei8",
  // })
  //   .then((currentToken) => {
  //     if (currentToken) {
  //       console.log("Firebase Token", currentToken);

  //     } else {
  //       console.log(
  //         "No registration token available. Request permission to generate one."
  //       );
  //     }
  //   })
  //   .catch((err) => {
  //     console.log("An error occurred while retrieving token. ", err);
  //   });

  // onMessage(messaging, (payload) => {
  //   console.log("Message received. ", payload);
  //   const data = payload.notification.body
  //   toast(data)
  //   setnotifi(payload.notification)
  // });


  useEffect(() => {
    getAllNotification()
  }, [])

  const getAllNotification = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/notify/getall-notification",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setnotificationl(res.data.notifyResult)
        setnotificationl1(res.data.notifyResult)
      })
  }

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
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

        <DropdownMenu className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> {props.t("Notifications")} </h6>
              </Col>
              <div className="col-auto">
                <Link to="/notification">
                  <a className="small"> View All</a>
                </Link>
              </div>
            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            {/* {notification.map((data, i) => ( */}
            <Link
              to="/notification"
              className="text-reset notification-item"
            // key={i}
            >
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="bx bx-cart" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">
                    {/* {props.t("Your order is placed")} */}
                    {/* {notifi.title} */}
                  </h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      {/* {props.t("If several languages coalesce the grammar")} */}
                      {/* {notifi.body} */}
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />{" "}
                      {/* {props.t("3 min ago")} */}
                      {/* {notifi.logDateCreated} */}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            {/* ))} */}

            {/* <Link to="/notification" className="text-reset notification-item">
              <div className="d-flex">
                <img
                  src={avatar3}
                  className="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">James Lemire</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      {props.t("It will seem like simplified English") + "."}
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      {props.t("1 hours ago")}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/notification" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="bx bx-badge-check" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">
                    {props.t("Your item is shipped")}
                  </h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      {props.t("If several languages coalesce the grammar")}
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />{" "}
                      {props.t("3 min ago")}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/notification" className="text-reset notification-item">
              <div className="d-flex">
                <img
                  src={avatar4}
                  className="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Salena Layfield</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      {props.t(
                        "As a skeptical Cambridge friend of mine occidental"
                      ) + "."}
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      {props.t("1 hours ago")}
                    </p>
                  </div>
                </div>
              </div>
            </Link> */}
          </SimpleBar>
          <div className="p-2 border-top d-grid">
            <Link
              className="btn btn-sm btn-link font-size-14 text-center"
              to="/notification"
            >
              <i className="mdi mdi-arrow-right-circle me-1"></i>
              <span key="t-view-more">{props.t("View More..")}</span>
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
      <ToastContainer />
    </React.Fragment>
  )
}

export default withTranslation()(NotificationDropdown)

NotificationDropdown.propTypes = {
  t: PropTypes.any,
}
