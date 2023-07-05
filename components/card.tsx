import Image from "next/image"
import Link from "next/link"

export default function Card({pokemon}:any) {
    return( <div className="flex justify-center items-center flex-col bg-gray-800 
        m-4 px-7 py-7 rounded-xl border-solid border-4 border-purple-800 shadow-1 max-h-30">
        <Image className="mb-2"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={80}
            height={80}
            alt="cara"/>
        <p className="font-bold my-2 text-white bg-red-500 rounded-md px-2
                    flex justify-center ">#{pokemon.id}</p>
        <h3 className="font-bold my-2 text-white text-2xl capitalize"> {pokemon.name}</h3>
        <Link className='font-bold  px-2 pb-1 pt-2 rounded-md bg-white
            hover:bg-red-600 hover:text-white' href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div> )
}