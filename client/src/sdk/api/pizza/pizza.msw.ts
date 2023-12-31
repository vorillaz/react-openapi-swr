/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Test OpenAPI with React
 * How cool is that
 * OpenAPI spec version: 0.1.0
 */
import { faker } from '@faker-js/faker';
import { rest } from 'msw';

export const getGetAllPizzasMock = () => ({
  pizzas: faker.helpers.arrayElement([
    Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      name: faker.helpers.arrayElement([faker.word.sample(), undefined]),
      price: faker.helpers.arrayElement([
        faker.number.int({ min: 4, max: 30 }),
        undefined,
      ]),
    })),
    undefined,
  ]),
});

export const getCreatePizzaMock = () => ({
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
});

export const getPizzaMSW = () => [
  rest.get('*/api/pizzas', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetAllPizzasMock()),
    );
  }),
  rest.post('*/api/pizza', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getCreatePizzaMock()),
    );
  }),
];
