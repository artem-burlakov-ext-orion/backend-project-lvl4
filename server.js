import fastify from 'fastify';
import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();
const port = process.env.PORT || 3000;
const host = process.env.HOST;

const app = fastify({ logger: true });

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});




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
