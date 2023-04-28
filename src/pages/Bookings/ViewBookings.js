import React, { useState, useEffect } from "react"
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Row,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Modal,
    Label,
    Input, CardHeader, CardTitle

} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import classnames from "classnames"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"


const libraries = ["places"]

function ViewBookings() {

    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDrQG115rY50cbBDbjq2XaQGdAnlncD5e0",
        libraries
    });

    const [markers, setMarkers] = useState([
        {
            position: {
                lat: 25.276987,
                lng: 55.296249
            }
        },
        {
            position: {
                lat: 25.276987,
                lng: 25.276987
            }
        }
    ]);
    const containerStyle = {
        width: "100%",
        height: "400px"
    };

    const center = {
        lat: 25.276987,
        lng: 55.296249
    };


    const onLoad = marker => {
        console.log("marker: ", marker);
    };

    const onUnmount = marker => {
        console.log("marker: ", marker);
    };



    let history = useHistory()

    const [activeTab1, setactiveTab1] = useState("5")
    const toggle1 = tab => {
        if (activeTab1 !== tab) {
            setactiveTab1(tab)
        }
    }

    const [modal_small, setmodal_small] = useState(false)
    function tog_small() {
        setmodal_small(!modal_small)
    }

    const [modal_small1, setmodal_small1] = useState(false)
    function tog_small1() {
        setmodal_small1(!modal_small1)
    }
    const [modal_small2, setmodal_small2] = useState(false)
    function tog_small2() {
        setmodal_small2(!modal_small2)
    }
    const [modal_small3, setmodal_small3] = useState(false)
    function tog_small3() {
        setmodal_small3(!modal_small3)
    }
    const [modal_small4, setmodal_small4] = useState(false)
    function tog_small4() {
        setmodal_small4(!modal_small4)
    }
    const [modal_small5, setmodal_small5] = useState(false)
    function tog_small5() {
        setmodal_small5(!modal_small5)
    }
    const [modal_small6, setmodal_small6] = useState(false)
    function tog_small6() {
        setmodal_small6(!modal_small6)
    }
    const [modal_small7, setmodal_small7] = useState(false)
    function tog_small7() {
        setmodal_small7(!modal_small7)
    }
    const [modal_small8, setmodal_small8] = useState(false)
    function tog_small8() {
        setmodal_small8(!modal_small8)
    }
    const [modal_small9, setmodal_small9] = useState(false)
    function tog_small9() {
        setmodal_small9(!modal_small9)
    }
    const [modal_small10, setmodal_small10] = useState(false)
    function tog_small10() {
        setmodal_small10(!modal_small10)
    }
    const [modal_small11, setmodal_small11] = useState(false)
    function tog_small11() {
        setmodal_small11(!modal_small11)
    }
    const [modal_small12, setmodal_small12] = useState(false)
    function tog_small12() {
        setmodal_small12(!modal_small12)
    }

    const [modal_small13, setmodal_small13] = useState(false)
    function tog_small13() {
        setmodal_small13(!modal_small13)
    }
    const [modal_small14, setmodal_small14] = useState(false)
    function tog_small14() {
        setmodal_small14(!modal_small14)
    }
    const [modal_small15, setmodal_small15] = useState(false)
    function tog_small15() {
        setmodal_small15(!modal_small15)
    }
    const [modal_small16, setmodal_small16] = useState(false)
    function tog_small16() {
        setmodal_small16(!modal_small16)
    }
    const [modal_small17, setmodal_small17] = useState(false)
    function tog_small17() {
        setmodal_small17(!modal_small17)
    }
    const [modal_small18, setmodal_small18] = useState(false)
    function tog_small18() {
        setmodal_small18(!modal_small18)
    }
    const [modal_small19, setmodal_small19] = useState(false)
    function tog_small19() {
        setmodal_small19(!modal_small19)
    }
    const [modal_small20, setmodal_small20] = useState(false)
    function tog_small20() {
        setmodal_small20(!modal_small20)
    }
    const [modal_small21, setmodal_small21] = useState(false)
    function tog_small21() {
        setmodal_small21(!modal_small21)
    }
    const [modal_small22, setmodal_small22] = useState(false)
    function tog_small22() {
        setmodal_small22(!modal_small22)
    }
    const [modal_small23, setmodal_small23] = useState(false)
    function tog_small23() {
        setmodal_small23(!modal_small23)
    }
    const [modal_small24, setmodal_small24] = useState(false)
    function tog_small24() {
        setmodal_small24(!modal_small24)
    }
    const [modal_small25, setmodal_small25] = useState(false)
    function tog_small25() {
        setmodal_small25(!modal_small25)
    }
    const [modal_small26, setmodal_small26] = useState(false)
    function tog_small26() {
        setmodal_small26(!modal_small26)
    }
    const [modal_small27, setmodal_small27] = useState(false)
    function tog_small27() {
        setmodal_small27(!modal_small27)
    }
    const [modal_small28, setmodal_small28] = useState(false)
    function tog_small28() {
        setmodal_small28(!modal_small28)
    }

    const [modal_small29, setmodal_small29] = useState(false)
    function tog_small29() {
        setmodal_small29(!modal_small29)
    }

    const [modal_small30, setmodal_small30] = useState(false)
    function tog_small30() {
        setmodal_small30(!modal_small30)
    }

    const [modal_small31, setmodal_small31] = useState(false)
    function tog_small31() {
        setmodal_small31(!modal_small31)
    }



    const [form, setform] = useState([])

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
    const [form1, setform1] = useState([])

    const custid = sessionStorage.getItem("dataid")

    const getonecustomer = () => {
        var token = datas
        const dataArray = new FormData()

        dataArray.append("_id", "63fcbd09d4418340034b0291")

        axios
            .post(
                "http://103.186.185.77:5021/api/v1/admin/customer/getdetailsbyid",
                dataArray,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(res => {
                setform1(res.data.customerResult)
                setform(res.data.customerResult)
            })
    }

    useEffect(() => {
        getAllCountry()
        getonecustomer()
    }, [])

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

    const [IMGS, setIMGS] = useState([])

    console.log(IMGS)

    const getpopup = data => {
        setIMGS(data)
        tog_small35()
    }

    function tog_small() {
        setmodal_small(!modal_small)
    }

    const [modal_small35, setmodal_small35] = useState(false)

    function tog_small35() {
        setmodal_small35(!modal_small35)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addstaff()
    }

    const handlechange1 = e => {
        const myform = { ...form1 }
        myform[e.target.name] = e.target.value
        setform1(myform)
    }

    const addstaff = () => {
        var token = datas
        const driverid = sessionStorage.getItem("dataid")
        const dataArray = new FormData()
        dataArray.append("countryId", form1.countryId)
        dataArray.append("stateName", form1.stateName)
        dataArray.append("cityName", form1.cityName)
        dataArray.append("zipCode", form1.zipCode)
        dataArray.append("status", form1.status)
        dataArray.append("address", form1.address)
        dataArray.append("emaiVerify", form1.emaiVerify)
        dataArray.append("smsVerify", form1.smsVerify)

        axios
            .patch(
                "http://103.186.185.77:5021/api/v1/admin/customer/updatecustomerinview" +
                "/" +
                driverid,
                dataArray,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(
                res => {
                    if (res.status === 200) {
                        toast(res.data.message)
                        setmodal_small1(false)
                        getonecustomer()
                        // clearForm()
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
                <Container fluid={true}>
                    <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Booking Details" />

                    <Row>
                        <Col xl="12">
                            <Button
                                onClick={history.goBack}
                                className="mb-1  m-1"
                                style={{ float: "right" }}
                                color="primary "
                            >
                                <i className="far fa-arrow-alt-circle-left"></i>
                                Back
                            </Button>
                        </Col>
                    </Row>

                    <Col md={10}>
                        <div >
                            <div className="mb-3">
                                <Nav pills className="navtab-bg nav-justified" >
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab1 === "5",
                                            })}
                                            onClick={() => {
                                                toggle1("5")
                                            }}
                                        >
                                            Booking Map
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab1 === "6",
                                            })}
                                            onClick={() => {
                                                toggle1("6")
                                            }}
                                        >
                                            Status Update
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab1 === "7",
                                            })}
                                            onClick={() => {
                                                toggle1("7")
                                            }}
                                        >
                                            Customer Details
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab1 === "8",
                                            })}
                                            onClick={() => {
                                                toggle1("8")
                                            }}
                                        >
                                            Customer Documents
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab1 === "9",
                                            })}
                                            onClick={() => {
                                                toggle1("9")
                                            }}
                                        >
                                            Addtional Driver Details
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                    </Col>

                    <TabContent activeTab={activeTab1} className="p-1 text-muted">
                        <TabPane tabId="5">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col md={12}>
                                            <div className="mt-1 mb-3">
                                                <h5>Booking Location</h5>


                                                {/* {isLoaded ? (
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
                                                )} */}
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                                                    width="100%" height="500" style={{ border: 0 }}
                                                    aria-hidden="false"></iframe>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </TabPane>

                        <TabPane tabId="6">
                            <Row>
                                <div className="col-md-6 col-xl-3">
                                    <div className="card jobs-categories">
                                        <div className="card-body">
                                            <a onClick={tog_small} className="px-3 py-2 text-primary rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Allocate Car
                                            </a><a className="px-3 py-2 rounded text-success bg-light bg-opacity-50 d-block mb-2" >
                                                Start Rental</a>
                                            <a onClick={tog_small3} className="px-3 py-2 text-danger rounded bg-light bg-opacity-50 d-block mb-2" >
                                                End Rental
                                            </a><a onClick={tog_small4} className="px-3 py-2 text-info rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Payment</a>
                                            <a onClick={tog_small5} className="px-3 py-2 text-warning rounded bg-light bg-opacity-50 d-block mb-2" >
                                                PaymentCC </a>
                                            <a onClick={tog_small6} className="px-3 py-2 text-primary  rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Refund Security</a>
                                            <a onClick={tog_small7} className="px-3 py-2  text-success rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Fuel Charges</a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 text-danger  d-block mb-2" >
                                                Update Contract</a>
                                            <a onClick={tog_small8} className="px-3 py-2 text-info  rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Replace
                                                Car</a>
                                            <a className="px-3 py-2 rounded text-warning bg-light text-primary bg-opacity-50 d-block mb-2" >
                                                Collect Now</a>
                                            <a className="px-3 py-2 rounded bg-light   bg-opacity-50 d-block mb-2" >
                                                Online Extend</a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-success" >
                                                Print Contract</a>
                                            <a onClick={tog_small9} className="px-3 py-2 rounded text-info text-danger bg-opacity-50 d-block mb-2" >
                                                Early Return</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-xl-3">
                                    <div className="card jobs-categories">
                                        <div className="card-body">
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-primary" >
                                                Delivery & Return Date</a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-success" >
                                                RTA</a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-danger " >
                                                Online Collection Email</a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-info" >
                                                Late Delivery Late Collection</a>
                                            <a onClick={tog_small10} className="px-3 py-2  rounded bg-light  text-warning bg-opacity-50 d-block mb-2" >
                                                Extra KM Charges
                                            </a><a onClick={tog_small11} className="px-3 py-2 rounded bg-light text-success  bg-opacity-50 d-block mb-2" >
                                                Add Fine</a>
                                            <a onClick={tog_small12} className="px-3 py-2 rounded bg-light text-danger text-success bg-opacity-50 d-block mb-2" >
                                                Add Salik
                                            </a><a onClick={tog_small13} className="px-3 py-2 rounded bg-light text-info  bg-opacity-50 d-block mb-2" >
                                                Add Sec Dep</a>
                                            <a onClick={tog_small14} className="px-3 py-2 rounded bg-light text-warning  bg-opacity-50 d-block mb-2" >
                                                Collection Charges </a>
                                            <a onClick={tog_small15} className="px-3 py-2 rounded bg-light  text-primary bg-opacity-50 d-block mb-2" >
                                                Delivery Charges</a>
                                            <a onClick={tog_small16} className="px-3 py-2 rounded bg-light   text-success  bg-opacity-50 d-block mb-2" >
                                                Cancel
                                                Booking</a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-danger " >
                                                Update Contract</a>
                                            <a onClick={tog_small8} className="px-3 py-2 rounded bg-light text-info  bg-opacity-50 d-block mb-2" >
                                                Collect later</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3">
                                    <div className="card jobs-categories">
                                        <div className="card-body">
                                            <a className="px-3 py-2  text-primary   rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Force collection</a>
                                            <a className="px-3 py-2 text-success rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Online Collection</a>
                                            <a className="px-3 py-2 rounded text-danger bg-light bg-opacity-50 d-block mb-2" >
                                                Replacement</a>
                                            <a onClick={tog_small9} className="px-3 text-info py-2 rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Vendor integrations</a>
                                            <a onClick={tog_small17} className="px-3 text-warning py-2  rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Offline Full
                                                Insurance
                                            </a><a onClick={tog_small18} className="px-3 py-2 text-primary rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Online Full
                                                Insurance</a>
                                            <a onClick={tog_small19} className="px-3 py-2 text-success rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Add Baby Seat
                                            </a><a onClick={tog_small20} className="px-3 py-2 text-danger rounded bg-light bg-opacity-50 d-block mb-2" >
                                                GPS</a>
                                            <a onClick={tog_small21} className="px-3 py-2  text-info rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Payment request </a>
                                            <a onClick={tog_small6} className="px-3 py-2 text-primary rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Convert to Online Bookingy</a>
                                            <a onClick={tog_small7} className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Customer Wallet
                                                Amount</a>
                                            <a onClick={tog_small22} className="px-3 py-2 text-success rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Extra Hours</a>
                                            <a onClick={tog_small23} className="px-3 py-2 rounded text-info bg-light bg-opacity-50 d-block mb-2" >
                                                Long Distance
                                                Charge</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-xl-3">
                                    <div className="card jobs-categories">
                                        <div className="card-body">
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-primary" >
                                                Invoice</a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2  text-success" >
                                                Car and Driver Assign</a>

                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-danger " >
                                                Replacement Car </a>
                                            <a onClick={tog_small24} className="px-3 py-2  rounded bg-light bg-opacity-50 d-block mb-2 text-info" >
                                                Add Booster Seat
                                            </a><a onClick={tog_small25} className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-warning" >
                                                Add PAI</a>
                                            <a onClick={tog_small26} className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-success " >
                                                Additional Driver
                                            </a><a onClick={tog_small27} className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-info" >
                                                Add VAT</a>
                                            <a onClick={tog_small28} className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-primary" >
                                                Payment Refund </a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-danger" >
                                                Send Vendor App</a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2  text-success" >
                                                Cancel
                                                Booking</a>
                                            <a className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-warning " >
                                                Track Driver</a>
                                            <a onClick={tog_small29} className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2" >
                                                Self Pickup / Return</a>
                                            <a onClick={tog_small30} className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2 text-info" >
                                                Inter city charge</a>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </TabPane>


                        <TabPane tabId="7">
                            <Row>
                                <Col md={12}>
                                    <Card>
                                        <CardHeader className="bg-white">
                                            <CardTitle>
                                                Information of ({form.customerName})
                                                <div style={{ float: "right" }}>
                                                    {" "}
                                                    <button
                                                        className="btn btn-success m-1"
                                                        type="submit"
                                                        onClick={tog_small1}
                                                    >
                                                        Add Address <i className="fas fa-check-circle"></i>
                                                    </button>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardBody>

                                            <div>
                                                <div>
                                                    <Row>
                                                        <Row>
                                                            {/* <Col md={2}>
                                                        <Card>
                                                            <CardBody>
                                                                {form.profilePic == "" ? (
                                                                    <img style={{ height: "220px", }} src={card1} />
                                                                ) : (
                                                                    <img
                                                                        style={{ height: "220px", width: "100%" }}
                                                                        src={"http://103.186.185.77:5021/" + form.profilePic}
                                                                    />
                                                                )}
                                                                <h5 className="mt-3">{form.customerName}</h5>
                                                                <p>Joined At {form.logDateCreated}</p>
                                                            </CardBody>
                                                        </Card>
                                                    </Col> */}
                                                            <Col md="6">
                                                                <ul className="verti-timeline list-unstyled">
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Branch Name :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.branchName}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        User Name :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.customerName}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Mobile No :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.phone}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Email :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.email}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Address :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.address}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Gender :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.gender == "M"
                                                                                            ? "Male"
                                                                                            : "Female"}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Date of Birth :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.dateOfBirth}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Occupation :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.occupation}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Occupation Details :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.occupationdetails}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Driving License Number :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {" "}
                                                                                        {form.dlNumber}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>

                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Driving License Issue Date :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {" "}
                                                                                        {form.dlIssueDate}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>

                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Driving License ExpiryDate :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {" "}
                                                                                        {form.dlExpiryDate}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </Col>


                                                            <Col md="6">
                                                                <ul className="verti-timeline list-unstyled">
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Resident Type :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {" "}
                                                                                        {form.residentType}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Address:
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.address}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        ZipCode :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.zipCode}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Country Name :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.countryName}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        State Name :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.stateName}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        CityName :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.cityName}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Emirates Id Exp :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.emiratesIdExp}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Passport Issue Date :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.passportIssueDate}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Passport Exp Date :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.passportExpDate}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Email Verify :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {form.emaiVerify == true
                                                                                            ? "Active"
                                                                                            : "Inactive"}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Sms Verify :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {" "}
                                                                                        {form.smsVerify == true
                                                                                            ? "Active"
                                                                                            : "Inactive"}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="event-list">
                                                                        <div className="event-timeline-dot">
                                                                            <i className="bx bx-right-arrow-circle"></i>
                                                                        </div>
                                                                        <div className="d-flex">
                                                                            <div className="flex-grow-1">
                                                                                <div>
                                                                                    <h6 className="font-size-14 mb-1">
                                                                                        Status :
                                                                                    </h6>
                                                                                    <p className="text-muted">
                                                                                        {" "}
                                                                                        {form.status == true
                                                                                            ? "Active"
                                                                                            : "Inactive"}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </Row>
                                                </div>
                                            </div>


                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="8">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-2 mb-2">Customer Documents</h4>

                                    <Row className="mt-3">
                                        {form.passportCopy == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Passport Copy</small>
                                                    <br />
                                                    <img
                                                        // onClick={tog_small(form.passportCopy)}
                                                        onClick={() => {
                                                            getpopup(form.passportCopy)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.passportCopy
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.passportIdFront == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Passport Id Front</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.passportIdFront)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.passportIdFront
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}

                                        {form.passportIdBack == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Passport Id Back</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.passportIdBack)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.passportIdBack
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.occupationIdCard == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Occupation Id Card</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.occupationIdCard)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.occupationIdCard
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}

                                        {form.emiratesIdFront == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Emirates Id Front</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.emiratesIdFront)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.emiratesIdFront
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.dlFront == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>dlFront</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.dlFront)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" + form.dlFront
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}

                                        {form.dlBack == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>dlBack</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.dlBack)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" + form.dlBack
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.interDlBack == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>interDlBack</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.interDlBack)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.interDlBack
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}

                                        {form.residencyVisa == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>residencyVisa</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.residencyVisa)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.residencyVisa
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.visaCopy == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>visaCopy</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.visaCopy)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" + form.visaCopy
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.emiratesIdBack == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>emiratesIdBack</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.emiratesIdBack)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.emiratesIdBack
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.dlfrontUAE == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>dlfrontUAE</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.dlfrontUAE)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.dlfrontUAE
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.dlBackUAE == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>dlBackUAE</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.dlBackUAE)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" + form.dlBackUAE
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                    </Row>
                                </CardBody>
                            </Card>
                        </TabPane>

                        <TabPane tabId="9">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-2 mb-2">Customer Documents</h4>

                                    <Row className="mt-3">
                                        {form.passportCopy == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Passport Copy</small>
                                                    <br />
                                                    <img
                                                        // onClick={tog_small(form.passportCopy)}
                                                        onClick={() => {
                                                            getpopup(form.passportCopy)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.passportCopy
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.passportIdFront == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Passport Id Front</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.passportIdFront)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.passportIdFront
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}

                                        {form.passportIdBack == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Passport Id Back</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.passportIdBack)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.passportIdBack
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.occupationIdCard == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Occupation Id Card</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.occupationIdCard)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.occupationIdCard
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}

                                        {form.emiratesIdFront == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>Emirates Id Front</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.emiratesIdFront)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.emiratesIdFront
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.dlFront == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>dlFront</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.dlFront)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" + form.dlFront
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}

                                        {form.dlBack == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>dlBack</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.dlBack)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" + form.dlBack
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.interDlBack == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>interDlBack</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.interDlBack)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.interDlBack
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}

                                        {form.residencyVisa == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>residencyVisa</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.residencyVisa)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.residencyVisa
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.visaCopy == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>visaCopy</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.visaCopy)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" + form.visaCopy
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.emiratesIdBack == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>emiratesIdBack</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.emiratesIdBack)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.emiratesIdBack
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.dlfrontUAE == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>dlfrontUAE</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.dlfrontUAE)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" +
                                                            form.dlfrontUAE
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                        {form.dlBackUAE == "" ? (
                                            ""
                                        ) : (
                                            <>
                                                <Col md={4} className="mt-4">
                                                    <small>dlBackUAE</small>
                                                    <br />
                                                    <img
                                                        onClick={() => {
                                                            getpopup(form.dlBackUAE)
                                                        }}
                                                        src={
                                                            "http://103.186.185.77:5021/" + form.dlBackUAE
                                                        }
                                                        style={{
                                                            width: "90%",
                                                            height: "150px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </Col>
                                            </>
                                        )}
                                    </Row>
                                </CardBody>
                            </Card>
                        </TabPane>


                    </TabContent>
                    <Card><CardBody>
                        <Row><Col md={12}>
                            <div className="border-bottom card-body">
                                <div style={{ float: "right" }}>
                                    <span className="text-muted">Status : </span>{" "}
                                    <span className="badge bg-success">
                                        pending 
                                    </span>
                                </div>
                                <div className="d-flex">
                                    <img
                                        src={"https://images.91wheels.com//assets/b_images/main/models/profile/profile1660727807.png?width=360&q=60"}
                                        alt=""
                                        height="50"
                                    />
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="fw-semibold">
                                        Nissan Sunny or Similar
                                        </h5>
                                        <ul className="list-unstyled hstack gap-2 mb-0">
                                            <li>
                                                <i className="bx bx-building-house"></i>{" "}
                                                <span className="text-muted">
                                                   2018
                                                </span>
                                            </li>
                                            <li>
                                                <i className="bx bx-map"></i>{" "}
                                                <span className="text-muted">
                                                    {form.branchName}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <h5 className="mb-3 mt-2">Booking Details</h5>
                            <ul className="verti-timeline list-unstyled">
                                <li className="event-list">
                                    <div className="event-timeline-dot">
                                        <i className="bx bx-right-arrow-circle"></i>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <div>
                                                <h6 className="font-size-14 mb-1">
                                                    Booking Id :
                                                </h6>
                                                <p className="text-muted">1122</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="event-list">
                                    <div className="event-timeline-dot">
                                        <i className="bx bx-right-arrow-circle"></i>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <div>
                                                <h6 className="font-size-14 mb-1">Car :</h6>
                                                <p className="text-muted">
                                                    Nissan Sunny or Similar
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="event-list">
                                    <div className="event-timeline-dot">
                                        <i className="bx bx-right-arrow-circle"></i>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <div>
                                                <h6 className="font-size-14 mb-1">
                                                    Registration Number :
                                                </h6>
                                                <p className="text-muted">
                                                    INZ03419
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="event-list">
                                    <div className="event-timeline-dot">
                                        <i className="bx bx-right-arrow-circle"></i>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <div>
                                                <h6 className="font-size-14 mb-1">
                                                    From Date / From Time:
                                                </h6>
                                                <p className="text-muted">
                                                    25/03/2023 / 12:20
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="event-list">
                                    <div className="event-timeline-dot">
                                        <i className="bx bx-right-arrow-circle"></i>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <div>
                                                <h6 className="font-size-14 mb-1">
                                                    To Date / To Time:
                                                </h6>
                                                <p className="text-muted">
                                                    28/03/2023 / 24:20
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="event-list">
                                    <div className="event-timeline-dot">
                                        <i className="bx bx-right-arrow-circle"></i>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <div>
                                                <h6 className="font-size-14 mb-1">
                                                    Pickup Location :
                                                </h6>
                                                <p className="text-muted">
                                                    Deira, Al Rigga, Nr Deira Clocktower - ديرة - دبي - United Arab Emirates
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="event-list mb-3">
                                    <div className="event-timeline-dot">
                                        <i className="bx bx-right-arrow-circle"></i>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <div>
                                                <h6 className="font-size-14 mb-1">
                                                    Return Location :
                                                </h6>
                                                <p className="text-muted">
                                                    Deira, Al Rigga, Nr Deira Clocktower - ديرة - دبي - United Arab Emirates
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                        </Row>

                    </CardBody>
                    </Card>
                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small}
                        toggle={() => {
                            tog_small()
                        }}

                    >
                        <div className="modal-header">
                            Allocate Car <button
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Expected Delivery Time</Label>
                                <Input
                                    type="time"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Select Car</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Select Car  "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Driver</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Driver "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Rental Agreement Number
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Rental Agreement Number "
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small2}
                        toggle={() => {
                            tog_small2()
                        }}

                    >

                        <div className="modal-header">
                            Allocate Car <button
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Expected Delivery Time</Label>
                                <Input
                                    type="time"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Select Car</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Select Car  "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Driver</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Driver "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Rental Agreement Number
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Rental Agreement Number "
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small3}
                        toggle={() => {
                            tog_small3()
                        }}

                    >

                        <div className="modal-header">
                            End Rental<button
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
                            <Row>
                                <Col md={6}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Delivery Date</Label>
                                        <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Delivery Date "
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Delivery Time</Label>
                                        <Input
                                            type="time"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Delivery Time"
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Collection Date</Label>
                                        <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="select Driver "
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Collection Time
                                        </Label>
                                        <Input
                                            type="time"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Rental Agreement Number "
                                        />
                                    </div>
                                </Col>

                            </Row>

                            <Row>
                                <Col md={6}>


                                    <div className="mb-3">
                                        <div>
                                            <label>In Fuel Level </label>
                                            <select


                                                className="form-select"

                                            >
                                                <option value="">Select </option>
                                                <option value="Daily">
                                                    1/10
                                                </option>
                                                <option value="Weekly">
                                                    2/10
                                                </option>
                                                <option value="Monthly-2500">
                                                    3/10
                                                </option>
                                                <option value="Monthly-4500">
                                                    4/10
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                            In Odometer
                                        </Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder=" In Odometer"
                                        />
                                    </div>

                                </Col>

                            </Row>

                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                            Self Pickup Location
                                        </Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder=" In Odometer"
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                            Self Return Location
                                        </Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder=" In Odometer"
                                        />
                                    </div>
                                </Col>
                            </Row>



                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>
                    {/* ///////////////////////////////////////// */}
                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small4}
                        toggle={() => {
                            tog_small4()
                        }}

                    >

                        <div className="modal-header">
                            Enter Payments<button
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Payment Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Payment Amount "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of Payments</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number of Payments "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Payment Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Payment Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="EnterComments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small5}
                        toggle={() => {
                            tog_small5()
                        }}

                    >

                        <div className="modal-header">
                            Enter CC Payments
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">PaymentCC Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter PaymentCC Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">PaymentCC Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter PaymentCC Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="EnterComments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small6}
                        toggle={() => {
                            tog_small6()
                        }}

                    >

                        <div className="modal-header">
                            Refund Security <button
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                {/* <Label for="basicpill-firstname-input3">Select Car</Label> */}
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  "
                                />
                            </div>

                            <div className="mb-3">
                                {/* <Label for="basicpill-firstname-input3">Driver</Label> */}
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter "
                                />
                            </div>

                            <div className="mb-3">
                                {/* <Label for="basicpill-firstname-input3">Rental Agreement Number
                                </Label> */}
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  "
                                />
                            </div>
                            <div className="mb-3">
                                {/* <Label for="basicpill-firstname-input3">Rental Agreement Number
                                </Label> */}
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  "
                                />
                            </div>
                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small7}
                        toggle={() => {
                            tog_small7()
                        }}

                    >

                        <div className="modal-header">
                            Add Fuel Charges<button
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Fuel Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Fuel Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Fuel Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Fuel Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="lg"
                        centered
                        isOpen={modal_small8}
                        toggle={() => {
                            tog_small8()
                        }}

                    >

                        <div className="modal-header">
                            Replace Car <button
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Car Change Date
                                </Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">In KM of Attrage</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter In KM of Attrage  "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">In Fuel of Attrage</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="enter In Fuel of Attrage "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Search Car by Number Plate (Type at least 3 characters)
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Search Car by Number Plate (Type at least 3 characters) "
                                />
                            </div>
                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Out KM
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Out KM"
                                />
                            </div>
                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Out Fuel
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Out Fuel"
                                />
                            </div>
                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Transfer Comment / Reason

                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Transfer Comment / Reason"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="lg"
                        centered
                        isOpen={modal_small9}
                        toggle={() => {
                            tog_small9()
                        }}

                    >

                        <div className="modal-header">
                            Early Return <button
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
                            <Row>
                                <Col md={6}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Early Return Date</Label>
                                        <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Expected Delivery Time "
                                        />
                                    </div></Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Early Return Time</Label>
                                        <Input
                                            type="time"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Select Car  "
                                        />
                                    </div>
                                    <Button style={{ width: '100%' }}
                                        className="mb-2  m-1"
                                        color="primary " >Calculate</Button>
                                </Col>
                            </Row>

                            <Row>
                                <h5>Previous</h5>
                                <Col md={6}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Delivery Date</Label>
                                        <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Expected Delivery Time "
                                        />
                                    </div></Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Delivery Time</Label>
                                        <Input
                                            type="time"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Select Car  "
                                        />
                                    </div>

                                </Col>

                                <Col md={3}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Delivery Date</Label>
                                        <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Expected Delivery Time "
                                        />
                                    </div></Col>
                                <Col md={3}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Delivery Time</Label>
                                        <Input
                                            type="time"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Select Car  "
                                        />
                                    </div>

                                </Col>
                                <Col md={3}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">DAYS</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter DAYS  "
                                        />
                                    </div>

                                </Col>
                            </Row>


                            <Row>
                                <h5>New</h5>


                                <Col md={3}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Delivery Date</Label>
                                        <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Expected Delivery Time "
                                        />
                                    </div></Col>
                                <Col md={3}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Delivery Time</Label>
                                        <Input
                                            type="time"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Select Car  "
                                        />
                                    </div>

                                </Col>
                                <Col md={3}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">DAYS</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter DAYS  "
                                        />
                                    </div>

                                </Col>

                                <Col md={3}> </Col>
                                <Col md={3}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">In KM</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter In KM"
                                        />
                                    </div></Col>
                                <Col md={3}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">In Fuel</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter In Fuel"
                                        />
                                    </div>

                                </Col>
                            </Row>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small10}
                        toggle={() => {
                            tog_small10()
                        }}

                    >

                        <div className="modal-header">
                            Extra KM Charges <button
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Extra KM Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of KMs</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number of KMs "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Extra KM Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small11}
                        toggle={() => {
                            tog_small11()
                        }}

                    >

                        <div className="modal-header">
                            Add Fine<button
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Extra KM Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of KMs</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number of KMs "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Extra KM Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small12}
                        toggle={() => {
                            tog_small12()
                        }}

                    >

                        <div className="modal-header">
                            Add Salik Charges <button
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Extra KM Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of KMs</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number of KMs "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Extra KM Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small13}
                        toggle={() => {
                            tog_small13()
                        }}

                    >

                        <div className="modal-header">
                            Enter Deposits
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Extra KM Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of KMs</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number of KMs "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Extra KM Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small14}
                        toggle={() => {
                            tog_small14()
                        }}

                    >

                        <div className="modal-header">
                            Add Collection Charges
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Extra KM Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of KMs</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number of KMs "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Extra KM Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small15}
                        toggle={() => {
                            tog_small15()
                        }}

                    >

                        <div className="modal-header">
                            Extra Delivery Charges
                            <button
                                onClick={() => {
                                    setmodal_small15(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Extra KM Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of KMs</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number of KMs "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Extra KM Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small16}
                        toggle={() => {
                            tog_small16()
                        }}

                    >

                        <div className="modal-header">
                            Other Charges
                            <button
                                onClick={() => {
                                    setmodal_small16(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Extra KM Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of KMs</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="select Number of KMs "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Extra KM Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Extra KM Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small17}
                        toggle={() => {
                            tog_small17()
                        }}

                    >

                        <div className="modal-header">
                            Add Full Insurance <button
                                onClick={() => {
                                    setmodal_small17(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Insurance Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Insurance Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of Insurance</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of Insurance "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Insurance Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Insurance Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small18}
                        toggle={() => {
                            tog_small18()
                        }}

                    >

                        <div className="modal-header">
                            Add Full Insurance<button
                                onClick={() => {
                                    setmodal_small18(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Insurance Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Insurance Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of Insurance</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of Insurance "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Insurance Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Insurance Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}


                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small19}
                        toggle={() => {
                            tog_small19()
                        }}

                    >

                        <div className="modal-header">
                            Add Baby Seater <button
                                onClick={() => {
                                    setmodal_small19(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Baby Seater Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Baby Seater Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of Baby Seater</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of Baby Seater "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of days
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of days"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Baby Seater Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Baby Seater Amount"
                                />
                            </div>


                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small20}
                        toggle={() => {
                            tog_small20()
                        }}

                    >

                        <div className="modal-header">
                            Extra KM Charges <button
                                onClick={() => {
                                    setmodal_small20(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    GPS Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter GPS Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of days</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of days "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">GPS Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter GPS Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}


                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small21}
                        toggle={() => {
                            tog_small21()
                        }}

                    >

                        <div className="modal-header">
                            Payment Request <button
                                onClick={() => {
                                    setmodal_small21(false)
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



                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Payment Request For</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Payment Request For"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Amount "
                                />
                            </div>




                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small22}
                        toggle={() => {
                            tog_small22()
                        }}

                    >

                        <div className="modal-header">
                            Extra Hours <button
                                onClick={() => {
                                    setmodal_small22(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Hours</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Hours "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>
                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small23}
                        toggle={() => {
                            tog_small23()
                        }}

                    >

                        <div className="modal-header">
                            Extra Hours <button
                                onClick={() => {
                                    setmodal_small23(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>
                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small24}
                        toggle={() => {
                            tog_small24()
                        }}

                    >

                        <div className="modal-header">
                            Add Boaster Seat <button
                                onClick={() => {
                                    setmodal_small24(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Boaster Seat Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Boaster Seat Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of Boaster Seat</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of Boaster Seat "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of days
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of days"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Boaster Seat Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Boaster Seat Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small25}
                        toggle={() => {
                            tog_small25()
                        }}

                    >

                        <div className="modal-header">
                            Add PAI <button
                                onClick={() => {
                                    setmodal_small25(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    PAI Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter PAI Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of PAI</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of PAI "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">PAI Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter PAI Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>
                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small26}
                        toggle={() => {
                            tog_small26()
                        }}

                    >

                        <div className="modal-header">
                            Extra Hours <button
                                onClick={() => {
                                    setmodal_small26(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Driver Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Driver Amount "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Driver Amount
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Driver Amount"
                                />
                            </div>
                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of days
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of days"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Number of days
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Number of days"
                                />
                            </div>


                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>
                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small27}
                        toggle={() => {
                            tog_small27()
                        }}

                    >

                        <div className="modal-header">
                            Add VAT <button
                                onClick={() => {
                                    setmodal_small27(false)
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



                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Vat Calculated On</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Vat Calculated On"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Vat Calculated On Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Vat Calculated On Amount "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Vat Amount

                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Vat Amount
                                    "
                                />
                            </div>


                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small28}
                        toggle={() => {
                            tog_small28()
                        }}

                    >

                        <div className="modal-header">
                            Payment Refund
                            <button
                                onClick={() => {
                                    setmodal_small28(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Amount</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Refund To</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Refund To "
                                />
                            </div>


                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>
                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="lg"
                        centered
                        isOpen={modal_small29}
                        toggle={() => {
                            tog_small29()
                        }}

                    >

                        <div className="modal-header">
                            Self Pickup / Return
                            <button
                                onClick={() => {
                                    setmodal_small29(false)
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
                            <Row>
                                <Col md={6}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Vendor</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Vendor Name"
                                        />
                                    </div>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>

                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">
                                            Self Pickup Location</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Self Pickup Location"
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Airport Area</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter Airport Area "
                                        />
                                    </div>

                                </Col>
                            </Row>


                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Self Return Location
                                        </Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter  Self Return Location"
                                        />
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="mb-3">
                                        <Label for="basicpill-firstname-input3">Return Airport Area
                                        </Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-firstname-input3"
                                            placeholder="Enter  Return Airport Area"
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>
                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small30}
                        toggle={() => {
                            tog_small30()
                        }}

                    >

                        <div className="modal-header">
                            Inter City Charge
                            <button
                                onClick={() => {
                                    setmodal_small30(false)
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

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Date</Label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Expected Delivery Time "
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    From City</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter From City"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">To City</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter To City "
                                />
                            </div>


                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>
                    {/* ///////////////////////////////////////// */}

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small31}
                        toggle={() => {
                            tog_small31()
                        }}

                    >

                        <div className="modal-header">
                            UnAssign Driver
                            <button
                                onClick={() => {
                                    setmodal_small31(false)
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



                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Select Driver</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Amount"
                                />
                            </div>

                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Reason</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter Reason* "
                                />
                            </div>


                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">Comments
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input3"
                                    placeholder="Enter  Comments"
                                />
                            </div>
                            <hr></hr>
                            <div style={{ float: "right" }}>
                                <button
                                    style={{ width: "120px" }}
                                    className="btn btn-success m-1"
                                    type="submit"
                                >
                                    Submit <i className="fas fa-check-circle"></i>
                                </button>

                            </div>
                        </div>
                    </Modal>

                    <Modal
                        size="md"
                        centered
                        isOpen={modal_small35}
                        toggle={() => {
                            tog_small35()
                        }}
                    >
                        <div className="modal-header">
                            <button
                                onClick={() => {
                                    setmodal_small35(false)
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

                            <div>
                                <a herf={"http://103.186.185.77:5021/" + IMGS} target="_blank">
                                    <img
                                        src={"http://103.186.185.77:5021/" + IMGS}
                                        style={{ width: "100%", height: "350px", cursor: "pointer" }}
                                    /></a>
                            </div>

                        </div>
                    </Modal>

                </Container>
            </div>
        </React.Fragment >
    )
}

export default ViewBookings


{/* <Col md={5} style={{ border: '2px solid black' }}>
<div className="mt-2">
    <div style={{ borderBottom: '2px solid black', paddingBottom: '5px' }} >
        <Nav pills className="navtab-bg nav-justified" >
            <NavItem>
                <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                        active: activeTab1 === "5",
                    })}
                    onClick={() => {
                        toggle1("5")
                    }}
                >
                    Charges
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                        active: activeTab1 === "6",
                    })}
                    onClick={() => {
                        toggle1("6")
                    }}
                >
                    Charge 2
                </NavLink>
            </NavItem>
        </Nav>
    </div>
    <TabContent activeTab={activeTab1} className="p-1 text-muted">
        <TabPane tabId="5">
            <Row className="mt-3">
                <Col md={6}>
                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small}
                    >

                        Allocate Car
                    </Button>
                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Start Rental
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small3}
                    >

                        End Rental
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small4}

                    >

                        Payment
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small5}
                    >

                        PaymentCC
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small6}
                    >

                        Refund Security
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small7}
                    >

                        Fuel Charges
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline

                    >

                        Print Contract
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    // onClick={tog_small8}
                    >

                        Update Contract
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small8}
                    >

                        Replace
                        Car
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Collect Now
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Online Extend
                    </Button>
                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small9}
                    >

                        Early Return
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Delivery & Return Date
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        RTA
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Online Collection Email
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Late Delivery Late Collection
                    </Button>
                </Col>

                <Col md={6}>
                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small10}
                    >

                        Extra KM Charges
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small11}
                    >

                        Add Fine
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small12}
                    >

                        Add Salik
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small13}
                    >

                        Add Sec Dep
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small14}
                    >

                        Collection Charges
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small15}
                    >

                        Delivery Charges
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small16}
                    >

                        Other Charges
                    </Button>


                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Cancel
                        Booking
                    </Button>



                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Collect later
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Change Car
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Force collection
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Online Collection
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Vehicle Checklist
                    </Button>


                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Replacement
                    </Button>
                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Vendor integrations
                    </Button>
                </Col>
            </Row>
        </TabPane>

        <TabPane tabId="6">
            <Row className="mt-3">
                <Col md={6}>
                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small17}
                    >

                        Offline Full
                        Insurance
                    </Button>
                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small18}
                    >

                        Online Full
                        Insurance
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small19}
                    >

                        Add Baby Seat
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small20}
                    >

                        GPS
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small21}
                    >

                        Payment request
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Convert to Online Booking
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Customer Wallet
                        Amount
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small22}
                    >

                        Extra Hours
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small23}
                    >

                        Long Distance
                        Charge
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Invoice
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Car and Driver Assign
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Replacement Car and Driver Assign
                    </Button>


                </Col>

                <Col md={6}>
                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small24}
                    >

                        Add Booster Seat
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small25}
                    >

                        Add PAI
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small26}
                    >

                        Additional Driver
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small27}
                    >

                        Add VAT
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small28}
                    >

                        Payment Refund
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Send Vendor App
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >

                        Track Driver
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small29}
                    >

                        Self Pickup / Return
                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small30}
                    >

                        Inter city charge
                    </Button>





                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                        onClick={tog_small31}
                    >


                        Delivery and Collection Unassigned

                    </Button>

                    <Button
                        style={{ width: '100%' }}
                        className="mb-2  m-1"
                        color="primary " outline
                    >


                        New Charge Screen

                    </Button>


                </Col>
            </Row>

        </TabPane>
    </TabContent>
</div>
</Col> */}