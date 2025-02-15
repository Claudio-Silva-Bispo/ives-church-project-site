import React, { useState } from 'react';
import AdicionarUsuario from './AdicionarUsuario';
import AdicionarEvento from './AdicionarEvento';

interface SidebarProps {
  setSection: (section: Section) => void;
}

export type Section = 'eventos' | 'usuarios' | 'addUser' | 'editUser' | 'deleteUser' | 'Documentação';

const MenuAreaLogada: React.FC<SidebarProps> = ({ setSection }) => {

    // Abrir o modal para adiconar novos usuários
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    // Para novos eventos
    const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = '/'; // Redirect to homepage or login page
  };

  return (

    <section>

        <aside className="fixed top-0 left-0 w-full sm:w-60 h-full p-6 dark:bg-gray-50 dark:text-gray-800">
        <nav className="space-y-8 text-sm">
            <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-widest uppercase text-gray-600 mb-5">Dashboard</h2>
            <div className="flex flex-col space-y-1">

                <h2 className='text-sm font-semibold tracking-widest uppercase text-gray-600'>Eventos</h2>
                
                <button onClick={() => setIsAddEventModalOpen(true)} className="text-left">Adicionar evento</button>
                
                <button onClick={() => setSection('eventos')} className="text-left">Listar eventos</button>
               
            </div>
            </div>

            <div className="space-y-2">
            
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600">Administrador</h2>
            
            <div className="flex flex-col space-y-1">
                
                <button onClick={() => setIsAddUserModalOpen(true)} className="text-left">Adicionar usuário</button>

                <button onClick={() => setSection('usuarios')} className="text-left">Lista de usuários</button>
                
            </div>
            </div>

            <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600">Configurações</h2>
            <div className="flex flex-col space-y-1">
                <button onClick={() => setSection('Documentação')} className="text-left">Documentação</button>
            </div>
            </div>

            <div className="space-y-2">
            <button onClick={handleLogout} className="text-left text-red-600">Sair</button>
            </div>
        </nav>
        </aside>

    {isAddUserModalOpen && <AdicionarUsuario onClose={() => setIsAddUserModalOpen(false)} />}

    {isAddEventModalOpen && <AdicionarEvento onClose={() => setIsAddEventModalOpen(false)} />}
    </section>
  );
};

export default MenuAreaLogada;
