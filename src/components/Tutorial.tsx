import { Card } from 'flowbite-react';

export default function Tutorial() {
  return (
    <div>
      <div className="bg-gray-50 shadow-sm rounded my-6">
        <h1 className="text-bold text-2xl p-2 text-secondary">
          How and why to use Matjakt?
        </h1>
        <p className="p-2">
          Matjakt is a platform that helps you find the best prices for
          groceries in your area. You can also use it to find recipes and create
          shopping lists to compare prices between different stores.
        </p>
      </div>

      <div className="flex justify-between items-stretch gap-2 py-2">
        <Card href="#" className="flex-grow">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Search for great deals
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card href="#" className="flex-grow">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Compare prices between stores
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card href="#" className="flex-grow">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create a shopping list and compare prices
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
}
