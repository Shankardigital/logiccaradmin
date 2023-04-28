import React, { useEffect, useState } from "react"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"
import "../../../src/common.css"
import classnames from "classnames"
import { Link } from "react-router-dom"
import axios from "axios"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import { useHistory } from "react-router-dom"

const Driver = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabVartical, setoggleTabVertical] = useState(1)
  const [showResults, setShowResults] = React.useState(false)
  const [editResults, seteditResults] = React.useState(false)
  const showfield = () => setShowResults(true)
  const hidefield = () => setShowResults(false)

  const [passedSteps, setPassedSteps] = useState([1])
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      if (tab >= 1 && tab <= 5) {
        setactiveTab(tab)
        setPassedSteps(modifiedSteps)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      var modifiedSteps = [...passedStepsVertical, tab]

      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
        setPassedStepsVertical(modifiedSteps)
      }
    }
  }
  const [selectedMulti, setselectedMulti] = useState(null)
  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti)
  }



  const [isDisabled, setIsDisabled] = useState(true)
  const handleClick = () => {
    setIsDisabled(!isDisabled)
  }

  const [isDisabled1, setIsDisabled1] = useState(true)
  const handleClick1 = () => {
    setIsDisabled1(!isDisabled1)
  }
  const [isDisabled2, setIsDisabled2] = useState(false)
  const handleClick2 = () => {
    setIsDisabled2(!isDisabled2)
  }
  const [isDisabled3, setIsDisabled3] = useState(true)
  const handleClick3 = () => {
    setIsDisabled3(!isDisabled3)
  }
  const [isDisabled4, setIsDisabled4] = useState(false)
  const handleClick4 = () => {
    setIsDisabled4(!isDisabled4)
  }

  const [selectedFiles, setselectedFiles] = useState([])
  const [selectedFiles1, setselectedFiles1] = useState([])

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }
  function handleAcceptedFiles1(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles1(files)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  //meta title
  // document.title = "Stater Page | Logic Cars Admin";

  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  const [fieldshow, setfieldshow] = useState()

  const [fieldshow1, setfieldshow1] = useState()

  function handleSelectChange(event) {
    setfieldshow(event.target.value)
  }
  function handleSelectChange1(event) {
    setfieldshow1(event.target.value)
  }


  const [branch, setbranch] = useState([])
  const [form, setform] = useState({
    branchId: "",
    driverName: "",
    phone: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    driverUnitPrice: "",
    residentType: "",
    dlNumber: "",
    password: "",
    dlBackUAEIssueDate: " ",
    dlBackUAEExpDate: "",
    emiratesIdExpDate: "",

  })



  const [errorObject, seterrorObject] = useState({
    branchId: "",
    driverName: "",
    phone: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    residentType: "",
    dlNumber: "",
    password: "",
  });

  const [er, seter] = useState({
    branchId: "",
    driverName: "",
    phone: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    residentType: "",
    dlNumber: "",
    password: "",
  });


  const validateFun = (e) => {
    console.log(form);
    if (form.branchId == '') {
      let error = { ...er };
      error["branchId"] = "Please select branch";
      seterrorObject(error);

    } else
      if (!/^[A-Za-z][A-Za-z0-9_]{4,29}$$/i.test(form.driverName)) {
        let error = { ...er };
        error["driverName"] = "Please Enter Full Name";
        seterrorObject(error);
      } else if (!/^\+?[0-9]\d{1,20}$/i.test(form.phone)) {
        let error = { ...er };
        error["phone"] = "Please Enter Number";
        seterrorObject(error);
      } else if (form.email == '') {
        let error = { ...er };
        error["email"] = "Please enter  valid email Id";
        seterrorObject(error);
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
        let error = { ...er };
        error["email"] = "Please enter  valid email Id";
        seterrorObject(error);
      } else if (form.gender == '') {
        let error = { ...er };
        error["gender"] = "Please Select Gender";
        seterrorObject(error);
      } else if (form.dateOfBirth == '') {
        let error = { ...er };
        error["dateOfBirth"] = "Please Enter DOB";
        seterrorObject(error);
      } else if (form.password == '') {
        let error = { ...er };
        error["password"] = "Please Enter Password";
        seterrorObject(error);
      } else if (form.address == '') {
        let error = { ...er };
        error["address"] = "Please Enter address";
        seterrorObject(error);
      } else if (form.residentType == '') {
        let error = { ...er };
        error["residentType"] = "Please Select Resident";
        seterrorObject(error);
      } else {
        let error = { ...er };
        seterrorObject(error);
        toggleTab(activeTab + 1);
      }

  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token


  const [Files, setFiles] = useState("")
  const [Files1, setFiles1] = useState("")
  const [Files2, setFiles2] = useState("")
  const [Files3, setFiles3] = useState("")
  const [Files4, setFiles4] = useState("")
  const [Files5, setFiles5] = useState("")
  const [Files6, setFiles6] = useState("")
  const [Files7, setFiles7] = useState("")
  const [Files8, setFiles8] = useState("")
  const [Files9, setFiles9] = useState("")
  const [Files10, setFiles10] = useState("")
  const [Files11, setFiles11] = useState("")
  const [Files12, setFiles12] = useState("")

  const changeHandler = e => {
    setFiles(e.target.files)
  }
  const changeHandler1 = e => {
    setFiles1(e.target.files)
  }
  const changeHandler2 = e => {
    setFiles2(e.target.files)
  }
  const changeHandler3 = e => {
    setFiles3(e.target.files)
  }
  const changeHandler4 = e => {
    setFiles4(e.target.files)
  }
  const changeHandler5 = e => {
    setFiles5(e.target.files)
  }
  const changeHandler6 = e => {
    setFiles6(e.target.files)
  }
  const changeHandler7 = e => {
    setFiles7(e.target.files)
  }
  const changeHandler8 = e => {
    setFiles8(e.target.files)
  }
  const changeHandler9 = e => {
    setFiles9(e.target.files)
  }
  const changeHandler10 = e => {
    setFiles10(e.target.files)
  }
  const changeHandler11 = e => {
    setFiles11(e.target.files)
  }
  const changeHandler12 = e => {
    setFiles12(e.target.files)
  }

  const handlechange = e => {
    const myform = { ...form }
    myform[e.target.name] = e.target.value
    setform(myform)
  }

  const getAllbranch = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/branch/getallactivebranches",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbranch(res.data.profiles)
      })
  }

  useEffect(() => {
    getAllbranch()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    addcust()
  }

  const history = useHistory()

  const addcust = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", form.branchId)
    dataArray.append("driverName", form.driverName)
    dataArray.append("phone", form.phone)
    dataArray.append("email", form.email)
    dataArray.append("gender", form.gender)
    dataArray.append("dateOfBirth", form.dateOfBirth)
    dataArray.append("address", form.address)
    dataArray.append("driverUnitPrice", form.driverUnitPrice)
    dataArray.append("residentType", form.residentType)
    dataArray.append("dlNumber", form.dlNumber)
    dataArray.append("password", form.password)
    dataArray.append("dlBackUAEIssueDate", form.dlBackUAEIssueDate)
    dataArray.append("dlBackUAEExpDate", form.dlBackUAEExpDate)
    dataArray.append("emiratesIdExpDate", form.emiratesIdExpDate)

    for (let i = 0; i < Files.length; i++) {
      dataArray.append("profilePic", Files[i])
    }
    for (let i = 0; i < Files1.length; i++) {
      dataArray.append("passportFront", Files1[i])
    }
    for (let i = 0; i < Files2.length; i++) {
      dataArray.append("passportBack", Files2[i])
    }
    for (let i = 0; i < Files7.length; i++) {
      dataArray.append("passportVisa", Files7[i])
    }
    for (let i = 0; i < Files8.length; i++) {
      dataArray.append("visaCopy", Files8[i])
    }

    for (let i = 0; i < Files3.length; i++) {
      dataArray.append("emiratesIdFront", Files3[i])
    }
    for (let i = 0; i < Files4.length; i++) {
      dataArray.append("emiratesIdBack", Files4[i])
    }
    for (let i = 0; i < Files5.length; i++) {
      dataArray.append("dlfrontUAE", Files5[i])
    }
    for (let i = 0; i < Files6.length; i++) {
      dataArray.append("dlBackUAE", Files6[i])
    }
    for (let i = 0; i < Files9.length; i++) {
      dataArray.append("idCardFront", Files9[i])
    }
    for (let i = 0; i < Files10.length; i++) {
      dataArray.append("idCardBack", Files10[i])
    }
    for (let i = 0; i < Files11.length; i++) {
      dataArray.append("dlFront", Files11[i])
    }
    for (let i = 0; i < Files12.length; i++) {
      dataArray.append("dlBack", Files12[i])
    }
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/driver/driveradminregister",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            history.push("/driver-list")
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Add Driver" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  {/* <h4 className="card-title mb-4">Basic Wizard</h4> */}
                  <Form
                    onSubmit={e => {
                      handleSubmit(e)
                    }}
                  >
                    <div className="wizard clearfix">
                      <div className="steps clearfix">
                        <ul>
                          <NavItem
                            className={classnames({ current: activeTab === 1 })}
                          >
                            <NavLink
                              className={classnames({
                                current: activeTab === 1,
                              })}
                              onClick={() => {
                                setactiveTab(1)
                              }}
                              disabled={!(passedSteps || []).includes(1)}
                            >
                              <span className="number">
                                <i className="fas fa-user-shield"></i>
                              </span>{" "}
                              Driver Details
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 2 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 2,
                              })}
                              onClick={() => {
                                setactiveTab(2)
                              }}
                              disabled={!(passedSteps || []).includes(2)}
                            >
                              <span className="number">
                                <i className="fas fa-file-upload"></i>
                              </span>{" "}
                              Documents
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                      <div className="content clearfix mt-4">
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId={1}>
                            <Row>
                              <Col className="col-12 col-sm-3">
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Branch{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <select
                                    className="form-select "
                                    value={form.branchId}
                                    onChange={e => {
                                      handlechange(e)
                                    }}
                                    name="branchId"
                                  >
                                    <option value="">select</option>
                                    {branch.map((data, key) => {
                                      return (
                                        <option key={key} value={data._id}>
                                          {data.branchName}
                                        </option>
                                      )
                                    })}
                                  </select>
                                  <small style={{ color: "#ff0000" }}>{errorObject.branchId}</small>
                                </div>
                              </Col>
                              <Col className="col-12 col-sm-3">
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Full Name{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    name="driverName"
                                    className="form-control"
                                    id="basicpill-firstname-input1"
                                    placeholder="Enter Name"
                                    required
                                    value={form.driverName}
                                    onChange={e => {
                                      handlechange(e)
                                    }}
                                  />
                                  <small style={{ color: "#ff0000" }}>{errorObject.driverName}</small>
                                </div>
                              </Col>
                              <Col className="col-12 col-sm-3">
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Mobile No{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    name="phone"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter number"
                                    required
                                    value={form.phone}
                                    onChange={e => {
                                      handlechange(e)
                                    }}
                                  />
                                  <small style={{ color: "#ff0000" }}>{errorObject.phone}</small>
                                </div>
                              </Col>
                              <Col className="col-12 col-sm-3">
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Email <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    name="email"
                                    onChange={e => {
                                      handlechange(e)
                                    }}
                                    type="email"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Email"
                                    required
                                    value={form.email}
                                  />
                                  <small style={{ color: "#ff0000" }}>{errorObject.email}</small>
                                </div>
                              </Col>
                              <Col className="col-12 col-sm-3">
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Gender{" "}
                                    <span className="text-danger">*</span>
                                  </Label>

                                  <select
                                    onChange={e => {
                                      handlechange(e)
                                    }}
                                    name="gender"
                                    className="form-select"
                                    value={form.gender}
                                  >
                                    <option value="">select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                  </select>
                                  <small style={{ color: "#ff0000" }}>{errorObject.gender}</small>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Date of Birth{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    name="dateOfBirth"
                                    onChange={e => {
                                      handlechange(e)
                                    }}
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter DOB"
                                    required
                                    value={form.dateOfBirth}
                                  />
                                  <small style={{ color: "#ff0000" }}>{errorObject.dateOfBirth}</small>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Password{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    name="password"
                                    onChange={e => {
                                      handlechange(e)
                                    }}
                                    type="password"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Password"
                                    required
                                    value={form.password}
                                  />
                                  <small style={{ color: "#ff0000" }}>{errorObject.password}</small>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Image
                                  </Label>
                                  <Input
                                    name="profilePic"
                                    value={form.profilePic}
                                    onChange={changeHandler}
                                    type="file"
                                    className="form-control"
                                    id="basicpill-firstname-input1"
                                    placeholder="Enter Image"
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>


                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Address{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    name="address"
                                    onChange={e => {
                                      handlechange(e)
                                    }}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Address"
                                    required
                                    value={form.address}
                                  />
                                  <small style={{ color: "#ff0000" }}>{errorObject.address}</small>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Residents Type{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <select
                                    required
                                    name="residentType"
                                    value={form.residentType}
                                    onChange={e => {
                                      handlechange(e)
                                    }}
                                    className="form-select"
                                  >
                                    <option value="">Select</option>
                                    <option value="resident">Residency</option>
                                    <option value="GccResident">
                                      GCC Residency
                                    </option>
                                    <option value="GccNonResident">
                                      GCC NON-Residency
                                    </option>
                                    <option value="Visitor">Visitors</option>
                                  </select>
                                  <small style={{ color: "#ff0000" }}>{errorObject.residentType}</small>
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId={2}>
                            {form.residentType == "resident" ? (
                              <div>
                                <Row>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        Emirates ID Front
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        onChange={changeHandler3}
                                        name="emiratesIdFront"
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input1">
                                        Emirates ID Back
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        onChange={changeHandler4}
                                        name="emiratesIdBack"
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input1"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input1">
                                        Emirates ID Expiry Date
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="emiratesIdExpDate"
                                        onChange={e => {
                                          handlechange(e)
                                        }}
                                        type="date"
                                        className="form-control"
                                        id="basicpill-firstname-input1"
                                        required
                                        placeholder="Enter  UAE driving  License Number"
                                        value={form.emiratesIdExpDate}
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input1">
                                        UAE Driving License Number
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="dlNumber"
                                        onChange={e => {
                                          handlechange(e)
                                        }}
                                        type="text"
                                        className="form-control"
                                        id="basicpill-firstname-input1"
                                        required
                                        placeholder="Enter  UAE driving  License Number"
                                        value={form.dlNumber}
                                      />
                                    </div>
                                  </Col>
                                </Row>

                                <Row className="mt-3">
                                  
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input1">
                                        UAE Driving License Issued Date
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="dlBackUAEIssueDate"
                                        onChange={e => {
                                          handlechange(e)
                                        }}
                                        type="date"
                                        className="form-control"
                                        id="basicpill-firstname-input1"
                                        required
                                        placeholder="Enter Driving License Issued Date"
                                        value={form.dlBackUAEIssueDate}
                                      />
                                    </div>
                                  </Col>

                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input1">
                                        UAE Driving License Expiry Date
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="dlBackUAEExpDate"
                                        onChange={e => {
                                          handlechange(e)
                                        }}
                                        type="date"
                                        value={form.dlBackUAEExpDate}
                                        className="form-control"
                                        id="basicpill-firstname-input1"
                                        required
                                        placeholder="Enter   Driving License Expiry Date"
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        UAE Driving license front
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="dlfrontUAE"
                                        onChange={changeHandler5}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        UAE Driving license back{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="dlBackUAE"
                                        onChange={changeHandler6}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            ) : (
                              ""
                            )}
                            {form.residentType == "GccResident" ? (
                              <div>
                                <Row>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input1">
                                        Passport Front{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="passportFront"
                                        onChange={changeHandler1}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input1"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        Passport Back{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="passportBack"
                                        onChange={changeHandler2}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>

                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        Passport Emirates ID Front
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="emiratesIdFront"
                                        onChange={changeHandler3}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input1">
                                        Passport Emirates ID Back
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="emiratesIdBack"
                                        onChange={changeHandler4}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input1"
                                        required
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row className="mt-3">
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        UAE driving license front
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        onChange={changeHandler5}
                                        name="dlfrontUAE"
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        UAE driving license back{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="dlBackUAE"
                                        onChange={changeHandler6}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            ) : (
                              ""
                            )}
                            {form.residentType == "GccNonResident" ? (
                              <div>
                                <Row>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input1">
                                        Passport Front{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="passportFront"
                                        onChange={changeHandler1}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input1"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        ID Front
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="idCardFront"
                                        onChange={changeHandler9}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input1">
                                        ID Back
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="idCardBack"
                                        onChange={changeHandler10}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input1"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        Driving license{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="dlFront"
                                        onChange={changeHandler11}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            ) : (
                              ""
                            )}
                            {form.residentType == "Visitor" ? (
                              <div>
                                <Row>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        Passport Copy{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="passportVisa"
                                        onChange={changeHandler7}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        Id card front{" "}
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="idCardFront"
                                        onChange={changeHandler9}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        Visa Copy
                                        <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        name="visaCopy"
                                        onChange={changeHandler8}
                                        type="file"
                                        className="form-control"
                                        id="basicpill-firstname-input3"
                                        required
                                      />
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="mb-3">
                                      <Label for="basicpill-firstname-input3">
                                        License
                                        <span className="text-danger">*</span>
                                      </Label>

                                      <select
                                        name="licenseNonResidents"
                                        value={form.licenseNonResidents}
                                        onChange={e => {
                                          handlechange(e)
                                        }} required
                                        className="form-select"
                                      >
                                        <option value="">Select</option>
                                        <option value="Drivinglicense">
                                          Home License
                                        </option>
                                        <option value="InternationalDrivinglicense">
                                          International Driving License
                                        </option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                {form.licenseNonResidents ==
                                  "Drivinglicense" ? (
                                  <Row className="mt-3">
                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input1">
                                          Home License Front
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          name="dlFront"
                                          onChange={changeHandler11}
                                          type="file"
                                          className="form-control"
                                          id="basicpill-firstname-input1"
                                          required
                                        />
                                      </div>
                                    </Col>
                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                          Home License Back
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          name="dlBack"
                                          onChange={changeHandler12}
                                          type="file"
                                          className="form-control"
                                          id="basicpill-firstname-input3"
                                          required
                                        />
                                      </div>
                                    </Col>

                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input1">
                                          Driving License Issued Date
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          name="dlBackUAEIssueDate"
                                          onChange={e => {
                                            handlechange(e)
                                          }}
                                          type="date"
                                          className="form-control"
                                          id="basicpill-firstname-input1"
                                          required
                                          placeholder="Enter Driving License Issued Date"
                                          value={form.dlBackUAEIssueDate}
                                        />
                                      </div>
                                    </Col>

                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input1">
                                          Driving License Expiry Date
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          name="dlBackUAEExpDate"
                                          onChange={e => {
                                            handlechange(e)
                                          }}
                                          type="date"
                                          value={form.dlBackUAEExpDate}
                                          className="form-control"
                                          id="basicpill-firstname-input1"
                                          required
                                          placeholder="Enter   Driving License Expiry Date"
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                ) : (
                                  ""
                                )}
                                {form.licenseNonResidents ==
                                  "InternationalDrivinglicense" ? (
                                  <Row className="mt-3">
                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                          Driving License Front{" "}
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          name="dlFront"
                                          onChange={changeHandler11}
                                          type="file"
                                          className="form-control"
                                          id="basicpill-firstname-input3"
                                          required
                                        />
                                      </div>
                                    </Col>
                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                          Driving License Back
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          name="dlBack"
                                          onChange={changeHandler12}
                                          type="file"
                                          className="form-control"
                                          id="basicpill-firstname-input3"
                                          required
                                        />
                                      </div>
                                    </Col>
                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input1">
                                          Driving License Issued Date
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          name="dlBackUAEIssueDate"
                                          onChange={e => {
                                            handlechange(e)
                                          }}
                                          type="date"
                                          className="form-control"
                                          id="basicpill-firstname-input1"
                                          required
                                          placeholder="Enter Driving License Issued Date"
                                          value={form.dlBackUAEIssueDate}
                                        />
                                      </div>
                                    </Col>

                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input1">
                                          Driving License Expiry Date
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          name="dlBackUAEExpDate"
                                          onChange={e => {
                                            handlechange(e)
                                          }}
                                          type="date"
                                          value={form.dlBackUAEExpDate}
                                          className="form-control"
                                          id="basicpill-firstname-input1"
                                          required
                                          placeholder="Enter  Driving License Expiry Date"
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                ) : (
                                  ""
                                )}
                              </div>
                            ) : (
                              ""
                            )}
                          </TabPane>
                        </TabContent>
                      </div>
                      <div className="actions clearfix">
                        <ul>
                          <li
                            className={
                              activeTab === 1 ? "previous disabled" : "previous"
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => {
                                toggleTab(activeTab - 1)
                              }}
                              style={{ background: "#d05151" }}
                            >
                              <i className="fas fa-arrow-circle-left"></i>{" "}
                              Previous
                            </Link>
                          </li>
                          <li
                            className={activeTab === 2 ? "next logbtn" : "next"}
                          >
                            <Link
                              to="#"
                              // type="button"
                              onClick={(e) => {
                                // toggleTab(activeTab + 1)
                                validateFun(e)
                              }}
                            >
                              Next <i className="fas fa-arrow-circle-right"></i>
                            </Link>
                          </li>
                          <li
                            className={
                              activeTab < 2 ? "previous logbtn " : "previous"
                            }
                          >
                            <button className="btn btn-primary" type="submit">
                              <i className="fas fa-check-circle"></i> Submit
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Driver
