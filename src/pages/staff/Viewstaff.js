import React, { useState, useEffect } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
  Table,
  Pagination,
  TabContent,
  TabPane,
  FormGroup,
  PaginationItem,
  FormFeedback,
  PaginationLink,
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
    removeBodyCss()
  }

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
      title: "Total Vehicle ",
      icon: "bx bxs-car",
      color: "primary",
      value: "20",
      // desc: "- 4.102 ( 0.1 % )",
      //   series: series2,
      //   options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "Upcoming Vehicle ",
      icon: "bx bxs-car",
      color: "info",
      value: "22",
      // desc: "+ 1.792 ( 0.1 % )",
      //   series: series3,
      //   options: options3,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "Running Vehicle ",
      icon: "bx bxs-car",
      color: "warning",
      value: " 86",
      // desc: "+ 0.0012 ( 0.2 % )",
      //   series: series1,
      //   options: options1,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "Completed Vehicle ",
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

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const [user, setuser] = useState([])
  console.log(user)

  useEffect(() => {
    getstaff()
  }, [])

  const getstaff = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", sessionStorage.getItem("staffid"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/staff/getstaffbyid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setuser(res.data.staffMember)
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Staff Details" />

          <Row>
            <div>
              <Link to="/staff-list">
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
                    style={{ width: "100%", height: "220px" }}
                    src={"http://103.186.185.77:5021/" + user.profilePic}
                  />
                  <h5 className="mt-3">{user.name}</h5>
                  <p>{user.logDateCreated}</p>

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
                    </Nav>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={9}>
              <Card>
                <CardHeader className="bg-white">
                  <CardTitle>Information of ({user.staffName})</CardTitle>
                </CardHeader>
                <CardBody>
                  <TabContent activeTab={activeTab1} className="p-1 text-muted">
                    <TabPane tabId="5">
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
                                        {user.branchName}
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
                                        Department Name :
                                      </h6>
                                      <p className="text-muted">
                                        {user.departmentName}
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
                                        Designation Name :
                                      </h6>
                                      <p className="text-muted">
                                        {user.designationName}
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
                                        Staff Name :
                                      </h6>
                                      <p className="text-muted">
                                        {user.name}
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
                                      <p className="text-muted">{user.phone}</p>
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
                                      <p className="text-muted">{user.email}</p>
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
                                        {user.gender}
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
                                        Date of Birth:
                                      </h6>
                                      <p className="text-muted">
                                        {user.dateOfBirth}
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
                                        {user.countryName}
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
                                      <p className="text-muted">{user.state}</p>
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
                                      <p className="text-muted">{user.city}</p>
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
                                        {user.zipCode}
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
                                        {user.joinedAt}
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
                                        {user.address}
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
                        <Col md={4}>
                          <small>Passport Front</small>
                          <br />
                          <img
                            onClick={tog_small}
                            src={passport}
                            style={{
                              width: "200px",
                              height: "150px",
                              cursor: "pointer",
                            }}
                          />
                        </Col>
                        <Col md={4}>
                          <small>Passport Back</small>
                          <br />
                          <img
                            onClick={tog_small}
                            src={passport}
                            style={{
                              width: "200px",
                              height: "150px",
                              cursor: "pointer",
                            }}
                          />
                        </Col>
                        <Col md={4}>
                          <small>Passport Visa</small>
                          <br />
                          <img
                            onClick={tog_small}
                            src={visa}
                            style={{
                              width: "200px",
                              height: "150px",
                              cursor: "pointer",
                            }}
                          />
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col md={4}>
                          <small>Passport Emirates IDEmirates ID Front</small>
                          <br />
                          <img
                            onClick={tog_small}
                            src={emirate}
                            style={{
                              width: "200px",
                              height: "150px",
                              cursor: "pointer",
                            }}
                          />
                        </Col>
                        <Col md={4}>
                          <small>Passport Emirates ID Back</small>
                          <br />
                          <img
                            onClick={tog_small}
                            src={emirate}
                            style={{
                              width: "200px",
                              height: "150px",
                              cursor: "pointer",
                            }}
                          />
                        </Col>
                        <Col md={4}>
                          <small>UAE Driving License Front</small>
                          <br />
                          <img
                            onClick={tog_small}
                            src={card2}
                            style={{
                              width: "200px",
                              height: "150px",
                              cursor: "pointer",
                            }}
                          />
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col md={4}>
                          <small>UAE Driving License Back</small>
                          <br />
                          <img
                            onClick={tog_small}
                            src={card1}
                            style={{
                              width: "200px",
                              height: "150px",
                              cursor: "pointer",
                            }}
                          />
                        </Col>
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
                  src={passport}
                  style={{ width: "100%", height: "350px", cursor: "pointer" }}
                />
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default Addusers
