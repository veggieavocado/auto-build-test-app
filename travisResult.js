const axios = require('axios');

const rainStateURL = '';

const sendTestResult = async () => {
  const testResult = process.env.TRAVIS_TEST_RESULT;
  console.log(testResult);
}
