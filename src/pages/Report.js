import React from "react"
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap"
import Breadcrumbs from "../components/Common/Breadcrumb"


function Report() {
    
  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

    return (
        <React.Fragment>

       {dats.reportsview == true || dats1 == "admin" ? (
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Booking Details" />
                    <Row>
                        <Col xl="12">
                            <Card>
                                <CardBody className="mt-4 " style={{ height: "200px" }}>
                                    <h4>AED 0<br></br>
                                        Earnings</h4>
                                    <div style={{ float: 'right' }}>
                                        <input type="date" className="form-control"></input>
                                        <br></br>
                                        <Button color="info" outline>Export</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="12">
                            <Card>
                                <CardBody className="mt-5 " style={{ height: "200px" }}>
                                    <h4>%<br></br>
                                        MAU Percentage :</h4>
                                    <div style={{ float: 'right' }}>
                                        <input type="date" className="form-control"></input>
                                        <br></br>
                                        <Button color="info" outline>Export</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="12">
                            <Card>
                                <CardBody className="mt-5 " style={{ height: "200px" }}>
                                    <h4>1.39 %<br></br>
                                        MAU Percentage (New Bookings):</h4>
                                    <div style={{ float: 'right' }}>
                                        <input type="date" className="form-control"></input>
                                        <br></br>
                                        <Button color="info" outline>Export</Button>
                                    </div>
                                </CardBody>
                            </Card>
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

export default Report