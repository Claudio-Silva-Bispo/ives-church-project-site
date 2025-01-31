
export default function Live() {
    return (
        <section className="px-5 py-10 bg-gray-100 text-gray-800">
            <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                    <div className="flex flex-col space-y-8 md:space-y-12">
                        {["Segunda profética.", "Domingo, culto das 18 horas", "Prophetic, saiba mais sobre este evento."].map((text, index) => (
                            <div className="flex flex-col space-y-2" key={index}>
                                <h3 className="flex items-center space-x-2 text-gray-600">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-[#eb5e28]"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Fique ligado</span>
                                </h3>
                                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{text}</a>
                                <p className="text-xs text-gray-600">{index === 0 ? '47 minutes ago' : index === 1 ? '2 hours ago' : '4 hours ago'} by
                                    <a rel="noopener noreferrer" href="#" className="hover:underline text-[#eb5e28]"> Palavra</a>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                        <div className="flex w-full h-1 bg-opacity-10 bg-[#eb5e28]">
                            <div className="w-1/2 h-full bg-[#eb5e28]"></div>
                        </div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                            <span className="text-xs font-bold tracking-wider uppercase">Veja mais novidades</span>
                            <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent text-[#eb5e28]">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{ backgroundImage: "url('./assets/background/background-tres.jpg')" }}>
                    <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 text-gray-800 border-[#eb5e28]">Não perca</span>
                    <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via- flex-grow-1 bg-gradient-to-b from-gray-50">
                        <span className="flex items-center mb-4 space-x-2 text-[#eb5e28]">
                            <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-[#eb5e28]">
                                <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-[#eb5e28]"></span>
                            </span>
                            <span className="text-sm font-bold">Live</span>
                        </span>
                        <h1 className="font-serif text-2xl font-semibold group-hover:underline text-white">Evento que tocou muitas vidas e deu um novo próposito.</h1>
                    </a>
                </div>

                <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                    <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-[#eb5e28]">
                        <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-[#eb5e28]">Últimas noticias</button>
                        <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 text-gray-600">Popular</button>
                    </div>
                    <div className="flex flex-col divide-y divide-gray-300">
                        {[
                            { title: "Não fique de fora das nossas ações.", time: "5 minutes ago", category: "Eventos", imgUrl: "/assets/background/background.jpg" },
                            { title: "Segunda profética. Venha conhecer e sentir.", time: "14 minutes ago", category: "Agenda", imgUrl: "/assets/background/background-dois.jpg" },
                            { title: "Quarta de adoração.", time: "22 minutes ago", category: "Oração", imgUrl: "/assets/background/background-quatro.jpg" },
                            { title: "Quinta com culto da família.", time: "37 minutes ago", category: "Família", imgUrl: "/assets/background/background-cinco.jpg" },
                        ].map((item, index) => (
                            <div className="flex px-1 py-4" key={index}>
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src={item.imgUrl} />
                                <div className="flex flex-col flex-grow">
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{item.title}</a>
                                    <p className="mt-auto text-xs text-gray-600">{item.time}
                                        <a rel="noopener noreferrer" href="#" className="block 
                                        text-[#4CD7D0] lg:ml-2 lg:inline hover:underline">{item.category}</a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
