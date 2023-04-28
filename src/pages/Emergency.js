import React, { useEffect, useState } from "react"
import {
  CardBody,
  Container,
  Row,
  Col,
  Card,
  Table,
  Modal,
  Button,
  Label,
  Input,
  Form, CardTitle
} from "reactstrap"
import Breadcrumbs from "../components/Common/Breadcrumb"
// import GoogleMapReact from "google-map-react"
import Alert from "../assets/images/alert.png"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
const libraries = ["places"]

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"

function Emergency() {
  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
  }
  const [modal_small1, setmodal_small1] = useState(false)

  function tog_small1() {
    setmodal_small1(!modal_small1)
  }
  const defaultProps = {
    center: {
      lat: 24.421555,
      lng: 54.576599,
    },
    zoom: 11,
  }

  let [form, setform] = useState([])

  const handleChange = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }

  const [user, setuser] = useState([])

  useEffect(() => {
    getAllPayments()
  }, [])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const getAllPayments = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("searchQueryParams", "")
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/emergency/getallcompleteemegencylist",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setuser(res.data.emerResult)
      })
  }

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = user.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(user.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const [search, setsearch] = useState([])

  const searchAll = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)

    const dataArray = new FormData()
    dataArray.append("searchQueryParams", e.target.value)
    dataArray.append("branchId", localStorage.getItem("ids"))

    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/emergency/getallemegencylist",
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setuser(res.data.emerResult)
      })
  }

  const [form1, setform1] = useState([])

  console.log(form1)

  const getpopup = data => {
    tog_small()
    getonecustomer(data)
  }

  const getonecustomer = data => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", data._id)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/emergency/getemegencybyid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform1(res.data.emergencyResult)
        settagging(res.data.emergencyResult)
      })
  }

  const [tagging, settagging] = useState([])
  const [infoOpen, setInfoOpen] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [markerMap, setMarkerMap] = useState({})

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      "AIzaSyDrQG115rY50cbBDbjq2XaQGdAnlncD5e0&libraries=places&callback=initMap",
    libraries,
  })
  const mapStyles = {
    height: "38vh",
    width: "100%",
  }

  const defaultCenter = {
    lat: 24.421555,
    lng: 54.576599,
  }

  const fitBounds = map => {
    const bounds = new window.google.maps.LatLngBounds()
    tagging.map(place => {
      bounds.extend(place.pos)
      return place.id
    })
    map.fitBounds(bounds)
  }

  const loadHandler = map => {
    // Store a reference to the google map instance in state
    setMapRef(map)
    // Fit map bounds to contain all markers
    fitBounds(map)
  }

  // We have to create a mapping of our places to actual Marker objects

  const markerClickHandler = place => {
    // Remember which place was clicked
    setSelectedPlace(place)

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false)
    }
    setInfoOpen(true)
  }

  const markerLoadHandler = (marker, place) => {
    return setMarkerMap(prevState => {
      return { ...prevState, [place]: marker }
    })
  }

  const handleSubmit1 = e => {
    e.preventDefault()
    editbrands()
    clearForm()
  }

  const handleChange1 = e => {
    let myUser = { ...form1 }
    myUser[e.target.name] = e.target.value
    setform1(myUser)
  }

  const editbrands = () => {
    var token = datas
    const docid = form1._id
    const dataArray = new FormData()
    dataArray.append("status", form1.status)
    dataArray.append("reason", form1.reason)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/emergency/updateemegencystatus" +
        "/" +
        docid,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            setmodal_small1(false)
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

  return (
    <div>
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Resolved Emergency" />

            <Row>
              <Col md={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <div style={{ float: "right" }}>
                        {/* <Button
                        className="mr-2 mb-4"
                        style={{ padding: "6px", margin: "3px" }}
                        color="success"
                        outline
                        onClick={() => {
                          tog_small()
                        }}
                      >
                        <i className="bx bx-edit "></i>
                      </Button> */}
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
                      </div>
                      <Table className="table table-bordered mb-4 mt-5">
                        <thead>
                          <tr>
                            <th>S.NO</th>
                            <th>Date</th>
                            <th>Booking Id</th>
                            <th>CustomerName</th>
                            <th>Location</th>
                            <th>Lat ,Lng</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>{" "}
                        <tbody>
                          {lists.map((data, key) => (
                            <tr key={key}>
                              <th>{(pageNumber - 1) * 5 + key + 6}</th>
                              <td>{data.logDateCreated}</td>
                              <td>{data.bookingId}</td>
                              <td>{data.customerName}</td>
                              <td>{data.location}</td>
                              <td>
                                {data.longitude} {data.latittude}
                              </td>
                              <td>Break Down</td>
                              <td>{data.status}</td>
                              <td>
                                {" "}
                                <Button
                                  className="mr-2 mb-4"
                                  style={{ padding: "6px", margin: "3px" }}
                                  color="success"
                                  outline
                                  // onClick={() => {
                                  //   tog_small()
                                  // }}
                                  onClick={() => {
                                    getpopup(data)
                                  }}
                                >
                                  <i className="fas fa-eye text-dark"></i>
                                </Button>
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
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Modal
              isOpen={modal_small}
              toggle={() => {
                tog_small()
              }}
              size="xl"
              // className="modal-fullscreen"
            >
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

              <div
                className="modal-body"
              // style={{ background: "rgb(247,238,237)" }}
              >
                <div>
                  <div className="d-flex justify-content-center">
                    <h5
                      className="modal-title mt-0"
                      id="mySmallModalLabel"
                      style={{ color: "red" }}
                    >
                      {/* <img
                        src={Alert}
                        style={{ height: "70px", width: "100%" }}
                      ></img> */}
                    </h5>
                  </div>

                  <div>

                    {/* <Col md={12} className="d-flex justify-content-end mb-1">
                      <Button
                        color="danger"
                        onClick={() => {
                          tog_small1()
                        }}
                      >
                        Action
                      </Button>
                    </Col> */}

                    <Row className="mt-5" >
                      <Col xl="5">
                        <div className=" mt-2">
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
                                src={"http://103.186.185.77:5021/" + form1.custPic}
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
                                  <h5 className="font-size-15">{form1.customerName}</h5>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>

                        <p className="text-muted mb-3">{form1.personalDetail}</p>
                        <ul className="verti-timeline list-unstyled">
                          <li className="event-list">
                            <div className="event-timeline-dot">
                              <i className="bx bx-right-arrow-circle"></i>
                            </div>
                            <div className="d-flex">
                              <div className="flex-grow-1">
                                <div>
                                  <h6 className="font-size-14 mb-1">
                                    Booking Id</h6>
                                  <p className="text-muted fs-14 mb-0">
                                    {form1.booking_id}
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
                                  <h6 className="font-size-14 mb-1">Customer Name</h6>
                                  <p className="text-muted fs-14 mb-0">
                                    {form1.customerName}
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
                                  <h6 className="font-size-14 mb-1">Phone No</h6>
                                  <p className="text-muted fs-14 mb-0">
                                    {form1.custPhone}
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
                                  <h6 className="font-size-14 mb-1">Email</h6>
                                  <p className="text-muted fs-14 mb-0">
                                    {form1.custEmail}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <div className="mt-5">
                          <CardTitle className="mb-4">
                            Reason
                          </CardTitle>
                          <ul className="verti-timeline list-unstyled">
                            <li className="event-list">
                              <div className="event-timeline-dot">
                                <i className="bx bx-right-arrow-circle"></i>
                              </div>
                              <div className="d-flex">
                                <div className="flex-grow-1">
                                  <div>
                                    <h6 className="font-size-14 mb-1">
                                      Location</h6>
                                    <p className="text-muted fs-14 mb-0">
                                      {form1.location}
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
                                      status</h6>
                                    <p className="text-muted fs-14 mb-0">
                                      {form1.status}
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
                                      Longitude</h6>
                                    <p className="text-muted fs-14 mb-0">
                                      {form1.longitude}
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
                                      Latitude</h6>
                                    <p className="text-muted fs-14 mb-0">
                                      {form1.latittude}
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
                                      Reason</h6>
                                    <p className="text-muted fs-14 mb-0">
                                      {form1.reason}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={7}>
                        <Row>
                          <div className="mini-stats-wid">
                            <div className="border-bottom card-body">
                              <div style={{ float: "right" }}>
                                <span className="text-muted">Status : </span>{" "}
                                <span className="badge bg-success">
                                  {form1.status}
                                </span>
                              </div>
                              <div className="d-flex">
                                <img
                                  src={"http://103.186.185.77:5021/" + form1.carImage}
                                  alt=""
                                  height="50"
                                />
                                <div className="flex-grow-1 ms-3">
                                  <h5 className="fw-semibold">
                                    {form1.carBrandName} / {form1.carModelName}
                                  </h5>
                                  <ul className="list-unstyled hstack gap-2 mb-0">
                                    <li>
                                      <i className="bx bx-building-house"></i>{" "}
                                      <span className="text-muted">
                                        {form1.carMakeYear}
                                      </span>
                                    </li>
                                    <li>
                                      <i className="bx bx-map"></i>{" "}
                                      <span className="text-muted">
                                        {form1.branchName}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="mt-2">
                              <ul className="verti-timeline list-unstyled">
                                <li className="event-list">
                                  <div className="event-timeline-dot">
                                    <i className="bx bx-right-arrow-circle"></i>
                                  </div>
                                  <div className="d-flex">
                                    <div className="flex-grow-1">
                                      <div>
                                        <h6 className="font-size-14 mb-1">
                                          Car</h6>
                                        <p className="text-muted fs-14 mb-0">
                                          {form1.carType}  {form1.carBrandName} {" "}
                                          {form1.carModelName}
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
                                          Registation Number</h6>
                                        <p className="text-muted fs-14 mb-0">
                                          {form1.carRegistNumber}
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
                                          From Date</h6>
                                        <p className="text-muted fs-14 mb-0">
                                          {form1.pickupDate}
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
                                          To Date</h6>
                                        <p className="text-muted fs-14 mb-0">
                                          {form1.returnDate}
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
                                          Pickup Location</h6>
                                        <p className="text-muted fs-14 mb-0">
                                          {form1.pickupLocation}
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
                                          Return Location</h6>
                                        <p className="text-muted fs-14 mb-0">
                                          {form1.returnLocation}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Row>
                        <Row>
                          <Col md={12} className="mt-3">
                            <div
                              style={{
                                width: "100%",
                              }}
                            >
                              {" "}
                              <CardTitle className="mb-1">
                                Location
                              </CardTitle>
                              {isLoaded ? (
                                <GoogleMap
                                  id="map"
                                  mapContainerStyle={mapStyles}
                                  zoom={8}
                                  center={defaultCenter}
                                  draggable={true}
                                  autoPan={true}
                                >
                                  <Marker
                                    position={{
                                      lat: parseInt(tagging.latittude),
                                      lng: parseInt(tagging.longitude),
                                    }}
                                    onLoad={marker =>
                                      markerLoadHandler(
                                        marker,
                                        tagging.latittude
                                      )
                                    }
                                    onClick={event =>
                                      markerClickHandler(
                                        event,
                                        tagging.longitude
                                      )
                                    }
                                  />

                                  {infoOpen && selectedPlace && (
                                    <InfoWindow
                                      anchor={markerMap[selectedPlace.id]}
                                      onCloseClick={() => setInfoOpen(false)}
                                    >
                                      <div></div>
                                    </InfoWindow>
                                  )}
                                </GoogleMap>
                              ) : (
                                ""
                              )}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Modal>

            <Modal
              isOpen={modal_small1}
              toggle={() => {
                tog_small1()
              }}
              size="sm"
            >
              <Form
                onSubmit={e => {
                  handleSubmit1(e)
                }}
              >
                <div className="modal-header">
                  <h5
                    className="modal-title mt-0"
                    id="mySmallModalLabel"
                    style={{ color: "black" }}
                  >
                    Action
                  </h5>
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
                <div className="modal-body m-2">
                  <Row className="mb-4 ">
                    <Label for="basicpill-firstname-input1">
                      Status<span className="text-danger">*</span>
                    </Label>
                    <select
                      name="status"
                      value={form1.status}
                      onChange={e => {
                        handleChange1(e)
                      }}
                      className="form-select mb-3"
                    >
                      <option value="">Select</option>
                      <option value="pending">Initiated</option>
                      <option value="inProgress">processing</option>
                      <option value="complete">Resolved</option>
                    </select>

                    {form1.status == "pending" ? (
                      <>
                        <Label>
                          Reason<span className="text-danger">*</span>
                        </Label>

                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Enter Reason"
                          rows="3"
                          name="reason"
                          value={form1.reason}
                          onChange={e => {
                            handleChange1(e)
                          }}
                        ></textarea>
                      </>
                    ) : (
                      ""
                    )}
                  </Row>
                </div>
                <div className="modal-footer">
                  <div style={{ float: "right" }}>
                    <Button className="m-1" color="primary" type="submit">
                      Submit <i className="fas fa-check-circle"></i>
                    </Button>{" "}
                  </div>
                </div>
              </Form>
            </Modal>
            <ToastContainer />
          </Container>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Emergency
