import React, { useEffect, useState } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
} from "reactstrap"
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
// } from "react-places-autocomplete";

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete"

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete"

// import useOnclickOutside from "react-cool-onclickoutside"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"

import ReactPaginate from "react-paginate"

const Branch = () => {
  const [modal_small, setmodal_small] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
  }

  const [modal_small1, setmodal_small1] = useState(false)

  function tog_small1() {
    setmodal_small1(!modal_small1)
  }

  ////Location use-places-autocomplete

  // const [address, setaddress] = useState("")
  // const [coordinateds, setcoordinateds] = useState({
  //   lat: "",
  //   lng: "",
  //   address: "",
  // })
  // console.log(coordinateds)

  // const {
  //   ready,
  //   value,
  //   suggestions: { status, data },
  //   setValue,
  //   clearSuggestions,
  // } = usePlacesAutocomplete({
  //   requestOptions: {
  //     /* Define search scope here */
  //   },
  //   debounce: 300,
  // })
  // const ref = useOnclickOutside(() => {
  //   // When user clicks outside of the component, we can dismiss
  //   // the searched suggestions by calling this method
  //   clearSuggestions()
  // })

  // const handleInput = e => {
  //   // Update the keyword of the input element
  //   setValue(e.target.value)
  // }

  // const handleSelect =
  //   ({ description }) =>
  //   () => {
  //     // When user selects a place, we can replace the keyword without request data from API
  //     // by setting the second parameter to "false"
  //     setValue(description, false)
  //     clearSuggestions()

  //     // Get latitude and longitude via utility functions
  //     getGeocode({ address: description }).then(results => {
  //       const { lat, lng } = getLatLng(results[0])
  //       console.log("📍 Coordinates: ", { lat, lng })
  //     })
  //   }

  // const renderSuggestions = () =>
  //   data.map(suggestion => {
  //     const {
  //       place_id,
  //       structured_formatting: { main_text, secondary_text },
  //     } = suggestion

  //     return (
  //       <li key={place_id} onClick={handleSelect(suggestion)}>
  //         <strong>{main_text}</strong> <small>{secondary_text}</small>
  //       </li>
  //     )
  //   })

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

  ////form add
  var gets = localStorage.getItem("authUser")
  var dataz = JSON.parse(gets)
  var datas = dataz.token

  const [form, setform] = useState([])
  console.log(form)

  const handleChange = (e) => {
    const myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addusers()
    clearForm()
  }

  const addusers = () => {
    var token = datas
    const _userdata = {
      departmentId: form.departmentId,
      name: form.name,
      email: form.email,
      password: form.password,
      phone: form.phone,
      city: form.city,
      location: address,
    }

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/adminregister",
        _userdata,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            setmodal_small1(false)
            getAllusers()
            clearForm()
            setValue("")
            setaddress("")
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
      name: "",
      password: "",
      email: "",
      phone: "",
      city: "",
    })
    setcoordinateds({
      lat: "",
      lng: "",
      address: "",
    })
    setaddress("")
  }

  /// get branch

  const [brand, setbrand] = useState([])

  const getAllusers = () => {
    var token = datas
    const params ={
      dealerId:dataz.user.dealerId
    }
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/getall",
        params,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.profileResult)
      })
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

  const [address1, setaddress1] = useState("")

  const [coordinateds1, setcoordinateds1] = useState({
    lat: "",
    lng: "",
    address: "",
  })

  const getpopup = data => {
    setform1(data)
    setaddress1(data.location)

    tog_small()
    const c = { ...coordinateds1 }
    c["lat"] = data.latitude
    c["lng"] = data.longitude
    setcoordinateds1(c)
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

  const [form1, setform1] = useState([])

  const handleChange1 = e => {
    let myUser = { ...form1 }
    myUser[e.target.name] = e.target.value
    setform1(myUser)
  }

  const handleSubmit1 = e => {
    e.preventDefault()
    editbranch()
  }
  const editbranch = () => {
    var token = datas
    const docid = form1._id
    const _userdata = {
      departmentId: form1.departmentId,
      name: form1.name,
      email: form1.email,
      password: form1.password,
      phone: form1.phone,
      city: form1.city,
      location: address1,
    }

    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/editemployee" +
        "/" +
        docid, _userdata,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllusers()
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

  useEffect(() => {
    getAllusers()
    getAllDepartments()

  }, [])

  const manageDelete = data => {
    const confirmBox = window.confirm("Do you really want to Delete ?")
    if (confirmBox === true) {
      deletefeature(data)
    }
  }
  const deletefeature = data => {
    var token = datas
    var remid = data._id
    axios
      .delete(
        "http://103.186.185.77:5021/api/v1/admin/delete_employee" +
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
            getAllusers()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = brand.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(brand.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const hiddenIds = ["Admin"];
  const filteredData = lists.filter((item) => !hiddenIds.includes(item.departmentName));

  const [search, setsearch] = useState([])

  const searchAll = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)
    var token = datas
    axios
      .post(
        `http://103.186.185.77:5021/api/v1/admin/search?searchQuery=${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbrand(res.data.profileResult)
      })
  }


  const [dep, setdep] = useState([])
  console.log(dep)

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


  return (
    <React.Fragment>
      {dats.usersview == true || dats1 == "admin" ? (
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Admins" />

            <Row>
              <Col md={12}>
                <Card>
                  <CardHeader className="bg-white">
                    <CardTitle>Users List</CardTitle>
                  </CardHeader>

                  <CardBody>
                    <div>
                      <Row>
                        <Col>
                          <div className="mb-2">
                            <Input
                              type="search"
                              style={{ width: "250px" }}
                              className="form-control"
                              placeholder="Search.."
                              value={search.search}
                              onChange={searchAll}
                              name="search"
                            />
                          </div>
                        </Col>
                        <Col>
                          {dats.usersadd == true || dats1 == "admin" ? (
                            <div style={{ float: "right" }} className="mb-2">
                              {" "}
                              <Button
                                className="m-1"
                                onClick={tog_small1}
                                color="primary"
                              >
                                Add User
                              </Button>
                            </div>
                          ) : ""}
                        </Col>
                      </Row>
                      <div className="table-responsive">
                        <Table className="table table-bordered  mt-1">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Department Name</th>
                              <th>User Name</th>
                              <th>Phone</th>
                              <th>Email</th>
                              <th>City</th>
                              <th>location</th>
                              <th>Status</th>
                              <th style={{ width: "100px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredData.map((data, key) => (
                              <tr key={key}>
                                <th>{(pageNumber - 1) * 5 + key + 6}</th>
                                <td>{data.departmentName}</td>
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.city}</td>
                                <td>{data.location}</td>
                                <td>
                                  {data.status == true ? "Active" : "Inactive"}
                                </td>

                                <td style={{ width: "100px" }}>
                                  {dats.usersedit == true || dats1 == "admin" ? (
                                    <Button
                                      onClick={() => {
                                        getpopup(data)
                                      }}
                                      style={{ padding: "6px", margin: "3px" }}
                                      color="success"
                                      outline
                                    >
                                      <i className="bx bx-edit "></i>
                                    </Button>
                                  ) : ""}
                                  {dats.userdelete == true || dats1 == "admin" ? (
                                    <Button
                                      style={{ padding: "6px", margin: "3px" }}
                                      color="danger"
                                      outline
                                      onClick={() => {
                                        manageDelete(data)
                                      }}
                                    >
                                      <i className="bx bx-block"></i>
                                    </Button>
                                  ) : ""}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        <div className="mt-3" style={{ float: "right" }}>
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
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <ToastContainer />

            <Modal
              isOpen={modal_small1}
              toggle={() => {
                tog_small1()
              }}
              centered
            >
              <div className="modal-header">
                <h5 className="modal-title" id="mySmallModalLabel">
                  Add Users
                </h5>
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
                <Form
                  onSubmit={e => {
                    handleSubmit(e)
                  }}
                >
                  {" "}
                  <Row>
                    <Col md={6}><div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Department Name{" "}
                        <span className="text-danger">*</span>
                      </Label>
                      <select
                        className="form-select "
                        value={form.departmentId}
                        name="departmentId"
                        onChange={(e) => { handleChange(e) }}
                        required
                      >
                        <option value="">select</option>
                        {dep.map((data, key) => (
                          <option key={key} value={data._id}>{data.departmentName}</option>
                        ))}

                      </select>
                    </div></Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          User Name <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Manager Name"
                          required
                          pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                          name="name"
                          value={form.name}
                          onChange={e => {
                            handleChange(e)
                          }}
                          autocomplete="off"
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input1">
                          Phone No. <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Enter Phone No"
                          required
                          name="phone"
                          value={form.phone}
                          maxlength="15"
                          onChange={e => {
                            handleChange(e)
                          }}
                          autocomplete="off"
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="mb-3">
                        <Label>
                          Email <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                          required
                          name="email"
                          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                          value={form.email}
                          onChange={e => {
                            handleChange(e)
                          }}
                          role="presentation"
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="mb-3">
                        <Label>
                          Password <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="password"
                          className="form-control"
                          id="basicpill-firstname-input1"
                          placeholder="Enter Password"
                          required
                          min={6}
                          name="password"
                          value={form.password}
                          onChange={e => {
                            handleChange(e)
                          }}
                          autocomplete="off"
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="mb-3">
                        <Label for="basicpill-firstname-input3">
                          City <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="basicpill-firstname-input3"
                          placeholder="Enter City"
                          required
                          name="city"
                          value={form.city}
                          onChange={e => {
                            handleChange(e)
                          }}
                          autocomplete="off"
                        />
                      </div>
                    </Col>

                    <Col md={6}>
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
                    </Col>
                    <Col md={6}></Col>
                    <Col md={6}></Col>
                    <Col md={6}>
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
                    </Col>
                  </Row>
                </Form>
              </div>
            </Modal>
          </Container>

          <Modal
            isOpen={modal_small}
            toggle={() => {
              tog_small()
            }}
            centered
          >
            <div className="modal-header">
              <h5 className="modal-title mt-0" id="mySmallModalLabel">
                Edit User
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
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Department Name{" "}
                        <span className="text-danger">*</span>
                      </Label>
                      <select
                        className="form-select "
                        value={form1.departmentId}
                        name="departmentId"
                        onChange={(e) => { handleChange1(e) }}
                        required
                      >
                        <option value="">select</option>
                        {dep.map((data, key) => (
                          <option key={key} value={data._id}>{data.departmentName}</option>
                        ))}

                      </select>
                    </div>

                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Phone No. <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone No"
                        required
                        name="phone"
                        value={form1.phone}
                        maxlength="15"
                        onChange={e => {
                          handleChange1(e)
                        }}
                        autocomplete="off"
                      />
                    </div>

                    <div className="mb-3">
                      <Label for="basicpill-firstname-input3">
                        City <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input3"
                        placeholder="Enter City"
                        required
                        name="city"
                        value={form1.city}
                        onChange={e => {
                          handleChange1(e)
                        }}
                        autocomplete="off"
                      />
                    </div>

                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        User Name <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter User Name"
                        required
                        name="name"
                        pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                        value={form1.name}
                        onChange={e => {
                          handleChange1(e)
                        }}
                        autocomplete="off"
                      />
                    </div>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Email <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="email"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Email"
                        required
                        name="email"
                        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                        value={form1.email}
                        onChange={e => {
                          handleChange1(e)
                        }}
                        autoComplete="off"
                      />
                    </div>
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
                  </Col>
                </Row>

                <div style={{ float: "right" }}>
                  <Button className="m-1" color="primary" type="submit">
                    Submit <i className="fas fa-check-circle"></i>
                  </Button>
                  <Button
                    onClick={() => {
                      setmodal_small(false)
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
      ) : (
        <Card>
          <h5 className="text-center p-1">You don't have permission to access</h5>
        </Card>
      )}
    </React.Fragment>
  )
}

export default Branch
