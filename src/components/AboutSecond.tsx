import React from 'react';

const AboutSecond: React.FC = () => {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-[70vh] flex flex-col md:flex-row p-3 md:p-6">
            <div className="flex flex-col md:flex-row mx-auto bg-gray-50 w-full">
                
                <div className="flex flex-col p-3 w-full md:w-1/2 lg:p-10 gap-10">
                    <div className="flex justify-start">
                        <span className="px-2 py-1 text-xs rounded-full bg-orange-600 text-gray-50">Conheça</span>
                    </div>
                    <img src="/assets/logo/logo_preto.png" alt="campanha legado" />
                    <p className="text-xl md:text-3xl">Na Igreja Ives, oferecemos uma série de ministérios e atividades que atendem a todas as idades e fases da vida. Temos programas para jovens, homens, mulheres, casais, ministério infantil, estudos bíblicos, grupos de oração, ministério de louvor e várias oportunidades de voluntariado para aqueles que desejam servir.</p>
                </div>
                <div
                    className="bg-no-repeat bg-cover bg-gray-300 w-full h-64 md:h-auto"
                    style={{
                        backgroundImage: `url("/assets/AboutSecond/pr matheus e fernanda.jpg")`,
                        backgroundPosition: 'center center',
                        backgroundBlendMode: 'multiply',
                        backgroundSize: 'cover'
                    }}
                ></div>
            </div>
        </div>
    );
};

export default AboutSecond;
