async function routes(fastify, options) {
  fastify.get('/healthcheck', async (request, reply) => {
    return { message: 'Healthcheck REST API using Fastify' };
  });
}

module.exports = routes;
