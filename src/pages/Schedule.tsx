export default function Schedule() {
    return (
        <section className="md:m-8 text-gray-800 pt-10 flex flex-col justify-center items-center md:pt-44">
            <div className="container mx-auto md:p-4 md:my-6 space-y-2 text-start p-5 pt-20">
                <h2 className="text-2xl md:text-4xl font-bold">Fique por dentro da nossa programação</h2>
                <p className="text-gray-600">Cada dia com um objetivo espiritual</p>
            </div>
            
            <div className="container gap-4">
    
                <div className="flex flex-col items-start p-4">
                    <h3 className="my-3 text-2xl md:text-4xl font-semibold">Quinta - Reunião de Orações</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Horário: 8 pm</p>
                    </div>
                </div>

            </div>

            <div className="container gap-4">

                <div className="flex flex-col items-start p-4">
                    <h3 className="my-3 text-2xl md:text-4xl font-semibold">Domingo - Culto de Adoração</h3>
                    <div className="space-y-1 leading-tight">
                        <p>6 pm - Culto da Noite</p>
                    </div>
                    
                </div>

            </div>

        </section>
    );
}
