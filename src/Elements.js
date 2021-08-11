import './App.css';
import React from 'react'
import { Button, Card, Image, Segment, Grid, Icon, Header, Radio } from 'semantic-ui-react'

import RestLeds from './RestLeds';

class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleFilterChanged = (event) => {
    this.setState(prevState => ({ //ensure correct previous state when async call is batched
      checked: !prevState.checked
    }));
    this.props.onClick && this.props.onClick(); //only execute if exists
    console.log(event.target)
    this.props.parentCallback(!this.state.checked,event.target);
          
  }
  

  render() {
    const { image, consume, name,num } = this.props;
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
        <Grid>
        <Grid.Column>
          <Icon name='power off' size="large" color="red" />
          </Grid.Column>
          <Grid.Column>

          <Radio toggle
            id={consume}
            key={name}
            name={name}
            value={num}
            onClick={this.handleFilterChanged}
            checked={this.state.checked}
          />
          </Grid.Column>
          <Grid.Column>
          <Icon name='lightning' size="large" color="green" />
          </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default Elements;
