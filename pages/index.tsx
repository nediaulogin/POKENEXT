import Image from 'next/image';
import Card from '../components/card';
interface Pokemon {
  id?: number;
  name: string;
  url: string;
}
interface Props {
  pokemons: Pokemon[];
}


export const getStaticProps = async () => {

  const maxPokemons = 39
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
  return(
  <>
    <div className='flex justify-center items-center mb-6 mt-8'>
      <h1 className='text-6xl font-bold text-red-600 mt-2'>Poke<span className=' mr-3 text-black'>Next</span></h1>
      <Image
      src="/images/pokeball.png"
      height={60}
      width={60}
      alt='pokebola'
      />
      </div>
      <div className='flex justify-center mx-auto items-center max-w-5xl'>
      <ul className='flex flex-wrap '>

        {pokemons.map((pokemon:Pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>

        ))}
      </ul>
      </div>


  </>
  )
}


