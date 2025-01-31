export default function Tithe(){
    return (

        <div className="p-6 py-12 bg-[#111827] text-gray-50">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracking-tighter font-bold">Plante uma semente
                        <br className="sm:hidden" /> nesta obra
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0 flex flex-col gap-5">
                        <span>Contribua para o crescimento da nossa comunidade</span>
                        <span className="font-bold text-lg">Projeto I.V.E.S</span>
                        
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-100 text-gray-800 border-gray-600">Saiba como ajudar</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
