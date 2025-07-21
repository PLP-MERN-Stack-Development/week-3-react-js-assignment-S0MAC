export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-300 py-4 mt-8">
      © {new Date().getFullYear()} TaskManager. All rights reserved.
    </footer>
  );
}

// 📁 src/components/Layout.jsx
import Navbar from '../Navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Navbar />
      <main className="flex-grow px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
