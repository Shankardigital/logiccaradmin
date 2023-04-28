import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import axios from "axios"
import { useHistory } from "react-router-dom"
import classnames from "classnames";
import Scheduled from "pages/Scheduled"
import Scheduled1 from "pages/Scheduled1"
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Dashboard = () => {

  const [customIconActiveTab, setcustomIconActiveTab] = useState("1");
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  const toggleIconCustom = tab => {
    if (customIconActiveTab !== tab) {
      setcustomIconActiveTab(tab);
    }
  };

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

  const [cars, setcars] = useState([])
  const [cars5, setcars5] = useState([])
  const [cars6, setcars6] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  var dats = data.rolesAndPermit
  var dats1 = data.user.role


  const getdeshdata = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("docLimit", "")
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/dashboard/getdashboarditems",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcars(res.data)
        setcars5(res.data.bookingPiChart)
        setcars6(res.data.latestBooking)
      })
  }

  const [search, setsearch] = useState([])

  const searchAll = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)
    const dataArray = new FormData()
    dataArray.append("docLimit", "")
    var token = datas
    axios
      .post(
        `http://103.186.185.77:5021/api/v1/admin/dashboard/getdashboarditems?searchQuery=${e.target.value}`,
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcars6(res.data.latestBooking)
      })
  }

  useEffect(() => {
    getdeshdata()
  }, [])

  const reportstest = [
    {
      title: "Total Users ",
      icon: "bx bxs-user ",
      color: "primary",
      value: cars.totalActiveUsers,
      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "Total Earned AED ",
      icon: "bx bx-shield-quarter",
      color: "info",
      value: cars.totalEarning,
      series: series3,
      options: options3,
      arrowUpDown: "bx bx-shield-quarter ms-1 text-success",
    },
    {
      title: "Total Security ",
      icon: "bx bxs-car",
      color: "warning",
      value: cars.totalSecureDeposit,
      series: series1,
      options: options1,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "Total Bookings ",
      icon: "bx bxs-bookmark-star",
      color: "success",
      value: cars.totalBookings,
      series: series4,
      options: options4,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
  ]

  const series = [
    cars.totalTodayBookings,
    cars.totalRentalStartedBookings,
    cars.totalCompletedBookings,
  ]
  const options = {
    labels: ["Upcoming Booking", "Running Booking", "Completed Booking"],
    colors: ["#e5701a", "#01304a", "#2ec609"],
    legend: { show: !1 },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  }

  const reportstest12 = [
    {
      title: "Today Bookings ",
      icon: "bx bxs-car",
      color: "primary",
      value: cars.totalTodayBookings,
      arrowUpDown: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
      title: "Immediate Bookings ",
      icon: "bx bxs-car",
      color: "info",
      value: cars.totalImmediateBookings,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "Rental Started Bookings",
      icon: "bx bxs-car",
      color: "warning",
      value: cars.totalRentalStartedBookings,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "Completed Bookings ",
      icon: "bx bxs-car",
      color: "success",
      value: cars.totalCompletedBookings,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
      title: "Rejected or Cancel",
      icon: "bx bxs-car",
      color: "danger",
      value: cars.totalCancelledBookings,
      arrowUpDown: "mdi mdi-arrow-up ms-1 text-success",
    },
  ]

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = cars6.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(cars6.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const history = useHistory()


  const getdata1 = data => {
    sessionStorage.setItem("bookingId", data._id)
    handleClick1234()
  }
  function handleClick1234() {
    history.push("/Dashboardview")
  }


  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "New Booking Requests",
      value: "0",
      badgeValue: "+ 0",
      color: "success",
      desc: "No Records",
    },
    {
      icon: "bx bx-archive-in",
      title: "Return Requests",
      value: "0",
      badgeValue: "+ 0",
      color: "success",
      desc: "No Records",
    },
    {
      icon: "bx bx-alarm",
      title: "Average Booking Acceptance Time",
      value: "1 day(s) 22 min(s) 33 sec(s)",

      desc: "Select Month",
    },
    {
      icon: "bx bx-alarm",
      title: "Average Service Request Resolution Time",
      value: "0 sec(s)",
      desc: "Select Month",
    },
  ];


  return (
    <React.Fragment>
      {dats.dashboardview == true || dats1 == "admin" ? (
        <div className="page-content">
          {/* <Breadcrumbs title="Dashboards" breadcrumbItem="Dashboards" /> */}

          <Col lg={4}>
            <Nav tabs className="nav-tabs-custom nav-justified  tabbed">
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
                  <span className="d-none d-sm-block " >Bookings</span>
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
                  <span className="d-none d-sm-block">Services Request</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Container fluid>
            <Row>
              <Col lg={8}>
                <h5 className="mt-3 mb-3" style={{ color: 'black' }}>Welcome, Logic Cars </h5>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <TabContent
                  activeTab={customActiveTab}
                  className="p-3 text-muted"
                >
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <Scheduled />

                        <Row>
                          {reports.map((report, key) => (
                            <Col sm="6" key={key}>
                              <Card>
                                <CardBody>
                                  <div className="text-muted mt-4 text-center">
                                    <h4>
                                      {report.value}{" "}
                                      <i className="mdi mdi-chevron-up ms-1 text-success" />
                                    </h4>
                                  </div>

                                  <div className="d-flex align-items-center justify-content-center mb-3">
                                    <div className="avatar-xs me-3">
                                      <span className="avatar-title justify-content-center rounded-circle bg-primary bg-soft text-primary text-center font-size-18">
                                        <i className={report.icon} />
                                      </span>
                                    </div>
                                    <h5 className="font-size-14 mb-0 text-center">{report.title}</h5>
                                  </div>

                                  <div className="text-muted mt-4 text-center">
                                    <hr></hr>
                                    <div className="d-flex justify-content-center">
                                      <span
                                        className={
                                          "badge badge-soft-" + report.color + " font-size-12"
                                        }
                                      >
                                        {" "}
                                        {report.badgeValue}{" "}
                                      </span>{" "}
                                      <span className="ms-2  text-center text-truncate">{report.desc}</span>
                                    </div>
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>))}
                        </Row>
                        
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <Scheduled1 />
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>


            {/* <Scheduled /> */}

            {/* <Row>
            <Col md={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Booking Analytics</h4>

                  <div>
                    <div id="donut-chart">
                      <ReactApexChart
                        options={options}
                        series={series}
                        type="donut"
                        height={260}
                        className="apex-charts"
                      />
                    </div>
                  </div>

                  <div className="text-center text-muted">
                    <Row>
                      <Col xs="4">
                        <div className="mt-4">
                          <p className="mb-2 text-truncate">
                            <i
                              style={{ color: "#e5701a" }}
                              className="mdi mdi-circle  me-1"
                            />{" "}
                            Immediate Booking
                          </p>
                          <h5>{cars.totalTodayBookings}</h5>
                        </div>
                      </Col>
                      <Col xs="4">
                        <div className="mt-4">
                          <p className="mb-2 text-truncate">
                            <i
                              style={{ color: "#01304a" }}
                              className="mdi mdi-circle  me-1"
                            />{" "}
                           Rental Started Booking
                          </p>
                          <h5>{cars.totalRentalStartedBookings}</h5>
                        </div>
                      </Col>
                      <Col xs="4">
                        <div className="mt-4">
                          <p className="mb-2 text-truncate">
                            <i
                              style={{ color: "#2ec609" }}
                              className="mdi mdi-circle  me-1"
                            />{" "}
                            Completed Booking
                          </p>
                          <h5>{cars.totalCompletedBookings}</h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
            {/* <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white">
                  <CardTitle>Latest Bookings</CardTitle>
                </CardHeader>

                <CardBody>
                  <div>
                    <div className="table-responsive">
                      <div style={{ float: "right" }}>
                        <Input
                          type="search"
                          className="form-control"
                          placeholder="Search.."
                          value={search.search}
                          onChange={searchAll}
                          name="search"
                        />
                      </div>
                      <Table className="table table-bordered mb-4 mt-5">
                        <thead>
                          <tr className="text-center">
                            <th>S.No</th>
                            <th>Booking Id</th>
                            <th>Rental Period</th>
                            <th>Car</th>
                            <th>Client</th>
                            <th>Date</th>
                            <th>Price </th>
                            <th>Booking Status</th>
                            <th style={{ width: "100px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lists.map((data, key) => (
                            <tr className="text-center" key={key}>
                              <td>{(pageNumber - 1) * 5 + key + 6}</td>
                              <td>{data.booking_id}</td>

                              <td>
                                <span>From :{data.pickupTime}</span>
                                <br />
                                <span>To :{data.returnDate}</span>
                              </td>

                              <td>{data.carModelName}</td>
                              <td>{data.customerName}</td>
                              <td>{data.date}</td>
                              <td>{data.totalprice} AED</td>
                              <td>{data.status}</td>

                              <td>
                                <Button
                                  color="primary"
                                  outline
                                  onClick={() => {
                                    getdata1(data)
                                  }}
                                >
                                  <i className="fas fa-eye text-dark"></i> View
                                </Button>{" "}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>

                      <div className="mt-3" style={{ float: "right" }}>
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
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
          </Container>
        </div>
      ) : (
        <Card>
          <h5 className="text-center p-2">You don't have permission to access</h5>
        </Card>
      )}
    </React.Fragment>
  )
}

export default Dashboard
