import React, { useState, useEffect } from "react";

interface EventData {
    id: string;
    nome: string;
    data: string;
    horario: string;
    descricao: string;
    exibirPagina: string;
}

export default function Schedule() {
    const [eventos, setEventos] = useState<EventData[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    // Programação padrão caso o banco de dados esteja fora
    const programacaoPadrao: EventData[] = [
        { id: "1", nome: "Quinta - Reunião de Orações", data: "2024-02-15", horario: "20:00", descricao: "Um momento especial de oração e comunhão", exibirPagina: "Sim" },
        { id: "2", nome: "Domingo - Culto de Adoração", data: "2024-02-18", horario: "18:00", descricao: "Celebre a Deus com louvor e palavra", exibirPagina: "Sim" }
    ];

    useEffect(() => {
        const buscarEventos = async () => {
            try {
                const response = await fetch("/api/buscarEventos");
                if (!response.ok) throw new Error("Erro ao buscar eventos");

                const data: EventData[] = await response.json();
                const eventosFiltrados = data.filter(evento => evento.exibirPagina === "Sim");

                setEventos(eventosFiltrados);
            } catch (error) {
                console.error("Erro ao buscar eventos:", error);
                setErro(true);
            } finally {
                setCarregando(false);
            }
        };

        buscarEventos();
    }, []);

    // Verifica se existem eventos do banco, caso contrário, usa a programação padrão
    const eventosParaExibir = erro || eventos.length === 0 ? programacaoPadrao : eventos;

    return (
        <section className="md:m-8 text-gray-800 pt-10 flex flex-col justify-center items-start md:pt-44">
            <div className="container text-start p-5 pt-20">
                <h2 className="text-2xl md:text-4xl font-bold">Fique por dentro da nossa programação</h2>
                <p className="text-gray-600">Cada dia com um objetivo espiritual</p>
            </div>

            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                    {eventosParaExibir.map(evento => (
                        <div 
                            key={evento.id} 
                            className="max-w-xs p-6 rounded-md shadow-md bg-white hover:bg-[#172032] hover:text-white transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">
                                    {new Date(evento.data).toLocaleDateString('pt-BR', { weekday: 'long' })}
                                </span>
                                <h2 className="text-2xl font-semibold tracking-wide uppercase pt-3">{evento.nome}</h2>
                            </div>
                            <p className="hover:text-white text-xl"><strong>Horário:</strong> {evento.horario}</p>
                            <p className="hover:text-white mt-2 text-xl">{evento.descricao}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
