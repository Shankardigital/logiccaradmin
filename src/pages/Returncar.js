import React, { useState } from "react";
import {
  CardBody, CardHeader, Container,
  Row, Col, Card, CardText, CardTitle,
  Form, Label, Input, Button, Table,
  Pagination,
  PaginationItem,
  PaginationLink, Modal, InputGroup
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"
import car1 from "../assets/images/latest/car1.jpg";
import car4 from "../assets/images/latest/car4.jpg";
import car3 from "../assets/images/latest/car3.jpg";
import car5 from "../assets/images/latest/car5.jpg";
import { withRouter, Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

const Returncar = () => {

  let history = useHistory();

  //meta title
  // document.title = "Stater Page | Logic Cars Admin";

  const [modal_small, setmodal_small] = useState(false);

  function tog_small() {
    setmodal_small(!modal_small);
    removeBodyCss();
  }
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
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Customer Return" />

          <Row>
            <div >
              {/* <Link to="/collectnow"> */}
              <Button onClick={history.goBack} style={{ float: "right" }} className="btn-info mb-3"> <i className="fas fa-arrow-circle-left"></i> Back</Button>
              {/* </Link> */}
            </div>
            <Col md={6}>
              <Card>
                <CardHeader className="bg-white">
                  <CardTitle>Customer Details</CardTitle>
                </CardHeader>
                <CardBody >
                  <Row>
                    <Col>
                      <Row>
                        <Col md={5}>
                          <Label>Booking Id</Label><br />
                          <Label>Customr Name</Label><br />
                          <Label>Email</Label><br />
                          <Label>Phone No.</Label><br />
                          <Label>Resident Type</Label><br />
                          <Label>Driving Licence.</Label><br />
                          <Label>Address</Label><br />
                        </Col>
                        <Col md={7}>
                          <Label>: 0000085</Label><br />
                          <Label>: Syed</Label><br />
                          <Label>: Syed@gmail.com</Label><br />
                          <Label>: 8018235569</Label><br />
                          <Label>: Resodent</Label><br />
                          <Label>: DLEAP2041017</Label><br />
                          <Label>: Dubai-Sharjah-Ajman metropolitan area</Label><br />
                        </Col>
                      </Row>
                    </Col>

                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <CardHeader className="bg-white">
                  <CardTitle>Car Details</CardTitle>
                </CardHeader>

                <CardBody >
                  <Row>
                    <Col>
                      <Row>
                        <Col md={5}>
                          <Label>Vehicle No.</Label><br />
                          <Label>Car Type</Label><br />
                          <Label>Car Brand</Label><br />
                          <Label>Model</Label><br />
                          <Label>Car Features</Label><br />
                          <Label>Transmission</Label><br />
                          <Label>No.of Seats.</Label><br />
                        </Col>
                        <Col md={7}>
                          <Label>: TS09FW4641</Label><br />
                          <Label>: Luxury SUV</Label><br />
                          <Label>: Audi</Label><br />
                          <Label>: Brera</Label><br />
                          <Label>: Extra Lagguges Space</Label><br />
                          <Label>: Manual</Label><br />
                          <Label>: 05</Label><br />
                        </Col>
                      </Row>
                    </Col>

                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Card>
              <CardHeader className="bg-white">
                <CardTitle>Car Images </CardTitle>
              </CardHeader>
              <CardBody >
                <Row>
                  <Col md="3">
                    <Label>Add Car Images </Label>
                    <Input
                      type="file"
                      className="form-control"
                      multiple />

                    <Button className="mt-3" style={{ width: "120px", float: "right" }} color="primary">
                      Submit
                    </Button>

                  </Col>.
                  <Col md="8">
                    <img target="_blank" className="p-2" style={{ width: "180px" }} src={car1} />
                    <img className="p-2" style={{ width: "180px" }} src={car3} />
                    <img className="p-2" style={{ width: "180px" }} src={car4} />
                    <img className="p-2" style={{ width: "180px" }} src={car5} />
                  </Col>
                </Row>
              </CardBody>
            </Card>

          </Row>



      

           
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
                        {/* <Row>
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
                          </Row> */}
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
                          {/* <Col md={3}>
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
                            </Col> */}
                        </Row>
                        <div
                          className="mb-4"
                          type="submit"
                          style={{ float: "right" }}
                        >
                          <Button className="m-2" color="success">
                            <i className="fas fa-check-circle"></i> Send
                            amount
                          </Button>

                          <Button
                            onClick={hidefield}
                            style={{ width: "120px" }}
                            className="m-2"
                            color="danger"
                          >
                            <i className="fas fa-times-circle"></i> Cancel
                          </Button>

                        </div>
                      </CardBody>
                    </Form>
                  </Card>
                </Col>
              </Row>
           




        </Container>


        <Modal
          size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small();
          }}
        >
          <div className="modal-header">
            <h5
              className="modal-title mt-0"
              id="mySmallModalLabel"
            >
              Edit Branches
            </h5>
            <button
              onClick={() => {
                setmodal_small(false);
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
              <div className="mb-3">
                <Label for="basicpill-firstname-input1">
                  Name <span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter  Branch Name"
                  required
                />
              </div>
              <div className="mb-3">
                <Label for="basicpill-firstname-input3">
                  City <span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input3"
                  placeholder="Enter City"
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
                <Button onClick={() => {
                  setmodal_small(false);
                }} color="danger" type="button">
                  Cancel <i className="fas fa-times-circle"></i>
                </Button>
                <Button className="m-1" color="primary" type="submit">
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

export default Returncar
