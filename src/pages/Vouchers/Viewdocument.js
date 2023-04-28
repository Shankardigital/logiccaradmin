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
  InputGroup,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import classnames from "classnames"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { URL } from "../../Apiurl"
import Select from "react-select"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { Link } from "react-router-dom"
import { saveAs } from "file-saver"
import invoice from "../../assets/images/latest/inv.jpg"

const Documentview = () => {
  const downloadImage = () => {
    saveAs(invoice) // Put your image url here.
  }

  const [show, setshow] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Logic Cars Admin" breadcrumbItem="Document" />

          <Row>
            <div>
              <Link to="/document">
                <Button
                  className="mb-3"
                  style={{ float: "right" }}
                  color="info"
                >
                  <i className="far fa-arrow-alt-circle-left"></i> Back
                </Button>
              </Link>
            </div>
            <Card>
              <CardBody>
                <div className="text-center">
                  <img src={invoice} style={{ width: "700px" }} />
                </div>

                <div className="mt-3 mb-3" style={{ float: "right" }}>
                  <Button onClick={downloadImage} mt-3 color="primary">
                    <i className="fas fa-cloud-download-alt"></i> Download
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Documentview
