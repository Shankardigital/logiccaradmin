import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Input,
  Table,
  Button,
  Label,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardText
} from "reactstrap"
import ReactApexChart from "react-apexcharts"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios"
import ReactPaginate from "react-paginate"
import { useHistory } from "react-router-dom"


import classnames from "classnames";


function NonRental() {
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
      contants()
    }
  };

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  var dats = data.rolesAndPermit
  var dats1 = data.user.role


  return (
    <React.Fragment>
       {dats.nonrentalview == true || dats1 == "admin" ? (
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Dashboards"
            breadcrumbItem=
            {
              customActiveTab == "1" ? "SALIK REPORT" : ""
                ||
                customActiveTab == "2" ? "TRAFFIC FINES" : ""
                  ||
                  customActiveTab == "3" ? "INSURANCE CHARGES" : ""
                    ||
                    customActiveTab == "4" ? "FUEL CHARGES" : ""
                      ||
                      customActiveTab == "5" ? "EXCEEDED MILEAGE CHARGES" : ""
                        ||
                        customActiveTab == "6" ? "DAMAGE CHARGES" : ""
                          ||
                          customActiveTab == "7" ? "RECURRING PAYMENTS" : ""}

          />
          
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Col lg={12}>
                    <Nav tabs className="nav-tabs-custom ">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "1",
                          })}
                          onClick={() => {
                            toggleCustom("1");
                          }}
                        >
                          <span className="d-block d-sm-none ">
                            <i className="fas fa-home"></i>
                          </span>
                          <span className="d-none d-sm-block " >SALIK REPORT</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "2",
                          })}
                          onClick={() => {
                            toggleCustom("2");
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-user"></i>
                          </span>
                          <span className="d-none d-sm-block">TRAFFIC FINES</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "3",
                          })}
                          onClick={() => {
                            toggleCustom("3");
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-user"></i>
                          </span>
                          <span className="d-none d-sm-block">INSURANCE CHARGES</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "4",
                          })}
                          onClick={() => {
                            toggleCustom("4");
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-user"></i>
                          </span>
                          <span className="d-none d-sm-block">FUEL CHARGES</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "5",
                          })}
                          onClick={() => {
                            toggleCustom("5");
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-user"></i>
                          </span>
                          <span className="d-none d-sm-block">EXCEEDED MILEAGE CHARGES</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "6",
                          })}
                          onClick={() => {
                            toggleCustom("6");
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-user"></i>
                          </span>
                          <span className="d-none d-sm-block">DAMAGE CHARGES</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "7",
                          })}
                          onClick={() => {
                            toggleCustom("7");
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-user"></i>
                          </span>
                          <span className="d-none d-sm-block">RECURRING PAYMENTS</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </CardBody>
              </Card>
              <TabContent
                activeTab={customActiveTab}
                className="p-3 text-muted"
              >
                <TabPane tabId="1">
                  <Row>
                    <Col md={2}>

                      <Card>
                        <CardBody>
                          <p>Records</p>
                          <h3 style={{ fontWeight: 'bold', color: 'black' }}>0</h3>

                        </CardBody>
                      </Card>

                    </Col>

                    <Col md={3}>

                      <Card>
                        <CardBody>
                          <p>Pending to process</p>
                          <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                        </CardBody>
                      </Card>

                    </Col>

                    <Col md={3}>

                      <Card>
                        <CardBody>
                          <p>Processed</p>
                          <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                        </CardBody>
                      </Card>

                    </Col>


                    <Col md={2}>
                      <div className="mb-3">

                        <select
                          name="status"
                          className="form-select"
                        >
                          <option value="">Needs attention</option>
                          <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                          <option value="Customer Doc Not valid">No Cars Available</option>
                        </select>
                      </div>
                      <Button className="m-1" color="primary" type="submit">
                        Download Format
                      </Button>
                    </Col>
                    <Col md={2}>
                      <div className="mb-3">

                        <select
                          name="status"
                          className="form-select"
                        >
                          <option value="">Select Month</option>
                          <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                          <option value="Customer Doc Not valid">No Cars Available</option>
                        </select>
                      </div>
                      <Button className="m-1" color="primary" type="submit">
                        Process Charges
                      </Button>
                    </Col>


                  </Row>
                </TabPane>

                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <Row>
                        <Col md={2}>

                          <Card>
                            <CardBody >
                              <p>Records</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>0</h3>

                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Pending to process</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Processed</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Needs attention</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Download Format
                          </Button>
                        </Col>
                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Select Month</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Process Charges
                          </Button>
                        </Col>
                      </Row>

                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <Row>
                        <Col md={2}>

                          <Card>
                            <CardBody >
                              <p>Records</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>0</h3>

                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Pending to process</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Processed</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Needs attention</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Download Format
                          </Button>
                        </Col>
                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Select Month</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Process Charges
                          </Button>
                        </Col>
                      </Row>

                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">

                      <Row>
                        <Col md={2}>

                          <Card>
                            <CardBody >
                              <p>Records</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>0</h3>

                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Pending to process</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Processed</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Needs attention</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Download Format
                          </Button>
                        </Col>
                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Select Month</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Process Charges
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="5">
                  <Row>
                    <Col sm="12">
                      <Row>
                        <Col md={2}>

                          <Card>
                            <CardBody >
                              <p>Records</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>0</h3>

                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Pending to process</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Processed</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Needs attention</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Download Format
                          </Button>
                        </Col>
                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Select Month</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Process Charges
                          </Button>
                        </Col>
                      </Row>

                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="6">
                  <Row>
                    <Col sm="12">
                      <Row>
                        <Col md={2}>

                          <Card>
                            <CardBody >
                              <p>Records</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>0</h3>

                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Pending to process</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Processed</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Needs attention</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Download Format
                          </Button>
                        </Col>
                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Select Month</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Process Charges
                          </Button>
                        </Col>
                      </Row>

                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="7">
                  <Row>
                    <Col sm="12">
                      <Row>
                        <Col md={2}>

                          <Card>
                            <CardBody >
                              <p>Records</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>0</h3>

                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Pending to process</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>

                        <Col md={3}>

                          <Card>
                            <CardBody>
                              <p>Processed</p>
                              <h3 style={{ fontWeight: 'bold', color: 'black' }}>AED 0</h3>
                            </CardBody>
                          </Card>

                        </Col>
                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Needs attention</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Download Format
                          </Button>
                        </Col>
                        <Col md={2}>
                          <div className="mb-3">

                            <select
                              name="status"
                              className="form-select"
                            >
                              <option value="">Select Month</option>
                              <option value="Customer Doc Not valid">Customer Doc Not valid</option>
                              <option value="Customer Doc Not valid">No Cars Available</option>
                            </select>
                          </div>
                          <Button className="m-1" color="primary" type="submit">
                            Process Charges
                          </Button>
                        </Col>

                      </Row>

                    </Col>
                  </Row>
                </TabPane>



              </TabContent>

            </Col>



          </Row>


        </Container>
      </div>
       ) : (
        <Card>
            <h5 className="text-center p-1">You don't have permission to access</h5>
        </Card>
    )}
    </React.Fragment>
  )
}

export default NonRental