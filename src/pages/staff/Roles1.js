import React, { useEffect, useState } from "react"
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
  Table,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"
import Select from "react-select"

const checkeds = {
  userMgtAdd: true,
  userMgtEdit: true,
  userMgtView: true,
  userMgtDelete: true,
  driverMgtAdd: true,
  driverMgtEdit: true,
  driverMgtView: true,
  driverMgtDelete: true,
  staffMgtAdd: true,
  staffMgtEdit: true,
  staffMgtView: true,
  staffMgtDelete: true,
  deptMgtAdd: true,
  deptMgtEdit: true,
  deptMgtView: true,
  deptMgtDelete: true,
  desigMgtAdd: true,
  desigMgtEdit: true,
  desigMgtView: true,
  desigMgtDelete: true,
  carMgtAdd: true,
  carMgtEdit: true,
  carMgtView: true,
  carMgtDelete: true,
  bookingMgtAdd: true,
  bookingMgtEdit: true,
  bookingMgtView: true,
  bookingMgtDelete: true,
  bannerMgtAdd: true,
  bannerMgtEdit: true,
  bannerMgtView: true,
  bannerMgtDelete: true,
  couponMgtAdd: true,
  couponMgtEdit: true,
  couponMgtView: true,
  couponMgtDelete: true,
  notificationMgtAdd: true,
  notificationMgtEdit: true,
  notificationMgtView: true,
  notificationMgtDelete: true,
}

