import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
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

          {/* Call to Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400 transition-all shadow-sm hover:shadow-md"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400 transition-all shadow-sm hover:shadow-md scroll-smooth"
            >
              Get in Touch
            </a>
          </div> */}
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
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/grace-biemans/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0077B5]/90 to-[#0077B5]/70 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:gracebiemans@icloud.com"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400/90 to-pink-300/70 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:scale-110"
              aria-label="Email"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/gracebiemans/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E1306C]/90 to-[#833AB4]/70 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:scale-110"
              aria-label="Instagram Profile"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/grace.biemans/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4267B2]/90 to-[#4267B2]/70 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:scale-110"
              aria-label="Facebook Profile"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
