import React, { useEffect, useState } from "react"
import {
  Button,
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
  Modal,
} from "reactstrap"
import "../../src/common.css"
import classnames from "classnames"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { URL } from "../Apiurl"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Breadcrumbs from "../components/Common/Breadcrumb"

const options = [
  { value: "Saudi", label: "Saudi Arabia" },
  { value: "Oman", label: "Oman" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Belgium", label: "Belgium" },
  { value: "Ireland", label: "Ireland" },
  { value: "Turkey", label: "Turkey" },
]

const Editusers = () => {
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

  const [modal_small, setmodal_small] = useState(false)
  const [modal_small1, setmodal_small1] = useState(false)
  const [modal_small2, setmodal_small2] = useState(false)
  const [modal_small3, setmodal_small3] = useState(false)
  const [modal_small4, setmodal_small4] = useState(false)
  const [modal_small5, setmodal_small5] = useState(false)
  const [modal_small6, setmodal_small6] = useState(false)
  const [modal_small7, setmodal_small7] = useState(false)
  const [modal_small8, setmodal_small8] = useState(false)
  const [modal_small9, setmodal_small9] = useState(false)
  const [modal_small10, setmodal_small10] = useState(false)
  const [modal_small11, setmodal_small11] = useState(false)
  const [modal_small12, setmodal_small12] = useState(false)
  const [modal_small13, setmodal_small13] = useState(false)
  const [modal_small14, setmodal_small14] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }
  function tog_small1() {
    setmodal_small1(!modal_small)
    removeBodyCss()
  }
  function tog_small2() {
    setmodal_small2(!modal_small)
    removeBodyCss()
  }
  function tog_small3() {
    setmodal_small3(!modal_small)
    removeBodyCss()
  }
  function tog_small4() {
    setmodal_small4(!modal_small)
    removeBodyCss()
  }
  function tog_small5() {
    setmodal_small5(!modal_small)
    removeBodyCss()
  }
  function tog_small6() {
    setmodal_small6(!modal_small)
    removeBodyCss()
  }
  function tog_small7() {
    setmodal_small7(!modal_small)
    removeBodyCss()
  }
  function tog_small8() {
    setmodal_small8(!modal_small)
    removeBodyCss()
  }
  function tog_small9() {
    setmodal_small9(!modal_small)
    removeBodyCss()
  }
  function tog_small10() {
    setmodal_small10(!modal_small)
    removeBodyCss()
  }
  function tog_small11() {
    setmodal_small11(!modal_small)
    removeBodyCss()
  }
  function tog_small12() {
    setmodal_small12(!modal_small)
    removeBodyCss()
  }
  function tog_small13() {
    setmodal_small13(!modal_small)
    removeBodyCss()
  }
  function tog_small14() {
    setmodal_small14(!modal_small)
    removeBodyCss()
  }

  const [fieldshow, setfieldshow] = useState()
  const [fieldshow1, setfieldshow1] = useState()
  console.log(fieldshow1)
  const [fieldshow2, setfieldshow2] = useState()
  const [fieldshow3, setfieldshow3] = useState()

  const [form, setform] = useState({
    customerName: "",
    phone: "",
    email: "",
    status: "",
    gender: "",
    dateOfBirth: "",
    occupation: "",
    occupationdetails: "",
    address: "",
    residentStatus: "",
    dlNumber: "",
    countryId: "",
    aadharNumber: "",
    voterIdNumber: "",

    documentType: "",
  })

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
  // const [Files3, setFiles3] = useState("");

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

  const custid = sessionStorage.getItem("dataid")

  const getonecustomer = () => {
    var token = datas
    // const params = {
    //   _id: custid,
    // }

    const dataArray = new FormData()

    dataArray.append("_id", custid)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/customer/getdetailsbyid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.customerResult)
      })
  }

  useEffect(() => {
    getAllcountries()
    getonecustomer()
    getAllbranch()
    getAllCountry()
  }, [])

  const history = useHistory()

  function handlenavigate() {
    history.push("/users-list")
  }

  const editcutomer = () => {
    var token = datas
    const userdoid = custid
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
      .put(
        "http://103.186.185.77:5021/api/v1/admin/customer/editcustomerbyadmin" +
          "/" +
          userdoid,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)

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

  const handleSubmit = e => {
    e.preventDefault()
    editcutomer()
  }

  const clearForm = () => {
    setform({
      customerName: "",
      phone: "",
      email: "",
      status: "",
      gender: "",
      dateOfBirth: "",
      occupation: "",
      occupationdetails: "",
      address: "",
      residentStatus: "",
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Edit Customer" />
          <Row>
            <div>
              <Link to="/users-list">
                <Button style={{ float: "right" }} className="btn-info mb-3">
                  <i className="fas fa-arrow-circle-left"></i> Back
                </Button>
              </Link>
            </div>
            <Form
              onSubmit={e => {
                handleSubmit(e)
              }}
            >
              <Col lg="12">
                <Card>
                  <CardBody>
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
                                    value={form.customerName}
                                    name="customerName"
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                  />
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
                                    value={form.email}
                                    name="email"
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                  />
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
                                    name="dateOfBirth"
                                    value={form.dateOfBirth}
                                    onChange={e => {
                                      handleChange(e)
                                    }}
                                  />
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
                                    </Row>

                                    <Row className="mt-3">
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
                      {/* <div className="actions clearfix">
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
                              onClick={e => {
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
                            <button
                              to="#"
                              className="btn btn-primary"
                              type="submit"
                            >
                              <i className="fas fa-check-circle"></i> Submit
                            </button>
                          </li>
                        </ul>
                      </div> */}
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
                              type="button"
                              onClick={() => {
                                toggleTab(activeTab + 1)
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
                  </CardBody>
                </Card>
              </Col>
            </Form>
          </Row>
        </Container>

        <Modal
          size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
          centered
        >
          <div className="modal-header">
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.profilePic}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small1}
          toggle={() => {
            tog_small1()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small1(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.occupationIdCard}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small2}
          toggle={() => {
            tog_small2()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small2(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.aadharFront}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small3}
          toggle={() => {
            tog_small3()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small3(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.aadharBack}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small4}
          toggle={() => {
            tog_small4()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small4(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.voterIdFront}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small5}
          toggle={() => {
            tog_small5()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small5(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.voterIdBack}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small6}
          toggle={() => {
            tog_small6()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small6(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.passportFront}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small7}
          toggle={() => {
            tog_small7()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small7(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.passportBack}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small8}
          toggle={() => {
            tog_small8()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small8(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.dlFront}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small9}
          toggle={() => {
            tog_small9()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small9(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.dlBack}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small10}
          toggle={() => {
            tog_small10()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small10(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.interPassport}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small11}
          toggle={() => {
            tog_small11()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small11(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.photoIdProof}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small12}
          toggle={() => {
            tog_small12()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small12(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.visaCopy}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small13}
          toggle={() => {
            tog_small13()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small13(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.interDlFront}
            />
          </div>
        </Modal>

        <Modal
          size="sm"
          isOpen={modal_small14}
          toggle={() => {
            tog_small14()
          }}
          centered
        >
          <div className="modal-header">
            <button
              onClick={() => {
                setmodal_small14(false)
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
            <img
              style={{ width: "100%" }}
              src={"http://103.186.185.77:5021/" + form.interDlFront}
            />
          </div>
        </Modal>

        {/* <ToastContainer /> */}
      </div>
    </React.Fragment>
  )
}

export default Editusers

{
  /* <Col lg="12">
<Card>
  <CardBody>
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
              </span>
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
              </span>
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
                    Full Name
                    <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="basicpill-firstname-input1"
                    placeholder="Enter Name"
                   
                    value={form.customerName}
                    name="customerName"
                    onChange={e => {
                      handleChange(e)
                    }}
                  />
                </div>
              </Col>
              <Col md={3}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input3">
                    Mobile No
                    <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="number"
                    className="form-control"
                    id="basicpill-firstname-input3"
                    placeholder="Enter number"
                   
                    value={form.phone}
                    name="phone"
                    onChange={e => {
                      handleChange(e)
                    }}
                  />
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
                   
                    value={form.email}
                    name="email"
                    onChange={e => {
                      handleChange(e)
                    }}
                  />
                </div>
              </Col>
              <Col md={3}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input3">
                    Gender
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
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input3">
                    Date of Birth
                    <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="date"
                    className="form-control"
                    id="basicpill-firstname-input3"
                    placeholder="Enter DOB"
                   
                    name="dateOfBirth"
                    value={form.dateOfBirth}
                    onChange={e => {
                      handleChange(e)
                    }}
                  />
                </div>
              </Col>
              <Col md={3}>
                <div className="mb-3">
                  <Label
                    className="mr-4"
                    for="basicpill-firstname-input1"
                  >
                    Image
                  </Label>
                  <small
                    className="text-danger ml-5"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      tog_small()
                    }}
                  >
                    <i></i>
                    <i className="fas fa-eye text-danger"></i>
                    View
                  </small>
                  <Input
                    type="file"
                    className="form-control"
                    id="basicpill-firstname-input1"
                    placeholder="Enter Image"
                    name="profileImg"
                    value={form.profileImg}
                    onChange={changeHandler}
                  />
                </div>
              </Col>

              <Col md={3}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input3">
                    Occupation
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
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                    <option value="business">
                      Businessman
                    </option>
                  </select>
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
                      College Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input3"
                      placeholder="Enter College"
                      name="occupationdetails"
                      value={form.occupationdetails}
                      onChange={e => {
                        handleChange(e)
                      }}
                    />
                  </div>
                </Col>
              )}
            </Row>

            <Row>
              <Col md={3}>
                <div className="mb-3">
                  <Label
                    className="mr-4"
                    for="basicpill-firstname-input1"
                  >
                    Occupation Id Card
                  </Label>
                  <small
                    className="text-danger ml-5"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      tog_small1()
                    }}
                  >
                    <i></i>
                    <i className="fas fa-eye text-danger"></i>
                    View
                  </small>
                  <Input
                    type="file"
                    className="form-control"
                    id="basicpill-firstname-input1"
                    placeholder="Enter Name"
                    name="occupidImg"
                    value={form.occupidImg}
                    onChange={changeHandler1}
                  />
                </div>
              </Col>
              <Col md={3}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input3">
                    Address
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="basicpill-firstname-input3"
                    placeholder="Enter Address"
                    name="address"
                    value={form.address}
                    onChange={e => {
                      handleChange(e)
                    }}
                  />
                </div>
              </Col>

              <Col md={3}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input3">
                    Status
                    <span className="text-danger">*</span>
                  </Label>

                  <select
                   
                    name="status"
                    value={form.status}
                    onChange={e => {
                      handleChange(e)
                    }}
                    className="form-select"
                  >
                    <option value="true">Active</option>
                    <option value="false">Block</option>
                  </select>
                </div>
              </Col>

              <Col md={3}>
                <div className="mb-3">
                  <Label for="basicpill-firstname-input3">
                    Residents Type
                    <span className="text-danger">*</span>
                  </Label>
                  <select
                    name="residentStatus"
                    value={form.residentStatus}
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
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={2}>
            {form.residentStatus == "resident" ? (
              <div>
                <Row className="mt-3">
                  <Col md={3}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Select Aadhar / vote / Passport
                        <span className="text-danger">*</span>
                      </Label>

                      <select
                        name="documentType"
                        value={form.documentType}
                        onChange={e => {
                          handleChange(e)
                        }}
                        className="form-select"
                      >
                        <option value="">Select</option>
                        <option value="aadhar">Aadhar</option>
                        <option value="voterId">Vote Id</option>
                        <option value="passport">
                          Passport
                        </option>
                      </select>
                    </div>
                  </Col>

                  {form.documentType == "voterId" ? (
                    <>
                      <Col md={3}>
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input1">
                            Vote Id
                            <span className="text-danger">
                              *
                            </span>
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="basicpill-firstname-input1"
                            placeholder=" Vote Id"
                           
                            name="voterIdNumber"
                            value={form.voterIdNumber}
                            onChange={e => {
                              handleChange(e)
                            }}
                          />
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input3">
                            Vote ID Front
                          </Label>
                          <small
                            className="text-danger ml-5"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              tog_small4()
                            }}
                          >
                            <i></i>
                            <i className="fas fa-eye text-danger"></i>
                            View
                          </small>

                          <Input
                            type="file"
                            className="form-control"
                            id="basicpill-firstname-input3"
                            name="voterIdFrontImg"
                            value={form.voterIdFrontImg}
                            onChange={changeHandler6}
                          />
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input1">
                            Vote ID Back
                          </Label>
                          <small
                            className="text-danger ml-5"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              tog_small5()
                            }}
                          >
                            <i></i>
                            <i className="fas fa-eye text-danger"></i>
                            View
                          </small>

                          <Input
                            type="file"
                            className="form-control"
                            id="basicpill-firstname-input1"
                            name="voterIdBackImg"
                            value={form.voterIdBackImg}
                            onChange={changeHandler7}
                          />
                        </div>
                      </Col>
                    </>
                  ) : (
                    ""
                  )}

                  {form.documentType == "passport" ? (
                    <>
                      <Col md={3}>
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input1">
                            Passport Front
                          </Label>
                          <small
                            className="text-danger ml-5"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              tog_small6()
                            }}
                          >
                            <i></i>
                            <i className="fas fa-eye text-danger"></i>
                            View
                          </small>
                          <Input
                            type="file"
                            className="form-control"
                            id="basicpill-firstname-input1"
                            name="passportFrontImg"
                            value={form.passportFrontImg}
                            onChange={changeHandler8}
                          />
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input3">
                            Passport Back
                          </Label>
                          <small
                            className="text-danger ml-5"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              tog_small7()
                            }}
                          >
                            <i></i>
                            <i className="fas fa-eye text-danger"></i>
                            View
                          </small>
                          <Input
                            type="file"
                            className="form-control"
                            id="basicpill-firstname-input3"
                            name="passportBackImg"
                            value={form.passportBackImg}
                            onChange={changeHandler9}
                          />
                        </div>
                      </Col>
                    </>
                  ) : (
                    ""
                  )}
                  {form.documentType == "aadhar" ? (
                    <>
                      <Col md={3}>
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input1">
                            Aadhar No.
                            <span className="text-danger">
                              *
                            </span>
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="basicpill-firstname-input1"
                            placeholder="Aadhar No."
                           
                            name="aadharNumber"
                            value={form.aadharNumber}
                            onChange={e => {
                              handleChange(e)
                            }}
                          />
                        </div>
                      </Col>

                      <Col md={3}>
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input1">
                            Aadhar Front
                          </Label>
                          <small
                            className="text-danger ml-5"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              tog_small2()
                            }}
                          >
                            <i></i>
                            <i className="fas fa-eye text-danger"></i>
                            View
                          </small>

                          <Input
                            type="file"
                            className="form-control"
                            id="basicpill-firstname-input1"
                            name="aadharFrontImg"
                            value={form.aadharFrontImg}
                            onChange={changeHandler4}
                          />
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input3">
                            Aadhar Back
                          </Label>
                          <small
                            className="text-danger ml-5"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              tog_small3()
                            }}
                          >
                            <i></i>
                            <i className="fas fa-eye text-danger"></i>
                            View
                          </small>

                          <Input
                            type="file"
                            className="form-control"
                            id="basicpill-firstname-input3"
                            name="aadharBackImg"
                            value={form.aadharBackImg}
                            onChange={changeHandler5}
                          />
                        </div>
                      </Col>
                    </>
                  ) : (
                    ""
                  )}

                  <Col md={3}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        Driving License Number
                        <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="license Number"
                       
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
                      <Label for="basicpill-firstname-input3">
                        Driving License front
                      </Label>
                      <small
                        className="text-danger ml-5"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          tog_small8()
                        }}
                      >
                        <i></i>
                        <i className="fas fa-eye text-danger"></i>
                        View
                      </small>
                      <Input
                        type="file"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        name="dlFrontImg"
                        value={form.dlFrontImg}
                        onChange={changeHandler2}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        Driving License back
                      </Label>
                      <small
                        className="text-danger ml-5"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          tog_small9()
                        }}
                      >
                        <i></i>
                        <i className="fas fa-eye text-danger"></i>
                        View
                      </small>
                      <Input
                        type="file"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        name="dlBackImg"
                        value={form.dlBackImg}
                        onChange={changeHandler3}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            ) : (
              ""
            )}
            {form.residentStatus == "nonResident" ? (
              <div>
                <Row>
                  <Col md={3}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Countries
                        <span className="text-danger">*</span>
                      </Label>

                      <select
                        name="countryId"
                        value={form.countryId}
                        onChange={e => {
                          handleChanges(e)
                        }}
                        className="form-select"
                      >
                        <option value="">Select</option>
                        {count.map((data, key) => {
                          return (
                            <option key={key} value={data._id}>
                              {data.countryName}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        Passport Copy
                      </Label>
                      <small
                        className="text-danger ml-5"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          tog_small10()
                        }}
                      >
                        <i></i>
                        <i className="fas fa-eye text-danger"></i>
                        View
                      </small>
                      <Input
                        type="file"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        name="interPassportImg"
                        value={form.interPassportImg}
                        onChange={changeHandler12}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        Id card front
                      </Label>
                      <small
                        className="text-danger ml-5"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          tog_small11()
                        }}
                      >
                        <i></i>
                        <i className="fas fa-eye text-danger"></i>
                        View
                      </small>
                      <Input
                        type="file"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        name="photoidImg"
                        value={form.photoidImg}
                        onChange={changeHandler10}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        Visit Visa Copy
                      </Label>
                      <small
                        className="text-danger ml-5"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          tog_small12()
                        }}
                      >
                        <i></i>
                        <i className="fas fa-eye text-danger"></i>
                        View
                      </small>
                      <Input
                        type="file"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        name="visaImg"
                        value={form.visaImg}
                        onChange={changeHandler11}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={3}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        International Driving License
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="license Number"
                        name="dlNumber"
                        value={form.dlNumber}
                        onChange={e => {
                          handleChange(e)
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        International Driving License Front
                      </Label>
                      <small
                        className="text-danger ml-5"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          tog_small13()
                        }}
                      >
                        <i></i>
                        <i className="fas fa-eye text-danger"></i>
                        View
                      </small>
                      <Input
                        type="file"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        name="interDlFrontImg"
                        value={form.interDlFrontImg}
                        onChange={changeHandler13}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        International Driving License Back
                      </Label>
                      <small
                        className="text-danger ml-5"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          tog_small14()
                        }}
                      >
                        <i></i>
                        <i className="fas fa-eye text-danger"></i>
                        View
                      </small>
                      <Input
                        type="file"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        name="interDlBackImg"
                        value={form.interDlBackImg}
                        onChange={changeHandler14}
                      />
                    </div>
                  </Col>
                </Row>
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
              <i className="fas fa-arrow-circle-left"></i>
              Previous
            </Link>
          </li>
          <li
            className={activeTab === 2 ? "next logbtn" : "next"}
          >
            <Link
              to="#"
              onClick={() => {
                toggleTab(activeTab + 1)
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
            <button
              to="#"
              className="btn btn-primary"
              type="submit"
            >
              <i className="fas fa-check-circle"></i> Submit
            </button>
          </li>
        </ul>
      </div>
    </div>
  </CardBody>
</Card>
</Col> */
}
