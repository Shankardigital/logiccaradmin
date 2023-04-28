import React, { useState, useEffect } from "react"
import {
  Card, CardBody, Col, Container, Row, Button, Table, Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Progress, Modal
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import a1 from "../../assets/images/users/a1.jpg"
import a2 from "../../assets/images/users/a2.jpg"
import a3 from "../../assets/images/users/a3.jpg"
import a4 from "../../assets/images/users/a4.jpg"
import a5 from "../../assets/images/users/a5.jpg"
import a6 from "../../assets/images/users/a6.jpg"
import { useHistory, Link } from "react-router-dom"
import a7 from "../../assets/images/users/a7.jpg"
import classnames from "classnames";
import p1 from "../../assets/images/p1.pdf"
import { saveAs } from 'file-saver';


function BookingStatus() {
  let history = useHistory()

  const [progressbarvalue, setprogressbarvalue] = useState(0);

  const [activeTab, setactiveTab] = useState(1);

  const [passedSteps, setPassedSteps] = useState([1]);


  function toggleTab(tab, value) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 7) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
    setprogressbarvalue(value);
  }

  useEffect(() => {
    toggleTab(1, 1);

  }, [])

  const on1 = () => {
    toggleTab(2, 15);
  }

  const on2 = () => {
    toggleTab(3, 32);
  }

  const downloadImage = () => {
    saveAs(p1)

  }

  const [modal_small1, setmodal_small1] = useState(false)

  function tog_small1() {
    setmodal_small1(!modal_small1)
    removeBodyCss()
  }

  const getpopup1 = () => {
    tog_small1()
  }



  return (

    <React.Fragment>

      <div className="page-content">

        <Container fluid={true}>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Booking Details" />
          <Row>


            <Col xl="9">
              <div className="progress-nav mb-4">

                <Progress
                  value={progressbarvalue}
                  // style={{ height: "2px" }}
                  className="ood"
                />

                <Nav
                  className="nav-pills progress-bar-tab custom-nav"
                  role="tablist"

                >
                  <NavItem>
                    <NavLink
                      to="#"
                      id="pills-gen-info-tab"
                      className={classnames(
                        {
                          active: activeTab === 1,
                          done: activeTab <= 7 && activeTab >= 0,
                        },
                        "rounded-pill"
                      )}
                      onClick={() => {
                        toggleTab(1, 1);
                      }}
                      tag="button"
                    >
                      <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                    </NavLink>
                  </NavItem>


                  <NavItem>
                    <NavLink
                      to="#"
                      id="pills-gen-info-tab"
                      className={classnames(
                        {
                          active: activeTab === 2,
                          done: activeTab <= 7 && activeTab > 1,
                        },
                        "rounded-pill"
                      )}
                      onClick={() => {
                        toggleTab(2, 15);
                      }}
                      tag="button"
                    >
                      <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                    </NavLink>

                  </NavItem>

                  <NavItem>
                    <NavLink
                      to="#"
                      id="pills-gen-info-tab"
                      className={classnames(
                        {
                          active: activeTab === 3,
                          done: activeTab <= 7 && activeTab > 2,
                        },
                        "rounded-pill"
                      )}
                      onClick={() => {
                        toggleTab(3, 32);
                      }}
                      tag="button"
                    >
                      <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                    </NavLink>

                  </NavItem>


                  <NavItem>
                    <NavLink
                      to="#"
                      id="pills-gen-info-tab"
                      className={classnames(
                        {
                          active: activeTab === 4,
                          done: activeTab <= 7 && activeTab > 3,
                        },
                        "rounded-pill"
                      )}
                      onClick={() => {
                        toggleTab(4, 48);
                      }}
                      tag="button"
                    >
                      <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                    </NavLink>

                  </NavItem>


                  <NavItem>
                    <NavLink
                      to="#"
                      id="pills-gen-info-tab"
                      className={classnames(
                        {
                          active: activeTab === 5,
                          done: activeTab <= 7 && activeTab > 4,
                        },
                        "rounded-pill"
                      )}
                      onClick={() => {
                        toggleTab(5, 68);
                      }}
                      tag="button"
                    >
                      <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                    </NavLink>

                  </NavItem>


                  <NavItem>
                    <NavLink
                      to="#"
                      id="pills-gen-info-tab"
                      className={classnames(
                        {
                          active: activeTab === 6,
                          done: activeTab <= 7 && activeTab > 5,
                        },
                        "rounded-pill"
                      )}
                      onClick={() => {
                        toggleTab(6, 84);
                      }}
                      tag="button"
                    >
                      <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                    </NavLink>

                  </NavItem>


                  <NavItem>
                    <NavLink
                      to="#"
                      id="pills-gen-info-tab"
                      className={classnames(
                        {
                          active: activeTab === 7,
                          done: activeTab <= 7 && activeTab > 6,
                        },
                        "rounded-pill"
                      )}
                      onClick={() => {
                        toggleTab(7, 100);
                      }}
                      tag="button"
                    >
                      <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                    </NavLink>

                  </NavItem>
                </Nav>
              </div>

              {/* <Nav
                  className="nav-pills progress-bar-tab custom-nav"
                  role="tablist"

                >
                  <NavItem>
                    <NavLink
                      to="#"
                      id="pills-gen-info-tab"
                      className={classnames(
                        {
                          active: activeTab === 1,
                          done: activeTab <= 7 && activeTab >= 0,
                        },
                        "rounded-pill"
                      )}
                      onClick={() => {
                        toggleTab(1, 1);
                      }}
                      tag="button"
                    >
                      <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                    </NavLink>
                  </NavItem> */}
            </Col>


            <Col xl="3">


              <div style={{ float: 'right' }}>
                {activeTab === 1 ? <>
                  <Button
                    color="danger"
                  >

                    Reject
                  </Button>
                  <Button
                    className="m-1"
                    color="info"
                    onClick={() => {
                      on1()
                    }}
                  >

                    Accept
                  </Button>
                </> : ""}

                {activeTab === 2 ? <>

                  <Button
                    className="m-1"
                    color="info"
                    onClick={() => {
                      on2()
                    }}
                  >

                    Mark As Ready for Pickup
                  </Button>
                </> : ""}

                {activeTab === 3 ? <>

                  <Button
                    className="m-1"
                    color="info" outline
                    onClick={downloadImage}
                  >

                    Print
                  </Button>
                </> : ""}

                <Button
                  onClick={history.goBack}
                  color="primary"
                >
                  <i className="far fa-arrow-alt-circle-left"></i>
                  Back
                </Button></div>
            </Col>
          </Row>

          <Row>
            <Col xl="9" >
              <Row>
                <Col>
                  <p style={{ fontSize: '11px', fontWeight: "600" }} >REQUESTED</p>
                </Col>
                <Col>
                  <p style={{ fontSize: '11px', fontWeight: "600" }}>ACCEPTED</p>
                </Col>
                <Col>
                  <p style={{ fontSize: '11px', fontWeight: "600" }}>READY FOR PICK UP</p>
                </Col>
                <Col>
                  <p style={{ fontSize: '11px', fontWeight: "600" }} className="text-center">CAR PICKED</p>
                </Col>
                <Col>
                  <p style={{ fontSize: '11px', fontWeight: "600" }} className="text-center">RETURN REQUESTED</p>
                </Col>
                <Col>
                  <p style={{ fontSize: '11px', fontWeight: "600" }} className="text-end">RETURN ACCEPTED</p>
                </Col>
                <Col>
                  <p style={{ fontSize: '11px', fontWeight: "600" }} className="text-end">RETURNED</p>
                </Col>
              </Row>
            </Col>
          </Row>


          <Row className="mt-3">
            <Col xl="6">
              <Row>
                <Col xl="6" className="text-center">
                  <h6 style={{ fontWeight: 'bold', color: "black" }}>Agreement number</h6>
                  <p>INZ03434 0 edit</p>
                </Col>
                <Col xl="6" >
                  <h6 style={{ fontWeight: 'bold', color: "black" }}> Booking date time</h6>
                  <p>27/03/2023, 15:30</p>
                </Col>
              </Row>
            </Col>
            <Col xl="6"></Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <h6 style={{ fontWeight: 'bold', color: "black" }}>Car details:</h6>
                  <hr></hr>
                  <Row>
                    <Col xl="4" className=" mb-3">
                      <img src={a7} width="100%" height="100%" ></img>
                      <div className="monthly-price mb-3">
                        <span className="vehicle-price">
                          <span className="vehicle-price-value">AED 1627.5</span>
                          <span className="vehicle-price-month">/mo</span>
                        </span>
                      </div>
                    </Col>

                    <Col xl="8" >

                      <h4 className=" mt-3 mb-2">Nissan Sunny BASIC - 2022 </h4>

                      <h6 style={{ fontWeight: 'bold', color: "black" }}>Plate number: <span className="text-muted" >DP-95551</span></h6>

                      <h6 style={{ fontWeight: 'bold', color: "black" }}> SKU:<span className="text-muted"> AE-68-B11-M08-Y22</span></h6>

                      <Link to="/ViewCarDetails" ><h5 className="mt-3 mb-2" style={{ color: '#27c1ec' }}>View car → </h5>
                      </Link>

                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>

            <Col xl="6">
              <Card>
                <CardBody>
                  <h6 style={{ fontWeight: 'bold', color: "black" }}>Fulfilment details</h6>
                  <hr></hr>
                  <Row className=" mt-3 mb-2">

                    <Col xl="4" >
                      <iframe width="100%" height="80%" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemont+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  ></iframe>
                    </Col>

                    <Col xl="4" className="mt-4 mb-2">

                      <h6 style={{ fontWeight: 'bold', color: "black" }}>User pickup window: </h6>

                      <span className="text-muted" >DP-95551</span>

                      <a onClick={() => {
                        getpopup1();
                      }}><h5 className="mt-3 mb-2" style={{ color: '#27c1ec' }}>
                          Share location  →
                        </h5></a>

                    </Col>


                    <Col xl="4" className="mt-4 mb-2">

                      <h6 style={{ fontWeight: 'bold', color: "black" }} >User pickup address: </h6>

                      <span className="text-muted" >Dubai, Business Bay</span>
                      <h5 className="mt-3 mb-2" style={{ color: '#27c1ec' }}>
                        View Address  →
                      </h5>
                    </Col>


                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>


          <Row>
            <Col xl="12">
              <Card>
                <CardBody>
                  <h6 style={{ fontWeight: 'bold', color: "black" }}>Subscription details</h6>
                  <hr></hr>
                  <Row className="mt-2 mb-2">
                    <Col md={3}>
                      <h5 className="text-muted text-center"> Mileage</h5>
                      <div className="border ">
                        <div className="mt-4 mb-4">
                          <div className="d-flex justify-content-center">
                            <p>  <i className="bx bxs-gas-pump" style={{ fontSize: '30px', color: '#0174FE' }}></i></p>
                          </div>
                          <div className="text-center"><h6 style={{ fontWeight: 'bold', color: "black" }}>2500 km</h6></div>
                        </div>
                      </div>
                    </Col>
                    <Col md={3}><h5 className="text-muted text-center">Insurance</h5>
                      <div className="border ">
                        <div className="mt-4 mb-4">
                          <div className="d-flex justify-content-center">
                            <p> <i className="bx bxs-shield" style={{ fontSize: '30px', color: '#0174FE' }}></i></p>
                          </div>
                          <div className="text-center"><h6 style={{ fontWeight: 'bold', color: "black" }}>Standard</h6></div>
                        </div>
                      </div>
                    </Col>
                    <Col md={3}><h5 className="text-muted text-center">Payment Plan</h5>
                      <div className="border ">
                        <div className="mt-4 mb-4">
                          <div className="d-flex justify-content-center">
                            <p><i className="bx bxs-calendar" style={{ fontSize: '30px', color: '#0174FE' }} ></i></p>
                          </div>
                          <div className="text-center"><h6 style={{ fontWeight: 'bold', color: "black" }}>1 Month </h6></div>
                        </div>
                      </div>
                    </Col>
                    <Col md={3}><h5 className="text-muted text-center">Additional driver</h5>
                      <div className="border">
                        <div className="mt-4 mb-4">
                          <div className="d-flex justify-content-center">
                            <p style={{ fontSize: '30px', color: '#0174FE' }}>0</p>
                          </div>
                          <div className="text-center">  <h6 style={{ fontWeight: 'bold', color: "black" }}> 0 additional driver </h6></div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>


          <Row>
            <Col xl="12">
              <Card>
                <CardBody>
                  <h6 style={{ fontWeight: 'bold', color: "black" }}>Customer Details</h6>
                  <Row className="mt-5 mb-2">

                    <hr></hr>
                    <Col md={4}><h6 className="text-muted">
                      NAME</h6> </Col>
                    <Col md={4}><h6 className="text-muted">PHONE NUMBER</h6> </Col>
                    <Col md={4}> <h6 className="text-muted">EMAIL</h6></Col>

                    <hr></hr>

                    <Col md={4}><h6 style={{ fontWeight: 'bold', color: "black" }} className="mt-4 mb-4">Paulina Lipiec</h6>
                      <p className="text-muted">Driver License: 4177540</p> </Col>
                    <Col md={4}><h6 style={{ fontWeight: 'bold', color: "black" }} className="mt-4 mb-4">521589059</h6> </Col>
                    <Col md={4}><h6 style={{ fontWeight: 'bold', color: "black" }} className="mt-4 mb-4">paulina.lipiec@icloud.com</h6>
                      <p className="text-muted">Address: Dubai</p></Col>

                    <hr></hr>

                    <Col md={4}><h6 className="text-muted">EMIRATES ID FRONT IMAGE</h6> </Col>
                    <Col md={4}> <h6 className="text-muted">DRIVER LICENSE (FRONT)</h6></Col>
                    <Col md={4}><h6 className="text-muted">PASSPORT</h6> </Col>
                    <hr></hr>

                    <Col md={4} className="mt-3">
                      <a href="https://s3.ap-south-1.amazonaws.com/invygo-new/production/user/original_rJbvTPag31679813977112.png" target="_blank" rel="noreferrer">
                        <img src={a4} width="70%" height="70%"></img>
                      </a>
                    </Col>

                    <Col md={4} className="mt-3">
                      <a href="https://s3.ap-south-1.amazonaws.com/invygo-new/production/user/original_HkJv6P6gh1679813975422.png" target="_blank" rel="noreferrer">
                        <img src={a3} width="70%" height="70%" ></img>
                      </a>
                    </Col>

                    <Col md={4} className="mt-3">
                      <a href="https://s3.ap-south-1.amazonaws.com/invygo-new/production/user/original_rkXPTPTg31679813978767.png" target="_blank" rel="noreferrer">
                        <img src={a5} width="70%" height="70%" ></img>
                      </a>
                    </Col>

                  </Row>

                  <Row>

                    <hr></hr>

                    <Col md={4}><h6 className="text-muted">EMIRATES ID BACK IMAGE</h6> </Col>
                    <Col md={4}> <h6 className="text-muted">DRIVER LICENSE (BACK)</h6></Col>
                    <Col md={4}><h6 className="text-muted">VISA</h6> </Col>

                    <hr></hr>

                    <Col md={4}>
                      <a href="https://s3.ap-south-1.amazonaws.com/invygo-new/production/user/original_ByMPaPpen1679813977948.png" target="_blank" rel="noreferrer">
                        <img src={a1} width="70%" height="70%" alt="example"  ></img>
                      </a>
                    </Col>

                    <Col md={4}>
                      <a href="https://s3.ap-south-1.amazonaws.com/invygo-new/production/user/original_rJlPTw6g21679813976355.png" target="_blank" rel="noreferrer">
                        <img src={a6} width="70%" height="70%"  ></img>
                      </a>
                    </Col>

                    <Col md={4}>
                      <a href="https://s3.ap-south-1.amazonaws.com/invygo-new/production/user/original_Bk4P6vTx21679813979551.png" target="_blank" rel="noreferrer">
                        <img src={a2} width="70%" height="70%" ></img>
                      </a>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>
          </Row>

          <Col md={12} className="mt-3">
            <Card>
              <CardBody>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <div>

                      <h6 style={{ fontWeight: 'bold', color: "black" }}>TRANSACTIONS Details :</h6>
                      <div className="table-responsive">
                        <Table className="table table-bordered mb-4 mt-3">
                          <thead>
                            <tr>
                              <th>INVOICE NUMBER</th>
                              <th>AMOUNT</th>
                              <th>START DATE</th>
                              <th>END DATE </th>
                              <th>DEALER </th>
                              <th>DEALER INVOICE NUMBER</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p style={{ fontWeight: 'bold' }} className="text-info">329519</p>
                                <br></br> Initial payment for booking 71779
                              </td>
                              <td>AED 1627.5</td>
                              <td>27 March, 2023 </td>
                              <td>25 April, 2023</td>
                              <td>Logic Cars</td>
                              <td>

                                <Row>
                                  <Col md={8}>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input3"
                                      placeholder="Invoice" />
                                  </Col>

                                  <Col md={4}>
                                    <i className="bx bxs-plus-circle" style={{ fontSize: '30px', color: 'green' }}></i>
                                  </Col>
                                </Row>
                              </td>
                              <td>Pending</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>



          <Modal
            size="md"
            isOpen={modal_small1}
            toggle={() => {
              tog_small1()
            }}
            centered

          >
            <div className="modal-header">
              <h5 className="modal-title mt-0" id="mySmallModalLabel">
                Share Booking Location with Driver
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
            <div className="modal-body">
              <Row>

                <Col md={4}>
                  <label>Driver Name : </label>
                </Col>
                <Col md={8}>
                  <input type="text" placeholder="Name" className="form-control" />
                </Col>

                <Col md={4} className="mt-3">
                 <select type="text" className="form-select"> 

                 <option>Select</option>
                 <option>+77</option>
                 <option>+91</option>
                 <option>+77</option>

                 </select>
                </Col>
                <Col md={8} className="mt-3">
                <input type="number" placeholder="Mobile (9 digit)" className="form-control" />
                </Col>

              </Row>
            </div>
            <hr></hr>

            <Col md={12}><div style={{ float: "right" }}>
              <Button className="m-1 mt-1 mb-2" color="primary" type="submit">
                Send Sms <i className="fas fa-check-circle"></i>
              </Button>


            </div>


            </Col>
          </Modal>


        </Container>
      </div >
    </React.Fragment >
  )
}

export default BookingStatus