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

function Vendor() {
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

  return (
    <div>
      {" "}
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Insurance Vendor" />
            <Row>
              <Col md={3}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add Insurance Vendor</CardTitle>
                  </CardHeader>
                  <CardBody>
                    {/* <div className="mb-3">
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
                    </div> */}
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
              </Col>

              <Col md={9}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Insurance Vendor List</CardTitle>
                  </CardHeader>

                  <CardBody>
                    <div>
                      <div className="table-responsive">
                        <div style={{ float: "right" }}>
                          <Input
                            type="search"
                            className="form-control"
                            placeholder="Search.."
                          />
                        </div>
                        <Table className="table table-bordered mb-4 mt-5">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              {/* <th>Company Name</th> */}
                              <th>Insurance Name</th>
                              <th>Email</th>
                              <th>Contact </th>
                              <th>Policy Number</th>
                              <th>Issue Date</th>
                              <th>Expire Date</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              {/* <td>test</td> */}
                              <td>Digital raiz</td>
                              <td>test@gmail.com</td>
                              <td>80182366669</td>
                              <td>Test123</td>
                              <td>07-12-2202</td>
                              <td>07-12-2203</td>

                              <td>Active</td>
                              <td>
                                <Button
                                  className="mr-2"
                                  style={{ padding: "6px", margin: "3px" }}
                                  color="success"
                                  outline
                                  onClick={()=>{tog_small()}}
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

export default Vendor
