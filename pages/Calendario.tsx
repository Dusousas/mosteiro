import MainCale from "@/components/subc/MainCale";

import React from 'react';

const eventos = {

    Março: [
        { titulo: "Fonte de São José do Paraíso", data: "19/02/2025", descricao: "Evento de benção da Fonte de São José do Paraíso, com missa, batismo e confraternização, às 16h." }
    ],


};

export default function Calendario() {
    return (
        <>
          <MainCale />
            <section className='py-20'>
                <div className='maxW'>

                    {Object.entries(eventos).map(([mes, eventosDoMes]) => (
                        <div key={mes}>
                            <h1 className='text-4xl text-black text-center font-bold uppercase mt-10'>
                                Eventos de <span className='text-OrangeP'>{mes}</span>
                            </h1>

                            <article className='flex gap-6 flex-wrap border-b py-10 justify-center lg:justify-start'>
                                {eventosDoMes.map((evento, index) => (
                                    <div key={index} className='border border-gray-200 w-[380px] max-w-[380px]'>
                                        <h5 className='bg-OrangeP text-white text-center font-normal py-2 uppercase'>{evento.titulo}</h5>
                                        <p className='text-black text-center py-4 text-2xl border-b'>{evento.data}</p>
                                        <p className='text-black py-8 px-4'>{evento.descricao}</p>
                                    </div>
                                ))}
                            </article>
                        </div>
                    ))}

                </div>
            </section>
        </>
    );
}
