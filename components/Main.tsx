import React from 'react';

export default function Main() {
    return (
        <section id='home' className="relative h-screen w-full flex items-center justify-center bgmain">
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="maxW relative z-10 w-full h-full flex flex-col items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-1">
                    <img src="icon-sub.svg" alt="Ícone"/>
                    <h2 className="text-center">Laudato Si mi Signori</h2>
                </div>
                <h1 className="text-5xl uppercase text-center font-semibold lg:leading-[90px] lg:text-[80px]">
                    Felizes são os que ouvem a palavra de Deus e a guardam!
                </h1>
                <p className="text-center lg:max-w-[50%]">
                    Louvado sejas, meu Senhor, pela nossa irmã, a mãe terra, que nos sustenta e governa e produz variados frutos com flores coloridas e verduras.
                </p>

                <div className="mt-6">
                    <a className="bg-OrangeP px-6 py-4 rounded-full uppercase" target='_blank' href="https://wa.me/5514998306263?text=Tenho%20interesse%20em%20fazer%20uma%20doação%20e%20gostaria%20de%20mais%20informações.">
                        Fazer Doação
                    </a>
                </div>
            </div>
        </section>
    );
}
