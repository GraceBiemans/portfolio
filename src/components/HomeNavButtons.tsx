import Link from "next/link";

const HomeNavButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400 transition-all shadow-sm hover:shadow-md"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        My Projects
      </Link>
      <Link
        href="/about"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400 transition-all shadow-sm hover:shadow-md"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        More About Me
      </Link>
    </div>
  );
};

export default HomeNavButtons; 