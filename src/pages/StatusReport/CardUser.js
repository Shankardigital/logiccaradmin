import React from "react";
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactEcharts from "echarts-for-react";

const CardUser = props => {

  const reportstest12 = [
    {
      title: "New Bookings",
      color: "primary",
      value: "93",
      arrowUpDown: "111.4%",
    },
    {
      title: "Extensions",
      color: "info",
      value: "118",
      arrowUpDown: "-6.3%",
    },
    {
      title: "Fulfilment",
      color: "warning",
      value: "94%",
      arrowUpDown: "8.9%",
    },
    {
      title: "New Booking",
      color: "success",
      value: "905",
      arrowUpDown: "65.4%",
    },
    {
      title: "Extended Days",
      color: "danger",
      value: "602",
      arrowUpDown: "3.3%",
    },
  ]
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
    color: ["#8d95f2", "#a263e6"],
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
      <Col xl={7}>
        <Row>
          {reportstest12.map((report, key) => (
            <Col key={key}>
              <Card className="p-2" > 
                <Row>
                  <p style={{ textAlign: "center",color:"rgb(1,48,74)" }}>{report.title}</p>
                  <h5 style={{ textAlign: "center",color:"rgb(1,48,74)" }}>{report.value}</h5>
                  <h6 style={{ textAlign: "end" ,color:"green"}}>{report.arrowUpDown}</h6>
                </Row>
              </Card>
            </Col>
          ))}</Row>
        <Row>
          <Col md={7}>
            <Card style={{ height: "200px" }}>
              <CardBody>
                <Row>
                  <Col md={4}>
                    <ReactEcharts style={{ height: "250px" }} option={options1} /></Col>
                  <Col md={4}>  <ReactEcharts style={{ height: "250px" }} option={options1} /></Col>
                  <Col md={4}> <ReactEcharts style={{ height: "250px" }} option={options1} /></Col></Row>
              </CardBody>
            </Card>
          </Col>
        
          <Col md={5}>
            <Card style={{ height: "200px" , background:"rgb(157, 183, 224)",border:"1px solid rgb(1,48,74)" }}>
              <CardBody>
                <h4 style={{ textAlign: "center" ,color:"white"}}>Total Started</h4>
                <h4 style={{ textAlign: "center" ,color:"white"}}>50</h4><br></br>
                <h4 style={{ textAlign: "center",color:"white" }}>Cars on Hire
                </h4>
                <h4 style={{ textAlign: "center" ,color:"white"}}>(Live)
                </h4>
              </CardBody>
            </Card>
          </Col></Row>
      </Col>
    </React.Fragment>
  );
};

CardUser.propTypes = {
  options: PropTypes.any,
  series: PropTypes.any
};

export default CardUser;
