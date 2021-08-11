const axios = require('axios');

class RestLeds {
  static PRENDER_CASA1 = 'number/';
  static ENDPOINT = 'http://192.168.0.135:5000/';

  static raspberry(consume) {
    //   return useGetFetch(ENDPOINT + this.PRENDER_CASA1);
    return axios.get(this.ENDPOINT + this.PRENDER_CASA1 + consume);
  }

}
export default RestLeds;