// import React, { useEffect, useState } from "react"

// import {
//   Button,
//   Card,
//   CardBody,
//   Col,
//   Container,
//   Form,
//   Input,
//   Label,
//   NavItem,
//   NavLink,
//   Row,
//   TabContent,
//   TabPane,
//   Table,
//   InputGroup,
// } from "reactstrap"
// import Select from "react-select"
// import classnames from "classnames"
// import { Link } from "react-router-dom"
// import Breadcrumbs from "../components/Common/Breadcrumb"
// import { ToastContainer, toast } from "react-toastify"
// import { URL } from "../Apiurl"
// import axios from "axios"
// import { useHistory } from "react-router-dom"

// const Carsedit = () => {
//   //meta title
//   // document.title = "Logic Cars Admin ";
//   const [selectedOption, setSelectedOption] = useState(null)
//   const [selectedOption1, setSelectedOption1] = useState(null)
//   const [selectedOption2, setSelectedOption2] = useState(null)

//   const [activeTab, setactiveTab] = useState(1)
//   const [activeTabVartical, setoggleTabVertical] = useState(1)
//   const [showResults, setShowResults] = React.useState(false)
//   const [editResults, seteditResults] = React.useState(false)
//   const showfield = () => setShowResults(true)
//   const hidefield = () => setShowResults(false)
//   const hideeditfield = () => seteditResults(false)

//   const [passedSteps, setPassedSteps] = useState([1])
//   const [passedStepsVertical, setPassedStepsVertical] = useState([1])

//   function toggleTab(tab) {
//     if (activeTab !== tab) {
//       var modifiedSteps = [...passedSteps, tab]
//       if (tab >= 1 && tab <= 5) {
//         setactiveTab(tab)
//         setPassedSteps(modifiedSteps)
//       }
//     }
//   }

//   function toggleTabVertical(tab) {
//     if (activeTabVartical !== tab) {
//       var modifiedSteps = [...passedStepsVertical, tab]

//       if (tab >= 1 && tab <= 4) {
//         setoggleTabVertical(tab)
//         setPassedStepsVertical(modifiedSteps)
//       }
//     }
//   }

  

//   const [selectedFiles, setselectedFiles] = useState([])
//   console.log(selectedFiles)
//   const [selectedFiles1, setselectedFiles1] = useState([])
//   console.log(selectedFiles1)

//   function handleAcceptedFiles(files) {
//     files.map(file =>
//       Object.assign(file, {
//         preview: URL.createObjectURL(file),
//         formattedSize: formatBytes(file.size),
//       })
//     )
//     setselectedFiles(files)
//   }

//   function handleAcceptedFiles1(files) {
//     files.map(file =>
//       Object.assign(file, {
//         preview: URL.createObjectURL(file),
//         formattedSize: formatBytes(file.size),
//       })
//     )
//     setselectedFiles1(files)
//   }

//   function formatBytes(bytes, decimals = 2) {
//     if (bytes === 0) return "0 Bytes"
//     const k = 1024
//     const dm = decimals < 0 ? 0 : decimals
//     const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

//     const i = Math.floor(Math.log(bytes) / Math.log(k))
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
//   }

//   const [fieldshow, setfieldshow] = useState()

//   function handleSelectChange(event) {
//     setfieldshow(event.target.value)
//   }

//   const [cars, setcars] = useState([])

//   const [selectedOptions1, setSelectedOptions1] = useState([])

//   function handleSelect1(details) {
//     setSelectedOptions1(details)
//   }
//   const [form1, setform1] = useState([])
//   const [form, setform] = useState({
//     branchId: "",
//     carTypeId: "",
//     carBrandId: "",
//     carModelId: "",
//     carMakeYearId: "",
//     carColorId: "",
//     engineCapacity: "",
//     carRegistNumber: "",
//     carBootCapacity: "",
//     dayPrice: "",
//     dayExtraMileage: "",
//     dayExtraPrice: "",
//     weekPrice: "",
//     weekExtraMileage: "",
//     weekExtraPrice: "",
//     monthOnePrice: "",
//     monthOneExtraMileage: "",
//     monthOneExtraPrice: "",
//     monthTwoPrice: "",
//     isDayAvailable: "",
//     isWeekAvailable: "",
//     isMonthOneAvailable: "",
//     isMonthTwoAvailable: "",
//     isPartialAvailable: "",
//     isFullAvailable: "",
//     monthTwoExtraMileage: "",
//     monthTwoExtraPrice: "",
//     securityDeposite: "",
//     excessCalimAmount: "",
//     specialNote: "",
//     partialDailyInsureAmount: "",
//     partialWeeklyInsureAmount: "",
//     partialMonthlyInsureAmount: "",
//     fullDailyInsureAmount: "",
//     fullWeeklyInsureAmount: "",
//     fullMonthlyInsureAmount: "",
//     carReading: ""
//   })
//   const [Files, setFiles] = useState("")
//   const [Files1, setFiles1] = useState("")

//   var gets = localStorage.getItem("authUser")
//   var data = JSON.parse(gets)
//   var datas = data.token

//   const changeHandler = e => {
//     setFiles(e.target.files)
//   }
//   const changeHandler1 = e => {
//     setFiles1(e.target.files)
//   }

//   const handleChange = e => {
//     let myUser = { ...form }
//     myUser[e.target.name] = e.target.value
//     setform(myUser)
//   }

//   const cursid = sessionStorage.getItem("carid")

//   const [price1, setprice1] = useState([])
//   const [price2, setprice2] = useState([])
//   const [price3, setprice3] = useState([])
//   const [price4, setprice4] = useState([])

