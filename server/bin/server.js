#! /usr/bin/env node

import dotenv from 'dotenv';
import getApp from '../index.js';

dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST;

getApp().listen(port, host, () => {
  console.log(`Server started on port ${port}`);
});
