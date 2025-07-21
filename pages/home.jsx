import Card from '../components/Card';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Welcome to TaskManager</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Organize your daily tasks, track completion, and explore posts from a public API.
      </p>
      <Card title="Task Manager" description="Create, complete, and manage your tasks efficiently." />
      <Card title="Public API" description="Search and explore posts fetched from a public API." />
    </div>
  );
}