//   const handleprice1 = e => {
//     let myUser = { ...price1 }
//     myUser[e.target.name] = e.target.value
//     setprice1(myUser)
//   }
//   const handleprice2 = e => {
//     let myUser = { ...price2 }
//     myUser[e.target.name] = e.target.value
//     setprice2(myUser)
//   }
//   const handleprice3 = e => {
//     let myUser = { ...price3 }
//     myUser[e.target.name] = e.target.value
//     setprice3(myUser)
//   }
//   const handleprice4 = e => {
//     let myUser = { ...price4 }
//     myUser[e.target.name] = e.target.value
//     setprice4(myUser)
//   }


//   const [ras, setras] = useState([])
//   const [ras1, setras1] = useState([])
//   const [ras2, setras2] = useState([])
//   const [ras3, setras3] = useState([])
//   const [ras4, setras4] = useState([])


//   const [isDisabled, setIsDisabled] = useState()
//   const [isDisabled1, setIsDisabled1] = useState()
//   const [isDisabled2, setIsDisabled2] = useState()
//   const [isDisabled3, setIsDisabled3] = useState()
//   const [isDisabled4, setIsDisabled4] = useState()
//   const [isDisabled5, setIsDisabled5] = useState()



//   const handleChange1s = e => {
//     const myUser = { ...ras1 }
//     myUser[e.target.name] = e.target.checked
//     setras1(myUser)
//     setIsDisabled(!isDisabled)
//   }

//   const handleChange2s = e => {
//     const myUser = { ...ras2 }
//     myUser[e.target.name] = e.target.checked
//     setras2(myUser)
//     setIsDisabled1(!isDisabled1)
//   }

//   const handleChange3s = e => {
//     const myUser = { ...ras3 }
//     myUser[e.target.name] = e.target.checked
//     setras3(myUser)
//     setIsDisabled2(!isDisabled2)
//   }

//   const handleChange4s = e => {
//     const myUser = { ...ras4 }
//     myUser[e.target.name] = e.target.checked
//     setras4(myUser)
//     setIsDisabled3(!isDisabled3)
//   }

//   const handleChange5s = e => {
//     const myUser = { ...ras }
//     myUser[e.target.name] = e.target.checked
//     setras(myUser)
//     setIsDisabled4(!isDisabled4)
//   }

//   const handleChange6s = e => {
//     const myUser = { ...ras }
//     myUser[e.target.name] = e.target.checked
//     setras(myUser)
//     setIsDisabled5(!isDisabled5)
//   }



//   const getonecars = () => {
//     var token = datas
//     const dataArray = new FormData()
//     dataArray.append("_id", cursid)
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/car/getcarmodel",
//         dataArray,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         setform(res.data.carResult)
//         setras(res.data.carResult)

//         setSelectedOptions(res.data.carResult.carFeaturesObj)
//         setSelectedOptions1(res.data.carResult.carSpecsObj)

//         setSelectedOptions2(res.data.carResult.carIncludesObj)

//         setprice1(res.data.carResult.carPrices[0])
//         setprice2(res.data.carResult.carPrices[1])
//         setprice3(res.data.carResult.carPrices[2])
//         setprice4(res.data.carResult.carPrices[3])


//         setras1(res.data.carResult.carPrices[0])
//         setras2(res.data.carResult.carPrices[1])
//         setras3(res.data.carResult.carPrices[2])
//         setras4(res.data.carResult.carPrices[3])

//         if (res.data.carResult.isFullAvailable === true) {
//           setIsDisabled4(false)
//         } else {
//           setIsDisabled4(true)
//         }

//         if (res.data.carResult.isPartialAvailable === true) {
//           setIsDisabled5(false)
//         } else {
//           setIsDisabled5(true)
//         }

//         if (res.data.carResult.carPrices[0].isAvailable === true) {
//           setIsDisabled(false)
//         } else {
//           setIsDisabled(true)
//         }

//         if (res.data.carResult.carPrices[1].isAvailable === true) {
//           setIsDisabled1(false)
//         } else {
//           setIsDisabled1(true)
//         }

//         if (res.data.carResult.carPrices[2].isAvailable === true) {
//           setIsDisabled2(false)
//         } else {
//           setIsDisabled2(true)
//         }

//         if (res.data.carResult.carPrices[3].isAvailable === true) {
//           setIsDisabled3(false)
//         } else {
//           setIsDisabled3(true)
//         }

//       })
//   }

//   const history = useHistory()

//   useEffect(() => {
//     getallbranch()

//     getallcartype()

//     getAllbrands()

//     getAllcolors()

//     getAllfeatures()

//     getAllspecifications()

//     getonecars()

//     getincluded()


//   }, [])

//   const [versSeat, setversSeat] = useState([])

//   //CAR BRANCH
//   const [branch, setbranch] = useState([])

//   const getallbranch = () => {
//     var token = datas
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/branch/getallactivebranches",
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         setbranch(res.data.profiles)
//       })
//   }

//   //car type
//   const [types, settypes] = useState([])

//   const getallcartype = () => {
//     var token = datas
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/cartype/getallactivecartypes",
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         settypes(res.data.cartypeResult)
//       })
//   }

//   //car brand

//   const [brand, setbrand] = useState([])

//   const getAllbrands = () => {
//     var token = datas
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/brand/getallcarbrands",
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         setbrand(res.data.carBrandResult)
//       })
//   }

//   const Optionchange = e => {
//     let myUser = { ...form }
//     myUser[e.target.name] = e.target.value
//     setform(myUser)
//     getAllmodals(e.target.value)
//   }

//   //car MODEL
//   const [model, setmodel] = useState([])

//   const getAllmodals = carBrandId => {
//     var token = datas
//     const dataArray = new FormData()
//     dataArray.append("carTypeId", form.carTypeId)
//     dataArray.append("brandId", carBrandId)
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/carmodel/getcarmodelbytypebrand",
//         dataArray,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         setmodel(res.data.modelsResult)
//         setversSeat(res.data.modelsResult[0].noOfSeats)
//       })
//   }

