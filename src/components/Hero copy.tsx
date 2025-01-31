export default function Hero() {
    return (
        <section id="habilitar-menu">
            <div
                className="relative bg-[#111827]"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/background/background-sete.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            <div className="container flex flex-col items-start px-4 py-16 pb-20 mx-auto text-start lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-50 min-h-[100vh] md:min-h-[70vh]">
                    <div className="flex flex-col md:flex-row justify-start w-full">
                        <button type="button" className="w-full md:w-auto px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900">
                            <a href="Contact">Contato</a>
                        </button>
                        <button type="button" className="w-full md:w-auto px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50">
                            <a href="About">Sobre nós</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
