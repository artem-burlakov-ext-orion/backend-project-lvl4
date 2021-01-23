export default (app) => {
  app
    .get('/users', (req, reply) => {
      reply.view('users/all.pug');
    })
    .get('/users/new', (req, reply) => {
      reply.view('users/registration.pug');
    })
    .get('/users/:id/edit', (req, reply) => {
      reply.view('users/edit.pug');
    })
    .post('/users', (req, reply) => {
      
      
    })
    .patch('/users', (req, reply) => {})
    .delete('/users', (req, reply) => {})
  
};