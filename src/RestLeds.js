const axios = require('axios');

class RestLeds {

  static PRENDER_CASA1 = 'casa1On';
  static PRENDER_CASA2 = 'casa2On';
  static PRENDER_CASA3 = 'casa3On';
  static APAGAR_CASA1 = 'casa1Off';
  static APAGAR_CASA2 = 'casa2Off';
  static APAGAR_CASA3 = 'casa3Off';
  static ENDPOINT = 'http://192.168.0.135:5000/';

  static prenderCasa1() {
    //   return useGetFetch(ENDPOINT + this.PRENDER_CASA1);
    return axios.get(this.ENDPOINT + this.PRENDER_CASA1);
  }

  static prenderCasa2() {
    return axios.get(this.ENDPOINT + this.PRENDER_CASA2);
  }

  static prenderCasa3() {
    //   return useGetFetch(this.ENDPOINT + this.PRENDER_CASA3);
    return axios.get(this.ENDPOINT + this.PRENDER_CASA3);
  }

  static apagarCasa1() {
    return axios.get(this.ENDPOINT + this.APAGAR_CASA1);
  }

  static apagarCasa2() {
    return axios.get(this.ENDPOINT + this.APAGAR_CASA2);
  }

  static apagarCasa3() {
    return axios.get(this.ENDPOINT + this.APAGAR_CASA3);
  }

  /*
   static createConcepto(data) {
     return usePostFetch(this.ENDPOINT + this.CONCEPTOS_URL, data);
   }
  
   static putConcepto(id, data) {
     return usePutFetch(ENDPOINT + this.CONCEPTOS_URL + id, data);
   }
 
   static deleteConcepto(id) {
     return useDeleteFetch(ENDPOINT + this.CONCEPTOS_URL + id);
   }
 
   static getAllConceptos() {
     //trae todos los form
     return useGetFetch(ENDPOINT + this.CONCEPTOS_URL);
   }
 
   */
}
export default RestLeds;