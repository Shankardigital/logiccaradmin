import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  Input,
  Label,
  Form,
} from "reactstrap"
import profile from "../../assets/images/profile-img.png"
import logo from "assets/images/logic 3.png"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

function Forget() {
  const [user, setUser] = useState({ emailOtp: "" })

  const handleChange = e => {
    let newadmin = { ...user }
    newadmin[e.target.name] = e.target.value
    setUser(newadmin)
  }

  const usersign = e => {
    e.preventDefault()
    Forget()
  }
const emails = sessionStorage.getItem("emails")
  const history = useHistory()

  const Forget = () => {
    const dataArray = new FormData()
    dataArray.append("emailOtp", user.emailOtp)
    dataArray.append("emailId", emails)
    axios
      .post("http://103.186.185.77:5021/api/v1/admin/compareOtp", dataArray)
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            sessionStorage.setItem("emailOtp", user.emailOtp)
            history.push("/Resetpass")
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
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-softbg-soft-primary">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Logic Cars Admin.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={e => {
                        usersign(e)
                      }}
                      method="post"
                    >
                      <div className="mb-3">
                        <Label className="form-label">ENTER OTP</Label>
                        <Input
                          name="emailOtp"
                          className="form-control"
                          placeholder="ENTER OTP"
                          type="text"
                          value={user.emailOtp}
                          onChange={e => {
                            handleChange(e)
                          }}
                          required
                        />
                      </div>
                      <Row className="mb-3">
                        <Col className="text-end">
                          <button
                            className="btn btn-primary w-md "
                            type="submit"
                          >
                            Reset
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Go back to{" "}
                  <Link to="login" className="font-weight-medium text-primary">
                    Login
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Logic Cars Admin. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Digitalraiz
                </p>
              </div>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Forget
