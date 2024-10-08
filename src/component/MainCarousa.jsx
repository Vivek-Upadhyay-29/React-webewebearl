import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function MainCarousa() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <div style={{marginTop:"20px",padding:"0"}}>
        <div  style={{ margin: "20px" }}>
          <span >   
            <img
              src="src/photos/homies.png"
              
            />
          </span>
          <span style={{ float: "left", marginTop: "80px" }}>
            <Row className="justify-content-center">
              <Col md={8}>
                <h1 style={{ fontWeight: "bold" }}>
                  Dive into Delights of Delectable{" "}
                  <span style={{ color: " #5ce65c" }}>Food</span>
                </h1>
                <p style={{ fontWeight: "bold", color: "#808080" }}>
                  Where Each Plate Weaves a Story of Culinary <br /> Mastery and
                  Passionate Craftsmanship.
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <Button className="rounded-button text-centre">Order Now</Button>
                  <Button
                    variant="secondary text-centre"
                    className="mx-3 rounded-button color-grey"
                  >
                    Watch Video
                  </Button>
                </div>
              </Col>
            </Row>
          </span>
        </div>
        </div>
   
      </Container>
    </>
  );
}

export default MainCarousa;
