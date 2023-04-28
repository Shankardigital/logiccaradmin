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
import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"

const options = [
  { value: "Luxury", label: "Luxury" },
  { value: "LuxurySUV", label: "Luxury SUV" },
  { value: "SUV", label: "SUV" },
  { value: "Sedan", label: "Sedan" },
  { value: "Hatchback", label: "Hatchback" },
  { value: "Crossover", label: "Crossover" },
]

const Model = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedOption1, setSelectedOption1] = useState(null)

  //meta title
  // document.title = "Stater Page | Logic Cars Admin";

  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  const [model, setmodel] = useState([])
  const [model1, setmodel1] = useState([])
  // console.log(model1[0].title)
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

  const getAllmodal = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carmodel/getallcarmodels",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setmodel(res.data.modelResult)
      })
  }

  const getactivebrand = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/brand/getallactivecarbrands",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setmodel1(res.data.activecarBrandResult)
      })
  }

  const [type, settype] = useState([])

  const getactivetype = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/cartype/getallactivecartypes",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        settype(res.data.cartypeResult)
      })
  }

  const addbrands = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("carTypeId", form.carTypeId)
    dataArray.append("brandId", form.brandId)
    dataArray.append("model_name", form.model_name)
    dataArray.append("noOfSeats", form.noOfSeats)
    // for (let i = 0; i < Files.length; i++) {
    //   dataArray.append("carmodelImg", Files[i])
    // }
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carmodel/addcarmodel",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllmodal()
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

  const editbrands = () => {
    var token = datas
    const docid = form1._id
    const dataArray = new FormData()
    dataArray.append("carTypeId", form1.carTypeId)
    dataArray.append("brandId", form1.brandId)
    dataArray.append("model_name", form1.model_name)
    dataArray.append("noOfSeats", form1.noOfSeats)
    dataArray.append("status", form1.status)
    // for (let i = 0; i < Files1.length; i++) {
    //   dataArray.append("carmodelImg", Files1[i])
    // }
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carmodel/editcarmodel" +
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
            getAllmodal()
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
        "http://103.186.185.77:5021/api/v1/admin/carmodel/disablecarmodel" +
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
            getAllmodal()
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
    addbrands()
    setform("")
    clearForm()
  }

  const handleSubmit1 = e => {
    e.preventDefault()
    editbrands()
    // setform1("")
    clearForm()
  }

  const clearForm = () => {
    setform({
      carTypeId: "",
      brandId: "",
      model_name: "",
      noOfSeats: "",
      carmodelImg: "",
    })
  }

  const getpopup = data => {
    setform1(data)
    tog_small()
  }

  useEffect(() => {
    getAllmodal()
    getactivebrand()
    getactivetype()
  }, [])

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = model.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(model.length / listPerPage)
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
        `http://103.186.185.77:5021/api/v1/admin/carmodel/getallcarmodels?searchQueryParams=${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setmodel(res.data.modelResult)
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Car Models" />
          <Row>
            {dats.carMgtAdd == true || dats1 == "admin" ? (
              <Col md={4}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add Car Model</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form
                      onSubmit={e => {
                        handleSubmit(e)
                      }}
                    >
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input3">
                          Car Type <span className="text-danger">*</span>
                        </Label>

                        <select
                          onChange={e => {
                            handleChange(e)
                          }} required
                          value={form.carTypeId}
                          name="carTypeId"
                          className="form-select"
                        >
                          <option value="">select</option>
                          {type.map((data, key) => {
                            return (
                              <option key={key} value={data._id}>
                                {data.title}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input3">
                          Brand <span className="text-danger">*</span>
                        </Label>

                        <select
                          onChange={e => {
                            handleChange(e)
                          }} required
                          value={form.brandId}
                          name="brandId"
                          className="form-select"
                        >
                          <option value="">select</option>
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
                          Model Name <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Model Name"
                          required
                          name="model_name"
                          value={form.model_name}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          No. of Persons Seats{" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter No.of Seats"
                          required
                          name="noOfSeats"
                          value={form.noOfSeats}
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
                        <CardTitle>Model List</CardTitle>
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
                              <th>Car Type</th>
                              <th>Brand Name</th>
                              <th>Model Name</th>

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
                                <td>{data.carType}</td>
                                <td>{data.brandName}</td>
                                <td>{data.model_name}</td>

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
                        <CardTitle>Model List</CardTitle>
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
                              <th>Car Type</th>
                              <th>Brand Name</th>
                              <th>Model Name</th>

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
                                <td>{data.carType}</td>
                                <td>{data.brandName}</td>
                                <td>{data.model_name}</td>

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

          <ToastContainer />
        </Container>

        <Modal
          // size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
          className="mt-5"
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit Car Model
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
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Car Type <span className="text-danger">*</span>
                    </Label>

                    <select
                      onChange={e => {
                        handleChange1(e)
                      }}
                      value={form1.carTypeId}
                      name="carTypeId"
                      className="form-select"
                      required
                    >
                      <option value="">select</option>
                      {type.map((data, key) => {
                        return (
                          <option key={key} value={data._id}>
                            {data.title}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      Model Name <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Model Name"
                      required
                      name="model_name"
                      value={form1.model_name}
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
                      name="status"
                      value={form1.status}
                      onChange={e => {
                        handleChange1(e)
                      }}required
                      className="form-select"
                    >
                      <option value="">Select</option>
                      <option value="true">Active</option>
                      <option value="false">In Active</option>
                    </select>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Brand <span className="text-danger">*</span>
                    </Label>

                    <select
                      onChange={e => {
                        handleChange1(e)
                      }}required
                      value={form1.brandId}
                      name="brandId"
                      className="form-select"
                    >
                      <option value="">select</option>
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
                      No. of Persons <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter No.of Seats"
                      required 
                      name="noOfSeats"
                      value={form1.noOfSeats}
                      onChange={e => {
                        handleChange1(e)
                      }}
                    />
                  </div>
                </Col>
              </Row>

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

export default Model
