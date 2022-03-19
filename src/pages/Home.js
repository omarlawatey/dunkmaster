import React from 'react';
import {
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Stack
} from 'react-bootstrap';
import { copyToClipboard } from '../utils/helpers';
import '../Styles/Home.scss';

const Home = () => {
  return (
    <Stack gap="5" className="page">
      <div className="welcome-section">
        <div>
          <Container className="main-container">
            <h1>Welcome !</h1>
            <p>Dunk Master</p>
          </Container>
        </div>
      </div>
      <Container>
        <div className="server-details">
          <h2>Server Details</h2>
          <Card style={{ width: '18rem' }} className="server-info">
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Server Information</Card.Title>
              <Card.Text>Minecraft Survival Server for all devices</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Server Name:</strong> Dunk Master
              </ListGroupItem>
              <ListGroupItem>
                <strong>Server Owner:</strong> Lucifer_AE
              </ListGroupItem>
              <ListGroupItem>
                <strong>Device Support:</strong> Non-Cracked Accounts - Cracked
                Accounts - Bedrock
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link
                onClick={e => {
                  e.preventDefault();
                  copyToClipboard('mc.dunk-master.com');
                }}
              >
                Copy Server IP
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="">First item</div>
      </Container>
    </Stack>
  );
};

export default Home;
