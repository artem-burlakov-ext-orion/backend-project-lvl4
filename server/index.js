import fastify from 'fastify';
import pointOfView from 'point-of-view';
import Pug from 'pug';
import path from 'path';
import { fileURLToPath } from 'url';
import addRoutes from './routes/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));



export default () => {
  const app = fastify({
    logger: true,
  });
  addRoutes(app);

  app.register(pointOfView, {
    engine: {
      pug: Pug,
    },
    templates: path.join(__dirname, '..', 'server', 'views'),
  })
  return app;
};
