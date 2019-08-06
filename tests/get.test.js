const request = require('supertest');
const app = require('../app');

beforeAll(async () => {
    //do something before anything else runs.
    console.log('Jest Started!');
});

// Close the server after each test
// afterAll(async () => {
//     await app.close();
//     console.log('server closed!');
// })

describe('basic route healthcheck', () => {
    test('It should return /healthcheck', async () =>{
        await app.ready();
        const response = await request(app.server).get('/healthcheck');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ message: 'Healthcheck REST API using Fastify' });
    });
});