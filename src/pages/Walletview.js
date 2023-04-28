import React, { useEffect, useState } from "react"
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
  InputGroup,
} from "reactstrap"
import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import Select from "react-select"
import { withRouter, Link } from "react-router-dom"

function Walletview() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedOption2, setSelectedOption2] = useState(null)
  const options = [
    { value: "Luxury", label: "Luxury" },
    { value: "LuxurySUV", label: "Luxury SUV" },
    { value: "SUV", label: "SUV" },
    { value: "Sedan", label: "Sedan" },
    { value: "Hatchback", label: "Hatchback" },
    { value: "Crossover", label: "Crossover" },
  ]

  const [form, setform] = useState(false)

  const [form1, setform1] = useState(false)

  const [form2, setform2] = useState(false)

  const options2 = [
    { value: "Giulietta", label: "Giulietta" },
    { value: "Brera", label: "Brera" },
    { value: "Giulietta", label: "Giulietta" },
    { value: "Spider", label: "Spider" },
    { value: "Stelvio", label: "Stelvio" },
  ]

  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  const [showResults, setShowResults] = React.useState(false)
  const [editResults, seteditResults] = React.useState(false)
  const showfield = () => setShowResults(true)
  const hidefield = () => setShowResults(false)

  return (
    <div>
      {" "}
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Wallet Details" />

            <Row>
              <div>
                <Link to="/wallet">
                  <Button
                    className="mb-3"
                    style={{ float: "right" }}
                    color="info"
                  >
                    <i className="far fa-arrow-alt-circle-left"></i> Back
                  </Button>
                </Link>
              </div>
              <Col md={12}>
                <Card>
                  <CardHeader className="bg-white">
                    <Row>
                      <Col>{/* <CardTitle>Refund Security</CardTitle> */}</Col>
                      <Col>
                        <Row>
                          <Col>
                            <Label style={{ float: "right" }}>
                              Total Wallet Amount :{" "}
                              <span className="text-success">10000</span>
                            </Label>
                          </Col>
                          <Col>
                            <Label style={{ float: "right" }}>
                              Refund Amount :{" "}
                              <span className="text-danger">6000</span>
                            </Label>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardHeader>

                  <CardBody>
                    <Row>
                      <Col md={6}>
                        <h5>Cutomer Details</h5>
                        <Row className="mt-5">
                          <Col md={12}>
                            <Row>
                              <Col>
                                <Label>Customer Name </Label><br/>
                                <Label>Email </Label><br/>
                                <Label>Phone No. </Label><br/>
                                <Label>Country </Label><br/>
                              </Col>
                              <Col>
                                <Label> : Sathis</Label><br/>
                                <Label> : Sateesh@gmail.com</Label><br/>
                                <Label> : 80369925423</Label><br/>
                                <Label> : Afghanistan</Label><br/>
                              </Col>
                            </Row>
                          </Col>
                          {/* <Col md={6}>
                          <Row>
                              <Col className="col col-4">
                                
                              </Col>
                              <Col className="col col-8">
                              
                              </Col>
                            </Row>
                          </Col> */}
                        </Row>
                      </Col>

                      <Col md={6}>
                        <h5>Payment Details</h5>
                        <Row className="mt-5">
                          <Col md={6}>
                            <Label>Total Wallet Amount</Label>
                            <br />
                            <Label>Traffic Challana</Label>
                            <br />
                            <Label>Car Damaged Charge's</Label>
                            <br />
                            <Label>Others Charges</Label>
                            <br />
                            <Label>Drunk & Drive Charge's</Label>
                            <br />
                            <Label className="mt-4">Refund Amount</Label>
                            <br />
                          </Col>
                          <Col md={6}>
                            <Label>: 10000</Label>
                            <br />
                            <Label>: 500</Label>
                            <br />
                            <Label>: 2000</Label>
                            <br />
                            <Label>: 1000</Label>
                            <br />
                            <Label>: 500</Label>
                            <br />
                            <hr />
                            <Label>: 6000</Label>
                            <br />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <ToastContainer />

        <Modal
          // size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
          className="mt-5"
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit Insurance Vendor
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
            <Form
              onSubmit={e => {
                handleSubmit1(e)
              }}
            >
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">Company Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Company Name "
                      required
                      name="Vendor"
                    />
                  </div>

                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">Email </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Email Name "
                      required
                      name="Vendor"
                    />
                  </div>

                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      Policy Number
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Policy Number"
                      required
                      name="Vendor"
                    />
                  </div>

                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">Expire Date</Label>
                    <Input
                      type="date"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      required
                      name="Vendor"
                    />
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">Address</Label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Address "
                      required
                      name="Vendor"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">
                      Insurance Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Insurance Name "
                      required
                      name="Vendor"
                    />
                  </div>

                  <div className="mb-3">
                    <Label for="basicpill-lastname-input2">Contact</Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Email Name "
                      required
                      name="Vendor"
                    />
                  </div>

                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">Issue Date</Label>
                    <Input
                      type="date"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      required
                      name="Vendor"
                    />
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">Status</Label>
                    <select className="form-select">
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input1">Remarks</Label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input1"
                      placeholder="Enter Remarks "
                      required
                      name="Vendor"
                    />
                  </div>
                </Col>
              </Row>

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
                {/* <Button className="m-1" color="danger" type="button">
                                    Cancel <i className="fas fa-check-circle"></i>
                                </Button> */}
                <Button className="m-1" color="primary" type="submit">
                  Submit <i className="fas fa-check-circle"></i>
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </React.Fragment>
    </div>
  )
}

export default Walletview
