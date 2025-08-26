import Header from "@/components/Header";
import Card from "@/components/Card";

export default async function Characters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const characters = data.results;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-10 bg-gradient-to-br from-gray-100 to-gray-200">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">👾 Personagens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {characters.map((char) => (
            <Card key={char.id} id={char.id} name={char.name} image={char.image} status={char.status} />
          ))}
        </div>
      </main>
    </div>
  );
}