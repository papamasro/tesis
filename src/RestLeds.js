const axios = require('axios');

class RestLeds {
  static ENDPOINT_RASPBERRY = 'http://192.168.43.9:5000/';
  static PRENDER_ELECTRODOMESTICO_RASPBERRY = 'number/';

  static ENDPOINT_BLOCKCHAIN = 'http://localhost:3000/api/';
  static GRABAR_BLOCKCHAIN = 'SmartmeterConsume/';
  static CONSUMO_BLOCKCHAIN = 'Consume/';


  static raspberry(consume) {
    return axios.get(this.ENDPOINT_RASPBERRY + this.PRENDER_ELECTRODOMESTICO_RASPBERRY + consume);
  }

  static getConsumeAsset() {
    return axios.get(this.ENDPOINT_BLOCKCHAIN + this.PRENDER_ELECTRODOMESTICO_RASPBERRY + this.CONSUMO_BLOCKCHAIN);
  }

  static getConsumeAsset(consumeID) {
    return axios.get(this.ENDPOINT_BLOCKCHAIN + this.PRENDER_ELECTRODOMESTICO_RASPBERRY + this.CONSUMO_BLOCKCHAIN + consumeID);
  }

  static postConsumeAsset(consume) {
    axios({
      method: 'post',
      url: this.ENDPOINT_BLOCKCHAIN + this.CONSUMO_BLOCKCHAIN,
      headers: {}, 
      data: consume
    });
  }

  static postBlockchainTransaction(consumo,state,date) {
    console.log(consumo,state, "eee")
   return axios({
      method: 'post',
      url: this.ENDPOINT_BLOCKCHAIN + this.GRABAR_BLOCKCHAIN ,
      headers: {}, 
      data: {consume:consumo, estado:state,date:date}
    });
  }

  static sendemail() {
   return axios({
      method: 'get',
      url: "http://localhost:4200/api/metrics/emailalert/" ,
      headers: {}, 
    });
  }


  static sendemailcons() {
    return axios({
       method: 'get',
       url: "http://localhost:4200/api/metrics/emailalertcons/" ,
       headers: {}, 
     });
   }
  


}
export default RestLeds;