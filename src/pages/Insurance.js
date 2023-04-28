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

function Insurance() {
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
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Insurance" />
            <Row>
              <Col md={4}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Add Insurance</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">Branch</Label>
                      {/* <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      /> */}
                      <select name="branch" className="form-select">
                        <option value="">Select</option>
                        <option value="Dubai">Dubai</option>
                        <option value="AbuDubai">AbuDubai</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Insurance Name
                      </Label>
                      {/* <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Vendor "
                        required
                        name="Vendor"
                      /> */}
                       <select name="branch" className="form-select">
                        <option value="">Select</option>
                        <option value="test">Digital raiz	</option>
                        {/* <option value="AbuDubai">AbuDubai</option> */}
                      </select>
                    </div>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">Car Type</Label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <Label for="basicpill-lastname-input2">Car Model</Label>
                    <Select
                      defaultValue={selectedOption2}
                      onChange={setSelectedOption2}
                      options={options2}
                      className="mb-3"
                    />
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">Cars</Label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options2}
                      />
                    </div>
                    <Label for="basicpill-firstname-input1">
                      Insurance Type<span className="text-danger">*</span>
                    </Label>
                    <br></br>
                    {/* <select name="coupon_code_type" className="form-select">
                      <option value="">Select</option>
                      <option value="">Partial Insurance</option>
                      <option value="">full Insurance</option>
                      <option value="">Compressive</option>
                    </select> */}
                    <input
                      type="checkbox"
                      id="topping"
                      name="PartialInsurance"
                      value="PartialInsurance"
                      onClick={() => setform(true)}
                    />{" "}
                    Partial Insurance<br></br>
                    <br></br>
                    <input
                      type="checkbox"
                      id="topping"
                      name="topping"
                      value="fullInsurance"
                      onClick={() => setform1(true)}
                    />{" "}
                    Full Insurance<br></br>
                    <br></br>
                    <input
                      type="checkbox"
                      id="topping"
                      name="topping"
                      value="Compressive"
                      onClick={() => setform2(true)}
                    />{" "}
                    Compressive Insurance<br></br>
                    <br></br>
                    {form ? (
                      <>
                        <Label for="basicpill-firstname-input1">
                          Partial Insurance Amount
                        </Label>
                        <Input
                          type="text"
                          className="form-control mb-3"
                          id="basicpill-namecard-input11"
                          placeholder="Partial Insurance Amount"
                        />
                      </>
                    ) : (
                      ""
                    )}
                    {form1 ? (
                      <>
                        <Label for="basicpill-firstname-input1">
                          Full Insurance Amount
                        </Label>

                        <Input
                          type="text"
                          className="form-control mb-3"
                          id="basicpill-namecard-input11"
                          placeholder="Full Insurance Amount"
                        />
                      </>
                    ) : (
                      ""
                    )}
                    {form2 ? (
                      <>
                        <Label for="basicpill-firstname-input1">
                          {" "}
                          Compressive Insurance Amount
                        </Label>
                        <Input
                          type="text"
                          className="form-control mb-3"
                          id="basicpill-namecard-input11"
                          placeholder="Compressive Insurance Amount"
                        />
                      </>
                    ) : (
                      ""
                    )}
                    <div style={{ float: "right" }}>
                      <Button className="m-1" color="primary" type="submit">
                        Submit <i className="fas fa-check-circle"></i>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col md={8}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Insurance List</CardTitle>
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
                              {/* <th>Branch</th> */}
                              {/* <th>Vendor</th> */}
                              <th>Car Type</th>
                              <th>Car Model</th>
                              <th>Car</th>
                              <th> Insurance </th>
                              {/* <th> Amount</th> */}

                              {/* <th>Coupon Codes</th>
                                                        <th>From Date</th>
                                                        <th>To Date</th> */}
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>LuxurySUV</td>
                              <td>Brera</td>
                              <td>Brera</td>
                              <td>
                                {" "}
                                Partial Insurance- 100 AED<br></br>
                                Full Insurance - 300 AED<br></br>Compressive- 200 AED
                              </td>
                              <td>Active</td>
                              <td>
                                <Button
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
      <Col md={6}></Col>
      <Col md={6}></Col>
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

export default Insurance
