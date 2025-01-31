

export default function Footer(){
    return (

        <footer className="bg-[#111827] text-white">
            <div className="container flex flex-col p-6 mx-auto md:p-8 lg:flex-row divide-gray-600">
                <ul className="self-start py-6 space-y-4 text-start sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                    <li>Quem somos</li>
                    <li>Localização</li>
                    <li>Contatos</li>
                    <li>Agenda</li>
                    <li>Atividades</li>
                    <li>Galeria</li>
                </ul>
                <div className="flex flex-col justify-center pt-6 lg:pt-0">
                    <div className="flex justify-center space-x-4">
                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#eb5e28] text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                            <path d="M12 13.5l-12-9v18h24v-18l-12 9zm0-1.5l12-9h-24l12 9z"/>
                            </svg>

                        </a>
                        <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#eb5e28] text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.58.69.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.29 22 2 13.71 2 3.5 2 2.95 2.45 2.5 3 2.5H6.5c.55 0 1 .45 1 1 0 1.25.24 2.46.69 3.58.14.34.07.73-.21 1.11l-2.2 2.2z"/>
                            </svg>

                        </a>
                        <a rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#eb5e28] text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#eb5e28] text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.106 1.523 5.84L0 24l6.24-1.523A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.32 17.48c-.26.73-1.52 1.34-2.1 1.42-.56.08-1.24.11-2-.12-.46-.14-1.06-.34-1.82-.66-3.2-1.34-5.28-4.64-5.44-4.86-.16-.22-1.3-1.72-1.3-3.28 0-1.56.82-2.32 1.12-2.64.3-.32.66-.4.88-.4.22 0 .44.01.64.01.2 0 .48-.08.76.58.28.66.96 2.28 1.04 2.44.08.16.14.34.02.56-.12.22-.18.34-.34.52-.16.18-.34.4-.48.54-.16.16-.32.34-.14.66.18.32.8 1.32 1.72 2.14 1.18 1.06 2.18 1.4 2.5 1.56.32.16.5.14.68-.08.18-.22.78-.9.98-1.2.2-.3.4-.24.66-.14.26.1 1.64.78 1.92.92.28.14.46.22.52.34.06.12.06.72-.2 1.42z"/>
                            </svg>

                        </a>

                    </div>
                </div>

            </div>
            <div className="py-6 text-sm text-center">© 2025 I.V.E.S Church Seattle.</div>
        </footer>
    );
}