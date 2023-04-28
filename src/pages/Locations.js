import React, { useState, useEffect } from "react"
import {
    CardBody,
    CardHeader,
    Container,
    Row,
    Col,
    Card,

    CardTitle,
    Form,
    Label,
    Input,
    Button,
    Table,
    Modal,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,

} from "reactstrap"
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete"

import classnames from "classnames"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"

const Banner = () => {
    //meta title
    // document.title = "Stater Page | Logic Cars Admin";

    const [modal_small, setmodal_small] = useState(false)
    const [banner, setbanner] = useState([])
    const [form, setform] = useState([])
    const [form1, setform1] = useState([])

    const [form2, setform2] = useState([])
    const [Files, setFiles] = useState("")
    const [Files1, setFiles1] = useState("")

    const changeHandler = e => {
        setFiles(e.target.files)
    }
    const changeHandler1 = e => {
        setFiles1(e.target.files)
    }

    function tog_small() {
        setmodal_small(!modal_small)

    }

    const handleChange = e => {
        let myUser = { ...form }
        myUser[e.target.name] = e.target.value
        setform(myUser)
    }
    const handleChange1 = e => {
        let myUser = { ...form1 }
        myUser[e.target.name] = e.target.value
        setform1(myUser)
    }



    const [address, setaddress] = useState("")

    const [coordinateds, setcoordinateds] = useState({
        lat: "",
        lng: "",
        address: "",
    })

    const handleSelect = async value => {
        setaddress(value)
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => setcoordinateds(latLng))
    }

    const handlechange = e => {
        let myUser = { ...address }
        myUser[e.target.name] = e.target.value
        myUser(setaddress)
    }




    useEffect(() => {
        getAllbenners()
    }, [])

    var gets = localStorage.getItem("authUser")
    var data = JSON.parse(gets)
    var datas = data.token


    const [listPerPage] = useState(5)
    const [pageNumber, setPageNumber] = useState(0)

    const pagesVisited = pageNumber * listPerPage
    const lists = banner.slice(pagesVisited, pagesVisited + listPerPage)
    const pageCount = Math.ceil(banner.length / listPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }




    const addbenners = () => {
        var token = datas
        const dataArray = new FormData()
        dataArray.append("locationName", address)
        dataArray.append("latitude", coordinateds.lat)
        dataArray.append("longitude", coordinateds.lng)
        dataArray.append("locationType", form.locationType)

        axios
            .post(
                "http://103.186.185.77:5021/api/v1/admin/selflocation/addselflocation",
                dataArray,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(
                res => {
                    if (res.status === 200) {
                        toast(res.data.message)
                        getAllbenners()
                        clearForm()
                    }
                },
                error => {
                    if (error.response && error.response.status === 400) {
                        toast(error.response.data.message)
                    }
                }
            )
    }

    const [address1, setaddress1] = useState("")
    console.log(address1)

    const [coordinateds1, setcoordinateds1] = useState({
        lat: "",
        lng: "",
        address: "",
    })

    console.log(coordinateds1)

    const getpopup = data => {
        setform1(data)
        setaddress1(data.locationName)
        tog_small()
        const c = { ...coordinateds1 }
        console.log(data.latitude)
        c["lat"] = data.latitude
        c["lng"] = data.longitude
        setcoordinateds1(c)
        console.log(c)
    }

    const handleSelect1 = async value => {
        setaddress1(value)
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => setcoordinateds1(latLng))
    }

    const handlechange1 = e => {
        let myUser = { ...address1 }
        myUser[e.target.name] = e.target.value
        myUser(setaddress1)
    }

    const editbenners = () => {
        var token = datas
        var formid = form1._id
        const dataArray = new FormData()
        dataArray.append("locationName", address1)
        dataArray.append("latitude", coordinateds1.lat)
        dataArray.append("longitude", coordinateds1.lng)
        dataArray.append("locationType", form1.locationType)

        axios
            .put(
                "http://103.186.185.77:5021/api/v1/admin/selflocation/editselflocation" +
                "/" +
                formid,
                dataArray,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(
                res => {
                    if (res.status === 200) {
                        toast(res.data.message)
                        getAllbenners()
                        setmodal_small(false)
                    }
                },
                error => {
                    if (error.response && error.response.status === 400) {
                        toast(error.response.data.message)
                    }
                }
            )
    }

    const deletebenners = data => {
        var token = datas
        var remid = data._id
        axios
            .delete(
                "http://103.186.185.77:5021/api/v1/admin/selflocation/removeselflocation" +
                "/" +
                remid,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(
                res => {
                    if (res.status === 200) {
                        toast(res.data.message)

                        getAllbenners()
                    }
                },
                error => {
                    if (error.response && error.response.status === 400) {
                        toast(error.response.data.message)
                    }
                }
            )
    }

    const manageDelete = data => {
        const confirmBox = window.confirm("Do you really want to Delete?")
        if (confirmBox === true) {
            deletebenners(data)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        addbenners()
    }
    const handleSubmit1 = e => {
        e.preventDefault()
        editbenners()
    }

    const [airpot, setairpot] = useState([])

    const getAllbenners = () => {
        var token = datas
        axios
            .post(
                "http://103.186.185.77:5021/api/v1/admin/selflocation/getallselflocations",
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(res => {
                console.log(res.data)
                setbanner(res.data.selfResult)
                setairpot(res.data.airportResult)
            })
    }

    const clearForm = () => {
        setform({
            locationType: "",

        })
        setcoordinateds({
            lat: "",
            lng: "",
            address: "",
        })
        setaddress("")
    }
    // const getpopup = data => {
    //     setform1(data)
    //     tog_small()
    // }

    const [search, setsearch] = useState([])

    const searchAll = e => {
        let myUser = { ...search }
        myUser[e.target.name] = e.target.value
        setsearch(myUser)

        var token = datas
        axios
            .post(
                `http://103.186.185.77:5021/api/v1/admin/selflocation/getallselflocations?searchQueryParams=${e.target.value}`,
                {},

                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(res => {
                setbanner(res.data.bannerResult)
                setairpot(res.data.airportResult)
            })
    }
    var gets = localStorage.getItem("authUser")
    var data = JSON.parse(gets)
    var dats = data.rolesAndPermit
    var dats1 = data.user.role



    const [activeTab1, setactiveTab1] = useState("5")
    const toggle1 = tab => {
        if (activeTab1 !== tab) {
            setactiveTab1(tab)
        }
    }


    const [listPerPage1] = useState(5)
    const [pageNumber1, setPageNumber1] = useState(0)

    const pagesVisited1 = pageNumber1 * listPerPage1
    const lists1 = airpot.slice(pagesVisited1, pagesVisited1 + listPerPage1)
    const pageCount1 = Math.ceil(airpot.length / listPerPage1)
    const changePage1 = ({ selected1 }) => {
        setPageNumber1(selected1)
    }


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Location" />

                    <Row>
                        {dats.bannerMgtAdd == true || dats1 == "admin" ? (
                            <Col md={4}>
                                <Nav pills className="navtab-bg nav-justified">
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
                                            Self List
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
                                            Airport List
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Card className="mt-2">
                                    <CardHeader className="bg-white">
                                        <CardTitle>Add Location</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Form
                                            onSubmit={e => {
                                                handleSubmit(e)
                                            }}
                                        >
                                            <div className="mb-3">
                                                <Label for="basicpill-firstname-input3">
                                                    Location <span className="text-danger">*</span>
                                                </Label>
                                                <PlacesAutocomplete
                                                    value={address}
                                                    onChange={setaddress}
                                                    onSelect={handleSelect}
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
                                                                    placeholder: "Search location ...",
                                                                    className: "location-search-input form-control",
                                                                })}
                                                            />
                                                            <div className="autocomplete-dropdown-container">
                                                                {loading && <div>Loading...</div>}
                                                                {suggestions.map(suggestion => {
                                                                    const className = suggestion.active
                                                                        ? "suggestion-item--active"
                                                                        : "suggestion-item"
                                                                    // inline style for demonstration purpose
                                                                    const style = suggestion.active
                                                                        ? {
                                                                            backgroundColor: "#fafafa",
                                                                            cursor: "pointer",
                                                                        }
                                                                        : {
                                                                            backgroundColor: "#ffffff",
                                                                            cursor: "pointer",
                                                                        }

                                                                    return (
                                                                        // <></>
                                                                        <div
                                                                            {...getSuggestionItemProps(suggestion, {
                                                                                className,
                                                                                style,
                                                                            })}
                                                                            key={suggestion.placeId}
                                                                        >
                                                                            <span>{suggestion.description}</span>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    )}
                                                </PlacesAutocomplete>
                                            </div>

                                            <div className="mb-3">
                                                <label>Latitude</label>
                                                <input
                                                    id="name"
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter latitude"
                                                    name="latittude"
                                                    value={coordinateds.lat}
                                                    disabled="disabled"
                                                    onChange={e => {
                                                        handlechange(e)
                                                    }}
                                                    required
                                                />
                                            </div>{" "}

                                            <div className="mb-3">
                                                <label>Longitude</label>
                                                <input
                                                    id="name"
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter longitude"
                                                    name="longitude"
                                                    value={coordinateds.lng}
                                                    onChange={e => {
                                                        handlechange(e)
                                                    }}
                                                    disabled="disabled"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <Label for="basicpill-firstname-input3">
                                                    Location Type<span className="text-danger">*</span>
                                                </Label>
                                                <select
                                                    name="locationType"
                                                    value={form.locationType}
                                                    onChange={e => {
                                                        handleChange(e)
                                                    }}
                                                    className="form-select"
                                                >
                                                    <option value="">Select Location Type </option>
                                                    <option value="selfpoint">Self</option>
                                                    <option value="airportpoint">Airport</option>
                                                </select>
                                            </div>

                                            <div style={{ float: "right" }}>
                                                <Button color="primary" type="submit">
                                                    Submit <i className="fas fa-check-circle"></i>
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        ) : (
                            ""
                        )}


                        <Col md={8}>
                            <Card className="mt-5">
                                <CardBody>
                                    <TabContent activeTab={activeTab1} >
                                        <TabPane tabId="5">
                                            <CardHeader className="bg-white">
                                                <CardTitle >Self Location List</CardTitle>
                                            </CardHeader>

                                            <div>
                                                <div className="table-responsive">
                                                    <div style={{ float: "right" }}>
                                                        <Input
                                                            type="search"
                                                            className="form-control"
                                                            placeholder="Search.."
                                                            value={search.search}
                                                            onChange={searchAll}
                                                            name="search"
                                                        />
                                                    </div>
                                                    <Table className="table table-bordered mb-4 mt-5">
                                                        <thead>
                                                            <tr>
                                                                <th>S.No</th>
                                                                <th>Location </th>
                                                                <th>Latitude</th>
                                                                <th>Longitude</th>
                                                                <th>LocationType</th>
                                                              
                                                                <th style={{ width: "100px" }}>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {lists.map((data, key) => (
                                                                <tr key={key}>
                                                                    <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                                                    <td>{data.locationName}</td>
                                                                    <td>{data.latitude}</td>
                                                                    <td>{data.longitude}</td>

                                                                    {data.locationType == "selfpoint" ?(
                                                                    <td>
                                                                        Self 
                                                                    </td>): " "}
                                                                    
                                                                    <td>
                                                                        {dats.bannerMgtEdit == true ||
                                                                            dats1 == "admin" ? (
                                                                            <Button
                                                                                onClick={() => {
                                                                                    getpopup(data)
                                                                                }}
                                                                                className="mr-2"
                                                                                style={{ padding: "6px", margin: "3px" }}
                                                                                color="success"
                                                                                outline
                                                                            >
                                                                                <i className="bx bx-edit "></i>
                                                                            </Button>
                                                                        ) : (
                                                                            "-"
                                                                        )}
                                                                        {dats.bannerMgtDelete == true ||
                                                                            dats1 == "admin" ? (
                                                                            <Button
                                                                                onClick={() => {
                                                                                    manageDelete(data)
                                                                                }}
                                                                                style={{ padding: "6px", margin: "3px" }}
                                                                                color="danger"
                                                                                outline
                                                                            >
                                                                                <i className="bx bx-trash"></i>
                                                                            </Button>
                                                                        ) : (
                                                                            ""
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>

                                                    <div className="mt-3" style={{ float: "right" }}>
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
                                                    </div>
                                                </div>
                                            </div>


                                        </TabPane>
                                        <TabPane tabId="6">
                                            <CardHeader className="bg-white">
                                                <CardTitle >Airport Location List</CardTitle>
                                            </CardHeader>
                                            <div>
                                                <div className="table-responsive">
                                                    <div style={{ float: "right" }}>
                                                        <Input
                                                            type="search"
                                                            className="form-control"
                                                            placeholder="Search.."
                                                            value={search.search}
                                                            onChange={searchAll}
                                                            name="search"
                                                        />
                                                    </div>
                                                    <Table className="table table-bordered mb-4 mt-5">
                                                        <thead>
                                                            <tr>
                                                                <th>S.No</th>
                                                                <th>Location</th>
                                                                <th>Latitude</th>
                                                                <th>Longitude</th>
                                                                <th>LocationType</th>
                                                               
                                                                <th style={{ width: "100px" }}>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {lists1.map((data, key) => (
                                                                <tr key={key}>
                                                                    <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                                                    <td>{data.locationName}</td>
                                                                    <td>{data.latitude}</td>
                                                                    <td>{data.longitude}</td>
                                                                    {data.locationType == "airportpoint" ?(
                                                                    <td>
                                                                       Airport
                                                                    </td>): " "}
                                                                   
                                                                    <td>
                                                                        {dats.bannerMgtEdit == true ||
                                                                            dats1 == "admin" ? (
                                                                            <Button
                                                                                onClick={() => {
                                                                                    getpopup(data)
                                                                                }}
                                                                                className="mr-2"
                                                                                style={{ padding: "6px", margin: "3px" }}
                                                                                color="success"
                                                                                outline
                                                                            >
                                                                                <i className="bx bx-edit "></i>
                                                                            </Button>
                                                                        ) : (
                                                                            "-"
                                                                        )}
                                                                        {dats.bannerMgtDelete == true ||
                                                                            dats1 == "admin" ? (
                                                                            <Button
                                                                                onClick={() => {
                                                                                    manageDelete(data)
                                                                                }}
                                                                                style={{ padding: "6px", margin: "3px" }}
                                                                                color="danger"
                                                                                outline
                                                                            >
                                                                                <i className="bx bx-trash"></i>
                                                                            </Button>
                                                                        ) : (
                                                                            ""
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>

                                                    <div className="mt-3" style={{ float: "right" }}>
                                                        <ReactPaginate
                                                            previousLabel={"Previous"}
                                                            nextLabel={"Next"}
                                                            pageCount={pageCount1}
                                                            onPageChange={changePage1}
                                                            containerClassName={"pagination"}
                                                            previousLinkClassName={"previousBttn"}
                                                            nextLinkClassName={"nextBttn"}
                                                            disabledClassName={"disabled"}
                                                            activeClassName={"active"}
                                                            total={lists1.length}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Container>

                <Modal
                    size="md"
                    isOpen={modal_small}
                    toggle={() => {
                        tog_small()
                    }}
                    centered
                >
                    <div className="modal-header">
                        <h5 className="modal-title mt-0" id="mySmallModalLabel">
                            Edit Location
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
                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Location <span className="text-danger">*</span>
                                </Label>
                                <PlacesAutocomplete
                                    value={address1}
                                    onChange={setaddress1}
                                    onSelect={handleSelect1}
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
                                                    placeholder: "Search location ...",
                                                    className: "location-search-input form-control",
                                                })}
                                            />
                                            <div className="autocomplete-dropdown-container">
                                                {loading && <div>Loading...</div>}
                                                {suggestions.map(suggestion => {
                                                    const className = suggestion.active
                                                        ? "suggestion-item--active"
                                                        : "suggestion-item"
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                        ? {
                                                            backgroundColor: "#fafafa",
                                                            cursor: "pointer",
                                                        }
                                                        : {
                                                            backgroundColor: "#ffffff",
                                                            cursor: "pointer",
                                                        }

                                                    return (
                                                        // <></>
                                                        <div
                                                            {...getSuggestionItemProps(suggestion, {
                                                                className,
                                                                style,
                                                            })}
                                                            key={suggestion.placeId}
                                                        >
                                                            <span>{suggestion.description}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </PlacesAutocomplete>
                            </div>

                            <div className="mb-3">
                                <label>Latitude</label>
                                <input
                                    id="name"
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter latitude"
                                    name="lat"
                                    value={coordinateds1.lat}
                                    disabled="disabled"
                                    onChange={e => {
                                        handlechange1(e)
                                    }}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label>Longitude</label>
                                <input
                                    id="name"
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter longitude"
                                    name="lng"
                                    value={coordinateds1.lng}
                                    onChange={e => {
                                        handlechange1(e)
                                    }}
                                    disabled="disabled"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <Label for="basicpill-firstname-input3">
                                    Location Type <span className="text-danger">*</span>
                                </Label>
                                <select
                                    name="locationType"
                                    value={form1.locationType}
                                    onChange={e => {
                                        handleChange1(e)
                                    }}
                                    className="form-select"
                                >
                                    <option value="">Select Location Type </option>
                                    <option value="selfpoint">Self</option>
                                    <option value="airportpoint">Airport</option>
                                </select>
                            </div>


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
                                <Button className="m-1" color="primary" type="submit">
                                    Submit <i className="fas fa-check-circle"></i>
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Modal>

                <ToastContainer />
            </div>
        </React.Fragment>
    )
}

export default Banner
