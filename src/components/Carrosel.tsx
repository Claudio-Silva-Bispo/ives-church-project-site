
export default function Carrosel(){
    return (
        <div className="relative w-full flex gap-4 py-6 overflow-x-hidden">
            <div className="flex gap-4 animate-marquee">
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-um.jpg" alt="Room photo" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-oito.jpg" alt="Image 2" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-tres.jpg" alt="Image 3" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-quatro.jpg" alt="Image 4" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-cinco.jpg" alt="Image 5" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-seis.jpg" alt="Image 6" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-sete.jpg" alt="Image 7" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-oito.jpg" alt="Image 8" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-nove.jpg" alt="Image 9" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-dez.jpg" alt="Image 10" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-onze.jpg" alt="Image 11" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Carrosel/imagem-doze.jpg" alt="Image 12" />
            </div>
        </div>
    );
}