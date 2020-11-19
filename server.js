const fastify = require('fastify')({ logger: true })

const PORT = process.env.PORT || 5000;

fastify.get('/', async (req, reply) => {
  return { hello: 'world' };
})

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
