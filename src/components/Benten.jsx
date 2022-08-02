import { React, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Benten = () => {
  const [aliendata, setaliendata] = useState([]);

  const getaliens = async () => {
    const api = await fetch("https://ben10-api.herokuapp.com/aliens");
    const data = await api.json();
    setaliendata(data.aliens);
    console.log(data.aliens);
  };

  useEffect(() => {
    getaliens();
  }, []);

  return (
    <Row className="justify-content-md-center " >
    
      {aliendata.map((aliens) => {
        return (
          <Col xs={12} md={12} lg={4} >
          <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title><h1>{aliens.general.name}</h1></Card.Title>
            <Card.Text>
              {aliens.abilities}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        );
      })}
   
        </Row>
  );
};

export default Benten;
