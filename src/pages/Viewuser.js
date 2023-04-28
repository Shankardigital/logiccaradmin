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
import "../../src/common.css"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"
import { useSelector, useDispatch } from "react-redux"
// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"
import card1 from "../assets/images/latest/userimg.png"
import { ToastContainer, toast } from "react-toastify"
import { URL } from "../Apiurl"
import axios from "axios"


import { useHistory } from "react-router-dom"

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

  const reportstest = [
    // {
    //   title: "Total Users",
    //   icon: "mdi mdi-bitcoin",
    //   color: "warning",
    //   value: "$ 57,986.76",
    //   // desc: "+ 0.0012 ( 0.2 % )",
    //   series: series1,
    //   options: options1,
    //   arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    // },
    {
      title: "Total Bookings ",
      icon: "bx bxs-car",
      color: "primary",
      value: "20",
      // desc: "- 4.102 ( 0.1 % )",
      //   series: series2,
      //   options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "Upcoming Bookings ",
      icon: "bx bxs-car",
      color: "info",
      value: "22",
      // desc: "+ 1.792 ( 0.1 % )",
      //   series: series3,
      //   options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "Running Bookings",
      icon: "bx bxs-car",
      color: "warning",
      value: " 86",
      // desc: "+ 0.0012 ( 0.2 % )",
      //   series: series1,
      //   options: options1,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "Completed Bookings ",
      icon: "bx bxs-car",
      color: "success",
      value: " 57",
      // desc: "+ 0.0012 ( 0.2 % )",
      //   series: series4,
      //   options: options4,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
  ]

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

  const [form, setform] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  console.log(datas)

  const getAllcountries = () => {
    var token = datas
    axios
      .post(
        URL.allcountries,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        console.log(res.data)
        setcount(res.data.countriesResult)
      })
  }
  const [form1, setform1] = useState([])

  const custid = sessionStorage.getItem("dataid")

  const getonecustomer = () => {
    var token = datas
    const dataArray = new FormData()

    dataArray.append("_id", custid)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/customer/getdetailsbyid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform1(res.data.customerResult)
        setform(res.data.customerResult)
      })
  }

  useEffect(() => {
    getAllCountry()
    getonecustomer()
  }, [])

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

  const [IMGS, setIMGS] = useState([])

  console.log(IMGS)

  const getpopup = data => {
    setIMGS(data)
    tog_small()
  }

  function tog_small() {
    setmodal_small(!modal_small)
  }

  const [modal_small1, setmodal_small1] = useState(false)

  function tog_small1() {
    setmodal_small1(!modal_small1)
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
    const driverid = sessionStorage.getItem("dataid")
    const dataArray = new FormData()
    dataArray.append("countryId", form1.countryId)
    dataArray.append("stateName", form1.stateName)
    dataArray.append("cityName", form1.cityName)
    dataArray.append("zipCode", form1.zipCode)
    dataArray.append("status", form1.status)
    dataArray.append("address", form1.address)
    dataArray.append("emaiVerify", form1.emaiVerify)
    dataArray.append("smsVerify", form1.smsVerify)

    axios
      .patch(
        "http://103.186.185.77:5021/api/v1/admin/customer/updatecustomerinview" +
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
            setmodal_small1(false)
            getonecustomer()
            // clearForm()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  let history = useHistory()

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Customer Details" />

          <Row>
            <div>
              {/* <Link to="/users-list"> */}
                <Button
                 onClick={history.goBack}
                  className="mb-3"
                  style={{ float: "right" }}
                  color="info"
                >
                  <i className="far fa-arrow-alt-circle-left"></i> Back
                </Button>
              {/* </Link> */}
            </div>
            <Row>
              {/* {reportstest.map((report, key) => (
                <Col key={key}>
                  <Card className="p-2">
                    <Row>
                      <Col xs="3">
                        <p className="text-muted mb-4">
                          <i
                            className={
                              report.icon +
                              " h2 text-" +
                              report.color +
                              " align-middle mb-0 me-3"
                            }
                          />{" "}
                        </p>
                      </Col>
                      <Col xs="9">
                        <div>
                          <h5 className="text-center mt-2">{report.value}</h5>
                        </div>
                      </Col>
                      <p>{report.title}</p>
                    </Row>
                  </Card>
                </Col>
              ))} */}
            </Row>
            <Col md={3}>
              <Card>
                <CardBody>
                  {form.profilePic == "" ? (
                    <img style={{ height: "220px" ,}} src={card1} />
                  ) : (
                    <img
                      style={{height: "220px" ,width:"100%"}}
                      src={"http://103.186.185.77:5021/" + form.profilePic}
                    />
                  )}
                  <h5 className="mt-3">{form.customerName}</h5>
                  <p>Joined At {form.logDateCreated}</p>

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
              <Card>
                <CardHeader className="bg-white">
                  <CardTitle>
                    Information of ({form.customerName})
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
                      <div>
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
                                          Branch Name :
                                        </h6>
                                        <p className="text-muted">
                                          {form.branchName}
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
                                          User Name :
                                        </h6>
                                        <p className="text-muted">
                                          {form.customerName}
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
                                          {form.phone}
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
                                          {form.email}
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
                                          {form.address}
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
                                          Gender :
                                        </h6>
                                        <p className="text-muted">
                                          {form.gender == "M"
                                            ? "Male"
                                            : "Female"}
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
                                          {form.dateOfBirth}
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
                                          Occupation :
                                        </h6>
                                        <p className="text-muted">
                                          {form.occupation}
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
                                          Occupation Details :
                                        </h6>
                                        <p className="text-muted">
                                          {form.occupationdetails}
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
                                          {" "}
                                          {form.dlNumber}
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
                                          Driving License Issue Date :
                                        </h6>
                                        <p className="text-muted">
                                          {" "}
                                          {form.dlIssueDate}
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
                                          Driving License ExpiryDate :
                                        </h6>
                                        <p className="text-muted">
                                          {" "}
                                          {form.dlExpiryDate}
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
                                          Resident Type :
                                        </h6>
                                        <p className="text-muted">
                                          {" "}
                                          {form.residentType}
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
                                          Address:
                                        </h6>
                                        <p className="text-muted">
                                          {form.address}
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
                                          ZipCode :
                                        </h6>
                                        <p className="text-muted">
                                          {form.zipCode}
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
                                          Country Name :
                                        </h6>
                                        <p className="text-muted">
                                          {form.countryName}
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
                                          State Name :
                                        </h6>
                                        <p className="text-muted">
                                          {form.stateName}
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
                                          CityName :
                                        </h6>
                                        <p className="text-muted">
                                          {form.cityName}
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
                                          Emirates Id Exp :
                                        </h6>
                                        <p className="text-muted">
                                          {form.emiratesIdExp}
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
                                          Passport Issue Date :
                                        </h6>
                                        <p className="text-muted">
                                          {form.passportIssueDate}
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
                                          Passport Exp Date :
                                        </h6>
                                        <p className="text-muted">
                                          {form.passportExpDate}
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
                                          Email Verify :
                                        </h6>
                                        <p className="text-muted">
                                          {form.emaiVerify == true
                                            ? "Active"
                                            : "Inactive"}
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
                                          Sms Verify :
                                        </h6>
                                        <p className="text-muted">
                                          {" "}
                                          {form.smsVerify == true
                                            ? "Active"
                                            : "Inactive"}
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
                                          {" "}
                                          {form.status == true
                                            ? "Active"
                                            : "Inactive"}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </TabPane>

                    <TabPane tabId="6">
                      <Row className="mt-3">
                        {form.passportCopy == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Passport Copy</small>
                              <br />
                              <img
                                // onClick={tog_small(form.passportCopy)}
                                onClick={() => {
                                  getpopup(form.passportCopy)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  form.passportCopy
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {form.passportIdFront == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Passport Id Front</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.passportIdFront)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  form.passportIdFront
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}

                        {form.passportIdBack == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Passport Id Back</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.passportIdBack)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  form.passportIdBack
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {form.occupationIdCard == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Occupation Id Card</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.occupationIdCard)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  form.occupationIdCard
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}

                        {form.emiratesIdFront == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>Emirates Id Front</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.emiratesIdFront)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  form.emiratesIdFront
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {form.dlFront == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>dlFront</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.dlFront)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" + form.dlFront
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}

                        {form.dlBack == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>dlBack</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.dlBack)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" + form.dlBack
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {form.interDlBack == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>interDlBack</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.interDlBack)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  form.interDlBack
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}

                        {form.residencyVisa == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>residencyVisa</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.residencyVisa)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  form.residencyVisa
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {form.visaCopy == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>visaCopy</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.visaCopy)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" + form.visaCopy
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {form.emiratesIdBack == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>emiratesIdBack</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.emiratesIdBack)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  form.emiratesIdBack
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {form.dlfrontUAE == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>dlfrontUAE</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.dlfrontUAE)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" +
                                  form.dlfrontUAE
                                }
                                style={{
                                  width: "80%",
                                  height: "150px",
                                  cursor: "pointer",
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {form.dlBackUAE == "" ? (
                          ""
                        ) : (
                          <>
                            <Col md={4}>
                              <small>dlBackUAE</small>
                              <br />
                              <img
                                onClick={() => {
                                  getpopup(form.dlBackUAE)
                                }}
                                src={
                                  "http://103.186.185.77:5021/" + form.dlBackUAE
                                }
                                style={{
                                  width: "80%",
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
        </Container>

        <Modal
          size="sm"
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
                      value={form1.stateName}
                      name="stateName"
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
                    <Label for="basicpill-firstname-input1">Address</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Zip/Postal"
                      value={form1.address}
                      name="address"
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
                      value={form1.emaiVerify}
                      name="emaiVerify"
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
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

// src={
//   "http://103.186.185.77:5021/" +
//   form.passportCopy
// }

export default Addusers
