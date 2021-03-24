const { RESTDataSource } = require('apollo-datasource-rest');

/**
 * Class responsible to fetch data
 * from Users REST API.
 * */
class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://localhost:4000/api`;
  }

  /**
   * Fetch all users or filter the list
   * by a given name.
   *
   * @return {Array}
   * */
  async getUsers() {
    return this.get(`users`);
  }
}

module.exports = UserAPI;
