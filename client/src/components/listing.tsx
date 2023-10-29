import { useGetAllPizzas } from '../sdk/api/pizza/pizza';
import { Link } from 'react-router-dom';

export default function PizzaListing() {
  const { data, isLoading } = useGetAllPizzas();

  const pizzas = data?.pizzas;

  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold tracking-tight">Pizza Menu</h1>
          <p
            data-testid="pizza-listing-description"
            className="text-zinc-500 dark:text-zinc-400">
            Choose from our variety of delicious pizzas.
          </p>
          <Link
            to="/add"
            className="inline-flex items-center justify-center h-10 px-6 mt-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-zinc-500 hover:bg-zinc-600 focus:shadow-outline focus:outline-none">
            Add new pizza
          </Link>
        </div>
        <div className="grid lg:grid-cols-1 gap-8">
          <div>
            {isLoading && (
              <div className="grid gap-6 relative group">Loading...</div>
            )}
          </div>
          {!isLoading &&
            pizzas?.map(pizza => {
              return (
                <div className="grid gap-6 relative group" key={pizza.id}>
                  <div className="grid gap-1">
                    <h3 className="font-semibold" data-testid="pizza-name">
                      {pizza.name}
                    </h3>
                    <h4 className="font-semibold" data-testid="pizza-price">
                      ${pizza.price}
                    </h4>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
