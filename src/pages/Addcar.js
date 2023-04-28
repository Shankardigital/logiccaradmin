import React, { useEffect, useState } from "react"

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Table,
  InputGroup,
  CardHeader,
  CardTitle,
  CardSubtitle,
} from "reactstrap"
import Select from "react-select"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"

import { URL } from "../Apiurl"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Cars = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

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

  const [fieldshow, setfieldshow] = useState()

  function handleSelectChange(event) {
    setfieldshow(event.target.value)
  }

  const [cars, setcars] = useState([])
  const [spce, setspce] = useState([])
  const [fut, setfut] = useState([])

  const [form, setform] = useState({
    branchId: "",
    carTypeId: "",
    carBrandId: "",
    carModelId: "",
    carMakeYearId: "",
    carColorId: "",
    engineCapacity: "",
    carRegistNumber: "",
    carBootCapacity: "",
    dayPrice: "",
    dayExtraMileage: "",
    dayExtraPrice: "",
    weekPrice: "",
    weekExtraMileage: "",
    weekExtraPrice: "",
    monthOnePrice: "",
    monthOneExtraMileage: "",
    monthOneExtraPrice: "",
    monthTwoPrice: "",
    isDayAvailable: "",
    isWeekAvailable: "",
    isMonthOneAvailable: "",
    isMonthTwoAvailable: "",
    isPartialAvailable: "",
    isFullAvailable: "",
    monthTwoExtraMileage: "",
    monthTwoExtraPrice: "",
    securityDeposite: "",
    excessCalimAmount: "",
    specialNote: "",
    partialDailyInsureAmount: "",
    partialWeeklyInsureAmount: "",
    partialMonthlyInsureAmount: "",
    fullDailyInsureAmount: "",
    fullWeeklyInsureAmount: "",
    fullMonthlyInsureAmount: "",
    carReading: ""
  }
  )
  // {
  //   branchId: "",
  //   carTypeId: "",
  //   carBrandId: "",
  //   carModelId: "",
  //   carColorId: "",
  //   noOfSeats: "",
  //   carFeatureId: "",
  //   carFeatureId: "",
  //   carBootCapacity: "",
  //   carSpecId: "",
  //   engineCapacity: "",
  //   carRegistNumber: "",
  //   dayMileage: "",
  //   dayPrice: "",
  //   dayExtraMileage: "",
  //   dayExtraPrice: "",
  //   weekMileage: "",
  //   weekPrice: "",
  //   weekExtraMileage: "",
  //   weekExtraPrice: "",
  //   monthOneMileage: "",
  //   monthOnePrice: "",
  //   monthOneExtraMileage: "",
  //   monthOneExtraPrice: "",
  //   monthTwoMileage: "",
  //   monthTwoPrice: "",
  //   monthTwoExtraMileage: "",
  //   monthTwoExtraPrice: "",
  //   securityDeposite: "",
  //   excessCalimAmount: "",
  //   specialNote: "",
  //   partialDailyInsureAmount: "",
  //   partialWeeklyInsureAmount: "",
  //   partialMonthlyInsureAmount: "",
  //   fullDailyInsureAmount: "",
  //   fullWeeklyInsureAmount: "",
  //   fullMonthlyInsureAmount: "",
  //   carReading: "",
  // }
  const [form1, setform1] = useState([])
  const [Files, setFiles] = useState("")
  const [Files1, setFiles1] = useState("")

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token


  const changeHandler = e => {
    setFiles(e.target.files)
  }
  const changeHandler1 = e => {
    setFiles1(e.target.files)
  }

  const handleChange = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }

  const [selectedOptions, setSelectedOptions] = useState([])

  function handleSelect(details) {
    setSelectedOptions(details)
    console.log(details)
  }

  const [selectedOptions1, setSelectedOptions1] = useState([])

  function handleSelect1(details) {
    setSelectedOptions1(details)
  }

  const [selectedOptions2, setSelectedOptions2] = useState([])

  function handleSelect2(details) {
    setSelectedOptions2(details)
  }

  const [selectedMulti1, setselectedMulti1] = useState([])

  function handleMulti(data12) {
    setselectedMulti1(data12)
  }

  useEffect(() => {
    getallbranch()

    getallcartype()

    getAllbrands()

    getAllcolors()

    getAllfeatures()

    getAllspecifications()

    getincluded()
  }, [])

  const [versSeat, setversSeat] = useState([])

  //CAR BRANCH
  const [branch, setbranch] = useState([])

  const getallbranch = () => {
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

  //car type
  const [types, settypes] = useState([])

  const getallcartype = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/cartype/getallactivecartypes",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        settypes(res.data.cartypeResult)
      })
  }

  //car brand

  const [brand, setbrand] = useState([])

  const getAllbrands = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/brand/getallcarbrands",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.carBrandResult)
      })
  }

  const Optionchange = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    getAllmodals(e.target.value)
  }

  //car MODEL
  const [model, setmodel] = useState([])

  const getAllmodals = carBrandId => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("carTypeId", form.carTypeId)
    dataArray.append("brandId", carBrandId)
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carmodel/getcarmodelbytypebrand",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setmodel(res.data.modelsResult)
        setversSeat(res.data.modelsResult[0].noOfSeats)
      })
  }

  const handlemodel = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    getAllversion(e.target.value)
  }

  const [version, setversion] = useState([])

  const getAllversion = carModelId => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("brandId", form.carBrandId)
    dataArray.append("modelId", carModelId)
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carmakeyear/getmodeldropdown",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setversion(res.data.madeYeardata)
      })
  }

  //car colors
  const [color, setcolor] = useState([])

  const getAllcolors = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/color/getallcarcolors",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcolor(res.data.colorResult)
      })
  }

  //car specifications
  const [specification, setspecifications] = useState([])

  const getAllspecifications = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carspecs/getallactivecarspecifications",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setspecifications(res.data.activeSpecs)
      })
  }

  const optionGroup2 = specification.map(response => ({
    value: response._id,
    label: response.specName,
  }))

  //car specifications
  const [features, setfeatures] = useState([])

  const getAllfeatures = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carfeature/getallactivefeatures",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setfeatures(res.data.featuresResult)
      })
  }

  const optionGroup1 = features.map(response => ({
    value: response._id,
    label: response.featureName,
  }))


  const [included, setincluded] = useState([])

  const getincluded = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/car/getallwhatsinclude",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setincluded(res.data.includeResult)
      })
  }

  const optionGroup3 = included.map(response => ({
    value: response._id,
    label: response.title,
  }))


  const Handlesubmit = e => {
    e.preventDefault()
    addnewcar()
  }

  const history = useHistory()





  const addnewcar = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", form.branchId)

    dataArray.append("carTypeId", form.carTypeId)

    dataArray.append("carBrandId", form.carBrandId)

    dataArray.append("carModelId", form.carModelId)

    dataArray.append("carMakeYearId", form.carMakeYearId)

    dataArray.append("carColorId", form.carColorId)

    dataArray.append("seatCount", versSeat)

    dataArray.append("engineCapacity", form.engineCapacity)

    dataArray.append("carRegistNumber", form.carRegistNumber)

    dataArray.append("carBootCapacity", form.carBootCapacity)

    // dataArray.append("dayMileage", form.dayMileage)

    dataArray.append("dayPrice", form.dayPrice)

    dataArray.append("dayExtraMileage", form.dayExtraMileage)

    dataArray.append("dayExtraPrice", form.dayExtraPrice)

    // dataArray.append("weekMileage", form.weekMileage)

    dataArray.append("weekPrice", form.weekPrice)

    dataArray.append("weekExtraMileage", form.weekExtraMileage)

    dataArray.append("weekExtraPrice", form.weekExtraPrice)

    // dataArray.append("monthOneMileage", form.monthOneMileage)

    dataArray.append("monthOnePrice", form.monthOnePrice)

    dataArray.append("monthOneExtraMileage", form.monthOneExtraMileage)

    dataArray.append("monthOneExtraPrice", form.monthOneExtraPrice)

    // dataArray.append("monthOneMileage", form.monthOneMileage)

    dataArray.append("monthTwoPrice", form.monthTwoPrice)

    dataArray.append("isDayAvailable", ras.isDayAvailable)

    dataArray.append("isWeekAvailable", ras.isWeekAvailable)


    dataArray.append("isMonthOneAvailable", ras.isMonthOneAvailable)

    dataArray.append("isMonthTwoAvailable", ras.isMonthTwoAvailable)

    dataArray.append("isPartialAvailable", ras.isPartialAvailable)

    dataArray.append("isFullAvailable", ras.isFullAvailable)


    dataArray.append("monthTwoExtraMileage", form.monthTwoExtraMileage)

    dataArray.append("monthTwoExtraPrice", form.monthTwoExtraPrice)


    dataArray.append("securityDeposite", form.securityDeposite)

    dataArray.append("excessCalimAmount", form.excessCalimAmount)

    dataArray.append("specialNote", form.specialNote)

    dataArray.append("partialDailyInsureAmount", form.partialDailyInsureAmount)


    dataArray.append(
      "partialWeeklyInsureAmount",
      form.partialWeeklyInsureAmount
    )

    dataArray.append(
      "partialMonthlyInsureAmount",
      form.partialMonthlyInsureAmount
    )

    dataArray.append("fullDailyInsureAmount", form.fullDailyInsureAmount)

    dataArray.append("fullWeeklyInsureAmount", form.fullWeeklyInsureAmount)

    dataArray.append("fullMonthlyInsureAmount", form.fullMonthlyInsureAmount)

    dataArray.append("carReading", form.carReading)

    for (let i = 0; i < selectedOptions.length; i++) {
      dataArray.append("carFeatureId", selectedOptions[i].value)
    }
    for (let i = 0; i < selectedOptions1.length; i++) {
      dataArray.append("carSpecId", selectedOptions1[i].value)
    }
    for (let i = 0; i < selectedOptions2.length; i++) {
      dataArray.append("carIncludeId", selectedOptions2[i].value)
    }
    for (let i = 0; i < Files.length; i++) {
      dataArray.append("carImages", Files[i])
    }
    for (let i = 0; i < Files1.length; i++) {
      dataArray.append("carRegisterImages", Files1[i])
    }

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/car/addcarmodel",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            history.push("/cars")
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const [errorObject, seterrorObject] = useState({
    branchId: "",
    carTypeId: "",
    carBrandId: "",
    carModelId: "",
    carColorId: "",
    carMakeYearId: "",

    carBootCapacity: "",
    engineCapacity: "",
    carRegistNumber: "",

  })



  const [er, seter] = useState({
    branchId: "",
    carTypeId: "",
    carBrandId: "",
    carModelId: "",
    carColorId: "",
    carMakeYearId: "",

    carBootCapacity: "",
    engineCapacity: "",
    carRegistNumber: "",


  })



  const validateFun1 = (e) => {

    if (activeTab === 1) {
      if (form.branchId == null) {
        let error = { ...er }
        error["branchId"] = "Please Select branch"
        seterrorObject(error)
      } else if (form.carTypeId == null) {
        let error = { ...er }
        error["carTypeId"] = "Please Select Car carType"
        seterrorObject(error)
      } else if (form.carBrandId == null) {
        let error = { ...er }
        error["carBrandId"] = "Please Select Car Brand"
        seterrorObject(error)
      } else if (form.carModelId == null) {
        let error = { ...er }
        error["carModelId"] = "Please Select Car Model"
        seterrorObject(error)

      } else if (form.carMakeYearId == null) {
        let error = { ...er }
        error["carMakeYearId"] = "Please Select Car Make Year"
        seterrorObject(error)

      } else {
        let error = { ...er }
        seterrorObject(error)
        toggleTab(activeTab + 1)
      }

    } else if (activeTab === 2) {

      if (form.carColorId == null) {
        let error = { ...er }
        error["carColorId"] = "Please Select Car Color"
        seterrorObject(error)
      }

      else if (form.carBootCapacity == null) {
        let error = { ...er }
        error["carBootCapacity"] = "Please Enter Car BootCapacity "
        seterrorObject(error)
      } else if (form.engineCapacity == null) {
        let error = { ...er }
        error["engineCapacity"] = "Please Enter Car Engine Capacity "
        seterrorObject(error)

      }
      else if (form.carRegistNumber == null) {
        let error = { ...er }
        error["carRegistNumber"] = "Please Enter Car Registration Number "
        seterrorObject(error)

      }
      else {
        let error = { ...er }
        seterrorObject(error)
        toggleTab(activeTab + 1)
      }

    } else if (activeTab === 3) {

      toggleTab(activeTab + 1)

    }
    else if (activeTab === 4) {
      toggleTab(activeTab + 1)
    }




  }



  const checkeds = {
    isDayAvailable: false,
    isWeekAvailable: false,
    isMonthOneAvailable: false,
    isMonthTwoAvailable: false,
    isPartialAvailable: false,
    isFullAvailable: false,
  }


  const [ras, setras] = useState(checkeds)

  // console.log(ras)

  const [isDisabled, setIsDisabled] = useState(true)
  const [isDisabled1, setIsDisabled1] = useState(true)
  const [isDisabled2, setIsDisabled2] = useState(true)
  const [isDisabled3, setIsDisabled3] = useState(true)

  const [isDisabled4, setIsDisabled4] = useState(true)
  const [isDisabled5, setIsDisabled5] = useState(true)

  const handleChange1s = e => {
    const myUser = { ...ras }
    myUser[e.target.name] = e.target.checked
    setras(myUser)
    setIsDisabled(!isDisabled)
  }

  const handleChange2s = e => {
    const myUser = { ...ras }
    myUser[e.target.name] = e.target.checked
    setras(myUser)
    setIsDisabled1(!isDisabled1)
  }

  const handleChange3s = e => {
    const myUser = { ...ras }
    myUser[e.target.name] = e.target.checked
    setras(myUser)
    setIsDisabled2(!isDisabled2)
  }

  const handleChange4s = e => {
    const myUser = { ...ras }
    myUser[e.target.name] = e.target.checked
    setras(myUser)
    setIsDisabled3(!isDisabled3)
  }

  const handleChange5s = e => {
    const myUser = { ...ras }
    myUser[e.target.name] = e.target.checked
    setras(myUser)
    setIsDisabled4(!isDisabled4)
  }

  const handleChange6s = e => {
    const myUser = { ...ras }
    myUser[e.target.name] = e.target.checked
    setras(myUser)
    setIsDisabled5(!isDisabled5)
  }




  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Logic Cars Super Admin" breadcrumbItem="Add Vendor Cars" />
          <Row>
            <Form

            >
              <Col lg="12">
                <Card>
                  <CardBody>

                    <h4>Add Vendor Cars</h4>

                    <div className="wizard clearfix">
                      <div className="content clearfix mt-4">

                        <Row>

                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-lastname-input2">
                                Vehicle ra number
                              </Label>

                              <Input
                                type="text"
                                name="versSeat"
                                className="form-control"
                                id="basicpill-firstname-input1"
                                placeholder="Enter Vehicle ra number"
                                required

                              />
                            </div>
                          </Col>


                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-firstname-input1">
                                Car Type
                              </Label>

                              <select
                                onChange={e => {
                                  handleChange(e)
                                }}
                                value={form.carTypeId}
                                name="carTypeId"
                                className="form-select"
                              >
                                <option value="">Select</option>
                                {types.map((data, key) => {
                                  return (
                                    <option key={key} value={data._id}>
                                      {data.title}
                                    </option>
                                  )
                                })}
                              </select>

                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-firstname-input1">
                                Car Brand
                              </Label>

                              <select
                                onChange={e => {
                                  Optionchange(e)
                                }}
                                value={form.carBrandId}
                                name="carBrandId"
                                className="form-select"
                              >
                                <option value="">Select</option>
                                {brand.map((data, key) => {
                                  return (
                                    <option key={key} value={data._id}>
                                      {data.brandName}
                                    </option>
                                  )
                                })}
                              </select>

                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-lastname-input2">
                                Model
                              </Label>

                              <select
                                onChange={e => {
                                  handlemodel(e)
                                }}
                                value={form.carModelId}
                                name="carModelId"
                                className="form-select"
                              >
                                <option value="">Select</option>
                                {model.map((data, key) => {
                                  return (
                                    <option key={key} value={data._id}>
                                      {data.model_name}
                                    </option>
                                  )
                                })}
                              </select>

                            </div>
                          </Col>

                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-lastname-input2">
                                Year
                              </Label>

                              <select
                                onChange={e => {
                                  handlemodel(e)
                                }}
                                value={form.carModelId}
                                name="carModelId"
                                className="form-select"
                              >
                                <option value="">select</option>
                                <option value="">2018</option>
                                <option value="">2019</option>
                                <option value="">2020</option>
                                <option value="">2021</option>
                                <option value="">2022</option>
                                <option value="">2023</option>


                              </select>

                            </div>
                          </Col>





                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-lastname-input2">
                              Color
                              </Label>

                              <Input
                                type="text"
                                name="versSeat"
                                className="form-control"
                                id="basicpill-firstname-input1"
                                placeholder="Enter Color"
                                required
                               
                              />
                            </div>
                          </Col>

                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-lastname-input2">
                              Invoicing Group
                              </Label>

                              <select
                                onChange={e => {
                                  handlemodel(e)
                                }}
                                value={form.carModelId}
                                name="carModelId"
                                className="form-select"
                              >
                                <option value="">select</option>
                                <option value="">2018</option>
                                <option value="">2019</option>
                                <option value="">2020</option>
                                <option value="">2021</option>
                                <option value="">2022</option>
                                <option value="">2023</option>


                              </select>

                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-lastname-input2">
                              City Code 
                              </Label>

                              <select
                                onChange={e => {
                                  handlemodel(e)
                                }}
                                value={form.carModelId}
                                name="carModelId"
                                className="form-select"
                              >
                                <option value="">select</option>
                                <option value="">2018</option>
                                <option value="">2019</option>
                                <option value="">2020</option>
                                <option value="">2021</option>
                                <option value="">2022</option>
                                <option value="">2023</option>


                              </select>

                            </div>
                          </Col>

                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-lastname-input2">
                              Plate Code
                              </Label>

                              <Input
                                type="text"
                                name="versSeat"
                                className="form-control"
                                id="basicpill-firstname-input1"
                                placeholder="Enter Plate Code"
                                required

                              />
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-lastname-input2">
                              Plate Number
                              </Label>

                              <Input
                                type="text"
                                name="versSeat"
                                className="form-control"
                                id="basicpill-firstname-input1"
                                placeholder="Enter Plate Number"
                                required

                              />
                            </div>
                          </Col>

                          <Col lg="3">
                            <div className="mb-3  mt-3">
                              <Label for="basicpill-lastname-input2">
                              Status
                              </Label>

                              <select
                                onChange={e => {
                                  handlemodel(e)
                                }}
                                value={form.carModelId}
                                name="carModelId"
                                className="form-select"
                              >
                                <option value="">select</option>
                                <option value="">Active</option>
                                <option value="">InActive</option>
                               


                              </select>

                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="mb-3  mt-3">
                              <Label>Add Car Images </Label>
                              <Input
                                type="file"
                                multiple
                                name="carImages"
                                value={form.carImages}
                                onChange={changeHandler}
                              /> </div>
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

export default Cars



