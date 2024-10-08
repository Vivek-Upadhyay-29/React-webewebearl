import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.css";
import { motion } from "framer-motion";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function Service() {
  return (
    <Container style={{ marginTop: "200px" }}>
      <div className="testimonial-container" style={{ margin: "20px" }}>
        <span className="chef-image" style={{ floatl: "right" }}>
          <span style={{ float: "right" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "5px 5px",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
              >
                <Card
                  style={{
                    width: "18rem",
                    margin: "5px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="src\photos\comp1.png"
                    alt="Main Dish"
                    className="card-img-top"
                    style={{ borderRadius: "20px 20px 0 0" }}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontWeight: "bold", color: "#5ce65c" }}
                    >
                      CATERING
                    </Card.Title>
                    <Card.Text style={{ fontWeight: "bold", color: "#5ce65c" }}>
                      Delight your guests with our flavors and presentation
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
              >
                <Card
                  style={{
                    width: "18rem",
                    margin: "5px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="src\photos\comp5.png"
                    alt="Main Dish"
                    className="card-img-top"
                    style={{ borderRadius: "20px 20px 0 0" }}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontWeight: "bold", color: "#5ce65c" }}
                    >
                        <br /> <br />
                      FAST DELIVERY
                    </Card.Title>
                    <Card.Text style={{ fontWeight: "bold", color: "#5ce65c" }}>
                      We deliver your order promptly to your door
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "5px 5px",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
              >
                <Card
                  style={{
                    width: "18rem",
                    margin: "5px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="src\photos\comp3.png"
                    alt="Main Dish"
                    className="card-img-top"
                    style={{ borderRadius: "20px 20px 0 0" }}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontWeight: "bold", color: "#5ce65c" }}
                    >
                      ONLINE ORDERING
                    </Card.Title>
                    <Card.Text style={{ fontWeight: "bold", color: "#5ce65c" }}>
                      Explore menu & order with ease using our Online Ordering
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
              >
                <Card
                  style={{
                    width: "18rem",
                    margin: "5px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="src\photos\comp4.png"
                    alt="Main Dish"
                    className="card-img-top"
                    style={{ borderRadius: "20px 20px 0 0" }}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontWeight: "bold", color: "#5ce65c" }}
                    >
                      GIFT CARDS
                    </Card.Title>
                    <Card.Text style={{ fontWeight: "bold", color: "#5ce65c" }}>
                      Give the gift of exceptional dining with Foodi Gift Cards
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </div>
             
          </span>
        </span>

        <span
          className="testimonial-content"
          style={{ float: "left", marginTop: "80px" }}
        >
          {" "}
          <p
            style={{ fontWeight: "bold", color: "#5ce65c" }}
            className="text-center"
          >
            Our Story & Services
          </p>
          <p
            style={{ fontWeight: "bolder", fontSize: "40px" }}
            className="text-left"
          >
            Our Culinary Journey <br />
            And Services
          </p>
          <p
            style={{ fontWeight: "light", fontSize: "20px" }}
            className="text-centre"
          >
            Rooted in passion, we curate unforgettable dining <br />
            experiences and offer exceptional services, <br />
            blending culinary artistry with warm hospitality.
          </p>
          <Button
            className="rounded-button"
            onClick={() => console.log("Button clicked")}
          >
            Explore
          </Button>
        </span>
      </div>
    <br/><br/><br/>
   
    </Container>
  );
}

export default Service;
