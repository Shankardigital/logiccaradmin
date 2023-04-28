import React, { useState, useEffect } from "react"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardTitle,
  Table,
  Modal,
  Label,
  Input, Form
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios"
import classnames from "classnames"
import { useHistory } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

const Viewbooking = () => {
  useEffect(() => {
    getonebooking()
    getoneExtra()
  }, [])
  let history = useHistory()
  const [user, setuser] = useState([])

  console.log(user)

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const custid = sessionStorage.getItem("bookingId")



  const [pickupimage, setpickupimage] = useState([])

  const [returnImages, setreturnImages] = useState([])


  const getonebooking = () => {
    var token = datas
    const dataArray = new FormData()

    dataArray.append("_id", custid)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getfuturecollectbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setuser(res.data.bookingResult)
        setpickupimage(res.data.bookingResult.pickupImages)
        setreturnImages(res.data.bookingResult.returnImages)
      })
  }

  const [activeTab1, setactiveTab1] = useState("5")
  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab)
    }
  }


  const [modal_small, setmodal_small] = useState(false)
  function tog_small() {
    setmodal_small(!modal_small)
  }


  const [modal_small1, setmodal_small1] = useState(false)
  function tog_small1() {
    setmodal_small1(!modal_small1)
  }

  const [modal_small2, setmodal_small2] = useState(false)
  function tog_small2() {
    setmodal_small2(!modal_small2)
  }


  const [modal_small3, setmodal_small3] = useState(false)
  function tog_small3() {
    setmodal_small3(!modal_small3)
  }



  const [IMGS, setIMGS] = useState([])

  console.log(IMGS)

  const getpopup = data => {
    setIMGS(data)
    tog_small1()
  }



  const [Extra, setExtra] = useState([])
  console.log(Extra)


  const getoneExtra = () => {
    var token = datas
    const dataArray = new FormData()

    dataArray.append("bookingId", custid)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/voucher/getallnonrentalsbybookingid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setExtra(res.data.invoiceResult)

      })
  }


  const [form, setform] = useState({ damageCharges: "", salikTollCharges: "", parkingCharges: "" })

  const handleChangeextra = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }


  const submibooking = e => {
    e.preventDefault()
    changstatus()
  }

  const [pic, setpic] = useState([])

  const c1 = Number(form.damageCharges)
  const c2 = Number(form.salikTollCharges)
  const c3 = Number(form.parkingCharges)
  const c4 = Number(pic)

  const sumTotal = c1 + c2 + c3 + c4

  const sum = String(sumTotal)



  const [Files2, setFiles2] = useState("")

  const changeHandler2 = e => {
    setFiles2(e.target.files)
  }
  const changstatus = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("bookingId", custid)
    dataArray.append("damageCharges", form.damageCharges)
    dataArray.append("salikTollCharges", form.salikTollCharges)
    dataArray.append("parkingCharges", form.parkingCharges)
    dataArray.append("trafficPrice", form.trafficPrice)
    dataArray.append("totalExtraKmCharges", pic)
    dataArray.append("sumTotal", sum)

    for (let i = 0; i < Files2.length; i++) {
      dataArray.append("trafficProofImages", Files2[i])
    }

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/voucher/addnonrentalinvoice",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            setmodal_small(false)
            getoneExtra()
            clearForm()

          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const clearForm = () => {
    setform({
      timeSlot: "", damageCharges: "", salikTollCharges: "", parkingCharges: "", Extraprice: ""
    })

  }

  const handleChange12 = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    getcarprice(e.target.value)
  }

  const [Kms, setKms] = useState([])


  const getcarprice = val => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("carId", user.carId)
    dataArray.append("timeSlot", val)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getprices",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            setKms(res.data.data[0])
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
          }
        }
      )
  }

  const handlechangeprices = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    const extra = (Kms.extraPrice / Kms.extraMileage) * e.target.value
    setpic(extra)
  }

  const [Files, setFiles] = useState("")

  const changeHandler = e => {
    setFiles(e.target.files)
  }

  const submibookings = e => {
    e.preventDefault()
    updateimages()
  }

  const updateimages = () => {
    var token = datas

    const bookingId = custid

    const dataArray = new FormData()
    for (let i = 0; i < Files.length; i++) {
      dataArray.append("returnImages", Files[i])
    }
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/updatereturnimages" +
        "/" +
        bookingId,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)

          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }


  const [Files1, setFiles1] = useState("")

  const changeHandler1 = e => {
    setFiles1(e.target.files)
  }


  const submibookingsss = e => {
    e.preventDefault()
    updateimagess()
  }

  const updateimagess = () => {
    var token = datas

    const bookingId = custid

    const dataArray = new FormData()
    for (let i = 0; i < Files1.length; i++) {
      dataArray.append("pickupImages", Files1[i])
    }
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/updatepickupimages" +
        "/" +
        bookingId,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            setmodal_small3(false)
            getonebooking()

          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Feature Collect BOOKINGS Details" />

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

              <Button
                onClick={tog_small}
                className="mb-2 m-1"
                style={{ float: "right" }}
                outline color="danger"
              >
                Add Extra Charges
              </Button>
              {user.status === "completed" ?
                <Button
                  onClick={tog_small2}
                  className="mb-2 m-1"
                  style={{ float: "right" }}
                  outline color="secondary"
                >
                  Update Return Images
                </Button> : ""}

              {user.status === "completed" ? "" :
                <Button
                  onClick={tog_small3}
                  className="mb-2 m-1"
                  style={{ float: "right" }}
                  outline color="success"
                >
                  Add Pickup Images
                </Button>}
            </Col>
          </Row>

          <Row className="mt-2">
            <Col xl="5">
              <Card className="overflow-hidden">
                <div className="mt-2">
                  <Nav pills className="navtab-bg nav-justified">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "5",
                        })}
                        onClick={() => {
                          toggle1("5")
                        }}
                      >
                        Booking Details
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "6",
                        })}
                        onClick={() => {
                          toggle1("6")
                        }}
                      >
                        Car Images
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <div className="bg-primary bg-soft mt-2">
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
                      <li className="mt-3">
                        <div className="d-flex">
                          <i className="bx bx-right-arrow-circle fs-4"></i>
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
                  <TabContent activeTab={activeTab1} className="p-1 text-muted">
                    <TabPane tabId="5">
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
                      <h5 className="mb-3 mt-2">Booking Details</h5>
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
                        <li className="event-list mb-3">
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
                    </TabPane>
                    <TabPane tabId="6">
                      <div>
                        <Col md={12}>
                          <CardTitle className="mb-4">
                            <h5> Car pickup Images</h5>
                          </CardTitle>
                          <Row>
                            {pickupimage.map((data, key) => (<Col md={4} key={key}>
                              <img src={
                                "http://103.186.185.77:5021/" +
                                data
                              } height="210px" width="200px" onClick={() => {
                                getpopup(data)
                              }} ></img>
                            </Col>))}
                          </Row>


                        </Col>
                      </div>

                      <div className="mt-5">
                        <Col md={12}>
                          <CardTitle className="mb-4">
                            {/* <h5>Car return Images </h5> */}
                          </CardTitle>
                          <Row>
                            {returnImages.map((data, key) => (<Col md={4} key={key}>
                              <img src={
                                "http://103.186.185.77:5021/" +
                                data
                              } height="210px" width="200px" onClick={() => {
                                getpopup(data)
                              }}></img>
                            </Col>))}
                          </Row>
                        </Col>
                      </div>
                    </TabPane>
                  </TabContent>
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

              {Extra.length === 0 ? "" :
                <Card>
                  <CardBody>
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <div>
                          <h6 className="font-size-14 mb-1">Extra Charges :</h6>

                          <Table className="table table-bordered mb-4 mt-3">
                            <thead>
                              <tr className="text-center">
                                <th>DamagePrice </th>
                                <th>Parking Price</th>
                                <th>Per Extra Km Charge</th>
                                <th>Toll Price</th>
                                <th>Total Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Extra.map((data, i) => (
                                <tr key={i} className="text-center">
                                  <td>
                                    {data.damagePrice}
                                  </td>
                                  <td>
                                    {data.parkingPrice}
                                  </td>
                                  <td>
                                    {data.perExtraKmCharge}
                                  </td>
                                  <td>
                                    {data.tollPrice}
                                  </td>
                                  <td>
                                    {data.sumTotal}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>}

            </Col>
            <ToastContainer />
          </Row>


          <Modal
            size="md"
            centered
            isOpen={modal_small}
            toggle={() => {
              tog_small()
            }}
          >
            <div className="modal-header">
              Add Extra Charges
              <button
                onClick={() => {
                  setmodal_small(false)
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Form
              onSubmit={e => {
                submibooking(e)
              }}
            >     <div className="modal-body">
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <div>
                        <label>Select Package</label>
                        <select
                          value={form.timeSlot}
                          name="timeSlot"
                          onChange={e => {
                            handleChange12(e)
                          }}
                          className="form-select"

                        >
                          <option value="">Select Package</option>
                          <option value="Daily">
                            Daily
                          </option>
                          <option value="Weekly">
                            Weekly
                          </option>
                          <option value="Monthly-2500">
                            Monthly(one)
                          </option>
                          <option value="Monthly-4500">
                            Monthly(two)
                          </option>
                        </select>
                      </div></div>

                    <span style={{ color: "red", fontSize: '10px' }}>{Kms.extraMileage}kms /  {Kms.extraPrice} AED</span>

                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">Enter Extra Kms</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="Enter Extra Kms"
                        name="Extraprice"
                        value={form.Extraprice}
                        onChange={e => {
                          handlechangeprices(e)
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">Total price</Label>
                      <Input
                        type="text"
                        className="form-control"
                        disabled
                        id="basicpill-firstname-input3"
                        placeholder="Enter Damages Charges"
                        name="pic"
                        value={pic}
                      // onChange={e => {
                      //   handleChangeextra(e)
                      // }}
                      />
                    </div>

                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">Traffic Charges</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="Enter Traffic Charges"
                        name="trafficPrice"
                        value={form.trafficPrice}
                        onChange={e => {
                          handleChangeextra(e)
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label>  Traffic Images </Label>
                      <Input
                        type="file"
                        multiple
                        name="carImages"
                        value={form.carImages}
                        onChange={changeHandler2}
                      />
                    </div>

                    <div className="mb-3" style={{ marginTop: "35px" }}>
                      <Label for="basicpill-firstname-input3">Damages Charges</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="Enter Damages Charges"
                        name="damageCharges"
                        value={form.damageCharges}
                        onChange={e => {
                          handleChangeextra(e)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">Sailk Tolls Charges</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="Enter Sailk Tolls Charges"
                        name="salikTollCharges"
                        value={form.salikTollCharges}
                        onChange={e => {
                          handleChangeextra(e)
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">Parking</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="Enter Parking Fee"
                        name="parkingCharges"
                        value={form.parkingCharges}
                        onChange={e => {
                          handleChangeextra(e)
                        }}
                      />
                    </div>

                  </Col>
                </Row>
                <hr></hr>
                <div className="mt-3 mb-3" style={{ float: "right" }}>
                  <button
                    style={{ width: "120px" }}
                    className="btn btn-success m-1"
                    type="submit"
                  >
                    Submit <i className="fas fa-check-circle"></i>
                  </button>
                  <Button
                    onClick={() => {
                      setmodal_small(false)
                    }}
                    color="danger"
                    type="button"
                  >
                    Cancel <i className="fas fa-times-circle"></i>
                  </Button>
                </div>
              </div>
            </Form>
          </Modal>
          <Modal
            size="md"
            centered
            isOpen={modal_small1}
            toggle={() => {
              tog_small1()
            }}
          >
            <div className="modal-header">
              <button
                onClick={() => {
                  setmodal_small1(false)
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <div>
                <img
                  src={"http://103.186.185.77:5021/" + IMGS}
                  style={{ width: "100%", height: "400px", cursor: "pointer" }}
                />
              </div>

            </div>
          </Modal>


          <Modal
            size="md"
            centered
            isOpen={modal_small3}
            toggle={() => {
              tog_small3()
            }}
          >
            <div className="modal-header">
              Add  Pickup Images <button
                onClick={() => {
                  setmodal_small3(false)
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Form
              onSubmit={e => {
                submibookingsss(e)
              }}
            >     <div className="modal-body">

                <Label>  Add  Pickup Images </Label>
                <Input
                  type="file"
                  multiple
                  name="carImages"
                  value={form.carImages}
                  onChange={changeHandler1}
                />
                <hr></hr>
                <div className="mt-3" style={{ float: "right" }}>
                  <button
                    style={{ width: "120px" }}
                    className="btn btn-success m-1"
                    type="submit"
                  >
                    Submit <i className="fas fa-check-circle"></i>
                  </button>

                </div>
              </div>
            </Form>
          </Modal>



          <Modal
            size="md"
            centered
            isOpen={modal_small2}
            toggle={() => {
              tog_small2()
            }}
          >
            <div className="modal-header">
              Update Return Images  <button
                onClick={() => {
                  setmodal_small2(false)
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Form
              onSubmit={e => {
                submibookings(e)
              }}
            >     <div className="modal-body">

                <Label>  Update Return Images </Label>
                <Input
                  type="file"
                  multiple
                  name="carImages"
                  value={form.carImages}
                  onChange={changeHandler}
                />
                <hr></hr>
                <div className="mt-3" style={{ float: "right" }}>
                  <button
                    style={{ width: "120px" }}
                    className="btn btn-success m-1"
                    type="submit"
                  >
                    Submit <i className="fas fa-check-circle"></i>
                  </button>

                </div>
              </div>
            </Form>
          </Modal>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Viewbooking
