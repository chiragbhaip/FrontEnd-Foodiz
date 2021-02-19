import axios from "axios";

export const request = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-restuarants');
     
      console.log(response.data);
      return response.data
    }
    catch (e) {
      console.log('We have the error', e);
    }
  }