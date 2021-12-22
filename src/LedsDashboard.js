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

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const todayYearAgo = today.setMonth(today.getMonth() - 12);
const isoDay = todayYearAgo.toString();

const electro = [
  { id: 'Pava', idSmartMeter: 'Pava', device: '1' ,value:'2000',status:'OFF',date: isoDay},
  { id: 'Aire', idSmartMeter: 'Aire', device: '1' ,value:'1613',status:'OFF',date:isoDay},
  { id: 'PC', idSmartMeter: 'PC', device: '1' ,value:'750',status:'OFF',date:isoDay},
  { id: 'Anafe', idSmartMeter: 'Anafe', device: '1' ,value:'2351',status:'OFF',date: isoDay},
  { id: 'Cafetera', idSmartMeter: 'Cafetera', device: '1' ,value:'903',status:'OFF',date: isoDay},
  { id: 'Estufa', idSmartMeter: 'Estufa', device: '1' ,value:'1510',status:'OFF',date: isoDay},
  { id: 'Freezer', idSmartMeter: 'Freezer', device: '1' ,value:'252',status:'OFF',date: isoDay},
  { id: 'Licuadora', idSmartMeter: 'Licuadora', device: '1' ,value:'602',status:'OFF',date: isoDay},
  { id: 'Microondas', idSmartMeter: 'Microondas', device: '1' ,value:'641',status:'OFF',date: isoDay},
  { id: 'Televisor', idSmartMeter: 'Televisor', device: '2' ,value:'123',status:'OFF',date: isoDay},

  { id: 'Aspiradora', idSmartMeter: 'Aspiradora', device: '2' ,value:'1200',status:'OFF',date: isoDay},
  { id: 'Lavarropas', idSmartMeter: 'Lavarropas', device: '2' ,value:'875',status:'OFF',date: isoDay},
  { id: 'Plancha', idSmartMeter: 'Plancha', device: '2' ,value:'1506',status:'OFF',date: isoDay},
  { id: 'Secarropas', idSmartMeter: 'Secarropas', device: '2' ,value:'959',status:'OFF',date: isoDay},
  { id: 'Tostadora', idSmartMeter: 'Tostadora', device: '2' ,value:'949',status:'OFF',date: isoDay},
  { id: 'Ventilador', idSmartMeter: 'Ventilador', device: '2' ,value:'60',status:'OFF',date: isoDay},
  { id: 'Tele', idSmartMeter: 'Tele', device: '2' ,value:'124',status:'OFF',date: isoDay},
  { id: 'Notebook', idSmartMeter: 'Notebook', device: '2' ,value:'30',status:'OFF',date: isoDay},

  { id: 'Iluminacion', idSmartMeter: 'Iluminacion', device: '3' ,value:'1150',status:'OFF',date: isoDay},
  { id: 'Motor', idSmartMeter: 'Motor', device: '3' ,value:'1140',status:'OFF',date: isoDay},
  { id: 'Cortadora', idSmartMeter: 'Cortadora', device: '3' ,value:'1100',status:'OFF',date: isoDay},

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

  loadAssets = () => {
    electro.forEach(element => {
      RestLeds.postConsumeAsset(element);
    });
  }

  sendEmail = ()  => {
    RestLeds.sendemail()
  }

  sendEmailcons = ()  => {
    RestLeds.sendemailcons()
  }

  corteLuz = ()  => {
    RestLeds.sendemail()
    let date = new Date(isoDay);
    electro.forEach(element => {
    let con = "net.biz.smartMeterNetwork.Consume#" + element.id
    RestLeds.postBlockchainTransaction(con,"OFF",Date.now().toString()).then(json => {
      RestLeds.raspberry("0").then(json => {
        console.log("Se envio a la raspbery corte luz")
      });

     });

  })

  }


  getRandomInt = (min, max)  => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  createTransactions = () => {
    electro.forEach(element => {
      let con = "net.biz.smartMeterNetwork.Consume#" + element.id
      let date = new Date(isoDay);
      let num = this.getRandomInt(10,200)
      console.log(con,"ON",date)
   //   for(let i = 0; i < num ; i++){
        date.setHours(date.getHours()+ this.getRandomInt(1,5));
        RestLeds.postBlockchainTransaction(con,"ON",date).then(json => {
          date.setHours(date.getHours()+ this.getRandomInt(1,5)).toString();
          RestLeds.postBlockchainTransaction(con,"OFF",date)
     });
 //   }
   });
  }

  handleCallback = (status, event) => {
    let estado = status
    let nrocasa = event.value
    let consumo = event.id
    let electro = event.name
    let consumeTot = 0
    let onOff
    let timeElapsed = Date.now();
let today = new Date(timeElapsed);
let now = today.toISOString();
    let date = now
    if(estado)
      onOff = "ON"
    else
      onOff = "OFF"
    
    if(nrocasa === "3"){
     var divisiones = electro.split(" ", 1);
     electro = divisiones[0]
    }

    let con = "net.biz.smartMeterNetwork.Consume#" + electro
    RestLeds.postBlockchainTransaction(con,onOff,date);

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
    if(firstNum == "9"){
      this.sendEmailcons()
    }
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
              name="Cortadora de pasto x 2"
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
        {/*
       <Button  onClick={this.loadAssets} positive>Cargar BD</Button> */}
        <Button  onClick={this.corteLuz} negative>Corte de luz</Button>

      </Segment>
    );
  }
}

export default LedsDashboard;
