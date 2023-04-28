import React, { useEffect, useState } from "react"
import {
    CardBody,
    CardHeader,
    Container,
    Row,
    Col,
    Card,
    Form,
    Label,
    Input,
    Button,
    Table,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import ReactPaginate from "react-paginate"
import { URL } from "../../Apiurl"
import axios from "axios"

import { CSVLink } from "react-csv"

import jsPDF from "jspdf"
import "jspdf-autotable"
import { ToastContainer, toast } from "react-toastify"
import ReactApexChart from "react-apexcharts"

function StatusReport() {


    const [filter, setfilter] = useState(false)

    const hidefilter = () => setfilter(false)

    const [filters, setfilters] = useState({
        status: "All",
        fromDate: "",
        toDate: "",
    })

    const getfilter = e => {
        e.preventDefault()
        getAllbookings123()
    }
    const getAllbookings123 = () => {
        var token = datas
        const dataArray = new FormData()
        dataArray.append("pickupDate", filters.fromDate)
        dataArray.append("returnDate", filters.toDate)
        dataArray.append("branchId", localStorage.getItem("ids"))
        dataArray.append("searchQueryParams", "")

        axios
            .post(
                "http://103.186.185.77:5021/api/v1/admin/carbooking/immediatebookingreport",
                dataArray,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(res => {
                setcoup(res.data.bookingResult)
                hidefilter()
                setfilters("")
                // setuserInCsv(res.data.ExcelData)
            })
    }




    const series1 = [
        { name: "RV", data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] },
    ]
    const options1 = {
        chart: { sparkline: { enabled: !0 } },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#f1b44c"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [25, 100, 100, 100],
            },
        },
        tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
    }

    //Etherium Chart
    const series2 = [
        { name: "TV", data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
    ]
    const options2 = {
        chart: { sparkline: { enabled: !0 } },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#01304a"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [25, 100, 100, 100],
            },
        },
        tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
    }

    //LiteCoin Chart
    const series3 = [
        { name: "UV", data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] },
    ]
    const options3 = {
        chart: { sparkline: { enabled: !0 } },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#50a5f1"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [25, 100, 100, 100],
            },
        },
        tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
    }

    const series4 = [
        { name: "CV", data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] },
    ]
    const options4 = {
        chart: { sparkline: { enabled: !0 } },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#34c38f"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [25, 100, 100, 100],
            },
        },
        tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
    }

    const reportstest = [
        {
            title: "Total Users ",
            icon: "bx bxs-user ",
            color: "primary",
            value: "1",
            series: series2,
            options: options2,
            arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
        },
        {
            title: "Total Earned AED ",
            icon: "bx bx-shield-quarter",
            color: "info",
            value: "1",
            series: series3,
            options: options3,
            arrowUpDown: "bx bx-shield-quarter ms-1 text-success",
        },
        {
            title: "Total Security ",
            icon: "bx bxs-car",
            color: "warning",
            value: "1",
            series: series1,
            options: options1,
            arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
        },
        {
            title: "Total Bookings ",
            icon: "bx bxs-bookmark-star",
            color: "success",
            value: "1",
            series: series4,
            options: options4,
            arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
        },
    ]
    const reportstest12 = [
        {
            title: "Today Bookings ",
            icon: "bx bxs-car",
            color: "primary",
            value: "432",
            arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
        },
        {
            title: "Upcoming Bookings ",
            icon: "bx bxs-car",
            color: "info",
            value: "5",
            arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
        },
        {
            title: "Running Bookings",
            icon: "bx bxs-car",
            color: "warning",
            value: "6",
            arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
        },
        {
            title: "Completed Bookings ",
            icon: "bx bxs-car",
            color: "success",
            value: "3",
            arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
        },
        {
            title: "Rejected or Cancel",
            icon: "bx bxs-car",
            color: "danger",
            value: "2",
            arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
        },
    ]



    return (
        <div>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Card>
                            <CardBody>
                                <Form
                                    onSubmit={e => {
                                        getfilter(e)
                                    }}
                                >
                                    <Row>
                                        <Col lg="3">

                                            <select
                                                name="status"
                                                value={filters.status}
                                                onChange={e => {
                                                    handleChange1(e)
                                                }}
                                                className="form-select mb-3"
                                            >
                                                <option value="">Select Branch</option>
                                                <option value="pending">Initiated</option>
                                                <option value="inProgress">processing</option>
                                                <option value="complete">Resolved</option>
                                            </select>
                                        </Col>
                                        <Col lg="1"></Col>
                                        <Col lg="3">

                                            <select
                                                name="status"
                                                value={filters.status}
                                                onChange={e => {
                                                    handleChange1(e)
                                                }}
                                                className="form-select mb-3"
                                            >
                                                <option value="">Select City</option>
                                                <option value="pending">Initiated</option>
                                                <option value="inProgress">processing</option>
                                                <option value="complete">Resolved</option>
                                            </select>
                                        </Col>
                                        <Col lg="1"></Col>
                                        <Col lg="3">
                                            <div className="mb-3">

                                                <Input
                                                    type="date"
                                                    required
                                                    className="form-control"
                                                    id="basicpill-Declaration-input10"
                                                    onChange={e => {
                                                        handleChangeflt(e)
                                                    }}
                                                    name="toDate"
                                                    value={filters.toDate}
                                                />
                                            </div>
                                        </Col>


                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                        <Row>

                            <Row>
                                {reportstest12.map((report, key) => (
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
                                ))}
                            </Row>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>

        </div>
    )
}

export default StatusReport