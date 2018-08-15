const axios = require('axios');

const rainStateURL = '';

const sendTestResult = async () => {
  const testResult = process.env.TRAVIS_TEST_RESULT;
  let result = '';
  if (testResult == 0) {
    result = 'FAIL';
  } else {
    result = 'PASS';
  }
  const resultData = {
    app: 'test_app',
    state: result
  }
  console.log(resultData);
}