//   const handlemodel = e => {
//     let myUser = { ...form }
//     myUser[e.target.name] = e.target.value
//     setform(myUser)
//     getAllversion(e.target.value)
//   }

//   const [version, setversion] = useState([])

//   const getAllversion = carModelId => {
//     var token = datas
//     const dataArray = new FormData()
//     dataArray.append("brandId", form.carBrandId)
//     dataArray.append("modelId", carModelId)
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/carmakeyear/getmodeldropdown",
//         dataArray,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         setversion(res.data.madeYeardata)
//       })
//   }

//   //car colors
//   const [color, setcolor] = useState([])

//   const getAllcolors = () => {
//     var token = datas
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/color/getallcarcolors",
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         setcolor(res.data.colorResult)
//       })
//   }

//   //car specifications
//   const [specification, setspecifications] = useState([])

//   const getAllspecifications = () => {
//     var token = datas
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/carspecs/getallcarspecifications",
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         setspecifications(res.data.specsResult)
//       })
//   }

//   const optionGroup2 = specification.map(response => ({
//     value: response._id,
//     label: response.specName,
//   }))

//   //car specifications
//   const [features, setfeatures] = useState([])

//   const getAllfeatures = () => {
//     var token = datas
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/carfeature/getallfeatures",
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         setfeatures(res.data.featuresFound)
//       })
//   }

//   const optionGroup1 = features.map(response => ({
//     value: response._id,
//     label: response.featureName,
//   }))

//   const [selectedOptions2, setSelectedOptions2] = useState([])

//   function handleSelect2(details) {
//     setSelectedOptions2(details)
//   }


//   const [included, setincluded] = useState([])

