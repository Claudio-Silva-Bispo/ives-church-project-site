
export default function Gallery(){
    return (    
        <div>
            <section className="py-6 bg-[#111827] pt-32">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="/assets/Carrosel/imagem-um.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square object-cover" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-cinco.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-tres.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-quatro.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-seis.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-sete.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-oito.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-nove.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-dez.jpg" />
                    <img src="/assets/Carrosel/imagem-dois.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square object-cover" />
                </div>
            </section>
            <section className="py-6 bg-[#111827]">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-onze.jpg" />
                        <img className="object-cover w-full bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-doze.jpg" />
                        <img className="object-cover w-full bg-gray-500 aspect-square object-cover" src="/assets/Carrosel/imagem-cinco.jpg" />
                        <img className="object-cover w-full bg-gray-500 aspect-square object-cover" src="/assets/imagem1.jpg" />
                    </div>
                </div>
            </section>
            <section className="py-6 bg-[#111827] ">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="/assets/Carrosel/imagem-dez.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square object-cover" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/imagem3.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/imagem4.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/imagem5.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/imagem2.jpg" />
                    
                    <img src="/assets/imagem1.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square object-cover" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/background/background.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/background/background-dois.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/background/background-cinco.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover" src="/assets/background/background-sete.jpg" />
                </div>
            </section>
            <section className="py-6 bg-[#111827]">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full bg-gray-500 aspect-square object-cover" src="/assets/jovens/imagem2.jpeg" />
                        <img className="object-cover w-full bg-gray-500 aspect-square" src="/assets/jovens/imagem8.jpeg" />
                        <img className="object-cover w-full bg-gray-500 aspect-square" src="/assets/jovens/imagem9.jpeg" />
                        <img className="object-cover w-full bg-gray-500 aspect-square" src="/assets/jovens/imagem6.jpeg" />
                    </div>
                </div>
            </section>
       
        </div>
    );
}