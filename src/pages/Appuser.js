import React, { useState, useEffect } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  Form,
  Label,
  Input,
  Button,
  Table,
  Modal,
} from "reactstrap"
import "../../src/common.css"
import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { useHistory } from "react-router-dom"
import usergif from "../assets/images/latest/usergif.gif"

const Addusers = () => {
  const [customer, setcustomer] = useState([])
  const [dely, setdely] = useState([])
  console.log(dely)

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  console.log(datas)

  const getAllcustomer = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/customer/appsidecustomers",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcustomer(res.data.custsResult)
      })
  }

  const [listPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = customer.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(customer.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  useEffect(() => {
    getAllcustomer()
  }, [])

  const history = useHistory()

  function handleClick() {
    history.push("/edituser")
  }

  function handleClick12() {
    history.push("/viewuser")
  }

  const getdata = data => {
    sessionStorage.setItem("dataid", data._id)

    handleClick()
  }

  const getdata12 = data => {
    sessionStorage.setItem("dataid", data._id)

    handleClick12()
  }

  const disablecust = () => {
    var token = datas
    var remid = dely._id
    axios
      .put(
        " http://103.186.185.77:5021/api/v1/admin/customer/disablecustomer" +
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
            getAllcustomer()
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

  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }
  const getpoppup = data => {
    setdely(data)
    tog_small()
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
        `http://103.186.185.77:5021/api/v1/admin/customer/appsidecustomers?searchQueryParams=${e.target.value}`,
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcustomer(res.data.custsResult)
      })
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

  console.log(dats.staffMgtEdit)


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="App User List" />

          <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white"></CardHeader>
                <div className="container">
                  <Input
                    type="search"
                    style={{ width: "20%", float: "right" }}
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
                            <th>Name</th>
                            <th>Email-Phone </th>
                            <th>Country</th>
                            <th>Joined At</th>
                            <th>Balance</th>
                            <th>Status</th>

                            <th style={{ width: "130px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lists.map((data, key) => (
                            <tr key={key} className="text-center">
                              <th scope="row">
                                {(pageNumber - 1) * 10 + key + 11}
                              </th>
                              <td>{data.customerName}</td>
                              <td>
                                <small>
                                  <b>{data.email}</b>
                                </small>
                                <br />
                                <small>{data.phone}</small>
                              </td>
                              <td>{data.countryName}</td>
                              <td>{data.logDateCreated.slice(0, 10)}</td>
                              <td>{data.wallet}</td>
                              <td>
                                <span style={{ borderRadius: "5px" }}>
                                  {data.status == true ? (
                                    <a className="text-success">Active</a>
                                  ) : (
                                    <a className="text-danger">Inactive</a>
                                  )}
                                </span>
                              </td>

                              <td> {dats.userMgtEdit == true ||
                                dats1 == "admin" ? (
                                <Button
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title="Edit"
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
                              )}{" "} {dats.staffMgtView == true ||
                                dats1 == "admin" ? (
                                <Button
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title="View"
                                  onClick={() => {
                                    getdata12(data)
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
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Block"
                                    onClick={() => {
                                      getpoppup(data)
                                    }}
                                    style={{ padding: "6px", margin: "3px" }}
                                    color="danger"
                                    outline
                                  >
                                    <i className="fas fa-ban text-primary"></i>
                                  </Button>) : (
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
        </Container>

        <Modal
          isOpen={modal_small}
          size="sm"
          toggle={() => {
            tog_small()
          }}
        >
          <div className="">
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
                <div className="text-center mt-4">
                  <img style={{ width: "250px" }} src={usergif} />
                </div>

                <h5 className="text-center mt-4">
                  Do you want to block this User ?
                </h5>

                <Label className="mt-3">Reasion</Label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Enter Reasions"
                />
              </Row>

              <div className="text-center mt-3">
                <Button
                  onClick={disablecust}
                  style={{ width: "100px" }}
                  className="m-1"
                  color="primary"
                  type="button"
                >
                  Yes <i className="fas fa-check-circle"></i>
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
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Addusers
