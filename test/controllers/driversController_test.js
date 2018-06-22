const assert = require('assert');
const fakeRequest = require('supertest');
const mongoose = require('mongoose');

const app = require('../../app');
const Driver = mongoose.model('driver');

describe('Drivers Controller', () => {
  it('Post call to create new Driver', done => {
    Driver.count().then(count => {
      
      fakeRequest(app)    
      .post('/api/drivers')
      .send({email: 'test@test.com'})
      .end(() => {
        Driver.count().then(newCount => {
          assert(count + 1 === newCount);
          done();
        });
      });
    });

    
  });
});