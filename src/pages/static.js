<Row>
<Form>
  <Col lg="12">
    <Row>
      <div>
        <Link to="/staff-list">
          <Button
            className="mb-3"
            style={{ float: "right" }}
            color="info"
          >
            <i className="far fa-arrow-alt-circle-left"></i> Back
          </Button>
        </Link>
      </div>
      <Col md={3}>
        <Card>
          <CardBody>
            <img
              style={{ width: "100%", height: "220px" }}
              src={"http://103.186.185.77:5021/" + user.custPic}
            />
            <h5 className="mt-3">{user.customerName}</h5>

            <p>{user.logDateCreated}</p>

           
          </CardBody>
        </Card>
      </Col>
      <Col md={9}>
        <Card>
          <CardBody>
            <CardTitle
              className="mt-1 mb-4"
              style={{ color: "red" }}
            >
              Customer Details
            </CardTitle>
            <div className="row mt-3">
              <div className="col col-sm-3">
                <Label>
                  <b>Customer Name</b>
                </Label>
                <br />
                <Label>
                  <b>Phone No</b>
                </Label>
                <br />
                <Label>
                  <b>Email</b>
                </Label>
              </div>
              <div className="col col-sm-9">
                <Label>: {user.customerName}</Label>
                <br />
                <Label>: {user.customerPhone}</Label>
                <br />
                <Label>: {user.customerPhone}</Label>
              </div>
            </div>
            <div className="row mt-2">
              <CardTitle
                className="mt-4 mb-4"
                style={{ color: "red" }}
              >
                Booking Details
              </CardTitle>

              <div className="col col-sm-3">
                <Label>
                  <b>Booking Id</b>
                </Label>
                <br />
                <Label>
                  <b>Car</b>
                </Label>
                <br />
                <Label>
                  <b>Regt Number</b>
                </Label>
                <br />

                <Label>
                  <b>From Date</b>
                </Label>
                <br />
                <Label>
                  <b>To Date</b>
                </Label>
                <br />
                <Label>
                  <b>Booking Status</b>
                </Label>
                <br />

                <Label>
                  <b>Price</b>
                </Label>

                <br />
                <Label>
                  <b>Pickup Location</b>
                </Label>
                <br />
                <Label>
                  <b>Return Location</b>
                </Label>
                <br />
              </div>
              <div className="col col-sm-9">
                <Label>
                  : {user.carType} / {user.carBrandName} /
                  {user.carModelName}
                </Label>
                <br /> <Label>: {user.booking_id}</Label>
                <br />
                <Label>: {user.carType}</Label>
                <br />
                <Label>: {user.carRegistNumber}</Label>
                <br />
                <Label>: {user.status}</Label>
                <br />
                <Label>:{user.returnDate}</Label>
                <br />
                <Label>: {user.totalprice}</Label>
                <br />
                <Label>: {user.pickupLocation}</Label>
                <br />
                <Label>: {user.returnLocation}</Label>
                <br />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Col>
</Form>
</Row>