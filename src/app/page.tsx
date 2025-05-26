import Image from "next/image";
import ContactButtons from "@/components/ContactButtons";
import Project from "@/components/Project";

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
          {/* Weather App Project */}
          <Project
            title="European City Weather App"
            description="A small React-based project built to practice working with APIs and frontend technologies. It uses HTML, CSS, and JavaScript alongside the free 7Timer! API to fetch and display weather data. Users can select from a list of major European cities to view current weather conditions in a clean, responsive interface."
            previewUrl="https://weather-app-hazel-nu-88.vercel.app/"
            githubUrl="https://github.com/GraceBiemans/weather-app"
            demoUrl="https://weather-app-hazel-nu-88.vercel.app/"
          />

          {/* Rage Project */}
          <Project
            title="Rage"
            description="I built this project for my Dad's birthday because he loves the card game of Rage."
            previewUrl="https://gracebiemans.github.io/rage/"
            githubUrl="https://github.com/GraceBiemans/rage"
            demoUrl="https://gracebiemans.github.io/rage/"
            isReversed={true}
          />
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
