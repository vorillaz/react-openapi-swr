import { createPizza } from '../sdk/api/pizza/pizza';
import { Link } from 'react-router-dom';

export default function AddPizza() {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold tracking-tight">Add new pizza</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Delicious pizzas are waiting for you.
          </p>
        </div>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const target = e.currentTarget;
            const name = target.pizzaName?.value;
            console.log(name);
            const price = target.price.value;
            await createPizza({ name, price });
            // reset form
            target.reset();
          }}>
          <div className="grid lg:grid-cols-1 gap-8">
            <div className="grid gap-6 relative group">
              <div className="grid gap-1">
                <label htmlFor="pizzaName" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="pizzaName"
                  name="pizzaName"
                  placeholder="Pizza name"
                  className="w-full h-10 px-3 mt-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="price" className="font-semibold">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Pizza price"
                  className="w-full h-10 px-3 mt-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-zinc-500 hover:bg-zinc-600 focus:shadow-outline focus:outline-none">
              Add pizza
            </button>
          </div>
        </form>
        {/* Back to listing */}
        <Link
          to="/"
          className="inline-flex items-center justify-center h-10 px-6 mt-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-zinc-500 hover:bg-zinc-600 focus:shadow-outline focus:outline-none">
          Back to listing
        </Link>
      </div>
    </section>
  );
}
