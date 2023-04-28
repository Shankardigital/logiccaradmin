import React from 'react';
import {
  Card,
  CardBody,
  Col,
} from "reactstrap"

function TapVisitors(props) {
    return (
        <React.Fragment>
        <Col xl={4}>
          <h5 style={{color:"rgb(1,48,74)"}}>DRIVER TIP DATA</h5>
          <Card>
            <CardBody style={{height:"280px"}}>
              <h6 style={{textAlign:'center'}}> No Data</h6>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
}

export default TapVisitors;