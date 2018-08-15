const axios = require('axios');

const rainStateURL = '';

const sendTestResult = async () => {
  const testResult = process.env.TRAVIS_TEST_RESULT || 'NONE';
  let result = '';
  if (testResult == 0) {
    result = 'FAIL';
  } else if (testResult == 1) {
    result = 'PASS';
  } else if (testResult == 'NONE') {
    console.log(`Test Result: ${testResult}`);
  }

  if (testResult != 'NONE') {
    const resultData = {
      app: 'test_app',
      state: result
    }
    console.log(resultData);
  }
}

sendTestResult();
