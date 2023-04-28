import React, { useState, useEffect } from "react"
import { Button, Card, CardBody, Col, Container, Row, CardTitle, Table } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Viewbooking = () => {
  useEffect(() => {
    getonebooking()
  }, [])
  let history = useHistory()
  const [user, setuser] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const custid = sessionStorage.getItem("bookingId")

  const getonebooking = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", custid)
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getcanceledbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setuser(res.data.bookingResult)
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Booking Details" />

          <Row>
            <Col xl="12">
              <Button
                onClick={history.goBack}
                className="mb-2  m-1"
                style={{ float: "right" }}
                color="info"
              >
                <i className="far fa-arrow-alt-circle-left"></i> Back
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xl="5">
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs="7">
                      <div className="text-primary p-3">
                        <p>
                          <CardTitle className="mb-4">
                            Customer Information{" "}
                          </CardTitle>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col md="4">
                    <div className="avatar-md profile-user-wid">
                      <img
                        src={"http://103.186.185.77:5021/" + user.custPic}
                        alt=""
                        style={{ height: "70px" }}
                        className="img-thumbnail rounded-circle"
                      />
                    </div>
                  </Col>

                  <Col sm={8}>
                    <div className="pt-2">
                      <Row>
                        <Col xs="12">
                          <h5 className="font-size-15">{user.customerName}</h5>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <CardBody className="pt-0">
                  <p className="text-muted mb-3">{user.personalDetail}</p>
                  <div className="table-responsive">
                    <ul className="list-unstyled ">
                      <li>
                        <div className="d-flex">
                          <i className="bx bx-right-arrow-circle fs-4"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Customer Name</h6>
                            <p className="text-muted fs-14 mb-0">
                              {user.customerName}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mt-3">
                        <div className="d-flex">
                          <i className="bx bx-right-arrow-circle fs-4"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Customer Phone</h6>
                            <p className="text-muted fs-14 mb-0">
                              {user.customerPhone}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mt-3">
                        <div className="d-flex">
                          <i className="bx bx-right-arrow-circle fs-4"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Customer Email</h6>
                            <p className="text-muted fs-14 mb-0">
                              {user.customerEmail}
                            </p>
                          </div>
                        </div>
                      </li>

                      <li className="mt-3">
                        <div className="d-flex">
                          <i className="bx bx-right-arrow-circle fs-4"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Customer Location</h6>
                            <p className="text-muted fs-14 mb-0">
                              {user.custCountryName}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mt-3">
                        <div className="d-flex">
                          <i className="bx bx-right-arrow-circle fs-4"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">
                              Customer Driving Licence No:
                            </h6>
                            <p className="text-muted fs-14 mb-0">
                              {user.custDlNumber}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mt-3">
                        <div className="d-flex">
                          <i className="bx bx-right-arrow-circle fs-4"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">
                              Customer Date Of Birth:
                            </h6>
                            <p className="text-muted fs-14 mb-0">
                              {user.custDateOfBirth}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mt-3">
                        <div className="d-flex">
                          <i className="bx bx-right-arrow-circle fs-4"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Customer Occupation:</h6>
                            <p className="text-muted fs-14 mb-0">
                              {user.custOccupation}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mt-3" style={{marginBottom:'40px'}}>
                        <div className="d-flex">
                          <i className="bx bx-right-arrow-circle fs-4" ></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">
                              Customer Register BranchName:
                            </h6>
                            <p className="text-muted fs-14 mb-0">
                              {user.custBranchName}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="7">
              <Card className="mini-stats-wid">
                <CardBody>

                  <div className="border-bottom card-body">
                    <div style={{ float: "right" }}>
                      <span className="text-muted">Status : </span>{" "}
                      <span className="badge bg-success">
                        {user.status}
                      </span>
                    </div>
                    <div className="d-flex">
                      <img
                        src={"http://103.186.185.77:5021/" + user.carImage}
                        alt=""
                        height="50"
                      />
                      <div className="flex-grow-1 ms-3">
                        <h5 className="fw-semibold">
                          {user.carBrandName} / {user.carModelName}
                        </h5>
                        <ul className="list-unstyled hstack gap-2 mb-0">
                          <li>
                            <i className="bx bx-building-house"></i>{" "}
                            <span className="text-muted">
                              {user.carMakeYear}
                            </span>
                          </li>
                          <li>
                            <i className="bx bx-map"></i>{" "}
                            <span className="text-muted">
                              {user.branchName}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h5 className="mb-3 mt-1">Booking Details</h5>
                  <ul className="verti-timeline list-unstyled">
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle"></i>
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div>
                            <h6 className="font-size-14 mb-1">
                              Booking Id :
                            </h6>
                            <p className="text-muted">{user.booking_id}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle"></i>
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div>
                            <h6 className="font-size-14 mb-1">Car :</h6>
                            <p className="text-muted">
                              {user.carType} / {user.carBrandName} /{" "}
                              {user.carModelName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle"></i>
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div>
                            <h6 className="font-size-14 mb-1">
                              Registration Number :
                            </h6>
                            <p className="text-muted">
                              {user.carRegistNumber}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle"></i>
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div>
                            <h6 className="font-size-14 mb-1">
                              From Date / From Time:
                            </h6>
                            <p className="text-muted">
                              {user.pickupDate} / {user.pickupTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle"></i>
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div>
                            <h6 className="font-size-14 mb-1">
                              To Date / To Time:
                            </h6>
                            <p className="text-muted">
                              {user.returnDate} / {user.returnTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle"></i>
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div>
                            <h6 className="font-size-14 mb-1">
                              Pickup Location :
                            </h6>
                            <p className="text-muted">
                              {user.pickupLocation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle"></i>
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div>
                            <h6 className="font-size-14 mb-1">
                              Return Location :
                            </h6>
                            <p className="text-muted">
                              {user.returnLocation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md={12} className="mt-3">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <div>
                        <h6 className="font-size-14 mb-1">Payment Details :</h6>

                        <Table className="table table-bordered mb-4 mt-3">
                          <thead>
                            <tr>
                              <th>Price </th>
                              <th>Security Deposit</th>
                              <th>Total price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> {user.rideUnitPrice} AED</td>
                              <td>{user.securityDeposit} AED</td>
                              <td>{user.totalprice} AED</td>
                            </tr>
                          </tbody>
                        </Table>
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

export default Viewbooking
