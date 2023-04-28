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

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import { useHistory, Link } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb";
import axios from "axios"
import ReactPaginate from "react-paginate"

const Calender = () => {
    const [form, setForm] = useState([])
    const [findservice, setFindservice] = useState([])
    console.log(findservice)
    const handlechange = (e) => {
        const myUser = { ...form };
        myUser[e.target.name] = e.target.value;
        setForm(myUser)
        var token = datas
        const params = {
            dealerId: data.user.dealerId,
            status: form.status == undefined?"All":form.status,
            type: e.target.value,
        }
        axios
            .post(
                "http://103.186.185.77:5021/api/v1/admin/servicerequest/getstatustype",
                params,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(res => {
                setFindservice(res.data.statusTypeArr)
            })
    }

    const handlechange1 = (e) => {
        const myUser = { ...form };
        myUser[e.target.name] = e.target.value;
        setForm(myUser)
        var token = datas
        const params = {
            dealerId: data.user.dealerId,
            status: e.target.value,
            type: form.type == undefined? "all":form.type,
        }
        axios
            .post(
                "http://103.186.185.77:5021/api/v1/admin/servicerequest/getstatustype",
                params,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(res => {
                setFindservice(res.data.statusTypeArr)
            })
    }

    // const events = findservice.map(({ requestNumber, logDateCreated }) => ({
    //     title: requestNumber,
    //     date: logDateCreated.substring(0, 10)
    //   }));

    const events = [];
    findservice.map((data) => {
        events.push({
          title: data.requestNumber,
          date: data.logDateCreated.substring(0, 10),
        });
      });

      console.log(events)

    // if (Array.isArray(findservice)) {
    //     const events = findservice.map((data) => ({
    //         title: data.requestNumber,
    //         date: data.logDateCreated.substring(0, 10),
    //     }));
    // }



    const [service, setservice] = useState([])

    var gets = localStorage.getItem("authUser")
    var data = JSON.parse(gets)
    var datas = data.token
    var dats = data.rolesAndPermit
    var dats1 = data.user.role

    const getAllservices = () => {
        var token = datas
        const params = {
            dealerId: data.user.dealerId
        }
        axios
            .post(
                "http://103.186.185.77:5021/api/v1/admin/servicerequest/getall",
                params,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(res => {
                setservice(res.data.serviceRequest)
                console.log(res.data)
            })
    }


    useEffect(() => {
        getAllservices()
    }, [])

    const [listPerPage] = useState(5)
    const [pageNumber, setPageNumber] = useState(0)

    const pagesVisited = pageNumber * listPerPage
    const lists = service.slice(pagesVisited, pagesVisited + listPerPage)
    const pageCount = Math.ceil(service.length / listPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const hiddenIds = ["Delayed", "Scheduled", "Resolved"];
    const filteredData = lists.filter((item) => !hiddenIds.includes(item.status));

    const redirectnewpage = (data) => {
        sessionStorage.setItem("serviceid", data._id)
        history.push("/ViewServiceRequest")
    }


    return (
        <React.Fragment>


            <Row>
                <Col className="col-12">
                    {/* <Card>
                        <CardBody> */}
                    {/* {filter ? ( */}
                    <>
                        {filteredData.length === 0 ? (
                            <h5 className="text-center mb-3">No Data...</h5>
                        ) : (
                            <Row className="mt-4">
                                <Col md={12}>
                                    {filteredData.map((data, key) => (
                                        <Card key={key}>
                                            <CardBody>
                                                <Row className="mt-2">
                                                    <Col md={10}>
                                                        <h5 style={{ color: 'rgb(40,183,163)', fontWeight: 'bold' }}> <i className="bx bxs-calendar-event"></i>Service Request - Priority {data.priority}</h5></Col>
                                                    <Col md={2}> <div style={{ float: 'right' }}><h6>Status: <span style={{ color: 'red', fontWeight: 'bold' }}>{data.status}</span></h6></div></Col>

                                                    <div className="mt-3 m-2">
                                                        <Row >
                                                            <Col md={3}>Request Number <br></br>
                                                                <h5 style={{ color: '#2F63BA' }}>{data.requestNumber}</h5> </Col>
                                                            <Col md={3}>Customer Name<br></br>
                                                                <h5 style={{ color: 'black' }}>{data.customerName}</h5></Col>
                                                            <Col md={2}></Col>
                                                            <Col md={3}>Service Provider Name<br></br>
                                                                <h5 style={{ color: 'black' }}>Logic Car Rental</h5></Col>
                                                        </Row>
                                                    </div>


                                                    <div className="mt-3 m-2">
                                                        <Row >
                                                            <Col md={3}>Booking Number <br></br>
                                                                <h5 style={{ color: 'black' }}>{data.bookingNo}</h5> </Col>
                                                            <Col md={3}>Customer Email<br></br>
                                                                <h5 style={{ color: 'black' }}>{data.eamil}</h5></Col>
                                                            <Col md={3}></Col>


                                                            <Col md={3}>
                                                                <Button onClick={() => { redirectnewpage(data) }} color="info" style={{ float: 'right', fontWeight: "bold" }} >Service Request Details</Button>
                                                            </Col>
                                                        </Row>
                                                    </div>

                                                </Row>
                                            </CardBody>

                                        </Card>
                                    ))}
                                    <div className="mt-3" style={{ float: "right" }}>
                                        {/* <Stack spacing={2}> */}
                                        <ReactPaginate
                                            previousLabel={"Previous"}
                                            nextLabel={"Next"}
                                            pageCount={pageCount}
                                            onPageChange={changePage}
                                            containerClassName={"pagination"}
                                            previousLinkClassName={"previousBttn"}
                                            nextLinkClassName={"nextBttn"}
                                            disabledClassName={"disabled"}
                                            activeClassName={"active"}
                                            total={lists.length}
                                        />
                                        {/* </Stack> */}
                                    </div>

                                </Col>

                            </Row>
                        )}
                    </>
                    {/* ) : (
                        ""
                    )} */}

                    <Card >
                        <CardBody>

                            <Row>
                                <Col className="col-12">
                                    <Row className="mb-4">
                                        <Col md={2}>
                                            <Label>Type</Label>
                                            <select name="status" onChange={(e) => { handlechange(e) }} className="form-select">
                                                <option value="">Select</option>
                                                <option value="all">All</option>
                                                <option value="accident">Accident</option>
                                                <option value="repairs">Repairs</option>
                                                <option value="service_request">Service Request</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </Col>
                                        <Col md={2}>
                                            <Label>Status</Label>
                                            <select name="type" onChange={(e) => { handlechange1(e) }} className="form-select">
                                                <option value="">Select</option>
                                                <option value="All">All</option>
                                                <option value="Requested">Requested</option>
                                                <option value="Scheduled">Scheduled</option>
                                                <option value="Delayed">Delayed</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-lg-12">
                                            {/* fullcalendar control */}
                                            <FullCalendar
                                                plugins={[dayGridPlugin]}
                                                initialView="dayGridMonth"
                                                events={events}
                                            />

                                            {/* New/Edit event modal */}

                                        </Col>
                                    </Row>
                                </Col>
                            </Row >

                        </CardBody>
                    </Card>
                    {/* </CardBody>
                    </Card> */}
                </Col>
            </Row>
        </React.Fragment>
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
