import React, { useEffect, useState } from "react"
import {
  CardBody,
  Container,
  Row,
  Col,
  Card,
  Label,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Table,
} from "reactstrap"
import { Link } from "react-router-dom"
import Breadcrumbs from "../components/Common/Breadcrumb"
import { URL } from "../Apiurl"
import axios from "axios"
import classnames from "classnames"

const Carsveiw = () => {
  const [activeTab1, setactiveTab1] = useState("5")
  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab)
    }
  }
  const [form, setform] = useState([])

  const [form3, setform3] = useState([])
  const [form4, setform4] = useState([])

  const [imgs, setimgs] = useState([])
  const [imgs1, setimgs1] = useState([])

  const [form2, setform2] = useState([])

  const [price1, setprice1] = useState([])
  const [price2, setprice2] = useState([])
  const [price3, setprice3] = useState([])
  const [price4, setprice4] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const cursid = sessionStorage.getItem("carid")

  const getonecars = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", cursid)
    axios
      .post(URL.getonecars, dataArray, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        console.log(res.data)
        setform(res.data.carResult)

        setprice1(res.data.carResult.carPrices[0])
        setprice2(res.data.carResult.carPrices[1])
        setprice3(res.data.carResult.carPrices[2])
        setprice4(res.data.carResult.carPrices[3])

        setform2(res.data.carResult.carImage[0])
        setimgs(res.data.carResult.carImage)
        setimgs1(res.data.carResult.carRegisterImage)
        setform3(res.data.carResult.carSpecs)
        setform4(res.data.carResult.carFeatures)
      })
  }

  useEffect(() => {
    getonecars()
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="View Car Details" />

          <Row>
            <div>
              <Link to="/cars">
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
                    src={"http://103.186.185.77:5021/" + form2}
                    style={{ width: "100%", height: "220px" }}
                  />
                  <h5 className="mt-3">{form.driverName}</h5>
                  <p>{form.logDateCreated}</p>

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
                      {/* <NavItem>
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
                      </NavItem> */}
                    </Nav>
                  </div>
                </CardBody>
              </Card>
              

             
            </Col>
            <Col md={9}>
              <Card>
                <CardBody>
                  <TabContent activeTab={activeTab1} className="p-1 text-muted">
                    <TabPane tabId="5">
                      <Row>
                        <Col md={12}>
                          {" "}
                          <h4 className="mb-2">
                            Information of ({form.carModelName})
                          </h4>
                          <Row className="mt-4">
                            <Col md="6">
                              <ul className="verti-timeline list-unstyled">
                                {/* <li className="event-list">
                                  <div className="event-timeline-dot">
                                    <i className="bx bx-right-arrow-circle"></i>
                                  </div>
                                  <div className="d-flex">
                                    <div className="flex-grow-1">
                                      <div>
                                        <h6 className="font-size-14 mb-1">
                                          Branch :
                                        </h6>
                                        <p className="text-muted">
                                          {form.branchName}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </li> */}

                                <li className="event-list">
                                  <div className="event-timeline-dot">
                                    <i className="bx bx-right-arrow-circle"></i>
                                  </div>
                                  <div className="d-flex">
                                    <div className="flex-grow-1">
                                      <div>
                                        <h6 className="font-size-14 mb-1">
                                          Car Brand :
                                        </h6>
                                        <p className="text-muted">
                                          {form.carBrandName}
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
                                          Make (Year) :
                                        </h6>
                                        <p className="text-muted">
                                          {form.carMakeYear}
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
                                          Version :
                                        </h6>
                                        <p className="text-muted">
                                          {form.carVersion}
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
                                          Color :
                                        </h6>
                                        <p className="text-muted">
                                          {form.carColorAvailble}
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
                                          Boot Capacity :
                                        </h6>
                                        <p className="text-muted">
                                          {form.carBootCapacity}
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
                                          Security Deposite :
                                        </h6>
                                        <p className="text-muted">
                                          {form.securityDeposite}
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
                                          Car Type :
                                        </h6>
                                        <p className="text-muted">
                                          {form.carType}
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
                                          Model :
                                        </h6>
                                        <p className="text-muted">
                                          {form.carModelName}
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
                                          Car Reading :
                                        </h6>
                                        <p className="text-muted">
                                          {form.carReading}
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
                                          Engine Capacity :
                                        </h6>
                                        <p className="text-muted">
                                          {form.engineCapacity}
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
                                          Excess Calim Amount :
                                        </h6>
                                        <p className="text-muted">
                                          {form.excessCalimAmount}
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
                                          Car Registration Number :
                                        </h6>
                                        <p className="text-muted">
                                          {form.carRegistNumber}
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
                                          special Notes :
                                        </h6>
                                        <p className="text-muted">
                                          {form.specialNote}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </Col>
                          </Row>
                         
                        
                        </Col>
                      </Row>{" "}
                    </TabPane>
                    <TabPane tabId="6">
                      <Row>
                        <b>Car images</b>
                        <br />
                        {imgs.map((data, i) => (
                          <Col md={3} key={i} className="mt-3">
                            <img
                              src={"http://103.186.185.77:5021/" + data}
                              style={{
                                width: "95%",
                                height: "150px",
                                cursor: "pointer",
                              }}
                            />
                          </Col>
                        ))}
                      </Row>
                      <Row className="mt-3">
                        <b>Registration images</b>
                        <br />
                        {imgs1.map((data, i) => (
                          <Col md={3} key={i} className="mt-3">
                            <img
                              src={"http://103.186.185.77:5021/" + data}
                              style={{
                                width: "95%",
                                height: "150px",
                                cursor: "pointer",
                              }}
                            />
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Carsveiw
