
export default function CarroselEvents(){
    return (
        <div className="relative w-full flex gap-4 py-6 overflow-x-hidden">
            <div className="flex gap-4 animate-marquee">
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/eventos/imagem1.jpeg" alt="Room photo" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/eventos/imagem2.jpeg" alt="Image 2" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/eventos/imagem3.jpeg" alt="Image 3" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/eventos/imagem4.jpeg" alt="Image 4" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/eventos/imagem5.jpeg" alt="Image 5" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/eventos/imagem6.jpeg" alt="Image 6" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/eventos/imagem7.jpeg" alt="Image 7" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="c/assets/eventos/imagem8.jpeg" alt="Image 8" />
                
            </div>
        </div>
    );
}