const request = require('supertest');
const app = require('../../app');

describe('route /healthcheck', () => {
  test('should return /api/healthcheck status: 200', async () => {
    await app.ready();
    const response = await request(app.server).get('/api/healthcheck');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ message: 'Healthcheck REST API using Fastify' });
  });
});

describe('route not found', () => {
  test('should return /404 status: 404', async () => {
    await app.ready();
    const response = await request(app.server).get('/404');
    expect(response.status).toEqual(404);
  });
});
