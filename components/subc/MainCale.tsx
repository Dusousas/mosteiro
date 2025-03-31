import Image from 'next/image';
import React from 'react';

export default function MainCale() {
    return (
        <section id='home' className="relative h-[70vh] w-full flex items-center justify-center bgmain">
            <div className="absolute inset-0 bg-black/60" />

            <div className="maxW relative z-10 w-full flex flex-col items-center justify-center gap-6 text-white ">
                <div className="flex items-center gap-1">
                    <img src="icon-sub.svg" alt="Ícone" width={20} height={20} />
                    <h2 className="text-center">Eventos</h2>
                </div>
                <h1 className="text-5xl uppercase text-center font-semibold lg:leading-[90px] lg:text-[80px]">
                    Confira nossos eventos
                </h1>

            </div>
        </section>
    );
}
