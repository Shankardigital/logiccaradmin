import React, { useEffect, useState } from "react"
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
  Table, Modal, Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import ReactPaginate from "react-paginate"
import { URL } from "../../Apiurl"
import axios from "axios"
import classnames from "classnames"
import { CSVLink } from "react-csv"
import { Link } from "react-router-dom"
import jsPDF from "jspdf"
import "jspdf-autotable"
import { ToastContainer, toast } from "react-toastify"

function Accepeted() {
  const [coup, setcoup] = useState([])
  useEffect(() => {
    getBookingReports()
  }, [])

  const [userInCsv, setuserInCsv] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  console.log(datas)

  const [form, setform] = useState([])

  const getBookingReports = () => {

   
    var token = datas
    const dataArray = new FormData()
    dataArray.append("pickupDate", "")
    dataArray.append("returnDate", "")
    dataArray.append("branchId", localStorage.getItem("ids"))
    dataArray.append("searchQueryParams", "")

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/immediatebookingreport",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        console.log(res.data)
        setcoup(res.data.bookingResult)
        setuserInCsv(res.data.bookingResult)
      })
  }
  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = coup.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(coup.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const [filter, setfilter] = useState(false)

  const [filters, setfilters] = useState({
    status: "All",
    fromDate: "",
    toDate: "",
  })

  const getfilter = e => {
    e.preventDefault()
    getAllbookings123()
  }
  const getAllbookings123 = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("pickupDate", filters.fromDate)
    dataArray.append("returnDate", filters.toDate)
    dataArray.append("branchId", localStorage.getItem("ids"))
    dataArray.append("searchQueryParams", "")

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/immediatebookingreport",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcoup(res.data.bookingResult)
        hidefilter()
        setfilters("")
        // setuserInCsv(res.data.ExcelData)
      })
  }

  const hidefield = () => setaddbooking(false)
  const hideeditfield = () => seteditbooking(false)
  const hidefilter = () => setfilter(false)

  const handleChangeflt = e => {
    let myUser = { ...filters }
    myUser[e.target.name] = e.target.value
    setfilters(myUser)
  }

  const csvReport = {
    filename: "Immediate Booking Report",
    data: userInCsv,
  }

  const exportPDF = () => {
    const unit = "pt"
    const size = "A2" // Use A1, A2, A3 or A4
    const orientation = "portrait" // portrait or landscape

    const marginLeft = 40
    const doc = new jsPDF(orientation, unit, size)

    doc.setFontSize(15)

    const headers = [
      [
        "SNO",
        "Date",
        "BookingId",
        "CustomerName",
        "Phone",
        "Email",
        "CarModelName",
        "TimeSlot",
        "FromDate",
        "ToDate",
        "Status",
        "Totalprice",
      ],
    ]

    const data = coup.map((elt, i) => [
      i + 1,
      elt.date,
      elt.booking_id,
      elt.customerName,
      elt.custphone,
      elt.custemail,
      elt.carModelName,
      elt.noOfBookingDays,
      elt.pickupDate,
      elt.returnDate,
      elt.status,
      elt.totalprice,
    ])
    let content = {
      startY: 50,
      head: headers,
      body: data,
    }
    doc.autoTable(content)
    doc.save("report.pdf")
  }


  const [search, setsearch] = useState([])

  const searchAll = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)
    var token = datas
    const dataArray = new FormData()
    dataArray.append("pickupDate", "")
    dataArray.append("returnDate", "")
    dataArray.append("branchId", localStorage.getItem("ids"))
    dataArray.append("searchQueryParams", e.target.value)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/immediatebookingreport",
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcoup(res.data.bookingResult)
      })
  }

  const [activeTab1, setactiveTab1] = useState("1")
  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab)
    }
  }

  return (
    <div>
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Logic Cars Admin"
              breadcrumbItem="Immediate Booking Report"
            />

            <div className="mt-2 mb-3">

              <Row className="mt-2">
              <Col md={4}></Col>
                <Col md={8}>

                  <Nav pills className="navtab-bg nav-justified">
                    <Link to="/ImmidiateBookingreport">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "1",
                          })}
                          onClick={() => {
                            toggle1("1")
                          }}
                        >
                          Immediate
                        </NavLink>
                      </NavItem>
                    </Link>

                    <Link to="/CarAssignedReport">

                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "2",
                          })}
                          onClick={() => {
                            toggle1("2")
                          }}
                        >
                          Car Assigned
                        </NavLink>
                      </NavItem>
                    </Link>

                    <Link to="/OnthewayReport">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "3",
                          })}
                          onClick={() => {
                            toggle1("3")
                          }}
                        >
                          On The Way
                        </NavLink>
                      </NavItem>
                    </Link>

                    <Link to="/RentalStartedReport">

                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "4",
                          })}
                          onClick={() => {
                            toggle1("4")
                          }}
                        >
                          Rental Started
                        </NavLink>
                      </NavItem>

                    </Link>

                    <Link to="/CollectNowReport">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "5",
                          })}
                          onClick={() => {
                            toggle1("5")
                          }}
                        >
                          Collect Now
                        </NavLink>
                      </NavItem>
                    </Link>



                    <Link to="/FeatureCollectreport">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "6",
                          })}
                          onClick={() => {
                            toggle1("6")
                          }}
                        >
                          Feature Collect
                        </NavLink>
                      </NavItem>
                    </Link>

                    <Link to="/ClosedReport">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "7",
                          })}
                          onClick={() => {
                            toggle1("7")
                          }}
                        >
                          Closed
                        </NavLink>
                      </NavItem>
                    </Link>

                    <Link to="/CancelledReport">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab1 === "8",
                          })}
                          onClick={() => {
                            toggle1("8")
                          }}
                        >
                          Cancelled
                        </NavLink>
                      </NavItem>
                    </Link>


                    

                    

                   



                  </Nav>
                </Col>

              </Row>
            </div>




            {filter ? (
              <>
                <Card>
                  <CardBody>
                    <Form
                      onSubmit={e => {
                        getfilter(e)
                      }}
                    >
                      <Row>
                        <Col lg="3">
                          <div className="mb-3">
                            <Label for="basicpill-declaration-input10">
                              From Date <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="date"
                              required
                              className="form-control"
                              id="basicpill-Declaration-input10"
                              onChange={e => {
                                handleChangeflt(e)
                              }}
                              name="fromDate"
                              value={filters.fromDate}
                            />
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="mb-3">
                            <Label for="basicpill-declaration-input10">
                              To Date <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="date"
                              required
                              className="form-control"
                              id="basicpill-Declaration-input10"
                              onChange={e => {
                                handleChangeflt(e)
                              }}
                              name="toDate"
                              value={filters.toDate}
                            />
                          </div>
                        </Col>

                        <Col lg="3">
                          <div className="mt-4">
                            <Button
                              type="submit"
                              className="m-1"
                              color="primary"
                            >
                              <i className="fas fa-check-circle"></i> search
                            </Button>
                            <Button
                              onClick={hidefilter}
                              className="m-1"
                              color="danger"
                            >
                              <i className="fas fa-times-circle"></i> Cancel
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </>
            ) : (
              ""
            )}

            <Card>
              <CardHeader className="bg-white"></CardHeader>



              <CardBody>
                <div>
                  <div className="table-responsive">
                    <div className="col-sm-12">
                      <div style={{ float: "right" }}>
                        <Row>

                          <Col>
                            <div style={{ float: "right" }}>
                              <CSVLink {...csvReport}>
                                <button
                                  className="btn btn-success me-2"
                                  type="submit"
                                >
                                  <i className="fas fa-file-excel"></i> Excel
                                </button>
                              </CSVLink>
                              <Button
                                type="button"
                                className="btn btn-danger "
                                onClick={exportPDF}
                              >
                                <i className="fas fa-file-pdf"></i> Pdf
                              </Button>

                              <Button
                                className="m-1"
                                onClick={() => {
                                  setfilter(!filter)
                                }}
                                color="primary"
                              >
                                <i className="fas fa-filter"></i> Filter
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div className="col-sm-12 mt-2 mb-5">
                      <div style={{ float: "left" }}>
                        <Input
                          type="search"
                          className="form-control"
                          placeholder="Search.."
                          value={search.search}
                          onChange={searchAll}
                          name="search"
                        />
                      </div>
                    </div>
                    <Table
                      id="empTable"
                      className="table table-bordered mb-3 mt-5"
                    >
                      <thead>
                        <tr>
                          <th>SNO</th>
                          <th>Date</th>
                          <th>BookingId</th>
                          <th>CustomerName</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>CarModel</th>
                          <th>TimeSlot</th>
                          <th>FromDate</th>
                          <th>ToDate</th>
                          <th>Status</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lists.map((data, key) => (
                          <tr key={key}>
                            <td>{(pageNumber - 1) * 5 + key + 6}</td>
                            <td>{data.date}</td>
                            <td>{data.booking_id}</td>
                            <td>{data.customerName}</td>
                            <td>{data.custphone}</td>
                            <td>{data.custemail}</td>
                            <td>{data.carModelName}</td>
                            <td>{data.noOfBookingDays} Days</td>
                            <td>{data.pickupDate}</td>
                            <td>{data.returnDate}</td>
                            <td>{data.status}</td>
                            <td>{data.totalprice}</td>
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
                <ToastContainer />
              </CardBody>
            </Card>
          </Container>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Accepeted
