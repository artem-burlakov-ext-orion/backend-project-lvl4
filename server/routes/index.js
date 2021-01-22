import root from './root.js';

const controllers = [
  root,
];

export default (app) => controllers.forEach((controller) => controller(app));
