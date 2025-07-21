import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                Portfolio
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About
                </a>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="pt-20">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Krishi Y Antad
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                A passionate developer creating amazing digital experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  View My Work
                </button>
                <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors">
                  Download CV
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-white dark:bg-gray-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  About Me
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  I'm a developer with a passion for creating beautiful, functional, and user-friendly applications.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">💻</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creating responsive and interactive user interfaces with modern technologies.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Backend Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building robust server-side applications and APIs.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Designing intuitive and visually appealing user experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Projects
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills and experience.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((project) => (
                  <div key={project} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Project {project}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A brief description of this amazing project and the technologies used to build it.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                          React
                        </span>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                          TypeScript
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          Live Demo
                        </a>
                        <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-white dark:bg-gray-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © 2025 Your Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
