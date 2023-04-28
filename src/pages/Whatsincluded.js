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
import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"

const Brand = () => {
  //meta title
  // document.title = "Stater Page | Logic Cars Admin";

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

  const getAllbrand = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/car/getallwhatsinclude",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.includeResult)
      })
  }

  const addbrands = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("title", form.title)
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/car/addwhatsinclude",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllbrand()
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
    dataArray.append("title", form1.title)
    dataArray.append("status", form1.status)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/car/editwhatsinclude" +
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
            getAllbrand()
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
      title: "",
    })
  }

  const getpopup = data => {
    setform1(data)
    tog_small()
  }

  useEffect(() => {
    getAllbrand()
  }, [])

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = brand.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(brand.length / listPerPage)
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
      .put(
        "http://103.186.185.77:5021/api/v1/admin/car/changewhatsincludestatus" +
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
            getAllbrand()
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

    var token = datas
    axios
      .post(
        `http://103.186.185.77:5021/api/v1/admin/car/getallwhatsinclude?searchQueryParams=${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.includeResult)
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="what's included" />

          <Row>
            {dats.carMgtAdd == true || dats1 == "admin" ? (
              <Col md={4}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form
                      onSubmit={e => {
                        handleSubmit(e)
                      }}
                    >
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Title <span className="text-danger">*</span>
                        </Label>
                        <textarea
                          type="text"
                          name="title"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Title"
                          required
                          value={form.title}
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
                    <CardTitle>what's included List</CardTitle>
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
                              <th>Title</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>{data.title}</td>
                                <td>{data.logDateCreated.slice(0, 10)}</td>
                                <td>
                                  {data.status == true
                                    ? "Active"
                                    : "Inactive"}
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
                                      style={{ padding: "6px", margin: "3px" }}
                                      color="danger"
                                      outline
                                      onClick={() => {
                                        manageDelete(data)
                                      }}
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
                          {/* <Stack spacing={2}> */}
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
                          {/* </Stack> */}
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
                    <CardTitle>what's included List</CardTitle>
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
                              <th>Title</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>{data.title}</td>
                                <td>{data.logDateCreated.slice(0, 10)}</td>
                                <td>
                                  {data.status == true
                                    ? "Active"
                                    : "Inactive"}
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
                                      style={{ padding: "6px", margin: "3px" }}
                                      color="danger"
                                      outline
                                      onClick={() => {
                                        manageDelete(data)
                                      }}
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
                          {/* <Stack spacing={2}> */}
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
                          {/* </Stack> */}
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
          size="md"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
          centered
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit
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
                  Title <span className="text-danger">*</span>
                </Label>
                <textarea
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter Title"
                  required
                  name="title"
                  value={form1.title}
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
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Brand
