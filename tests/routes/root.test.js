const request = require('supertest');
const app = require('../../app');

describe('default root route', () => {
  test('should return / world', async () => {
    await app.ready();
    const response = await request(app.server).get('/');
    expect(response.body).toEqual({ hello: 'world' });
  });
});
