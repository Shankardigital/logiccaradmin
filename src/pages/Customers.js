import React, { useState } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
} from "reactstrap"
import "../../src/common.css"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"

const Customers = () => {
  //meta title
  // document.title = "Stater Page | Logic Cars Admin";

  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Customers" />

          <Row>
            <Col md={4}>
              <Card>
                <CardHeader className="bg-white">
                  <CardTitle>Add Customers</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Name <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Customers Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        Email <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="emial"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="Enter Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        Phone No <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="number"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="Enter Phone No"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        Password <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="password"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="Enter Password"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input2">
                        Address <span className="text-danger">*</span>
                      </Label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input2"
                        placeholder="Enter  Address"
                        required
                      />
                    </div>
                    <div style={{ float: "right" }}>
                      <Button color="primary" type="submit">
                        Submit <i className="fas fa-check-circle"></i>
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md={8}>
              <Card>
                <CardHeader className="bg-white">
                  <CardTitle>Customers List</CardTitle>
                </CardHeader>
                <div className="container">
                  <Input
                    type="search"
                    style={{ width: "40%", float: "right" }}
                    className="form-control"
                    placeholder="Search.."
                  />
                </div>
                <CardBody>
                  <div>
                    <div className="table-responsive mb-4">
                      <Table className="table table-bordered mb-3">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            {/* <th>Branch</th>
                                                        <th>Department </th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Password</th>
                            <th style={{ width: "200px" }}>Address</th>
                            <th style={{ width: "100px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            {/* <td>Dubai</td>
                                                        <td>Manager</td> */}
                            <td>test</td>
                            <td>test@gmail.com</td>
                            <td>93468465</td>
                            <td>test#123</td>
                            <td>100 42 C St, Al Mizhar - Dubai</td>
                            <td>
                              <Button
                                onClick={() => {
                                  tog_small()
                                }}
                                className="mr-2"
                                style={{ padding: "6px", margin: "3px" }}
                                color="success"
                                outline
                              >
                                <i className="bx bx-edit "></i>
                              </Button>
                              <Button
                                style={{ padding: "6px", margin: "3px" }}
                                color="danger"
                                outline
                              >
                                <i className="bx bx-trash"></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            {/* <td>Abu Dhabi</td>
                                                        <td>Manager</td> */}
                            <td>test</td>
                            <td>test@gmail.com</td>
                            <td>93468465</td>
                            <td>test#123</td>
                            <td>100 42 C St, Al Mizhar - Dubai</td>
                            <td>
                              <Button
                                onClick={() => {
                                  tog_small()
                                }}
                                className="mr-2"
                                style={{ padding: "6px", margin: "3px" }}
                                color="success"
                                outline
                              >
                                <i className="bx bx-edit "></i>
                              </Button>
                              <Button
                                style={{ padding: "6px", margin: "3px" }}
                                color="danger"
                                outline
                              >
                                <i className="bx bx-trash"></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            {/* <td>Abu Dhabi</td>
                                                        <td>Employee</td> */}
                            <td>test</td>
                            <td>test@gmail.com</td>
                            <td>93468465</td>
                            <td>test#123</td>
                            <td>100 42 C St, Al Mizhar - Dubai</td>
                            <td>
                              <Button
                                onClick={() => {
                                  tog_small()
                                }}
                                className="mr-2"
                                style={{ padding: "6px", margin: "3px" }}
                                color="success"
                                outline
                              >
                                <i className="bx bx-edit "></i>
                              </Button>
                              <Button
                                style={{ padding: "6px", margin: "3px" }}
                                color="danger"
                                outline
                              >
                                <i className="bx bx-trash"></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            {/* <td>Abu Dhabi</td>
                                                        <td>Customers</td> */}
                            <td>test</td>
                            <td>test@gmail.com</td>
                            <td>93468465</td>
                            <td>test#123</td>
                            <td>100 42 C St, Al Mizhar - Dubai</td>
                            <td>
                              <Button
                                onClick={() => {
                                  tog_small()
                                }}
                                className="mr-2"
                                style={{ padding: "6px", margin: "3px" }}
                                color="success"
                                outline
                              >
                                <i className="bx bx-edit "></i>
                              </Button>
                              <Button
                                style={{ padding: "6px", margin: "3px" }}
                                color="danger"
                                outline
                              >
                                <i className="bx bx-trash"></i>
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div style={{ float: "right" }}>
                      <Pagination
                        size="sm"
                        aria-label="Page navigation example"
                      >
                        <PaginationItem disabled>
                          <PaginationLink href="#" tabIndex="-1">
                            Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit Customers
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
            <Form>
              <Row>
                <Col>

                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      Name <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Phone No <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      placeholder="Enter Phone No"
                      required
                    />
                  </div>
                </Col>
                <Col>
                  {/* <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                            Department <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                                type="emial"
                                                className="form-control"
                                                id="basicpill-firstname-input3"
                                                placeholder="Enter Email"
                                                required
                                            />
                                        <select className="form-select" required>
                                            <option value="">Select</option>
                                            <option value="Dubai">Manager</option>
                                            <option value="AbuDhabi">Employee</option>
                                            <option value="AbuDhabi">Customers</option>
                                            <option value="AbuDhabi">Customer</option>
                                        </select>
                                    </div> */}
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Email <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="emial"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Password <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="password"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                </Col>
              </Row>
              <div className="mb-3">
                <Label for="basicpill-firstname-input2">
                  Address <span className="text-danger">*</span>
                </Label>
                <textarea
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input2"
                  placeholder="Enter  Address"
                  required
                />
              </div>
              <div style={{ float: "right" }}>
                <Button
                  onClick={() => {
                    setmodal_small(false)
                  }}
                  color="danger"
                  type="button"
                >
                  Cancel <i className="fas fa-times-circle"></i>
                </Button>
                <Button className="m-1" color="primary" type="button">
                  Submit <i className="fas fa-check-circle"></i>
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default Customers
