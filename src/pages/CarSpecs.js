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
    CardBody, Progress, CardTitle
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Badge from "react-bootstrap/Badge"
import Dropzone from "react-dropzone"
import Addcarsxl from '../assets/images/addcarsxl.csv'
import { saveAs } from 'file-saver';
import a7 from "../assets/images/users/a7.jpg"

function CarSpecs() {
    let history = useHistory()
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Inventory" />
                    <Container>

                        <Row>
                            <div>

                                <Button
                                    onClick={history.goBack}
                                    className="mb-3"
                                    style={{ float: "right" }}
                                    color="primary"
                                >
                                    <i className="far fa-arrow-alt-circle-left"></i> Back
                                </Button>
                                {/* </Link> */}
                            </div>

                        </Row>
                        <Row>
                            <Col md={3}>
                                MAKE
                                <h5>Nissan</h5>


                            </Col>
                            <Col md={3}>
                                MODEL
                                <h5>Sunny</h5>


                            </Col>
                            <Col md={3}>
                                TRIM
                                <h5>BASIC</h5>


                            </Col>
                            <Col md={3}>
                                YEAR
                                <h5>2023</h5>


                            </Col>

                        </Row>

                        <Row className="mt-4">
                            <Col md={12}>
                                <Card className="mt-4">
                                    <CardBody>
                                        <h5>vehicles</h5>
                                        <div className="table-responsive">
                                            <Table className="table table-bordered mb-2  mt-2">
                                                <thead>
                                                    <tr className="text-center">
                                                        <th>Vehicle Id</th>
                                                        <th>Plate Number</th>
                                                        <th>Color </th>
                                                        <th>Mileage</th>
                                                        <th>Showroom</th>
                                                        <th>Status </th>
                                                        <th>ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="text-center">
                                                        <td>
                                                            F3S2X3WQZL
                                                        </td>
                                                        <td>
                                                            DP-18472
                                                        </td>
                                                        <td>
                                                            White
                                                        </td>
                                                        <td>
                                                            2060 KM
                                                        </td>
                                                        <td>
                                                            Dubai, Business Bay
                                                        </td>
                                                        <td>
                                                            Available
                                                        </td>
                                                        <td>
                                                            <Button
                                                                style={{ padding: "3px", margin: "3px" }}
                                                                color="info"
                                                                outline
                                                            >
                                                                <i className="fas fa-info-circle" style={{ color: 'rgb(2,117,255)' }}></i>
                                                            </Button>
                                                            <Button
                                                                style={{ padding: "3px", margin: "3px" }}
                                                                color="info"
                                                                outline
                                                            >
                                                                <i className="bx bx-trash" style={{ color: 'rgb(2,117,255)' }}></i>
                                                            </Button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>


                        <Row className="mt-4">
                            <Col md={6}>
                                <Card className="mt-4">
                                    <CardBody>
                                        <CardTitle className="mb-1">Specification</CardTitle>
                                        <hr></hr>

                                        <Row>
                                            <Col md={3}>
                                                <Card className="mt-4">
                                                    <CardBody className="text-center">
                                                        <i className="bx bx-git-pull-request"
                                                            style={{ fontSize: '25px', color: 'black' }}></i><br></br>
                                                        <small>1.5L engine</small>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md={3}>
                                                <Card className="mt-4">
                                                    <CardBody className="text-center">
                                                        <i className="bx bxs-time-five"
                                                            style={{ fontSize: '25px', color: 'black' }}></i>
                                                        <br></br>
                                                        <small>Automatic</small>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md={3}>
                                                <Card className="mt-4">
                                                    <CardBody className="text-center">
                                                        <i className="bx bx-gas-pump" style={{ fontSize: '25px', color: 'black' }}></i>
                                                        <br></br>
                                                        <small>Petrol
                                                        </small>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md={3}>
                                                <Card className="mt-4">
                                                    <CardBody className="text-center">
                                                        <i className="bx bx-radar"
                                                            style={{ fontSize: '25px', color: 'black' }}></i>
                                                        <br></br>
                                                        <small>5 seats</small>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <h5>Technical details</h5>
                                        <Row className="mb-4">
                                            <Col md={6}>
                                                <div >
                                                    <h6 style={{ color: "black" }}>Engine</h6>
                                                    <span>1.5</span>
                                                </div>

                                                <div className="mt-4">
                                                    <h6 style={{ color: "black" }}>Torque</h6>
                                                    <span>13.7 kg-m/4,000 rpm</span>
                                                </div>


                                                <div className="mt-4">
                                                    <h6 style={{ color: "black" }}>Transmission</h6>
                                                    <span>Automatic</span>
                                                </div>

                                            </Col>

                                            <Col md={6}>

                                                <div >
                                                    <h6 style={{ color: "black" }}>Max Power</h6>
                                                    <span>99hp/6,000 rpm</span>
                                                </div>

                                                <div className="mt-4">
                                                    <h6 style={{ color: "black" }}>Fuel system</h6>
                                                    <span>Electronic Fuel Injection Control</span>
                                                </div>

                                            </Col>

                                        </Row>

                                        <div className="mb-4">
                                            <h5>Features</h5>
                                            <Button color="info" outline>Edit   Features </Button>
                                        </div>



                                        <div className="mb-4">
                                            <h6>Entertainment</h6>
                                            <Row>
                                                <Col md={3}>
                                                    <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i>
                                                    <small> AM / FM Radio</small>
                                                </Col>
                                                <Col md={3}>
                                                    <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i>
                                                    <small> CD / MP3 Player</small>
                                                </Col>
                                                <Col md={3}> <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small>  Bluetooth</small></Col>
                                                <Col md={3}> <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i> <small> AUX / USB Jack </small></Col>
                                            </Row>
                                        </div>
                                        <div className="mb-4">
                                            <h6>Comfort</h6>
                                            <Row>
                                                <Col md={3}>  <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small> Power Windows </small> </Col>
                                                <Col md={3}>  <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small>Seat Material </small></Col>
                                                <Col md={3}>   <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small> Sunroof</small></Col>

                                            </Row>
                                        </div>
                                        <div className="mb-4">
                                            <h6>Driveability</h6>
                                            <Row>
                                                <Col md={3}>  <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small>Cruise Control </small> </Col>
                                                <Col md={3}>   <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small>Keyless Entry </small></Col>
                                                <Col md={6}>  <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small>  Navigation System</small> </Col>

                                                <Col md={3} className="mt-4">  <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i> <small>Rear Camera </small></Col>
                                                <Col md={3} className="mt-4">   <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small>  Parking Sensors</small></Col>
                                            </Row>
                                        </div>
                                        <div className="mb-4">
                                            <h6>Safety</h6>
                                            <Row>
                                                <Col md={4}>  <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small>  Dual Front Airbags</small> </Col>
                                                <Col md={4}>   <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small>  Side & Curtain Airbags</small></Col>
                                                <Col md={4}>  <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small> ABS Brakes with EBD</small> </Col>
                                                <Col md={6} className="mt-4">   <i className="bx bx-notepad" style={{ fontSize: '20px', color: '#27C1EC' }}></i><small> ISO FIX Child Seat Anchors</small></Col>

                                            </Row>
                                        </div>

                                    </CardBody>
                                </Card>

                            </Col>

                            <Col md={6}>
                                <Card className="mt-4">
                                    <CardBody>
                                        <CardTitle>Images</CardTitle>
                                        <hr></hr>
                                        <Row>
                                            <Col md={8} className="mx-auto d-block">
                                                <img src={a7} width="200px"  ></img>

                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>




                                <Card className="mt-4">
                                    <CardBody>
                                        <h5>Pricing (AED)</h5>
                                        <hr></hr>
                                        <div className="table-responsive">
                                            <Table >
                                                <thead>
                                                    <tr className="text-center">
                                                        <th>Mileage</th>
                                                        <th>1 months</th>
                                                        <th>3 months </th>
                                                        <th>6 months</th>
                                                        <th>9 months</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="text-center">
                                                        <td>
                                                            2500
                                                        </td>
                                                        <td>
                                                            1764
                                                        </td>
                                                        <td>
                                                            1764
                                                        </td>
                                                        <td>
                                                            1764
                                                        </td>
                                                        <td>
                                                            1764
                                                        </td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>
                                                            2500
                                                        </td>
                                                        <td>
                                                            1764
                                                        </td>
                                                        <td>
                                                            1764
                                                        </td>
                                                        <td>
                                                            1764
                                                        </td>
                                                        <td>
                                                            1764
                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </Table>
                                        </div>

                                        <Row className="mt-4">
                                            <Col md={4}><span>ADDITIONAL DRIVER</span>
                                                <h6 style={{ color: "black" }}>52.5</h6>
                                            </Col>
                                            <Col md={4}><span>FULL INSURANCE</span>
                                                <h6 style={{ color: "black" }}>178.5</h6>
                                            </Col>
                                            <Col md={4}><span>EXCESS LIABILITY</span>
                                                <h6 style={{ color: "black" }}>1050</h6>
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

export default CarSpecs