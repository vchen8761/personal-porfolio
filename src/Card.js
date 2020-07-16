import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const CardComponent = (props) => {
  return (
    <Card>
        <CardImg src={props.src} alt="" style={{borderRadius: "15px"}}/>
        <CardBody>
            <CardTitle style={{fontWeight: "bold", fontSize: "20pt"}}>{props.title}</CardTitle>
            <CardText>{props.text}</CardText>
        </CardBody>
        <Button href={props.link}>{props.buttonText}</Button>
    </Card>
  );
};

export default CardComponent;