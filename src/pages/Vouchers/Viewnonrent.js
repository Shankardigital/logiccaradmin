import React, { useEffect, useState } from "react"
import { Container, Row, Col, Button, Table } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer } from "react-toastify"
import { Link } from "react-router-dom"
import { saveAs } from 'file-saver'
import axios from "axios"

const Rentinvoice = () => {
  const custid = sessionStorage.getItem("invoice1")
  const [user, setuser] = useState([])
  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  useEffect(() => {
    getoneAll()
  }, [])

  const [Extra, setExtra] = useState([])
  const getoneAll = () => {
    var token = datas
    const dataArray = new FormData()

    dataArray.append("bookingId", custid)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/voucher/getallnonrentalsbybookingid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setExtra(res.data.invoiceResult)
      })
  }


  const getoneInvoice = ds => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("_id", ds._id)

    axios
      .post(
        "http://103.186.185.77:5021/api/v1/admin/voucher/getnonrentalbyid",
        dataArray,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setuser(res.data.invoiceResult[0])
        downloadImage()
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
              <Link to="/non-rentInvoice"><Button className="mb-3" style={{ float: "right" }} color="info"><i className="far fa-arrow-alt-circle-left"></i> Back</Button></Link>
            </Col>
            <Table className="table table-bordered mb-4 mt-3">
              <thead>
                <tr className="text-center">
                  <th>S.No </th>
                  <th>Images</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Extra.map((data, i) => (
                  <tr key={i} className="text-center">
                    <td style={{ marginTop: "150px" }}>{i + 1}</td>
                    <td>
                      <div key={i}>
                        <img src={"http://103.186.185.77:5021/" + data.softCopy} height="300px" />
                      </div>
                    </td>
                    <td>
                      <Button onClick={() => {
                        getoneInvoice(data)
                      }} color="primary" style={{ marginTop: "150px" }}>
                        <i className="fas fa-cloud-download-alt"></i> Download invoice
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment >
  )
}

export default Rentinvoice


