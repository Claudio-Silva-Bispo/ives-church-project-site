
import { PhoneIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const representatives = [
  {
    id: 1,
    name: 'Pastor Mateus',
    description: 'Responsável pela liderança espiritual da igreja, o Pastor Mateus dedica sua vida a guiar a congregação e promover o crescimento espiritual.',
    imageUrl: '/assets/Representantes/pastor.jpg',
    phone: '+1 (425) 260-9800',
    whatsapp: '+1 (425) 260-9800',
  },
  {
    id: 2,
    name: 'Pastora Fernanda',
    description: 'Pastora Fernanda é responsável pelos ministérios, organizando atividades e eventos que ajudam os jovens, mulheres e homens a se conectar e crescer na fé.',
    imageUrl: '/assets/Representantes/pastora.jpg',
    phone: '+1 (425) 410-3000',
    whatsapp: '+1 (425) 410-3000',
  }
];

const churchInfo = {
  name: 'Igreja Ives',
  address: '13120 Ne 177pl, Woodinville, 98072',
  phone: '+1 (425) 260-9800',
  website: 'www.iveschurchseattle.com',
};

export default function Team() {

  return (
    <div id='habilitar-menu'>
        <div className="bg-[#111827] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos Representantes</h2>
            <p className="mt-2 text-lg leading-8">
                Conheça as pessoas dedicadas a servir nossa comunidade e a guiar a nossa fé.
            </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {representatives.map((representative) => (
                <article key={representative.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="relative">
                    <img alt={representative.name} src={representative.imageUrl} className="h-40 rounded-md bg-gray-50" />
                </div>
                <h3 className="mt-3 text-xl font-semibold leading-6 ">{representative.name}</h3>
                <p className="mt-2 line-clamp-3 text-md leading-6 ">{representative.description}</p>
                <div className="mt-4 flex flex-col space-y-2">
                    <a href={`tel:${representative.phone}`} className="flex items-center text-sm  hover:text-gray-900">
                    <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                    {representative.phone}
                    </a>
                    <a href={`https://wa.me/${representative.whatsapp}`} className="flex items-center text-sm  hover:text-gray-900">
                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                    {representative.whatsapp}
                    </a>
                </div>
                </article>
            ))}
            </div>
            {/* Informações da Igreja */}
            <div className="mt-10 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold tracking-tight ">Informações da Igreja</h2>
            <p className="mt-2 text-2xl text-[#4CD7D0]">{churchInfo.name}</p>
            <p className="mt-1 text-xl ">{churchInfo.address}</p>
            <p className="mt-1 text-xl ">Telefone: {churchInfo.phone}</p>
            <p className="mt-1 text-xl ">
                Site: <a href={`https://${churchInfo.website}`} className="text-[#4CD7D0] hover:underline">{churchInfo.website}</a>
            </p>
            </div>
        </div>
        </div>

    </div>
  )
}
