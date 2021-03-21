import axios from "axios";
export default class User {
  constructor() {
    this.baseURL = process.env.NODE_ENV == "development" ? "http://localhost:5000" : "https://api-trendz-fashion.herokuapp.com";
    this.registerURL = `${this.baseURL}/register`;
  }

  async logIn(params) {

  }

  async register(params) {
    const axiosRequest = axios.post(this.registerURL, params);
    return axiosRequest.then(function (response) {
      const {
        token
      } = response.data;

      if (token != undefined) {
        localStorage.setItem("jwtToken", token);
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}
