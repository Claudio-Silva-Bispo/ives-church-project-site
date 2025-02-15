import React, { useState } from 'react';

interface AdicionarEventoProps {
  onClose: () => void;
}

const AdicionarEvento: React.FC<AdicionarEventoProps> = ({ onClose }) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');
  const [exibirPagina, setExibirPagina] = useState('Não'); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Dados enviados:', { nome, data, horario, descricao, exibirPagina });

    const response = await fetch('/api/criarEvento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, data, horario, descricao, exibirPagina }),
    });

    if (response.ok) {
      alert('Evento adicionado com sucesso');
      onClose();
    } else {
      alert('Erro ao adicionar evento');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Adicionar Evento</h2>
       
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="data">Data</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="horario">Horário</label>
            <input
              type="time"
              id="horario"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="descricao">Descrição</label>
            <input
              type="text"
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="exibirPagina">Exibir Página</label>
            <input
              type="text"
              id="exibirPagina"
              value={exibirPagina}
              onChange={(e) => setExibirPagina(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 mr-2 bg-gray-300 rounded">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdicionarEvento;
