import React, { useEffect, useState } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
  Table,
  Modal,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"

const Designation = () => {
  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  const [brand, setbrand] = useState([])
  const [form, setform] = useState([])
  const [form1, setform1] = useState([])

  const handleChange = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }
  const handleChange1 = e => {
    let myUser = { ...form1 }
    myUser[e.target.name] = e.target.value
    setform1(myUser)
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  console.log(datas)

  const getAllfeature = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/designation/getalldesignations",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.designationData)
      })
  }

  const addFeature = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("designationName", form.designationName)
    dataArray.append("branchId", localStorage.getItem("ids"))
    dataArray.append("departmentId", form.departmentId)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/designation/adddesignation",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllfeature()
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

  const editFeature = () => {
    var token = datas
    const docid = form1._id
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    dataArray.append("designationName", form1.designationName)
    dataArray.append("departmentId", form1.departmentId)
    dataArray.append("status", form1.status)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/designation/editdesignation" +
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
            toast(res.data.message)
            getAllfeature()
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

  const deletefeature = data => {
    var token = datas
    var remid = data._id
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/designation/disabledesignation" +
          "/" +
          remid,
        {},
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

  const manageDelete = data => {
    const confirmBox = window.confirm("Do you really want to Inactive?-")
    if (confirmBox === true) {
      deletefeature(data)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    addFeature()
    setform("")
    clearForm()
  }

  const handleSubmit1 = e => {
    e.preventDefault()
    editFeature()
    // setform1("")
    clearForm()
  }

  const clearForm = () => {
    setform({
      designationName: "",
      departmentId: "",
    })
  }

  const getpopup = data => {
    setform1(data)
    tog_small()
  }

  useEffect(() => {
    getAllfeature()
    getdep()
  }, [])

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = brand.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(brand.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const [dep, setdep] = useState([])
  console.log(dep)

  const getdep = () => {
    var token = datas
    const dataArray = new FormData()

    console.log(localStorage.getItem("ids"))
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/dept/getallactivedepartments",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setdep(res.data.departmentResult)
      })
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
        `http://103.186.185.77:5021/api/v1/admin/designation/getalldesignations?searchQueryParams=${e.target.value}`,
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.designationData)
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Designations" />

          <Row>
            {dats.desigMgtAdd == true || dats1 == "admin" ? (
              <Col md={4}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add Designation</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form
                      onSubmit={e => {
                        handleSubmit(e)
                      }}
                    >
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Name <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="designationName"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Designation Name"
                          required
                          value={form.designationName}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Select Department{" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <select
                          className="form-select"
                          name="departmentId"
                          required
                          onChange={e => {
                            handleChange(e)
                          }}
                          value={form.departmentId}
                        >
                          <option value="">Select</option>
                          {dep.map((opt, i) => {
                            return (
                              <option key={i} value={opt._id}>
                                {opt.departmentName}
                              </option>
                            )
                          })}
                        </select>
                      </div>

                      <div style={{ float: "right" }}>
                        <Button color="primary" type="submit">
                          Submit <i className="fas fa-check-circle"></i>
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            ) : (
              ""
            )}
            {dats.desigMgtAdd == true || dats1 == "admin" ? (
              <Col md={8}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Designations List</CardTitle>
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
                            <tr>
                              <th>S.No</th>
                              <th>DesignationName</th>
                              <th>DepartmentName </th>
                              <th>Date</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th scope="row">
                                  {(pageNumber - 1) * 5 + key + 6}
                                </th>
                                <td>{data.designationName}</td>
                                <td>{data.departmentName}</td>
                                <td>{data.logDateCreated}</td>
                                <td>
                                  {data.status == true ? "Active" : "Inactive"}
                                </td>
                                <td>
                                  {dats.desigMgtEdit == true ||
                                  dats1 == "admin" ? (
                                    <Button
                                      onClick={() => {
                                        getpopup(data)
                                      }}
                                      className="mr-2"
                                      style={{ padding: "6px", margin: "3px" }}
                                      color="success"
                                      outline
                                    >
                                      <i className="bx bx-edit "></i>
                                    </Button>
                                  ) : (
                                    "-"
                                  )}
                                  {dats.desigMgtDelete == true ||
                                  dats1 == "admin" ? (
                                    <Button
                                      onClick={() => {
                                        manageDelete(data)
                                      }}
                                      style={{ padding: "6px", margin: "3px" }}
                                      color="danger"
                                      outline
                                    >
                                      <i className="bx bx-block"></i>
                                    </Button>
                                  ) : (
                                    ""
                                  )}
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
            ) : (
              <Col md={12}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Designations List</CardTitle>
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
                            <tr>
                              <th>S.No</th>
                              <th>DesignationName</th>
                              <th>DepartmentName </th>
                              <th>Date</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th scope="row">
                                  {(pageNumber - 1) * 5 + key + 6}
                                </th>
                                <td>{data.designationName}</td>
                                <td>{data.departmentName}</td>
                                <td>{data.logDateCreated}</td>
                                <td>
                                  {data.status == true ? "Active" : "Inactive"}
                                </td>
                                <td>
                                  {dats.desigMgtEdit == true ||
                                  dats1 == "admin" ? (
                                    <Button
                                      onClick={() => {
                                        getpopup(data)
                                      }}
                                      className="mr-2"
                                      style={{ padding: "6px", margin: "3px" }}
                                      color="success"
                                      outline
                                    >
                                      <i className="bx bx-edit "></i>
                                    </Button>
                                  ) : (
                                    "-"
                                  )}
                                  {dats.desigMgtDelete == true ||
                                  dats1 == "admin" ? (
                                    <Button
                                      onClick={() => {
                                        manageDelete(data)
                                      }}
                                      style={{ padding: "6px", margin: "3px" }}
                                      color="danger"
                                      outline
                                    >
                                      <i className="bx bx-block"></i>
                                    </Button>
                                  ) : (
                                    ""
                                  )}
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
            )}
          </Row>
        </Container>
        <ToastContainer />

        <Modal
          size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit Designation
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
                handleSubmit1(e)
              }}
            >
              <div className="mb-3">
                <Label for="basicpill-firstname-input1">
                  Name <span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="designationName"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter Designation Name"
                  required
                  value={form1.designationName}
                  onChange={e => {
                    handleChange1(e)
                  }}
                />
              </div>
              <div className="mb-3">
                <Label for="basicpill-firstname-input1">
                  Select Department <span className="text-danger">*</span>
                </Label>
                <select
                  className="form-select"
                  value={form1.departmentId}
                  name="departmentId"
                  onChange={e => {
                    handleChange1(e)
                  }}
                >
                  <option value="">Select</option>
                  {dep.map((opt, i) => {
                    return (
                      <option key={i} value={opt._id}>
                        {opt.departmentName}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="mb-3">
                <Label for="basicpill-firstname-input3">
                  Status <span className="text-danger">*</span>
                </Label>

                <select
                  onChange={e => {
                    handleChange1(e)
                  }}
                  value={form1.status}
                  name="status"
                  className="form-select"
                >
                  <option value="">Select</option>
                  <option value="true">Active</option>
                  <option value="false">In Active</option>
                </select>
              </div>

              <div style={{ float: "right" }}>
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
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default Designation
