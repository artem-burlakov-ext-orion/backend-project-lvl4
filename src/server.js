const fastify = require('fastify')({ logger: true })

fastify.get('/', async (req, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    process.exit(1);
  }
}

start();
