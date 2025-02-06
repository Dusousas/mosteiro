import MainCale from '@/components/MainCale';
import React from 'react';

const eventos = {
    Janeiro: [
        { titulo: "Almoço do Mosteiro", data: "12/01/2025", descricao: "Evento especial no Mosteiro com almoço comunitário." }
    ],
    Fevereiro: [
        { titulo: "Almoço do Mosteiro", data: "01/02/2025", descricao: "Primeiro almoço do mês no Mosteiro." },
        { titulo: "Retiro Espiritual", data: "12/02/2025", descricao: "Dia de reflexão e espiritualidade para todos os fiéis." }
    ],
    Março: [
        { titulo: "Almoço do Mosteiro", data: "01/02/2025", descricao: "Primeiro almoço do mês no Mosteiro." },
        { titulo: "Retiro Espiritual", data: "12/02/2025", descricao: "Dia de reflexão e espiritualidade para todos os fiéis." }
    ],
    // Adicione outros meses aqui...
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
                                    <div key={index} className='border w-[380px] max-w-[380px]'>
                                        <h2 className='bg-OrangeP text-white text-center font-normal py-2'>{evento.titulo}</h2>
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
