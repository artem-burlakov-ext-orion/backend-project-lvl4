export default (app) => {
  app
    .get('/', (req, reply) => {
      reply.view('root.pug');
    })
};
