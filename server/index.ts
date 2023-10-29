import fastify from 'fastify';
import path from 'path';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import ui from '@fastify/swagger-ui';
import pizzas from './pizza';
import { writeFile } from './lib/file';

const start = async () => {
  const server = fastify();
  await server.register(cors, {
    origin: '*',
  });

  await server.register(swagger, {
    openapi: {
      info: {
        title: 'Test OpenAPI with React',
        description: 'How cool is that',
        version: '0.1.0',
      },
      servers: [
        {
          url: 'http://localhost:3001',
          description: 'Development server',
        },
      ],
    },
  });

  await server.register(ui, {});

  // Write swagger.json to file
  if (process.env.NODE_ENV === 'development') {
    const spec = './openapi/data-api.json';
    const specFile = path.join(__dirname, spec);
    server.ready(() => {
      const apiSpec = JSON.stringify(server.swagger() || {}, null, 2);

      writeFile(specFile, apiSpec).then(() => {
        console.log(`Swagger specification file write to ${spec}`);
      });
    });
  }

  // Register routes
  await server.register(pizzas, { prefix: '/api' });

  server.listen({ port: 3001 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

start();
