import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import routes from './routes';

const expressApp = express();

expressApp.use(bodyParser.json());
expressApp.use(expressValidator());
const app = routes(expressApp);

app.use('*', (req, res) => {
  res
    .status(404)
    .json({
      message: 'welcome to the beginning of nothingness',
    });
});

export default app;
