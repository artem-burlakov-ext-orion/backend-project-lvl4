import fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST;

const app = fastify({
  logger: true,
});

app.get('/', async (req, res) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await app.listen(port, host);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();