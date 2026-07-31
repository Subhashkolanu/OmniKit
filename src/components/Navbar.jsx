export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">
      <h1 className="text-2xl font-bold">OmniKit</h1>

      <div className="flex gap-8">
        <a href="#">Home</a>
        <a href="#">Tools</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
    </nav>
  );
}