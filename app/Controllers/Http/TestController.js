'use strict';
const customEX = use('App/Exceptions/CustomException');

class TestController {
  test() {
    throw new customEX();
  }
}

module.exports = TestController;
