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

function Wallet() {
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

  const [isDisabled1, setIsDisabled1] = useState(true)
  const handleClick1 = () => {
    setIsDisabled1(!isDisabled1)
  }
  const [isDisabled2, setIsDisabled2] = useState(true)
  const handleClick2 = () => {
    setIsDisabled2(!isDisabled2)
  }
  const [isDisabled3, setIsDisabled3] = useState(true)
  const handleClick3 = () => {
    setIsDisabled3(!isDisabled3)
  }
  const [isDisabled4, setIsDisabled4] = useState(true)
  const handleClick4 = () => {
    setIsDisabled4(!isDisabled4)
  }
  const [isDisabled5, setIsDisabled5] = useState(true)
  const handleClick5 = () => {
    setIsDisabled5(!isDisabled5)
  }

  return (
    <div>
      {" "}
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Return Cars" />
            <Row>
              {/* <Col md={3}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add Insurance Vendor</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Company Name
                      </Label>
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
                      <Label for="basicpill-firstname-input1">
                        Expire Date
                      </Label>
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

                    <div style={{ float: "right" }}>
                      <Button className="m-1" color="primary" type="submit">
                        Submit <i className="fas fa-check-circle"></i>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col> */}

              {showResults ? (
                <Row>
                  <Col md={12}>
                    <Card>
                      <CardHeader className="bg-white">
                        <Row>
                          <Col>
                            <CardTitle>Refund Security</CardTitle>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                <Label>
                                  Total Wallet Amount :{" "}
                                  <span className="text-success">10000</span>
                                </Label>
                              </Col>
                              <Col>
                                <Label>
                                  Refund Amount :{" "}
                                  <span className="text-danger">0</span>
                                </Label>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardHeader>
                      <Form>
                        <CardBody>
                          <Row>
                            <Col md={3}>
                              <Label>Customer Name : Sathis</Label>
                            </Col>
                            <Col md={3}>
                              <Label>Email : Sateesh@gmail.com</Label>
                            </Col>
                            <Col md={3}>
                              <Label>Phone No : 8012563329</Label>
                            </Col>
                            <Col md={3}>
                              <Label>Country : Dubai </Label>
                            </Col>
                          </Row>
                          <Row className="mt-4">
                            <Col lg="3">
                              <div className="mb-3 mt-4">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck1"
                                    onClick={handleClick1}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="defaultCheck1"
                                  >
                                    All Are Good
                                  </label>
                                </div>
                              </div>
                            </Col>
                            <Col lg="3">
                              <div className="mb-3">
                                <Label for="basicpill-namecard-input11">
                                  Amount
                                </Label>
                                <InputGroup>
                                  <div className="input-group-text">AED</div>
                                  <input
                                    disabled={isDisabled1}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-namecard-input11"
                                    placeholder="Amount"
                                  />
                                </InputGroup>
                              </div>
                            </Col>
                            <Col lg="3">
                              <div className="mb-3 mt-4">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck2"
                                    onClick={handleClick2}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="defaultCheck2"
                                  >
                                    Traffic Challana
                                  </label>
                                </div>
                              </div>
                            </Col>
                            <Col lg="3">
                              <div className="mb-3">
                                <Label for="basicpill-namecard-input11">
                                  Amount
                                </Label>
                                <InputGroup>
                                  <div className="input-group-text">AED</div>
                                  <input
                                    disabled={isDisabled2}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-namecard-input11"
                                    placeholder="Amount"
                                  />
                                </InputGroup>
                              </div>
                            </Col>
                            {/* <Col lg="3">
                            <div className="mb-3">
                              <Label for="basicpill-namecard-input21">
                                Mileage
                              </Label>
                              <InputGroup>
                                <div className="input-group-text">KM</div>
                                <input
                                  disabled={isDisabled1}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-namecard-input21"
                                  placeholder="Mileage"
                                />
                              </InputGroup>
                            </div>
                          </Col> */}
                          </Row>
                          <Row>
                            <Col lg="3">
                              <div className="mb-3 mt-4">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck3"
                                    onClick={handleClick3}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="defaultCheck3"
                                  >
                                    Car Damaged Charge's
                                  </label>
                                </div>
                              </div>
                            </Col>
                            <Col lg="3">
                              <div className="mb-3">
                                <Label for="basicpill-namecard-input11">
                                  Amount
                                </Label>
                                <InputGroup>
                                  <div className="input-group-text">AED</div>
                                  <input
                                    disabled={isDisabled3}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-namecard-input11"
                                    placeholder="Amount"
                                  />
                                </InputGroup>
                              </div>
                            </Col>
                            <Col lg="3">
                              <div className="mb-3 mt-4">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck4"
                                    onClick={handleClick4}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="defaultCheck4"
                                  >
                                    Others Charges
                                  </label>
                                </div>
                              </div>
                            </Col>
                            <Col lg="3">
                              <div className="mb-3">
                                <Label for="basicpill-namecard-input11">
                                  Amount
                                </Label>
                                <InputGroup>
                                  <div className="input-group-text">AED</div>
                                  <input
                                    disabled={isDisabled4}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-namecard-input11"
                                    placeholder="Amount"
                                  />
                                </InputGroup>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="3">
                              <div className="mb-3 mt-4">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck5"
                                    onClick={handleClick5}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="defaultCheck5"
                                  >
                                    Drunk & Drive Charge's
                                  </label>
                                </div>
                              </div>
                            </Col>
                            <Col lg="3">
                              <div className="mb-3">
                                <Label for="basicpill-namecard-input11">
                                  Amount
                                </Label>
                                <InputGroup>
                                  <div className="input-group-text">AED</div>
                                  <input
                                    disabled={isDisabled5}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-namecard-input11"
                                    placeholder="Amount"
                                  />
                                </InputGroup>
                              </div>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col md={3}>
                              <div className="mb-3">
                                <Label for="basicpill-firstname-input1">
                                  Wallet Amount
                                </Label>
                                <Input
                                  type="text"
                                  disabled
                                  placeholder="Amount"
                                  className="form-control"
                                  id="basicpill-firstname-input1"
                                  required
                                  value="10000"
                                />
                              </div>
                            </Col>
                            <Col md={3}>
                              <div className="mb-3">
                                <Label for="basicpill-firstname-input1">
                                  Total Charges
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input1"
                                  required
                                  placeholder=" Amount"
                                />
                              </div>
                            </Col>
                            <Col md={3}>
                              <div className="mb-3">
                                <Label for="basicpill-firstname-input1">
                                  Refund Amount
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input1"
                                  placeholder=" Amount"
                                  required
                                />
                              </div>
                              </Col>
                              <Col md={3}>
                              <div className="mb-3">
                                <Label for="basicpill-firstname-input1">
                                  Transaction Id
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input1"
                                  placeholder="Enter id"
                                  required
                                />
                              </div>
                            </Col>
                          </Row>
                          <div
                            className="mb-4"
                            type="submit"
                            style={{ float: "right" }}
                          >
                            <Button
                              onClick={hidefield}
                              style={{ width: "120px" }}
                              className="m-2"
                              color="danger"
                            >
                              <i className="fas fa-times-circle"></i> Cancel
                            </Button>
                            <Button className="m-2" color="success">
                              <i className="fas fa-check-circle"></i> Send
                              amount
                            </Button>
                          </div>
                        </CardBody>
                      </Form>
                    </Card>
                  </Col>
                </Row>
              ) : (
                ""
              )}

              <Col md={12}>
                <Card>
                  <CardHeader className="bg-white">
                    {/* <CardTitle>Return Booking</CardTitle> */}
                  </CardHeader>

                  <CardBody>
                    <div>
                      {/* <Row>
                        <Col></Col>
                        <Col>
                          <Row>
                            <Col className="col col-5">
                              <div style={{ float: "right" }}>
                                <Button  onClick={() => { setShowResults(!showResults); }} color="primary">Add Wallet</Button>
                              </div>
                            </Col>
                            <Col className="col col-7">
                              <div style={{ float: "right" }}>
                                <Input
                                  type="search"
                                  className="form-control"
                                  placeholder="Search.."
                                />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row> */}

                      <div className="row ">
                        <div className="col"></div>
                        <div className="col">
                          {/* <Button
                            style={{
                              float: "right",
                              background: "#1A374D",
                              color: "white",
                            }}
                            onClick={() => {
                              setShowResults(!showResults)
                            }}
                          >
                            Add Wallet
                          </Button> */}
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
                              <th>Return Date</th>
                              <th>Customer Name</th>
                              <th>Email</th>
                              <th>Contact </th>
                              <th>Country</th>
                              <th>Amount</th>
                              {/* <th>Car Details</th>
                              <th>Booking Details</th> */}
                              {/* <th>Expire Date</th> */}
                              <th style={{ width: "130px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>13-12-2022</td>
                              <td>Sateesh</td>
                              <td>Sateesh@gmail.com</td>
                              <td>80182366669</td>
                              <td>Dubai</td>
                              <td>10000</td>
                              {/* <td>Hyundai santro 2021</td>
                              <td>07-12-2202</td> */}
                              {/* <td>Active</td> */}
                              <td>
                                {/* <Button
                                  className="mr-2"
                                  style={{ padding: "6px", margin: "3px" }}
                                  color="success"
                                  outline
               

                                  onClick={() => {
                                    setShowResults(!showResults)
                                  }}
                                >
                                  <i className="fas fa-retweet text-dark "></i>
                                </Button> */}

                                <Link to="/wallet-details">

                                  <Button
                                    className="mr-2"
                                    style={{ padding: "6px", margin: "3px" }}
                                    color="warning"
                                    outline
                                    data-toggle="tooltip" data-placement="bottom" title="View"
                               
                                  >
                                    <i className="fas fa-eye text-dark "></i>
                                  </Button>
                                </Link>
                                <Button
                                  style={{ padding: "6px", margin: "3px" }}
                                  color="danger"
                                  outline
                                  data-toggle="tooltip" data-placement="bottom" title="Delete"
                                >
                                  <i className="bx bx-trash text-dark"></i>
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                        <div className="mt-3" style={{ float: "right" }}>
                          {/* <Stack spacing={2}> */}
                          <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            // pageCount={pageCount}
                            // onPageChange={changePage}
                            containerClassName={"pagination"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"disabled"}
                            activeClassName={"active"}
                            // total={lists.length}
                          />
                          {/* </Stack> */}
                        </div>
                      </div>
                    </div>
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

export default Wallet
