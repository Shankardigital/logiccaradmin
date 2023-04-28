import React from "react"
import {
  Card,
  CardBody,
  Col,
} from "reactstrap"

const PopularPost = () => {

  return (
    <React.Fragment>
      


      <Col xl={8}>
        <h4 className="card-title " style={{ textAlign: 'center' ,color:"rgb(1,48,74)"}}>Delivery Ratings</h4>
        <Card>
          <CardBody>
            <div className="d-flex">
              <div className="me-2">
              </div>
            </div>
            <div className="table-responsive">
              <table className="table align-middle table-nowrap mb-0 table-bordered">
                <thead>
                  <tr>
                    <th>
                      vendor
                    </th>
                    <th>booking_id</th>
                    <th>delivery_rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Injaz Rent a car</td>
                    <td>32</td>
                    <td>3.7</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td></tr>
                  <tr>
                    <th>Grand Total </th>
                    <th>32</th>
                    <th>3.7</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        <h4 className="card-title" style={{ textAlign: 'center', color:"rgb(1,48,74)"}}>Collection Ratings</h4>
        <Card className="mt-1">
          <CardBody>
            <div className="d-flex">
              <div className="me-2">
              </div>
            </div>
            <div className="table-responsive">
              <table className="table align-middle table-nowrap mb-0 table-bordered">
                <thead>
                  <tr>
                    <th>
                      vendor
                    </th>
                    <th>booking_id</th>
                    <th>delivery_rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Injaz Rent a car</td>
                    <td>32</td>
                    <td>3.7</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td></tr>
                  <tr>
                    <th>Grand Total </th>
                    <th>32</th>
                    <th>3.7</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default PopularPost
