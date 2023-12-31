/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Test OpenAPI with React
 * How cool is that
 * OpenAPI spec version: 0.1.0
 */
import useSwr from 'swr';
import type { Key, SWRConfiguration } from 'swr';
import type {
  CreatePizza200,
  CreatePizzaBody,
  GetAllPizzas200,
} from '../../schemas';
import { fetcher } from '../../../lib/fetcher';
import type { ErrorType, BodyType } from '../../../lib/fetcher';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export const getAllPizzas = () => {
  return fetcher<GetAllPizzas200>({ url: `/api/pizzas`, method: 'get' });
};

export const getGetAllPizzasKey = () => [`/api/pizzas`] as const;

export type GetAllPizzasQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllPizzas>>
>;
export type GetAllPizzasQueryError = ErrorType<unknown>;

export const useGetAllPizzas = <TError = ErrorType<unknown>>(options?: {
  swr?: SWRConfiguration<Awaited<ReturnType<typeof getAllPizzas>>, TError> & {
    swrKey?: Key;
    enabled?: boolean;
  };
}) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getGetAllPizzasKey() : null));
  const swrFn = () => getAllPizzas();

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  );

  return {
    swrKey,
    ...query,
  };
};

export const createPizza = (createPizzaBody: BodyType<CreatePizzaBody>) => {
  return fetcher<CreatePizza200>({
    url: `/api/pizza`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: createPizzaBody,
  });
};
