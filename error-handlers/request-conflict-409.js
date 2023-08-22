class RequestConflict409 extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409
  }
}

module.exports = RequestConflict409