import React from 'react';
import Image from "next/image";


export default function Calander() {
    return (
        <>
            <section className='py-10'>
                <div className='text-black maxW'>
                    <div className="flex w-full items-center justify-center gap-1">
                        <Image src="/icon-sub.svg" alt="Ícone Missa" width={20} height={20} priority />
                        <h2>Calendário</h2>
                    </div>
                    <h1 className="text-4xl text-black text-center font-bold uppercase mt-6">
                        Confira nossos principais <span className="text-OrangeP">Eventos</span>
                    </h1>

                    <article className='flex gap-6 flex-wrap py-10 justify-center lg:justify-start'>
                        {/* EVENTOS SINGLE */}
                        <div className='border w-[380px] max-w-[380px]'>
                            <h2 className='bg-OrangeP text-white text-center font-normal py-2'>Almoço do Mosteiro</h2>
                            <p className='text-black text-center py-4 text-2xl border-b'>12/01/20025</p>
                            <p className='text-black py-8 px-4'>Evento especial no Mosteiro com almoço comunitário.</p>
                        </div>
                        <div className='border w-[380px] max-w-[380px]'>
                            <h2 className='bg-OrangeP text-white text-center font-normal py-2'>Almoço do Mosteiro</h2>
                            <p className='text-black text-center py-4 text-2xl border-b'>12/01/20025</p>
                            <p className='text-black py-8 px-4'>Evento especial no Mosteiro com almoço comunitário.</p>
                        </div>
                    </article>

                    <div className='flex justify-center '>
                        <a className='bg-OrangeP px-6 py-4 rounded-full uppercase text-white' href="">Ver todos eventos</a>
                    </div>
                </div>
            </section>
        </>
    );
}