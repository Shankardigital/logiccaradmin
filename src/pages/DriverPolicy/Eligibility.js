import React, { useEffect, useState } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { ToastContainer, toast } from "react-toastify"

function Eligibility() {
  const [form, setform] = useState([])

  console.log(form)

  useEffect(() => {
    getAllPayments()
  }, [])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const getAllPayments = () => {
    var token = datas
    const dataArray = new FormData()

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/driverPolicy/getpolicyterms",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.policyResult.eligibilityPolicy)
      })
  }
  const [modal_small, setmodal_small] = useState(false)
  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  const [text1, setText1] = useState([])

  const getpopup1 = forms => {
    setText1(forms)
    tog_small()
  }

  const submibooking = e => {
    e.preventDefault()
    changstatus()
  }

  const changstatus = () => {
    var token = datas

    const dataArray = new FormData()
    dataArray.append("eligibilityPolicy", text1)

    axios
      .put(
        "http://103.186.185.77:5021/api/v1/admin/driverPolicy/updateeligibilitypolicy",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            setmodal_small(false)
            getAllPayments()
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
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Driver Eligibility" />
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white"></CardHeader>

                <CardBody>
                  <div style={{ float: "right" }}>
                    <Button
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Edit Booking"
                      onClick={() => {
                        getpopup1(form)
                      }}
                      className="mr-5"
                      color="success"
                      outline
                    >
                      <i className="bx bx-edit text-dark "></i>
                      <span>Edit</span>
                    </Button>
                  </div>
                  <div>
                    <div>
                      <h5>Driver Eligibility</h5>
                      <div
                      className="mt-5"
                      dangerouslySetInnerHTML={{
                        __html: form,
                      }}
                    ></div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Modal
            size="lg"
            isOpen={modal_small}
            toggle={() => {
              tog_small()
            }}
            centered
          >
            <div className="modal-header">
              <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit Eligibility
              </h5><button
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

            <Form
              onSubmit={e => {
                submibooking(e)
              }}
            >
              <div className="modal-body">
                <CKEditor
                  editor={ClassicEditor}
                  id="header"
                  data={text1}
                  onReady={editor => {
                    console.log("Editor is ready to use!", editor)
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setText1(data)
                  }}
                />
              </div>

              <hr></hr>
              <div style={{ float: "right" }} className="m-2">
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
          </Modal>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Eligibility
