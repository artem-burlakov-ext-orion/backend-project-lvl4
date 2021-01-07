import fastify from 'fastify';

export default () => {

  const app = fastify({
    logger: true,
  });

  app.get('/', async (req, res) => {
    return { hello: 'world' };
  });

  return app;
}




