import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { motion } from 'framer-motion';


function Standout() {
  return (
    <>
      <Container style={{marginTop:"200px"}}>
        <div style={{marginTop:"20px",padding:"0"}}>
        <p style={{ fontWeight: "bold", color: "#5ce65c" }} className="text-center">SPECIAL DISHES</p>
        <p style={{ fontWeight: "bolder", fontSize: "40px" }} className="text-center">Standout Dishes <br />From Our Menu</p>
        <Row className="justify-content-center mt-3">
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 50, damping: 10 }}>
              <Card className="category-card" style={{ borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Image src="src\photos\3.png" alt="Main Dish" className="card-img-top" style={{ borderRadius: '20px 20px 0 0' }} />
                <Card.Body>
                  <Card.Title>Fattoush salad</Card.Title>
                  <Card.Text>Description of the item</Card.Text>
                  <Card.Title>$24.00</Card.Title>
                 
                  <Card.Text> <span>⭐4.9</span> </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 50, damping: 10 }}>
              <Card className="category-card" style={{ borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Image src="src\photos\2.png" alt="Break Fast" className="card-img-top" style={{ borderRadius: '20px 20px 0 0' }} />
                <Card.Body>
                <Card.Title>Vegetable salad</Card.Title>
                  <Card.Text>Description of the item</Card.Text>
                  <Card.Title>$26.00</Card.Title>
                  <Card.Text>⭐ 4.6</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 50, damping: 10 }}>
              <Card className="category-card" style={{ borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Image src="src\photos\egg1.png" alt="Dessert" className="card-img-top" style={{ borderRadius: '20px 20px 0 0' }} />
                <Card.Body>
                <Card.Title>Egg vegi salad</Card.Title>
                  <Card.Text>Description of the item</Card.Text>
                  <Card.Title>$25.00</Card.Title>
                  <Card.Text>⭐ 4.5</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          
        </Row>
        </div>
        
      </Container>
       <br />
    </>
  );
}

export default Standout;