import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  // ModalHeader,
  // ModalBody,
  // ModalFooter,
  // Modal,
  Button,
  Input,
  Label,
  Form,
  CardHeader,
  Modal,
} from "reactstrap";
import { Table, UncontrolledTooltip } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Admins = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // const [show2, setShow2] = useState(false);

  // const handleClose2 = () => setShow2(false);
  // const handleShow2 = () => setShow2(true);

  const [modal_small, setmodal_small] = useState(false);

    function tog_small() {
        setmodal_small(!modal_small);
        removeBodyCss();
    }


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const [admin, setadmins] = useState([]);
  const [file, setFile] = useState()
  const [data, setdata] = useState([])
  const [search, setsearch] = useState("");
  const [state, setstate] = useState([])
  const [district, setdistrict] = useState([])
  const [cities, setcity] = useState([])
  const [village, setvillages] = useState([])
  const [form, setform] = useState([])

  // add
  const handlechange = (e) => {
    let myUser = { ...form };
    myUser[e.target.name] = e.target.value;
    setform(myUser);
  }

  // edit
  const ehandlechange = (e) => {
    let myUser = { ...data };
    myUser[e.target.name] = e.target.value;
    setdata(myUser);
  }

  function FilehandleChange(event) {
    setFile(event.target.files[0])
  }


  useEffect(() => {
    getAllAddDetails();
    // districts()
    // getAllStates()
    // city()
    // villages()
    // getAllDepartment();
  }, []);

  var gets = localStorage.getItem("authUser");
  var data1 = JSON.parse(gets);
  var datas = data1;
  console.log(datas)


  const getAllAddDetails = () => {
    var zzz = datas.token
    axios.get("http://api.igi-org.in/api/admin/igiindia/getalladminusers", {
      headers: { Authorization: `Bearer ${zzz}` }
    }).then((res) => {
      console.log(res.data)
      setadmins(res.data.usersResult)
    })
  }

  const addAdmin = () => {
    var zzz = datas.token
    var params = {
      "username": form.username,
      "email": form.email,
      "contactNumber": form.contactNumber,
      "password": form.password,
      "status": form.status,
    }

    axios.post("http://api.igi-org.in/api/admin/igiindia/addadminuser", params, {
      headers: { Authorization: `Bearer ${zzz}` },
    }).then((res) => {
      if (res.status === 200) {
      console.log("success")
      toast(res.data.message);
      getAllAddDetails()
      handleClose();
      // toggle();
      }
    })

  }

  const adminSubmit = (e) => {
    e.preventDefault();
    addAdmin();
  };

  const adminEdit = (e) => {
    e.preventDefault();
    editAdmin();
  };

  

  const getpopup = (data) => {
    setdata(data);
    handleShow1()
  };

  const deleteTemples = (summariesResult) => {
    var token = sessionStorage.getItem("token");
    axios.delete(URL.deleteadmin + "/" + summariesResult, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      if (res.status === 200) {
        getAllAddDetails()
        toast("Deleted successfully");
      }
    })

  }

  const manageDelete = (summariesResult) => {
    const confirmBox = window.confirm("Do you want to Delete?");
    if (confirmBox === true) {
      deleteTemples(summariesResult);
    }
  };





  return (
    <div >
      {" "}
    
          <Row>
            <Col lg={12}>
              <Card className="cardstyle">
                <CardHeader className="cardheader">
                  <div className="row">
                    <div className="col">
                      <h4 className="cardh4"><b>Admin Users</b></h4>
                    </div>
                    <div className="col ">
                     
                    </div>
                  </div>
                </CardHeader>

                <CardBody>

                  {/* <div className="row container mt-3"> */}
                  {/* <div className="col mt-4"> */}
                  <div style={{ float: "right" }}>
                    <input
                      type="search"
                      placeholder="search..."
                      className="form-control mb-3"
                      style={{ width: "100%" }}
                      onChange={(e) => { setsearch(e.target.value) }}
                    />
                  </div>

                  {/* </div> */}
                  {/* <div className="col ">
                      <Button
                        type="button"
                        className="btn pdf-view-btn addbtn"
                        onClick={handleShow}
                      >
                        <i className="fa fa-plus mr-1" aria-hidden="true"></i> Add Data
                      </Button>
                    </div> */}
                  {/* </div> */}
                  <Button
                        type="button"
                        className="btn pdf-view-btn addbtn"
                        // style={{ float: "right", marginTop: "34px" }}
                        onClick={() => {
                            tog_small();}}
                      >
                        <i className="fa fa-plus mr-1" aria-hidden="true"></i> Add Admins
                      </Button>
                  <div className="table-responsive mt-3">
                    <Table
                      bordered
                      className="table-centered datatable dt-responsive nowrap "
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        width: "100%",
                      }}
                    >
                      <thead
                        className="thead-light"
                        style={{ background: "#1562a0", color: "white" }}
                      >
                        <tr>
                          <th>Sl.no</th>
                          <th>Name</th>
                          {/* <th>Description</th> */}
                          <th>Contact</th>
                          <th>Email</th>
                          <th>Status</th>
                          {/* <th>Clarity</th> */}
                          {/* <th>Image</th>
                          <th>Qr Code</th> */}

                          <th style={{ width: "110px" }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {admin.map((usersResult, key) => (
                            <tr key={key}>
                              {/* <td>{(pageNumber - 1) * 10 + key + 11}</td> */}
                              <td>{usersResult.username}</td>
                              <td>{usersResult.contactNumber}</td>
                              <td>{usersResult.email}</td>
                              <td>{usersResult.status === true || usersResult.status == "true"
                                ? "Active"
                                : "Inactive"}{" "}
                              </td>

                              {/* <td>{summariesResult.totalEstWt}</td>
                              <td>{summariesResult.color}</td>
                              <td>{summariesResult.clarity}</td>
                              <td><img src={"http://103.171.181.73:5011/" + summariesResult.image} style={{ width: "100px", height: "90px" }} /></td>

                              <td onClick={handleShow2}> <img src={"http://103.171.181.73:5011/" + summariesResult.qrcode} style={{ width: "100px", height: "90px" }} /></td> */}
                              <td>
                                {/* <Link
                                  to="#"
                                  className="mr-3 text-success"
                                  id={"edit" + key}
                                  onClick={() => { getpopup(usersResult) }}
                                >
                                  <ModeEditIcon />
                                </Link>
                                <UncontrolledTooltip
                                  target={"edit" + key}
                                  placement="top"
                                >
                                  Edit
                                </UncontrolledTooltip>
                               
                                <Link
                                  to="#"
                                  className="text-danger"
                                  id={"delete" + key}
                                  onClick={() => { manageDelete(usersResult._id) }}
                                >
                                  <DeleteOutlineIcon></DeleteOutlineIcon>
                                </Link>
                                <UncontrolledTooltip
                                  target={"delete" + key}
                                  placement="top"
                                >
                                  Delete
                                </UncontrolledTooltip> */}

                                <div className="mt-3">
                                <span className="adminbtnbad"><a className="btn adminbtns" onClick={() => { getpopup(usersResult) }}> edit</a></span>
                                <span className="adminbtnbad"><a className="btn adminbtns3" onClick={() => { manageDelete(usersResult._id) }}> </a></span>
                                </div>
                              </td>

                            </tr>
                          ))}
                      </tbody>
                    </Table>

                    {/* <div style={{ float: "right" }}>
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
                      />
                    </div> */}
                  


                  <Modal
                    size="sm"
                    isOpen={modal_small}
                    toggle={() => {
                        tog_small();
                    }}
                >
                      <form
                          onSubmit={adminSubmit}
                        >

                          <Label>User Name :</Label>
                          <Input type="text"  pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" placeholder="User Name" className="form-control" name="username" onChange={(e) => { handlechange(e); }} required />

                          <Label className="mt-2">Contact:</Label>
                          <Input type="text" maxlength="10" pattern="\d{10}" placeholder="Contact" className="form-control" name="contactNumber" onChange={(e) => { handlechange(e); }} required />

                          <Label className="mt-2">Email :</Label>
                          <Input type="email" pattern="(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)" placeholder="Email" className="form-control" name="email" onChange={(e) => { handlechange(e); }} required />
                          <Label className="mt-2">Password :</Label>
                          <Input type="text" placeholder="Password" className="form-control" name="password" onChange={(e) => { handlechange(e); }} required />
                          <Label className="mt-2">Status :</Label>
                          <select className="form-control" name="status" onChange={(e) => { handlechange(e); }} required>
                            <option value="" >Select</option>
                            <option value="true" >Active</option>
                            <option value="false" >Inactive</option>
                          </select>
                          <div style={{ float: "right" }} className="mt-3">
                            <Button className="mr-3 bg-danger" onClick={handleClose}>
                              Cancel
                            </Button>
                            <Button color="success" type="submit">
                              Submit
                            </Button>
                          </div>


                        </form>
               
                </Modal>



             


                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <Paper elevation={3}></Paper> */}
   
      <ToastContainer />
    </div>
  );
};

