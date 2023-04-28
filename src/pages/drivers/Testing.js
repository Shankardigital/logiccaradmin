import React, { useState, useEffect } from "react";

import {
  Container,
  Form,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Button,
} from "reactstrap";

import classnames from "classnames";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const EcommerceCheckout = (props) => {
  const [selectedCountry, setselectedCountry] = useState(null);
  const [selectedState, setselectedState] = useState(null);
  const [activeTab, setactiveTab] = useState(1);
  const [passedSteps, setPassedSteps] = useState([1]);
  const [modal, setModal] = useState(false);
  const [deletemodal, setDeleteModal] = useState(false);
  const [errorObject, seterrorObject] = useState({"contactNumber":"","email":"","firstName":"","lastName":"","permanentAddress":"","presentAddress":'',"refName":"","refPhone":"","remark":""});
  const [errorObject1, seterrorObject1] = useState({"dealAmount":"","dealDate":"","payMode":"","paidAmount":"","numberOfInstallment":"","nextInstallmentDate":""});

  const toggledeletemodal = () => {
    setDeleteModal(!deletemodal);
  };

  const togglemodal = () => {
    setModal(!modal);
  };

  function handleSelectCountry(selectedCountry) {
    setselectedCountry(selectedCountry);
  }

  function handleSelectState(selectedState) {
    setselectedState(selectedState);
  }

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  }

  const [modal_standard, setmodal_standard] = useState(false);
  const [show, setshow] = useState(false);
  const Cancelshow = () => setshow(false);
  const [showpay, setshowpay] = useState(false);
  const Cancelshowpay = () => setshowpay(false);
 
  const [form, setform] = useState([]);

  const handlechanges = (e) => {
    const myform = { ...form };
    myform[e.target.name] = e.target.value;
    setform(myform);
  };
  function tog_standard() {
    setmodal_standard(!modal_standard);
  }

  const modalopen = () => {
    tog_standard();
  };

  let historys = useHistory();

  const data = historys.location.state;

  console.log(data);
  const [forms, setforms] = useState({"contactNumber":"","email":"","firstName":"","lastName":"","permanentAddress":"","presentAddress":'',"refName":"","refPhone":"","remark":"","payMode":"","checkNumber":"","checkValidDate":"",
  "accountName":"","accountNumber":"","dealAmount":"","paidAmount":"","numberOfInstallment":"","nextInstallmentDate":""});
  const [er,seter]=useState({"contactNumber":"","email":"","firstName":"","lastName":"","permanentAddress":"","presentAddress":'',"refName":"","refPhone":"","remark":""});
  const [er1,seter1]=useState({"dealAmount":"","dealDate":"","payMode":"","paidAmount":"","numberOfInstallment":"","nextInstallmentDate":""});
 // const [forms, setforms] = useState([]);
  // console.log(forms);

  const [divss, setdivs] = useState("");

  const handleChanges = (e) => {
    let myUser = { ...forms };
    myUser[e.target.name] = e.target.value;
    setforms(myUser);
    const divs = e.target.value / data.plotSize;
    setdivs(divs);
  };

  const [divsss, setdivss] = useState("");

  // const maxx = []
  // console.log(maxx)

  const handleChangess = (e) => {
    let myUser = { ...forms };
    myUser[e.target.name] = e.target.value;
    setforms(myUser);
    const divs = forms.dealAmount - e.target.value;
    // const maxx = 2*-forms.dealAmount e.target.value 
    // console.log(maxx)
    setdivss(divs);
  };

  const validateFun = (e) => {
    console.log(forms);
   if(forms.firstName=='')
   {
    let error = { ...er };
    error["firstName"] = "Please enter First Name";
    seterrorObject(error);
   // errorObject['firstName']="Please enter First Name";
   // console.log(errorObject );
   }
   else if(!/^[a-zA-Z]+$/.test(forms.firstName))
   {
    let error = { ...er };
    error["firstName"] = "Please enter First Name";
    seterrorObject(error);
 //   errorObject.contactNumber="Please enter Contact Number";
   }
   else if(forms.lastName=='')
   {
    let error = { ...er };
    error["lastName"] = "Please enter Last Name";
    seterrorObject(error);
    console.log(errorObject);
    //errorObject.lastName="Please enter Last Name";
   }
   else if(!/^[a-zA-Z]+$/.test(forms.lastName))
   {
    let error = { ...er };
    error["lastName"] = "Please enter lastName Name";
    seterrorObject(error);
 //   errorObject.contactNumber="Please enter Contact Number";
   }
   else if(forms.contactNumber=='')
   {
    let error = { ...er };
    error["contactNumber"] = "Please enter  Contact Number";
    seterrorObject(error);
 //   errorObject.contactNumber="Please enter Contact Number";
   }
   else if(!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(forms.contactNumber))
   {
    let error = { ...er };
    error["contactNumber"] = "Please enter  valid Contact Number";
    seterrorObject(error);
    //errorObject.email="Please enter email Id";
   }
   else if(forms.email=='')
   {
    let error = { ...er };
    error["email"] = "Please enter  email Id";
    seterrorObject(error);
    //errorObject.email="Please enter email Id";
   }
   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(forms.email))
   {
    let error = { ...er };
    error["email"] = "Please enter  valid email Id";
    seterrorObject(error);
    //errorObject.email="Please enter email Id";
   }
   else if(forms.presentAddress=='')
   {
    let error = { ...er };
    error["presentAddress"] = "Please enter present address";  
    seterrorObject(error);
    //errorObject.presentAddress="Please enter present address";
   }
  //  else if(!/^(?=.*\d).{8,}$/i.test(forms.presentAddress))
  //  {
  //   let error = { ...er };
  //   error["presentAddress"] = "Please enter present address";
  //   seterrorObject(error);
  //   //errorObject.email="Please enter email Id";
  //  }
   else if(forms.permanentAddress=='')
   {
    let error = { ...er };
    error["permanentAddress"] = "Please enter Perment address";
    seterrorObject(error);
    //errorObject.presentAddress="";
   }
  //  else if(!/^(?=.*\d).{8,}$/i.test(forms.permanentAddress))
  //  {
  //   let error = { ...er };
  //   error["permanentAddress"] = "Please enter permanent Address ";
  //   seterrorObject(error);
  //   //errorObject.email="Please enter email Id";
  //  }
   else{
     let error = { ...er };
   // error["email"] = "Please enter  valid email Id";
    seterrorObject(error);
    toggleTab(activeTab + 2);
   }


  };

  

  const handleChange = (e) => {
    let myUser = { ...forms };
    myUser[e.target.name] = e.target.value;
    setforms(myUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory();
  };

  var gets = localStorage.getItem("authUser");
  var data1 = JSON.parse(gets);
  var datas = data1.data;

  let history = useHistory();

  const addCategory = () => {
    var token = datas.token;
    const datass = {
      firstName: forms.firstName,
      lastName: forms.lastName,
      contactNumber: forms.contactNumber,
      email: forms.email,
      presentAddress: forms.presentAddress,
      permanentAddress: forms.permanentAddress,
      refName: forms.refName,
      refPhone: forms.refPhone,
      remark: forms.remark,
      payMode: forms.payMode,
      checkNumber: forms.checkNumber,
      checkValidDate: forms.checkValidDate,
      accountName: forms.accountName,
      accountNumber: forms.accountNumber,
      balanceAmount: divsss,
      amountPerSqYard: divss,
      dealAmount: forms.dealAmount,
      dealDate:forms.dealDate,
      paidAmount: forms.paidAmount,
      numberOfInstallment: forms.numberOfInstallment,
      nextInstallmentDate: forms.nextInstallmentDate,
    };
    axios
      .put(
        "http://103.186.185.77:5015/v1/admin/plotexcel/editplot" +
          "/" +
          data._id,
        datass,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      // .then(
      //   (res) => {
      //     if (res.status == 200) {
      //       toast(res.message);
      //     }
      //   },
      //   (error) => {
      //     if (error.message && error.message.status == 400) {
      //       toast(error.message);
      //     }
      //   }
      // );
      .then((response) => {
        if (response.status == 200) {
          // toast("Succefully Booking Completed");
          // setpopup1("Succefully Booking Completed")
          // history.push( "/plots-view",{state:"Succefully Booking Completed"});

          history.push({
            pathname: "/plots-view",
            state:{message:response.message,isdisplay:"yes"},
          });
        } else {
          // toast("Succefully Booking Completed");
          // setpopup1("Succefully Booking Completed")
          // history.push( "/plots-view",{state:"Succefully Booking Completed"});

          history.push({
            pathname: "/plots-view",
            state:{message:response.message,isdisplay:"yes"},
          });
        }
      })
      .catch((error) => {
        if (!error) {
          toast("Plot not added please check it");
        } else {
          toast("Plot not added please check it");
        }
      });
  };

  const [popup1, setpopup1]=useState([])
  console.log(popup1)

  const successmsg = popup1
  console.log(successmsg)



  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
          <div className="mb-2" >
          <Button  onClick={() => historys.goBack()} style={{float:"right"}}><i className="las la-arrow-circle-left" ></i> Back</Button>
          </div>
            <Col xl={4}>
              <Card>
                <CardHeader>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-0">Plot Details</h5>
                    </div>
                    <div style={{ float: "right" }}></div>
                  </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xl={12}>
                      <div className="row mt-4 mb-3 carpadstyle">
                        <div className="col col-lg-5">
                          <p>
                            <b>Date </b>
                          </p>
                          <p>
                            <b>Phase</b>
                          </p>
                          <p>
                            <b>Plot no. </b>
                          </p>
                          <p>
                            <b>Plot Face </b>
                          </p>
                          <p>
                            <b>Plot Size </b>
                          </p>
                          <p>
                            <b>Area </b>
                          </p>
                          <p>
                            <b>Per Sq Yard </b>
                          </p>
                          <p>
                            <b>Total Amount </b>
                          </p>

                          {/* <p>
                            <b>Stage </b>
                          </p> */}
                          {/* <p>
                            <b>Remarks </b>
                          </p> */}
                        </div>
                        <div className="col">
                          <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span>{data.updatedAt.slice(0, 10)}</span>
                          </p>
                          <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span>{data.phase}</span>
                          </p>
                          <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span>{data.plotNumber}</span>
                          </p>
                          <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span>{data.plotFace}</span>
                          </p>
                          <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span>{data.plotSize}</span>
                          </p>
                          <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span>{data.area}</span>
                          </p>
                          <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span>{data.amountPerSqYard}</span>
                          </p>
                          <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span>{Math.round(data.totalAmount)}</span>
                          </p>

                          {/* <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span>0%</span>
                          </p> */}
                          {/* <p>
                            <b style={{ marginRight: "15px" }}>:</b>
                            <span> {data.remark}</span>
                          </p> */}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl="8">
              <Card>
                <CardBody className="checkout-tab">
                  <Form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="step-arrow-nav mt-n3 mx-n3 mb-3">
                      <Nav
                        className="nav-pills nav-justified custom-nav"
                        role="tablist"
                      >
                        <NavItem
                          style={{ cursor: "pointer" }}
                          role="presentation"
                        >
                          <NavLink
                            className={classnames(
                              {
                                active: activeTab === 1,
                                done: activeTab <= 4 && activeTab >= 0,
                              },
                              "p-3"
                            )}
                            onClick={() => {
                              toggleTab(1);
                            }}
                          >
                            <i className="ri-user-2-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Customer Details
                          </NavLink>
                        </NavItem>

                        <NavItem
                          style={{ cursor: "pointer" }}
                          role="presentation"
                        >
                          <NavLink
                            className={classnames(
                              {
                                active: activeTab === 3,
                                done: activeTab <= 4 && activeTab > 2,
                              },
                              "p-3"
                            )}
                            // onClick={() => {
                            //   toggleTab(3);
                            // }}
                          >
                            <i className="ri-bank-card-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Payment Details
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>

                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1} id="pills-bill-info">
                        <div>
                          <Row className="mt-5">
                            <Col md={3}>
                              <Label className="mb-3">
                                First Name{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Enter First Name"
                                required
                                pattern="[a-zA-Z]{1,}"
                                value={forms.firstName}
                                name="firstName"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                              <span style={{color:"#ff0000"}}>{errorObject.firstName}</span>
                            </Col>
                            <Col md={3}>
                              <Label className="mb-3">
                                Last Name <span className="text-danger">*</span>
                              </Label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Enter Last Name"
                                required
                                pattern="[a-zA-Z]{1,}"
                                value={forms.lastName}
                                name="lastName"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                               <span style={{color:"#ff0000"}}>{errorObject.lastName}</span>
                            </Col>
                            <Col md={3}>
                              <Label className="mb-3">
                                Mobile No <span className="text-danger">*</span>
                              </Label>
                              <input
                                className="form-control"
                                type="text"
                                minLength="0"
                                maxLength="10"
                                pattern="\d{10}"
                                placeholder="Enter Mobile No"
                                required
                                value={forms.contactNumber}
                                name="contactNumber"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                                <span style={{color:"#ff0000"}}>{errorObject.contactNumber}</span>
                            </Col>
                            <Col md={3}>
                              <Label className="mb-3">
                                Email Id <span className="text-danger">*</span>
                              </Label>
                              <input
                                className="form-control"
                                placeholder="Enter Email Id"
                                required
                                type="email"
                                value={forms.email}
                                name="email"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                               <span style={{color:"#ff0000"}}>{errorObject.email}</span>
                            </Col>
                          </Row>

                          <Row className="mt-4">
                            <Col md={3}>
                              <Label className="mb-3">
                                Present Address{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <textarea
                                className="form-control"
                                type="text"
                                placeholder="Enter Present Address"
                                minLength="5"
                                required
                                value={forms.presentAddress}
                                name="presentAddress"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                               <span style={{color:"#ff0000"}}>{errorObject.presentAddress}</span>
                          
                            </Col>
                            <Col md={3}>
                              <Label className="mb-3">
                                Permanent Address{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              {/* <li style={{textDecoration:"none"}}>Minimum 10 charecters</li> */}
                              <textarea
                                className="form-control"
                                type="text"
                                minLength="5"
                                placeholder="Enter Permanent Address"
                                required
                                value={forms.permanentAddress}
                                name="permanentAddress"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                              <span style={{color:"#ff0000"}}>{errorObject.permanentAddress}</span>
                            </Col>
                            <Col md={3}>
                              <Label className="mb-3">Ref Name</Label>
                              <input
                                className="form-control"
                                placeholder="Enter Ref Name"
                                value={forms.refName}
                                name="refName"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col md={3}>
                              <Label className="mb-3">Ref Mobile No</Label>
                              <input
                                className="form-control"
                                type="text"
                                minLength="0"
                                maxLength="10"
                                pattern="\d{10}"
                                placeholder="Enter Ref Mobile No"
                                value={forms.refPhone}
                                name="refPhone"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                            </Col>
                          </Row>

                          <Row className="mt-4">
                            <Col md={6}>
                              <Label className="mb-3">Remarks</Label>
                              <textarea
                                className="form-control"
                                type="text"
                                minLength="10"
                                placeholder="Enter Remarks"
                                value={forms.remark}
                                name="remark"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col md={6}></Col>
                          </Row>

                          <div className="d-flex align-items-start gap-3 mt-3">
                            <button
                              type="button"
                              className="btn btn-primary btn-label right ms-auto nexttab"
                              onClick={(e) => {
                               // toggleTab(activeTab + 2);
                               validateFun(e);
                              }}
                            >
                              <i className="las la-arrow-circle-right label-icon align-middle fs-16 ms-2"></i>
                              Next
                            </button>
                          </div>
                        </div>
                      </TabPane>

                      <TabPane tabId={3}>
                        <div className="mt-5">
                          <Row className="mt-2">
                            <Col md={2}>
                              <Label className="mb-3">
                                Plot Size <span className="text-danger">*</span>
                              </Label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Enter Plot Size"
                                value={data.plotSize}
                                required
                                // onChange={(e) => {
                                //   handleChange(e);
                                // }}
                              />
                            </Col>
                            <Col md={7}>
                              <Row>
                            <Col md={4}>
                              <Label className="mb-3">
                                Per Sq Yard {" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Enter Amount"
                                required
                                value={divss}
                                disabled
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                            </Col>

                            <Col md={4}>
                              <Label className="mb-3">
                                Deal price
                                <span className="text-danger">*</span>
                              </Label>
                              <input
                                className="form-control"
                                type="number"
                                placeholder="Enter Dealing Amount "
                                required
                                name="dealAmount"
                                value={forms.dealAmount}
                                onChange={(e) => {
                                  handleChanges(e);
                                }}
                              />
                            </Col>

                            <Col md={4}>
                                <Label className="mb-3">
                                  Deal date{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <input
                                  className="form-control"
                                  type="date"
                                  placeholder="Enter Ref Mobile No"
                                  required
                                  // min={new Date().toISOString().split('T')[0]}
                                  name="dealDate"
                                  value={forms.dealDate}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                              </Col>
                              </Row>
                            </Col>
                          

                            <Col md={3}>
                              <Label className="mb-3">
                                Payment Mode{" "}
                                <span className="text-danger">*</span>
                              </Label>

                              <select
                                className="form-control form-select"
                                name="payMode"
                                required
                                value={forms.payMode}
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              >
                                <option value="">Select Payment Mode</option>
                                <option value="cash">Cash</option>
                                <option value="cheque">cheque</option>
                              </select>
                            </Col>
                          </Row>

                          <div>
                            {forms.payMode == "cheque" ||
                            forms.payMode == "cheque" ? (
                              <div className="">
                                <Row className="mt-4">
                                  <Col md={3}>
                                    <Label className="mb-3">
                                      Cheque Valid Date{" "}
                                      <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                      className="form-control"
                                      type="date"
                                      min={new Date().toISOString().split('T')[0]}
                                      placeholder="Enter checkValidDate"
                                      required
                                      value={forms.checkValidDate}
                                      name="checkValidDate"
                                      onChange={(e) => {
                                        handleChange(e);
                                      }}
                                    />
                                  </Col>
                                  <Col md={3}>
                                    <Label className="mb-3">
                                      Cheque No{" "}
                                      <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter Cheque No"
                                      required
                                      value={forms.checkNumber}
                                      pattern="^\d{6,18}$"
                                      name="checkNumber"
                                      onChange={(e) => {
                                        handleChange(e);
                                      }}
                                    />
                                  </Col>
                                  <Col md={3}>
                                    <Label className="mb-3">
                                      Account Name{" "}
                                      <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter Account Name"
                                      required
                                      pattern="[a-zA-Z]{1,}"
                                      value={forms.accountName}
                                      name="accountName"
                                      onChange={(e) => {
                                        handleChange(e);
                                      }}
                                    />
                                  </Col>
                                  <Col md={3}>
                                    <Label className="mb-3">
                                      Account No{" "}
                                      <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter Account No"
                                      required
                                      pattern="^\d{11,16}$"
                                      value={forms.accountNumber}
                                      name="accountNumber"
                                      onChange={(e) => {
                                        handleChange(e);
                                      }}
                                    />
                                  </Col>
                                </Row>
                              </div>
                            ) : (
                              ""
                            )}
                            <Row className="mt-4">
                              <Col md={3}>
                                <Label className="mb-3">
                                  Paid Amount
                                  <small className="text-danger">*Pay min 5%</small>
                                  {/* <small className="text-danger"></small> */}
                                </Label>
                                <input
                                  className="form-control"
                                  type="number"
                                  placeholder="Enter Paid Amount"
                                  required
                                  name="paidAmount"
                                  // max={forms.dealAmount }
                                  min={(forms.dealAmount * 5)/100}
                                  value={forms.paidAmount}
                                  onChange={(e) => {
                                    handleChangess(e);
                                  }}
                                />
                              </Col>
                              <Col md={3}>
                                <Label className="mb-3">
                                  Balance Amount{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <input
                                  className="form-control"
                                  type="number"
                                  placeholder="Enter Balance Amount"
                                  required
                                  disabled
                                  name="balanceAmount"
                                  value={divsss}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                              </Col>
                              <Col md={3}>
                                {/* <Label className="mb-3">
                                  No of installment{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <input
                                  className="form-control"
                                  type="number"
                                  placeholder="Enter No of installment"
                                  required
                                  name="numberOfInstallment"
                                  value={forms.numberOfInstallment}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}


                                  <Label className="mb-3">
                                    No of installment{" "}
                                  <span className="text-danger">*</span>
                                </Label>
   */}
                                <Label className="mb-3">
                                  No of installment{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <select
                                  className="form-control form-select"
                                  required
                                  name="numberOfInstallment"
                                  value={forms.numberOfInstallment}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                >
                                  <option value="">Select Installment</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                  <option value="13">13</option>
                                  <option value="14">14</option>
                                  <option value="15">15</option>
                                </select>
                              </Col>
                              <Col md={3}>
                                <Label className="mb-3">
                                  Next installment date{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <input
                                  className="form-control"
                                  type="date"
                                  placeholder="Enter Ref Mobile No"
                                  required
                                  min={new Date().toISOString().split('T')[0]}
                                  name="nextInstallmentDate"
                                  value={forms.nextInstallmentDate}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                              </Col>
                            </Row>
                          </div>
                        </div>

                        <div className="d-flex align-items-start gap-3 mt-5 mb-2">
                          <button
                            type="button"
                            className="btn btn-light btn-label previestab"
                            onClick={() => {
                              toggleTab(activeTab - 2);
                            }}
                          >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary btn-label right ms-auto"
                          >
                            <i className="las la-check-circle label-icon align-middle fs-16 ms-2"></i>
                            Submit
                          </button>
                        </div>
                      </TabPane>
                      <ToastContainer />
                    </TabContent>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceCheckout;