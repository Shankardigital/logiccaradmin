import React, { useEffect, useState } from "react"
import {
    Button,
    Card,
    Col,
    Container,
    FormGroup,
    Input,
    Row,
    Table,
    Modal,
    Form,
    Label,
    CardBody, Progress
} from "reactstrap"
import Breadcrumbs from "../components/Common/Breadcrumb"
import a7 from "../assets/images/users/a7.jpg"
import { useHistory } from "react-router-dom"

function ViewCarDetails() {

    let history = useHistory()

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="View Car Details" />
                    <Container>
                        <Row>
                            <Col xl="12">
                                <Button
                                    onClick={history.goBack}
                                    className="mb-1  m-1"
                                    style={{ float: "right" }}
                                    color="info"
                                >
                                    <i className="far fa-arrow-alt-circle-left"></i>
                                    Back
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <h5>
                                    Vechicle ID :
                                </h5>
                                <Card>
                                    <CardBody>

                                        <Row>
                                            <Col md={3}>
                                                <h6>Nissan</h6>
                                                <h5 style={{ color: 'black' }}>Sunny</h5>

                                            </Col>
                                            <Col md={3}>
                                                <h6>Monthly Pricing</h6>
                                                <h5 style={{ color: 'black' }}>AED 1790</h5>

                                            </Col>
                                            <Col md={3}>
                                                <h6>Mileage (in )</h6>
                                                <h5 style={{ color: 'black' }}>15072</h5>
                                            </Col>

                                        </Row>

                                        <Row className="mt-4">
                                            <Col md={3}>
                                                <h6>Vehicle ID:</h6>
                                                <h5 style={{ color: 'black' }}>Extra Mileage: 4500 KM</h5>

                                            </Col>
                                            <Col md={3}>
                                                <h6>
                                                    Plate No. DP-12280</h6>
                                                <h5 style={{ color: 'black' }}>Extra Mileage Price: AED 0.7</h5>

                                            </Col>
                                            <Col md={3}>
                                                <h6>Manufacturing Year: 2022</h6>
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col md={3}></Col>
                                            <Col md={6}>
                                                <img src={a7} width="200px"  ></img>
                                            </Col>
                                            <Col md={3}></Col>
                                        </Row>

                                        <Row>
                                            <Col md={2}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="mt-4 mb-4 text-center">
                                                            <i className="bx bxs-gas-pump"
                                                                style={{ fontSize: '25px', color: 'black' }}></i>
                                                            <br></br>
                                                            <h6>Petrol</h6>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md={3}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="mt-4 mb-4 text-center">
                                                            <i className="bx bx-git-pull-request"
                                                                style={{ fontSize: '25px', color: 'black' }}></i>
                                                            <br></br>
                                                            <h6>4 speed Automatic</h6>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md={2}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="mt-4 mb-4 text-center" >
                                                            <i className="bx bxs-time-five"
                                                                style={{ fontSize: '25px', color: 'black' }}></i>
                                                            <br></br>
                                                            <h6>1.5 cc</h6>

                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md={2}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="mt-4 mb-4 text-center" >
                                                            <i className="bx bx-radar"
                                                                style={{ fontSize: '25px', color: 'black' }}></i>
                                                            <br></br>
                                                            <h6>15072 km</h6>

                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <h4 style={{ color: 'black' }}>Overview</h4>
                                            <Col md={8}>
                                                <Table>
                                                    <thead>
                                                        <tr>
                                                            <td>Mileage (ARAI) kmpl</td>
                                                            <th className="text-end">kmpl</th>
                                                        </tr>
                                                        <tr>
                                                            <td>BHP</td>
                                                            <th className="text-end">rpm</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Torque</td>
                                                            <th className="text-end">13.7 kg-m/4,000 RPM rpm</th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                                <h4 style={{ color: 'black' }} className="mt-2 mb-2">More Info</h4>
                                                <Table>
                                                    <thead>
                                                        <tr>
                                                            <td>AM / FM Radio</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>CD / MP3 Player</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Power Windows</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Keyless Entry</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Bluetooth</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>AUX / USB Jack</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Dual Front Airbags</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Parking Sensors</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Seat Material</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>ABS Brakes with EBD</td>
                                                            <th className="text-end">YES</th>
                                                        </tr>

                                                    </thead>
                                                </Table>
                                            </Col>

                                            <Col md={4}>
                                                <h4 style={{ color: 'black' }}>Description</h4>

                                                <textarea className="form-contol w-100" style={{paddingBottom:"200px" ,background:'rgb(243,245,245)'}}>
        
                                                </textarea>
                                               <h6> <i className="bx bxs-map" style={{color: 'blue',fontSize:'15px' }}></i> Dubai, Business Bay</h6>

                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ViewCarDetails