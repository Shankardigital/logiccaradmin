import React, { useEffect, useState } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  Label,
  Input,
  Button,
  Table,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { Link } from "react-router-dom"

const Deposit = () => {
  const [show, setshow] = useState(false)

  const [form, setform] = useState([])

  useEffect(() => {
    getAllPayments()
  }, [])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const getAllPayments = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("searchQueryParams", "")
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/voucher/getalldeposits",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.depositResult)
      })
  }

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = form.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(form.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const [search, setsearch] = useState([])

  const searchAll = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)

    const dataArray = new FormData()
    dataArray.append("searchQueryParams", e.target.value)
    dataArray.append("branchId", localStorage.getItem("ids"))

    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/voucher/getalldeposits",
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.depositResult)
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Deposit" />

          {show ? (
            <Card>
              <CardBody>
                <Row>
                  <h5 className="mb-4">Security Deposit</h5>
                  <Col md="4">
                    <Label>Customer Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Enter Booking Id"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Amount</Label>
                    <Input
                      type="number"
                      className="form-control"
                      placeholder="Enter Amount "
                    />
                  </Col>

                  <Col>
                    <div className="">
                      <Label></Label>
                      <br />
                      <Button
                        className="m-2"
                        onClick={() => {
                          setshow(!show)
                        }}
                        color="primary"
                      >
                        <i className="fas fa-check-circle"></i> Send
                      </Button>
                      <Button
                        className="m-1"
                        onClick={() => {
                          setshow(false)
                        }}
                        color="danger"
                      >
                        <i className="fas fa-times-circle"></i> Cancel
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ) : (
            ""
          )}

          <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white">
                  {/* <CardTitle>Branch List</CardTitle> */}
                </CardHeader>

                <CardBody>
                  <div>
                    <div className="table-responsive">
                      <div style={{ float: "right" }}>
                        <Input
                          type="search"
                          className="form-control"
                          placeholder="Search.."
                        />
                      </div>
                      <div style={{ float: "right" }}>
                        <Button
                          onClick={() => {
                            setshow(!show)
                          }}
                          style={{ marginRight: "20px" }}
                          color="primary"
                        >
                          <i className="fas fa-plus-circle"></i> Add
                        </Button>
                      </div>
                      <Table className="table table-bordered mb-4 mt-5">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Customer Name</th>
                            <th>Phone No.</th>
                            <th>Debit</th>
                            <th>Credit</th>

                            {/* <th style={{ width: "100px" }}>Action</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {lists.map((data, key) => (
                            <tr key={key}>
                              <th>{(pageNumber - 1) * 5 + key + 6}</th>
                              <td>{data.customerName}</td>
                              <td>{data.customerPhone}</td>
                              <td>{data.depositeAmount}</td>
                              <td>{data.securityDepositReturn}</td>

                              {/* <td>
                                <Link to="/history">
                                  <Button
                                    onClick={() => {
                                      tog_small()
                                    }}
                                    className="mr-2"
                                    style={{ padding: "6px", margin: "3px" }}
                                    color="warning"
                                    outline
                                  >
                                    <i className="fas fa-eye text-dark"></i>
                                  </Button>
                                </Link>
                              </td> */}
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
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Deposit

// <tbody>
//   <tr>
//     <th scope="row">1</th>
//     {/* <td>LC0981</td>
//     <td>Hyundai santro</td> */}
//     <td>Sateesh</td>
//     <td>9832556124</td>
//     <td>200</td>
//     <td>3000</td>
//     <td>50000</td>
//     <td>
//       <Link to="/history">
//         {" "}
//         <Button
//           onClick={() => {
//             tog_small()
//           }}
//           className="mr-2"
//           style={{ padding: "6px", margin: "3px" }}
//           color="warning"
//           outline
//         >
//           <i className="fas fa-eye text-dark"></i>
//         </Button>
//       </Link>
//       <Button
//         style={{ padding: "6px", margin: "3px" }}
//         color="danger"
//         outline
//       >
//         <i className="bx bx-trash text-dark"></i>
//       </Button>
//     </td>
//   </tr>
//   <tr>
//     <th scope="row">2</th>
//     {/* <td>LC0982</td>
//     <td>Hyundai santro</td> */}
//     <td>Sateesh</td>
//     <td>9832556124</td>
//     <td>200</td>
//     <td>3000</td>
//     <td>50000</td>
//     <td>
//       <Link to="/history">
//         {" "}
//         <Button
//           onClick={() => {
//             tog_small()
//           }}
//           className="mr-2"
//           style={{ padding: "6px", margin: "3px" }}
//           color="warning"
//           outline
//         >
//           <i className="fas fa-eye text-dark"></i>
//         </Button>
//       </Link>
//       <Button
//         style={{ padding: "6px", margin: "3px" }}
//         color="danger"
//         outline
//       >
//         <i className="bx bx-trash text-dark"></i>
//       </Button>
//     </td>
//   </tr>
// </tbody>
