import Image from "next/image"

export default function About() {
    return (
        <div >
            <h1 className='text-2xl font-semibold text-center'>Sobre o Projeto</h1>
            <div className="flex justify-center">
            <Image 
            src="/images/charizard.png" 
            width={300}
            height={300}
            alt="Charizard"    
                
            />
            </div>
        </div>
    )
}