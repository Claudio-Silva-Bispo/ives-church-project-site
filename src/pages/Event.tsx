
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Event() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#9E582F]">Eventos da Semana na Igreja</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fique por dentro de tudo que acontece</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Venha participar de eventos edificantes que fortalecem nossa fé e promovem a comunhão!
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden pt-32">
          <img
            alt=""
            src="/assets/background/background-quatro.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Para mais detalhes sobre os eventos ou para se inscrever em alguma atividade, entre em contato com o escritório da igreja ou acesse nosso site.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-[#9E582F]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Culto de Oração</strong> Junte-se a nós para um momento especial de oração e intercessão. Uma oportunidade de buscar a presença de Deus e interceder por nossas necessidades e pela comunidade.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-[#9E582F]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Estudo Bíblico</strong> Participe do nosso estudo bíblico, onde exploraremos passagens da Escritura e discutiremos como aplicá-las em nossas vidas. Todos são bem-vindos!
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-[#9E582F]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Grupo de Jovens</strong> Um encontro dinâmico para jovens com atividades, louvor e reflexão sobre a vida cristã. Venha conhecer novos amigos e se divertir!
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-[#9E582F]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Culto de Louvor</strong> Junte-se a nós para um poderoso culto de louvor e adoração. Traga sua família e amigos para celebrar e glorificar a Deus juntos!
                  </span>
                </li>
              </ul>

              
              <p className="mt-8">
              Participar dos eventos da igreja é uma ótima maneira de fortalecer sua fé e fazer novas amizades. Esses encontros proporcionam momentos de aprendizado, oração e comunhão, ajudando você a se sentir mais conectado à comunidade. Além disso, você tem a oportunidade de crescer espiritualmente e compartilhar experiências com outras pessoas que têm os mesmos valores. É uma chance de se apoiar e se encorajar mutuamente na jornada da fé.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Atividades Especiais</h2>
              
              <p className="mt-6">As atividades promovem um senso de comunidade e pertencimento, permitindo que os participantes se apoiem mutuamente em suas jornadas de fé. Além disso, cada evento oferece uma chance de aprendizado e reflexão, proporcionando insights que podem ser aplicados no dia a dia.</p>

              <p className="mt-6">Através de momentos de oração, louvor e estudo, os participantes têm a chance de aprofundar seu relacionamento com Deus, descobrir novos dons e talentos e se encorajar uns aos outros. Em suma, os eventos da igreja não só enriquecem a vida espiritual, mas também oferecem suporte emocional e social, promovendo um ambiente acolhedor e edificante para todos.
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-[#9E582F]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Oficina de Artesanato</strong> Venha aprender novas técnicas de artesanato e criar algo especial. Os materiais serão fornecidos e é uma ótima oportunidade para socializar!
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-[#9E582F]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Reunião de Voluntários</strong> Todos os voluntários estão convidados a se reunir e discutir as próximas atividades e projetos da igreja. Sua participação é fundamental!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
