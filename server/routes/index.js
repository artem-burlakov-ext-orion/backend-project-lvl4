import hello from './hello.js';

const controllers = [
  hello,
];

export default (app) => controllers.forEach((f) => f(app));
