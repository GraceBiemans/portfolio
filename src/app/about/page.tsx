export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <div className="mt-12 space-y-6">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                [Your about content will go here. This is a placeholder for your personal introduction,
                background, skills, and interests. Feel free to customize this section with your own content.]
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 