import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lexington Legends</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link href="/schedule" className="hover:text-blue-300">Schedule</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}