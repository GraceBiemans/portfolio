export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-700 mb-8 text-center">About Me</h1>

          <nav className="flex justify-center space-x-6 mb-12 text-gray-600">
            <a href="#personal" className="hover:text-gray-800">Personal</a>
            <a href="#experience" className="hover:text-gray-800">Experience</a>
            <a href="#education" className="hover:text-gray-800">Education</a>
          </nav>

          <section id="personal" className="prose prose-lg text-gray-600 max-w-none space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Personal</h2>
            <p>
              I love to learn new things. When I&apos;m not coding I run a small crochet and knitting business,
              spend time with my dog, Bean, and hang out with my family.
            </p>
            <p>
              Music is another hobby of mine. I&apos;m not amazing at any instruments, but I enjoy playing and
              currently play clarinet in a local community band.
            </p>
          </section>

          <section id="experience" className="prose prose-lg text-gray-600 max-w-none mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">Experience</h2>

            <div>
              <h3 className="text-xl font-semibold text-gray-700">Full-Stack Web Developer &ndash; zu.com communications</h3>
              <p className="text-sm text-gray-500">May 2022 &ndash; Feb 2025</p>
              <ul className="list-disc pl-5">
                <li>Built, supported, and optimized multiple projects.</li>
                <li>Collaborated with design and strategy teams.</li>
                <li>Wrote user tests and user documentation.</li>
                <li>Reviewed and implemented client feedback.</li>
                <li>Contributed to Mysask411, most recently the Community Events feature.</li>
                <li>
                  Worked heavily on Following Their Voices for the public school system, including admin pages,
                  reporting tools, teacher tools, testing, documentation, and addressing bug reports.
                </li>
                <li>
                  Assisted with Crop Reporting for the Saskatchewan Ag Dashboard, generating reports and creating
                  online reports for farmers.
                </li>
                <li>
                  Improved accessibility of a Government of Saskatchewan application through requirements
                  gathering and screen reader testing across devices.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700">Software Developer II &ndash; Vendasta</h3>
              <p className="text-sm text-gray-500">June 2025 &ndash; Present</p>
              <ul className="list-disc pl-5">
                <li>Work with a small team to maintain and improve the Vendasta marketplace platforms.</li>
                <li>Contributed to sprint planning.</li>
              </ul>
            </div>
          </section>

          <section id="education" className="prose prose-lg text-gray-600 max-w-none mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Education</h2>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">University of Saskatchewan</h3>
              <p className="text-sm text-gray-500">Bachelor of Science, Computer Science</p>
              <p className="text-sm text-gray-500">2019 &ndash; 2023</p>
            </div>
            <p>
              View my{' '}
              <a
                href="https://www.linkedin.com/in/grace-biemans/details/certifications/"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                certifications on LinkedIn
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
