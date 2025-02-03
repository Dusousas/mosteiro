import React from 'react';
import Image from 'next/image';


export default function OurMission() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW flex flex-col gap-20 items-center lg:flex-row'>


                    <div className="relative w-full max-w-[600px] h-[500px] lg:h-[722px] ">
                        <Image className="rounded-bl-[100px] object-cover relative" src="/mainmissa.jpg" alt="Imagem da missa"
                            fill
                            sizes="(max-width: 1024px) 90vw, 50vw"
                            priority />
                        <img className='absolute bottom-[-50px] right-[-50px]' src="circle.png" alt="" />
                    </div>

                    <div className='w-full'>
                        <div className="flex w-full items-center justify-center gap-1 lg:justify-start">
                            <img src="/icon-sub.svg" alt="Ícone Missa" width={20} height={20} />
                            <h2>Nossa missão</h2>
                        </div>
                        <h1 className="text-4xl text-black text-center font-bold uppercase mt-6 lg:text-left">Nossa Missão: <span className='text-OrangeP'>Servir, Amar e Crescer</span></h1>
                        <p className='text-black text-center font-semibold mt-6 lg:text-left'>Nossa missão é compartilhar o amor de Deus, promover o crescimento espiritual e servir nossa comunidade com compaixão e propósito.</p>
                        <p className='text-TextG text-center mt-6 lg:text-left'>Somos uma comunidade vibrante de fiéis, dedicados à adoração, ao companheirismo e ao serviço. Nossa missão é compartilhar o amor de Deus, crescer na fé e causar um impacto positivo no mundo por meio da compaixão e de conexões significativas.</p>
                        <div className='flex justify-center mt-14 lg:justify-start'>
                            <a className='bg-OrangeP px-6 py-4 rounded-full uppercase' href="">Entre em contato agora</a>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}