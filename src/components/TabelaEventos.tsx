import React, { useState } from 'react';
import EditarEventoModal from './EditarEventoModal';
import ConfirmarExclusaoModal from './ConfirmarExclusaoModal';

interface EventData {
  id: string;
  nome: string;
  data: string;
  horario: string;
  descricao: string;
  exibirPagina: string;
}

interface TabelaEventosProps {
  data: EventData[];
  onRefresh: () => void;
}

const TabelaEventos: React.FC<TabelaEventosProps> = ({ data, onRefresh }) => {
  const [eventoEditando, setEventoEditando] = useState<EventData | null>(null);
  const [eventoExcluindo, setEventoExcluindo] = useState<EventData | null>(null);

  const handleEditClick = (evento: EventData) => {
    setEventoEditando(evento);
  };

  const handleDeleteClick = (evento: EventData) => {
    setEventoExcluindo(evento);
  };

  const handleSave = async (updatedEvento: EventData) => {
    try {
      const response = await fetch('/api/atualizarEvento', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvento),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar evento');
      }
      setEventoEditando(null);
      onRefresh(); // Atualizar a lista de eventos
    } catch (error) {
      console.error('Erro ao salvar evento:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (eventoExcluindo) {
      try {
        const response = await fetch('/api/excluirEvento', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: eventoExcluindo.id }),
        });
        if (!response.ok) {
          throw new Error('Erro ao excluir evento');
        }
        setEventoExcluindo(null);
        onRefresh(); // Atualizar a lista de eventos
      } catch (error) {
        console.error('Erro ao excluir evento:', error);
      }
    }
  };

  return (
    <>
      <table className="w-full p-6 text-xs text-left whitespace-nowrap">
        <thead>
          <tr className="dark:bg-gray-300">
            <th className="p-3">Nome</th>
            <th className="p-3">Data</th>
            <th className="p-3">Horário</th>
            <th className="p-3">Descrição</th>
            <th className="p-3">Exibir Página</th>
            <th className="p-3">Ações</th>
          </tr>
        </thead>
        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-3 py-2">{item.nome}</td>
              <td className="px-3 py-2">{item.data}</td>
              <td className="px-3 py-2">{item.horario}</td>
              <td className="px-3 py-2">{item.descricao}</td>
              <td className="px-3 py-2">{item.exibirPagina}</td>
              <td className="px-3 py-2">
                <button onClick={() => handleEditClick(item)} className="px-2 py-1 text-white bg-blue-600 rounded">Editar</button>
                <button onClick={() => handleDeleteClick(item)} className="ml-2 px-2 py-1 text-white bg-red-600 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {eventoEditando && (
        <EditarEventoModal
        evento={eventoEditando}
          onClose={() => setEventoEditando(null)}
          onSave={handleSave}
        />
      )}
      {eventoExcluindo && (
        <ConfirmarExclusaoModal
          onConfirm={handleConfirmDelete}
          onCancel={() => setEventoExcluindo(null)}
        />
      )}
    </>
  );
};

export default TabelaEventos;
