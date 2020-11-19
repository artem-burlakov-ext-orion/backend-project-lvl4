import fastify from 'fastify';

const port = process.env.PORT || 6000;

const app = fastify({ logger: true });

app.get('/', async (req, reply) => {
  return { hello: 'world' };
})

const start = async () => {
  try {
    await app.listen(port);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
