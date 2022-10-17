import express from 'express';
import 'reflect-metadata';
import { router } from 'routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from 'swagger.json';
import './shared/container';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333!');
});
