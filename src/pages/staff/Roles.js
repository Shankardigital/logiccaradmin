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
  dashboardview: false,
  serviceview: false,
  bookingview: false,
  inventoryview: false,
  inventoryadd: false,
  reportsview: false,
  nonrentalview: false,
  issuesview: false,
  rolesview: false,
  usersview: false,
  usersadd: false,
  usersedit: false,
  userdelete: false,
  deptMgtView: false,
  deptMgtAdd: false,
  deptMgtEdit: false,
  deptMgtDelete: false,
  notificationMgtView: false,
  notificationMgtAdd: false,
  notificationMgtEdit: false,
  notificationMgtDelete: false,
}

const Roles = () => {
  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token
  var dats = data.rolesAndPermit
  var dats1 = data.user.role

  const [staff, setstaff] = useState([])

  const getAllfeature = () => {
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
        setstaff(res.data.departmentResult)
      })
  }

  useEffect(() => {
    getAllfeature()
  }, [])

  const [selectedOptions, setSelectedOptions] = useState([])

  const [checked, setchecked] = useState([])

  const [ras, setras] = useState([])

  // console.log(ras)

  function handleSelect(details) {
    setSelectedOptions(details)
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", details.value)
    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/staff/getdeptrolepermit",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {

        setras(res.data.permissions)

      })
  }

  const optionGroup1 = staff.map(response => ({
    value: response._id,
    label: response.departmentName,
  }))

  const handleSubmit = e => {
    e.preventDefault()
    Addrole()
  }

  const check = {
    dashboardview: ras.dashboardview,
    serviceview: ras.serviceview,
    bookingview: ras.bookingview,
    inventoryview: ras.inventoryview,
    inventoryadd: ras.inventoryadd,
    reportsview: ras.reportsview,
    issuesview: ras.issuesview,
    nonrentalview: ras.nonrentalview,
    rolesview: ras.rolesview,
    usersview: ras.usersview,
    usersadd: ras.usersadd,
    usersedit: ras.usersedit,
    userdelete: ras.userdelete,
    deptMgtView: ras.deptMgtView,
    deptMgtAdd: ras.deptMgtAdd,
    deptMgtEdit: ras.deptMgtEdit,
    deptMgtDelete: ras.deptMgtDelete,
    notificationMgtView: ras.notificationMgtView,
    notificationMgtAdd: ras.notificationMgtAdd,
    notificationMgtEdit: ras.notificationMgtEdit,
    notificationMgtDelete: ras.notificationMgtDelete,
  }

  let miny = JSON.stringify(check)

  // console.log(miny)

  const Addrole = () => {
    var token = datas
    const driverid = selectedOptions.value
    const dataArray = new FormData()
    dataArray.append("roleAndPermit", miny)
    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/staff/editdeptroleandpermit" +
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


  const handleChange1s = e => {
    const myUser = { ...ras }
    myUser[e.target.name] = e.target.checked
    setras(myUser)
  }

  return (
    <React.Fragment>
      {dats.rolesview == true || dats1 == "admin" ? (
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Roles" />

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
                          <Label>Departments</Label>
                          <Select
                            required
                            options={optionGroup1}
                            placeholder="Select Departments "
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
                              <tr>
                                <th scope="row">Dashboards</th>
                                <td>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      style={{ fontSize: "18px" }}
                                      name="dashboardview"
                                      defaultChecked={ras.dashboardview}
                                      value={ras.dashboardview}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                      id="read"
                                    />
                                    <Label
                                      className="form-check-label mt-1"
                                      for="read"
                                    >
                                      Access
                                    </Label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>

                              </tr>
                              <tr>
                                <th scope="row">Service Request</th>
                                <td>
                                  <div className="form-check mb-3">
                                    <input
                                      style={{ fontSize: "18px" }}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="defaultCheck02"
                                      name="serviceview"
                                      defaultChecked={ras.serviceview}
                                      value={ras.serviceview}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="defaultCheck02"
                                    >
                                      Access
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">Booking Management</th>
                                <td>
                                  <div className="form-check mb-3">
                                    <input
                                      style={{ fontSize: "18px" }}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="defaultCheck0a2"
                                      name="bookingview"
                                      defaultChecked={ras.bookingview}
                                      value={ras.bookingview}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="defaultCheck0a2"
                                    >
                                      Access
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">Inventory</th>
                                <td>
                                  <div className="form-check mb-3">
                                    <input
                                      style={{ fontSize: "18px" }}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="defaultCheck0c2"
                                      name="inventoryview"
                                      defaultChecked={ras.inventoryview}
                                      value={ras.inventoryview}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="defaultCheck0c2"
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
                                      id="defaultCheck0c3"
                                      name="inventoryadd"
                                      defaultChecked={ras.inventoryadd}
                                      value={ras.inventoryadd}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="defaultCheck0c3"
                                    >
                                      Add
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">Reports</th>
                                <td>
                                  <div className="form-check mb-3">
                                    <input
                                      style={{ fontSize: "18px" }}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="defaultCheck020"
                                      name="reportsview"
                                      defaultChecked={ras.reportsview}
                                      value={ras.reportsview}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="defaultCheck020"
                                    >
                                      Access
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">Non Rental Chargers </th>
                                <td>
                                  <div className="form-check mb-3">
                                    <input
                                      style={{ fontSize: "18px" }}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="defaultCheck002"
                                      name="nonrentalview"
                                      defaultChecked={ras.nonrentalview}
                                      value={ras.nonrentalview}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="defaultCheck002"
                                    >
                                      Access
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">Issues Managenent </th>
                                <td>
                                  <div className="form-check mb-3">
                                    <input
                                      style={{ fontSize: "18px" }}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="issuesview"
                                      name="issuesview"
                                      defaultChecked={ras.issuesview}
                                      value={ras.issuesview}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="issuesview"
                                    >
                                      Access
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>

                              <tr>
                                <th scope="row">Roles</th>
                                <td>
                                  <div className="form-check mb-3">
                                    <input
                                      style={{ fontSize: "18px" }}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="defaultCheck012"
                                      name="rolesview"
                                      defaultChecked={ras.rolesview}
                                      value={ras.rolesview}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="defaultCheck012"
                                    >
                                      Access
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">Admins</th>
                                <td>
                                  <div className="form-check mb-3">
                                    <input
                                      style={{ fontSize: "18px" }}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="usersview"
                                      name="usersview"
                                      defaultChecked={ras.usersview}
                                      value={ras.usersview}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="usersview"
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
                                      id="usersadd"
                                      name="usersadd"
                                      defaultChecked={ras.usersadd}
                                      value={ras.usersadd}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="usersadd"
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
                                      id="usersedit"
                                      name="usersedit"
                                      defaultChecked={ras.usersedit}
                                      value={ras.usersedit}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="usersedit"
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
                                      id="userdelete"
                                      name="userdelete"
                                      defaultChecked={ras.userdelete}
                                      value={ras.userdelete}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="userdelete"
                                    >
                                      Block
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
                                      id="defaultCheck0b4"
                                      name="deptMgtView"
                                      defaultChecked={ras.deptMgtView}
                                      value={ras.deptMgtView}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
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
                                      id="defaultCheck0b2"
                                      name="deptMgtAdd"
                                      defaultChecked={ras.deptMgtAdd}
                                      value={ras.deptMgtAdd}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
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
                                      defaultChecked={ras.deptMgtEdit}
                                      value={ras.deptMgtEdit}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
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
                                      id="defaultCheck0b5"
                                      name="deptMgtDelete"
                                      defaultChecked={ras.deptMgtDelete}
                                      value={ras.deptMgtDelete}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="defaultCheck0b5"
                                    >
                                      Block
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
                                      id="defaultCheck104"
                                      name="notificationMgtView"
                                      defaultChecked={ras.notificationMgtView}
                                      value={ras.notificationMgtView}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
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
                                      id="defaultCheck102"
                                      name="notificationMgtAdd"
                                      defaultChecked={ras.notificationMgtAdd}
                                      value={ras.notificationMgtAdd}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
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
                                      defaultChecked={ras.notificationMgtEdit}
                                      value={ras.notificationMgtEdit}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
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
                                      id="defaultCheck105"
                                      name="notificationMgtDelete"
                                      defaultChecked={ras.notificationMgtDelete}
                                      value={ras.notificationMgtDelete}
                                      onClick={e => {
                                        handleChange1s(e)
                                      }}
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
      ) : (
        <Card>
          <h5 className="text-center p-1">You don't have permission to access</h5>
        </Card>
      )}
    </React.Fragment>
  )
}

export default Roles
