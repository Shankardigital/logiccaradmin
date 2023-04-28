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

const Blockeduser = () => {
  const [customer, setcustomer] = useState([])
  const [dely, setdely] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const getAllcustomer = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/customer/getallinactcustomers",
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

  const [forms, setforms] = useState([])

  const handle = e => {
    const myform = { ...forms }
    myform[e.target.name] = e.target.value
    setforms(myform)
  }

  const handleSubmit = e => {
    e.preventDefault()
    disablecust()
  }

  const disablecust = () => {
    var token = datas
    var remid = dely._id
    const dataArray = new FormData()
    dataArray.append("isBlocked", forms.isBlocked)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/customer/enablecustomer" +
          "/" +
          remid,
        dataArray,
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
        `http://103.186.185.77:5021/api/v1/admin/customer/getallinactcustomers?searchQueryParams=${e.target.value}`,
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcustomer(res.data.custsResult)
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Blocked User" />

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
                            <th>Reason</th>
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
                              <td>{data.customerName}</td>
                              <td>
                                <small>
                                  <b>{data.email}</b>
                                </small>
                                <br />
                                <small>{data.phone}</small>
                              </td>
                              <td>{data.countryName}</td>
                              <td>{data.reason}</td>
                              <td className="text-danger">Block</td>

                              <td>
                                <Button
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title="Block"
                                  onClick={() => {
                                    getpoppup(data)
                                  }}
                                  style={{ padding: "6px", margin: "3px" }}
                                  color="success"
                                  outline
                                >
                                  <i className="fas fa-unlock-alt text-primary"></i>
                                </Button>
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
          centered
        >
          <div className="">
            <h5 className="modal-title p-2" id="mySmallModalLabel">
              Unblock User
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
                handleSubmit(e)
              }}
            >
              <Row>
                <div className="mb-3 mt-3">
                  <Label for="basicpill-firstname-input3">
                    Status <span className="text-danger">*</span>
                  </Label>
                  <select
                    className="form-select"
                    name="isBlocked"
                    value={forms.isBlocked}
                    required
                    onChange={e => {
                      handle(e)
                    }}
                  > <option value="">select</option>
                    <option value="false">Un-Block</option>
                  </select>
                </div>
              </Row>

              <div style={{ float: "right" }}>
                <Button
                  style={{ width: "100px" }}
                  className="m-1"
                  color="primary"
                  type="submit"
                >
                  submit <i className="fas fa-check-circle"></i>
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

export default Blockeduser
