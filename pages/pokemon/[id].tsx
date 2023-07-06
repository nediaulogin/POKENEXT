import Image from "next/image";
type Pokemon = {
	id: number;
	name: string;
	url: string;
}


export const getStaticPaths = async () => {

	const maxPokemons = 150
	const api = `https://pokeapi.co/api/v2/pokemon/`

	const res = await fetch(`${api}/?limit=${maxPokemons}`)
	const data = await res.json()

	const paths = data.results.map((pokemon: Pokemon, index: number) => {
		return {
			params: { id: (index + 1)?.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context: any) => {


	const id = context.params.id.toString() as string

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

	const data = await res.json()

	return {
		props: { pokemon: data },
	}
}



export default function Pokemon({ pokemon }: any) {
	return (
		<div className="flex flex-col items-center gap-2">
			<h1 className="font-bold my-2 text-2xl capitalize">
				{pokemon.name}
			</h1>
			<Image className=""
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
				width={200}
				height={200}
				alt="cara" />
			<h3 className="font-bold text-2xl capitalize"> número </h3>
			<p className=" font-semibold p-2 ">#{pokemon.id}</p>
			<h3 className="font-bold text-2xl capitalize"> Tipo </h3>
			<div className="border rounded-full font-semibold px-3 py-2 border-purple-600 border-[5px]">
				{pokemon.types.map((item: any, index: any) => (
					<span key={index}>{item.type.name}</span>
				))}
			</div>
		</div>

	)
}