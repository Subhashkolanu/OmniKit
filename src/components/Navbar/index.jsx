import { Github, Linkedin, Search } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 py-5">
      <div className="glass max-w-7xl mx-auto rounded-3xl px-8 py-4">

        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg">

              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
              >
                <circle cx="12" cy="12" r="9" />
              </svg>

            </div>

            <h1 className="text-3xl font-bold tracking-tight">
              OmniKit
            </h1>

          </div>

          {/* Search */}

          <div className="hidden md:flex flex-1 max-w-xl">

            <div className="glass flex items-center gap-3 w-full rounded-full px-5 py-3">

              <Search size={20} />

              <input
                type="text"
                placeholder="Search any tool..."
                className="bg-transparent outline-none w-full"
              />

            </div>

          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/Subhashkolanu"
              target="_blank"
              rel="noreferrer"
              className="glass w-11 h-11 rounded-full flex items-center justify-center hover:scale-105"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sai-subhash-kolanu-358ba0376/"
              target="_blank"
              rel="noreferrer"
              className="glass w-11 h-11 rounded-full flex items-center justify-center hover:scale-105"
            >
              <Linkedin size={20} />
            </a>

            <ThemeToggle />

          </div>

        </div>

      </div>
    </header>
  );
}import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="glass rounded-3xl p-20 text-center">

          <h1 className="text-6xl font-bold">
            All Your Tools.
            <br />
            One Place.
          </h1>

          <p className="mt-6 text-lg opacity-70">
            Fast. Free. Private.
          </p>

        </div>
      </main>
    </>
  );
}import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="glass rounded-3xl p-20 text-center">

          <h1 className="text-6xl font-bold">
            All Your Tools.
            <br />
            One Place.
          </h1>

          <p className="mt-6 text-lg opacity-70">
            Fast. Free. Private.
          </p>

        </div>
      </main>
    </>
  );
}