import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  Input,
  Nav,
  NavItem,
  NavLink, TabContent, TabPane, Card, CardBody, Button
} from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import classnames from "classnames"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import ReactPaginate from "react-paginate"

function ServiceRequest() {
  const [activeTab1, setactiveTab1] = useState("1")
  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab)
    }
  }
  const [service, setservice] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

  const history = useHistory()

  const getAllservices = () => {
    var token = datas
    const params = {
      dealerId: data.user.dealerId
    }
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/servicerequest/getall",
        params,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setservice(res.data.serviceRequest)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getAllservices()
  }, [])

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = service.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(service.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const hiddenIds = ["Delayed", "Scheduled", "Resolved"];
    const filteredData = lists.filter((item) => !hiddenIds.includes(item.status));

    const redirectnewpage = (data)=>{
      sessionStorage.setItem("serviceid", data._id)
      history.push("/ViewServiceRequest")
      
    }

  return (
    <React.Fragment>
      {dats.serviceview == true || dats1 == "admin" ? (
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Service Request" />
            <div className="mt-2">
              <Row className="mt-2">
                <Col md={4}>
                  <Input
                    onChange={e => {
                      searchchange(e)
                    }}

                    type="search"
                    className="form-control"
                    placeholder="Search.."
                  /></Col>

                <Col md={3}>
                </Col>
                <Col md={5}>
                  <Nav pills className="navtab-bg nav-justified">
                    <Link to="/ServiceRequest">
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
                          Requested
                        </NavLink>
                      </NavItem>
                    </Link>

                    <Link to="/Schduleds">

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
                          Schduled
                        </NavLink>
                      </NavItem>
                    </Link>

                    <Link to="/Delayed">
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
                          Delayed
                        </NavLink>
                      </NavItem>
                    </Link>

                    <Link to="/Resolved">

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
                          Resolved
                        </NavLink>
                      </NavItem>

                    </Link>

                    <Link to="/AllServicerequest">
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
                          All
                        </NavLink>
                      </NavItem>
                    </Link>
                  </Nav>
                </Col>
              </Row>


              <Row className="mt-4">
                <Col md={12}>
                  {filteredData.map((data, key) => (
                    <Card key={key}>
                      <CardBody>
                        <Row className="mt-2">
                          <Col md={10}>
                            <h5 style={{ color: 'rgb(40,183,163)', fontWeight: 'bold' }}> <i className="bx bxs-calendar-event"></i>Service Request - Priority {data.priority}</h5></Col>
                          <Col md={2}> <div style={{ float: 'right' }}><h6>Status: <span style={{ color: 'red', fontWeight: 'bold' }}>{data.status}</span></h6></div></Col>

                          <div className="mt-3 m-2">
                            <Row >
                              <Col md={3}>Request Number <br></br>
                                <h5 style={{ color: '#2F63BA' }}>{data.requestNumber}</h5> </Col>
                              <Col md={3}>Customer Name<br></br>
                                <h5 style={{ color: 'black' }}>{data.customerName}</h5></Col>
                              <Col md={2}></Col>
                              <Col md={3}>Service Provider Name<br></br>
                                <h5 style={{ color: 'black' }}>Logic Car Rental</h5></Col>
                            </Row>
                          </div>


                          <div className="mt-3 m-2">
                            <Row >
                              <Col md={3}>Booking Number <br></br>
                                <h5 style={{ color: 'black' }}>{data.bookingNo}</h5> </Col>
                              <Col md={3}>Customer Email<br></br>
                                <h5 style={{ color: 'black' }}>{data.eamil}</h5></Col>
                              <Col md={3}></Col>


                              <Col md={3}>
                               <Button onClick={()=>{redirectnewpage(data)}} color="info" style={{ float: 'right', fontWeight: "bold" }} >Service Request Details</Button>
                              </Col>
                            </Row>
                          </div>

                        </Row>
                      </CardBody>

                    </Card>
                  ))}
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

                </Col>

              </Row>


            </div>
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

export default ServiceRequest