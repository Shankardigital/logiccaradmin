import React, { useEffect, useState } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
} from "reactstrap"
import "../../../src/common.css"
import { withRouter, Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios"

import ReactPaginate from "react-paginate"
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

const Stafflist = () => {
  //meta title
  // document.title = "Stater Page | Logic Cars Admin";

  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  useEffect(() => {
    getAllfeature()
  }, [])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token


  const [staff, setstaff] = useState([])

  const getAllfeature = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/staff/getallstaff",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setstaff(res.data.staff)
      })
  }

  const history = useHistory()

  function handleClick123() {
    history.push("/edit-staff")
  }
  function handleClick1234() {
    history.push("/view-staff")
  }

  const getdata = data => {
    sessionStorage.setItem("staffid", data._id)
    // history.push("/edituser")
    // <Redirect to='/edituser' />
    handleClick123()
  }
  const getdata1 = data => {
    sessionStorage.setItem("staffid", data._id)
    // history.push("/edituser")
    // <Redirect to='/edituser' />
    handleClick1234()
  }

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = staff.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(staff.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const manageDelete = data => {
    const confirmBox = window.confirm("Do you really want to Inactive?")
    if (confirmBox === true) {
      deletefeature(data)
    }
  }
  const deletefeature = data => {
    var token = datas
    var remid = data._id
    axios
      .delete(
        "http://103.186.185.77:5021/api/v1/admin/staff/remmovestaff" +
          "/" +
          remid,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllfeature()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const [search, setsearch] = useState([])

  const searchAll = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    var token = datas
    axios
      .post(
        `http://103.186.185.77:5021/api/v1/admin/staff/getallstaff?searchQueryParams=${e.target.value}`,
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setstaff(res.data.staff)
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Staff" />

          <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white"></CardHeader>
                <div className="container">
                  <Input
                    type="search"
                    style={{ width: "250px", float: "right" }}
                    className="form-control"
                    placeholder="Search.."
                    value={search.search}
                    onChange={searchAll}
                    name="search"
                  />
                </div>
                <CardBody>
                  <div>
                    <div className="table-responsive mb-4">
                      <Table className="table table-bordered mb-3">
                        <thead>
                          <tr className="text-center">
                            <th>S.No</th>
                            <th>Staff Name</th>
                            <th>Email-Phone </th>
                            <th>Country</th>
                            <th>Joined At</th>
                            {/* <th>Status</th> */}
                            <th style={{ width: "130px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lists.map((data, key) => (
                            <tr key={key} className="text-center">
                              <th scope="row">
                                {(pageNumber - 1) * 10 + key + 11}
                              </th>
                              <td>{data.name}</td>
                              <td>
                                {data.email}-{data.phone}
                              </td>
                              {/* <td>{data.phone}</td> */}
                              <td>{data.countryName}</td>
                              <td>{data.joinedAt}</td>

                              {/* <td>
                                {data.isActive == true ? "Active" : "Inactive"}
                              </td> */}
                              <td>
                                {dats.staffMgtEdit == true ||
                                dats1 == "admin" ? (
                                  <Button
                                    onClick={() => {
                                      getdata(data)
                                    }}
                                    className="mr-2"
                                    style={{ padding: "6px", margin: "3px" }}
                                    color="success"
                                    outline
                                  >
                                    <i className="bx bx-edit "></i>
                                  </Button>
                                ) : (
                                  ""
                                )}
                                {dats.staffMgtView == true ||
                                dats1 == "admin" ? (
                                  <Button
                                    onClick={() => {
                                      getdata1(data)
                                    }}
                                    style={{ padding: "6px", margin: "3px" }}
                                    color="warning"
                                    outline
                                  >
                                    <i className="fas fa-eye text-dark"></i>
                                  </Button>
                                ) : (
                                  "-"
                                )}
                                {dats.staffMgtDelete == true ||
                                dats1 == "admin" ? (
                                  <Button
                                    onClick={() => {
                                      manageDelete(data)
                                    }}
                                    style={{ padding: "6px", margin: "3px" }}
                                    color="danger"
                                    outline
                                  >
                                    <i className="bx bx-trash"></i>
                                  </Button>
                                ) : (
                                  ""
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
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
          <ToastContainer />
        </Container>

        <Modal
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit Users
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
            <Form>
              <Row>
                <Col>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Branch <span className="text-danger">*</span>
                    </Label>
                    {/* <Input
                                                type="emial"
                                                className="form-control"
                                                id="basicpill-firstname-input3"
                                                placeholder="Enter Email"
                                                required
                                            /> */}
                    <select className="form-select" required>
                      <option value="">Select</option>
                      <option value="Dubai">Dubai</option>
                      <option value="AbuDhabi">Abu Dhabi</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      Name <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Phone No <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      placeholder="Enter Phone No"
                      required
                    />
                  </div>
                </Col>
                <Col>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Department <span className="text-danger">*</span>
                    </Label>
                    {/* <Input
                                                type="emial"
                                                className="form-control"
                                                id="basicpill-firstname-input3"
                                                placeholder="Enter Email"
                                                required
                                            /> */}
                    <select className="form-select" required>
                      <option value="">Select</option>
                      <option value="Dubai">Manager</option>
                      <option value="AbuDhabi">Employee</option>
                      {/* <option value="AbuDhabi">Driver</option> */}
                      {/* <option value="AbuDhabi">Customer</option> */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Email <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="emial"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Password <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="password"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                </Col>
              </Row>
              <div className="mb-3">
                <Label for="basicpill-firstname-input2">
                  Address <span className="text-danger">*</span>
                </Label>
                <textarea
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input2"
                  placeholder="Enter  Address"
                  required
                />
              </div>
              <div style={{ float: "right" }}>
                <Button
                  onClick={() => {
                    setmodal_small(false)
                  }}
                  color="danger"
                  type="button"
                >
                  Cancel <i className="fas fa-times-circle"></i>
                </Button>
                <Button className="m-1" color="primary" type="button">
                  Submit <i className="fas fa-check-circle"></i>
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default Stafflist

//   <th scope="row">1</th>
//   <td>balakrishna</td>
//   <td>
//     <small>
//       <b>balakrishna@gmail.com</b>
//     </small>
//     <br />
//     <small>9189100099</small>
//   </td>
//   <td>NL</td>
//   <td>2022-11-23 07:14 AM</td>
//   <td>
//     <span
//       style={{ borderRadius: "5px" }}
//       className="bg-success text-white "
//     >
//       Active
//     </span>
//   </td>

//   <td>
//     <Link to="/edit-staff">
//       {" "}
//       <Button
//         // onClick={() => {
//         //     tog_small();
//         // }}
//         className="mr-2"
//         style={{ padding: "6px", margin: "3px" }}
//         color="success"
//         outline
//       >
//         <i className="bx bx-edit "></i>
//       </Button>
//     </Link>
//     <Link to="/view-staff">
//       {" "}
//       <Button
//         style={{ padding: "6px", margin: "3px" }}
//         color="warning"
//         outline
//       >
//         <i className="fas fa-eye text-dark"></i>
//       </Button>
//     </Link>
//     <Button
//       style={{ padding: "6px", margin: "3px" }}
//       color="danger"
//       outline
//     >
//       <i className="bx bx-trash"></i>
//     </Button>
//   </td>
// </tr>
// <tr className="text-center">
//   <th scope="row">2</th>
//   <td>sateesh</td>
//   <td>
//     <small>
//       <b>sateesh@gmail.com</b>
//     </small>
//     <br />
//     <small>9189100099</small>
//   </td>
//   <td>NL</td>
//   <td>2022-11-23 07:14 AM</td>
//   <td>
//     <span
//       style={{ borderRadius: "5px" }}
//       className="bg-success text-white "
//     >
//       Active
//     </span>
//   </td>

//   <td>
//     <Link to="/edit-staff">
//       {" "}
//       <Button
//         // onClick={() => {
//         //     tog_small();
//         // }}
//         className="mr-2"
//         style={{ padding: "6px", margin: "3px" }}
//         color="success"
//         outline
//       >
//         <i className="bx bx-edit "></i>
//       </Button>
//     </Link>
//     <Link to="/view-driver">
//       {" "}
//       <Button
//         style={{ padding: "6px", margin: "3px" }}
//         color="warning"
//         outline
//       >
//         <i className="fas fa-eye text-dark"></i>
//       </Button>
//     </Link>
//     <Button
//       style={{ padding: "6px", margin: "3px" }}
//       color="danger"
//       outline
//     >
//       <i className="bx bx-trash"></i>
//     </Button>
//   </td>
// </tr>
