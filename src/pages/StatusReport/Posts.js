import React from "react"
import {
  Card,
  CardBody,
  Col,
} from "reactstrap"
import ReactApexChart from "react-apexcharts"
import ReactEcharts from "echarts-for-react";

const Posts = props => {

  const series = [44, 55, 41]
  const options = {
    labels: ["Sedan", "Featured", "SUV",],
    colors: ["#34c38f", "#556ee6", "#f46a6a"],
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
            height: 50,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  }
  const options1 = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: ["late", "on-time"],
      textStyle: {
        color: ["#74788d"],
      },
    },
    color: ["#db1a8b", "#a263e6"],
    series: [
      {
        name: "Total sales",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center",
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold",
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 335, name: "late" },
          { value: 310, name: "on-time" },

        ],
      },
    ],
  };
  return (
    <React.Fragment>
      <Col xl={3} lg={6}>
        <h6 style={{ color: "rgb(1,48,74)" }}>Car Category breakdown </h6>
        <Card >
          <CardBody>
            <ReactApexChart options={options} series={series} type="pie" height="250px" />
          </CardBody>
        </Card>
        
      </Col>
    </React.Fragment>
  )
}

export default Posts
