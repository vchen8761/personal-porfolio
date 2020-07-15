import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import './Group.css';

const Group = (props) => {
  return (
    <CardGroup>
      <Card className="card" style={{borderRadius: "15px"}}>
        <CardImg top width="100%" src={props.srcs[0]} alt="Card image cap" style={{height: '50%'}}/>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card" style={{borderRadius: "15px"}}>
        <CardImg top width="100%" src={props.srcs[1]} alt="Card image cap" style={{height: '50%'}}/>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card" style={{borderRadius: "15px"}}>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Group;