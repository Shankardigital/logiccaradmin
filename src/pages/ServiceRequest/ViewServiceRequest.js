import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Input,
  Modal,
  Label,
  Form,
  Nav,
  NavItem,
  NavLink, TabContent, TabPane, Card, CardBody, Button, Progress, Table
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import classnames from "classnames"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import a7 from "../../assets/images/users/a7.jpg"

function ViewServiceRequest() {
  let history = useHistory()

  const [modal_small, setmodal_small] = useState(false)
  const [modal_small1, setmodal_small1] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
  }

  function tog_small1() {
    setmodal_small1(!modal_small1)
  }

  const [activeTab1, setactiveTab1] = useState(1);
  const [passedSteps1, setPassedSteps1] = useState([1]);

  function toggleTab1(tab1) {
    if (activeTab1 !== tab1) {
      var modifiedSteps1 = [...passedSteps1, tab1];

      if (tab1 >= 1 && tab1 <= 1) {
        setactiveTab1(tab1);
        setPassedSteps1(modifiedSteps1);
      }
    }
  }

  const [service, setservice] = useState({})
  console.log(service.activeTab)
  const [form, setform] = useState([])

  const handlechange = (e) => {
    const myUser = { ...form };
    myUser[e.target.name] = e.target.value
    setform(myUser)

  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

  const getByservices = async () => {
    try {
      const token = datas;
      const params = {
        dealerId: data.user.dealerId,
        id: sessionStorage.getItem("serviceid"),
      };
      const response = await axios.post(
        "http://103.186.185.77:5021/api/v1/admin/servicerequest/getbyid",
        params,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
      return response.data.serviceRequest;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getServiceupdate = (e) => {
    e.preventDefault()
    var token = datas
    const serid = sessionStorage.getItem("serviceid")
    const params = {
      dealerId: data.user.dealerId,
    }

    if (service.status === "Requested") {
      params.status = "Scheduled";
      params.activeTab = 2;
      params.progressbarvalue = 50;
      params.scheduledDate = form.scheduledDate + "," + form.scheduledTime;
    } else if (service.status === "Scheduled") {
      params.status = "Resolved";
      params.activeTab = 3;
      params.progressbarvalue = 100;
    }
    axios
      .post(
        `http://103.186.185.77:5021/api/v1/admin/servicerequest/updaterequest/${serid}`,
        params,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        if (res.status === 200) {
          toast(res.data.message)
          getByservices()
          if (res.data.updateService.status === "Scheduled") {
            setmodal_small(false)
            toggleTab(2, 50);
          } else if (res.data.updateService.status === "Resolved") {
            setmodal_small1(false)
            toggleTab(3, 100);
          }

        }
      })
  }


  // useEffect(() => {
  //   getByservices()
  //   setActiveTab(service.activeTab )
  //   setPassedSteps(service.activeTab )
  //   setprogressbarvalue(service.progressbarvalue);
  // }, [])

  useEffect(() => {
    async function fetchData() {
      const data = await getByservices();
      if (data) {
        setservice(data);
        setActiveTab(data.activeTab || 1);
        setPassedSteps([data.activeTab || 1]);
        setprogressbarvalue(data.progressbarvalue || 0);
      }
    }
    fetchData();
  }, []);

  const [activeTab, setActiveTab] = useState(service.activeTab || 1);
  const [progressbarvalue, setprogressbarvalue] = useState(service.progressbarvalue || 0);
  console.log(progressbarvalue);
  const [passedSteps, setPassedSteps] = useState([service.activeTab || 1]);

  // const [activeTab, setActiveTab] = useState(service.activeTab || 1);
  // const [progressbarvalue, setprogressbarvalue] = useState(service.progressbarvalue || 0);
  // console.log(progressbarvalue)
  // const [passedSteps, setPassedSteps] = useState([service.activeTab || 1]);
  // console.log(passedSteps)


  // useEffect(() => {

  // }, [activeTab, progressbarvalue]);

  // const toggleTab = (tab, percent) => {
  //   setActiveTab(tab);
  //   setPercentage(percent);
  // };

  // const [activeTab, setactiveTab] = useState(1);

  function toggleTab(tab, value) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];
      setActiveTab(tab);
      setPassedSteps(modifiedSteps);
    }
    setprogressbarvalue(value);
  }


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="View Service Request" />
          <div className="mt-2">
            <Row>
              <Col xl="4">
                <div className="progress-nav mb-4">

                  <Progress
                    value={progressbarvalue}
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
                        // onClick={() => {
                        //   toggleTab(1, 1);
                        // }}
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
                        // onClick={() => {
                        //   toggleTab(2, 50);
                        // }}
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
                        // onClick={() => {
                        //   toggleTab(3, 100);
                        // }}
                        tag="button"
                      >
                        <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                      </NavLink>

                    </NavItem>

                  </Nav>

                </div>
              </Col>
              <Col xl="4">
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
                          active: activeTab1 === 1,
                          done: activeTab1 <= 1 && activeTab1 > 1
                        },
                        "rounded-pill"
                      )}
                      // onClick={() => {
                      //   toggleTab1(1, 100);
                      // }}
                      tag="button"
                    >
                      <i className="bx bx-check" style={{ fontSize: '25px', fontWeight: 'bold' }}></i>
                    </NavLink>

                  </NavItem>
                </Nav>
              </Col>

              <Col xl="4">
                <div style={{ float: 'right' }}>
                  {service.status == "Requested" ? (
                    <Button
                      onClick={tog_small}

                      className="m-1"
                      color="info"
                    >
                      Scheduled
                      {/* Mark as Resolved */}
                    </Button>
                  ) : ""}
                  {service.status == "Scheduled" ? (
                    <Button
                      onClick={tog_small1}

                      className="m-1"
                      color="info"
                    >
                      Mark as Resolved
                    </Button>
                  ) : ""}
                  <Button
                    onClick={history.goBack}
                    color="primary"
                  >
                    <i className="far fa-arrow-alt-circle-left"></i>
                    Back
                  </Button>
                </div>
              </Col>
            </Row>

            <Row>

              <Col xl="5" >

                <Row>

                  <Col xl="3">
                    <p style={{ fontSize: '11px', fontWeight: "600" }} className="text-start">REQUESTED</p>
                  </Col>

                  <Col xl="3">
                    <p style={{ fontSize: '11px', fontWeight: "600" }} className="text-end">Scheduled</p>
                  </Col>

                  <Col xl="3">
                    <p style={{ fontSize: '11px', fontWeight: "600" }} className="text-end">Resolved</p>
                  </Col>

                  <Col xl="3" >
                    <p style={{ fontSize: '11px', fontWeight: "600" }} className="text-center">CAR PICKED</p>
                  </Col>

                </Row>

              </Col>

            </Row>

          </div>

          <h5 className="mt-2">Vechicle Details</h5>
          <Row className="mt-3">
            <Col xl="12" >
              <Card>
                <CardBody>
                  <Row>
                    <Col xl="8">
                      <h5>Service Request No. {service.requestNumber} - routine service</h5>
                      <Table id="empTable"
                        className="table table-bordered mb-3 mt-5">
                        <tbody>
                          <tr>
                            <th>
                              Booking Number:
                            </th>
                            <td className="text-end">
                              {service.bookingNo}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              Agreement Number:
                            </th>
                            <td className="text-end">
                              {service.aggrementNumber}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              Date of Request:
                            </th>
                            <td className="text-end">
                              {service.date}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              Location of Vechicle:
                            </th>
                            <td className="text-end">
                              {service.location}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              Type:
                            </th>
                            <td className="text-end">
                              {service.type}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              Priority:
                            </th>
                            <td className="text-end">
                              {service.priority}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              Description:
                            </th>
                            <td className="text-end" >

                              {service.description}

                            </td>
                          </tr>
                        </tbody>

                      </Table>

                    </Col>

                    <Col xl="4">
                      <div style={{ float: 'right' }} className="mb-4 text-center">
                        <h5 style={{ color: 'black' }}>Scheduled time window</h5>
                        <span>4 Apr, 2023 - 12:30 - 15:30</span>
                      </div>

                      <Table id="empTable"
                        className="table table-bordered mb-3 mt-5">
                        <tbody>
                          <tr>
                            <td className="text-center">
                              <span>
                                26 Mar, 2023 12:33
                              </span>
                              <h5 style={{ color: 'black' }}>
                                Nissan Sunny - 2022
                              </h5>
                              <img src={a7} width="80%" height="80%" ></img>

                            </td>
                          </tr>

                          <tr>
                            <td className="text-center">
                              <span>Plate Number: <span style={{ color: 'black', fontWeight: 'bold' }}>DP-95551</span></span>

                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>


          <h5>Customer Details</h5>
          <Row className="mt-3">
            <Col xl="12" >
              <Card>
                <CardBody>

                  <Table>
                    <thead>
                      <tr>
                        <td>Name</td>
                        <td>Phone Number</td>
                        <td>Email</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1. {service.customerName}</th>
                        <th>{service.phone}</th>
                        <th>{service.eamil}</th>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h5>Documents</h5>
          <Row className="mt-3">
            <Col xl="12" >
              <Card>
                <CardBody>
                  <Row className="mt-3 mb-3">
                    <Col md={4}>
                      <h5 className="mt-3" style={{ fontWeight: 'bold' }}> License</h5>
                    </Col>

                    <Col md={4}>

                      <a href="https://s3.ap-south-1.amazonaws.com/invygo-new/production/user/original_HkJv6P6gh1679813975422.png"
                        target="_blank" rel="noopener noreferrer">
                        <h5 style={{ color: '#396BBE', fontWeight: 'bold' }}>License Front</h5></a>
                      <a href="https://s3.ap-south-1.amazonaws.com/invygo-new/production/user/original_rJlPTw6g21679813976355.png"
                        target="_blank" rel="noopener noreferrer"><h5 style={{ color: '#396BBE', fontWeight: 'bold' }}>License Back</h5>
                      </a>
                    </Col>

                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>


          <h5>Updates</h5>
          <Card>
            <CardBody>
              <Row>

                <Col xl="12">
                  <Table >
                    <thead>
                      <tr>
                        <td>Action</td>
                        <td>Time window</td>
                        <td>Updated By</td>
                        <td>Updated At</td>
                      </tr>
                    </thead>
                    <tbody>
                      {service.status == "Requested" ? (
                        <tr>
                          <th>Request created
                          </th>
                          <th>
                            n/a
                          </th>
                          <th>
                            {service.customerName}
                          </th>
                          <th>
                            {service.date}
                          </th>
                        </tr>
                      ) : ""}
                      {service.status == "Scheduled" ? (
                        <tr>
                          <th>Scheduled
                          </th>
                          <th>
                            {service.scheduledDate}
                          </th>
                          <th>
                            {service.adminName}
                          </th>
                          <th>
                            {service.date}
                          </th>
                        </tr>
                      ) : ""}
                      {service.status == "Resolved" ? (
                        <tr>
                          <th>Resolved
                          </th>
                          <th>
                            n/a
                          </th>
                          <th>
                            {service.adminName}
                          </th>
                          <th>
                            {service.date}
                          </th>
                        </tr>
                      ) : ""}

                    </tbody>
                  </Table>

                </Col>



              </Row>
            </CardBody>
          </Card>

        </Container>

        <Modal
          size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
          centered
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Scheduled
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
              onSubmit={(e) => {
                getServiceupdate(e)
              }}
            ><Row>

                <Col md={12}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      Date <span className="text-danger">*</span>
                    </Label>
                    <Input onChange={(e) => { handlechange(e) }} required type="date" name="scheduledDate" />
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      Time <span className="text-danger">*</span>
                    </Label>
                    <Input onChange={(e) => { handlechange(e) }} required type="time" name="scheduledTime" />
                  </div>
                </Col>
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
              </Row>
            </Form>
          </div>
        </Modal>
        <Modal
          size="md"
          isOpen={modal_small1}
          toggle={() => {
            tog_small1()
          }}
          centered
        >
          {/* <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Scheduled
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
          </div> */}
          <div className="modal-body">
            <Form
            // onSubmit={e => {
            //   submibooking(e)
            // }}
            ><Row>

                <Col md={12}>
                  <h3 className="text-center mt-3">Resolve service Request</h3>
                  <p className="text-center mt-4">Are you sure you want to reslove this service request?</p>
                </Col>
                <Col md={12}>
                  <div className="text-center">
                    <Button
                      style={{ width: "100px" }}
                      onClick={() => {
                        setmodal_small1(false)
                      }}
                      color="danger"
                      type="button"
                    >
                      No <i className="fas fa-times-circle"></i>
                    </Button>
                    <Button onClick={(e) => { getServiceupdate(e) }} style={{ width: "100px" }} className="m-1" color="primary" type="button">
                      Yes <i className="fas fa-check-circle"></i>
                    </Button>
                  </div></Col>
              </Row></Form>
          </div>
        </Modal>
        <ToastContainer />
      </div >
    </React.Fragment >
  )
}

export default ViewServiceRequest