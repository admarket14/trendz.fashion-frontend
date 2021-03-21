export default class User {
  constructor() {
    this.baseURL = process.env.NODE_ENV == "development" ? "http://localhost:5000/" : "https://api-trendz-fashion.herokuapp.com/";
  }

  async logIn(params) {

  }

  async register(params) {

  }
}
