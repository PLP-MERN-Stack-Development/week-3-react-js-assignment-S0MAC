import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/postsApi';

export default function ApiPosts() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = posts.filter(p => p.title.includes(query));

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <input
        className="border px-2 py-1 mb-4 w-full"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(post => (
          <div key={post.id} className="p-4 border rounded">
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}