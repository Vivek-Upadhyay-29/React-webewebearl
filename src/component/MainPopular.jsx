import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { motion } from 'framer-motion';

function MainPopular() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <p style={{ fontWeight: "bold", color: "#5ce65c" }} className="text-center">CUSTOMER FAVORITES</p>
        <p style={{ fontWeight: "bolder", fontSize: "40px" }} className="text-center">Popular Categories</p>
        <Row className="justify-content-center mt-3">
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 50, damping: 10 }}>
              <Card className="category-card" style={{ borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', width: '250px' }}>
                <Image src="src\photos\burger.jpg" alt="Main Dish" className="card-img-top" style={{ borderRadius: '20px 20px 0 0' }} />
                <Card.Body>
                  <Card.Title>Main Dish</Card.Title>
                  <Card.Text>(86 dishes)</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 50, damping: 10 }}>
              <Card className="category-card" style={{ borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', width: '250px' }}>
                <Image src="src\photos\ice-cream.jpeg" alt="Break Fast" className="card-img-top" style={{ borderRadius: '20px 20px 0 0' }} />
                <Card.Body>
                  <Card.Title>Break Fast</Card.Title>
                  <Card.Text>(12 break fast)</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 50, damping: 10 }}>
              <Card className="category-card" style={{ borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', width: '250px' }}>
                <Image src="src\photos\pizza1.jpeg" alt="Dessert" className="card-img-top" style={{ borderRadius: '20px 20px 0 0' }} />
                <Card.Body>
                  <Card.Title>Dessert</Card.Title>
                  <Card.Text>(48 dessert)</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 50, damping: 10 }}>
              <Card className="category-card" style={{ borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', width: '250px' }}>
                <Image src="src\photos\fruitjuice.jpg" alt="Browse All" className="card-img-top" style={{ borderRadius: '20px 20px 0 0' }} />
                <Card.Body>
                  <Card.Title>Browse All</Card.Title>
                  <Card.Text>(255 Items)</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container> <br />
    </>
   
  );
}

export default MainPopular;