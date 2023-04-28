import React, { useEffect, useState } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  Input,
  Table,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import ReactPaginate from "react-paginate"
import axios from "axios"

const Payment = () => {
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
        "http://103.186.185.77:5021/api/v1/admin/voucher/getallcustpays",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.BookingResult)
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
        "http://103.186.185.77:5021/api/v1/admin/voucher/getallcustpays",
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.BookingResult)
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Payments" />
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white"></CardHeader>

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
                            <th>Booking Id</th>
                            <th>Customer Name</th>
                            <th>Car</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>No.of Days</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lists.map((data, key) => (
                            <tr key={key}>
                              <th>{(pageNumber - 1) * 5 + key + 6}</th>
                              <td>{data.booking_id}</td>
                              <td>{data.customerName}</td>
                              <td>{data.carModelName}</td>
                              <td>
                                {data.pickupDate}
                                <br></br>
                                <br></br>
                                Time: {data.pickupTime}
                              </td>
                              <td>
                                {data.returnDate}
                                <br></br>
                                <br></br>
                                Time: {data.returnTime}
                              </td>

                              <td>{data.noOfBookingDays}</td>
                              {data.totalprice == "undefined" ? (
                                <td>0</td>
                              ) : (
                                <td>{data.totalprice}</td>
                              )}
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
  )
}

export default Payment
