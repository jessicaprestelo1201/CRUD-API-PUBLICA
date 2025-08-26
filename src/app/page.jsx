import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 p-10 text-center bg-gradient-to-br from-gray-100 to-gray-300">
        <h2 className="text-4xl font-bold mb-2">3º Ano - 2TDS2</h2>
        <p className="text-lg text-gray-700">Escola: SESI Valinhos</p>
        <p className="text-lg text-gray-700 mb-6">Aluno(a): Jéssica Prestelo</p>
        
        <Image 
          src="/avatar.png" 
          alt="Minha foto"
          width={200}
          height={200}
          className="rounded-full shadow-xl border-4 border-indigo-500"
        />

        <blockquote className="mt-8 text-xl italic text-gray-800 max-w-lg">
          “A persistência realiza o impossível.” – Provérbio Chinês
        </blockquote>
      </main>
    </div>
  );
}