const Roles = () => {
  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const [staff, setstaff] = useState([])

  const getAllfeature = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/branch/getallactivebranchmanagers",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setstaff(res.data.profiles)
      })
  }

  useEffect(() => {
    getAllfeature()
  }, [])

  const [selectedOptions, setSelectedOptions] = useState([])

  function handleSelect(details) {
    setSelectedOptions(details)
    getAllRoles(details.value)
  }

  const optionGroup1 = staff.map(response => ({
    value: response._id,
    label: response.name,
  }))

  const [checked, setchecked] = useState([])

  console.log(checked)

  const getAllRoles = val => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", val)
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/branch/getbranchManager",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        if (res.data.profile.roleAndPermit == 0) {
          setchecked(res.data.profile.roleAndPermit)
        } else {
          setchecked(res.data.profile.roleAndPermit[0])
        }
      })
  }

  const changefixedcheckboxValues = e => {
    let checked = e.target.checked
    let dv = { ...checked }
    dv[e.target.name] = checked
    setchecked(dv)
  }
  const handleSubmit = e => {
    e.preventDefault()
    Addrole()
  }

  const check = [{
    userMgtAdd: checked.userMgtAdd,
    userMgtAdd: checked.userMgtAdd,
    userMgtView: checked.userMgtView,
    userMgtDelete: checked.userMgtDelete,
    driverMgtAdd: checked.driverMgtAdd,
    driverMgtEdit: checked.driverMgtEdit,
    driverMgtView: checked.driverMgtView,
    driverMgtDelete: checked.driverMgtDelete,
    staffMgtAdd: checked.staffMgtAdd,
    staffMgtEdit: checked.staffMgtEdit,
    staffMgtView: checked.staffMgtView,
    staffMgtDelete: checked.staffMgtDelete,
    deptMgtAdd: checked.deptMgtAdd,
    deptMgtEdit: checked.deptMgtEdit,
    deptMgtView: checked.deptMgtView,
    deptMgtDelete: checked.deptMgtDelete,
    desigMgtAdd: checked.desigMgtAdd,
    desigMgtEdit: checked.desigMgtEdit,
    desigMgtView: checked.desigMgtView,
    desigMgtDelete: checked.desigMgtDelete,
    carMgtAdd: checked.carMgtAdd,
    carMgtEdit: checked.carMgtEdit,
    carMgtView: checked.carMgtView,
    carMgtDelete: checked.carMgtDelete,
    bookingMgtAdd: checked.bookingMgtAdd,
    bookingMgtEdit: checked.bookingMgtEdit,
    bookingMgtView: checked.bookingMgtView,
    bookingMgtDelete: checked.bookingMgtDelete,
    bannerMgtAdd: checked.bannerMgtAdd,
    bannerMgtEdit: checked.bannerMgtEdit,
    bannerMgtView: checked.bannerMgtView,
    bannerMgtDelete: checked.bannerMgtDelete,
    couponMgtAdd: checked.couponMgtAdd,
    couponMgtEdit: checked.couponMgtEdit,
    couponMgtView: checked.couponMgtView,
    couponMgtDelete: checked.couponMgtDelete,
    notificationMgtAdd: checked.notificationMgtAdd,
    notificationMgtEdit: checked.notificationMgtEdit,
    notificationMgtView: checked.notificationMgtView,
    notificationMgtDelete: checked.notificationMgtDelete,
  }]

  let miny = JSON.stringify(check);

  console.log(miny)

  const Addrole = () => {
    var token = datas
    const driverid = selectedOptions.value
    const dataArray = new FormData()
    dataArray.append("roleAndPermit", checked)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/staff/editstaffroleandpermit" +
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
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  // className="form-check-input"
  // type="checkbox"
  // id="flexCheckChecked"
  // name="toilet_access_check"
  // checked={
  //   toiletTopology.toilet_access_check == true
  // }
  // onClick={(e) => changefixedcheckboxValues(e)}

  // const changefixedcheckboxValues = (e) => {
  //   let checked = e.target.checked;
  //   let dv = { ...toiletTopology };
  //   dv[e.target.name] = checked;
  //   settoiletTopology(dv);
  //   console.log(toiletTopology);
  // };

  const changefixedcheckboxValuess = e => {
    console.log(e.target.checked)
    let checkeds = e.target.checked
    let dv = { ...checked }
    dv[e.target.name] = checkeds
    setchecked(dv)
  }

  const handleChange1 = e => {
    let myUser = { ...checked }
    myUser[e.target.name] = e.target.value
    setchecked(myUser)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Departments" />

          <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white">
                  <CardTitle>Roles</CardTitle>
                </CardHeader>

                <CardBody>
                  <Form
                    onSubmit={e => {
                      handleSubmit(e)
                    }}
                  >
                    <Row>
                      <Col md={4}>
                        <Label>Staff Name</Label>
                        <Select
                          required
                          options={optionGroup1}
                          placeholder="Select Users"
                          value={selectedOptions}
                          onChange={handleSelect}
                          isSearchable={true}
                          name="userList"
                        />
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <h5>Role Permissions</h5>
                      <Col md={12}>
                        <Table>
                          <tbody>
                            {/* <tr>
                              <th scope="row">Administrator Access</th>
                              <td colSpan={4}>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={form.userMgtAdd == false}
                                    onClick={e => changefixedcheckboxValues1(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck1"
                                  >
                                    Select All
                                  </label>
                                </div>
                              </td>
                            </tr> */}
                            <tr>
                              <th scope="row">User Management</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    style={{ fontSize: "18px" }}
                                    name="userMgtAdd"
                                    checked={
                                      checked.userMgtAdd == true ? true : false
                                    }
                                    onChange={e =>
                                      changefixedcheckboxValuess(e)
                                    }
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck2"
                                  >
                                    Add
                                  </label>

                                  {/* <input
                                    type="checkbox"
                                    className="form-check-input"
                                    style={{ fontSize: "18px" }}
                                    name="userMgtAdd"

                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck2"
                                  >
                                    Add
                                  </label> */}


                                  
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckChecked"
                                    name="userMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck3"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckChecked"
                                    name="userMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck4"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckChecked"
                                    name="userMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck5"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Driver Management</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck02"
                                    name="driverMgtAdd"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck02"
                                  >
                                    Add
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck03"
                                    name="driverMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck03"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck04"
                                    name="driverMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck04"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck05"
                                    name="driverMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck05"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Staff Management</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0a2"
                                    name="staffMgtAdd"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0a2"
                                  >
                                    Add
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0a3"
                                    name="staffMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0a3"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0a4"
                                    name="staffMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0a4"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0a5"
                                    name="staffMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0a5"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Department</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0b2"
                                    name="deptMgtAdd"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0b2"
                                  >
                                    Add
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0b3"
                                    name="deptMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0b3"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0b4"
                                    name="deptMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0b4"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0b5"
                                    name="deptMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0b5"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Designations</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0c2"
                                    name="desigMgtAdd"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0c2"
                                  >
                                    Add
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0c3"
                                    name="desigMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0c3"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0c4"
                                    name="desigMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0c4"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0c5"
                                    name="desigMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0c5"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Car Management</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck020"
                                    name="carMgtAdd"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck020"
                                  >
                                    Add
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck030"
                                    name="carMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck030"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck040"
                                    name="carMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck040"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck050"
                                    name="carMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck050"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Booking Management</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck002"
                                    name="bookingMgtAdd"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck002"
                                  >
                                    Add
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck003"
                                    name="bookingMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck003"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck004"
                                    name="bookingMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck004"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck005"
                                    name="bookingMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck005"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Banners</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    name="bannerMgtAdd"
                                    id="defaultCheck0002"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0002"
                                  >
                                    Add
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0003"
                                    name="bannerMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0003"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0004"
                                    name="bannerMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0004"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck0005"
                                    name="bannerMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck0005"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Coupons</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck012"
                                    name="couponMgtAdd"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck012"
                                  >
                                    Add
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck013"
                                    name="couponMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck013"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck014"
                                    name="couponMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck014"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck015"
                                    name="couponMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck015"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Notifications</th>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck102"
                                    name="notificationMgtAdd"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck102"
                                  >
                                    Add
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck103"
                                    name="notificationMgtEdit"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck103"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck104"
                                    name="notificationMgtView"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck104"
                                  >
                                    View
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="form-check mb-3">
                                  <input
                                    style={{ fontSize: "18px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck105"
                                    name="notificationMgtDelete"
                                    onChange={e => changefixedcheckboxValues(e)}
                                  />
                                  <label
                                    className="form-check-label mt-1"
                                    htmlFor="defaultCheck105"
                                  >
                                    Delete
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
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
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Rolesz




const Roless = () => {
  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const [staff, setstaff] = useState([])

  const getAllfeature = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("branchId", localStorage.getItem("ids"))
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/branch/getallactivebranchmanagers",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setstaff(res.data.profiles)
      })
  }

  useEffect(() => {
    getAllfeature()
  }, [])

  const [selectedOptions, setSelectedOptions] = useState([])

  const [checked, setchecked] = useState([])

  const [ras, setras] = useState([])

  console.log(ras)

  function handleSelect(details) {
    setSelectedOptions(details)
    // getAllRoles(details.value)
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", details.value)
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/branch/getbranchManager",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        if (res.data.profile.roleAndPermit == 0) {
          setchecked(res.data.profile.roleAndPermit)
          setras(res.data.profile.roleAndPermit)
        } else {
          setchecked(res.data.profile.roleAndPermit[0])
          setras(res.data.profile.roleAndPermit[0])
        }
      })
  }

  const optionGroup1 = staff.map(response => ({
    value: response._id,
    label: response.name,
  }))

  const handleSubmit = e => {
    e.preventDefault()
    Addrole()
  }

  const check = {
    userMgtAdd: checked.userMgtAdd,
    userMgtEdit: checked.userMgtEdit,
    userMgtView: checked.userMgtView,
    userMgtDelete: checked.userMgtDelete,

    driverMgtAdd: checked.driverMgtAdd,
    driverMgtEdit: checked.driverMgtEdit,
    driverMgtView: checked.driverMgtView,
    driverMgtDelete: checked.driverMgtDelete,

    staffMgtAdd: checked.staffMgtAdd,
    staffMgtEdit: checked.staffMgtEdit,
    staffMgtView: checked.staffMgtView,
    staffMgtDelete: checked.staffMgtDelete,

    deptMgtAdd: checked.deptMgtAdd,
    deptMgtEdit: checked.deptMgtEdit,
    deptMgtView: checked.deptMgtView,
    deptMgtDelete: checked.deptMgtDelete,

    desigMgtAdd: checked.desigMgtAdd,
    desigMgtEdit: checked.desigMgtEdit,
    desigMgtView: checked.desigMgtView,
    desigMgtDelete: checked.desigMgtDelete,

    carMgtAdd: checked.carMgtAdd,
    carMgtEdit: checked.carMgtEdit,
    carMgtView: checked.carMgtView,
    carMgtDelete: checked.carMgtDelete,

    bookingMgtAdd: checked.bookingMgtAdd,
    bookingMgtEdit: checked.bookingMgtEdit,
    bookingMgtView: checked.bookingMgtView,
    bookingMgtDelete: checked.bookingMgtDelete,

    bannerMgtAdd: checked.bannerMgtAdd,
    bannerMgtEdit: checked.bannerMgtEdit,
    bannerMgtView: checked.bannerMgtView,
    bannerMgtDelete: checked.bannerMgtDelete,

    couponMgtAdd: checked.couponMgtAdd,
    couponMgtEdit: checked.couponMgtEdit,
    couponMgtView: checked.couponMgtView,
    couponMgtDelete: checked.couponMgtDelete,

    notificationMgtAdd: checked.notificationMgtAdd,
    notificationMgtEdit: checked.notificationMgtEdit,
    notificationMgtView: checked.notificationMgtView,
    notificationMgtDelete: checked.notificationMgtDelete,
  }

  let miny = JSON.stringify(check)

  console.log(miny)

  const Addroles = () => {
    var token = datas
    const driverid = selectedOptions.value
    const dataArray = new FormData()
    dataArray.append("roleAndPermit", miny)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/staff/editstaffroleandpermit" +
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
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const handleChange1 = e => {
    let myUser = { ...checked }
    myUser[e.target.name] = e.target.value
    setchecked(myUser)
  }

  const handleChange1s = e => {
    const myUser = { ...ras }
    myUser[e.target.name] = e.target.checked
    setras(myUser)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Departments" />

          <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white">
                  <CardTitle>Roles</CardTitle>
                </CardHeader>

                <CardBody>
                  <Form
                    onSubmit={e => {
                      handleSubmit(e)
                    }}
                  >
                    <Input
                      defaultChecked={ras.userMgtAdd}
                      onClick={e => {
                        handleChange1s(e)
                      }}
                      value={ras.userMgtAdd}
                      name="userMgtAdd"
                      type="checkbox"
                      id="read"
                    />
                    <Label className="form-check-label" for="read">
                      Add
                    </Label>

                    <Row>
                      <Col md={4}>
                        <Label>Manager Name</Label>
                        <Select
                          required
                          options={optionGroup1}
                          placeholder="Select  Manager"
                          value={selectedOptions}
                          onChange={handleSelect}
                          isSearchable={true}
                          name="userList"
                        />
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <h5 className=" mb-3">Role Permissions</h5>
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">User Management : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.userMgtAdd}
                            name="userMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.userMgtEdit}
                            name="userMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.userMgtView}
                            name="userMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.userMgtDelete}
                            name="userMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
                    </Row>

                    <Row className="mt-3">
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">Driver Management : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.driverMgtAdd}
                            name="driverMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.driverMgtEdit}
                            name="driverMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.driverMgtView}
                            name="driverMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.driverMgtDelete}
                            name="driverMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">Staff Management : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.staffMgtAdd}
                            name="staffMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.staffMgtEdit}
                            name="staffMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.staffMgtView}
                            name="staffMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.staffMgtDelete}
                            name="staffMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">Department : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.deptMgtAdd}
                            name="deptMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.deptMgtEdit}
                            name="deptMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.deptMgtView}
                            name="deptMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.deptMgtDelete}
                            name="deptMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">Designations : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.desigMgtAdd}
                            name="desigMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.desigMgtEdit}
                            name="desigMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.desigMgtView}
                            name="desigMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.desigMgtDelete}
                            name="desigMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">Car Management : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.carMgtAdd}
                            name="carMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.carMgtEdit}
                            name="carMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.carMgtView}
                            name="carMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.carMgtDelete}
                            name="carMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">Booking Management : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.bookingMgtAdd}
                            name="bookingMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.bookingMgtEdit}
                            name="bookingMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.bookingMgtView}
                            name="bookingMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.bookingMgtDelete}
                            name="bookingMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">Banners : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.bannerMgtAdd}
                            name="bannerMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.bannerMgtEdit}
                            name="bannerMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.bannerMgtView}
                            name="bannerMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.bannerMgtDelete}
                            name="bannerMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
                    </Row>

                    <Row className="mt-3">
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">Coupons : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.couponMgtAdd}
                            name="couponMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.couponMgtEdit}
                            name="couponMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.couponMgtView}
                            name="couponMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.couponMgtDelete}
                            name="couponMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
                    </Row>

                    <Row className="mt-3">
                      <Col md={2}>
                        {" "}
                        <p className="mt-4 mb-3">Notifications : </p>
                      </Col>{" "}
                      <Col md={1}></Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Add</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.notificationMgtAdd}
                            name="notificationMgtAdd"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Edit</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.notificationMgtEdit}
                            name="notificationMgtEdit"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">View</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.notificationMgtView}
                            name="notificationMgtView"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>
                      <Col md={2}>
                        <div className="form-check mb-3">
                          <Label for="basicpill-firstname-input3">Delete</Label>

                          <select
                            onChange={e => {
                              handleChange1(e)
                            }}
                            value={checked.notificationMgtDelete}
                            name="notificationMgtDelete"
                            className="form-select"
                          >
                            <option value="">Select</option>
                            <option value="true">Show</option>
                            <option value="false">Hide</option>
                          </select>
                        </div>{" "}
                      </Col>{" "}
                      <Col md={1}></Col>
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
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}


