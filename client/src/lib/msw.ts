import { setupServer } from 'msw/node';
import { getPizzaMSW } from '../sdk/api/pizza/pizza.msw';
export const server = setupServer(...getPizzaMSW());
