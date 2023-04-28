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

import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import { URL } from "../Apiurl"
import axios from "axios"

const Features = () => {
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
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carfeature/getallfeatures",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.featuresFound)
      })
  }

  const [Files, setFiles] = useState("")
  const changeHandler = e => {
    setFiles(e.target.files)
  }

  const [Files1, setFiles1] = useState("")
  const changeHandler1 = e => {
    setFiles1(e.target.files)
  }

  const addFeature = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("featureName", form.featureName)
    for (let i = 0; i < Files.length; i++) {
      dataArray.append("featureImage", Files[i])
    }
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carfeature/addfeature",
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
    dataArray.append("featureName", form1.featureName)
    dataArray.append("status", form1.status)
    for (let i = 0; i < Files1.length; i++) {
      dataArray.append("featureImage", Files1[i])
    }
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carfeature/editfeature" +
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
        "http://103.186.185.77:5021/api/v1/admin/carfeature/disablefeature" +
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
    const confirmBox = window.confirm("Do you really want to Inactive?")
    if (confirmBox === true) {
      deletefeature(data)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    addFeature()
  }

  const handleSubmit1 = e => {
    e.preventDefault()
    editFeature()
  }

  const clearForm = () => {
    setform({
      featureName: "",
    })
    setFiles({
      featureImage: "",
    })
  }

  const getpopup = data => {
    setform1(data)
    tog_small()
  }

  useEffect(() => {
    getAllfeature()
  }, [])

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = brand.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(brand.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const [search, setsearch] = useState([])

  const searchAll = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)

    var token = datas
    axios
      .post(
        `http://103.186.185.77:5021/api/v1/admin/carfeature/getallfeatures?searchQueryParams=${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.featuresFound)
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Car Features" />

          <Row>
            {dats.carMgtAdd == true || dats1 == "admin" ? (
              <Col md={4}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add Feature</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form
                      onSubmit={e => {
                        handleSubmit(e)
                      }}
                    >
                      {" "}
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Icon <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="file"
                          className="form-control"
                          required
                          name="featureImage"
                          value={Files.featureImage}
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Name <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="featureName"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Feature Name"
                          required
                          value={form.featureName}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
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
            {dats.carMgtAdd == true || dats1 == "admin" ? (
              <Col md={8}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Feature List</CardTitle>
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
                              <th>Icon</th>
                              <th>Car Feature Name</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>
                                  {" "}
                                  <img
                                    src={
                                      "http://103.186.185.77:5021/" +
                                      data.featureImage
                                    }
                                    style={{ width: "30px" }}
                                  />
                                </td>
                                <td>
                                  <i className="fas fa-car"></i>
                                  {data.featureName}
                                </td>
                                <td>{data.logDateCreated}</td>
                                <td>
                                  {data.status == true ? "Active" : "Inactive"}
                                </td>
                                <td>
                                  {dats.carMgtEdit == true ||
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
                                  )}{" "}
                                  {dats.carMgtDelete == true ||
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
                    <CardTitle>Feature List</CardTitle>
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
                              <th>Icon</th>
                              <th>Car Feature Name</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>
                                  {" "}
                                  <img
                                    src={
                                      "http://103.186.185.77:5021/" +
                                      data.featureImage
                                    }
                                    style={{ width: "30px" }}
                                  />
                                </td>
                                <td>
                                  <i className="fas fa-car"></i>
                                  {data.featureName}
                                </td>
                                <td>{data.logDateCreated}</td>
                                <td>
                                  {data.status == true ? "Active" : "Inactive"}
                                </td>
                                <td>
                                  {dats.carMgtEdit == true ||
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
                                  )}{" "}
                                  {dats.carMgtDelete == true ||
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
              Edit Car Feature
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
                  Icon <span className="text-danger">*</span>
                </Label>
                <Input
                  type="file"
                  className="form-control"
                  name="featureImage"
                  onChange={changeHandler1}
                />
              </div>

              <div className="mb-3">
                <Label for="basicpill-firstname-input1">
                  Name <span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter Feature Name"
                  required
                  name="featureName"
                  value={form1.featureName}
                  onChange={e => {
                    handleChange1(e)
                  }}
                />
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
                <Button
                  onClick={() => {
                    setmodal_small(false)
                  }}
                  color="danger"
                  type="button"
                >
                  Cancel <i className="fas fa-times-circle"></i>
                </Button>
                <Button className="m-1" color="primary" type="submit">
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

export default Features
