import React, { useEffect, useState } from "react"
import {
  Button,
  Card,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
  Table,
  Modal,
  Form,
  Label,
  CardBody, Progress
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Badge from "react-bootstrap/Badge"
import Dropzone from "react-dropzone"
import Addcarsxl from '../assets/images/new.csv'
import loader from '../assets/images/latest/loader.gif'
import { saveAs } from 'file-saver';

const Cars = () => {
  const [cars, setcars] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const getAllcars = () => {
    setIsLoading(true);
    var token = datas
    axios.post(
      "http://103.186.185.77:5021/api/v1/admin/inventory/getallinventory", {},

      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then(res => {
        setcars(res.data.InventoryResult)
        setIsLoading(false);
      })
  }

  // const [Files, setFiles] = useState("");

  // const changeHandler = (e) => {
  //   setFiles(e.target.files);
  // };

  const [selectedFiles, setselectedFiles] = useState([])

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }

  const addAllcars = (e) => {
    e.preventDefault()
    var token = datas
    const dataArray = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      dataArray.append("xlfile", selectedFiles[i]);
    }
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/inventory/addinventory",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {

        if (res.status === 200) {
          toast(res.data.message)
          setmodal_small1(false)
          getAllcars()
        }
      },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }

        })
  }

  useEffect(() => {
    getAllcars()
  }, [])

  const [listPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = cars.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(cars.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  const [form0, setform0] = useState(false)
  const [form01, setform01] = useState(false)

  const handlechangescar = e => {
    setform0(!form0)
    populercars(e)
  }
  const handlechangescarf = e => {
    setform01(!form01)
    Featurcars(e)
  }

  const history = useHistory()

  function handleClick123() {
    history.push("/editcar")
  }
  function handleClick1234() {
    history.push("/car-details")
  }

  const getdata = data => {
    sessionStorage.setItem("carid", data._id)

    handleClick123()
  }
  const getdata1 = data => {
    sessionStorage.setItem("carid", data._id)

    handleClick1234()
  }

  const [remam, setremam] = useState([])

  const handleChange2 = e => {
    let myUser = { ...remam }
    myUser[e.target.name] = e.target.value
    setremam(myUser)
  }

  const [modal_small2, setmodal_small2] = useState(false)

  function tog_small2() {
    setmodal_small2(!modal_small2)
  }

  const getpopup2 = data => {
    setremam(data)
    tog_small2()
  }

  const [search, setsearch] = useState([])

  const searchAll = e => {
    let myUser = { ...search }
    myUser[e.target.name] = e.target.value
    setsearch(myUser)
    var token = datas
    axios
      .post(
        `http://103.186.185.77:5021/api/v1/admin/inventory/search/?searchQuery=${e.target.value}`, {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setcars(res.data.invenResult)
      })
  }

  const handleSubmit1 = e => {
    e.preventDefault()
    editbrands()
  }

  const editbrands = () => {
    var token = datas
    const docid = remam._id
    const dataArray = new FormData()
    dataArray.append("isActive", remam.isActive)
    axios
      .patch(
        "http://103.186.185.77:5021/api/v1/admin/car/updatecarstatus" +
        "/" +
        docid,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            setmodal_small2(false)
            getAllcars()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const [modal_small23, setmodal_small23] = useState(false)

  function tog_small23() {
    setmodal_small23(!modal_small23)
  }

  const [modal_small24, setmodal_small24] = useState(false)

  function tog_small24() {
    setmodal_small24(!modal_small24)
  }

  const [remam23, setremam23] = useState([])

  const handleChange23 = e => {
    let myUser = { ...remam23 }
    myUser[e.target.name] = e.target.value
    setremam23(myUser)
  }

  const getpopup3 = data => {
    setremam23(data)
    tog_small23()
  }

  const [remam24, setremam24] = useState([])

  const handleChange24 = e => {
    let myUser = { ...remam24 }
    myUser[e.target.name] = e.target.value
    setremam24(myUser)
  }

  const getpopup4 = data => {
    setremam24(data)
    tog_small24()
  }

  const handleSubmit123 = e => {
    e.preventDefault()
    populercars()
  }

  const handleSubmit1234 = e => {
    e.preventDefault()
    Featurcars()
  }

  const populercars = () => {
    var token = datas
    var remid = remam23._id
    const dataArray = new FormData()
    dataArray.append("isLuxury", remam23.isLuxury)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/car/updatecartoluxury" +
        "/" +
        remid,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllcars()
            tog_small23()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const Featurcars = () => {
    var token = datas
    var remid = remam24._id
    const dataArray = new FormData()
    dataArray.append("isFeatured", remam24.isFeatured)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/car/updatecartofeatured" +
        "/" +
        remid,
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getAllcars()
            tog_small24()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

  const [modal_small1, setmodal_small1] = useState(false)

  function tog_small1() {
    setmodal_small1(!modal_small1)
    removeBodyCss()
  }

  const getpopup1 = () => {
    tog_small1()
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  const downloadImage = () => {
    saveAs(Addcarsxl)

  }



  return (
    <React.Fragment>
      {dats.inventoryview == true || dats1 == "admin" ? (
        <div className="page-content">
          <Container fluid={true}>
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Inventory" />

            <Container>
              <Row>
                <Col md={12}>
                  <div className="row">
                    <div className="col">
                      <Input
                        onChange={(e) => { searchAll(e) }}
                        type="search"
                        style={{ width: "100%" }}
                        className="form-control"
                        placeholder="Search.."
                        name="search"
                      />

                    </div>

                    <div className="col">

                      <select
                        value=""
                        name=""
                        className="form-select"
                      >
                        <option value="">Make</option>
                      </select>

                    </div>
                    <div className="col">
                      <select
                        value=""
                        name=""
                        className="form-select"
                      >
                        <option value="">
                          Model</option>
                      </select>
                    </div>
                    <div className="col">
                      <select
                        value=""
                        name=""
                        className="form-select"
                      >
                        <option value="">Year</option>
                      </select>
                    </div>

                    <div className="col">
                      <select
                        value=""
                        name=""
                        className="form-select"
                      >
                        <option value="">Availability </option>
                      </select>
                    </div>
                    <div className="col">
                      <select
                        value=""
                        name=""
                        className="form-select"
                      >
                        <option value="">Features</option>
                      </select>
                    </div>
                    <div className="col">
                      <select
                        value=""
                        name=""
                        className="form-select"
                      >
                        <option value="">Showroom</option>
                      </select>
                    </div>
                    <div className="col">

                      {/* <Link to="/add-car"> */}
                      {dats.inventoryadd == true || dats1 == "admin" ? (
                        <Button
                          style={{
                            float: "right",
                            background: "#1A374D",
                            color: "white",

                          }}
                          onClick={() => {
                            getpopup1();
                          }}
                        >
                          Add Car
                        </Button>
                      ) : (
                        ""
                      )}
                      {/* </Link> */}

                    </div>
                  </div>

                  <div>
                    {isLoading ? <div style={{ zIndex: "9999999999999" }} className="text-center mt-5 pt-5">
                      <img src={loader} height="110px" />
                      {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'none', display: 'block' }} width="200px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                      <path fill="none" d="M50 30A20 20 0 0 1 50 70A20 20 0 0 1 50 30" stroke="#e9bf2a" strokeWidth={40}>
                        <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.0869565217391304" values="0 0 0 126;0 0 126 126;0 126 126 126" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
                        <animate attributeName="stroke" values="#e9bf2a;#14324a;#4995d7;#040101;#e9bf2a" keyTimes="0;0.25;0.5;0.75;1" dur="4.3478260869565215s" calcMode="discrete" repeatCount="indefinite" />
                      </path>
                    </svg> */}
                    </div> :
                      <Card className="mt-4">
                        <CardBody>
                          <div className="table-responsive">
                            <Table className="table table-bordered mb-2  mt-2">
                              <thead>
                                <tr className="text-center">
                                  <th>Sl no</th>
                                  <th>STOCK</th>
                                  <th>SKU </th>
                                  <th>MAKE</th>
                                  <th> MODEL</th>
                                  <th>TRIM </th>
                                  <th>YEAR </th>
                                  <th>AVAILABILITY  </th>
                                  <th>ACTION</th>
                                </tr>
                              </thead>
                              <tbody>
                                {lists.map((data, key) => (
                                  <tr key={key} className="text-center">
                                    <th scope="row">
                                      {(pageNumber - 1) * 10 + key + 11}
                                    </th>
                                    <td>
                                      <Badge bg="success">
                                        Real</Badge>
                                    </td>
                                    <td>
                                      <Link to="/CarSpecs"><a style={{ color: 'rgb(2,117,255)' }}><u>{data.vinNumber}</u></a></Link></td>
                                    <td>
                                      {data.model}
                                    </td>
                                    <td> {data.trim}
                                    </td>

                                    <td>BASIC</td>
                                    <td>{data.modelYear}</td>
                                    <td>

                                      <Badge bg="success">
                                        50/0
                                      </Badge>


                                      <Progress
                                        value="50"
                                        style={{ height: '3px', marginTop: "5px" }}

                                      />


                                    </td>
                                    <td>

                                      <Link to="/ViewCarDetails">
                                        <Button
                                          style={{ padding: "3px", margin: "3px" }}
                                          color="info"
                                          outline
                                        >
                                          <i className="fas fa-info-circle" style={{ color: 'rgb(2,117,255)' }}></i>
                                        </Button></Link>


                                      <Button
                                        className="m-1"
                                        style={{ padding: "3px", margin: "3px" }}
                                        color="success"
                                        outline

                                      > <i className="bx bx-caret-down" style={{ color: 'rgb(2,117,255)' }}></i>
                                      </Button>


                                      <Button
                                        style={{ padding: "3px", margin: "3px" }}
                                        color="success"
                                        outline
                                        // onClick={() => {
                                        //   getdata(data)
                                        // }}
                                        onClick={() => {
                                          getpopup2();
                                        }}

                                      >
                                        <i className="bx bx-plus-medical" style={{ color: 'rgb(2,117,255)' }}></i>
                                      </Button>
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
                          </div></CardBody>
                      </Card>
                    }
                  </div>


                  {/* <div className="table-responsive">
                    <Table className="table table-bordered mb-5 mt-3">
                      <thead>
                        <tr className="text-center">
                          <th>Sl no</th>
                          <th>Car Image</th>
                          <th>Car Type </th>
                          <th>Car Brand </th>

                          <th>  Model</th>
                          <th>Year </th>
                          <th>Color </th>
                          <th>City Code </th>
                          <th>Plate Code </th>
                          <th>Invoicing Group </th>
                          <th>Plate Number</th>
                          <th>Status</th>
                          <th>view</th>
                          <th>Edit</th>

                        </tr>
                      </thead>
                      <tbody>
                        {lists.map((data, key) => (
                          <tr key={key} className="text-center">
                            <th scope="row">
                              {(pageNumber - 1) * 10 + key + 11}
                            </th>
                            <td>
                              <img
                                src={
                                  "http://103.186.185.77:5021/" +
                                  data.carImage[0]
                                }
                                style={{ width: "80px" }}
                              />
                            </td>
                            <td>{data.carType}</td>
                            <td>
                              {data.carBrandName} {" "}

                            </td>
                            <td> {data.carModelName}
                            </td>

                            <td>{data.carMakeYear}</td>
                            <td>{data.carRegistNumber}</td>

                            <td>  Black   </td>

                            <td>  AUH   </td>
                            <td>  17   </td>
                            <td>  BB12   </td>
                            <td>
                              {data.isActive == true ? (
                                <Badge pill bg="success">
                                  Active
                                </Badge>
                              ) : (
                                <Badge pill bg="danger">
                                  Inactive
                                </Badge>
                              )}
                            </td>
                            <td>
                              <Button
                                onClick={() => {
                                  getdata1(data)
                                }}
                                style={{ padding: "6px", margin: "3px" }}
                                color="info"
                                outline
                              >
                                View
                              </Button>
                            </td>
                            <td>
                              {dats.carMgtEdit == true ||
                                dats1 == "admin" ? (
                                <Button
                                  onClick={() => {
                                    getdata(data)
                                  }}
                                  className="mr-2"
                                  style={{ padding: "6px", margin: "3px" }}
                                  color="success"
                                  outline
                                >

                                  Edit
                                </Button>) : (
                                ""
                              )}  </td>

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
                  </div> */}
                </Col>
                <ToastContainer />
              </Row>

              <Modal
                size="md"
                isOpen={modal_small1}
                toggle={() => {
                  tog_small1()
                }}
                centered
              >
                <form onSubmit={(e) => { addAllcars(e) }}>
                  <div className="modal-header">
                    <h5 className="modal-title mt-0" id="mySmallModalLabel">
                      Upload a spreadsheet of your vehicles
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
                    <Col md={12}>
                      <Dropzone
                        onDrop={acceptedFiles => {
                          handleAcceptedFiles(acceptedFiles)
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone">
                            <div
                              className="dz-message needsclick mt-2"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="mb-3">
                                <i className="display-4 text-muted bx bxs-cloud-upload" />
                              </div>
                              <h4>Drop files here or click to upload.</h4>
                            </div>
                          </div>
                        )}
                      </Dropzone>

                      {/* <Input type="file" onChange={changeHandler} name="xlfile" /> */}

                      <div className="dropzone-previews mt-3" id="file-previews">
                        {selectedFiles.map((f, i) => {
                          return (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {f.name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                    </Col>

                    <div className="p-3 mb-1 bg-warning text-dark mt-3">
                      <i className="bx bx-bell" style={{ fontSize: '14px' }}></i>
                      Tip: Templates need to conform to our specifications. Click <a className="m-1" onClick={downloadImage}><u>here</u></a>
                      to download a template to fill in.</div>
                  </div>
                  <hr></hr>

                  <Col md={12}><div className="mb-3" style={{ float: "right" }}>
                    <Button className="m-1" color="primary" type="submit">
                      Submit <i className="fas fa-check-circle"></i>
                    </Button>
                  </div>
                  </Col>
                </form>
              </Modal>

              <Modal
                size="md"
                isOpen={modal_small2}
                toggle={() => {
                  tog_small2()
                }}
                centered
              >
                <form onSubmit={(e) => { addAllcars(e) }}>
                  <div className="modal-header">
                    <h5 className="modal-title mt-0" id="mySmallModalLabel">
                      Car Upload
                    </h5>
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
                  <div className="modal-body row">
                    <Col md={6}>
                      <div>
                        <label>Trim:</label>
                        <Input type="text" placeholder="Trim" />
                      </div>

                      <div className="mt-2">
                        <label>Mileage:</label>
                        <Input type="number" placeholder="Mileage" />
                      </div>

                      <div className="mt-2">
                        <label>Number of Cars to Upload:</label>
                        <Input type="number" placeholder="Count" />
                      </div>

                      <div className="mt-2">
                        <label>Advance Booking Value ( Car available upto from start date ):</label>
                        <select className="form-select">
                          <option value="">Select</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="">
                        <label>Color:</label>
                        <select className="form-select">
                          <option value="">Select</option>
                          <option value="Blue">Blue</option>
                          <option value="Brown">Brown</option>
                          <option value="Brunished Copper">Brunished Copper</option>
                          <option value="Copper">Copper</option>
                          <option value="Golden">Golden</option>
                        </select>
                      </div>
                      <div className="mt-2">
                        <label>Location:</label>
                        <select className="form-select">
                          <option value="">Showroom</option>
                          <option value="Blue">Dubai, Business Bay </option>
                        </select>
                      </div>
                      <div className="mt-2">
                        <label>Start Date:</label>
                        <Input type="date" placeholder="Count" />
                      </div>
                    </Col>
                  </div>
                  <Col md={12}><div className="mb-3" style={{ float: "right" }}>
                    <Button onClick={() => {
                      getpopup2();
                    }}
                      className="m-1" color="danger" type="button">
                      Cancel <i className="fas fa-check-circle"></i>
                    </Button>
                    <Button className="m-1" color="primary" type="submit">
                      Submit <i className="fas fa-check-circle"></i>
                    </Button>
                  </div>
                  </Col>
                </form>
              </Modal>

            </Container>

          </Container>
        </div>
      ) : (
        <Card>
          <h5 className="text-center p-1">You don't have permission to access</h5>
        </Card>
      )}
    </React.Fragment>
  )
}

export default Cars
