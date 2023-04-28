import React, { useState, useEffect } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  Input,
  Button,
  Table,
} from "reactstrap"
import "../../../src/common.css"
import axios from "axios"
import ReactPaginate from "react-paginate"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

const Driverlist = () => {
  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  console.log(datas)

  const [driver, setdriver] = useState([])
  console.log(driver)

  useEffect(() => {
    getAlldrivers()
  }, [])

  const getAlldrivers = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/driver/getalldrivers",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setdriver(res.data.custsResult)
      })
  }

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = driver.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(driver.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const history = useHistory()

  function handleClick123() {
    history.push("/edit-driver")
  }
  function handleClick1234() {
    history.push("/view-driver")
  }

  const getdata = data => {
    sessionStorage.setItem("driverid", data._id)
    // history.push("/edituser")
    // <Redirect to='/edituser' />
    handleClick123()
  }
  const getdata1 = data => {
    sessionStorage.setItem("driverid", data._id)
    // history.push("/edituser")
    // <Redirect to='/edituser' />
    handleClick1234()
  }

  const [forms, setforms] = useState([])

  const handlechange = e => {
    let myUser = { ...forms }
    myUser[e.target.name] = e.target.value
    setforms(myUser)
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    var token = datas
    axios
      .post(
        `http://103.186.185.77:5021/api/v1/admin/driver/getalldrivers?searchQueryParams=${e.target.value}`,
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setdriver(res.data.custsResult)
      })
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
        "http://103.186.185.77:5021/api/v1/admin/driver/disabledriver" +
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
            getAlldrivers()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Drivers" />

          <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white">
                  {/* <CardTitle>Users List</CardTitle> */}
                </CardHeader>
                <div className="container">
                  <Input
                    type="search"
                    style={{ width: "300px", float: "right" }}
                    className="form-control"
                    placeholder="Search.."
                    value={forms.search}
                    onChange={handlechange}
                  />
                </div>
                <CardBody>
                  <div>
                    <div className="table-responsive mb-4">
                      <Table className="table table-bordered mb-3">
                        <thead>
                          <tr className="text-center">
                            <th>S.No</th>
                            <th>Driver</th>
                            <th>Email-Phone </th>
                            <th>Country</th>
                            <th>Joined At</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lists.map((data, key) => (
                            <tr key={key} className="text-center">
                              <th scope="row">
                                {(pageNumber - 1) * 10 + key + 11}
                              </th>
                              <td>{data.driverName}</td>
                              <td>
                                {data.email}/{data.phone}
                              </td>

                              <td>{data.address}</td>
                              <td>{data.logDateCreated.slice(0, 10)}</td>
                              <td>
                                {data.status == true ? "Active" : "Inactive"}
                              </td>
                              <td>
                                {dats.driverMgtView == true ||
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
                                  ""
                                )}

                                {dats.driverMgtEdit == true ||
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
                                
                                {dats.driverMgtDelete == true ||
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
                              {/* <Link to="/edit-staff"> */}
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
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
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Driverlist
