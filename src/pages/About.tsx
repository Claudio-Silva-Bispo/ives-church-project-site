
export default function About() {
    return (

        <div>
            <div className="bg-[#111827] text-white md:p-0">
                <div className="container grid grid-cols-12 mx-auto pt-32">
                    <div
                        className="flex flex-col justify-center col-span-12 align-middle bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
                        style={{ backgroundImage: "url('/assets/imagem3.jpg')", backgroundPosition: 'center center', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}
                    >
                        <div className="flex flex-col items-center p-8 py-12 text-center text-white">
                            <span>Esperamos você</span>
                            <h1 className="py-4 text-6xl font-bold">Igreja IVES</h1>
                            <p className="pb-6 text-2xl">Uma comunidade dedicada a servir e guiar a fé.</p>
                          
                        </div>
                    </div>
                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300">
                        <div className="pt-6 pb-4 space-y-2">
                            <h1 className="text-4xl font-bold">Sobre a Igreja IVES</h1>
                            <p className='text-xl pt-5'>A Igreja IVES é um lugar de acolhimento, onde buscamos viver os princípios cristãos e ajudar nossa comunidade. </p>
                                
                            <p className='text-xl pt-5'>Estamos comprometidos em fazer a diferença na vida das pessoas por meio do amor e do serviço.</p>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <h2 className="text-4xl font-bold pb-10"> Representantes</h2>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
                                    <path d="M10 3a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7z" />
                                    <path fillRule="evenodd" d="M9.293 14.293a1 1 0 011.414 0L12 15.586V12a1 1 0 00-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 1.414z" clipRule="evenodd" />
                                </svg>
                                <span>Pastor Mateus +1 (425) 260-9800</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
                                    <path d="M10 3a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7z" />
                                    <path fillRule="evenodd" d="M9.293 14.293a1 1 0 011.414 0L12 15.586V12a1 1 0 00-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 1.414z" clipRule="evenodd" />
                                </svg>
                                <span>Pastora Fernanda +1 (425) 410-3000</span>
                            </div>
                            
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <h2 className="text-4xl font-bold">Dados da Igreja</h2>
                            <p>Endereço: 13120 Ne 177pl, Woodinville, 98072</p>
                            <p>Telefone: +1 (425) 260-9800</p>
                            <p>WhatsApp: +1 (425) 260-9800</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
