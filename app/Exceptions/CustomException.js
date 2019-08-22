'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

class CustomException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle() {
    console.log('handle');
  }
  report() {
    console.log('report');
  }
}

module.exports = CustomException;
