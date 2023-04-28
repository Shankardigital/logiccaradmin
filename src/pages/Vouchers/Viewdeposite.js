import React, { useEffect, useState } from "react"
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
    PaginationItem,
    PaginationLink,
    Modal,
    InputGroup,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap"
import classnames from "classnames"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { URL } from "../../Apiurl"
import Select from "react-select"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { Link } from "react-router-dom"

const options = [
    { value: "Luxury", label: "Luxury" },
    { value: "LuxurySUV", label: "Luxury SUV" },
    { value: "SUV", label: "SUV" },
    { value: "Sedan", label: "Sedan" },
    { value: "Hatchback", label: "Hatchback" },
    { value: "Crossover", label: "Crossover" },
]
const options1 = [
    { value: "AlfaRomeo", label: "Alfa Romeo" },
    { value: "Audi", label: "Audi" },
    { value: "Toyota", label: "Toyota" },
]
const options2 = [
    { value: "Giulietta", label: "Giulietta" },
    { value: "Brera", label: "Brera" },
    { value: "Giulietta", label: "Giulietta" },
    { value: "Spider", label: "Spider" },
    { value: "Stelvio", label: "Stelvio" },
]

const Viewdeposit = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="History" />


                    <Row className="mt-4">

                    <div >
                            <Link to="/deposite"><Button className="mb-3" style={{ float: "right" }} color="info"><i className="far fa-arrow-alt-circle-left"></i> Back</Button></Link>
                        </div>

                        <Col md="4">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col className="col col-sm-4">
                                        <div className="text-center mt-3">
                                            <i style={{fontSize:"25px"}} className="fas fa-credit-card text-dark "></i>
                                            </div>
                                        </Col>
                                        <Col className="col col-sm-8">
                                            <h5>Debit</h5>
                                            <p className="text-danger">0.00</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col className="col col-sm-4">
                                            <div className="text-center mt-3">
                                            <i style={{fontSize:"25px"}} className="fas fa-money-bill-wave text-dark "></i>
                                            </div>
                                        </Col>
                                        <Col className="col col-sm-8">
                                            <h5>Credit</h5>
                                            <p className="text-warning">605,106.60</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col className="col col-sm-4">
                                        <div className="text-center mt-3">
                                            <i style={{fontSize:"25px"}} className="fas fa-wallet text-dark "></i>
                                            </div>
                                        </Col>
                                        <Col className="col col-sm-8">
                                            <h5>Balance</h5>
                                            <p className="text-success">605,106.60</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardHeader className="bg-white">
                                    <CardTitle>Transactions</CardTitle>
                                </CardHeader>

                                <CardBody >

                                    <div>
                                        <div className="table-responsive">
                                            <div style={{ float: "right" }}>
                                                <Input type="search" className="form-control" placeholder="Search.." />
                                            </div>
                                            <Table className="table table-bordered mb-4 mt-5">
                                                <thead>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>Date</th>
                                                        <th>TRANSACTION ID</th>
                                                        <th>CUSTOMER</th>
                                                        <th>CREDIT</th>
                                                        <th>DEBIT</th>
                                                        <th>BALANCE</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>15-12-2022</td>
                                                        <td>1ac87494-5d0d-4b5f-b731-72394b2999f6</td>
                                                        <td>Sateesh</td>
                                                        <td>500</td>
                                                        <td>0.00</td>
                                                        <td>504,006</td>
                                                        <td>
                                                            {/* <Button onClick={() => {
                                                                tog_small();
                                                            }} className="mr-2" style={{ padding: "6px", margin: "3px" }} color="success" outline>
                                                                <i className="bx bx-edit "></i>
                                                            </Button> */}
                                                            <Button style={{ padding: "6px", margin: "3px" }} color="danger" outline>
                                                                <i className="bx bx-trash"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>15-12-2022</td>
                                                        <td>1ac87494-5d0d-4b5f-b731-72394b2999f7</td>
                                                        <td>Sateesh</td>
                                                        <td>500</td>
                                                        <td>0.00</td>
                                                        <td>504,006</td>
                                                        <td>
                                                            {/* <Button onClick={() => {
                                                                tog_small();
                                                            }} className="mr-2" style={{ padding: "6px", margin: "3px" }} color="success" outline>
                                                                <i className="bx bx-edit "></i>
                                                            </Button> */}
                                                            <Button style={{ padding: "6px", margin: "3px" }} color="danger" outline>
                                                                <i className="bx bx-trash"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <div style={{ float: "right" }}>
                                                <Pagination
                                                    size="sm"
                                                    aria-label="Page navigation example"
                                                >
                                                    <PaginationItem disabled>
                                                        <PaginationLink href="#" tabIndex="-1">
                                                            Previous
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">1</PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">2</PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">3</PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">Next</PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer />




            </div>
        </React.Fragment>
    )
}

export default Viewdeposit
