import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState('');

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true : filter === 'active' ? !task.done : task.done
  );

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  const toggleDone = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <input
        className="border px-2 py-1 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2">Add Task</button>
      <div className="flex gap-2 mt-2">
        {['all', 'active', 'completed'].map(f => (
          <button key={f} onClick={() => setFilter(f)} className="px-3 py-1 border">{f}</button>
        ))}
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between border p-2 mt-2">
            <span className={task.done ? 'line-through text-gray-500' : ''} onClick={() => toggleDone(task.id)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
