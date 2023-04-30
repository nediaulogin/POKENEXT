import Image from "next/image"
import Link from "next/link"

export default function Card({pokemon}:any) {
    return( <div className="flex justify-center items-center flex-col bg-gray-800 mx-10 my-5 px-0 py-5 w-1/4 rounded-xl border-solid border-2 border-red-500 shadow-1">
        <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={160}
            height={160}
            alt="cara"/>
        <p className="font-bold my-4 text-white bg-red-500 p-1 rounded-md pr-2 pl-2 flex justify-center items-center">#{pokemon.id}</p>
        <h3 className="font-bold text-white mb-3 text-2xl capitalize"> {pokemon.name}</h3>
        <Link className=' font-bold mt-2 px-2 py-1 rounded-md bg-white hover:bg-red-600 hover:text-white' href={`/pokemon/${pokemon.id}`}>detalhes</Link>
    </div> )
}