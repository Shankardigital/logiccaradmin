import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"

//SimpleBar
import SimpleBar from "simplebar-react"
// import images
import user1 from "../../assets/images/users/avatar-2.jpg"

const Comments = props => {
  return (
    <React.Fragment>
      <Col xl={5} lg={6}>
        <Card>
          <CardBody>

            <div className="table-responsive">
              <table className="table align-middle table-nowrap mb-0 table-bordered">
                <thead style={{background:"rgb(1,48,74)" ,color:"white"}}>
                  <tr>
                    <th>
                      Car Asked
                    </th>
                    <th>daily</th>
                    <th>monthly</th>
                    <th>weekly</th>
                    <th>Gra…</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Nissan Sunny or Similar</td>
                    <td>7</td>
                    <td>13</td>
                    <td>2</td>
                    <td>2</td>
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

export default Comments