//   const getincluded = () => {
//     var token = datas
//     axios
//       .post(
//         "http://103.186.185.77:5021/api/v1/admin/car/getallwhatsinclude",
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(res => {
//         setincluded(res.data.includeResult)
//       })
//   }

//   const optionGroup3 = included.map(response => ({
//     value: response._id,
//     label: response.title,
//   }))


//   const addnewcar = () => {
//     var token = datas
//     const dataArray = new FormData()

//     dataArray.append("isDayAvailable", ras1.isAvailable)

//     dataArray.append("isWeekAvailable", ras2.isAvailable)


//     dataArray.append("isMonthOneAvailable", ras3.isAvailable)

//     dataArray.append("isMonthTwoAvailable", ras4.isAvailable)

//     dataArray.append("isPartialAvailable", ras.isPartialAvailable)

//     dataArray.append("isFullAvailable", ras.isFullAvailable)


//     dataArray.append("branchId", form.branchId)

//     dataArray.append("carTypeId", form.carTypeId)

//     dataArray.append("carBrandId", form.carBrandId)

//     dataArray.append("carModelId", form.carModelId)

//     dataArray.append("carMakeYearId", form.carMakeYearId)

//     dataArray.append("carColorId", form.carColorId)

//     dataArray.append("seatCount", versSeat)

//     dataArray.append("engineCapacity", form.engineCapacity)

//     dataArray.append("carRegistNumber", form.carRegistNumber)

//     dataArray.append("carBootCapacity", form.carBootCapacity)

//     // dataArray.append("dayMileage", form.dayMileage)

//     dataArray.append("dayPrice", price1.price)

//     dataArray.append("dayExtraMileage", price1.extraMileage)

//     dataArray.append("dayExtraPrice", price1.extraPrice)

//     // dataArray.append("weekMileage", form.weekMileage)

//     dataArray.append("weekPrice", price2.price)

//     dataArray.append("weekExtraMileage", price2.extraMileage)

//     dataArray.append("weekExtraPrice", price2.extraPrice)

//     // dataArray.append("monthOneMileage", form.monthOneMileage)

//     dataArray.append("monthOnePrice", price3.price)

//     dataArray.append("monthOneExtraMileage", price3.extraMileage)

//     dataArray.append("monthOneExtraPrice", price3.extraPrice)

//     // dataArray.append("monthTwoExtraMileage", form.monthTwoExtraMileage)

//     dataArray.append("monthTwoPrice", price4.price)

//     dataArray.append("monthTwoExtraMileage", price4.extraMileage)

//     dataArray.append("monthTwoExtraPrice", price4.extraPrice)

//     // dataArray.append("extraMileage", form.extraMileage)

//     dataArray.append("securityDeposite", form.securityDeposite)

//     dataArray.append("excessCalimAmount", form.excessCalimAmount)

//     dataArray.append("specialNote", form.specialNote)

//     dataArray.append("partialDailyInsureAmount", form.partialDailyInsureAmount)

//     dataArray.append(
//       "partialWeeklyInsureAmount",
//       form.partialWeeklyInsureAmount
//     )

//     dataArray.append(
//       "partialMonthlyInsureAmount",
//       form.partialMonthlyInsureAmount
//     )

//     dataArray.append("fullDailyInsureAmount", form.fullDailyInsureAmount)

//     dataArray.append("fullWeeklyInsureAmount", form.fullWeeklyInsureAmount)

//     dataArray.append("fullMonthlyInsureAmount", form.fullMonthlyInsureAmount)

//     dataArray.append("carReading", form.carReading)

//     for (let i = 0; i < selectedOptions.length; i++) {
//       dataArray.append("carFeatureId", selectedOptions[i].value)
//     }
//     for (let i = 0; i < selectedOptions1.length; i++) {
//       dataArray.append("carSpecId", selectedOptions1[i].value)
//     }
//     for (let i = 0; i < Files.length; i++) {
//       dataArray.append("carImages", Files[i])
//     }
//     for (let i = 0; i < Files1.length; i++) {
//       dataArray.append("carRegisterImages", Files1[i])
//     }
//     axios
//       .put(
//         "http://103.186.185.77:5021/api/v1/admin/car/editcar" + "/" + form._id,
//         dataArray,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then(
//         res => {
//           if (res.status === 200) {
//             toast(res.data.message)
//             history.push("/cars")
//           }
//         },
//         error => {
//           if (error.response && error.response.status === 400) {
//             toast(error.response.data.message)
//           }
//         }
//       )
//   }

//   const Handlesubmit = e => {
//     e.preventDefault()
//     addnewcar()
//   }

//   const [selectedOptions, setSelectedOptions] = useState([])

//   function handleSelect(details) {
//     ///setSelectedOptions(current => [...current, details.value]);
//     setSelectedOptions(details)
//     console.log(details)
//   }

//   const [selectedMulti1, setselectedMulti1] = useState([])
//   console.log(selectedMulti1)
//   function handleMulti(data12) {
//     setselectedMulti1(data12)
//   }

//   const [listPerPage] = useState(10)
//   const [pageNumber, setPageNumber] = useState(0)

//   const pagesVisited = pageNumber * listPerPage
//   const lists = cars.slice(pagesVisited, pagesVisited + listPerPage)
//   const pageCount = Math.ceil(cars.length / listPerPage)
//   const changePage = ({ selected }) => {
//     setPageNumber(selected)
//   }






//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true} className="mb-5">
//           <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Cars List" />
//           <Row>
//             <div>
//               <Link to="/cars">
//                 <Button
//                   className="mb-3"
//                   style={{ float: "right" }}
//                   color="info"
//                 >
//                   <i className="far fa-arrow-alt-circle-left"></i> Back
//                 </Button>
//               </Link>{" "}
//             </div>{" "}
//           </Row>

//           <Row>
//             <Col lg="12">
//               <Card>
//                 <CardBody>
//                   <Form
//                     onSubmit={e => {
//                       Handlesubmit(e)
//                     }}
//                   >
//                     <div className="wizard clearfix">
//                       <div className="steps clearfix">
//                         <ul>
//                           <NavItem
//                             className={classnames({ current: activeTab === 1 })}
//                           >
//                             <NavLink
//                               className={classnames({
//                                 current: activeTab === 1,
//                               })}
//                               onClick={() => {
//                                 setactiveTab(1)
//                               }}
//                               disabled={!(passedSteps || []).includes(1)}
//                             >
//                               <span className="number">
//                                 <i className="fas fa-car"></i>
//                               </span>{" "}
//                               SELECT CAR
//                             </NavLink>
//                           </NavItem>
//                           <NavItem
//                             className={classnames({ current: activeTab === 2 })}
//                           >
//                             <NavLink
//                               className={classnames({
//                                 active: activeTab === 2,
//                               })}
//                               onClick={() => {
//                                 setactiveTab(2)
//                               }}
//                               disabled={!(passedSteps || []).includes(2)}
//                             >
//                               <span className="number">
//                                 <i className="fas fa-shield-alt"></i>
//                               </span>{" "}
//                               CAR SPECS
//                             </NavLink>
//                           </NavItem>
//                           <NavItem
//                             className={classnames({ current: activeTab === 3 })}
//                           >
//                             <NavLink
//                               className={classnames({
//                                 active: activeTab === 3,
//                               })}
//                               onClick={() => {
//                                 setactiveTab(3)
//                               }}
//                               disabled={!(passedSteps || []).includes(3)}
//                             >
//                               <span className="number">
//                                 <i className="fas fa-images"></i>
//                               </span>{" "}
//                               Car Images
//                             </NavLink>
//                           </NavItem>
//                           <NavItem
//                             className={classnames({ current: activeTab === 4 })}
//                           >
//                             <NavLink
//                               className={classnames({
//                                 active: activeTab === 4,
//                               })}
//                               onClick={() => {
//                                 setactiveTab(4)
//                               }}
//                               disabled={!(passedSteps || []).includes(4)}
//                             >
//                               <span className="number">
//                                 <i className="fas fa-money-check-alt"></i>
//                               </span>{" "}
//                               PRICING
//                             </NavLink>
//                           </NavItem>
//                           <NavItem
//                             className={classnames({ current: activeTab === 5 })}
//                           >
//                             <NavLink
//                               className={classnames({
//                                 active: activeTab === 5,
//                               })}
//                               onClick={() => {
//                                 setactiveTab(5)
//                               }}
//                               disabled={!(passedSteps || []).includes(5)}
//                             >
//                               <span className="number">
//                                 <i className="fas fa-users-cog"></i>
//                               </span>{" "}
//                               RENTAL TERMS
//                             </NavLink>
//                           </NavItem>
//                         </ul>
//                       </div>
//                       <div className="content clearfix mt-4">
//                         <TabContent activeTab={activeTab}>
//                           <TabPane tabId={1}>
//                             <Row>
//                               <Col lg="4">
//                                 <div className="mb-4 mt-4">
//                                   <Label for="basicpill-firstname-input1">
//                                     Branch
//                                   </Label>
//                                   <select
//                                     className="form-select "
//                                     value={form.branchId}
//                                     name="branchId"
//                                     onChange={e => {
//                                       handleChange(e)
//                                     }}
//                                   >
//                                     <option value="">select</option>
//                                     {branch.map((data, key) => {
//                                       return (
//                                         <option key={key} value={data._id}>
//                                           {data.branchName}
//                                         </option>
//                                       )
//                                     })}
//                                   </select>
//                                 </div>
//                               </Col>
//                               <Col lg="4">
//                                 <div className="mb-4  mt-4">
//                                   <Label for="basicpill-firstname-input1">
//                                     Car Type
//                                   </Label>

//                                   <select
//                                     onChange={e => {
//                                       handleChange(e)
//                                     }}
//                                     value={form.carTypeId}
//                                     name="carTypeId"
//                                     className="form-select"
//                                   >
//                                     <option value="">Select</option>
//                                     {types.map((data, key) => {
//                                       return (
//                                         <option key={key} value={data._id}>
//                                           {data.title}
//                                         </option>
//                                       )
//                                     })}
//                                   </select>
//                                 </div>
//                               </Col>
//                               <Col lg="4">
//                                 <div className="mb-4  mt-4">
//                                   <Label for="basicpill-firstname-input1">
//                                     Car Brand
//                                   </Label>

//                                   <select
//                                     onChange={e => {
//                                       Optionchange(e)
//                                     }}
//                                     value={form.carBrandId}
//                                     name="carBrandId"
//                                     className="form-select"
//                                   >
//                                     <option value="">Select</option>
//                                     {brand.map((data, key) => {
//                                       return (
//                                         <option key={key} value={data._id}>
//                                           {data.brandName}
//                                         </option>
//                                       )
//                                     })}
//                                   </select>
//                                 </div>
//                               </Col>
//                               <Col lg="4">
//                                 <div className="mb-3  mt-3">
//                                   <Label for="basicpill-lastname-input2">
//                                     Model
//                                   </Label>

//                                   <select
//                                     onChange={e => {
//                                       handlemodel(e)
//                                     }}
//                                     value={form.carModelId}
//                                     name="carModelId"
//                                     className="form-select"
//                                   >
//                                     {model != "" ? (
//                                       ""
//                                     ) : (
//                                       <option value={form.carModelId}>
//                                         {form.carModelName}
//                                       </option>
//                                     )}
//                                     <option value="">Select</option>
//                                     {model.map((data, key) => {
//                                       return (
//                                         <option key={key} value={data._id}>
//                                           {data.model_name}
//                                         </option>
//                                       )
//                                     })}
//                                   </select>
//                                 </div>
//                               </Col>

//                               <Col lg="4">
//                                 <div className="mb-3  mt-3">
//                                   <Label for="basicpill-email-input4">
//                                     Make (Year)
//                                   </Label>
//                                   <select
//                                     onChange={e => {
//                                       handleChange(e)
//                                     }}
//                                     value={form.carMakeYearId}
//                                     name="carMakeYearId"
//                                     className="form-select"
//                                   >
//                                     {" "}
//                                     {version != "" ? (
//                                       ""
//                                     ) : (
//                                       <option value={form.carMakeYearId}>
//                                         {form.carMakeYear}
//                                       </option>
//                                     )}
//                                     <option value="">Select</option>
//                                     {version.map((data, key) => {
//                                       return (
//                                         <option key={key} value={data._id}>
//                                           {data.carMakeYear}
//                                         </option>
//                                       )
//                                     })}
//                                   </select>
//                                 </div>
//                               </Col>
//                               <Col lg="4">
//                                 <div className="mb-4  mt-3">
//                                   <Label for="basicpill-lastname-input2">
//                                     No.of Seats
//                                   </Label>

//                                   <Input
//                                     disabled
//                                     type="text"
//                                     name="versSeat"
//                                     className="form-control"
//                                     id="basicpill-firstname-input1"
//                                     placeholder="No.of Seates"
//                                     required
//                                     value={versSeat}
//                                     defaultValue={form.noOfSeats}
//                                   />
//                                 </div>
//                               </Col>
//                             </Row>
//                           </TabPane>
//                           <TabPane tabId={2}>
//                             <div>
//                               <Row>
//                                 <Col lg="4">
//                                   <div className="mb-3  mt-4">
//                                     <Label for="basicpill-pancard-input5">
//                                       Available Colors
//                                     </Label>

//                                     <select
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                       value={form.carColorId}
//                                       name="carColorId"
//                                       className="form-select"
//                                     >
//                                       <option value="">Select</option>
//                                       {color.map((data, key) => {
//                                         return (
//                                           <option key={key} value={data._id}>
//                                             {data.title}
//                                           </option>
//                                         )
//                                       })}
//                                     </select>
//                                   </div>
//                                 </Col>

//                                 <Col lg="4">
//                                   <div className="mb-3  mt-4">
//                                     <Label for="basicpill-vatno-input6">
//                                       Car Features
//                                     </Label>

//                                     <Select
//                                       closeMenuOnSelect={true}
//                                       onChange={handleSelect}
//                                       isMulti
//                                       options={optionGroup1}
//                                       value={selectedOptions}
//                                       placeholder="Select Feature"
//                                     />
//                                   </div>
//                                 </Col>

//                                 <Col lg="4">
//                                   <div className="mb-3  mt-4">
//                                     <Label for="basicpill-vatno-input6">
//                                       Specifications
//                                     </Label>

//                                     <Select
//                                       style={{ width: "100%" }}
//                                       required
//                                       options={optionGroup2}
//                                       placeholder="Select Specifications"
//                                       value={selectedOptions1}
//                                       onChange={handleSelect1}
//                                       isSearchable={true}
//                                       isMulti
//                                       name="carSpecId"
//                                     />
//                                   </div>
//                                 </Col>

//                                 <Col lg="4">
//                                   <div className="mb-3  mt-4">
//                                     <Label for="basicpill-vatno-input6">
//                                       Whatsincluded
//                                     </Label>

//                                     <Select
//                                       style={{ width: "100%" }}
//                                       required
//                                       options={optionGroup3}
//                                       placeholder="Select what's included"
//                                       value={selectedOptions2}
//                                       onChange={handleSelect2}
//                                       isSearchable={true}
//                                       isMulti
//                                       name="carIncludeId"
//                                     />
                                    
//                                   </div>
//                                 </Col>

//                                 <Col lg="4">
//                                   <div className="mb-3  mt-4">
//                                     <Label for="basicpill-declaration-input10">
//                                       Boot Capacity
//                                     </Label>
//                                     <Input
//                                       type="number"
//                                       className="form-control"
//                                       id="basicpill-Declaration-input10"
//                                       placeholder="Declaration Details"
//                                       value={form.carBootCapacity}
//                                       name="carBootCapacity"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                     />
//                                   </div>
//                                 </Col>

//                                 <Col lg="4">
//                                   <div className="mb-3  mt-4">
//                                     <Label for="basicpill-companyuin-input9">
//                                       Engine Capacity
//                                     </Label>
//                                     <Input
//                                       type="text"
//                                       className="form-control"
//                                       id="basicpill-Declaration-input10"
//                                       placeholder="Declaration Details"
//                                       value={form.engineCapacity}
//                                       name="engineCapacity"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                     />
//                                   </div>
//                                 </Col>

//                                 <Col lg="4">
//                                   <div className="mb-3 mt-4">
//                                     <Label for="basicpill-cstno-input7">
//                                       Registration No.
//                                     </Label>
//                                     <Input
//                                       type="text"
//                                       className="form-control"
//                                       id="basicpill-cstno-input7"
//                                       placeholder="Enter Registration No."
//                                       value={form.carRegistNumber}
//                                       name="carRegistNumber"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                     />
//                                   </div>
//                                 </Col>
//                               </Row>
//                             </div>
//                           </TabPane>
//                           <TabPane tabId={3}>
//                             <div>
//                               <Row>
//                                 <Col md={6}>
//                                   <Label>Add Car Images </Label>
//                                   <Input
//                                     type="file"
//                                     multiple
//                                     name="carImages"
//                                     onChange={changeHandler}
//                                   />
//                                 </Col>
//                                 <Col md={6}>
//                                   <Label>Add Registration Card</Label>

//                                   <Input
//                                     type="file"
//                                     multiple
//                                     name="carRegisterImages"
//                                     onChange={changeHandler1}
//                                   />
//                                 </Col>
//                               </Row>
//                             </div>
//                           </TabPane>
//                           <TabPane tabId={4}>
//                             <div>
//                               <Row>
//                                 <Col md="3">
//                                   <div className="mb-3 mt-4">
//                                     <div className="form-check mb-3">
//                                       <input
//                                         className="form-check-input"
//                                         type="checkbox"
//                                         id="defaultCheck1"
//                                         name="isAvailable"
//                                         defaultChecked={ras1.isAvailable}
//                                         value={ras1.isAvailable}
//                                         onClick={e => {
//                                           handleChange1s(e)
//                                         }}
//                                       />
//                                       <label
//                                         className="form-check-label"
//                                         htmlFor="defaultCheck1"
//                                       >
//                                         Available for Daily(250 kms)
//                                       </label>
//                                     </div>
//                                   </div>
//                                 </Col>

//                                 <Col md="3">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Price Per Day
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         AED
//                                       </div>
//                                       <input
//                                         disabled={isDisabled}
//                                         type="text"
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Charges"
//                                         value={price1.price}
//                                         name="price"
//                                         onChange={e => {
//                                           handleprice1(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                                 <Col md="3">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Per Day Extra kms
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         Kms
//                                       </div>
//                                       <input
//                                         disabled={isDisabled}
//                                         type="text"
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Enter Extra kms"
//                                         value={price1.extraMileage}
//                                         name="extraMileage"
//                                         onChange={e => {
//                                           handleprice1(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                                 <Col md="2">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Per Day Extra Price
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         AED
//                                       </div>
//                                       <input
//                                         disabled={isDisabled}
//                                         type="text"
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Charges"
//                                         value={price1.extraPrice}
//                                         name="extraPrice"
//                                         onChange={e => {
//                                           handleprice1(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                               </Row>

//                               <Row>
//                                 <Col lg="3">
//                                   <div className="mb-3 mt-4">
//                                     <div className="form-check mb-3">
//                                       <input
//                                         className="form-check-input"
//                                         type="checkbox"
//                                         id="defaultCheck2"
//                                         name="isAvailable"
//                                         defaultChecked={ras2.isAvailable}
//                                         value={ras2.isAvailable}
//                                         onClick={e => {
//                                           handleChange2s(e)
//                                         }}
//                                       />
//                                       <label
//                                         className="form-check-label"
//                                         htmlFor="defaultCheck2"
//                                       >
//                                         Available for Weekly (450 Kms)
//                                       </label>
//                                     </div>
//                                   </div>
//                                 </Col>

//                                 <Col lg="3">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Price Per Week
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         AED
//                                       </div>
//                                       <input
//                                         type="text"
//                                         disabled={isDisabled1}
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Charges"
//                                         value={price2.price}
//                                         name="price"
//                                         onChange={e => {
//                                           handleprice2(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                                 <Col lg="3">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Per Week Extra Kms
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         Kms
//                                       </div>
//                                       <input
//                                         type="text"
//                                         disabled={isDisabled1}
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Enter Extra kms"
//                                         value={price2.extraMileage}
//                                         name="extraMileage"
//                                         onChange={e => {
//                                           handleprice2(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                                 <Col lg="2">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Per Week Extra Price
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         AED
//                                       </div>
//                                       <input
//                                         disabled={isDisabled1}
//                                         type="text"
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Charges"
//                                         value={price2.extraPrice}
//                                         name="extraPrice"
//                                         onChange={e => {
//                                           handleprice2(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                               </Row>

//                               <Row>
//                                 <Col lg="3">
//                                   <div className="mb-3 mt-4">
//                                     <div className="form-check mb-3">
//                                       <input
//                                         className="form-check-input"
//                                         type="checkbox"
//                                         id="defaultCheck3"
//                                         name="isAvailable"
//                                         defaultChecked={ras3.isAvailable}
//                                         value={ras3.isAvailable}
//                                         onClick={e => {
//                                           handleChange3s(e)
//                                         }}
//                                       />
//                                       <label
//                                         className="form-check-label"
//                                         htmlFor="defaultCheck3"
//                                       >
//                                         Available for Monthly (2500 Kms)
//                                       </label>
//                                     </div>
//                                   </div>
//                                 </Col>
//                                 <Col lg="3">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Price Per Month
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         AED
//                                       </div>
//                                       <input
//                                         disabled={isDisabled2}
//                                         type="text"
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Charges"
//                                         value={price3.price}
//                                         name="price"
//                                         onChange={e => {
//                                           handleprice3(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                                 <Col lg="3">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Per Month Extra Kms
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         Kms
//                                       </div>
//                                       <input
//                                         disabled={isDisabled2}
//                                         type="text"
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Enter Extra Kms "
//                                         value={price3.extraMileage}
//                                         name="extraMileage"
//                                         onChange={e => {
//                                           handleprice3(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                                 <Col lg="2">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Per Month Extra Price
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         AED
//                                       </div>
//                                       <input
//                                         disabled={isDisabled2}
//                                         type="text"
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Charges"
//                                         value={price3.extraPrice}
//                                         name="extraPrice"
//                                         onChange={e => {
//                                           handleprice3(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                               </Row>

//                               <Row>
//                                 <Col lg="3">
//                                   <div className="mb-3 mt-4">
//                                     <div className="form-check mb-3">
//                                       <input
//                                         className="form-check-input"
//                                         id="defaultCheck3"
//                                         name="isAvailable"
//                                         type="checkbox"
//                                         defaultChecked={ras4.isAvailable}
//                                         value={ras4.isAvailable}
//                                         onClick={e => {
//                                           handleChange4s(e)
//                                         }}
//                                       />
//                                       <label
//                                         className="form-check-label"
//                                         htmlFor="defaultCheck3"
//                                       >
//                                         Available for Monthly (4500 Kms)
//                                       </label>
//                                     </div>
//                                   </div>
//                                 </Col>
//                                 <Col lg="3">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Price Per Month
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         AED
//                                       </div>
//                                       <input
//                                         type="text"
//                                         disabled={isDisabled3}
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Charges"
//                                         value={price4.price}
//                                         name="price"
//                                         onChange={e => {
//                                           handleprice4(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                                 <Col lg="3">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Per Month Extra Kms
//                                     </Label>

//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         Kms
//                                       </div>
//                                       <input
//                                         disabled={isDisabled3}
//                                         type="text"
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Enter Extra Kms "
//                                         value={price4.extraMileage}
//                                         name="extraMileage"
//                                         onChange={e => {
//                                           handleprice4(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                                 <Col lg="2">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Per Month Extra Price
//                                     </Label>
//                                     <InputGroup>
//                                       <div className="input-group-text">
//                                         AED
//                                       </div>
//                                       <input
//                                         disabled={isDisabled3}
//                                         type="text"
//                                         className="form-control"
//                                         id="basicpill-namecard-input11"
//                                         placeholder="Charges"
//                                         value={price4.extraPrice}
//                                         name="extraPrice"
//                                         onChange={e => {
//                                           handleprice4(e)
//                                         }}
//                                       />
//                                     </InputGroup>
//                                   </div>
//                                 </Col>
//                               </Row>
//                             </div>
//                           </TabPane>
//                           <TabPane tabId={5}>
//                             <Row>
//                               <h6 className="mt-3 mb-3">Car Insurance </h6>
//                               <Col lg="3">
//                                 <div className="mb-3 mt-4">
//                                   <div className="form-check mb-3">
//                                     <input
//                                       className="form-check-input"
//                                       type="checkbox"
//                                       id="defaultCheck1"
//                                       name="isPartialAvailable"
//                                       defaultChecked={ras.isPartialAvailable}
//                                       value={ras.isPartialAvailable}
//                                       onClick={e => {
//                                         handleChange5s(e)
//                                       }}
//                                     />
//                                     <label
//                                       className="form-check-label"
//                                       htmlFor="defaultCheck3"
//                                     >
//                                       Basic Insurance
//                                     </label>
//                                   </div>
//                                 </div>
//                               </Col>
//                               <Col lg="3">
//                                 <div className="mb-3">
//                                   <Label for="basicpill-namecard-input11">
//                                     Price Per Day
//                                   </Label>
//                                   <InputGroup>
//                                     <div className="input-group-text">AED</div>
//                                     <input
//                                       disabled={isDisabled4}
//                                       type="text"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Amount"
//                                       value={form.partialDailyInsureAmount}
//                                       name="partialDailyInsureAmount"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                     />
//                                   </InputGroup>
//                                 </div>
//                               </Col>
//                               <Col lg="3">
//                                 <div className="mb-3">
//                                   <Label for="basicpill-namecard-input11">
//                                     Price Per Week
//                                   </Label>
//                                   <InputGroup>
//                                     <div className="input-group-text">AED</div>
//                                     <input
//                                       disabled={isDisabled4}
//                                       type="text"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Amount"
//                                       value={form.partialWeeklyInsureAmount}
//                                       name="partialWeeklyInsureAmount"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                     />
//                                   </InputGroup>
//                                 </div>
//                               </Col>
//                               <Col lg="2">
//                                 <div className="mb-3">
//                                   <Label for="basicpill-namecard-input11">
//                                     Price Per Month
//                                   </Label>
//                                   <InputGroup>
//                                     <div className="input-group-text">AED</div>
//                                     <input
//                                       disabled={isDisabled4}
//                                       type="text"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Amount"
//                                       value={form.partialMonthlyInsureAmount}
//                                       name="partialMonthlyInsureAmount"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                     />
//                                   </InputGroup>
//                                 </div>
//                               </Col>
//                             </Row>

//                             <Row>
//                               <Col lg="3">
//                                 <div className="mb-3 mt-4">
//                                   <div className="form-check mb-3">
//                                     <input
//                                       className="form-check-input"
//                                       type="checkbox"
//                                       id="defaultCheck1"
//                                       name="isFullAvailable"
//                                       defaultChecked={ras.isFullAvailable}
//                                       value={ras.isFullAvailable}
//                                       onClick={e => {
//                                         handleChange6s(e)
//                                       }}
//                                     />
//                                     <label
//                                       className="form-check-label"
//                                       htmlFor="defaultCheck3"
//                                     >
//                                       Full Insurance
//                                     </label>
//                                   </div>
//                                 </div>
//                               </Col>
//                               <Col lg="3">
//                                 <div className="mb-3">
//                                   <Label for="basicpill-namecard-input11">
//                                     Price Per Day
//                                   </Label>
//                                   <InputGroup>
//                                     <div className="input-group-text">AED</div>
//                                     <input
//                                       disabled={isDisabled5}
//                                       type="text"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Amount"
//                                       value={form.fullDailyInsureAmount}
//                                       name="fullDailyInsureAmount"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                     />
//                                   </InputGroup>
//                                 </div>
//                               </Col>
//                               <Col lg="3">
//                                 <div className="mb-3">
//                                   <Label for="basicpill-namecard-input11">
//                                     Price Per Week
//                                   </Label>
//                                   <InputGroup>
//                                     <div className="input-group-text">AED</div>
//                                     <input
//                                       disabled={isDisabled5}
//                                       type="text"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Amount"
//                                       value={form.fullWeeklyInsureAmount}
//                                       name="fullWeeklyInsureAmount"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                     />
//                                   </InputGroup>
//                                 </div>
//                               </Col>
//                               <Col lg="2">
//                                 <div className="mb-3">
//                                   <Label for="basicpill-namecard-input11">
//                                     Price Per Month
//                                   </Label>
//                                   <InputGroup>
//                                     <div className="input-group-text">AED</div>
//                                     <input
//                                       disabled={isDisabled5}
//                                       type="text"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Amount"
//                                       value={form.fullMonthlyInsureAmount}
//                                       name="fullMonthlyInsureAmount"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                     />
//                                   </InputGroup>
//                                 </div>
//                               </Col>
//                             </Row>

//                             <div>
//                               <h6 className="mt-4">Car Deposit </h6>

//                               <Row>
//                                 <Col lg="3">
//                                   <div className="mb-3">
//                                     <Label for="basicpill-namecard-input11">
//                                       Security Deposit
//                                     </Label>
//                                     <Input
//                                       type="number"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Enter Amount"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                       value={form.securityDeposite}
//                                       name="securityDeposite"
//                                     />
//                                   </div>
//                                 </Col>
//                                 <Col lg="3">
//                                   <div className="mb-3">
//                                     <Label>Excess Claim Amount</Label>
//                                     <Input
//                                       type="number"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Enter Amount"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                       value={form.excessCalimAmount}
//                                       name="excessCalimAmount"
//                                     />
//                                   </div>
//                                 </Col>
//                                 <Col lg="3">
//                                   <div className="mb-3">
//                                     <Label>Car Reading</Label>
//                                     <Input
//                                       type="number"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Enter Car Reading"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                       value={form.carReading}
//                                       name="carReading"
//                                     />
//                                   </div>
//                                 </Col>
//                                 <Col lg="3">
//                                   <div className="mb-2">
//                                     <Label>Special Note for Customers</Label>
//                                     <textarea
//                                       type="text"
//                                       className="form-control"
//                                       id="basicpill-namecard-input11"
//                                       placeholder="Upto 150 characters"
//                                       onChange={e => {
//                                         handleChange(e)
//                                       }}
//                                       value={form.specialNote}
//                                       name="specialNote"
//                                     />
//                                   </div>
//                                 </Col>
//                               </Row>
//                             </div>
//                           </TabPane>
//                         </TabContent>
//                       </div>
//                       <div className="actions clearfix">
//                         <ul>
//                           <li
//                             className={
//                               activeTab === 1 ? "previous disabled" : "previous"
//                             }
//                           >
//                             <Link
//                               to="#"
//                               onClick={() => {
//                                 toggleTab(activeTab - 1)
//                               }}
//                               style={{ background: "#d05151" }}
//                             >
//                               <i className="fas fa-arrow-circle-left"></i>{" "}
//                               Previous
//                             </Link>
//                           </li>
//                           <li
//                             className={activeTab === 5 ? "next logbtn" : "next"}
//                           >
//                             <Link
//                               to="#"
//                               onClick={() => {
//                                 toggleTab(activeTab + 1)
//                               }}
//                             >
//                               Next <i className="fas fa-arrow-circle-right"></i>
//                             </Link>
//                           </li>
//                           <li
//                             className={
//                               activeTab < 5 ? "previous logbtn " : "previous"
//                             }
//                           >
//                             <Button type="submit" color="primary">
//                               Submit <i className="fas fa-check-circle"></i>
//                             </Button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </Form>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
         
//         </Container>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Carsedit



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
          <Breadcrumbs title="Logic Cars Super Admin" breadcrumbItem="Edit Vendor Car" />
          <Row>
            <Form

            >
              <Col lg="12">
                <Card>
                  <CardBody>

                    <h4>Edit Vendor Car</h4>

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



