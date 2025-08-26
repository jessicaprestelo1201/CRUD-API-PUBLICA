import Header from "@/components/Header";
import Image from "next/image";

export default async function CharacterDetail({ params }) {
  const { id } = params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  
  if (!res.ok) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-600">Erro ao carregar personagem</h2>
      </div>
    );
  }

  const char = await res.json();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-10 flex flex-col items-center bg-gradient-to-br from-gray-100 to-gray-200">
        <Image src={char.image} alt={char.name} width={300} height={300} className="rounded-2xl shadow-lg" />
        <h2 className="text-4xl font-bold mt-6 text-indigo-700">{char.name}</h2>
        <div className="mt-4 space-y-2 text-lg text-gray-700 text-center">
          <p><strong>Status:</strong> {char.status}</p>
          <p><strong>Espécie:</strong> {char.species}</p>
          <p><strong>Origem:</strong> {char.origin?.name}</p>
        </div>
      </main>
    </div>
  );
}