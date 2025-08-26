"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Projeto Next.js 🚀</h1>
        <nav className="space-x-10 font-medium">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/apiinfo" className="hover:text-yellow-300 transition">API Info</Link>
          <Link href="/characters" className="hover:text-yellow-300 transition">Personagens</Link>
        </nav>
      </div>
    </header>
  );
}