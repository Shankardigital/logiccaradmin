import React, { useState, useEffect } from "react"
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
import img1 from "../assets/images/latest/car1.jpg"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import { URL } from "../Apiurl"
import axios from "axios"

const Banner = () => {
  //meta title
  // document.title = "Stater Page | Logic Cars Admin";

  const [modal_small, setmodal_small] = useState(false)
  const [banner, setbanner] = useState([])
  const [form, setform] = useState([])
  const [form1, setform1] = useState([])
  console.log(form1)
  const [form2, setform2] = useState([])
  const [Files, setFiles] = useState("")
  const [Files1, setFiles1] = useState("")

  const changeHandler = e => {
    setFiles(e.target.files)
  }
  const changeHandler1 = e => {
    setFiles1(e.target.files)
  }

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

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

  const [items, setItems] = useState([])
  const [userinfo, setuserinfo] = useState([])
  console.log(items.token)
  console.log(userinfo)

  useEffect(() => {
    getAllbenners()
  }, [])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  console.log(datas)

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = banner.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(banner.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const addbenners = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("title", form.title)
    dataArray.append("description", form.description)
    for (let i = 0; i < Files.length; i++) {
      dataArray.append("icon", Files[i])
    }
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/whyus/addwhyus",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllbenners()
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

  const editbenners = () => {
    var token = datas
    var formid = form1._id
    const dataArray = new FormData()
    dataArray.append("title", form1.title)
    dataArray.append("description", form1.description)
    dataArray.append("status", form1.status)
    for (let i = 0; i < Files1.length; i++) {
      dataArray.append("icon", Files1[i])
    }
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/whyus/editwhyus" +
        "/" +
        formid,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllbenners()
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

  const deletebenners = data => {
    var token = datas
    var remid = data._id
    axios
      .delete(
        "http://103.186.185.77:5021/api/v1/admin/whyus/removewhyus" +
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

            getAllbenners()
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
    const confirmBox = window.confirm("Do you really want to Delete?")
    if (confirmBox === true) {
      deletebenners(data)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    addbenners()
  }
  const handleSubmit1 = e => {
    e.preventDefault()
    editbenners()
  }

  const getAllbenners = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/whyus/getallwhyus",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        console.log(res.data)
        setbanner(res.data.whyusResult)
      })
  }

  const clearForm = () => {
    setform({
      title: "",
      description: "",
    })
    setFiles({
      icon: "",
    })
  }
  const getpopup = data => {
    setform1(data)
    tog_small()
  }

  const [search, setsearch] = useState([])

  const searchAll = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)

    var token = datas
    axios
      .post(
        `http://103.186.185.77:5021/api/v1/admin/whyus/getallwhyus?searchQueryParams=${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbanner(res.data.whyusResult)
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="why us" />

          <Row>
            {dats.bannerMgtAdd == true || dats1 == "admin" ? (
              <Col md={4}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add why us</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form
                      onSubmit={e => {
                        handleSubmit(e)
                      }}
                    >
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          why us Title <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter  why us Title"
                          required
                          name="title"
                          value={form.title}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          why us Icon <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="file"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter image"
                          required
                          name="icon"
                          value={Files.icon}
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <Label>description</Label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="basicpill-namecard-input11"
                          placeholder="Enter description"
                          name="description"
                          value={form.description}
                          required
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

            {dats.bannerMgtAdd == true || dats1 == "admin" ? (
              <Col md={8}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>why us List</CardTitle>
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
                              <th>Icon</th>
                              <th>description</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>{data.title}</td>
                                <td>
                                  <img
                                    style={{ width: "100px" }}
                                    src={
                                      "http://103.186.185.77:5021/" +
                                      data.icon
                                    }
                                  />
                                </td>
                                <td>{data.description}</td>
                                <td>
                                  {data.status === true ||
                                    data.status == "true"
                                    ? "Active"
                                    : "Inactive"}{" "}
                                </td>
                                <td>
                                  {dats.bannerMgtEdit == true ||
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
                                  {dats.bannerMgtDelete == true ||
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
                    <CardTitle>why us List</CardTitle>
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
                              <th>Icon</th>
                              <th>description</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>

                          </thead>
                          <tbody>
                          {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>{data.title}</td>
                                <td>
                                  <img
                                    style={{ width: "100px" }}
                                    src={
                                      "http://103.186.185.77:5021/" +
                                      data.icon
                                    }
                                  />
                                </td>
                                <td>{data.description}</td>
                                <td>
                                  {data.status === true ||
                                    data.status == "true"
                                    ? "Active"
                                    : "Inactive"}{" "}
                                </td>
                                <td>
                                  {dats.bannerMgtEdit == true ||
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
                                  {dats.bannerMgtDelete == true ||
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
          size="md"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
          centered
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit why us
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
                <Input
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
                <Label for="basicpill-firstname-input1">Icon</Label>
                <Input
                  type="file"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter image"
                  name="bannerImg"
                  onChange={changeHandler1}
                />
              </div>
              <div className="mb-3">
                <Label>Discription</Label>
                <textarea
                  type="text"
                  className="form-control"
                  id="basicpill-namecard-input11"
                  placeholder="Enter Discriptione"
                  name="description"
                  required
                  value={form1.description}
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
                  }}
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

export default Banner
