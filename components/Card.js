export default function Card({ title, value }) {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 shadow rounded-xl p-4 w-60 max-md:text-center">
      <h3 className="text-gray-800 dark:text-gray-500">{title}</h3>
      <p className="text-2xl text-gray-800 dark:text-gray-400 font-bold">{value}</p>
    </div>
  );
}
