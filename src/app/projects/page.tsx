import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 pt-32 sm:pt-24">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-700 mb-8 text-center">My Projects</h1>
          <p className="text-md text-gray-500 text-center mb-12">
            Live demo links will allow you to view the projects in full size.
          </p>
          <Projects />
        </div>
      </main>
    </div>
  );
} 