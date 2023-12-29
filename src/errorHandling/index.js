class ApiError extends Error {
  /**
   * Creates an instance of ApiError.
   * @param {string} message - A human-readable error message describing the issue.
   * @param {number} statusCode - An HTTP status code to indicate the error's severity.
   */
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
module.exports = ApiError;
