import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Input,
  Table, Button
} from "reactstrap"
import ReactEcharts from "echarts-for-react";
//import component
import CardUser from "./CardUser"
import Settings from "./Settings"
import Posts from "./Posts"
import Comments from "./Comments"
import TapVisitors from "./TapVisitors"
import Activity from "./Activity"
import PopularPost from "./PopularPost"
import axios from "axios"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import ReactPaginate from "react-paginate"

const index = props => {
  const series = [
    {
      name: "Current",
      data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
    },
    {
      name: "Previous",
      data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
    },
  ]

  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#556ee6", "#f1b44c"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    markers: {
      size: 3,
      strokeWidth: 3,

      hover: {
        size: 4,
        sizeOffset: 2,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  }

  useEffect(() => {
    getdeshdata()
  }, [])

  const [search, setsearch] = useState([])

  const [asked, setsasked] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const getdeshdata = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", "")
    dataArray.append("date", "")
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/dashboard/getstatusreportitems",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setsearch(res.data.deliveryReviewsResult)
        setsasked(res.data.askedModel)
      })
  }
  const options1 = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: ["late", "on-time"],
      textStyle: {
        color: ["#74788d"],
      },
    },
    color: ["#db1a8b", "#a263e6"],
    series: [
      {
        name: "Total sales",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center",
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold",
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 335, name: "late" },
          { value: 310, name: "on-time" },

        ],
      },
    ],
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Status Report" />


          <Row style={{ background: "rgb(1,48,74)" }} >
            <Col lg="3" className="mt-3">

              <select
                name="status"
                className="form-select mb-3"
              >
                <option value="">Select Branch</option>
                <option value="pending">Initiated</option>
                <option value="inProgress">processing</option>
                <option value="complete">Resolved</option>
              </select>
            </Col>
            <Col lg="1" className="mt-3"></Col>
            <Col lg="3" className="mt-3">

              <select
                name="status"

                className="form-select mb-3"
              >
                <option value="">Select City</option>
                <option value="pending">Initiated</option>
                <option value="inProgress">processing</option>
                <option value="complete">Resolved</option>
              </select>
            </Col>
            <Col lg="1" className="mt-3"></Col>
            <Col lg="3" className="mt-3">
              <div className="mb-3">

                <Input
                  type="date"
                  required
                  className="form-control"
                  id="basicpill-Declaration-input10"

                />
              </div>
            </Col>
          </Row>



          <Row className="mt-3">
            <CardUser options={options} series={series} />
            <Settings />
          </Row>





          <Row>
            <Posts />
            <Col xl={5} lg={6}>
              <Card>
                <CardBody>

                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap mb-0 table-bordered">
                      <thead style={{ background: "rgb(1,48,74)", color: "white" }}>
                        <tr>
                          <th>
                            Car Asked
                          </th>
                          <th>daily</th>
                          <th>monthly</th>
                          <th>weekly</th>

                        </tr>
                      </thead>
                      <tbody>
                        {asked.map((data, key) => (
                          <tr className="text-center" key={key}>
                            <td>{data.modelName}</td>
                            <td>
                              {data.askedDailyNum}
                            </td>
                            <td>{data.askedMonthlyNum}</td>
                            <td>{data.askedWeeklyNum}</td>
                          </tr>
                        ))}


                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <TapVisitors />
          </Row>







          <Row>
            <Col xl={3} >
              <h6 style={{ color: "rgb(1,48,74)" }}>Late Delivery %</h6>
              <Card>
                <CardBody>
                  <ReactEcharts style={{ height: "250px" }} option={options1} /></CardBody>
              </Card>
            </Col>
            <Col xl={7}>
              <h4 style={{ color: "rgb(1,48,74)" }}>NPS</h4>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="me-2">
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap mb-0 table-bordered">
                      <thead style={{ background: "rgb(1,48,74)", color: "white" }}>
                        <tr>
                          <th>
                            vendor
                          </th>
                          <th>Promoter</th>
                          <th>Neutral</th>
                          <th>Detractor</th>
                          <th>NPS</th>
                        </tr>
                      </thead>
                      <tbody>


                        <tr>
                          <td>Injaz Rent a car</td>
                          <td>15</td>
                          <td>8</td>
                          <td>20</td>
                          <td>-11.6</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card></Col>

            <Col xl={2}>
              <h4></h4>
              <Card>
                <CardBody>
                  <p style={{ textAlign: 'center', color: "rgb(1,48,74)" }}> NPS</p>
                  <h3 style={{ textAlign: 'center', color: "rgb(1,48,74)", color: "rgb(1,48,74)" }}> -11.6</h3>
                  <h6 style={{ textAlign: "end", color: "red" }}> -187.2%</h6>
                </CardBody>
              </Card>
            </Col>

          </Row>

          <Row>
            {" "}
            <Activity />
            <PopularPost />
          </Row>

          <Row>
            <Col md={12}>
              <h4 style={{ textAlign: "center", color: "rgb(1,48,74)" }}>Delivery Comments</h4>
              <Card>
                <CardHeader className="bg-white">
                </CardHeader>

                <CardBody>
                  <div>
                    <div className="table-responsive">
                      <div style={{ float: "right" }}>
                        <Input
                          type="search"
                          className="form-control"
                          placeholder="Search.."

                          name="search"
                        />
                      </div>
                      <Table className="table table-bordered mb-4 mt-5">
                        <thead style={{ background: "rgb(1,48,74)", color: "white" }}>
                          <tr className="text-center">
                            <th>S.No</th>
                            <th>Booking Id</th>
                            <th>Customer Name</th>
                            <th>Delivery condition</th>
                            <th>Delivery rating</th>
                            <th>Delivery comments </th>
                            <th>BookingStatus</th>
                          </tr>
                        </thead>
                        <tbody>


                          {search.map((data, key) => (
                            <tr className="text-center" key={key}>
                              <td>{key + 1}</td>
                              <td>{data.booking_id}</td>
                              <td>
                                {data.customerName}
                              </td>
                              <td>{data.deliveryCondition}</td>
                              <td>{data.rating}</td>
                              <td>{data.remark} </td>
                              <td>{data.reviewType}</td>


                            </tr>
                          ))}

                        </tbody>
                      </Table>

                      <div className="mt-3" style={{ float: "right" }}>

                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default index
