
function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="mt-1 text-gray-600">Senior Software Engineer</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            Experienced software engineer with 10 years of expertise in designing and developing full-stack applications, specializing in .NET technologies and modern JavaScript frameworks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Designed a real-time payment queue processor for convenience stores using <strong>.NET Core</strong>.
            </li>
            <li>
              Built a government website using <strong>Vue.js</strong> and <strong>Web API</strong> with a decoupled front-end and back-end architecture.
            </li>
            <li>
              Implemented a unit-tested inventory allocation system.
            </li>
            <li>
              Created a shared template project enabling both traditional <strong>WebForms</strong> and <strong>.NET Core</strong> systems to share authorization and authentication via a <strong>Vue.js</strong> platform for government management.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="mb-1">Email: johndoe@example.com</p>
          <p>GitHub: <a href="https://github.com/johndoe" className="text-blue-600 hover:underline">github.com/johndoe</a></p>
        </section>
      </main>

      <footer className="text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} John Doe
      </footer>
    </div>
  )
}

export default App
