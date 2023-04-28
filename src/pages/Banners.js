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
    dataArray.append("bannerName", form.bannerName)
    dataArray.append("description", form.description)
    for (let i = 0; i < Files.length; i++) {
      dataArray.append("bannerImage", Files[i])
    }
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carBanner/addcarbanner",
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
    dataArray.append("bannerName", form1.bannerName)
    dataArray.append("description", form1.description)
    dataArray.append("status", form1.isActive)
    for (let i = 0; i < Files1.length; i++) {
      dataArray.append("bannerImage", Files1[i])
    }
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carBanner/editbanner" +
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
            clearForm1()

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
        "http://103.186.185.77:5021/api/v1/admin/carBanner/removebanner" +
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
        "http://103.186.185.77:5021/api/v1/admin/carBanner/getBannersbySearch",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        console.log(res.data)
        setbanner(res.data.bannerResult)
      })
  }
  const clearForm1 = () => {
    setFiles1({
      bannerImage: "",
    })
  }
  const clearForm = () => {
    setform({
      bannerName: "",
      description: "",
    })
    setFiles({
      bannerImage: "",
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
        `http://103.186.185.77:5021/api/v1/admin/carBanner/getBannersbySearch?searchQueryParams=${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbanner(res.data.bannerResult)
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Banners" />

          <Row>
            {dats.bannerMgtAdd == true || dats1 == "admin" ? (
              <Col md={4}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add Banner</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form
                      onSubmit={e => {
                        handleSubmit(e)
                      }}
                    >
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Banner Title <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Bannner Name"
                          required
                          name="bannerName"
                          value={form.bannerName}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Banner Image <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="file"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter image"
                          required
                          name="bannerImage"
                          value={Files.bannerImage}
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <Label>Link Name</Label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="basicpill-namecard-input11"
                          placeholder="Enter Link Name"
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
                    <CardTitle>Banners List</CardTitle>
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
                              <th>Banner Name</th>
                              <th>Banner Image</th>
                              <th>Link Name</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>{data.bannerName}</td>
                                <td>
                                  <img
                                    style={{ width: "100px" }}
                                    src={
                                      "http://103.186.185.77:5021/" +
                                      data.bannerImage
                                    }
                                  />
                                </td>
                                <td>{data.description}</td>
                                <td>
                                  {data.isActive === true ||
                                    data.isActive == "true"
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
                    <CardTitle>Banners List</CardTitle>
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
                              <th>Banner Name</th>
                              <th>Banner Image</th>
                              <th>Link Name</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>{data.bannerName}</td>
                                <td>
                                  <img
                                    style={{ width: "100px" }}
                                    src={
                                      "http://103.186.185.77:5021/" +
                                      data.bannerImage
                                    }
                                  />
                                </td>
                                <td>{data.description}</td>
                                <td>
                                  {data.isActive === true ||
                                    data.isActive == "true"
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
          size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit Banners
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
                  Banner Name <span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter Banner Name"
                  required
                  name="bannerName"
                  value={form1.bannerName}
                  onChange={e => {
                    handleChange1(e)
                  }}
                />
              </div>
              <div className="mb-3">
                <Label for="basicpill-firstname-input1">Banner Image</Label>
                <Input
                  type="file"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter image"
                  name="bannerImage"
                  value={Files1.bannerImage}
                  onChange={changeHandler1}
                />
              </div>
              <div className="mb-3">
                <Label>Link Name</Label>
                <textarea
                  type="text"
                  className="form-control"
                  id="basicpill-namecard-input11"
                  placeholder="Enter Link Name"
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
                  name="isActive"
                  value={form1.isActive}
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
