import React from 'react';

const iconsData = [
    { src: "icons/jesus.png", text: "Compartilhe o amor de Deus" },
    { src: "icons/espiritual.png", text: "Promova o crescimento espiritual" },
    { src: "icons/comunidade.png", text: "Sirva a nossa comunidade" },
    { src: "icons/relacionamento.png", text: "Construa relacionamentos fortes" }
];

export default function About() {
    return (
        <section className='py-20'>
            <div className='maxW flex flex-col-reverse lg:flex-row'>
                <article className='flex flex-col items-center gap-4 lg:flex-row lg:w-1/2 relative'>
                    <img className='rounded-br-[20%] lg:max-w-[60%] lg:h-[600px] lg:mt-32 lg:object-cover' src="about1.jpg" alt="" />
                    <img className='rounded-br-[20%] lg:max-w-[450px] lg:h-[500px] lg:mb-32 lg:absolute lg:right-[90px] lg:border-l-[10px] lg:border-b-[10px] border-white object-cover' src="about2.jpg" alt="" />
                </article>

                <article className='w-full mb-10 lg:w-1/2 lg:mt-11'>
                    <div className='flex items-center justify-center gap-1 lg:justify-start'>
                        <img src="icon-sub.svg" alt="" />
                        <h2 className='text-center lg:text-left'>Sobre nós</h2>
                    </div>
                    <h1 className='text-4xl text-black text-center lg:text-left font-bold uppercase lg:max-w-[70%] mt-6'>Fé, esperança e amor em ação <span className='text-OrangeP'>todos os dias</span></h1>
                    <p className='text-TextG mt-6'>Somos uma comunidade vibrante de fiéis, dedicados à adoração, ao companheirismo e ao serviço. Nossa missão é compartilhar o amor de Deus, crescer na fé e causar um impacto positivo no mundo por meio da compaixão e de conexões significativas.</p>
                    <p className='text-TextG mt-6'>Somos uma comunidade vibrante de fiéis, dedicados à adoração, ao companheirismo e ao serviço. Nossa missão é compartilhar o amor de Deus, crescer na fé e causar um impacto positivo no mundo por meio da compaixão e de conexões significativas.</p>

                    {/* ICONS */}
                    <article className='mt-6 flex flex-col flex-wrap gap-y-6 lg:flex-row'>
                        {iconsData.map((icon, index) => (
                            <div key={index} className='flex items-center w-full gap-2 lg:w-1/2'>
                                <img src={icon.src} alt={icon.text} />
                                <p className='text-TextG font-semibold'>{icon.text}</p>
                            </div>
                        ))}
                    </article>

                    <div className='mt-14'>
                        <a className='bg-OrangeP px-6 py-4 rounded-full uppercase' href="">Entre em contato</a>
                    </div>
                </article>
            </div>
        </section>
    );
}