export default Admins;



{
  /* <div
                                style={{
                                  padding: "20px",
                                  border: "1px solid gray",
                                }}
                                className="mt-3"
                              >
                                <Row>
                                  <Col md="4">
                                    <img
                                      onClick={tog_small2}
                                      target="_blank"
                                      className="mt-3"
                                      src={car1}
                                      style={{
                                        width: "100%",
                                        cursor: "pointer",
                                        borderRadius: "20px",
                                      }}
                                    />
                                  </Col>
                                  <Col md="6">
                                    <h4 className="mt-3">Fiat Panda</h4>

                                    <Row>
                                      <Col>
                                        <span>No.of Seats : 5</span>
                                        <br />
                                        <span>Boot Capacity : 15</span>
                                        <br />
                                        <span>Make (Year) : 2022</span>
                                        <br />
                                      </Col>
                                      <Label
                                        style={{ cursor: "pointer" }}
                                        className="text-primary"
                                        onClick={toggle}
                                      >
                                        Car Info
                                      </Label>
                                    </Row>
                                  </Col>
                                  <Col style={{ background: "#f5f5f5" }} md="2">
                                    <p className="mt-3 text-center">
                                      <b>AED - 30.75</b>
                                    </p>
                                    <p className="text-center">Per Day</p>

                                    <div className="text-center">
                                      <div className="btn-group " role="group">
                                        <input
                                          type="radio"
                                          className="btn-check"
                                          name="btnradio"
                                          id="btnradio06"
                                          autoComplete="off"
                                          defaultChecked
                                        />
                                        <label
                                          className="btn btn-outline-primary"
                                          htmlFor="btnradio06"
                                        >
                                          {" "}
                                          <i className="fas fa-check-circle text-dark"></i>{" "}
                                          Select
                                        </label>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                                <Row className="mt-2">
                                  <Col md="4"></Col>
                                  <Col md="8">
                                    <Collapse isOpen={isOpen} {...args}>
                                      <div className="container">
                                        <p>
                                          A small and very economical city car.
                                          The perfect choice for urban driving
                                          or as a shopping car.
                                        </p>
                                        <Row>
                                          <Col md={6}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p className="text-secundray">
                                                  No.of Persons
                                                </p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  5
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col></Col>
                                          <Col md={5}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p>MILEAGE</p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  250 KM
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                        <Row className="mt-2">
                                          <Col md={6}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p>Car Features</p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  Extra Lagguges
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col></Col>
                                          <Col md={5}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p>Specs</p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  3d Cameras
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Collapse>
                                  </Col>
                                </Row>
                              </div>
                              <div
                                style={{
                                  padding: "20px",
                                  border: "1px solid gray",
                                }}
                                className="mt-3"
                              >
                                <Row>
                                  <Col md="4">
                                    <img
                                      onClick={tog_small2}
                                      target="_blank"
                                      className="mt-3"
                                      src={car1}
                                      style={{
                                        width: "100%",
                                        cursor: "pointer",
                                        borderRadius: "20px",
                                      }}
                                    />
                                  </Col>
                                  <Col md="6">
                                    <h4 className="mt-3">Fiat Panda</h4>

                                    <Row>
                                      <Col>
                                        <span>No.of Seats : 5</span>
                                        <br />
                                        <span>Boot Capacity : 15</span>
                                        <br />
                                        <span>Make (Year) : 2022</span>
                                        <br />
                                      </Col>
                                      <Label
                                        style={{ cursor: "pointer" }}
                                        className="text-primary"
                                        onClick={toggle}
                                      >
                                        Car Info
                                      </Label>
                                    </Row>
                                  </Col>
                                  <Col style={{ background: "#f5f5f5" }} md="2">
                                    <p className="mt-3 text-center">
                                      <b>AED - 30.75</b>
                                    </p>
                                    <p className="text-center">Per Day</p>

                                    <div className="text-center">
                                      <div className="btn-group " role="group">
                                        <input
                                          type="radio"
                                          className="btn-check"
                                          name="btnradio"
                                          id="btnradio7"
                                          autoComplete="off"
                                          defaultChecked
                                        />
                                        <label
                                          className="btn btn-outline-primary"
                                          htmlFor="btnradio7"
                                        >
                                          {" "}
                                          <i className="fas fa-check-circle text-dark"></i>{" "}
                                          Select
                                        </label>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                                <Row className="mt-2">
                                  <Col md="4"></Col>
                                  <Col md="8">
                                    <Collapse isOpen={isOpen} {...args}>
                                      <div className="container">
                                        <p>
                                          A small and very economical city car.
                                          The perfect choice for urban driving
                                          or as a shopping car.
                                        </p>
                                        <Row>
                                          <Col md={6}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p className="text-secundray">
                                                  No.of Persons
                                                </p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  5
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col></Col>
                                          <Col md={5}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p>MILEAGE</p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  250 KM
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                        <Row className="mt-2">
                                          <Col md={6}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p>Car Features</p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  Extra Lagguges
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col></Col>
                                          <Col md={5}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p>Specs</p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  3d Cameras
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Collapse>
                                  </Col>
                                </Row>
                              </div>
                              <div
                                style={{
                                  padding: "20px",
                                  border: "1px solid gray",
                                }}
                                className="mt-3"
                              >
                                <Row>
                                  <Col md="4">
                                    <img
                                      onClick={tog_small2}
                                      target="_blank"
                                      className="mt-3"
                                      src={car1}
                                      style={{
                                        width: "100%",
                                        cursor: "pointer",
                                        borderRadius: "20px",
                                      }}
                                    />
                                  </Col>
                                  <Col md="6">
                                    <h4 className="mt-3">Fiat Panda</h4>

                                    <Row>
                                      <Col>
                                        <span>No.of Seats : 5</span>
                                        <br />
                                        <span>Boot Capacity : 15</span>
                                        <br />
                                        <span>Make (Year) : 2022</span>
                                        <br />
                                      </Col>
                                      <Label
                                        style={{ cursor: "pointer" }}
                                        className="text-primary"
                                        onClick={toggle}
                                      >
                                        Car Info
                                      </Label>
                                    </Row>
                                  </Col>
                                  <Col style={{ background: "#f5f5f5" }} md="2">
                                    <p className="mt-3 text-center">
                                      <b>AED - 30.75</b>
                                    </p>
                                    <p className="text-center">Per Day</p>

                                    <div className="text-center">
                                      <div className="btn-group " role="group">
                                        <input
                                          type="radio"
                                          className="btn-check"
                                          name="btnradio"
                                          id="btnradio08"
                                          autoComplete="off"
                                          defaultChecked
                                        />
                                        <label
                                          className="btn btn-outline-primary"
                                          htmlFor="btnradio08"
                                        >
                                          {" "}
                                          <i className="fas fa-check-circle text-dark"></i>{" "}
                                          Select
                                        </label>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                                <Row className="mt-2">
                                  <Col md="4"></Col>
                                  <Col md="8">
                                    <Collapse isOpen={isOpen} {...args}>
                                      <div className="container">
                                        <p>
                                          A small and very economical city car.
                                          The perfect choice for urban driving
                                          or as a shopping car.
                                        </p>
                                        <Row>
                                          <Col md={6}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p className="text-secundray">
                                                  No.of Persons
                                                </p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  5
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col></Col>
                                          <Col md={5}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p>MILEAGE</p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  250 KM
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                        <Row className="mt-2">
                                          <Col md={6}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p>Car Features</p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  Extra Lagguges
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col></Col>
                                          <Col md={5}>
                                            <Row
                                              style={{
                                                borderBottom:
                                                  "1px solid #aaaaaa",
                                              }}
                                            >
                                              <Col>
                                                <p>Specs</p>
                                              </Col>
                                              <Col>
                                                <p style={{ float: "right" }}>
                                                  3d Cameras
                                                </p>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Collapse>
                                  </Col>
                                </Row>
                              </div> */
}

 {/* <div>
                            <div className="table-responsive">
                              <Table className="table table-bordered mb-4 mt-2">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>
                                        <Row>
                                          <Col md="8">
                                            <Row className="mt-2">
                                              <h5>Child Seat </h5>

                                              <h5 className="text-primary">
                                                AED - 5.00 each per dayChild
                                                Seat{" "}
                                              </h5>
                                            </Row>
                                            <span className="text-secundary mt-2">
                                              Baby car seat for children aged
                                              0-36 months.
                                            </span>
                                          </Col>
                                        </Row>
                                      </div>
                                    </td>
                                    <td style={{ width: "100px" }}>
                                      <div>
                                        <Label for="basicpill-declaration-input10">
                                          Number{" "}
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-Declaration-input10"
                                          required
                                          style={{ border: "none" }}
                                          defaultValue={1}
                                        />
                                      </div>
                                    </td>
                                    <td
                                      style={{ width: "120px" }}
                                      className="text-center"
                                    >
                                      <div>
                                        <div className="text-center">
                                          <div
                                            className="btn-group"
                                            role="group"
                                          >
                                            <input
                                              type="radio"
                                              className="btn-check"
                                              name="btnradio"
                                              id="btnradio4"
                                              autoComplete="off"
                                              defaultChecked
                                            />
                                            <label
                                              className="btn btn-outline-primary"
                                              htmlFor="btnradio4"
                                            >
                                              {" "}
                                              <i className="fas fa-check-circle text-dark"></i>{" "}
                                              Select
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>
                                        <Row>
                                          <Col md="7">
                                            <Row className="mt-2">
                                              <h5>Additional Driver</h5>

                                              <h5 className="text-primary">
                                                AED - 13.00 each per day{" "}
                                              </h5>
                                            </Row>
                                            <span className="text-secundary mt-2">
                                              All drivers must meet minimum-age
                                              requirements.
                                            </span>
                                          </Col>
                                        </Row>
                                      </div>
                                    </td>
                                    <td style={{ width: "100px" }}>
                                      <div>
                                        <Label for="basicpill-declaration-input10">
                                          Number{" "}
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-Declaration-input10"
                                          required
                                          style={{ border: "none" }}
                                          defaultValue={1}
                                        />
                                      </div>
                                    </td>
                                    <td
                                      style={{ width: "120px" }}
                                      className="text-center"
                                    >
                                      <div className="text-center">
                                        <div className="btn-group" role="group">
                                          <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio15"
                                            autoComplete="off"
                                            defaultChecked
                                            onClick={tog_small1}
                                          />
                                          <label
                                            className="btn btn-outline-primary"
                                            htmlFor="btnradio15"
                                          >
                                            {" "}
                                            <i className="fas fa-check-circle text-dark"></i>{" "}
                                            Select
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>
                                        <Row>
                                          <Col md="7">
                                            <Row className="mt-2">
                                              <h5>Insurance</h5>
                                              <h5 className="text-primary">
                                                AED - 105.00 per rental{" "}
                                              </h5>
                                            </Row>
                                            <span className="text-secundary mt-2">
                                              This Compressive Insurance for car
                                              and driver.
                                            </span>
                                          </Col>
                                        </Row>
                                      </div>
                                    </td>
                                    <td style={{ width: "100px" }}>
                                      <div>
                                        <Label for="basicpill-declaration-input10">
                                          Number{" "}
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-Declaration-input10"
                                          required
                                          style={{ border: "none" }}
                                          defaultValue="Yes"
                                        />
                                      </div>
                                    </td>
                                    <td
                                      style={{ width: "120px" }}
                                      className="text-center"
                                    >
                                      <div className="text-center">
                                        <div className="btn-group" role="group">
                                          <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio16"
                                            autoComplete="off"
                                            defaultChecked
                                          />
                                          <label
                                            className="btn btn-outline-primary"
                                            htmlFor="btnradio16"
                                          >
                                            {" "}
                                            <i className="fas fa-check-circle text-dark"></i>{" "}
                                            Select
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div> */}