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
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Select from "react-select"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"

const Notification = () => {
  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const [notification, setnotificationl] = useState([])

  useEffect(() => {
    getAllNotification()
  }, [])

  const getAllNotification = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/notify/getall-notification",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setnotificationl(res.data.notifyResult)
      })
  }

  const [form, setform] = useState([])

  const handleChange = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addNotification()
  }
  const addNotification = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("department", form.department)
    dataArray.append("subject", form.subject)
    dataArray.append("link", form.link)
    dataArray.append("description", form.description)

    // for (let i = 0; i < selectedOptions.length; i++) {
    //   dataArray.append("userList", selectedOptions[i].value)
    // }

    if (form.userList == "All") {
      dataArray.append("userList", form.userList)
    } else {
      for (let i = 0; i < selectedOptions.length; i++) {
        dataArray.append("userList", selectedOptions[i].value)
      }
    }

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/notify/addnotification",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllNotification()
            clearForm()
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

  const [customer, setcustomer] = useState([])

  const optionGroup1 = customer.map(response => ({
    value: response._id,
    label: response.userName,
  }))

  const [selectedOptions, setSelectedOptions] = useState([])

  function handleSelect(details) {
    setSelectedOptions(details)
  }

  //   useEffect(() => {
  //     getAllcustomer()
  //   }, [])

  const getAllcustomer = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/customer/getallactiveunblockedusers",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcustomer(res.data.custresult)
      })
  }

  const clearForm = () => {
    setform({
      department: "",
      subject: "",
      link: "",
      description: "",
      userList: "",
    })
  }

  const clearForm1 = () => {
    setSelectedOptions("")
  }
  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = notification.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(notification.length / listPerPage)
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
        "http://103.186.185.77:5021/api/v1/admin/notify/remove-notification" +
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
            getAllNotification()
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
        `http://103.186.185.77:5021/api/v1/admin/notify/getall-notification?searchQueryParams=${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setnotificationl(res.data.notifyResult)
      })
  }

  const searchAll1 = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)

    const dataArray = new FormData()
    dataArray.append("department", e.target.value)

    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/customer/getallactiveunblockedusers",
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcustomer(res.data.custresult)
      })
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

  return (
    <React.Fragment>
       {dats.notificationMgtView == true || dats1 == "admin" ? (
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Notifications" />

          <Row>
            {dats.notificationMgtAdd == true || dats1 == "admin" ? (
              <Col md={4}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add Notification</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form
                      onSubmit={e => {
                        handleSubmit(e)
                      }}
                    >
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Department <span className="text-danger">*</span>
                        </Label>

                        <select
                          onChange={e => {
                            searchAll1(e)
                          }}
                          value={form.department}
                          name="department"
                          className="form-select"
                          required
                        >
                          <option value="">select</option>
                          <option value="All">All</option>
                          <option value="Employees">Staff</option>
                          <option value="Drivers">Drivers</option>
                          <option value="Customers">Customers</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          All Users
                          <span className="text-danger">*</span>
                        </Label>
                        <select
                          value={form.userList}
                          name="userList"
                          onChange={e => {
                            handleChange(e)
                          }}
                          className="form-select"
                        >
                          <option value="">Select</option>
                          <option value="All"> All Users</option>
                        </select>
                      </div>
                      {form.userList == "All" ? (
                        ""
                      ) : (
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input1">
                            Select Users <span className="text-danger">*</span>
                          </Label>
                          <Select
                            style={{ width: "100%" }}
                            required
                            options={optionGroup1}
                            placeholder="Select Users"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            isMulti
                            name="userList"
                          />
                        </div>
                      )}
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Subject <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Subject"
                          required
                          name="subject"
                          value={form.subject}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">Link</Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Link"
                          name="link"
                          required
                          value={form.link}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input3">
                          Description
                        </Label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input3"
                          placeholder="Enter Description"
                          name="description"
                          required
                          value={form.description}
                          onChange={e => {
                            handleChange(e)
                          }}
                        />
                      </div>

                      <div style={{ float: "right" }}>
                        <Button color="primary" type="submit">
                          Send <i className="fab fa-telegram"></i>
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            ) : (
              ""
            )}
           
              <Col md={8}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Notifications List</CardTitle>
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
                              <th>Date&Time</th>
                              <th>Department</th>
                              {/* <th>Users</th> */}
                              <th>Subject</th>
                              <th>Description</th>
                              <th>Link</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>{data.logDateModified}</td>
                                {data.department == "Employees" ? (
                                  <td>Staff</td>
                                ) : (
                                  <td>{data.department}</td>
                                )}

                                <td>{data.subject}</td>
                                <td>{data.description}</td>
                                <td>{data.link}</td>

                                <td>
                                  {dats.notificationMgtDelete == true ||
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
                                    "-"
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        <div style={{ float: "right" }}>
                          <div className="mt-3 mb-3" style={{ float: "right" }}>
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
                    </div>
                  </CardBody>
                </Card>
              </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
       ) : (
        <Card>
            <h5 className="text-center p-1">You don't have permission to access</h5>
        </Card>
    )}
    </React.Fragment>
  )
}

export default Notification
