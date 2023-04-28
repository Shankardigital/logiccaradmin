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
  Modal,
  TabPane,
  Table,
} from "reactstrap"
import Select from "react-select"

import classnames from "classnames"
import { Link } from "react-router-dom"

import "flatpickr/dist/themes/material_blue.css"

import Breadcrumbs from "../components/Common/Breadcrumb"
import { toast } from "react-toastify"

import axios from "axios"
import { useHistory } from "react-router-dom"
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from "react-places-autocomplete";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete"
// import useOnclickOutside from "react-cool-onclickoutside"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete"

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

const libraries = ["places"]

import ReactPaginate from "react-paginate"
import { number } from "prop-types"

const AddBooking = args => {
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

  const [open, setOpen] = useState({})

  const handleClicks = _id => {
    setOpen(prevState => ({ ...prevState, [_id]: !prevState[_id] }))
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  const [cars, setcars] = useState([])

  const [form, setform] = useState([])
  console.log(form)

  const [carId, setcarId] = useState("")

  var gets = localStorage.getItem("authUser")
  var data0 = JSON.parse(gets)
  var datas = data0.token

  const [fieldshow1, setfieldshow1] = useState()

  function handleSelectChange1(event) {
    setfieldshow1(event.target.value)
  }

  const history = useHistory()

  function handleClick123() {
    history.push("/editcar")
  }
  function handleClick1234() {
    history.push("/car-details")
  }

  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }
  const [modal_small1, setmodal_small1] = useState(false)

  function tog_small1() {
    setmodal_small1(!modal_small1)
    removeBodyCss()
  }
  const [modal_small2, setmodal_small2] = useState(false)

  function tog_small2() {
    setmodal_small2(!modal_small2)
    removeBodyCss()
  }

  const [form123, setform123] = useState([])

  const handleChange1234 = e => {
    const myUser = { ...form123 }
    myUser[e.target.name] = e.target.value
    setform123(myUser)
  }

  const handleSelectmap =
    ({ description }) =>
      () => {
        setValue(description, false)
        clearSuggestions()
        getGeocode({ address: description }).then(results => {
          const { lat, lng } = getLatLng(results[0])
        })
      }

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li key={place_id} onClick={handleSelectmap(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })

  const [customer, setcustomer] = useState([])

  const getAllcustomer = () => {
    var token = datas
    const dataArray = new FormData()
    // dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/customer/searchcustomerforbooking",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcustomer(res.data.custResult)
      })
  }
  const [selectedOptions, setSelectedOptions] = useState([])

  function handleSelect(details) {
    setSelectedOptions(details)
    getonecustomer(details.value)
  }

  const optionGroup1 = customer.map(response => ({
    value: response.customerId,
    label: response.customerName,
  }))
  // + "/" + response.phone + "/" + response.dlNumber,
  const [forms, setforms] = useState("")

  useEffect(() => {
    getAllcars()
    getAllcustomer()
    getAlldriver()
    getAllbrand()
    getallcartypes()
    getAllmodal()
    getfiliterscars()
    getonebooking()
  }, [])

  // const getonecustomer1 = (data) => {
  //   var token = datas
  //   const dataArray = new FormData()

  //   dataArray.append("_id", data)

  //   axios
  //     .post(
  //       "http://103.186.185.77:5021/api/v1/admin/customer/getdetailsbyid",
  //       dataArray,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     )
  //     .then(res => {
  //       setforms(res.data.customerResult)
  //     })
  // }

  const getonecustomer = id => {
    var token = datas
    const dataArray = new FormData()

    dataArray.append("_id", id)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/customer/getdetailsbyid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setforms(res.data.customerResult)
      })
  }

  const [driver, setdriver] = useState([])

  const getAlldriver = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/driver/searchdriverforbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setdriver(res.data.drvrResult)
      })
  }
  const [selectedOptions1, setSelectedOptions1] = useState([])

  function handleSelect1(details) {
    setSelectedOptions1(details)
    const id = details.value
    getonedriver(id)
  }

  const optionGroup11 = driver.map(response => ({
    value: response.driverId,
    label: response.driverName,
  }))
  // + "/" + response.phone + "/" + response.dlNumber,
  const [singledriver, setsingledriver] = useState([])

  const getonedriver = id => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", id)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/driver/getdetailsbyid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setsingledriver(res.data.custResult)
      })
  }

  const getAllcars = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/car/getallcarmodel",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcars(res.data.carsResult)
      })
  }

  const [filiter, setfiliter] = useState([])

  const handlefiliter = e => {
    let myUser = { ...filiter }
    myUser[e.target.name] = e.target.value
    setfiliter(myUser)
  }

  const handleSubmitfiliter = e => {
    e.preventDefault()
    getfiliters()
  }

  const [filiterdata, setfiliterdata] = useState([])

  const [filiterdata1, setfiliterdata1] = useState([])

  const getfiliterscars = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    dataArray.append("carTypeId", "")
    dataArray.append("carBrandId", "")
    dataArray.append("carModelId", "")

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/car/filtercarsforbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setfiliterdata(res.data.carResult)
        setfiliterdata1(res.data.carResult.carSpecs)
      })
  }

  const getfiliters = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    dataArray.append("carTypeId", filiter.carTypeId)
    dataArray.append("carBrandId", filiter.carBrandId)
    dataArray.append("carModelId", filiter.carModelId)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/car/filtercarsforbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setfiliterdata(res.data.carResult)
        setfiliterdata1(res.data.carResult.carSpecs)
      })
  }

  const [type, settype] = useState([])

  const getallcartypes = () => {
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
        settype(res.data.cartypeResult)
      })
  }

  const [brand, setbrand] = useState([])

  const getAllbrand = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/brand/getallactivecarbrands",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.activecarBrandResult)
      })
  }

  const [model, setmodel] = useState([])

  const getAllmodal = () => {
    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carmodel/getallactivecarmodels",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setmodel(res.data.modelResult)
      })
  }

  const [tagging, settagging] = useState([])

  console.log(tagging)

  const [address, setaddress] = useState("")

  const [coordinateds, setcoordinateds] = useState({
    lat: "",
    lng: "",
    address: "",
  })

  console.log(coordinateds)

  const [address1, setaddress1] = useState("")

  const [coordinateds1, setcoordinateds1] = useState({
    lat: "",
    lng: "",
    address: "",
  })

  const handleSelects = async value => {
    setaddress(value)
    geocodeByAddress(value)
      .then(results => getLatLng(results[0]))
      .then(latLng => settagging(latLng))
      .then(latLng => setcoordinateds(latLng))
  }

  const handleSelects1 = async value => {
    setaddress1(value)
    geocodeByAddress(value)
      .then(results => getLatLng(results[0]))
      .then(latLng => settagging(latLng))
      .then(latLng => setcoordinateds1(latLng))
  }

  const [infoOpen, setInfoOpen] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [markerMap, setMarkerMap] = useState({})

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey:
  //     "AIzaSyDrQG115rY50cbBDbjq2XaQGdAnlncD5e0&libraries=places&callback=initMap",
  //   libraries,
  // })
  const mapStyles = {
    height: "50vh",
    width: "100%",
  }

  const defaultCenter = {
    lat: 24.421555,
    lng: 54.576599,
  }

  const fitBounds = map => {
    const bounds = new window.google.maps.LatLngBounds()
    tagging.map(place => {
      bounds.extend(place.pos)
      return place.id
    })
    map.fitBounds(bounds)
  }

  const loadHandler = map => {
    // Store a reference to the google map instance in state
    setMapRef(map)
    // Fit map bounds to contain all markers
    fitBounds(map)
  }

  // We have to create a mapping of our places to actual Marker objects

  const markerClickHandler = place => {
    // Remember which place was clicked
    setSelectedPlace(place)

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false)
    }
    setInfoOpen(true)
  }

  const markerLoadHandler = (marker, place) => {
    return setMarkerMap(prevState => {
      return { ...prevState, [place]: marker }
    })
  }

  const [singlecar, setsinglecar] = useState([])

  const [checked, setChecked] = useState([])

  const handleChangess = (event, data) => {
    setChecked({ id: data.carId })

    const dataArray = new FormData()
    dataArray.append("_id", data.carId)

    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/car/getonecardetailsforbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setsinglecar(res.data.carResult)
      })
  }

  const [pack, setpack] = useState([])

  console.log(pack)

  const handleclics = data => {
    const dataArray = new FormData()
    dataArray.append("_id", data.carId)
    setcarId(data.carId)

    var token = datas
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/car/getonecardetailsforbooking",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setsinglecar(res.data.carResult)

        // toggleTab(activeTab + 1)
        // getpricepackages()

        const dataArrays = new FormData()
        dataArrays.append("carId", res.data.carResult._id)

        axios
          .post(
            "http://103.186.185.77:5021/api/v1/admin/carbooking/getpricepackages",
            dataArrays,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then(
            res => {
              if (res.status === 200) {
                setpack(res.data.carPrices)
              }
            },
            error => {
              if (error.response && error.response.status === 400) {
              }
            }
          )
      })
  }

  const handleChange12 = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    getcarprice(e.target.value)
  }

  const [Kms, setKms] = useState([])

  const getcarprice = val => {
    // var token = datas
    // let objData = { carId: singlecar._id, hrs: val }

    var token = datas
    const dataArray = new FormData()
    dataArray.append("carId", singlecar._id)
    dataArray.append("timeSlot", val)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getprices",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            setKms(res.data.data[0])
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
          }
        }
      )
  }

  const [IMGS, setIMGS] = useState([])

  const getpopup = data => {
    setIMGS(data)
    tog_small()
  }

  const handleInsurance = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    getinsurance(e.target.value)
  }

  const [Insurance, setInsurance] = useState([])

  const getinsurance = val => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("carId", singlecar._id)
    dataArray.append("insuranceType", val)
    dataArray.append("timeSlot", form.timeSlot)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getinsurances",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            setInsurance(res.data)
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
          }
        }
      )
  }

  const handleChange = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }

  const Handlesubmit = e => {
    e.preventDefault()
    addnewcar()
  }

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = filiterdata.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(filiterdata.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const [commentShown, setCommentShown] = useState(true)

  const toggleComment = _id => {
    setCommentShown(prev => (prev.commentShown !== _id ? _id : true))
  }

  const handlechangeprice = e => {
    var res = e.target.value.split("/")

    let myUser = { ...form }
    myUser[e.target.name] = e.target.value

    myUser["priceId"] = res[0]
    myUser["totalprice"] = res[0]

    myUser["carPriceId"] = res[0]
    setform(myUser)
  }

  const handleinsuranceprice = e => {
    var res = e.target.value.split("/")

    let myUser = { ...form }
    myUser[e.target.name] = e.target.value

    // myUser["Insuranceamount"] = res[0]

    // const price11 = Number(myUser)
    setform(myUser)
    // console.log(price11)
  }

  const [dds, setdds] = useState([])

  const [dds1, setdds1] = useState([])

  const handleChangedates = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)

    const tomorrow = new Date(e.target.value)
    tomorrow.setDate(tomorrow.getDate() + 1)
    setdds(tomorrow.toISOString().split("T")[0])

    if (form.timeSlot == "Daily") {
      const tomorrow1 = new Date(e.target.value)
      tomorrow1.setDate(tomorrow1.getDate() + 6)
      setdds1(tomorrow1.toISOString().split("T")[0])
    }

    if (form.timeSlot == "Weekly") {
      const tomorrow1 = new Date(e.target.value)
      tomorrow1.setDate(tomorrow1.getDate() + 24)
      setdds1(tomorrow1.toISOString().split("T")[0])
    }
  }

  const [total, settotal] = useState([])

  const [count, setcount] = useState([])

  const [pot, setpot] = useState([])

  const [dot, setdot] = useState([])

  const [inc, setinc] = useState([])

  const handleChangedate = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
    const fdate = new Date(form.pickupDate).getTime()

    const totaldays = new Date(e.target.value).getTime() - fdate

    const countdays = totaldays / (1000 * 60 * 60 * 24)

    const user1 = countdays * form.priceId

    const user3 = countdays * form.Insuranceamount

    const user2 = countdays * singledriver.driverUnitPrice

    setdot(user2)

    setpot(user1)

    setcount(countdays)

    setinc(user3)

    // const Gst = user1 * 0.01;
    // const Getway = user1 * 0.02;

    // const totalamount = Gst + Getway;

    // const totalamounts = totalamount + user1;

    // let strTotal = String(totalamounts);

    const strTotal = String(user1)

    const res = strTotal.split("/")

    // setgst(Gst);
    // setgetway(Getway);
    // settotal(totalamounts);

    user1["priceId"] = res
    user1["totalprice"] = res
  }


  const [piz, setpiz] = useState([])

  const [piz1, setpiz1] = useState([])

  const [piz2, setpiz2] = useState([])

  const [inss, setins] = useState([])

  const [ins2, setins2] = useState([])

  const [ins1, setins1] = useState([])

  const [res, setres] = useState([])

  const handleChangedated = e => {
    let myUser = { ...res }
    myUser[e.target.name] = e.target.value
    setres(myUser)

    var token = datas
    const dataArray = new FormData()
    dataArray.append("carId", singlecar._id)
    dataArray.append("pickupDate", form.pickupDate)
    dataArray.append("returnDate", e.target.value)
    dataArray.append("priceId", form.timeSlot)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getprices",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            setpiz(res.data)
            setpiz1(res.data.carPrice._id)
            setpiz2(res.data.carPrice.price)

          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            setres({
              returnDate: "",
            })
            toast(error.response.data.message)
          }
        }


      )


    const dataArrays = new FormData()
    dataArrays.append("carId", singlecar._id)
    dataArrays.append("pickupDate", form.pickupDate)
    dataArrays.append("returnDate", e.target.value)
    dataArrays.append("insuranceTypeSelect", form.insuranceTypeSelect)


    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getinsurances",
        dataArrays,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            setins(res.data.totalinsureprice)
            setins1(res.data.insurPrice._id)
            setins2(res.data.insurPrice.partialDailyInsureAmount)
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
            setres({
              returnDate: "",
            })

          }
        }


      )

  }

  const price1 = piz.totalprice

  const price11 = Number(price1)

  const price4 = inss

  const price44 = Number(price4)

  const price5 = singlecar.securityDeposite

  const price55 = Number(price5)

  const final = price11 + price44 + price55

  const final1 = final.toString()

  const addnewcar = () => {
    var token = datas
    const bookingid = form._id

    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))

    dataArray.append("customerId", selectedOptions.value)

    dataArray.append("pickupLocation", address)

    dataArray.append("pickupDate", form.pickupDate)

    dataArray.append("pickupTime", form.pickupTime)

    dataArray.append("returnLocation", address1)

    dataArray.append("returnDate", res.returnDate)

    dataArray.append("returnTime", form.returnTime)

    dataArray.append("carId", singlecar._id)

    dataArray.append("securityDeposit", singlecar.securityDeposite)

    dataArray.append("rideUnitPrice", piz2)

    dataArray.append("totalprice", final1)

    dataArray.append("timeSlot", piz.timeSlot)

    dataArray.append("insuranceTypeSelect", form.insuranceTypeSelect)

    dataArray.append("insuranceId", ins1)

    dataArray.append("priceId", piz1)

    dataArray.append("insurancePrice", inss)

    dataArray.append("insuranceUnitPrice", ins2)

    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/editbooking" +
        "/" +
        bookingid,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            history.push("/bookings")
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
    userList: "",
    timeSlot: "",

    insuranceTypeSelect: "",
    // Insuranceamount: "",
    address: "",
    pickupDate: "",
    pickupTime: "",
    address1: "",
    returnDate: "",
    returnTime: "",
    carId: "",
  })

  const [er, seter] = useState({
    userList: "",
    timeSlot: "",

    insuranceTypeSelect: "",
    // Insuranceamount: "",
    address: "",
    pickupDate: "",
    pickupTime: "",
    address1: "",
    returnDate: "",
    returnTime: "",
  })

  const validateFun1 = e => {
    if (activeTab == 1) {
      if (selectedOptions.value == null) {
        let error = { ...er }
        error["userList"] = "Please Select user"
        seterrorObject(error)
      } else {
        let error = { ...er }
        seterrorObject(error)
        toggleTab(activeTab + 1)
      }
    } else if (activeTab == 2) {
      if (carId == null || form.carId == "") {
        let error = { ...er }
        error["carId"] = "Please Select A car"
        seterrorObject(error)
      } else {
        let error = { ...er }
        seterrorObject(error)
        toggleTab(activeTab + 1)
      }
    } else if (activeTab == 3) {
      if (form.timeSlot == null && pis == null) {
        let error = { ...er }
        error["timeSlot"] = "Please Select Time Slot"
        seterrorObject(error)
      } else if (form.insuranceTypeSelect == null) {
        let error = { ...er }
        error["insuranceTypeSelect"] = "Please Select insurance "
        seterrorObject(error)
      }
      // else if (form.Insuranceamount == null) {
      //   let error = { ...er }
      //   error["Insuranceamount"] = "Please Select Insuranceamount"
      //   seterrorObject(error)
      // }
      else if (address == null) {
        let error = { ...er }
        error["address"] = "Please Select address"
        seterrorObject(error)
      } else if (form.pickupDate == null) {
        let error = { ...er }
        error["pickupDate"] = "Please Select pickupDate"
        seterrorObject(error)
      } else if (form.pickupTime == null) {
        let error = { ...er }
        error["pickupTime"] = "Please Select pickupTime"
        seterrorObject(error)
      } else if (address1 == null) {
        let error = { ...er }
        error["address1"] = "Please Select address1"
        seterrorObject(error)
      } else if (res.returnDate == null) {
        let error = { ...er }
        error["returnDate"] = "Please Select returnDate"
        seterrorObject(error)
      } else if (form.returnTime == null) {
        let error = { ...er }
        error["returnTime"] = "Please Select returnTime"
        seterrorObject(error)
      } else {
        let error = { ...er }
        seterrorObject(error)
        toggleTab(activeTab + 1)
      }
    }
  }

  const [singleid, setsingleid] = useState([])
  console.log(singleid)

  const [singletime, setsingletime] = useState([])

  const [pis, setpis] = useState([])

  console.log(pis)

  const custid = sessionStorage.getItem("bookingId")

  const getonebooking = () => {
    var token = datas
    const dataArray = new FormData()

    dataArray.append("_id", custid)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/geteditbookingdetails",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.bookingResult)
        setres(res.data.bookingResult)
        setSelectedOptions(res.data.bookingResult.customerObj)

        const customerId = res.data.bookingResult.customerId


        setpis(res.data.bookingResult.priceId)

        // getonecustomer1(customerId)

        var token = datas
        const dataArrayss = new FormData()
        dataArrayss.append("_id", customerId)

        axios
          .post(
            "http://103.186.185.77:5021/api/v1/admin/customer/getdetailsbyid",
            dataArrayss,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then(res => {
            setforms(res.data.customerResult)
          })

        const carid = res.data.bookingResult.carId

        setaddress(res.data.bookingResult.pickupLocation)
        setaddress1(res.data.bookingResult.returnLocation)


        const picup = res.data.bookingResult.pickupDate
        const rent = res.data.bookingResult.returnDate
        const priceid = res.data.bookingResult.priceId
        const rncid = res.data.bookingResult.insuranceTypeSelect



        const dataArrayssss = new FormData()

        dataArrayssss.append("carId", carid)
        dataArrayssss.append("pickupDate", picup)
        dataArrayssss.append("returnDate", rent)
        dataArrayssss.append("priceId", priceid)

        axios
          .post(
            "http://103.186.185.77:5021/api/v1/admin/carbooking/getprices",
            dataArrayssss,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then(
            res => {
              if (res.status === 200) {
                setpiz(res.data)
                setpiz1(res.data.carPrice._id)
                setpiz2(res.data.carPrice.price)

              }
            },
            error => {
              if (error.response && error.response.status === 400) {
                toast(error.response.data.message)
              }
            }


          )


        const dataArraysss = new FormData()
        dataArraysss.append("carId", carid)
        dataArraysss.append("pickupDate", picup)
        dataArraysss.append("returnDate", rent)
        dataArraysss.append("insuranceTypeSelect", rncid)


        axios
          .post(
            "http://103.186.185.77:5021/api/v1/admin/carbooking/getinsurances",
            dataArraysss,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then(
            res => {
              if (res.status === 200) {
                setins(res.data.totalinsureprice)
                setins1(res.data.insurPrice._id)
              }
            },
            error => {
              if (error.response && error.response.status === 400) {
                toast(error.response.data.message)

              }
            }

          )
          const dataArraysd = new FormData()
          dataArraysd.append("carId", carid)
          axios
            .post(
              "http://103.186.185.77:5021/api/v1/admin/carbooking/getpricepackages",
              dataArraysd,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            )
            .then(
              res => {
                if (res.status === 200) {
                  setpack(res.data.carPrices)
                }
              },
              error => {
                if (error.response && error.response.status === 400) {
                }
              }
            )


            const dataArraydf = new FormData()
            dataArraydf.append("_id", carid)

        
            var token = datas
            axios
              .post(
                "http://103.186.185.77:5021/api/v1/admin/car/getonecardetailsforbooking",
                dataArraydf,
                {
                  headers: { Authorization: `Bearer ${token}` },
                }
              )
              .then(res => {
                setsinglecar(res.data.carResult)})
        

      })
  }

  const getinsurance1 = data2 => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("carId", singleid)
    dataArray.append("insuranceType", data2)
    dataArray.append("timeSlot", singletime)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getinsurances",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            setInsurance(res.data)
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
          }
        }
      )
  }

  const getcarprice1 = data2 => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("carId", singleid)
    dataArray.append("timeSlot", data2)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getprices",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            setKms(res.data.data[0])
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
          }
        }
      )
  }

  const [coup, setcoup] = useState([])

  const getcoup = val => {
    var token = datas

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/getallavailbecoupons",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            setcoup(res.data.coupons)
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
          }
        }
      )
  }

  const [coupapply, setccoupapply] = useState([])


  const [coupapplys, setccoupapplys] = useState([])

  const handle = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value

    var token = datas
    const dataArray = new FormData()
    dataArray.append("couponCode", e.target.value)
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/carbooking/couponvalidcheck",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setccoupapply(res.data)
        setccoupapplys(res.data.couponData.amount)
        const apply = res.data.couponData.amount

        const applys = piz.totalprice - apply

        let myUser = { ...piz }

        var applysString = applys.toString()

        console.log(applysString)

        var res = applysString.split("/")

        myUser["totalprice"] = res

        setpiz(myUser)

        // setpiz(applys)
      })
  }





  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDrQG115rY50cbBDbjq2XaQGdAnlncD5e0",
    libraries,
  })

  const [markers, setMarkers] = useState([
    {
      position: {
        lat: 25.276987,
        lng: 55.296249,
      },
    },
    {
      position: {
        lat: 25.276987,
        lng: 25.276987,
      },
    },
  ])

  const containerStyle = {
    width: "100%",
    height: "400px",
  }

  const center = {
    lat: 25.276987,
    lng: 55.296249,
  }

  const onLoad = marker => {
    console.log("marker: ", marker)
  }

  const onUnmount = marker => {
    console.log("marker: ", marker)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Add Booking" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Form
                    onSubmit={e => {
                      Handlesubmit(e)
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
                                <i className="fas fa-car"></i>
                              </span>{" "}
                              Customer Info
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
                              Select Car
                            </NavLink>
                          </NavItem>
                          {/* <NavItem
                            className={classnames({ current: activeTab === 3 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 3,
                              })}
                              onClick={() => {
                                setactiveTab(3)
                              }}
                              disabled={!(passedSteps || []).includes(3)}
                            >
                              <span className="number">
                                <i className="fas fa-images"></i>
                              </span>{" "}
                              Add-ons
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 4 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 4,
                              })}
                              onClick={() => {
                                setactiveTab(4)
                              }}
                              disabled={!(passedSteps || []).includes(4)}
                            >
                              <span className="number">
                                <i className="fas fa-money-check-alt"></i>
                              </span>{" "}
                              Date & Location
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 5 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 5,
                              })}
                              onClick={() => {
                                setactiveTab(5)
                              }}
                              disabled={!(passedSteps || []).includes(5)}
                            >
                              <span className="number">
                                <i className="fas fa-users-cog"></i>
                              </span>{" "}
                              Payment
                            </NavLink>
                          </NavItem> */}

                          <NavItem
                            className={classnames({ current: activeTab === 3 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 3,
                              })}
                              onClick={() => {
                                setactiveTab(3)
                              }}
                              disabled={!(passedSteps || []).includes(3)}
                            >
                              <span className="number">
                                <i className="fas fa-images"></i>
                              </span>{" "}
                              Date & Location
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 4 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 4,
                              })}
                              onClick={() => {
                                setactiveTab(4)
                              }}
                              disabled={!(passedSteps || []).includes(4)}
                            >
                              <span className="number">
                                <i className="fas fa-money-check-alt"></i>
                              </span>{" "}
                              Payment
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                      <div className="content clearfix mt-4">
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId={1}>
                            <Row>
                              <Col
                                style={{ borderRight: "2px solid #01304a" }}
                                md="4"
                              >
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Select user
                                  </Label>
                                  <Select
                                    style={{ width: "100%" }}
                                    required
                                    options={optionGroup1}
                                    placeholder="Select Users"
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                    isSearchable={true}
                                    name="userList"
                                  />
                                </div>
                                <small style={{ color: "#ff0000" }}>
                                  {errorObject.userList}
                                </small>
                                <div
                                  style={{
                                    padding: "20px",
                                  }}
                                  className="mt-4"
                                >
                                  <Row>
                                    {/* <Col>
                                      {" "}
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="exampleRadios"
                                          id="exampleRadios5"
                                          defaultValue="option5"
                                          defaultChecked
                                          value={form123.option3}
                                          onChange={e => {
                                            handleChange1234(e)
                                          }}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="exampleRadios5"
                                        >
                                          Self Drive
                                        </label>
                                      </div>
                                    </Col> */}
                                    {/*<Col>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios6"
                                        defaultValue="option6"
                                        value={form123.option4}
                                        onChange={e => {
                                          handleChange1234(e)
                                        }}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios6"
                                      >
                                        Addtional Driver
                                      </label>
                                    </div>
                                  </Col>*/}
                                  </Row>
                                </div>

                                {form123.exampleRadios == "option6" ? (
                                  <div className="mb-3">
                                    {/* <Label
                                    className="mt-4"
                                    for="basicpill-declaration-input10"
                                  >
                                    Search by Name
                                    /Phone No./License
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-Declaration-input10"
                                    placeholder="Search....."
                                    required
                                  /> */}
                                    <Label for="basicpill-firstname-input1">
                                      Select Driver
                                    </Label>
                                    <Select
                                      style={{ width: "100%" }}
                                      required
                                      options={optionGroup11}
                                      placeholder="Select driver"
                                      value={selectedOptions1}
                                      onChange={handleSelect1}
                                      isSearchable={true}
                                      name="userList"
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                              </Col>
                              <Col md="8">
                                <h6>Customer Details</h6>
                                <div className="text-center">
                                  {forms == "" ? (
                                    ""
                                  ) : (
                                    <img
                                      style={{ width: "100px" }}
                                      src={
                                        "http://103.186.185.77:5021/" +
                                        forms.profilePic
                                      }
                                      alt="profile"
                                    />
                                  )}
                                  {/* {forms.profilePic == "" || "undefined" ? (
                                  <img style={{ width: "100px" }} src={car2} />
                                ) : (
                                  ""
                                )} */}
                                </div>
                                <Row className="mt-5">
                                  <Col md={6}>
                                    <div className="row ">
                                      <div className="col col-sm-4">
                                        <p>
                                          <b>Name</b>
                                        </p>
                                        <p>
                                          <b>Mobile No </b>
                                        </p>
                                        <p>
                                          <b>Email </b>
                                        </p>
                                      </div>
                                      <div className="col col-sm-8">
                                        <p>: {forms.customerName}</p>

                                        <p>: {forms.phone}</p>
                                        <p>:{forms.email}</p>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <Row>
                                      <Col>
                                        <p>
                                          <b>Licence </b>
                                        </p>
                                        <p>
                                          <b>Licence Issued Date </b>
                                        </p>
                                        <p>
                                          <b>Licence Expiry Date</b>
                                        </p>
                                      </Col>
                                      <Col>
                                        <p>: {forms.dlNumber}</p>
                                        <p>: {forms.dlIssueDate}</p>
                                        <p>: {forms.dlExpiryDate}</p>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId={2}>
                            <Row>
                              <Col md={12}>
                                <Form
                                  onSubmit={e => {
                                    handleSubmitfiliter(e)
                                  }}
                                >
                                  <div style={{ padding: "10px" }}>
                                    <Row
                                      style={{
                                        padding: "5px",
                                        border: "1px solid gray",
                                      }}
                                    >
                                      <Col md={3}>
                                        <select
                                          style={{ padding: "12px" }}
                                          className="form-select"
                                          onChange={e => {
                                            handlefiliter(e)
                                          }}
                                          value={form.carTypeId}
                                          name="carTypeId"
                                        >
                                          <option value="">Select</option>
                                          {type.map((data, key) => {
                                            return (
                                              <option
                                                key={key}
                                                value={data._id}
                                              >
                                                {data.title}
                                              </option>
                                            )
                                          })}
                                        </select>
                                      </Col>
                                      <Col md={3}>
                                        <select
                                          style={{ padding: "12px" }}
                                          className="form-select"
                                          onChange={e => {
                                            handlefiliter(e)
                                          }}
                                          value={form.carBrandId}
                                          name="carBrandId"
                                        >
                                          {" "}
                                          <option value="">Select</option>
                                          {brand.map((data, key) => {
                                            return (
                                              <option
                                                key={key}
                                                value={data._id}
                                              >
                                                {data.brandName}
                                              </option>
                                            )
                                          })}
                                        </select>
                                      </Col>
                                      <Col md={3}>
                                        <select
                                          style={{ padding: "12px" }}
                                          className="form-select"
                                          onChange={e => {
                                            handlefiliter(e)
                                          }}
                                          value={form.carModelId}
                                          name="carModelId"
                                        >
                                          {" "}
                                          <option value="">Select</option>
                                          {model.map((data, key) => {
                                            return (
                                              <option
                                                key={key}
                                                value={data._id}
                                              >
                                                {data.model_name}
                                              </option>
                                            )
                                          })}
                                        </select>
                                      </Col>
                                      <Col md={3}>
                                        <Button
                                          style={{ width: "100px" }}
                                          className="mt-2"
                                          color="primary"
                                          type="submit"
                                        >
                                          Search
                                        </Button>
                                      </Col>
                                    </Row>
                                  </div>{" "}
                                </Form>

                                {lists.map((data, key) => (
                                  <div
                                    style={{
                                      padding: "20px",
                                      border: "1px solid gray",
                                    }}
                                    key={key}
                                    className="mt-3"
                                  >
                                    <Row>
                                      <h5>{data.carType}</h5>
                                      <Col md="4">
                                        <img
                                          onClick={tog_small2}
                                          target="_blank"
                                          className="mt-3"
                                          src={
                                            "http://103.186.185.77:5021/" +
                                            data.carImage[0]
                                          }
                                          style={{
                                            width: "80%",
                                            height: "100%",
                                            cursor: "pointer",
                                            borderRadius: "10px",
                                          }}
                                        />
                                      </Col>
                                      <Col md="6">
                                        <h4 className="mt-3">
                                          {" "}
                                          {data.carModelName}
                                        </h4>

                                        {/* <div className="mb-3 row"><div className="col-md-6"><div><p className="text-muted"><i className="fa fa-caret-right font-size-16 align-middle text-primary me-2"></i>Fit: Regular fit</p></div><div><p className="text-muted"><i className="fa fa-caret-right font-size-16 align-middle text-primary me-2"></i>Highest quality fabric</p></div><div><p className="text-muted"><i className="fa fa-caret-right font-size-16 align-middle text-primary me-2"></i>Suitable for all weather condition</p></div><div><p className="text-muted"><i className="fa fa-caret-right font-size-16 align-middle text-primary me-2"></i>Excellent Washing and Light Fastness</p></div></div><div className="col-md-6"><div><p className="text-muted"><i className="fa fa-caret-right font-size-16 align-middle text-primary me-2"></i>Fit:Regular fit</p></div><div><p className="text-muted"><i className="fa fa-caret-right font-size-16 align-middle text-primary me-2"></i>Highest quality fabric</p></div><div><p className="text-muted"><i className="fa fa-caret-right font-size-16 align-middle text-primary me-2"></i>Suitable for all weather condition</p></div><div><p className="text-muted"><i className="fa fa-caret-right font-size-16 align-middle text-primary me-2"></i>Excellent Washing and Light Fastness</p></div></div></div> */}

                                        <Row>
                                          <Col>
                                            <span>
                                              Color :{" "}
                                              <b>{data.carColorAvailble}</b>
                                            </span>{" "}
                                            <br />
                                            <span>
                                              No.of Seats :{" "}
                                              <b>{data.carModelName}</b>
                                            </span>
                                            <br />
                                            <span>
                                              Make (Year) :{" "}
                                              <b>{data.carVersion}</b>
                                            </span>
                                            <br />
                                            <span>
                                              Boot Capacity :{" "}
                                              <b>{data.carBootCapacity}</b>
                                            </span>
                                            <br />
                                          </Col>
                                          <Label
                                            style={{ cursor: "pointer" }}
                                            className="text-primary"
                                            // onClick={toggle}
                                            // onClick={() =>
                                            //   handleClicks(data._id)
                                            // }
                                            onClick={() =>
                                              toggleComment(data.carId)
                                            }
                                          >
                                            Car Info
                                          </Label>
                                        </Row>
                                      </Col>
                                      <Col
                                        // style={{ background: "#f5f5f5" }}
                                        md="2"
                                      >
                                        <p className="mt-3 ">
                                          Daily :{" "}
                                          <b>{data.carPrices.dayprice} AED</b>
                                        </p>

                                        <p className="mt-3 ">
                                          Weekly :{" "}
                                          <b>{data.carPrices.weekprice} AED</b>
                                        </p>

                                        <p className="mt-3 ">
                                          Monthly :{" "}
                                          <b>
                                            {data.carPrices.monthOneprice}AED
                                          </b>
                                        </p>

                                        <div className="text-center">
                                          {/* <label
                                            className="btn btn-outline-primary"
                                            onClick={() => {
                                              handleclics(data)
                                            }}

                                          >

                                            <input type="radio" id="radiomiddle" name="align" value={form.singlecar} checked={form.singlecar == data._id} />Select
                                          </label> */}
                                          {/* {form.carId + data.carId} */}
                                          <input
                                            type="radio"
                                            className="btn-check"
                                            id={`btn-check-2-outlined${key}`}
                                            name="align"
                                            value={data._id}
                                            defaultChecked={
                                              form.carId === data._id
                                            }
                                            onClick={() => {
                                              handleclics(data)
                                            }}
                                          />
                                          <label
                                            className="btn btn-outline-primary"
                                            htmlFor={`btn-check-2-outlined${key}`}
                                          >
                                            Select
                                          </label>
                                        </div>
                                      </Col>
                                    </Row>

                                    {commentShown == data.carId ? (
                                      <>
                                        <Row className="mt-2">
                                          <Col md="4"></Col>
                                          <Col md="8">
                                            <div
                                              className="container"
                                              id="example-collapse-text"
                                            >
                                              <p>
                                                A small and very economical city
                                                car. The perfect choice for
                                                urban driving or as a shopping
                                                car.
                                              </p>

                                              <div className="mb-3 row">
                                                <div className="col-md-6">
                                                  <Table className="table table-bordered mb-4 mt-3">
                                                    <thead>
                                                      <tr>
                                                        <th>Features</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      {data.carFeatures.map(
                                                        (datass, iss) => (
                                                          <tr key={key}>
                                                            <td>
                                                              {" "}
                                                              <img
                                                                src={
                                                                  "http://103.186.185.77:5021/" +
                                                                  datass.featureImage
                                                                }
                                                                style={{
                                                                  width: "20px",
                                                                }}
                                                              />
                                                              {
                                                                datass.featureName
                                                              }
                                                            </td>
                                                          </tr>
                                                        )
                                                      )}{" "}
                                                    </tbody>
                                                  </Table>
                                                </div>
                                                <div className="col-md-6">
                                                  <Table className="table table-bordered mb-4 mt-3">
                                                    <thead>
                                                      <tr>
                                                        <th>Specifications</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      {data.carSpecs.map(
                                                        (datas, is) => (
                                                          <tr key={key}>
                                                            <td>
                                                              {" "}
                                                              <img
                                                                src={
                                                                  "http://103.186.185.77:5021/" +
                                                                  datas.specImg
                                                                }
                                                                style={{
                                                                  width: "20px",
                                                                }}
                                                              />
                                                              {datas.specName}
                                                            </td>
                                                          </tr>
                                                        )
                                                      )}{" "}
                                                    </tbody>
                                                  </Table>
                                                </div>
                                              </div>
                                            </div>
                                          </Col>
                                        </Row>
                                      </>
                                    ) : null}
                                  </div>
                                ))}
                                <div
                                  className="mt-3"
                                  style={{ float: "right" }}
                                >
                                  {/* <Stack spacing={2}> */}
                                  <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"pagination"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"disabled"}
                                    activeClassName={"active"}
                                    total={lists.length}
                                  />
                                  {/* </Stack> */}
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId={3}>
                            <div>
                              {" "}
                              <h6>Contract</h6>
                              <Row className="mt-3">
                                {" "}
                                <Col md={4}>
                                  {" "}
                                  <div>
                                    <label>Select Package</label>
                                    <select
                                      value={form.timeSlot}
                                      name="timeSlot"
                                      // value={pis}
                                      defaultValue={pis}
                                      onChange={e => {
                                        handleChange12(e)
                                      }}
                                      className="form-select"
                                      required
                                    >

                                      <option value="">Select</option>
                                      {pack.map((data, key) => {
                                        return (
                                          <option key={key} value={data._id} selected={data._id == pis}>
                                            {data.packName} / {data.price} AED /{" "}
                                            {data.mileage} kMS
                                            {/* {data._id + pis} */}
                                          </option>
                                        )
                                      })}
                                    </select>
                                  </div>

                                  <small style={{ color: "#ff0000" }}>
                                    {errorObject.timeSlot}
                                  </small>
                                </Col>
                                {/* <Col md={3}>
                                  <label>km / Price</label>
                                  <select
                                    className="form-select"
                                    required
                                    name="priceId"
                                    value={form.priceId}
                                    onChange={e => handlechangeprice(e)}
                                  >
                                    <option value="">Select price </option>

                                    <option value={Kms.price}>
                                      {Kms.price} AED
                                    </option>
                                  </select>
                                  <small style={{ color: "#ff0000" }}>
                                    {errorObject.priceId}
                                  </small>
                                </Col> */}
                                <Col md={4}>
                                  {" "}
                                  <div>
                                    <label>Select Insurance</label>
                                    <select
                                      value={form.insuranceTypeSelect}
                                      // value={pis}
                                      // defaultValue={pis}
                                      name="insuranceTypeSelect"
                                      onChange={e => {
                                        handleInsurance(e)
                                      }}
                                      className="form-select"
                                      required
                                    >
                                      <option value="">
                                        Select Insurance type
                                      </option>
                                      <option value="Partial">Basic</option>
                                      <option value="Full">
                                        Full Insurance
                                      </option>
                                    </select>
                                    <small style={{ color: "#ff0000" }}>
                                      {errorObject.insuranceTypeSelect}
                                    </small>
                                  </div>
                                </Col>
                                {/* <Col md={4}>
                                  {" "}
                                  <div>
                                    <label>Select Insurance Amount</label>
                                    <select
                                      value={form.Insuranceamount}
                                      name="Insuranceamount"
                                      onChange={e => {
                                        handleinsuranceprice(e)
                                      }}
                                      className="form-select"
                                      required
                                    >
                                      <option value="">
                                        Select Insurance type
                                      </option>

                                      <option
                                        value={Insurance.rideInsureAmount}
                                      >
                                        {Insurance.rideInsureAmount} AED
                                      </option>
                                    </select>
                                    <small style={{ color: "#ff0000" }}>
                                      {errorObject.Insuranceamount}
                                    </small>
                                  </div>
                                </Col> */}
                              </Row>
                              <Row className="mt-5">
                                <Col md={6}>
                                  <div>
                                    <FormGroup className="mb-3">
                                      <Label>PICKUP LOCATION</Label>

                                      <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                          Location{" "}
                                          <span className="text-danger">*</span>
                                        </Label>
                                        <PlacesAutocomplete
                                          value={address}
                                          onChange={setaddress}
                                          onSelect={handleSelects}
                                        >
                                          {({
                                            getInputProps,
                                            suggestions,
                                            getSuggestionItemProps,
                                            loading,
                                          }) => (
                                            <div
                                              key={suggestions.description}
                                              className="form-group "
                                            >
                                              <input
                                                {...getInputProps({
                                                  placeholder:
                                                    "Search location ...",
                                                  className:
                                                    "location-search-input form-control",
                                                })}
                                              />
                                              <div className="autocomplete-dropdown-container">
                                                {loading && (
                                                  <div>Loading...</div>
                                                )}
                                                {suggestions.map(suggestion => {
                                                  const className =
                                                    suggestion.active
                                                      ? "suggestion-item--active"
                                                      : "suggestion-item"
                                                  // inline style for demonstration purpose
                                                  const style =
                                                    suggestion.active
                                                      ? {
                                                        backgroundColor:
                                                          "#fafafa",
                                                        cursor: "pointer",
                                                      }
                                                      : {
                                                        backgroundColor:
                                                          "#ffffff",
                                                        cursor: "pointer",
                                                      }

                                                  return (
                                                    // <></>
                                                    <div
                                                      {...getSuggestionItemProps(
                                                        suggestion,
                                                        {
                                                          className,
                                                          style,
                                                        }
                                                      )}
                                                      key={suggestion.placeId}
                                                    >
                                                      <span>
                                                        {suggestion.description}
                                                      </span>
                                                    </div>
                                                  )
                                                })}
                                              </div>
                                            </div>
                                          )}
                                        </PlacesAutocomplete>
                                        <small style={{ color: "#ff0000" }}>
                                          {errorObject.address}
                                        </small>
                                      </div>
                                    </FormGroup>
                                    <Row className="mt-4">
                                      <Col md={5}>
                                        <FormGroup className="mb-3">
                                          <Label>PICKUP DATE</Label>

                                          <Input
                                            type="date"
                                            className="form-control"
                                            name="pickupDate"
                                            value={form.pickupDate}
                                            onChange={e => {
                                              handleChangedates(e)
                                            }}
                                            min={
                                              new Date()
                                                .toISOString()
                                                .split("T")[0]
                                            }
                                          />
                                          <small style={{ color: "#ff0000" }}>
                                            {errorObject.pickupDate}
                                          </small>
                                        </FormGroup>
                                      </Col>
                                      <Col md={4}>
                                        <FormGroup className="mb-3">
                                          <Label>PICKUP TIME</Label>
                                          <Input
                                            type="time"
                                            className="form-control"
                                            name="pickupTime"
                                            value={form.pickupTime}
                                            onChange={e => {
                                              handleChange(e)
                                            }}
                                          />
                                          <small style={{ color: "#ff0000" }}>
                                            {errorObject.pickupTime}
                                          </small>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </div>
                                  <div>
                                    <FormGroup className="mb-3">
                                      <Label>RETURN LOCATION</Label>

                                      <PlacesAutocomplete
                                        value={address1}
                                        onChange={setaddress1}
                                        onSelect={handleSelects1}
                                      >
                                        {({
                                          getInputProps,
                                          suggestions,
                                          getSuggestionItemProps,
                                          loading,
                                        }) => (
                                          <div
                                            key={suggestions.description}
                                            className="form-group "
                                          >
                                            <input
                                              {...getInputProps({
                                                placeholder:
                                                  "Search location ...",
                                                className:
                                                  "location-search-input form-control",
                                              })}
                                            />
                                            <div className="autocomplete-dropdown-container">
                                              {loading && <div>Loading...</div>}
                                              {suggestions.map(suggestion => {
                                                const className =
                                                  suggestion.active
                                                    ? "suggestion-item--active"
                                                    : "suggestion-item"
                                                // inline style for demonstration purpose
                                                const style = suggestion.active
                                                  ? {
                                                    backgroundColor:
                                                      "#fafafa",
                                                    cursor: "pointer",
                                                  }
                                                  : {
                                                    backgroundColor:
                                                      "#ffffff",
                                                    cursor: "pointer",
                                                  }

                                                return (
                                                  // <></>
                                                  <div
                                                    {...getSuggestionItemProps(
                                                      suggestion,
                                                      {
                                                        className,
                                                        style,
                                                      }
                                                    )}
                                                    key={suggestion.placeId}
                                                  >
                                                    <span>
                                                      {suggestion.description}
                                                    </span>
                                                  </div>
                                                )
                                              })}
                                            </div>
                                          </div>
                                        )}
                                      </PlacesAutocomplete>
                                      <small style={{ color: "#ff0000" }}>
                                        {errorObject.address1}
                                      </small>
                                    </FormGroup>
                                    <Row className="mt-4">
                                      <Col md={5}>
                                        <FormGroup className="mb-3">
                                          <Label>RETURN DATE</Label>

                                          <Input
                                            type="date"
                                            className="form-control"
                                            name="returnDate"
                                            min={dds}
                                            max={dds1}
                                            value={res.returnDate}
                                            onChange={e => {
                                              handleChangedated(e)
                                            }}
                                          />
                                          <small style={{ color: "#ff0000" }}>
                                            {errorObject.returnDate}
                                          </small>
                                        </FormGroup>
                                      </Col>
                                      <Col md={4}>
                                        <FormGroup className="mb-3">
                                          <Label>RETURN TIME</Label>

                                          <Input
                                            type="time"
                                            className="form-control"
                                            name="returnTime"
                                            value={form.returnTime}
                                            onChange={e => {
                                              handleChange(e)
                                            }}
                                          />
                                          <small style={{ color: "#ff0000" }}>
                                            {errorObject.returnTime}
                                          </small>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div
                                    style={{ height: "200px", width: "100%" }}
                                  >
                                    {isLoaded ? (
                                      <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}
                                      >
                                        {markers.map((marker, index) => (
                                          <Marker
                                            key={index}
                                            position={marker.position}
                                            onLoad={onLoad}
                                            onUnmount={onUnmount}
                                          />
                                        ))}
                                      </GoogleMap>
                                    ) : (
                                      <></>
                                    )}
                                    {/* <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
        >
          <DirectionsService
            options={{
              origin: origin,
              destination: destination,
              travelMode: "DRIVING"
            }}
            callback={directionsCallback}
          />
          {response !== null && (
            <DirectionsRenderer
              options={{
                directions: response,
                markerOptions: { visible: true },
                polylineOptions: { strokeColor: "#FF0000" }
              }}
            />
          )}
        </GoogleMap> */}
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </TabPane>
                          <TabPane tabId={4}>
                            <Row>
                              <Col md={6}>
                                <div
                                  style={{
                                    background: "#f5f5f5",
                                    padding: "7px",
                                  }}
                                  className="mb-1 "
                                >
                                  <h5 className="text-center">
                                    Booking details
                                  </h5>
                                </div>
                                <div
                                  style={{
                                    background: "#f5f5f5",
                                    padding: "20px",
                                  }}
                                >
                                  <div>
                                    <span>PICKUP LOCATION</span>
                                    <br />
                                    <small>{address}</small>
                                    <hr />
                                  </div>
                                  <div>
                                    <span>PICKUP DATE, TIME</span>
                                    <br />
                                    <small>
                                      {form.pickupDate}, {form.pickupTime}
                                    </small>
                                    <hr />
                                  </div>
                                  <div>
                                    <span>RETURN LOCATION</span>
                                    <br />
                                    <small>{address1}</small>
                                    <hr />
                                  </div>
                                  <div>
                                    <span>RETURN DATE, TIME</span>
                                    <br />
                                    <small>
                                      {res.returnDate}, {form.returnTime}
                                    </small>
                                    <hr />
                                  </div>
                                  <div>
                                    <span>RENTAL PERIOD</span>
                                    <br />
                                    <small>{piz.daySlot} days </small>
                                    <hr />
                                  </div>
                                </div>
                              </Col>

                              <Col md={6}>
                                <div>
                                  <h5> Payment Details</h5>

                                  {/* <Row className="mt-5">
                                    <Col md={8}>
                                      <Label for="basicpill-declaration-input10">
                                        DO YOU HAVE A DISCOUNT CODE ?{" "}
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-Declaration-input10"
                                        value={form.couponCode}
                                        name="couponCode"
                                        onChange={e => {
                                          handleChange(e)
                                        }}
                                      />
                                    </Col>
                                    <Col md={4}>
                                      <Button className="mt-4" color="primary">
                                        Apply
                                      </Button>
                                    </Col>
                                  </Row> */}

                                  <Row className="mt-5">
                                    {/* <Col md={8}>
                                      <Label for="basicpill-declaration-input10">
                                        DO YOU HAVE A DISCOUNT CODE ?{" "}
                                      </Label>

                                      <select
                                        style={{ padding: "12px" }}
                                        className="form-select"
                                        onChange={e => {
                                          handle(e)
                                        }}
                                        value={form.couponCode}
                                        name="couponCode"
                                      >
                                        <option value="">
                                          Select DISCOUNT CODE
                                        </option>
                                        {coup.map((data, key) => {
                                          return (
                                            <option
                                              key={key}
                                              value={data.couponCode}
                                            >
                                              {data.couponCode}
                                            </option>
                                          )
                                        })}
                                      </select>
                                    </Col> */}
                                  </Row>
                                  <div>
                                    {/* <Row className="mt-5">
                                      <Col md={4}><span>Addtional Driver :</span> </Col>

                                      <Col md={4}>
                                        <div style={{ width: "130px" }}>
                                          <div className="input-group">
                                            <div className="input-group-append">
                                              <button type="button" className="btn btn-primary"
                                                onClick={handleDecrement}  >-</button>
                                            </div>
                                            <Input
                                              type="text"
                                              value={quantity}
                                              name="quantity"
                                              max="4"
                                              readOnly
                                            />
                                            <div className="input-group-prepend">
                                              <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={handleIncrement}>+
                                              </button>
                                            </div>
                                          </div>
                                        </div>

                                      </Col>

                                    </Row> */}
                                    <Row className="mt-5">
                                      <Col>
                                        <span style={{ fontSize: "13px" }}>
                                          Price :
                                        </span>
                                        <br />
                                        <span style={{ fontSize: "13px" }}>
                                          Time Slot :
                                        </span>
                                        <br />
                                        <span style={{ fontSize: "13px" }}>
                                          Total Price :
                                        </span>
                                        <br />
                                        <span style={{ fontSize: "13px" }}>
                                          Insurance Type:
                                        </span>
                                        <br />
                                        <span style={{ fontSize: "13px" }}>
                                          Insurance Amount:
                                        </span>
                                        <br />

                                        <span style={{ fontSize: "13px" }}>
                                          Security deposit :
                                        </span>
                                        <br />

                                        <span style={{ fontSize: "13px" }}>
                                          Discount Amount :
                                        </span>
                                        <br />
                                      </Col>
                                      <Col>
                                        <span
                                          style={{
                                            float: "right",
                                            color: "red",
                                          }}
                                        >
                                          {piz2}
                                        </span>

                                        <br />
                                        <span
                                          style={{
                                            float: "right",
                                            color: "red",
                                          }}
                                        >
                                          {piz.timeSlot}
                                        </span>

                                        <br />

                                        <span
                                          style={{
                                            float: "right",
                                            color: "red",
                                          }}
                                        >
                                          + {piz.totalprice}
                                        </span>

                                        <br />

                                        <span
                                          style={{
                                            float: "right",
                                            color: "red",
                                          }}
                                        >
                                          {form.insuranceTypeSelect}
                                        </span>

                                        <br />

                                        <span
                                          style={{
                                            float: "right",
                                            color: "red",
                                          }}
                                        >
                                          + {inss}
                                        </span>
                                        <br />

                                        <span
                                          style={{
                                            float: "right",
                                            color: "red",
                                          }}
                                        >
                                          + {singlecar.securityDeposite}
                                        </span>
                                        <br />

                                        <span
                                          style={{
                                            float: "right",
                                            color: "red",
                                          }}
                                        >
                                          - {coupapplys}
                                        </span>
                                        <br />
                                      </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                      <Col>
                                        <a style={{ fontSize: "15px" }}>
                                          <b>Total</b>
                                        </a>
                                      </Col>
                                      <Col>
                                        <a
                                          style={{
                                            float: "right",
                                            fontSize: "15px",
                                            color: "green",
                                          }}
                                        >
                                          <b> +{final}</b>
                                        </a>
                                      </Col>
                                    </Row>
                                    <hr />
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId={5}></TabPane>
                        </TabContent>
                      </div>
                      {activeTab === 2 ? (
                        <>
                          {errorObject.carId != "" ? (
                            <div>
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "16px",
                                }}
                              >
                                {errorObject.carId}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}{" "}
                        </>
                      ) : (
                        ""
                      )}

                      <div className="actions clearfix mt-5">
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
                            className={activeTab === 4 ? "next logbtn" : "next"}
                          >
                            <Link
                              to="#"
                              onClick={e => {
                                // toggleTab(activeTab + 1)
                                validateFun1(e)
                              }}
                            >
                              Next <i className="fas fa-arrow-circle-right"></i>
                            </Link>
                          </li>
                          <li
                            className={
                              activeTab < 4 ? "previous logbtn " : "previous"
                            }
                          >
                            <button className="btn btn-primary" type="submit">
                              Submit{" "}
                              <i className="fas fa-check-circle text-dark"></i>
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

          {/* <div className="list-container">
          <label>You Selected:</label>
          {checkedList.map((item, index) => {
            return (
              <div className="chip" key={index}>
                <p className="chip-label">{item}</p>
              </div>
            );
          })}
        </div>
 
        <div className="card-body">
          {listData.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container"  >
                <input
                  type="checkbox"
                  name="languages"
                  value={item.value}
                  onChange={handleSelectf}
                />
                <label>{item.value}</label>
              </div>
            );
          })}
        </div> */}
        </Container>

        <Modal
          size="sm"
          centered
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
        >
          <div className="modal-header">
            <h5>Driver Details</h5>
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
            <Form>
              <div>
                <img
                  src={"http://103.186.185.77:5021/" + IMGS}
                  style={{ width: "100%", height: "350px", cursor: "pointer" }}
                />
              </div>
            </Form>
          </div>
        </Modal>

        <Modal
          size="sm"
          centered
          isOpen={modal_small2}
          toggle={() => {
            tog_small2()
          }}
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
            <Form>
              <div>
                <img
                  src={"http://103.186.185.77:5021/" + IMGS}
                  style={{ width: "100%", height: "350px", cursor: "pointer" }}
                />
              </div>
            </Form>
          </div>
        </Modal>

        <Modal
          centered
          isOpen={modal_small1}
          toggle={() => {
            tog_small1()
          }}
        >
          <div className="modal-header">
            <h5>Driver Details</h5>
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
            <Form>
              <Row>
                <Col md={6}>
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
                      value={form.customerName}
                      name="customerName"
                      onChange={e => {
                        handleChange(e)
                      }}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Mobile No <span className="text-danger">*</span>
                    </Label>

                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <select
                            style={{ border: "none", background: "#eff2f7" }}
                            className=""
                          >
                            <option value="91">+91</option>
                            <option value="+971">+971</option>
                            <option value="93">93</option>
                            <option value="355">355</option>
                            <option value="213">213</option>
                          </select>
                        </div>
                      </div>
                      <input
                        required
                        value={form.phone}
                        name="phone"
                        onChange={e => {
                          handleChange(e)
                        }}
                        type="text"
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
                <Col md={6}>
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
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Gender <span className="text-danger">*</span>
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
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Date of Birth <span className="text-danger">*</span>
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
                <Col md={6}>
                  <div className="mb-3">
                    <Label for="basicpill-firstname-input3">
                      Residents Type <span className="text-danger">*</span>
                    </Label>
                    <select
                      name="residentStatus"
                      value={form.residentStatus}
                      onChange={e => {
                        handleChange(e)
                      }}
                      required
                      // onChange={1234Change}
                      className="form-select"
                    >
                      <option value="">Select</option>
                      <option value="resident">Residents</option>
                      <option value="nonResident">Non-Residents</option>
                    </select>
                    <small style={{ color: "#ff0000" }}>
                      {errorObject.residentStatus}
                    </small>
                  </div>
                </Col>
                {form.residentStatus == "resident" ? (
                  <>
                    <div>
                      <Row className="mt-3">
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input3">
                              Passport Copy{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="basicpill-firstname-input3"
                              required
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input3">
                              Residency Visa
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="basicpill-firstname-input3"
                            />
                          </div>
                        </Col>

                        <>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input3">
                                Passport Emirates ID Front
                                <span className="text-danger">*</span>
                              </Label>
                              <Input
                                type="file"
                                className="form-control"
                                id="basicpill-firstname-input3"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label for="basicpill-firstname-input1">
                                Passport Emirates ID Back
                                <span className="text-danger">*</span>
                              </Label>
                              <Input
                                type="file"
                                className="form-control"
                                id="basicpill-firstname-input1"
                                required
                              />
                            </div>
                          </Col>
                        </>
                      </Row>
                      <Row className="mt-3">
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input3">
                              UAE driving license front
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="basicpill-firstname-input3"
                              required
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input3">
                              UAE driving license back{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="basicpill-firstname-input3"
                              required
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {form.residentStatus == "nonResident" ? (
                  <>
                    <div>
                      <Row>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input3">
                              Passport Copy{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="basicpill-firstname-input3"
                              required
                            />
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input3">
                              Visa Copy{" "}
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="basicpill-firstname-input3"
                            // required
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input3">
                              License<span className="text-danger">*</span>
                            </Label>

                            <select
                              onChange={handleSelectChange1}
                              className="form-select"
                            >
                              <option value="">Select</option>
                              <option value="home">Driving License</option>
                              <option value="driving">
                                International Driving License
                              </option>
                            </select>
                          </div>
                        </Col>

                        {fieldshow1 == "home" ? (
                          <Row>
                            <Col md={6}>
                              <div className="mb-3">
                                <Label for="basicpill-firstname-input1">
                                  Driving License Front
                                  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                  type="file"
                                  className="form-control"
                                  id="basicpill-firstname-input1"
                                  required
                                />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                  Driving License Back
                                  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                  type="file"
                                  className="form-control"
                                  id="basicpill-firstname-input3"
                                  required
                                />
                              </div>
                            </Col>
                          </Row>
                        ) : (
                          ""
                        )}
                        {fieldshow1 == "driving" ? (
                          <Row>
                            <Col md={6}>
                              <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                  International Driving License Front{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                  type="file"
                                  className="form-control"
                                  id="basicpill-firstname-input3"
                                  required
                                />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                  International Driving License Back
                                  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                  type="file"
                                  className="form-control"
                                  id="basicpill-firstname-input3"
                                  required
                                />
                              </div>
                            </Col>
                          </Row>
                        ) : (
                          ""
                        )}
                      </Row>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </Row>
              <div style={{ float: "right" }}>
                <Button className="m-1" color="primary" type="submit">
                  Submit <i className="fas fa-check-circle"></i>
                </Button>
                <Button
                  onClick={() => {
                    setmodal_small1(false)
                  }}
                  color="danger"
                  type="button"
                >
                  Cancel <i className="fas fa-times-circle"></i>
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default AddBooking
