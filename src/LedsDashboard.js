import './App.css';
import React from 'react'
import { Button, Card, Image, Segment, Grid, Icon, Header, Radio, Progress } from 'semantic-ui-react'
import Elements from './Elements';


import aire from './images/aire.jpeg';

import compu from './images/computadora.jpeg';

import pasto from './images/cortapasto.png';

import faroles from './images/faroles.jpeg';

import lava from './images/lavaropas.jpeg';

import pava from './images/pava.jpeg';

import pileta from './images/pileta.jpeg';

import tv from './images/tv.jpeg';

import aspiradora from './images/aspiradora.jpeg';

import RestLeds from './RestLeds';

const electro = [
  { image: pava, consume: '2000', name: 'Pava', num: '1' },
  { key: 'Balvanera', text: 'Balvanera', value: 'Balvanera' },
  { key: 'Barracas', text: 'Barracas', value: 'Barracas' },
  { key: 'Belgrano', text: 'Belgrano', value: 'Belgrano' },
  { key: 'Boca', text: 'Boca', value: 'Boca' },
  { key: 'Boedo', text: 'Boedo', value: 'Boedo' },
  { key: 'Caballito', text: 'Caballito', value: 'Caballito' },
  { key: 'Chacarita', text: 'Chacarita', value: 'Chacarita' }
]

class LedsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTransferred: false,
      percent: 33,
      energy1: 0,
      energy1Tot: 0,
      energy2: 0,
      energy2Tot: 0,
      energy3: 0,
      energy3Tot: 0,
      energyTot: 0,
      name: "",
    };
  }


  handleCallback = (status, event) => {
    //  this.setState({name: childData})
    console.log(status)
    console.log(event.value)
    console.log(event.id)
    console.log(event.name)
    let estado = status
    let nrocasa = event.value
    let consumo = event.id
    let electro = event.name
    let consumeTot = 0
    if (estado === true) {
      consumeTot = this.state.energyTot + parseInt(consumo)
      this.setState({ energyTot: consumeTot })
      if (nrocasa === "1") {
        let consume = this.state.energy1 + parseInt(consumo)
        let consumeCant = this.state.energy1Tot + 1
        this.setState({ energy1: consume, energy1Tot: consumeCant })
      }
      if (nrocasa === "2") {
        let consume = this.state.energy2 + parseInt(consumo)
        let consumeCant = this.state.energy2Tot + 1
        this.setState({ energy2: consume, energy2Tot: consumeCant })
      }
      if (nrocasa === "3") {
        let consume = this.state.energy3 + parseInt(consumo)
        let consumeCant = this.state.energy3Tot + 1
        this.setState({ energy3: consume, energy3Tot: consumeCant })
      }
    } else {
      consumeTot = this.state.energyTot - parseInt(consumo)
      this.setState({ energyTot: consumeTot })
      if (nrocasa === "1") {
        let consume = this.state.energy1 - parseInt(consumo)
        let consumeCant = this.state.energy1Tot - 1
        this.setState({ energy1: consume, energy1Tot: consumeCant })
      }
      if (nrocasa === "2") {
        let consume = this.state.energy2 - parseInt(consumo)
        let consumeCant = this.state.energy2Tot - 1
        this.setState({ energy2: consume, energy2Tot: consumeCant })
      }
      if (nrocasa === "3") {
        let consume = this.state.energy3 - parseInt(consumo)
        let consumeCant = this.state.energy3Tot - 1
        this.setState({ energy3: consume, energy3Tot: consumeCant })
      }
    }
    console.log(consumeTot)
    let firstNum = "0"
    if (consumeTot > 999) {
      let num = consumeTot.toString()
      firstNum = num.charAt(0)
    }
    console.log(firstNum)
    RestLeds.raspberry(firstNum).then(json => {
      console.log("Se envio a la raspbery" + firstNum)
    });
  }


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
            <Elements image={pava}
              consume="2000"
              name="Pava"
              num="1"
              parentCallback={this.handleCallback}
            />
            <Elements image={aire}
              consume="1613"
              name="Aire"
              num="1"
              parentCallback={this.handleCallback}
            />
            <Elements image={compu}
              consume="750"
              name="PC"
              num="1"
              parentCallback={this.handleCallback}
            />
            <Card>
              <Card.Content>
                <Progress indicating size="large" value={this.state.energy1Tot} total='3'  progress='ratio'  />
                <Card.Header>Consumo total: {this.state.energy1} Wh</Card.Header>
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
            <Elements image={aspiradora}
              consume="1200"
              name="Aspiradora"
              num="2"
              parentCallback={this.handleCallback}
            />
            <Elements image={lava}
              consume="875"
              name="Lavarropas"
              num="2"
              parentCallback={this.handleCallback}
            />

            <Elements image={tv}
              consume="120"
              name="Televisor"
              num="2"
              parentCallback={this.handleCallback}
            />

            <Card>
              <Card.Content>
                <Progress indicating size="large"  value={this.state.energy2Tot} total='3' progress='ratio'  />
                <Card.Header>Consumo total: {this.state.energy2} Wh</Card.Header>
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

            <Elements image={faroles}
              consume="1150"
              name="Iluminacion x 4"
              num="3"
              parentCallback={this.handleCallback}
            />
            <Elements image={pileta}
              consume="1140"
              name="Motor pileta x 2"
              num="3"
              parentCallback={this.handleCallback}
            />

            <Elements image={pasto}
              consume="1100"
              name="Cortadoras de pasto x 2"
              num="3"
              parentCallback={this.handleCallback}
            />
            <Card>
              <Card.Content>
                <Progress indicating size="large"  value={this.state.energy3Tot} total='3' progress='ratio' />
                <Card.Header>Consumo total: {this.state.energy3} Wh</Card.Header>
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
      </Segment>
    );
  }
}

export default LedsDashboard;
