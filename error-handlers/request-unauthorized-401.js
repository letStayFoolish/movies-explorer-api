class RequestUnauthorized401 extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = RequestUnauthorized401;
