import Accordion from 'react-bootstrap/Accordion';

function Accordian() {
  return (
    <Accordion  style={{margin:"10px"}} defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header></Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordian;