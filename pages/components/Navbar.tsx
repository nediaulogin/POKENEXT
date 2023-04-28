import Image from 'next/image';
import Link from "next/link";


const Navbar: React.FC = () => {
  return (<>
    <nav className='flex items-center justify-between p-4 mb-2 bg-gray-900 text-white font-bold'>
      <div className='flex items-center justify-center'>
        <Image   src="/images/pokeball.png" 
          width={35}
          height={35}
          alt='imagem'/>
          <h1 className='text-xl ml-4'>PokeNext</h1>
      </div>
      
      <ul className='flex list-none text-xl'>
        <li className='mr-3'>
          <Link className='p-1 hover:border-b border-white-400' href="/">home</Link>
        </li>
        <li>
          <Link className='p-1 hover:border-b border-white-400' href="/about">sobre</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;