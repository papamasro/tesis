import './App.css';
import React from 'react'
import { Button, Card, Image, Segment, Radio, Icon, Header } from 'semantic-ui-react'


import aire from './images/aire.jpeg';

import compu from './images/computadora.jpeg';

import pasto from './images/cortapasto.png';

import faroles from './images/faroles.jpeg';

import lava from './images/lavaropas.jpeg';

import heladera from './images/heladera.jpg';

import pileta from './images/pileta.jpeg';

import tv from './images/tv.jpeg';

import RestLeds from './RestLeds';


class LedsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  prenderCasa1 = () => {
    RestLeds.prenderCasa1().then(json => {
      console.log("se encendio casa 1")
    });
  };

  prenderCasa2 = () => {
    RestLeds.prenderCasa2().then(json => {
      console.log("se encendio casa 1")
    });
  };

  prenderCasa3 = () => {
    RestLeds.prenderCasa3().then(json => {
      console.log("se encendio casa 3")
    });
  };

  apagarCasa1 = () => {
    RestLeds.apagarCasa1().then(json => {
      console.log("se encendio casa 1")
    });
  };

  apagarCasa2 = () => {
    RestLeds.apagarCasa2().then(json => {
      console.log("se encendio casa 1")
    });
  };

  apagarCasa3 = () => {
    RestLeds.apagarCasa3().then(json => {
      console.log("se encendio casa 1")
    });
  };

  render() {
    
    return (

      <Segment>
        <Header as='h2'>
          <Icon name='lightning' color='yellow' />
      SMART METER
    </Header>
        <Header as='h2' attached='top'>
          <Icon name='home' />
      Casa 1
    </Header>
        <Segment attached color='red' >
          <Card.Group>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={heladera}
                />
                <Card.Header>Heladera</Card.Header>
                <Card.Meta>Consumo: 95 Wh</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name='power off' size="large" color="red" />
                <Radio toggle
            
                />
                <Icon name='plug' size="large" color="green" />
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={aire}
                />
                <Card.Header>Aire</Card.Header>
                <Card.Meta>Consumo: 1048 Wh</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name='power off' size="large" color="red" />
                <Radio
      
                  toggle />
                <Icon name='plug' size="large" color="green" />
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={compu}
                />
                <Card.Header>PC</Card.Header>
                <Card.Meta>Consumo: 650 Wh</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name='power off' size="large" color="red" />
                <Radio toggle
            />
                <Icon name='plug' size="large" color="green" />
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
        <Header as='h2' attached='top'>
          <Icon name='home' />
      Casa 2
    </Header>
        <Segment attached color='blue' >
          <Card.Group>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={heladera}
                />
                <Card.Header>Heladera</Card.Header>
                <Card.Meta>Consumo: 95 Wh</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name='power off' size="large" color="red" />
                <Radio toggle
            />
                <Icon name='plug' size="large" color="green" />
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={lava}
                />
                <Card.Header>Lavarropas</Card.Header>
                <Card.Meta>Consumo: 875 Wh</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name='power off' size="large" color="red" />
                <Radio toggle />
                <Icon name='plug' size="large" color="green" />
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={tv}
                />
                <Card.Header>Televisor</Card.Header>
                <Card.Meta>Consumo: 120Wh</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name='power off' size="large" color="red" />
                <Radio toggle />
                <Icon name='plug' size="large" color="green" />
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
        <Header as='h2' attached='top'>
          <Icon name='warehouse' />
      Sector Comun
    </Header>
        <Segment attached color='green' >
          <Card.Group>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={faroles}
                />
                <Card.Header>Iluminacion</Card.Header>
                <Card.Meta>Consumo: 150Wh x 20</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name='power off' size="large" color="red" />
                <Radio toggle />
                <Icon name='plug' size="large" color="green" />
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={pileta}
                />
                <Card.Header>Motor pileta</Card.Header>
                <Card.Meta>Consumo: 570Wh x 2</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name='power off' size="large" color="red" />
                <Radio toggle />
                <Icon name='plug' size="large" color="green" />
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='tiny'
                  src={pasto}
                />
                <Card.Header>Cortadoras de pasto</Card.Header>
                <Card.Meta>Consumo: 550Wh x 3</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Icon name='power off' size="large" color="red" />
                <Radio toggle />
                <Icon name='plug' size="large" color="green" />
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
      </Segment>
    );
  }
}

export default LedsDashboard;
