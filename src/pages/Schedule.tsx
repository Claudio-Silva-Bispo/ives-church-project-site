export default function Schedule() {
    return (
        <section className="md:m-8 text-gray-800 pt-10">
            <div className="container mx-auto md:p-4 md:my-6 space-y-2 text-start p-5 pt-20">
                <h2 className="text-3xl font-bold">Fique por dentro da nossa programação</h2>
                <p className="text-gray-600">Cada dia com um objetivo espiritual</p>
            </div>
            
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/*<div className="flex flex-col items-start p-4">
                    <h3 className="my-3 text-3xl font-semibold">Segunda - Reunião de Oração</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Uma hora de comunhão e intercessão.</p>
                        <p>Horário: 19h - 20h</p>
                        <p>Local: Sala de Oração</p>
                    </div>
                </div>*/}

                {/*<div className="flex flex-col items-start p-4">
                    <h3 className="my-3 text-3xl font-semibold">Terça - Estudo Bíblico</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Explorando as escrituras e crescendo na fé.</p>
                        <p>Horário: 20h - 21h</p>
                        <p>Local: Auditório Principal</p>
                    </div>
                </div></div>*/}

                {/*<div className="flex flex-col items-start p-4">
                    <h3 className="my-3 text-3xl font-semibold">Quarta - Culto de Adoração</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Um momento de louvor e adoração a Deus.</p>
                        <p>Horário: 19h30 - 21h</p>
                        <p>Local: Auditório Principal</p>
                    </div>
                </div></div>*/}

                <div className="flex flex-col items-start p-4">
                    <h3 className="my-3 text-3xl font-semibold">Quinta - Reunião de Orações</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Horário: 8 pm</p>
                    </div>
                </div>

                {/*<div className="flex flex-col items-start p-4">
                    <h3 className="my-3 text-3xl font-semibold">Sexta - Culto de Ensinamento</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Aprendendo mais sobre a palavra de Deus.</p>
                        <p>Horário: 19h - 21h</p>
                        <p>Local: Auditório Principal</p>
                    </div>
                </div>*/}
                
                {/*<div className="flex flex-col items-start p-4">
                    <h3 className="my-3 text-3xl font-semibold">Sábado - Atividades Comunitárias</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Servindo a comunidade e fazendo a diferença.</p>
                        <p>Horário: 10h - 12h</p>
                        <p>Local: Centro Comunitário</p>
                    </div>
                </div>*/}
            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-900 text-orange-600">
                <h2 className="mb-8 text-4xl font-bold leading-none md:text-center">Domingo - Culto de Adoração</h2>
                <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-[#4CD7D0]">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.25,462.5,257.25,462.5Z"></path>
                            <path d="M257.25,369.75a114,114,0,1,1,114-114A113.921,113.921,0,0,1,257.25,369.75Zm0-184.75a70.75,70.75,0,1,0,70.75,70.75A70.826,70.826,0,0,0,257.25,185Z"></path>
                        </svg>
                        <span className="text-white">6 pm - Culto da Noite</span>
                    </li>
                   
                </ul>
            </div>
        </section>
    );
}
