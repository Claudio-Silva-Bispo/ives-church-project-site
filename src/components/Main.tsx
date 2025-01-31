
import VideoComponent from "./VideoComponent";

export default function Main() {
  return (
    <section className="p-3 xl:p-6 bg-gray-100 text-gray-800 min-h-[60vh] justify-center items-center">
      <div className="container grid gap-3 mx-auto text-center lg:grid-cols-2 xl:grid-cols-2 lg:h-[50vh] lg:pt-5">
        
        {/* Coluna de Texto */}
        <div className="w-full px-6 py-6 lg:py-5 lg:px-4 xl:px-6 xl:py-10 rounded-md sm:px-12 md:px-16 bg-gray-50 text-start md:text-center flex flex-col justify-between h-full">
          <span className="block mb-2 lg:mb-0 text-[#9E582F] text-start sm:text-center text-sm sm:text-md">
            Acolher à luz dos princípios bíblicos
          </span>
          <h1 className="text-xl font-extrabold text-gray-900 xl:pt-5">
            Bem-vindo à Igreja Ives!
          </h1>
          <p className="my-4 lg:my-2 text-start text-sm">
            <span className="font-medium text-gray-900">Nossa igreja é uma comunidade de fé e amor</span>, comprometida em compartilhar a verdade de Jesus Cristo com todas as pessoas. Aqui, acreditamos que a fé em Deus transforma vidas, e trabalhamos juntos para crescer espiritualmente e servir àqueles ao nosso redor.
          </p>
          <div className="flex">
            <p className="my-4 lg:my-1 xl:my-2 text-sm">
              <span className="block text-[#9E582F] text-md font-extrabold xl:pt-3">Amor a Deus e ao Próximo</span> Cremos que o amor a Deus e às pessoas é o fundamento de tudo o que fazemos. Esse amor é demonstrado por meio de nossos atos de serviço, compaixão e cuidado.
            </p>
          </div>
          <div className="flex">
            <p className="mb-3 text-sm">
              <span className="block text-[#9E582F] text-md font-extrabold xl:pt-3">Transformação</span> Acreditamos que o evangelho de Cristo tem o poder de transformar vidas. Buscamos proporcionar um espaço onde as pessoas possam crescer em sua fé e serem renovadas pelo poder de Deus.
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 rounded-xl">
            <VideoComponent videoSrc="/video-um.webm"/>
        </div>
      </div>
    </section>
  );
}
