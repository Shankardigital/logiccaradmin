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
import "../../src/common.css"
import classnames from "classnames"
import { Link } from "react-router-dom"

import { ToastContainer, toast } from "react-toastify"

import { URL } from "../Apiurl"
import axios from "axios"
import { useHistory } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"

const options = [
  { value: "Saudi", label: "Saudi Arabia" },
  { value: "Oman", label: "Oman" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Belgium", label: "Belgium" },
  { value: "Ireland", label: "Ireland" },
  { value: "Turkey", label: "Turkey" },
]

const Addusers = () => {
  const [selectedOption, setSelectedOption] = useState(null)
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

  const optionGroup = [
    {
      label: "Colors",
      options: [
        { label: "Beige", value: "Beige" },
        { label: "Black", value: "Black" },
        { label: "Blue", value: "Blue" },
        { label: "Brown", value: "Brown" },
        { label: "Dark Gray", value: "Dark Gray" },
      ],
    },
  ]
  const optionGroup1 = [
    {
      label: "Features",
      options: [
        { label: "3D Surround Camera", value: "Beige" },
        { label: "Memory Front Seats", value: "Black" },
        { label: "Blind Spot Warning", value: "Blue" },
        { label: "Adaptive Cruise Control", value: "Brown" },
        { label: "Digital HUD", value: "Dark Gray" },
        { label: "Temperature Controlled Seats", value: "Dark" },
      ],
    },
  ]

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
  console.log(fieldshow1)
  const [fieldshow2, setfieldshow2] = useState()
  const [fieldshow3, setfieldshow3] = useState()

  const [form, setform] = useState({
    branchId: "",
    customerName: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    occupation: "",
    occupationdetails: "",
    address: "",
    residentType: "",
    dlNumber: "",
    countryId: "",
    aadharNumber: "",
    voterIdNumber: "",

    documentType: "",
  })

  const [errorObject, seterrorObject] = useState({
    branchId: "",
    customerName: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    occupation: "",
    residentType: "",
    countryId: ""
  })
  const [er, seter] = useState({
    branchId: "",
    customerName: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    occupation: "",
    residentType: "",
    countryId: ""
  })

  const validateFun = e => {
    console.log(form)
    if (form.branchId == "") {
      let error = { ...er }
      error["branchId"] = "Please Select Branch"
      seterrorObject(error)
    }
    else if (form.customerName == "") {
      let error = { ...er }
      error["customerName"] = "Please Enter Full Name"
      seterrorObject(error)
    } else if (form.phone == "") {
      let error = { ...er }
      error["phone"] = "Please Enter Number"
      seterrorObject(error)
    } else if (form.email == "") {
      let error = { ...er }
      error["email"] = "Please enter  valid email Id"
      seterrorObject(error)
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      let error = { ...er }
      error["email"] = "Please enter  valid email Id"
      seterrorObject(error)
    } else if (form.gender == "") {
      let error = { ...er }
      error["gender"] = "Please Select Gender"
      seterrorObject(error)
    } else if (form.dateOfBirth == "") {
      let error = { ...er }
      error["dateOfBirth"] = "Please Enter DOB"
      seterrorObject(error)
    } else if (form.countryId == "") {
      let error = { ...er }
      error["countryId"] = "Please Select country"
      seterrorObject(error)
    } else if (form.occupation == "") {
      let error = { ...er }
      error["occupation"] = "Please Select Occupation"
      seterrorObject(error)
    } else if (form.residentType == "") {
      let error = { ...er }
      error["residentType"] = "Please Select Resident"
      seterrorObject(error)
    }
    else {
      let error = { ...er }
      seterrorObject(error)
      toggleTab(activeTab + 1)
    }
  }

  function handleSelectChange(event) {
    setfieldshow(event.target.value)
  }
  function handleSelectChange1(event) {
    setfieldshow1(event.target.value)
  }
  function handleSelectChange2(event) {
    setfieldshow2(event.target.value)
  }
  function handleSelectChange3(event) {
    setfieldshow3(event.target.value)
  }

  const [count, setcount] = useState([])

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
  const [Files13, setFiles13] = useState("")
  const [Files14, setFiles14] = useState("")

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
  const changeHandler13 = e => {
    setFiles13(e.target.files)
  }
  const changeHandler14 = e => {
    setFiles14(e.target.files)
  }

  const handleChange = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }

  const handleChanges = e => {
    let myUser = { ...form }
    myUser.countryId = e.target.value
    setform(myUser)
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  console.log(datas)

  const getAllcountries = () => {
    var token = datas
    axios
      .post(
        URL.allcountries,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        console.log(res.data)
        setcount(res.data.countriesResult)
      })
  }

  useEffect(() => {
    getAllcountries()
    getAllbranch()
    getAllCountry()
  }, [])

  const history = useHistory()

  function handlenavigate() {
    history.push("/users-list")
  }

  const handleSubmit = e => {
    e.preventDefault()
    addcutomer()
  }

  const addcutomer = () => {
    var token = datas
    const dataArray = new FormData()

    dataArray.append("branchId", form.branchId)
    dataArray.append("customerName", form.customerName)
    dataArray.append("phone", form.phone)
    dataArray.append("email", form.email)
    dataArray.append("gender", form.gender)
    dataArray.append("dateOfBirth", form.dateOfBirth)
    dataArray.append("occupation", form.occupation)
    dataArray.append("occupationdetails", form.occupationdetails)
    dataArray.append("residentType", form.residentType)
    dataArray.append("dlNumber", form.dlNumber)
    dataArray.append("countryId", form.countryId)
    dataArray.append("passportIssueDate", form.passportIssueDate)
    dataArray.append("passportExpDate", form.passportExpDate)
    dataArray.append("emiratesIdExp", form.emiratesIdExp)
    dataArray.append("dlIssueDate", form.dlIssueDate)
    dataArray.append("dlExpiryDate", form.dlExpiryDate)


    for (let i = 0; i < Files.length; i++) {
      dataArray.append("profilePic", Files[i])
    }
    for (let i = 0; i < Files1.length; i++) {
      dataArray.append("occupationIdCard", Files1[i])
    }
    for (let i = 0; i < Files2.length; i++) {
      dataArray.append("residencyVisa", Files2[i])
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
    for (let i = 0; i < Files7.length; i++) {
      dataArray.append("passportCopy", Files7[i])
    }
    for (let i = 0; i < Files8.length; i++) {
      dataArray.append("visaCopy", Files8[i])
    }
    for (let i = 0; i < Files9.length; i++) {
      dataArray.append("dlFront", Files9[i])
    }
    for (let i = 0; i < Files10.length; i++) {
      dataArray.append("dlBack", Files10[i])
    }
    for (let i = 0; i < Files11.length; i++) {
      dataArray.append("interDlFront", Files11[i])
    }
    for (let i = 0; i < Files12.length; i++) {
      dataArray.append("interDlBack", Files12[i])
    }
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/customer/customeradminregister",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            setform("")
            setFiles("")
            clearForm()
            handlenavigate()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const clearForm = () => {
    setform({
      customerName: "",
      phone: "",
      email: "",
      password: "",
      gender: "",
      dateOfBirth: "",
      occupation: "",
      occupationdetails: "",
      address: "",
      residentType: "",
      dlNumber: "",
      countryId: "",
      documentType: "",
      aadharNumber: "",
      voterIdNumber: "",
    })
    setFiles({
      profileImg: "",
    })
  }

  const [branch, setbranch] = useState([])

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

  const [country, setcountry] = useState([])
  const getAllCountry = () => {
    var token = datas

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/country/getallactivecountry",
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcountry(res.data.activecountResult)
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Add User" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Form
                    onSubmit={e => {
                      handleSubmit(e)
                    }}
                  >
                    {/* <h4 className="card-title mb-4">Basic Wizard</h4> */}
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
                                <i className="fas fa-user"></i>
                              </span>{" "}
                              Personal Details
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
                                <i className="fas fa-shield-alt"></i>
                              </span>{" "}
                              Documents
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                      <div className="content clearfix mt-2">
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId={1}>
                            <Row>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Branch{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <select
                                    className="form-select "
                                    value={form.branchId}
                                    name="branchId"
                                    onChange={e => {
                                      handleChange(e)
                                    }}
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
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Full Name{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input1"
                                    placeholder="Enter Name"
                                    required
                                    value={form.customerName}
                                    name="customerName"
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                  />
                                  <small style={{ color: "#ff0000" }}>
                                    {errorObject.customerName}
                                  </small>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Mobile No{" "}
                                    <span className="text-danger">*</span>
                                  </Label>

                                  <div className="input-group">
                                    <input
                                      required
                                      value={form.phone}
                                      name="phone"
                                      onChange={e => {
                                        handleChange(e)
                                      }}
                                      type="number"
                                      className="form-control"
                                      id="inlineFormInputGroup"
                                      placeholder="Phone No."
                                    />
                                  </div>
                                  <small style={{ color: "#ff0000" }}>
                                    {errorObject.phone}
                                  </small>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Email <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Email"
                                    required
                                    value={form.email}
                                    name="email"
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                  />
                                  <small style={{ color: "#ff0000" }}>
                                    {errorObject.email}
                                  </small>
                                </div>
                              </Col>
                            </Row>
                            <Row className="mt-2">
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Gender{" "}
                                    <span className="text-danger">*</span>
                                  </Label>

                                  <select
                                    value={form.gender}
                                    name="gender"
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                    className="form-select"
                                  >
                                    <option value="">Select</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                  </select>
                                  <small style={{ color: "#ff0000" }}>
                                    {errorObject.gender}
                                  </small>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Date of Birth{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter DOB"
                                    required
                                    name="dateOfBirth"
                                    value={form.dateOfBirth}
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                  />
                                  <small style={{ color: "#ff0000" }}>
                                    {errorObject.dateOfBirth}
                                  </small>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Image
                                  </Label>
                                  <Input
                                    type="file"
                                    className="form-control"
                                    id="basicpill-firstname-input1"
                                    placeholder="Enter Image"
                                    name="profileImg"
                                    onChange={changeHandler}
                                  />
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Country
                                  </Label>

                                  <select
                                    className="form-select "
                                    value={form.countryId}
                                    name="countryId"
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                  >
                                    <option value="">select</option>
                                    {country.map((data, key) => {
                                      return (
                                        <option key={key} value={data._id}>
                                          {data.countryName}
                                        </option>
                                      )
                                    })}
                                  </select>
                                  <small style={{ color: "#ff0000" }}>
                                    {errorObject.countryId}
                                  </small>
                                </div>
                              </Col>


                            </Row>

                            <Row className="mt-1">
                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Occupation{" "}
                                    <span className="text-danger">*</span>
                                  </Label>

                                  <select
                                    name="occupation"
                                    value={form.occupation}
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                    className="form-select"
                                  >
                                    <option value="">Select</option>
                                    <option value="student">Student</option>
                                    <option value="employee">Employee</option>
                                    <option value="business">
                                      Businessman
                                    </option>
                                    <option value="teacher">Teacher</option>
                                  </select>
                                  <small style={{ color: "#ff0000" }}>
                                    {errorObject.occupation}
                                  </small>
                                </div>
                              </Col>

                              {form.occupation == "employee" ||
                                form.occupation == "business" ? (
                                <Col md={3}>
                                  <div className="mb-3">
                                    <Label for="basicpill-firstname-input3">
                                      Company Name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input3"
                                      placeholder="Enter Company"
                                      name="occupationdetails"
                                      value={form.occupationdetails}
                                      onChange={e => {
                                        handleChange(e)
                                      }}
                                    />
                                  </div>
                                </Col>
                              ) : (
                                <Col md={3}>
                                  <div className="mb-3">
                                    <Label for="basicpill-firstname-input3">
                                      School / College Name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input3"
                                      placeholder="Enter School / College"
                                      name="occupationdetails"
                                      value={form.occupationdetails}
                                      onChange={e => {
                                        handleChange(e)
                                      }}
                                    />
                                  </div>
                                </Col>
                              )}

                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Occupation Id Card
                                  </Label>
                                  <Input
                                    type="file"
                                    className="form-control"
                                    id="basicpill-firstname-input1"
                                    placeholder="Enter Name"
                                    name="occupidImg"
                                    onChange={changeHandler1}
                                  />
                                </div>
                              </Col>



                              <Col md={3}>
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input3">
                                    Residents Type{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <select
                                    name="residentType"
                                    value={form.residentType}
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                    className="form-select"
                                  >
                                    <option value="">Select</option>
                                    <option value="resident">Residents</option>
                                    <option value="nonResident">
                                      Non-Residents
                                    </option>
                                  </select>
                                  <small style={{ color: "#ff0000" }}>{errorObject.residentType}</small>
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId={2}>
                            {form.residentType == "resident" ? (
                              <>
                                <div>
                                  <Form className="mt-3">
                                    <Row>
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input3">
                                            Upload Passport Passport Copy{" "}
                                            <span className="text-danger">*</span>
                                          </Label>
                                          <Input
                                            type="file"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            name="passportCopy"
                                            onChange={changeHandler7}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input1">
                                            Passport Issued Date
                                            <span className="text-danger">*</span>
                                          </Label>
                                          <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input1"
                                            placeholder="Enter Driving License Issued Date"
                                            name="passportIssueDate"
                                            value={form.passportIssueDate}
                                            onChange={e => {
                                              handleChange(e)
                                            }}
                                          />
                                        </div>
                                      </Col>

                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input1">
                                            Passport Expiry Date
                                            <span className="text-danger">*</span>
                                          </Label>
                                          <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input1"
                                            placeholder="Enter   Driving License Expiry Date"
                                            name="passportExpDate"
                                            value={form.passportExpDate}
                                            onChange={e => {
                                              handleChange(e)
                                            }}
                                          />
                                        </div>
                                      </Col>

                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input3">
                                            Residency Visa
                                          </Label>
                                          <Input
                                            type="file"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            name="residencyVisa"
                                            onChange={changeHandler2}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input3">
                                            Emirates ID Front
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Label>
                                          <Input
                                            type="file"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            name="emiratesIdFront"
                                            onChange={changeHandler3}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input1">
                                            Emirates ID Back
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Label>
                                          <Input
                                            type="file"
                                            className="form-control"
                                            id="basicpill-firstname-input1"
                                            name="emiratesIdBack"
                                            onChange={changeHandler4}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input1">
                                            Emirates ID Expiry Date
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Label>
                                          <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input1"
                                            placeholder="Enter  UAE driving  License Number"
                                            name="emiratesIdExp"
                                            value={form.emiratesIdExp}
                                            onChange={e => {
                                              handleChange(e)
                                            }}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input1">
                                            UAE Driving License Number
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input1"
                                            placeholder="Enter  UAE driving  License Number"
                                            name="dlNumber"
                                            value={form.dlNumber}
                                            onChange={e => {
                                              handleChange(e)
                                            }}
                                          />
                                        </div>
                                      </Col>
                                    </Row>

                                    <Row className="mt-3">
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input1">
                                            UAE Driving License Issued Date
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Label>
                                          <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input1"
                                            placeholder="Enter Driving License Issued Date"
                                            name="dlIssueDate"
                                            value={form.dlIssueDate}
                                            onChange={e => {
                                              handleChange(e)
                                            }}
                                          />
                                        </div>
                                      </Col>

                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input1">
                                            UAE Driving License Expiry Date
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Label>
                                          <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input1"
                                            placeholder="Enter   Driving License Expiry Date"
                                            name="dlExpiryDate"
                                            value={form.dlExpiryDate}
                                            onChange={e => {
                                              handleChange(e)
                                            }}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input3">
                                            UAE Driving license front
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Label>
                                          <Input
                                            type="file"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            name="dlfrontUAE"
                                            onChange={changeHandler5}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input3">
                                            UAE Driving license back{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Label>
                                          <Input
                                            type="file"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            name="dlBackUAE"
                                            onChange={changeHandler6}
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                  </Form>
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                            {form.residentType == "nonResident" ? (
                              <>
                                <div>
                                  <Row>
                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                          Passport Copy{" "}
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          type="file"
                                          className="form-control"
                                          id="basicpill-firstname-input3"
                                          name="passportCopy"
                                          onChange={changeHandler7}
                                        />
                                      </div>
                                    </Col>

                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input1">
                                          Passport Issued Date
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          type="date"
                                          className="form-control"
                                          id="basicpill-firstname-input1"
                                          placeholder="Enter Driving License Issued Date"
                                          name="passportIssueDate"
                                          value={form.passportIssueDate}
                                          onChange={e => {
                                            handleChange(e)
                                          }}
                                        />
                                      </div>
                                    </Col>

                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input1">
                                          Passport Expiry Date
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          type="date"
                                          className="form-control"
                                          id="basicpill-firstname-input1"
                                          placeholder="Enter   Driving License Expiry Date"
                                          name="passportExpDate"
                                          value={form.passportExpDate}
                                          onChange={e => {
                                            handleChange(e)
                                          }}
                                        />
                                      </div>
                                    </Col>
                                    <Col md={3}>
                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                          Visa Copy{" "}
                                        </Label>
                                        <Input
                                          type="file"
                                          className="form-control"
                                          id="basicpill-firstname-input3"
                                          name="visaCopy"
                                          onChange={changeHandler8}
                                        />
                                      </div>
                                    </Col>

                                    <Row>
                                      <Col md={3}>
                                        <div className="mb-3">
                                          <Label for="basicpill-firstname-input3">
                                            License
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Label>

                                          <select
                                            onChange={handleSelectChange1}
                                            className="form-select"
                                          >
                                            <option value="">Select</option>
                                            <option value="home">
                                              Driving License
                                            </option>
                                            <option value="driving">
                                              International Driving License
                                            </option>
                                          </select>
                                        </div>
                                      </Col>

                                      {fieldshow1 == "home" ? (
                                        <>
                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input1">
                                                Driving License Number
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="text"
                                                className="form-control"
                                                id="basicpill-firstname-input1"
                                                placeholder="Enter  driving  License Number"
                                                name="dlNumber"
                                                value={form.dlNumber}
                                                onChange={e => {
                                                  handleChange(e)
                                                }}
                                              />
                                            </div>
                                          </Col>
                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input1">
                                                Driving License Issued Date
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="date"
                                                className="form-control"
                                                id="basicpill-firstname-input1"
                                                placeholder="Enter Driving License Issued Date"
                                                name="dlIssueDate"
                                                value={form.dlIssueDate}
                                                onChange={e => {
                                                  handleChange(e)
                                                }}
                                              />
                                            </div>
                                          </Col>

                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input1">
                                                Driving License Expiry Date
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="date"
                                                className="form-control"
                                                id="basicpill-firstname-input1"
                                                placeholder="Enter   Driving License Expiry Date"
                                                name="dlExpiryDate"
                                                value={form.dlExpiryDate}
                                                onChange={e => {
                                                  handleChange(e)
                                                }}
                                              />
                                            </div>
                                          </Col>
                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input1">
                                                Driving License Front
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="file"
                                                className="form-control"
                                                id="basicpill-firstname-input1"
                                                name="dlFront"
                                                onChange={changeHandler9}
                                              />
                                            </div>
                                          </Col>
                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input3">
                                                Driving License Back
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="file"
                                                className="form-control"
                                                id="basicpill-firstname-input3"
                                                name="dlBack"
                                                onChange={changeHandler10}
                                              />
                                            </div>
                                          </Col>
                                        </>
                                      ) : (
                                        ""
                                      )}
                                      {fieldshow1 == "driving" ? (
                                        <>
                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input1">
                                                Driving License Number
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="text"
                                                className="form-control"
                                                id="basicpill-firstname-input1"
                                                placeholder="Enter driving  License Number"
                                                name="dlNumber"
                                                value={form.dlNumber}
                                                onChange={e => {
                                                  handleChange(e)
                                                }}
                                              />
                                            </div>
                                          </Col>
                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input1">
                                                Driving License Issued Date
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="date"
                                                className="form-control"
                                                id="basicpill-firstname-input1"
                                                placeholder="Enter Driving License Issued Date"
                                                name="dlIssueDate"
                                                value={form.dlIssueDate}
                                                onChange={e => {
                                                  handleChange(e)
                                                }}
                                              />
                                            </div>
                                          </Col>

                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input1">
                                                Driving License Expiry Date
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="date"
                                                className="form-control"
                                                id="basicpill-firstname-input1"
                                                placeholder="Enter   Driving License Expiry Date"
                                                name="dlExpiryDate"
                                                value={form.dlExpiryDate}
                                                onChange={e => {
                                                  handleChange(e)
                                                }}
                                              />
                                            </div>
                                          </Col>
                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input3">
                                                International Driving License
                                                Front{" "}
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="file"
                                                className="form-control"
                                                id="basicpill-firstname-input3"
                                                name="interDlFront"
                                                onChange={changeHandler11}
                                              />
                                            </div>
                                          </Col>
                                          <Col md={3}>
                                            <div className="mb-3">
                                              <Label for="basicpill-firstname-input3">
                                                International Driving License
                                                Back
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </Label>
                                              <Input
                                                type="file"
                                                className="form-control"
                                                id="basicpill-firstname-input3"
                                                name="interDlBack"
                                                onChange={changeHandler12}
                                              />
                                            </div>
                                          </Col>
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </Row>
                                  </Row>
                                </div>
                              </>
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
                    </div>

                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* <ToastContainer /> */}
      </div>
    </React.Fragment>
  )
}

export default Addusers
