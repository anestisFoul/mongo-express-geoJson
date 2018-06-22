const assert = require('assert');
const fakeRequest = require('supertest');
const app = require('../app');

describe('App', () => {
  it('hanlde GET request', (done) => {
    fakeRequest(app)
    .get('/api')
    .end((err, response) => {
      assert(response.body === '');
      done();
    });
  });
});