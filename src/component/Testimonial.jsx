import React from "react";
import { Container } from "react-bootstrap";

function Testimonial() {
  return (
    <Container style={{ marginTop: "200px" }}>
      <div className="testimonial-container" style={{ margin: "20px" }}>
        <span className="chef-image" style={{ floatl: "left" }}>
          <img
            src="src/photos/chef.png"
            alt="Our Best Chef"
            className="chef-photo"
          />
        </span>

        <span
          className="testimonial-content"
          style={{ float: "right", marginTop: "80px" }}
        >
          <p
            style={{ fontWeight: "bold", color: "#5ce65c" }}
            className="text-center"
          >
            Testimonials
          </p>
          <p
            style={{ fontWeight: "bolder", fontSize: "40px" }}
            className="text-left"
          >
            What Our Customers <br />
            Say About Us
          </p>
          <p
            style={{ fontWeight: "light", fontSize: "20px" }}
            className="text-centre"
          >
            “I had the pleasure of dining at Foodi last night, and <br /> I'm
            still raving about the experience! The attention to <br /> detail in
            presentation and service was impeccable.”
          </p>
          <div className="customer-feedback">
            <div className="customer-profiles">
              <img
                src="src\photos\user.jpeg"
                alt="customer1"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                className="profile"
              />
              <img
                src="src\photos\user.jpeg"
                alt="customer1"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                className="profile"
              />
              <img
                src="src\photos\user.jpeg"
                alt="customer1"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                className="profile"
              />
            </div>
            <div className="rating">
              <p style={{ fontWeight: "bolder" }}>Customer Feedback</p>
              <span>⭐ 4.9</span> <span>(18.6k Reviews)</span>
            </div>
          </div>
        </span>
      </div>
    </Container>
  );
}

export default Testimonial;
