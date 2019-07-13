import '@babel/polyfill';
import env from 'dotenv';
import http from 'http';
import app from './app';

env.config();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(process.env.NODE_ENV);
  console.log(`Application is running on http://localhost:${port}`);
});
