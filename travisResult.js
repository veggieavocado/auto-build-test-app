const axios = require('axios');

const rainStateURL = 'http://198.13.36.153:8080/api/v1/rainstate/';

const sendTestResult = async () => {
  const testResult = process.env.TRAVIS_TEST_RESULT || 'NONE';
  let result = '';
  if (testResult == 1) {
    result = 'FAIL';
  } else if (testResult == 0) {
    result = 'PASS';
  } else if (testResult == 'NONE') {
    console.log(`Test Result: ${testResult}`);
  }

  if (testResult != 'NONE') {
    const resultData = {
      app: 'test_app',
      state: result
    }
    const res = await axios.post(rainStateURL, resultData);
    console.log(res);
  }
}

sendTestResult();
