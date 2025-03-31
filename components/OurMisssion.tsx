import React from 'react';
import Image from 'next/image';


export default function OurMission() {
    return (
        <>
            <section id='missas' className='py-20'>
                <div className='maxW flex flex-col gap-20 items-center lg:flex-row'>


                    <div className="relative w-full max-w-[600px] h-[500px] lg:h-[722px] ">
                        <img className="rounded-bl-[100px] w-full h-full" src="/missao.JPG" alt="Imagem da missa"/>
                        <img className='absolute bottom-[-50px] right-0 lg:bottom-[-50px] lg:right-[-50px] spinner' src="circle.png" alt="" />
                    </div>

                    <div className='w-full'>
                        <div className="flex w-full items-center justify-center gap-1 lg:justify-start">
                            <img src="/icon-sub.svg" alt="Ícone Missa" width={20} height={20} />
                            <h2>Nossa missão</h2>
                        </div>
                        <h1 className="text-4xl text-black text-center font-bold uppercase mt-6 lg:text-left">Nossa Missão: <span className='text-OrangeP'>Servir, Amar e Crescer</span></h1>
                        <p className='text-black text-center font-semibold mt-6 lg:text-left'>Nossa missão é compartilhar o amor de Deus, promover o crescimento espiritual e servir nossa comunidade com compaixão e propósito.</p>
                        <p className='text-TextG text-center mt-6 lg:text-left'>Nossa missão é compartilhar o amor e a graça de Deus, promovendo o crescimento espiritual, servindo nossa comunidade com compaixão e construindo relacionamentos significativos. Estamos dedicados a viver nossa fé por meio da adoração, evangelismo e serviço impactante.</p>
                        <div className='flex justify-center mt-14 lg:justify-start'>
                            <a target='_blank' className='bg-OrangeP px-6 py-4 rounded-full uppercase' href="https://wa.me/5514998306263?text=Estou%20entrando%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20mosteiro.">Entre em contato agora</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}