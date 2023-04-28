import React from "react"
import {
  Card,
  CardBody,
  Col,
} from "reactstrap"
import ReactApexChart from "react-apexcharts"



const Activity = props => {
  const series = [44, 55, 41, 17, 15]
  const options = {
    labels: ["Unrated", "Excellent", "Unacceptable", "Good", "Bad"],
    colors: ["#34c38f", "#556ee6", "#f46a6a", "#50a5f1", "#f1b44c"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: false,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  }

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="d-flex">
              <div className="me-2">
                <h5 className="card-title mb-4">Booking Rating:
                </h5>
              </div>

            </div>
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              height="380"
            />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Activity
