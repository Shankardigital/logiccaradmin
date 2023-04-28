import React from "react"
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

function Issuemanagement() {

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

  return (

    <React.Fragment>
      {dats.issuesview == true || dats1 == "admin" ? (
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Issue Management" />
          <Row>
            <Col xl="12">
              <Card>
                <CardBody style={{ height: "540px" }}>
                  <div className="card-header">
                    <Row>

                      <Col md={3}>
                        <input type="search" className="form-control" placeholder="search..." style={{ width: "200px" }}></input>
                      </Col>
                      <Col md={2}>
                        <i className="bx bx-filter-alt" style={{ fontSize: '25px' }}></i>
                      </Col>
                      <Col xl="12" >
                        {/* <div className="border"> 
                      <input type="search" className="form-control" placeholder="search..." style={{ width: "200px" }}></input>
                      </div> */}

                      </Col>
                    </Row> </div>
                  {/* <div>
                    <input type="search" className="form-control" placeholder="search..." style={{ width: "200px" }}></input>
                  </div> */}

                </CardBody>
              </Card>
            </Col>
          </Row>
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

export default Issuemanagement