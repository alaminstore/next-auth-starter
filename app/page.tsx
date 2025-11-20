import { auth } from "./auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">MyApp</h1>

          <div>
            {session?.user ? (
              <span className="text-gray-700">
                Hello, {session.user.name || "User"} 👋
              </span>
            ) : (
              <a
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Login
              </a>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyApp</h2>
        <p className="text-gray-600 max-w-md mb-6">
          A modern Next.js starter page with TailwindCSS, authentication, and
          beautiful UI.
        </p>

        <div className="flex gap-4">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Go to Dashboard
          </a>
          <a
            href="/about"
            className="px-6 py-3 border border-gray-300 font-semibold rounded-lg hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-white border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyApp – All Rights Reserved.
      </footer>
    </main>
  );
}
