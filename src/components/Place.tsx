// components/Place.tsx
import dynamic from 'next/dynamic';
import React from 'react';

// Carregando o componente de mapa dinamicamente
const Map = dynamic(() => import('./MapComponent'), { ssr: false });

const Place: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-6 bg-[#111827] md:max-h-[50vh] text-white">
      {/* Endereço à Esquerda */}
      <div className="w-full md:w-1/2 p-2 md:p-4 flex flex-col gap-10">
          <div className='md:text-center'>
            <h2 className="text-4xl font-bold mb-4">Informações da Igreja</h2>
            <p className='pb-2'>Ives Church</p>
            <p>Endereco: </p>
            <p className='pb-2'>13120 Ne 177pl, Woodinville, 98072</p>
            <p className='pt-5'>Telefone: </p>
            <p>+1 (425) 260-9800</p>
            <p className='pt-5'>Telefone e WhatsApp: </p>
            <p>+1 (425) 410-3000</p>
          </div>

          <div className="flex flex-col justify-center pt-6 lg:pt-0">
              
          </div>
      </div>

      {/* Mapa à Direita */}
      <div className="w-full min-h-[60vh] md:w-1/2 h-64 md:h-96 md:pt-24 mb-10">
        <Map />
      </div>
    </section>
  );
};

export default Place;
