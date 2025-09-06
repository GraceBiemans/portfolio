import Link from 'next/link';
import ContactButtons from './ContactButtons';

export default function Navigation() {
  return (
    <nav className="container mx-auto px-4 py-4 h-auto flex flex-col sm:flex-row items-center sm:justify-between gap-4">
      <div className="flex items-center gap-4 sm:gap-6">
        <Link 
          href="/"
          className="text-gray-700 hover:text-pink-400 transition-colors font-medium"
        >
          Home
        </Link>
        <Link 
          href="/projects"
          className="text-gray-700 hover:text-pink-400 transition-colors font-medium"
        >
          Projects
        </Link>
        <Link 
          href="/about"
          className="text-gray-700 hover:text-pink-400 transition-colors font-medium"
        >
          About
        </Link>
      </div>
      <ContactButtons />
    </nav>
  );
};