import Image from "next/image";
import ContactButtons from "@/components/ContactButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-end gap-4">
          <ContactButtons buttonSize="md" />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <div className="relative w-32 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg ring-2 ring-pink-100">
            <Image
              src="/profile-pic.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Introduction Text */}
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-700">
              Hi, I'm <span className="text-pink-400">Grace Biemans</span>
            </h1>
            <p className="text-xl text-gray-600">
              I'm passionate about using technology to solve problems.
            </p>
            <p className="text-lg text-gray-500">
              Welcome to my corner of the internet where I share my journey in technology and development.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mt-32 space-y-32 scroll-mt-20">
          {/* Project 1 - Weather App */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Project Preview */}
            <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-pink-100">
              <iframe
                src="https://weather-app-hazel-nu-88.vercel.app/"
                className="w-full h-full"
                title="Weather App Preview"
                loading="lazy"
              />
            </div>
            
            {/* Project Info */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-700">European City Weather App</h3>
              <p className="text-gray-600">
                A small React-based project built to practice working with APIs and frontend technologies.
                 It uses HTML, CSS, and JavaScript alongside the free 7Timer! API to 
                fetch and display weather data. Users can select from a list of major European cities to 
                view current weather conditions in a clean, responsive interface.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/GraceBiemans/weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400 transition-all shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                <a
                  href="https://weather-app-hazel-nu-88.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-pink-200 text-gray-600 font-medium hover:bg-pink-50 transition-all shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - Template for next project (reversed layout) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
            {/* Project Preview */}
            <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-pink-100">
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <p className="text-gray-500">Project Preview Coming Soon</p>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-700">Project Title</h3>
              <p className="text-gray-600">
                Project description will go here. This template shows how the alternating layout will work 
                for future projects, with the preview on the right and content on the left.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400 transition-all shadow-sm hover:shadow-md opacity-50 cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-pink-200 text-gray-600 font-medium hover:bg-pink-50 transition-all shadow-sm hover:shadow-md opacity-50 cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-20 flex flex-col items-center scroll-mt-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Let's Connect!</h2>
          <ContactButtons buttonSize="lg" />
        </div>
      </main>
    </div>
  );
}
