type Pokemon = {
	id: number;
	name: string;
	url: string;
}




export default function Pokemon({ pokemon }) {
	return <p>{pokemon.name}</p>
}
export const getStaticPaths = async () => {

	const maxPokemons = 40
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