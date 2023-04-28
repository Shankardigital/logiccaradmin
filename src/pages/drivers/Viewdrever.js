import React, { useState, useEffect } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
  TabContent,
  TabPane,
  Modal,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import classnames from "classnames"
import "../../../src/common.css"
import { withRouter, Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import user1 from "../../assets/images/users/avatar-1.jpg"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton"
import { useSelector, useDispatch } from "react-redux"
// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"
import passport from "../../assets/images/latest/passport.jfif"
import card1 from "../../assets/images/latest/card1.jpeg"
import card2 from "../../assets/images/latest/card2.jpeg"
import visa from "../../assets/images/latest/visa.jpg"
import emirate from "../../assets/images/latest/emirate.jpg"

import axios from "axios"

import { ToastContainer, toast } from "react-toastify"
import { useHistory } from "react-router-dom"
import Driver from "./Driver"

const Addusers = () => {
  const [checked, setChecked] = useState(false)
  const [radioValue, setRadioValue] = useState("2")

  const radios = [
    { name: "deactive", value: "1" },
    { name: "Active", value: "2" },
  ]

  //meta title
  // document.title = "Stater Page | Logic Cars Admin";

  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
  }
  const [modal_small1, setmodal_small1] = useState(false)

  function tog_small1() {
    setmodal_small1(!modal_small1)
  }

  const dispatch = useDispatch()

  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [idx, setidx] = useState(1)

  const { error, success } = useSelector(state => ({
    error: state.Profile.error,
    success: state.Profile.success,
  }))

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName)
        setemail(obj.email)
        setidx(obj.uid)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username)
        setemail(obj.email)
        setidx(obj.uid)
      }
      setTimeout(() => {
        dispatch(resetProfileFlag())
      }, 3000)
    }
  }, [dispatch, success])

  const [form1, setform1] = useState([])

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: name || "",
      idx: idx || "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: values => {
      dispatch(editProfile(values))
    },
  })

  const [activeTab1, setactiveTab1] = useState("5")
  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab)
    }
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const [driver, setdriver] = useState([])
  console.log(driver)

  useEffect(() => {
    getdriver()
    getAllCountry()
  }, [])

  const getdriver = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", sessionStorage.getItem("driverid"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/driver/getdetailsbyid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setdriver(res.data.custResult)
        setform1(res.data.custResult)
      })
  }

  const [form, setform] = useState([])

  const handlechange = e => {
    const myform = { ...form }
    myform[e.target.name] = e.target.value
    setform(myform)
  }

  const [country, setcountry] = useState([])
  const getAllCountry = () => {
    var token = datas
    const dataArray = new FormData()
    // dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/country/getallactivecountry",
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcountry(res.data.activecountResult)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    addstaff()
  }

  const handlechange1 = e => {
    const myform = { ...form1 }
    myform[e.target.name] = e.target.value
    setform1(myform)
  }

  const addstaff = () => {
    var token = datas
    const driverid = sessionStorage.getItem("driverid")
    const dataArray = new FormData()
    dataArray.append("countryId", form1.countryId)
    dataArray.append("StateName", form1.StateName)
    dataArray.append("cityName", form1.cityName)
    dataArray.append("zipCode", form1.zipCode)
    dataArray.append("status", form1.status)
    dataArray.append("emailVerify", form1.emailVerify)
    dataArray.append("smsVerify", form1.smsVerify)

    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/driver/editdriveringfo" +
          "/" +
          driverid,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getdriver()
            setmodal_small1(false)
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const [IMGS, setIMGS] = useState([])

  console.log(IMGS)

  const getpopup = data => {
    setIMGS(data)
    tog_small()
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Driver Details" />

          <Row>
            <div>
              <Link to="/driver-list">
                <Button
                  className="mb-3"
                  style={{ float: "right" }}
                  color="info"
                >
                  <i className="far fa-arrow-alt-circle-left"></i> Back
                </Button>
              </Link>
            </div>
            <Col md={3}>
              <Card>
                <CardBody>
                  <img
                    style={{ width: "100%", height: "250px" }}
                    src={"http://103.186.185.77:5021/" + driver.profilePic}
                  />
                  <h5 className="mt-3">{driver.driverName}</h5>
                  <p>{driver.logDateCreated}</p>

                  <div className="mt-3">
                    <Nav pills className="navtab-bg nav-justified">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "5",
                          })}
                          onClick={() => {
                            toggle1("5")
                          }}
                        >
                          Details
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "6",
                          })}
                          onClick={() => {
                            toggle1("6")
                          }}
                        >
                          Documents
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={9}>
              <Row></Row>

              <Card className="mini-stats-wid">
                <CardHeader className="bg-white">
                  <CardTitle>
                    Information of {driver.driverName}{" "}
                    <div style={{ float: "right" }}>
                      {" "}
                      <button
                        className="btn btn-success m-1"
                        type="submit"
                        onClick={tog_small1}
                      >
                        Add Address <i className="fas fa-check-circle"></i>
                      </button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <TabContent activeTab={activeTab1} className="p-1 text-muted">
                    <TabPane tabId="5">
                      <Row>
                        <Col md={12}></Col>
                      </Row>
                      <div>
                        <Row>
                          <Col md="6">
                            <ul className="verti-timeline list-unstyled">
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Driver Name :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.driverName}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Mobile No :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.phone}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Email :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.email}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Branch Name :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.branchName}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Address :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.address}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        City :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.cityName}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        State :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.StateName}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Country :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.countryName}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Driving License Number :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.dlNumber}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Driving License Issued Date :
                                      </h6>
                                      <p className="text-muted">
                                        {" "}
                                        {driver.dlBackUAEIssueDate}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Emirates ID Expiry Date :
                                      </h6>
                                      <p className="text-muted">
                                        {" "}
                                        {driver.emiratesIdExpDate}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </Col>
                          <Col md="6">
                            <ul className="verti-timeline list-unstyled">
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Gender:
                                      </h6>
                                      <p className="text-muted">
                                        {driver.gender}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Date of Birth :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.dateOfBirth}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Email :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.email}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Resident Type :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.residentType}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Status :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.status == true ? (
                                          <p> Active</p>
                                        ) : (
                                          <p> InActive</p>
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        City :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.cityName}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Joined At :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.logDateCreated}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Country :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.countryName}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Zip/Postal :
                                      </h6>
                                      <p className="text-muted">
                                        {driver.zipCode}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        SMS Verification :
                                      </h6>
                                      <p className="text-muted">
                                        {" "}
                                        {driver.smsVerify == true ? (
                                          <p> Verified</p>
                                        ) : (
                                          <p> Not Verified</p>
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="event-list">
                                <div className="event-timeline-dot">
                                  <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                  <div className="flex-grow-1">
                                    <div>
                                      <h6 className="font-size-14 mb-1">
                                        Driving License Expiry Date :
                                      </h6>
                                      <p className="text-muted">
                                        {" "}
                                        {driver.dlBackUAEExpDate}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </TabPane>
                    <TabPane tabId="6">
                      <Row>
                        {driver.passportFront == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Passport Front</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.passportFront)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.passportFront
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {driver.passportBack == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Passport Back</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.passportBack)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.passportBack
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {driver.passportVisa == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Passport Visa</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.passportVisa)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.passportVisa
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}{" "}
                        {driver.visaCopy == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Passport Visa</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.visaCopy)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.visaCopy
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}{" "}
                        {driver.emiratesIdFront == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>
                                Passport Emirates IDEmirates ID Front
                              </small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.emiratesIdFront)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.emiratesIdFront
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}{" "}
                        {driver.emiratesIdBack == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Passport Emirates ID Back</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.emiratesIdBack)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.emiratesIdBack
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}{" "}
                        {driver.dlfrontUAE == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>UAE Driving License Front</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.dlfrontUAE)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.dlfrontUAE
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}{" "}
                        {driver.dlBackUAE == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>UAE Driving License Back</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.dlBackUAE)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.dlBackUAE
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {driver.idCardFront == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>UAE Driving License Back</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.idCardFront)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.idCardFront
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {driver.idCardBack == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>UAE Driving License Back</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.idCardBack)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  driver.idCardBack
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {driver.dlFront == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>UAE Driving License Back</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.dlFront)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" + driver.dlFront
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {driver.dlBack == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>UAE Driving License Back</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(driver.dlBack)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" + driver.dlBack
                                }
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ToastContainer />
        </Container>

        <Modal
          centered
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small(false)
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Form>
              <div>
                <img
                  src={"http://103.186.185.77:5021/" + IMGS}
                  style={{ width: "100%", height: "350px", cursor: "pointer" }}
                />
              </div>
            </Form>
          </div>
        </Modal>

        <Modal
          size="modal-lg"
          centered
          isOpen={modal_small1}
          toggle={() => {
            tog_small1()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Add Address
            </h5>
            <button
              onClick={() => {
                setmodal_small1(false)
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Form
              onSubmit={e => {
                handleSubmit(e)
              }}
            >
              <Row className="mt-3">
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">Country</Label>
                    <select
                      className="form-select "
                      value={form1.countryId}
                      name="countryId"
                      onChange={e => {
                        handlechange1(e)
                      }}
                    >
                      <option value="">select</option>
                      {country.map((data, key) => {
                        return (
                          <option key={key} value={data._id}>
                            {data.countryName}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">State</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      placeholder="Enter State"
                      value={form1.StateName}
                      name="StateName"
                      onChange={e => {
                        handlechange1(e)
                      }}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">City</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      placeholder="Enter City"
                      required
                      value={form1.cityName}
                      name="cityName"
                      onChange={e => {
                        handlechange1(e)
                      }}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">Zip/Postal</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Zip/Postal"
                      value={form1.zipCode}
                      name="zipCode"
                      onChange={e => {
                        handlechange1(e)
                      }}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      Status <span className="text-danger">*</span>
                    </Label>
                    <br />
                    <select
                      className="form-select"
                      value={form1.status}
                      name="status"
                      onChange={e => {
                        handlechange1(e)
                      }}
                    >
                      <option value="">Select</option>
                      <option value="true">Active</option>
                      <option value="false">In-active</option>
                    </select>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      Email Verification <span className="text-danger">*</span>
                    </Label>
                    <select
                      className="form-select"
                      value={form1.emailVerify}
                      name="emailVerify"
                      onChange={e => {
                        handlechange1(e)
                      }}
                    >
                      <option value="">Select</option>
                      <option value="true">Verified</option>
                      <option value="false">Unverified</option>
                    </select>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      SMS Verification <span className="text-danger">*</span>
                    </Label>
                    <select
                      className="form-select"
                      value={form1.smsVerify}
                      name="smsVerify"
                      onChange={e => {
                        handlechange1(e)
                      }}
                    >
                      <option value="">Select</option>
                      <option value="true">Verified</option>
                      <option value="false">Unverified</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <div className="mt-3" style={{ float: "right" }}>
                <button
                  style={{ width: "120px" }}
                  className="btn btn-success m-1"
                  type="submit"
                >
                  Submit <i className="fas fa-check-circle"></i>
                </button>
                <Button
                  onClick={() => {
                    setmodal_small1(false)
                  }}
                  color="danger"
                  type="button"
                >
                  Cancel <i className="fas fa-times-circle"></i>
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default Addusers
