import Image from 'next/image';
import React from 'react';

export default function Main() {
    return (
        <section id='home' className="relative h-screen w-full flex items-center justify-center">
            {/* Imagem otimizada como background */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/mainBG1.jpg"
                    alt="Imagem de fundo"
                    fill
                    className="object-cover"
                    priority
                    quality={80} // Reduz o peso da imagem sem perder muita qualidade
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Conteúdo acima da imagem */}
            <div className="maxW relative z-10 w-full h-full flex flex-col items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-1">
                    <Image src="icon-sub.svg" alt="Ícone" width={20} height={20} />
                    <h2 className="text-center">faça a diferença hoje</h2>
                </div>
                <h1 className="text-5xl uppercase text-center font-semibold lg:leading-[90px] lg:text-[80px]">
                    Felizes são os que ouvem a palavra de Deus e a guardam!
                </h1>
                <p className="text-center lg:max-w-[50%]">
                    Experimente o amor e a graça de Deus em uma comunidade acolhedora, onde a fé cresce, a esperança floresce e cada pessoa é valorizada.
                </p>

                <div className="mt-6">
                    <a className="bg-OrangeP px-6 py-4 rounded-full uppercase" href="">
                        Fazer Doação
                    </a>
                </div>
            </div>
        </section>
    );
}
