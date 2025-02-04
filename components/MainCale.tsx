import Image from 'next/image';
import React from 'react';

export default function MainCale() {
    return (
        <section id='home' className="relative h-[70vh] w-full flex items-center justify-center">
            {/* Imagem otimizada como background */}
            <div className="absolute inset-0 w-full">
                <Image
                    src="/slidealmoco.jpg"
                    alt="Imagem de fundo"
                    fill
                    className="object-cover"
                    priority
                    quality={80} // Reduz o peso da imagem sem perder muita qualidade
                    sizes="70vw"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Conteúdo acima da imagem */}
            <div className="maxW relative z-10 w-full flex flex-col items-center justify-center gap-6 text-white ">
                <div className="flex items-center gap-1">
                    <Image src="icon-sub.svg" alt="Ícone" width={20} height={20} />
                    <h2 className="text-center">Eventos</h2>
                </div>
                <h1 className="text-5xl uppercase text-center font-semibold lg:leading-[90px] lg:text-[80px]">
                    Confira nossos evetos
                </h1>

            </div>
        </section>
    );
}
