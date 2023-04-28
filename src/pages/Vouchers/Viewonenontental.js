import React, { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer } from "react-toastify"
import { Link } from "react-router-dom"
import { saveAs } from 'file-saver'
import axios from "axios"

const Rentinvoice = () => {
  const custid = sessionStorage.getItem("invoice")
  const [user, setuser] = useState([])
  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  useEffect(() => {
    getoneInvoice()
  }, [])

  const getoneInvoice = () => {
    var token = datas
    const dataArray = new FormData()

    dataArray.append("id", custid)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/voucher/getrentalinvoicecopy",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setuser(res.data.invoiceResult)
      })
  }
  const downloadImage = () => {
    saveAs("http://103.186.185.77:5021/" + user.softCopy)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Invoices" />
          <Row>
            <Col>
              <Button onClick={downloadImage} color="primary">
                <i className="fas fa-cloud-download-alt"></i> Download invoice
              </Button>
              <Link to="/rentInvoice"><Button className="mb-3" style={{ float: "right" }} color="info"><i className="far fa-arrow-alt-circle-left"></i> Back</Button></Link>
            </Col>
            <div className="text-center  mb-3">
              <img src={"http://103.186.185.77:5021/" + user.softCopy} height="500px" width="400px" />
            </div>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment >
  )
}

export default Rentinvoice
