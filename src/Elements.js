import './App.css';
import React from 'react'
import { Button, Card, Image, Segment, Grid, Icon, Header, Radio } from 'semantic-ui-react'

import RestLeds from './RestLeds';

class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTransferred: false,
      energy1: 0,
      checked:false
    };
    this.handleFilterChanged = this.handleFilterChanged.bind(this)
  }

  handleFilterChanged() {
    this.setState(prevState => ({ //ensure correct previous state when async call is batched
      checked: !prevState.checked
    }));
    this.props.onClick && this.props.onClick(); //only execute if exists
    RestLeds.prenderCasa1().then(json => {
      console.log("se encendio casa 1")
    });
  }

  render() {
    const {image,consume,name} = this.props;

    var isTransferred = false
    return (
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='tiny'
              src={image}
            />
            <Card.Header>{name}</Card.Header>
            <Card.Meta>Consumo: {consume} Wh</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Icon name='power off' size="large" color="red" />

            <Radio toggle
              id="isTransferred"
              key="isTransferred"
              name="isTransferred"
              onClick={this.handleFilterChanged}
              checked={this.state.checked}
              value={isTransferred}
            />
            <Icon name='lightning' size="large" color="green" />
          </Card.Content>
        </Card>
    );
  }
} 

  export default Elements;
