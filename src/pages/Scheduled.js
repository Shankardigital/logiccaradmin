import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Form,
    FormFeedback,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import "@fullcalendar/bootstrap/main.css";

const Calender = () => {

    const events = [
        { title: 'Event 1', date: '2023-05-03' },
        { title: 'Event 2', date: '2023-05-04' },
        { title: 'Event 3', date: '2023-05-07' }
    ];

    return (
        <React.Fragment>
           
            {/* {filter ? ( */}
                <>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col md={8} className="mt-3 mb-3">
                                    <h5 style={{ color: 'black' }} > <i className="bx bxs-calendar " style={{ fontSize: '20px', color: 'rgb(52,195,143)' }}></i>Booking No. 71779 <span>&nbsp;
                                        | &nbsp; City: </span><span > </span>
                                        <span>&nbsp;  | &nbsp; Dealer Agreement Number: </span>
                                        <span>
                                            INZ03434
                                        </span></h5>
                                </Col>
                                <Col md={4} className="mt-3 mb-3">
                                    <span style={{ fontWeight: "bold", color: 'gray' }} >Booking Date and Time :  </span>
                                    <span>
                                        27 Mar 2023 - 03:30 PM
                                    </span>
                                </Col>
                                <hr></hr>
                                <Col md={3} className="text-center mt-3 mb-5">
                                    <span>Car Details:</span>
                                    <br /><br />
                                    <h5 style={{ color: 'black' }} >Nissan Sunny - 2022</h5></Col>
                                <Col md={3} className="text-center mt-3 mb-5">
                                    <span >Customer Name:</span>
                                    <br /><br />
                                    <h5 style={{ color: 'black' }} >Paulina Lipiec</h5></Col>
                                <Col md={3} className="text-center mt-3 mb-5">
                                    <span>Booking Status:</span>
                                    <br /><br />
                                    <h5 style={{ color: 'black' }}>
                                        <span><i className="fa fa-circle carPickColor faBookSize">
                                        </i>Car Picked</span>
                                    </h5>
                                </Col>
                                <Col md={3} className="text-center mt-3 mb-5">
                                    <span>Monthly Fee:</span>
                                    <br /><br />


                                    <h5 style={{ color: 'white' }} className="badge bg-success p-2">AED 1627.5/mo</h5>
                                </Col>
                                <hr ></hr>
                                <div className="d-flex justify-content-center">
                                    <Button color="success "
                                        className="btn-block m-1" > Accept</Button>

                                    <Button color="info  m-1" onClick={() => {
                                        getdata2()
                                    }}
                                        className=" btn-block" > Booking Details</Button>

                                    <Button color="danger m-1"
                                        className=" btn-block" onClick={() => {
                                            getpopup1();
                                        }} > Reject </Button>
                                </div>

                            </Row>
                        </CardBody>
                    </Card>
                </>
            {/* ) : (
                ""
            )} */}

            <Card >
                <CardBody>

                    <Row>
                        <Col className="col-12">
                            {/* <Card>
                        <CardBody> */}

                            <Row>
                                <Col lg={12} className="mt-2 mb-3">
                                    <div id="external-events">

                                        <Row className="mt-4 mb-4">
                                            <Col lg={3}>
                                                <div
                                                    draggable
                                                    onDrag={event => onDrag(event, category)}

                                                >

                                                    <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle " />
                                                    <span style={{ color: 'black' }} >Booking/return requested</span>
                                                </div>
                                            </Col>
                                            <Col lg={3}>
                                                <div
                                                    draggable
                                                    onDrag={event => onDrag(event, category)}

                                                >

                                                    <i style={{ color: 'rgb(255,183,16)' }} className="mdi mdi-checkbox-blank-circle me-2 vertical-middle " />
                                                    <span style={{ color: 'black' }} >Booking/return approved</span>
                                                </div>
                                            </Col>
                                            <Col lg={2}>
                                                <div
                                                    draggable
                                                    onDrag={event => onDrag(event, category)}

                                                >

                                                    <i style={{ color: 'rgb(47,187,52)' }} className="mdi mdi-checkbox-blank-circle me-2 vertical-middle " />
                                                    <span style={{ color: 'black' }} >Ready for pickup</span>
                                                </div>
                                            </Col>
                                            <Col lg={2}>
                                                <div
                                                    draggable
                                                    onDrag={event => onDrag(event, category)}

                                                >

                                                    <i style={{ color: 'rgb(218,52,41)' }} className="mdi mdi-checkbox-blank-circle me-2 vertical-middle " />
                                                    <span style={{ color: 'black' }} > Force collection</span>
                                                </div>
                                            </Col>


                                            <Col lg={1} style={{ color: 'black', fontSize: '12px' }} onClick={() => {
                                                setfilter(!filter)
                                            }}>
                                                <i className="bx bxs-up-arrow me-2 vertical-middle" />
                                                Booking</Col>
                                            <Col lg={1} style={{ color: 'black', fontSize: '12px' }}>
                                                <i className="bx bxs-down-arrow me-2 vertical-middle " />
                                                Return</Col>
                                        </Row>
                                    </div>
                                </Col>


                                <Col className="col-lg-12">
                                <FullCalendar
                                                plugins={[dayGridPlugin]}
                                                initialView="dayGridMonth"
                                                events={events}
                                            />
                                </Col>
                            </Row>
                        </Col>
                    </Row >
                </CardBody>
            </Card>
        </React.Fragment >
    );
};

Calender.propTypes = {
    events: PropTypes.array,
    categories: PropTypes.array,
    className: PropTypes.string,
    onGetEvents: PropTypes.func,
    onAddNewEvent: PropTypes.func,
    onUpdateEvent: PropTypes.func,
    onDeleteEvent: PropTypes.func,
    onGetCategories: PropTypes.func,
};

export default Calender;
