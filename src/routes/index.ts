import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) =>
  response.json({ status: true, message: 'Hello, world!' }),
);

export default routes;
