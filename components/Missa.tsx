import React from 'react';

export default function Missa() {
    return (
        <>
            <section id='missas' className="py-20 bg-BegeP autoH">
                <div className='maxW'>
                    <div className="flex w-full items-center justify-center gap-2">
                        <img src="/icon-sub.svg" alt="Ícone Missa" className="" />
                        <h2 className="text-3xl font-bold">Missa do cio da terra</h2>
                    </div>
                    <p className='text-TextG mt-6 text-center lg:max-w-[80%] lg:mx-auto'>A "Missa do Cio da Terra", celebrada por ocasião da Solenidade de Jesus Cristo, Rei do Unierso, final do Ano Litúrgico, é uma das espressões de louvor celebrada pela comunidade rural com a participação de fiéis de muitos lugares da região.</p>


                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-10 ">
                        <div className="md:col-span-2 md:row-span-2 cursor-pointer hover:opacity-90 transition-opacity">
                            <img className="rounded-lg object-cover w-full h-full" src='galeria/Galeria1.webp' alt="Imagem 1 da galeria" />
                        </div>
                        <div className="md:row-span-3 md:col-start-3 cursor-pointer hover:opacity-90 transition-opacity">
                            <img className="rounded-lg object-cover w-full h-full" src='galeria/Galeria2.webp' alt="Imagem 2 da galeria" />
                        </div>
                        <div className="md:row-span-2 md:col-start-4 cursor-pointer hover:opacity-90 transition-opacity">
                            <img className="rounded-lg object-cover w-full h-full" src='galeria/Galeria3.webp' alt="Imagem 3 da galeria" />
                        </div>
                        <div className="md:row-span-5 md:col-start-5 cursor-pointer hover:opacity-90 transition-opacity">
                            <img className="rounded-lg object-cover w-full h-full" src='galeria/Galeria4.webp' alt="Imagem 4 da galeria" />
                        </div>
                        <div className="md:col-start-4 md:row-start-3 cursor-pointer hover:opacity-90 transition-opacity">
                            <img className="rounded-lg object-cover w-full h-full" src='galeria/Galeria5.webp' alt="Imagem 5 da galeria" />
                        </div>
                        <div className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4 cursor-pointer hover:opacity-90 transition-opacity">
                            <img className="rounded-lg object-cover w-full h-full" src='galeria/Galeria6.webp' alt="Imagem 6 da galeria" />
                        </div>
                        <div className="md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-3 cursor-pointer hover:opacity-90 transition-opacity">
                            <img className="rounded-lg object-cover w-full h-full" src='galeria/Galeria7.webp' alt="Imagem 7 da galeria" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}