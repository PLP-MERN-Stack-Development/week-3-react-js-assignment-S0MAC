export default function Card({ title, description }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
