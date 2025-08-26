import Link from "next/link";
import Image from "next/image";

export default function Card({ id, name, image, status }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <Image src={image} alt={name} width={300} height={300} className="w-full h-60 object-cover"/>
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className={`mt-1 font-medium ${status === "Alive" ? "text-green-600" : "text-red-500"}`}>
          {status}
        </p>
        <Link
          href={`/characters/${id}`}
          className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
}