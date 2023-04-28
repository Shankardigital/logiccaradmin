import React, { useState, useEffect } from "react"
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
import Breadcrumbs from "../components/Common/Breadcrumb"

import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import { URL } from "../Apiurl"
import axios from "axios"

const Version = () => {
  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  const [version, setversion] = useState([])
  const [model, setmodel] = useState([])
  const [model1, setmodel1] = useState([])

  const [form, setform] = useState([])
  const [form1, setform1] = useState([])
  const [Files, setFiles] = useState("")
  const [Files1, setFiles1] = useState("")

  const changeHandler = e => {
    setFiles(e.target.files)
  }
  const changeHandler1 = e => {
    setFiles1(e.target.files)
  }

  const options1 = [
    { value: "AlfaRomeo", label: "Alfa Romeo" },
    { value: "Audi", label: "Audi" },
    { value: "Toyota", label: "Toyota" },
  ]

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

  const getAllmodal = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/brand/getallcarbrands",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setmodel1(res.data.carBrandResult)
      })
  }

  const [models, setmodels] = useState([])

  const handleChanges = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    getallbrand(e.target.value)
  }

  const handleChange1s = e => {
    let myUser = { ...form1 }
    myUser[e.target.name] = e.target.value
    setform1(myUser)
    getallbrand(e.target.value)
  }

  const getallbrand = brandId => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("brandId", brandId)
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carmodel/getcarmodelbybrand",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setmodels(res.data.modelsResult)
      })
  }

  const getAllversion = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carmakeyear/getallmakeyears?",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setversion(res.data.madeYeardata)
      })
  }

  const addversion = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("brandId", form.brandId)
    dataArray.append("modelId", form.modelId)
    dataArray.append("carVersion", form.carVersion)
    dataArray.append("carMakeYear", form.carMakeYear)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carmakeyear/addcarmakeyear",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllversion()
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

  const deleteversion = data => {
    var token = datas
    var remid = data._id
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carmakeyear/disablemakyear" +
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
            getAllversion()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          } else if (error.response && error.response.status === 401) {
          }
        }
      )
  }

  const manageDelete = data => {
    const confirmBox = window.confirm("Do you really want to Delete?")
    if (confirmBox === true) {
      deleteversion(data)
    }
  }

  const editversion = () => {
    var token = datas
    const docid = form1._id
    const dataArray = new FormData()
    dataArray.append("brandId", form1.brandId)
    dataArray.append("modelId", form1.modelId)
    dataArray.append("carVersion", form1.carVersion)
    dataArray.append("carMakeYear", form1.carMakeYear)
    dataArray.append("status", form1.status)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carmakeyear/editmakeyear" +
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
            getAllversion()
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

  const handleSubmit = e => {
    e.preventDefault()
    addversion()
    clearForm()
  }

  const handleSubmit1 = e => {
    e.preventDefault()
    editversion()
    clearForm()
  }

  const clearForm = () => {
    setform({
      brandId: "",
      modelId: "",
      carVersion: "",
      carMakeYear: "",
    })
  }

  const getpopup = data => {
    setform1(data)
    tog_small()
  }

  useEffect(() => {
    getAllmodal()
    getAllversion()
  }, [])

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = version.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(version.length / listPerPage)
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
        `http://103.186.185.77:5021/api/v1/admin/carmakeyear/getallmakeyears?searchQueryParams=${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setversion(res.data.madeYeardata)
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Car Version" />
          <Row>
            {dats.carMgtAdd == true || dats1 == "admin" ? (
              <Col md={4}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add Car Version</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form
                      onSubmit={e => {
                        handleSubmit(e)
                      }}
                    >
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input3">
                          Brand <span className="text-danger">*</span>
                        </Label>

                        <select
                          onChange={e => {
                            handleChanges(e)
                          }}
                          value={form.brandId}
                          name="brandId"
                          className="form-select" required
                        >
                          <option value="">Select</option>
                          {model1.map((data, key) => {
                            return (
                              <option key={key} value={data._id}>
                                {data.brandName}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Model <span className="text-danger">*</span>
                        </Label>

                        <select
                          onChange={e => {
                            handleChange(e)
                          }}
                          value={form.modelId}
                          name="modelId"
                          className="form-select" required
                        >
                          <option value="">Select</option>
                          {models.map((data, key) => {
                            return (
                              <option key={key} value={data._id}>
                                {data.model_name}
                              </option>
                            )
                          })}
                        </select>
                      </div>

                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Version <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Version"
                          required
                          name="carVersion"
                          value={form.carVersion}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Year <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Year"
                          required
                          name="carMakeYear"
                          value={form.carMakeYear}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
                      </div>

                      <div style={{ float: "right" }}>
                        <Button className="m-1" color="primary" type="submit">
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
                  <CardBody>
                    <div className="row">
                      <div className="col-sm-6">
                        <CardTitle>Versions List</CardTitle>
                      </div>
                      <div className="col-sm-6">
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
                    </div>

                    <div>
                      <div className="table-responsive">
                        <Table className="table table-bordered mb-4 mt-5">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Brand Name</th>
                              <th>Model Name</th>
                              <th>Version </th>
                              <th>year </th>
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
                                <td>{data.brand_name}</td>
                                <td>{data.model_name}</td>
                                <td>{data.carVersion}</td>
                                <td>{data.carMakeYear}</td>
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
                  <CardBody>
                    <div className="row">
                      <div className="col-sm-6">
                        <CardTitle>Versions List</CardTitle>
                      </div>
                      <div className="col-sm-6">
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
                    </div>

                    <div>
                      <div className="table-responsive">
                        <Table className="table table-bordered mb-4 mt-5">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Brand Name</th>
                              <th>Model Name</th>
                              <th>Version </th>
                              <th>year </th>
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
                                <td>{data.brand_name}</td>
                                <td>{data.model_name}</td>
                                <td>{data.carVersion}</td>
                                <td>{data.carMakeYear}</td>
                                <td>
                                  {data.status == "true" ? "Active" : "Inactive"}
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

        <Modal
          // size="lg"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
          className="mt-5"
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit Car Versions
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
                <Label for="basicpill-firstname-input3">
                  Brand <span className="text-danger">*</span>
                </Label>

                <select
                  onChange={e => {
                    handleChange1s(e)
                  }}
                  value={form1.brandId}
                  name="brandId"
                  className="form-select"
                >
                  {model1.map((data, key) => {
                    return (
                      <option key={key} value={data._id}>
                        {data.brandName}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="mb-3">
                <Label for="basicpill-firstname-input1">
                  Model <span className="text-danger">*</span>
                </Label>

                <select
                  onChange={e => {
                    handleChange1(e)
                  }}
                  value={form1.modelId}
                  name="modelId"
                  className="form-select"
                >
                  {models != "" ? (
                    ""
                  ) : (
                    <option value={form1.modelId}>{form1.model_name}</option>
                  )}

                  {models.map((data, key) => {
                    return (
                      <option key={key} value={data._id}>
                        {data.model_name}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div className="mb-3">
                <Label for="basicpill-firstname-input1">
                  Version <span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter Version"
                  required
                  name="carVersion"
                  value={form1.carVersion}
                  onChange={e => {
                    handleChange1(e)
                  }}
                />
              </div>
              <div className="mb-3">
                <Label for="basicpill-firstname-input1">
                  Year <span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter Year"
                  required
                  name="carMakeYear"
                  value={form1.carMakeYear}
                  onChange={e => {
                    handleChange1(e)
                  }}
                />
              </div>

              <div className="mb-3">
                <Label for="basicpill-firstname-input1">
                  Status <span className="text-danger">*</span>
                </Label>
                <select
                  className="form-select"
                  value={form1.status}
                  name="status"
                  onChange={e => {
                    handleChange1(e)
                  }}
                >
                  {" "}
                  <option value="">select</option>
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
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
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Version
