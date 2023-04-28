import React, { useEffect, useState } from "react"
import { CardBody, Container, Row, Col, Card, Input, Table } from "reactstrap"
import Breadcrumbs from "../components/Common/Breadcrumb"
import ReactPaginate from "react-paginate"
import axios from "axios"

function Wallet() {
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
        "http://103.186.185.77:5021/api/v1/admin/voucher/getallwallethistory",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.walletResult)
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
        "http://103.186.185.77:5021/api/v1/admin/voucher/getallwallethistory",
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.walletResult)
      })
  }

  return (
    <div>
      {" "}
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Wallet History" />
            <Row>
              <Col md={12}>
                <Card>
                  <CardBody>
                    <div>
                      <div className="row ">
                        <div className="col"></div>
                        <div className="col">
                          <div style={{ float: "right" }}>
                            <Input
                              type="search"
                              className="form-control"
                              placeholder="Search.."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="table-responsive">
                        <Table className="table table-bordered mb-4 mt-3">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Date</th>
                              <th>Customer Name</th>
                              <th>Total</th>
                              <th>Transaction Type</th>
                              <th>Transaction Status</th>
                            </tr>
                          </thead>

                          <tbody>
                            {lists.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>{data.logDateCreated.slice(0, 10)}</td>
                                <td>{data.customerName}</td>
                                <td>{data.wallet}</td>
                                <td>{data.transactionType}</td>
                                <td>{data.transactionStatus}</td>
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
        </div>
      </React.Fragment>
    </div>
  )
}

export default Wallet
