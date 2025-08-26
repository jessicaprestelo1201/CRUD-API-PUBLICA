import Header from "@/components/Header";

export default function ApiInfo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-3xl mx-auto p-10 bg-white rounded-2xl shadow-lg mt-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">📡 Informações da API</h2>
        <p><strong>Nome da API:</strong> Rick and Morty API</p>
        <p className="mt-2">
          <strong>Documentação:</strong>{" "}
          <a href="https://rickandmortyapi.com/documentation" target="_blank" className="text-blue-600 underline hover:text-blue-800">
            Clique aqui
          </a>
        </p>
        <p className="mt-2"><strong>URL Base:</strong> https://rickandmortyapi.com/api</p>
        <p className="mt-2"><strong>Endpoint usado:</strong> /character</p>
        <p className="mt-2"><strong>Atributos retornados:</strong> id, name, status, species, image...</p>
        <p className="mt-6 text-gray-700">
          Essa API disponibiliza informações sobre os personagens, episódios e locais do desenho Rick and Morty.
        </p>
      </main>
    </div>
  );
}