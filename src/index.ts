import * as express from 'express';
import {Request, Response, Express} from 'express';

const app: Express = express();

app.get('/', (request: Request, response: Response) => {
  response.send({hi: 'there'});
});

app.listen(5000);
