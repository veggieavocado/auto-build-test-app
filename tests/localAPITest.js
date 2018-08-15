const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const { app, stopServer } = require('../index.js');

describe('API 테스팅 시작', () => {
  beforeEach(() => {
    this.request = chai.request(app);
    // 테스트 내부에서 this.request를 사용할 수 있게해줌
  });

  afterEach(() => {
    stopServer();
  }); // 서버를 꺼주지 않으면 에러 발생

  it('/ 요청을 받을 수 있다', () => {
    return this.request // 위에서 정의내린 chai.request(soul)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json; // body-parser 라이브러리로 json구조로 변형
        expect(res.body).to.be.an('object'); // js에서는 json과 object가 같음
        expect(res.body.status).to.equal('DONE');
      });
  });
});
