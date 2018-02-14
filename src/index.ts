import * as express from 'express';
import {Request, Response, Express} from 'express';

const app: Express = express();

app.get('/', (request: Request, response: Response) => {
  response.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
