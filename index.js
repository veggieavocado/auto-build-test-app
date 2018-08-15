const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(8080, () => {
  console.log('서버 시작했습니다');
});

const stopServer = () => {
  server.close(); // 위에서 시작한 새로운 서버를 닫아준다
  // 테스트할 때 필요한 툴 (프로덕션 상에서는 상관없음)
};

app.get('/', (req, res) => {
  res.status(200);
  res.send({ status: 'DONE' });
});


module.exports = {
  app,
  stopServer,
}
