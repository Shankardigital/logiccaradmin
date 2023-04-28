import React, { useEffect, useState } from "react"
import {
  CardBody,
  Container,
  Row,
  Col,
  Card,
  Form,
  Label,
  Input,
  Button,
  Table,
  Modal, Nav,
  NavItem,
  NavLink,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Select from "react-select"

import classnames from "classnames"
const Booking = () => {

  const [activeTab1, setactiveTab1] = useState("6")
  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab)
    }
  }
  const [modal_small, setmodal_small] = useState(false)
  const [modal_small1, setmodal_small1] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }
  function tog_small1() {
    setmodal_small1(!modal_small1)
    removeBodyCss()
  }

  const [filter, setfilter] = useState(false)
  const hidefilter = () => setfilter(false)
  const [booking, setbooking] = useState([])
  const [search, setsearch] = useState([])
  const [filters, setfilters] = useState([])
  const [drive, setdrive] = useState([])
  const [book, setbook] = useState({
    status: "",
    reason: "",
    rentalStartKmOut: "",
    carCollectionKmIn: "",
  })

  const handleChangedrive = e => {
    let myUser = { ...drive }
    myUser[e.target.name] = e.target.value
    setdrive(myUser)
  }
  const handleChangebs = e => {
    let myUser = { ...book }
    myUser[e.target.name] = e.target.value
    setbook(myUser)
  }

  const handleChangeflt = e => {
    let myUser = { ...filters }
    myUser[e.target.name] = e.target.value
    setfilters(myUser)
  }

  const searchchange = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)
    const dataArray = new FormData()
    dataArray.append("pickupDate", "")
    dataArray.append("returnDate", "")
    dataArray.append("searchQueryParams", e.target.value)
    dataArray.append("branchId", localStorage.getItem("ids"))
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getallfuturcollectbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbooking(res.data.featureCollectBookingResult)
      })
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token


  const getAllbookings = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    dataArray.append("pickupDate", "")
    dataArray.append("returnDate", "")
    dataArray.append("searchQueryParams", "")
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getallfuturcollectbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbooking(res.data.featureCollectBookingResult)
      })
  }

  const getAllbookings123 = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("pickupDate", filters.fromDate)
    dataArray.append("returnDate", filters.toDate)
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getallfuturcollectbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        hidefilter()
        setfilters("")
        setbooking(res.data.featureCollectBookingResult)
      })
  }

  const getfilter = e => {
    e.preventDefault()
    getAllbookings123()

  }

  useEffect(() => {
    getAllbookings()
    getAlldriver()
  }, [])

  const changstatus = () => {
    var token = datas
    const driveid = book._id

    const dataArray = new FormData()

    if (book.status == undefined) {
      dataArray.append("status", "")
    } else { dataArray.append("status", book.status) }

    if (book.reason == undefined) {
      dataArray.append("reason", "")
    } else { dataArray.append("reason", book.reason) }

    if (book.rentalStartKmOut == undefined) {
      dataArray.append("rentalStartKmOut", "")
    } else { dataArray.append("rentalStartKmOut", book.rentalStartKmOut) }

    if (book.carCollectionKmIn == undefined) {
      dataArray.append("carCollectionKmIn", "")
    } else { dataArray.append("carCollectionKmIn", book.carCollectionKmIn) }


    if (selectedOptions1.value == undefined) {
      dataArray.append("driverId", "")
    } else { dataArray.append("driverId", selectedOptions1.value) }


    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/editbookingstatus" +
        "/" +
        driveid,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllbookings()
            setmodal_small(false)
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const submibooking = e => {
    e.preventDefault()
    changstatus()
  }


  const getpopup1 = data => {
    setbook(data)
    tog_small()
  }

  const deletebooking = data => {
    var token = datas
    var remid = data._id
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/disablebooking" + "/" + remid,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllbookings()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const manageDelete = data => {
    const confirmBox = window.confirm("Do you really want to Remove ?")
    if (confirmBox === true) {
      deletebooking(data)
    }
  }

  const [listPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = booking.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(booking.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  const history = useHistory()

  function handleClick1234() {
    history.push("/Featurecollectview")
  }

  const getdata1 = data => {
    sessionStorage.setItem("bookingId", data._id)
    handleClick1234()
  }

  function handleClick12345() {
    history.push("/BookingStatus")
  }

  const getdata2 = data => {
    sessionStorage.setItem("bookingId", data._id)
    handleClick12345()
  }


  const [driver, setdriver] = useState([])


  const [selectedOptions1, setSelectedOptions1] = useState([])

  function handleSelect1(details) {
    setSelectedOptions1(details)
  }

  const optionGroup11 = driver.map(response => ({
    value: response.driverId,
    label: response.driverName,
  }))


  const getAlldriver = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/driver/searchdriverforbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setdriver(res.data.drvrResult)
      })
  }


  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Feature Collect Bookings" />

        {filter ? (
          <>
            <Card>
              <CardBody>
                <Form
                  onSubmit={e => {
                    getfilter(e)
                  }}
                >
                  <Row>
                    <Col lg="3">
                      <div className="mb-3">
                        <Label for="basicpill-declaration-input10">
                          From Date <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="date"
                          required
                          className="form-control"
                          id="basicpill-Declaration-input10"
                          onChange={e => {
                            handleChangeflt(e)
                          }}
                          name="fromDate"
                          value={filters.fromDate}
                        />
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="mb-3">
                        <Label for="basicpill-declaration-input10">
                          To Date <span className="text-danger">*</span>
                        </Label>
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
                    <Col lg="3">
                      <div className="mt-4">
                        <Button
                          type="submit"
                          className="m-1"
                          color="primary"
                        >
                          <i className="fas fa-check-circle"></i> Search
                        </Button>
                        <Button
                          onClick={hidefilter}
                          className="m-1"
                          color="danger"
                        >
                          <i className="fas fa-times-circle"></i> Cancel
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </>
        ) : (
          ""
        )}
        <div className="mt-2">
          <Row>
            <Col md={12}>
              <div style={{ float: 'right' }}>
                <Button
                  className="m-1"
                  onClick={() => {
                    setfilter(!filter)
                  }}
                  color="primary"
                >
                  <i className="fas fa-filter"></i> Filter
                </Button></div></Col>
          </Row>

          <Row className="mt-2">
            <Col md={4}>
              <Input
                onChange={e => {
                  searchchange(e)
                }}
                type="search"
                className="form-control"
                placeholder="Search.."
              />
            </Col>
            <Col md={2}>
            </Col>
            <Col md={6}>
              <Nav pills className="navtab-bg nav-justified">
                <Link to="/bookings">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "1",
                      })}
                      onClick={() => {
                        toggle1("1")
                      }}
                    >
                      Immediate
                    </NavLink>
                  </NavItem>
                </Link>

                <Link to="/carassigned">

                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "2",
                      })}
                      onClick={() => {
                        toggle1("2")
                      }}
                    >
                      Car Assigned
                    </NavLink>
                  </NavItem>
                </Link>

                <Link to="/ontheway">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "3",
                      })}
                      onClick={() => {
                        toggle1("3")
                      }}
                    >
                      On The Way
                    </NavLink>
                  </NavItem>
                </Link>

                <Link to="/rental">

                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "4",
                      })}
                      onClick={() => {
                        toggle1("4")
                      }}
                    >
                      Rental Started
                    </NavLink>
                  </NavItem>

                </Link>

                <Link to="/collectnow">
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
                      Collect Now
                    </NavLink>
                  </NavItem>
                </Link>



                <Link to="/feature-collect">
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
                      Feature Collect
                    </NavLink>
                  </NavItem>
                </Link>

                <Link to="/closed">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "7",
                      })}
                      onClick={() => {
                        toggle1("7")
                      }}
                    >
                      Closed
                    </NavLink>
                  </NavItem>
                </Link>

                <Link to="/cancelled">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "8",
                      })}
                      onClick={() => {
                        toggle1("8")
                      }}
                    >
                      Cancelled
                    </NavLink>
                  </NavItem>
                </Link>


                <Link to="/Forcecollection">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "9",
                      })}
                      onClick={() => {
                        toggle1("9")
                      }}
                    >
                      Force Collection
                    </NavLink>
                  </NavItem>
                </Link>


                <Link to="/UpcomingDeliveries">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "10",
                      })}
                      onClick={() => {
                        toggle1("10")
                      }}
                    >
                      Upcoming  Deliveries
                    </NavLink>
                  </NavItem>
                </Link>


                <Link to="/UpcomingCollection">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab1 === "11",
                      })}
                      onClick={() => {
                        toggle1("11")
                      }}
                    >
                      Upcoming Collection
                    </NavLink>
                  </NavItem>
                </Link>



              </Nav>
            </Col>

          </Row>
        </div>

        <Row className="mt-4">
          <Col md={12}>

            <div className="row">
              <div className="col-sm-6">
              </div>
              <div className="col-sm-6">
                <div style={{ float: "right" }}>
                  <Row>

                  </Row>
                </div>
              </div>
            </div>
            <Card className="mt-4">
              <CardBody>


                <div className="col-sm-12 bttmMargin">
                  <div className="booking-container container">
                    <div className="booking-header row">
                      <div className="col-md-7">
                        <i className="fa fa-calendar-o"></i>
                        <span className="booking-title">
                          Booking No. 71779 <span>&nbsp;
                            | &nbsp; City: </span><span className="title-city"> </span>
                          <span>&nbsp;  | &nbsp; Dealer Agreement Number: </span>
                          <span>
                            INZ03434
                          </span></span>
                      </div>
                      <div className="col-md-5">
                        <span style={{ float: "right" }}>
                          <span style={{ fontWeight: "bold", color: 'gray' }} >Booking Date and Time :  </span>
                          <span>
                            27 Mar 2023 - 03:30 PM
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <span className="title-info">Car Details:</span>
                        <br /><br />
                        <span className="title-value">Nissan Sunny - 2022</span>
                      </div>
                      <div className="col-md-3 ">
                        <span className="title-info">Customer Name:</span>
                        <br /><br />
                        <span className="title-value">Paulina Lipiec</span>
                      </div>
                      <div className="col-md-3">
                        <span className="title-info">Booking Status:</span>
                        <br /><br />
                        <span className="title-value">

                          <span><i className="fa fa-circle carPickColor faBookSize">
                          </i>Car Picked</span>

                        </span>
                      </div>
                      <div className="col-md-3 ">
                        <span className="title-info">Monthly Fee:</span>
                        <br /><br />
                        <span className="price-span">
                          <span className="pricing-money">AED 1627.5</span>
                          <span className="pricing-month">/mo</span>
                        </span>
                      </div>
                    </div>
                    <div className="booking-footer text-center trr">
                      <a onClick={() => {
                        getdata2(data)
                      }}>Booking Details &gt;</a>
                    </div>
                  </div>
                </div>


              </CardBody>
            </Card>
          </Col>
        </Row>


      </Container>
      <ToastContainer />

      <Modal
        size="md"
        isOpen={modal_small}
        toggle={() => {
          tog_small()
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="mySmallModalLabel">
            Booking Status
          </h5>
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
        <div className="modal-body">
          <Form
            onSubmit={e => {
              submibooking(e)
            }}
          ><Row>

              <Col md={12}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input1">
                    Status <span className="text-danger">*</span>
                  </Label>
                  <select
                    value={book.status}
                    name="status"
                    required
                    onChange={e => {
                      handleChangebs(e)
                    }}
                    className="form-select"
                  >
                    <option value="">Select</option>
                    {/* <option value="pending">Pending</option> */}
                    <option value="accepted">Accepted</option>
                    <option value="onTheWay">ON The Way / Arrival</option>
                    <option value="rentalStarted">Rental Started</option>
                    <option value="collectNow">Collect Now</option>
                    <option value="featureCollect">Feature Collect</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </Col>

              {book.status == "accepted" ? (<> <Col md={12}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input1">
                    Select Driver
                  </Label>
                  <Select
                    style={{ width: "100%" }}
                    required
                    options={optionGroup11}
                    placeholder="Select driver"
                    value={selectedOptions1}
                    onChange={handleSelect1}
                    isSearchable={true}
                    name="userList"
                  />
                </div>

              </Col></>) : (
                ""
              )}


              {book.status == "collectNow" ? (<> <Col md={12}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input1">
                    Select Driver
                  </Label>
                  <Select
                    style={{ width: "100%" }}
                    required
                    options={optionGroup11}
                    placeholder="Select driver"
                    value={selectedOptions1}
                    onChange={handleSelect1}
                    isSearchable={true}
                    name="userList"
                  />
                </div>

              </Col></>) : (
                ""
              )}


              {book.status == "rentalStarted" ? (<> <Col md={12}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input3">Kilometer OUT</Label>
                  <Input
                    type="number"
                    className="form-control"
                    id="basicpill-firstname-input3"
                    value={book.rentalStartKmOut}
                    name="rentalStartKmOut"
                    placeholder="Enter Kilometer OUT"
                    onChange={e => {
                      handleChangebs(e)
                    }}

                  />
                </div>
              </Col></>) : (
                ""
              )}

              {book.status == "cancelled" ? (<>
                <Col md={12}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input2">
                      Reason <span className="text-danger">*</span>
                    </Label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input2"
                      placeholder="Enter Reason"
                      value={book.reason}
                      name="reason"
                      onChange={e => {
                        handleChangebs(e)
                      }}
                    />
                  </div>
                </Col>
              </>) : (
                ""
              )}
              {book.status == "completed" ? (<>
                <Col md={12}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">Kilometer In</Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      value={book.carCollectionKmIn}
                      name="carCollectionKmIn"
                      placeholder="Enter Kilometer In"
                      onChange={e => {
                        handleChangebs(e)
                      }}

                    />
                  </div>
                </Col>

              </>) : (
                ""
              )}
              <hr></hr>
              <Col md={12}><div style={{ float: "right" }}>
                <Button className="m-1" color="primary" type="submit">
                  Submit <i className="fas fa-check-circle"></i>
                </Button>
                <Button
                  onClick={() => {
                    setmodal_small(false)
                  }}
                  color="danger"
                  type="button"
                >
                  Cancel <i className="fas fa-times-circle"></i>
                </Button>
              </div></Col>
            </Row></Form>
        </div>
      </Modal>
    </div>
  </React.Fragment>
    // <React.Fragment>
    //   <div className="page-content">
    //     <Container fluid>
    //       {/* Render Breadcrumbs */}
    //       <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Feature Collect Bookings" />
    //       <div className="mt-2">


    //       <Nav pills className="navtab-bg nav-justified">
    //           <Link to="/bookings">
    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "1",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("1")
    //                 }}
    //               >
    //                 Immediate 
    //               </NavLink>
    //             </NavItem>
    //           </Link>

    //           <Link to="/carassigned">

    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "2",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("2")
    //                 }}
    //               >
    //                 Car Assigned 
    //               </NavLink>
    //             </NavItem>
    //           </Link>

    //           <Link to="/ontheway">
    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "3",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("3")
    //                 }}
    //               >
    //                 On The Way 
    //               </NavLink>
    //             </NavItem>
    //           </Link>

    //           <Link to="/rental">

    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "4",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("4")
    //                 }}
    //               >
    //                 Rental Started
    //               </NavLink>
    //             </NavItem>

    //           </Link>

    //           <Link to="/collectnow">
    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "5",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("5")
    //                 }}
    //               >
    //                 Collect Now
    //               </NavLink>
    //             </NavItem>
    //           </Link>



    //           <Link to="/feature-collect">
    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "6",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("6")
    //                 }}
    //               >
    //                Feature Collect
    //               </NavLink>
    //             </NavItem>
    //           </Link>

    //           <Link to="/closed">
    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "7",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("7")
    //                 }}
    //               >
    //                 Closed
    //               </NavLink>
    //             </NavItem>
    //           </Link>

    //           <Link to="/cancelled">
    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "8",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("8")
    //                 }}
    //               >
    //                 Cancelled
    //               </NavLink>
    //             </NavItem>
    //           </Link>


    //           <Link to="/Forcecollection">
    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "9",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("9")
    //                 }}
    //               >
    //                 Force Collection
    //               </NavLink>
    //             </NavItem>
    //           </Link>


    //           <Link to="/UpcomingDeliveries">
    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "10",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("10")
    //                 }}
    //               >
    //                 Upcoming  Deliveries
    //               </NavLink>
    //             </NavItem>
    //           </Link>


    //           <Link to="/UpcomingCollection">
    //             <NavItem>
    //               <NavLink
    //                 style={{ cursor: "pointer" }}
    //                 className={classnames({
    //                   active: activeTab1 === "11",
    //                 })}
    //                 onClick={() => {
    //                   toggle1("11")
    //                 }}
    //               >
    //                 Upcoming Collection
    //               </NavLink>
    //             </NavItem>
    //           </Link>



    //         </Nav>
    //       </div>
    //       <Row className="mt-4">
    //         <Col md={12}>
    //           {filter ? (
    //             <>
    //               <Card>
    //                 <CardBody>
    //                   <Form
    //                     onSubmit={e => {
    //                       getfilter(e)
    //                     }}
    //                   >
    //                     <Row>
    //                       <Col lg="3">
    //                         <div className="mb-3">
    //                           <Label for="basicpill-declaration-input10">
    //                             From Date <span className="text-danger">*</span>
    //                           </Label>
    //                           <Input
    //                             type="date"
    //                             required
    //                             className="form-control"
    //                             id="basicpill-Declaration-input10"
    //                             onChange={e => {
    //                               handleChangeflt(e)
    //                             }}
    //                             name="fromDate"
    //                             value={filters.fromDate}
    //                           />
    //                         </div>
    //                       </Col>
    //                       <Col lg="3">
    //                         <div className="mb-3">
    //                           <Label for="basicpill-declaration-input10">
    //                             To Date <span className="text-danger">*</span>
    //                           </Label>
    //                           <Input
    //                             type="date"
    //                             required
    //                             className="form-control"
    //                             id="basicpill-Declaration-input10"
    //                             onChange={e => {
    //                               handleChangeflt(e)
    //                             }}
    //                             name="toDate"
    //                             value={filters.toDate}
    //                           />
    //                         </div>
    //                       </Col>
    //                       <Col lg="3">
    //                         <div className="mt-4">
    //                           <Button
    //                             type="submit"
    //                             className="m-1"
    //                             color="primary"
    //                           >
    //                             <i className="fas fa-check-circle"></i> Search
    //                           </Button>
    //                           <Button
    //                             onClick={hidefilter}
    //                             className="m-1"
    //                             color="danger"
    //                           >
    //                             <i className="fas fa-times-circle"></i> Cancel
    //                           </Button>
    //                         </div>
    //                       </Col>
    //                     </Row>
    //                   </Form>
    //                 </CardBody>
    //               </Card>
    //             </>
    //           ) : (
    //             ""
    //           )}

    //           <Card>
    //             <CardBody>
    //               <div className="row">
    //                 <div className="col-sm-6">
    //                 </div>
    //                 <div className="col-sm-6">
    //                   <div style={{ float: "right" }}>
    //                     <Row>
    //                       <Col>
    //                         <div style={{ float: "right" }}>
    //                           <Button
    //                             className="m-1"
    //                             onClick={() => {
    //                               setfilter(!filter)
    //                             }}
    //                             color="primary"
    //                           >
    //                             <i className="fas fa-filter"></i> Filter
    //                           </Button>
    //                         </div>
    //                       </Col>
    //                       <Col>
    //                         <div style={{ float: "right" }}>
    //                           <Input
    //                             onChange={e => {
    //                               searchchange(e)
    //                             }}
    //                             type="search"
    //                             className="form-control"
    //                             placeholder="Search.."
    //                           />
    //                         </div>
    //                       </Col>
    //                     </Row>
    //                   </div>
    //                 </div>
    //               </div>

    //               {/* <div>
    //                 <div className="table-responsive">
    //                   <Table className="table table-bordered mb-4 mt-2">
    //                     <thead>
    //                       <tr className="text-center">
    //                         <th>S.No</th>
    //                         <th>BookingId</th>
    //                         <th>CarImage</th>
    //                         <th>Booking Status</th>
    //                         <th>Pickup & Return Location</th>
    //                         <th>RentalPeriod</th>
    //                         <th>Vehicle</th>
    //                         <th>Client</th>
    //                         <th>Price</th>
    //                         <th>Status</th>
    //                         <th>Edit</th>
    //                         <th>View</th>
    //                         <th>Delete</th>
    //                       </tr>
    //                     </thead>
    //                     <tbody>
    //                       {lists.map((data, key) => (
    //                         <tr key={key} className="text-center">
    //                           <th scope="row">
    //                             {(pageNumber - 1) * 10 + key + 11}
    //                           </th>
    //                           <td>{data.booking_id}</td>
    //                           <td>
    //                             <img
    //                               src={
    //                                 "http://103.186.185.77:5021/" +
    //                                 data.carImage[0]
    //                               }
    //                               style={{ width: "80px" }}
    //                             />
    //                           </td>
    //                           <td>
    //                             <a
    //                               style={{ borderRadius: "5px" }}
    //                               className="bg-danger text-white p-1"
    //                             >
    //                               {data.status}
    //                             </a>
    //                           </td>
    //                           <td>
    //                             <span>{data.pickupLocation}</span>
    //                             <br />
    //                             &<br />
    //                             <span>{data.returnLocation}</span>
    //                           </td>
    //                           <td>
    //                             <span>
    //                               {data.pickupDate == "undefined" ? (
    //                                 ""
    //                               ) : (
    //                                 <a>From :{data.pickupDate}</a>
    //                               )}
    //                             </span>
    //                             <br />
    //                             <span>
    //                               {data.pickupTime == "undefined" ? (
    //                                 ""
    //                               ) : (
    //                                 <a>From Time: {data.pickupTime}</a>
    //                               )}
    //                             </span>
    //                             <br />
    //                             &
    //                             <br />
    //                             <span>
    //                               {data.returnDate == "undefined" ? (
    //                                 ""
    //                               ) : (
    //                                 <a>To : {data.returnDate}</a>
    //                               )}
    //                             </span>
    //                             <br />
    //                             <span>
    //                               {data.returnTime == "undefined" ? (
    //                                 ""
    //                               ) : (
    //                                 <a>To Time: {data.returnTime}</a>
    //                               )}
    //                             </span>
    //                           </td>
    //                           <td>{data.carModelName} </td>
    //                           <td>{data.customerName}</td>
    //                           <td>{data.totalprice}</td>

    //                           <td>
    //                             {dats.bookingMgtEdit == true || dats1 == "admin" ? (
    //                               <>
    //                                 <Button
    //                                   onClick={() => {
    //                                     getpopup1(data)
    //                                   }}
    //                                   data-toggle="tooltip"
    //                                   data-placement="bottom"
    //                                   title="Booking status"
    //                                   className="mr-2 mb-3"
    //                                   style={{ padding: "6px", margin: "3px" }}
    //                                   color="warning"
    //                                   outline
    //                                 >
    //                                   <i className="fas fa-user-edit text-dark"></i>
    //                                 </Button>
    //                               </>) : (
    //                               ""
    //                             )}
    //                           </td><td>
    //                             <Button
    //                               onClick={() => {
    //                                 getdata1(data)
    //                               }}
    //                               className="mr-2 mb-3"
    //                               style={{ padding: "6px", margin: "3px" }}
    //                               color="warning"
    //                               outline
    //                               data-toggle="tooltip"
    //                               data-placement="bottom"
    //                               title="View Booking Details"
    //                             >
    //                               <i className="fas fa-eye text-dark "></i>
    //                             </Button>

    //                           </td><td>
    //                             {dats.bookingMgtEdit == true || dats1 == "admin" ? (
    //                               <>
    //                                 <Button
    //                                   data-toggle="tooltip"
    //                                   data-placement="bottom"
    //                                   title="Edit Booking"

    //                                   className="mr-2 mb-3"
    //                                   style={{ padding: "6px", margin: "3px" }}
    //                                   color="success"
    //                                   outline
    //                                   onClick={() => {
    //                                     getdata2(data)
    //                                   }}
    //                                 >
    //                                   <i className="bx bx-edit text-dark "></i>
    //                                 </Button></>) : (
    //                               ""
    //                             )}</td><td>
    //                             {dats.bookingMgtDelete == true || dats1 == "admin" ? (
    //                               <>

    //                                 <Button
    //                                   onClick={() => {
    //                                     manageDelete(data)
    //                                   }}
    //                                   className="mr-2 mb-3"
    //                                   style={{ padding: "6px", margin: "3px" }}
    //                                   color="danger"
    //                                   outline
    //                                 >
    //                                   <i className="fas fa-trash-alt text-dark "></i>
    //                                 </Button></>) : (
    //                               ""
    //                             )}

    //                           </td>
    //                         </tr>
    //                       ))}
    //                     </tbody>
    //                   </Table>
    //                   <div className="mt-3" style={{ float: "right" }}>

    //                     <ReactPaginate
    //                       previousLabel={"Previous"}
    //                       nextLabel={"Next"}
    //                       pageCount={pageCount}
    //                       onPageChange={changePage}
    //                       containerClassName={"pagination"}
    //                       previousLinkClassName={"previousBttn"}
    //                       nextLinkClassName={"nextBttn"}
    //                       disabledClassName={"disabled"}
    //                       activeClassName={"active"}
    //                       total={lists.length}
    //                     />

    //                   </div>
    //                 </div>
    //               </div> */}
    //                <div>
    //                 <div className="table-responsive">
    //                   <Table className="table table-bordered mb-4 mt-2">
    //                     <thead style={{ background: "rgb(1,48,74)", color: 'white' }}>
    //                       <tr className="text-center" >
    //                         <th>S.No</th>
    //                         <th style={{ minWidth: '90px' }}>ID--0</th>
    //                         <th style={{ minWidth: '90px' }}>City</th>
    //                         <th style={{ minWidth: '90px' }}> Agreement Number</th>
    //                         <th style={{ minWidth: '120px' }}>Delivery date & Time</th>
    //                         <th style={{ minWidth: '150px' }}>Requested Car</th>
    //                         <th style={{ minWidth: '90px' }}>Days</th>
    //                         <th style={{ minWidth: '290px' }}>Delivery Address</th>
    //                         <th style={{ minWidth: '90px' }}>Cus:Name</th>
    //                         <th style={{ minWidth: '90px' }}>Mobile</th>
    //                         <th style={{ minWidth: '90px' }}>Country</th>
    //                         <th style={{ minWidth: '90px' }}>BkType</th>
    //                         <th style={{ minWidth: '90px' }}>generated date and time</th>
    //                         <th style={{ minWidth: '90px' }}>Returndate & Time</th>
    //                         <th style={{ minWidth: '90px' }}>Type</th>
    //                         <th style={{ minWidth: '90px' }}>Delivery Location on the Map</th>
    //                         <th style={{ minWidth: '90px' }}>Status</th>
    //                         <th style={{ minWidth: '90px' }}>Vendor</th>
    //                         <th style={{ minWidth: '90px' }}>valid</th>
    //                         <th style={{ minWidth: '90px' }}>Process Booking	</th>
    //                         <th style={{ minWidth: '90px' }}>User Profile	</th>


    //                       </tr>
    //                     </thead>
    //                     <tbody>
    //                       {lists.map((data, key) => (<>
    //                         <tr>
    //                           <th >
    //                             {(pageNumber - 1) * 10 + key + 11}
    //                           </th>
    //                           <td>178786</td>
    //                           <td>Dubai</td>

    //                           <td>12345</td>
    //                           <td>Friday, March 24, 2023 17:00 </td>
    //                           <td>Kia Picanto or Similar</td>
    //                           <td>2 Days</td>
    //                           <td>Al Asayel St. Tamani Arts Building - Business Bay - Dubai - United Arab Emirates</td>
    //                           <td>Sohail Ahmad</td>
    //                           <td>971547443953</td>
    //                           <td>United Arab Emirates</td>
    //                           <td>Self Pickup</td>
    //                           <td>Mar 23, 2023 10:05 PM</td>
    //                           <td>Sunday, March 26, 2023 17:00 </td>
    //                           <td>DEBIT</td>
    //                           <td>	25.187052,55.280647</td>
    //                           <td>Vendor Assigned</td>
    //                           <td>Injaz Rent a car</td>
    //                           <td>Not found</td>
    //                           <td> {dats.bookingMgtEdit == true || dats1 == "admin" ? (
    //                             <>
    //                               <Button
    //                                 data-toggle="tooltip"
    //                                 data-placement="bottom"
    //                                 title="Edit Booking"

    //                                 className="mr-2 mb-3"
    //                                 style={{ padding: "6px", margin: "3px", width: '60px' }}
    //                                 color="success"
    //                                 outline
    //                                 onClick={() => {
    //                                   getdata2(data)
    //                                 }}
    //                               >
    //                                 Edit
    //                               </Button></>) : (
    //                             ""
    //                           )}</td>
    //                           <td> {dats.bookingMgtEdit == true || dats1 == "admin" ? (
    //                             <>
    //                               <Button
    //                                 data-toggle="tooltip"
    //                                 data-placement="bottom"
    //                                 title="Edit Booking"

    //                                 className="mr-2 mb-3"
    //                                 style={{ padding: "6px", margin: "3px", width: '60px' }}
    //                                 color="success"
    //                                 outline
    //                                 onClick={() => {
    //                                   getdata2(data)
    //                                 }}
    //                               >
    //                                 Edit
    //                               </Button></>) : (
    //                             ""
    //                           )}</td>



    //                         </tr>
    //                       </>))}
    //                     </tbody>


    //                   </Table>
    //                   <div className="mt-3" style={{ float: "right" }}>

    //                     <ReactPaginate
    //                       previousLabel={"Previous"}
    //                       nextLabel={"Next"}
    //                       pageCount={pageCount}
    //                       onPageChange={changePage}
    //                       containerClassName={"pagination"}
    //                       previousLinkClassName={"previousBttn"}
    //                       nextLinkClassName={"nextBttn"}
    //                       disabledClassName={"disabled"}
    //                       activeClassName={"active"}
    //                       total={lists.length}
    //                     />

    //                   </div>
    //                 </div>
    //               </div>
    //             </CardBody>
    //           </Card>
    //         </Col>
    //       </Row>


    //     </Container>
    //     <ToastContainer />

    //     <Modal
    //       size="md"
    //       isOpen={modal_small}
    //       toggle={() => {
    //         tog_small()
    //       }}
    //       centered
    //     >
    //       <div className="modal-header">
    //         <h5 className="modal-title mt-0" id="mySmallModalLabel">
    //           Booking Status
    //         </h5>
    //         <button
    //           onClick={() => {
    //             setmodal_small(false)
    //           }}
    //           type="button"
    //           className="close"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">
    //         <Form
    //           onSubmit={e => {
    //             submibooking(e)
    //           }}
    //         ><Row>

    //             <Col md={12}>
    //               <div className="mb-3">
    //                 <Label for="basicpill-firstname-input1">
    //                   Status <span className="text-danger">*</span>
    //                 </Label>
    //                 <select
    //                   value={book.status}
    //                   name="status"
    //                   required
    //                   onChange={e => {
    //                     handleChangebs(e)
    //                   }}
    //                   className="form-select"
    //                 >
    //                   <option value="">Select</option>
    //                   {/* <option value="pending">Pending</option> */}
    //                   <option value="accepted">Accepted</option>
    //                   <option value="onTheWay">ON The Way / Arrival</option>
    //                   <option value="rentalStarted">Rental Started</option>
    //                   <option value="collectNow">Collect Now</option>
    //                   <option value="featureCollect">Feature Collect</option>
    //                   <option value="completed">Completed</option>
    //                   <option value="cancelled">Cancelled</option>
    //                 </select>
    //               </div>
    //             </Col>

    //             {book.status == "accepted" ? (<> <Col md={12}>
    //               <div className="mb-3">
    //                 <Label for="basicpill-firstname-input1">
    //                   Select Driver
    //                 </Label>
    //                 <Select
    //                   style={{ width: "100%" }}
    //                   required
    //                   options={optionGroup11}
    //                   placeholder="Select driver"
    //                   value={selectedOptions1}
    //                   onChange={handleSelect1}
    //                   isSearchable={true}
    //                   name="userList"
    //                 />
    //               </div>

    //             </Col></>) : (
    //               ""
    //             )}


    //             {book.status == "rentalStarted" ? (<> <Col md={12}>
    //               <div className="mb-3">
    //                 <Label for="basicpill-firstname-input3">Kilometer OUT</Label>
    //                 <Input
    //                   type="number"
    //                   className="form-control"
    //                   id="basicpill-firstname-input3"
    //                   value={book.rentalStartKmOut}
    //                   name="rentalStartKmOut"
    //                   placeholder="Enter Kilometer OUT"
    //                   onChange={e => {
    //                     handleChangebs(e)
    //                   }}

    //                 />
    //               </div>
    //             </Col></>) : (
    //               ""
    //             )}

    //             {book.status == "cancelled" ? (<>
    //               <Col md={12}>
    //                 <div className="mb-3">
    //                   <Label for="basicpill-firstname-input2">
    //                     Reason <span className="text-danger">*</span>
    //                   </Label>
    //                   <textarea
    //                     type="text"
    //                     className="form-control"
    //                     id="basicpill-firstname-input2"
    //                     placeholder="Enter Reason"
    //                     value={book.reason}
    //                     name="reason"
    //                     onChange={e => {
    //                       handleChangebs(e)
    //                     }}
    //                   />
    //                 </div>
    //               </Col>
    //             </>) : (
    //               ""
    //             )}
    //             {book.status == "completed" ? (<>
    //               <Col md={12}>
    //                 <div className="mb-3">
    //                   <Label for="basicpill-firstname-input3">Kilometer In</Label>
    //                   <Input
    //                     type="number"
    //                     className="form-control"
    //                     id="basicpill-firstname-input3"
    //                     value={book.carCollectionKmIn}
    //                     name="carCollectionKmIn"
    //                     placeholder="Enter Kilometer In"
    //                     onChange={e => {
    //                       handleChangebs(e)
    //                     }}

    //                   />
    //                 </div>
    //               </Col>

    //             </>) : (
    //               ""
    //             )}
    //             <hr></hr>
    //             <Col md={12}><div style={{ float: "right" }}>
    //               <Button className="m-1" color="primary" type="submit">
    //                 Submit <i className="fas fa-check-circle"></i>
    //               </Button>
    //               <Button
    //                 onClick={() => {
    //                   setmodal_small(false)
    //                 }}
    //                 color="danger"
    //                 type="button"
    //               >
    //                 Cancel <i className="fas fa-times-circle"></i>
    //               </Button>
    //             </div></Col>
    //           </Row></Form>
    //       </div>
    //     </Modal>
    //   </div>
    // </React.Fragment>
  )
}

export default Booking



