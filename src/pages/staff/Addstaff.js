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
  Row,
} from "reactstrap"
import "../../../src/common.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { useHistory } from "react-router-dom"

const Addstaff = () => {
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
  const [form, setform] = useState([])

  const [dep, setdep] = useState([])

  console.log(dep)

  const [deg, setdeg] = useState([])

  console.log(deg)

  const [branch, setbranch] = useState([])
  console.log(branch)

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

  const getAllDesignations = () => {
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/designation/getallactivedesignations",
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setdeg(res.data.designationData)
      })
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  console.log(datas)

  const getAllDepartments = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/dept/getallactivedepartments",
        dataArray,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setdep(res.data.departmentResult)
      })
  }

  useEffect(() => {
    getAllbranch()
    getAllDesignations()
    getAllDepartments()
    getAllCountry()
  }, [])

  const [Files, setFiles] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    addstaff()
  }
  const history = useHistory()
  const addstaff = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", form.branchId)
    dataArray.append("departmentId", form.departmentId)
    dataArray.append("designationId", form.designationId)
    dataArray.append("staffName", form.staffName)
    dataArray.append("phone", form.phone)
    dataArray.append("password", form.password)
    dataArray.append("email", form.email)
    dataArray.append("gender", form.gender)
    dataArray.append("city", form.city)
    dataArray.append("dateOfBirth", form.dateOfBirth)
    dataArray.append("countryId", form.countryId)
    dataArray.append("state", form.state)
    dataArray.append("zipCode", form.zipCode)
    dataArray.append("address", form.address)
    dataArray.append("joinedAt", form.joinedAt)

    for (let i = 0; i < Files.length; i++) {
      dataArray.append("staffImg", Files[i])
    }

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/staff/addstaff",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            clearForm()
            history.push("/staff-list")
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const handlechange = e => {
    const myform = { ...form }
    myform[e.target.name] = e.target.value
    setform(myform)
  }

  const changeHandler = e => {
    setFiles(e.target.files)
  }

  const clearForm = () => {
    setform({
      branchId: "",
      departmentId: "",
      designationId: "",
      staffName: "",
      phone: "",
      password: "",
      email: "",
      gender: "",
      dateOfBirth: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      address: "",
      joinedAt: "",
    })

    setFiles("")
  }

  const [country, setcountry] = useState([])
  const getAllCountry = () => {
    var token = datas
    const dataArray = new FormData()
    // dataArray.append("branchId", localStorage.getItem("ids"))
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
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Add Staff" />
          <Row>
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
                      <div className="content clearfix mt-4">
                        <Row>
                          <Col className="col-12 col-sm-3">
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input1">
                                Branch <span className="text-danger">*</span>
                              </Label>
                              <select
                                className="form-select "
                                value={form.branchId}
                                name="branchId"
                                onChange={e => {
                                  handlechange(e)
                                }}
                                required
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

                          <Col className="col-12 col-sm-3">
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input1">
                                Department Name{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <select
                                className="form-select "
                                value={form.departmentId}
                                name="departmentId"
                                onChange={e => {
                                  handlechange(e)
                                }}
                                required
                              >
                                <option value="">select</option>
                                {dep.map((data, key) => {
                                  return (
                                    <option key={key} value={data._id}>
                                      {data.departmentName}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>
                          </Col>
                          <Col className="col-12 col-sm-3">
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input1">
                                Designation Name{" "}
                                <span required className="text-danger">
                                  *
                                </span>
                              </Label>
                              <select
                                className="form-select "
                                value={form.designationId}
                                name="designationId"
                                onChange={e => {
                                  handlechange(e)
                                }}
                                required
                              >
                                <option value="">select</option>
                                {deg.map((data, key) => {
                                  return (
                                    <option key={key} value={data._id}>
                                      {data.designationName}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>
                          </Col>

                          <Col className="col-12 col-sm-3">
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input1">
                                Full Name <span className="text-danger">*</span>
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="basicpill-firstname-input1"
                                placeholder="Enter Name"
                                required
                                value={form.staffName}
                                name="staffName"
                                onChange={e => {
                                  handlechange(e)
                                }}
                              />
                            </div>
                          </Col>
                          <Col className="col-12 col-sm-3">
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input3">
                                Mobile No <span className="text-danger">*</span>
                              </Label>
                              <Input
                                type="number"
                                className="form-control"
                                id="basicpill-firstname-input3"
                                placeholder="Enter number"
                                required
                                value={form.phone}
                                name="phone"
                                onChange={e => {
                                  handlechange(e)
                                }}
                              />
                            </div>
                          </Col>
                          <Col className="col-12 col-sm-3">
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
                                  handlechange(e)
                                }}
                              />
                            </div>
                          </Col>
                          <Col className="col-12 col-sm-3">
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
                                value={form.password}
                                name="password"
                                onChange={e => {
                                  handlechange(e)
                                }}
                              />
                            </div>
                          </Col>
                          <Col className="col-12 col-sm-3">
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input3">
                                Gender <span className="text-danger">*</span>
                              </Label>
                              <select
                                className="form-select"
                                value={form.gender}
                                name="gender"
                                required
                                onChange={e => {
                                  handlechange(e)
                                }}
                              >
                                <option value="">select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </Col>

                        </Row>
                        <Row>
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
                                value={form.dateOfBirth}
                                name="dateOfBirth"
                                onChange={e => {
                                  handlechange(e)
                                }}
                              />
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input1">
                                Image
                              </Label>
                              <span className="text-danger">*</span>
                              <Input
                                type="file"
                                className="form-control"
                                id="basicpill-firstname-input1"
                                placeholder="Enter Image"
                                class="form-control"
                                name="image"
                                onChange={e => changeHandler(e)}
                                required
                              />
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input3">
                                Country
                              </Label>
                              <span className="text-danger">*</span>

                              <select
                                className="form-select "
                                value={form.countryId}
                                name="countryId"
                                onChange={e => {
                                  handlechange(e)
                                }}
                                required
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
                          <Col md={3}>
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input3">
                                State
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="basicpill-firstname-input3"
                                placeholder="Enter State"
                                value={form.state}
                                name="state"
                                onChange={e => {
                                  handlechange(e)
                                }}
                                required
                              />
                            </div>
                          </Col>

                          <Col md={3}>
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input3">
                                City
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="basicpill-firstname-input3"
                                placeholder="Enter City"
                                required
                                value={form.city}
                                name="city"
                                onChange={e => {
                                  handlechange(e)
                                }}
                              />
                            </div>
                          </Col>

                          <Col md={3}>
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input1">
                                Zip/Postal
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="basicpill-firstname-input1"
                                placeholder="Enter Zip/Postal"
                                value={form.zipCode}
                                name="zipCode"
                                onChange={e => {
                                  handlechange(e)
                                }}
                                required
                              />
                            </div>
                          </Col>

                          <Col md={3}>
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input3">
                                Address <span className="text-danger">*</span>
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="basicpill-firstname-input3"
                                placeholder="Enter Address"
                                required
                                value={form.address}
                                name="address"
                                onChange={e => {
                                  handlechange(e)
                                }}
                              />
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input3">
                                Joined At :
                                <span className="text-danger">*</span>
                              </Label>
                              <Input
                                type="date"
                                className="form-control"
                                id="basicpill-firstname-input3"
                                placeholder="Enter Address"
                                required
                                value={form.joinedAt}
                                name="joinedAt"
                                onChange={e => {
                                  handlechange(e)
                                }}
                              />
                            </div>
                          </Col>
                        </Row>

                        <div className="mt-3" style={{ float: "right" }}>
                          <button
                            type="submit"
                            style={{ width: "120px" }}
                            className="btn btn-success m-1"
                          >
                            Submit <i className="fas fa-check-circle"></i>
                          </button>
                          {/* <Link to="/staff-list">
                            {" "}
                            <button
                              style={{ width: "120px" }}
                              className="btn btn-danger m-1"
                            >
                              Cancel <i className="fas fa-times-circle"></i>{" "}
                            </button>
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Form>
          </Row>
        </Container>

      </div>
    </React.Fragment>
  )
}

export default Addstaff
