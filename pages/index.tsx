import { GetStaticProps } from 'next';

interface Pokemon {
  id?: number;
  name: string;
  url: string;
}
interface Props {
  pokemons: Pokemon[];
}


export const getStaticProps: GetStaticProps<Props> = async () =>{

  const maxPokemons = 250
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item:Pokemon, index:number) => {
  item.id = index + 1
});
return {
  props:{
      pokemons: data.results
  }
  }
}


export default function Home({pokemons}:Props) {
  return(<div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map((pokemon:Pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>


  </div>)
  
}


