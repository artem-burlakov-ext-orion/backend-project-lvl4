import fastify from 'fastify';

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const app = fastify({ logger: true });

app.get('/', async (req, reply) => {
  return { hello: 'world' };
})

const start = async () => {
  try {
    await app.listen(port, host);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
