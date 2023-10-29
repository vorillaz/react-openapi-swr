import { FastifyPluginCallback } from 'fastify';

type Pizza = {
  id: number;
  name: string;
  price: number;
};

const stored = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: 10,
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    price: 10,
  },
  {
    id: 3,
    name: 'Veggie Pizza',
    price: 9.99,
  },
] as Pizza[];

const openApiPizzaSchema = {
  id: { type: 'number' },
  name: { type: 'string' },
  price: {
    type: 'number',
    format: 'double',
    minimum: 4,
    maximum: 30,
  },
};

const pizzas: FastifyPluginCallback = async (app, _opts = {}, next) => {
  app.get(
    '/pizzas',
    {
      schema: {
        operationId: 'getAllPizzas',
        tags: ['pizza'],
        response: {
          200: {
            type: 'object',
            properties: {
              pizzas: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    ...openApiPizzaSchema,
                  },
                },
              },
            },
          },
        },
      },
    },
    async (_req, res) => {
      res.send({ pizzas: stored });
    },
  );
  app.post(
    '/pizza',
    {
      schema: {
        operationId: 'createPizza',
        tags: ['pizza'],
        body: {
          type: 'object',
          properties: {
            ...openApiPizzaSchema,
          },
        },
        response: {
          200: {
            type: 'object',
            properties: {
              id: { type: 'number' },
            },
          },
        },
      },
    },
    async (req, res) => {
      const { name, price } = req.body as Pizza;
      const pizza = { name, price, id: stored.length + 1 };
      stored.push(pizza);
      res.send({ id: pizza.id });
    },
  );

  next();
};

export default pizzas;
