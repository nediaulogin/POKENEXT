import Image from 'next/image';
import Link from "next/link";


const Navbar: React.FC = () => {
  return (<>
    <nav>
      <div>
        <Image src="/images/pokeball.png" 
          width={30}
          height={30}
          className ="w-30 h-30"
          alt='imagem'/>
          <h1>Pokenext</h1>
      </div>
      
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">sobre</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;