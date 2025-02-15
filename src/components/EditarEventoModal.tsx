import React, { useState, useEffect } from 'react';

interface EventData {
  id: string;
  nome: string;
  data: string;
  horario: string;
  descricao: string;
  exibirPagina: string;
}

interface EditarEventoModalProps {
  evento: EventData | null;
  onClose: () => void;
  onSave: (data: EventData) => void;
}

const EditarEventoModal: React.FC<EditarEventoModalProps> = ({ evento, onClose, onSave }) => {
  const [formData, setFormData] = useState<EventData>({
    id: '',
    nome: '',
    data: '',
    horario: '',
    descricao: '',
    exibirPagina: '',
  });

  useEffect(() => {
    if (evento) {
      setFormData(evento);
    }
  }, [evento]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave(formData);
  };

  if (!evento) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">Editar Evento</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="data" className="block text-sm font-medium">Data</label>
            <input
              type="date"
              id="data"
              name="data"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.data}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="horario" className="block text-sm font-medium">Horário</label>
            <input
              type="time"
              id="horario"
              name="horario"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.horario}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium">Descricao</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.descricao}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="exibirPagina" className="block text-sm font-medium">Exibir Página</label>
            <input
              type="text"
              id="exibirPagina"
              name="exibirPagina"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.exibirPagina}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarEventoModal;
