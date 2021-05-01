import { usePutFetch, getUrlObject, useGetFetch, usePostFetch,useDeleteFetch } from './apirest';
import { ENDPOINT } from './config';

class RestLeds {

  static PRENDER_CASA1 = 'casa1on/';
  static PRENDER_CASA2 = 'casa2on/';
  static PRENDER_CASA3 = 'casa3on/';
  static APAGAR_CASA1 = 'casa1off/';
  static APAGAR_CASA2 = 'casa2off/';
  static APAGAR_CASA3 = 'casa3off/';

  static prenderCasa1() {
 //   return useGetFetch(ENDPOINT + this.PRENDER_CASA1);
  }

  static prenderCasa2() {
 //   return useGetFetch(ENDPOINT + this.PRENDER_CASA2);
  }

  static prenderCasa3() {
 //   return useGetFetch(ENDPOINT + this.PRENDER_CASA3);
  }

  static apagarCasa1() {
 //   return useGetFetch(ENDPOINT + this.APAGAR_CASA1);
  }

  static apagarCasa2() {
  //  return useGetFetch(ENDPOINT + this.APAGAR_CASA2);
  }

  static apagarCasa3() {
  //  return useGetFetch(ENDPOINT + this.APAGAR_CASA3);
  }

 /*
  static createConcepto(data) {
    return usePostFetch(ENDPOINT + this.CONCEPTOS_URL, data);
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