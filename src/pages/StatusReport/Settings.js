import React from "react"
import {
  Card,
  CardBody,
  Col,
  Row,
} from "reactstrap"

const Settings = props => {
  return (
    <React.Fragment>
      <Col xl={5}>
        <Card >
          <CardBody>
            <Row>
              <Col xl={6}>
                <div className="table-responsive" >
                  <table className="table align-middle table-nowrap mb-0 table-bordered">
                    <thead>
                      <tr>
                        <th>
                          UAE
                        </th>
                        <th style={{background:"rgb(1,48,74)" ,color:"white"}}>93</th>
                        <th>111.4%</th>

                      </tr>
                    </thead>
                    <tbody style={{height:'230px'}}>
                      <tr>

                      </tr>

                    </tbody>
                  </table>
                </div>
              </Col>


              <Col xl={6}>
                <div className="table-responsive">
                  <table className="table align-middle table-nowrap mb-0 table-bordered" >
                    <thead>
                      <tr>
                        <th>
                          Dubai
                        </th>
                        <th style={{background:"rgb(1,48,74)" ,color:"white"}}>77</th>
                        <th>97.4%</th>

                      </tr>
                    </thead>
                    <tbody style={{height:'230px'}}>
                      <tr>
                        <td>Abu Dhabi</td>
                        <td>14</td>
                        <td>180.0%</td>
                      </tr>
                      <tr>
                        <td>Sharjah</td>
                        <td>2</td>
                        <td>-</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Settings
