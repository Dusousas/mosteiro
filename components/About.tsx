import React from 'react';

const iconsData = [
    { src: "icons/jesus.png", text: "Compartilhe o amor de Deus" },
    { src: "icons/espiritual.png", text: "Promova o crescimento espiritual" },
    { src: "icons/comunidade.png", text: "Sirva a nossa comunidade" },
    { src: "icons/relacionamento.png", text: "Construa relacionamentos fortes" }
];

export default function About() {
    return (
        <section id='about' className='py-20'>
            <div className='maxW flex flex-col-reverse lg:flex-row'>
                <article className='flex flex-col items-center gap-4 lg:flex-row lg:w-1/2 relative'>
                    <img className='rounded-br-[20%] lg:max-w-[60%] lg:h-[600px] lg:mt-32 lg:object-cover' src="about1.webp" alt="" />
                    <img className='rounded-br-[20%] lg:max-w-[450px] lg:h-[500px] lg:mb-32 lg:absolute lg:right-[90px] lg:border-l-[10px] lg:border-b-[10px] border-white object-cover' src="about2.webp" alt="" />
                </article>

                <article className='w-full mb-10 lg:w-1/2 lg:mt-11'>
                    <div className='flex items-center justify-center gap-1 lg:justify-start'>
                        <img src="icon-sub.svg" alt="" />
                        <h2 className='text-center lg:text-left'>Sobre nós</h2>
                    </div>
                    <h1 className='text-4xl text-black text-center lg:text-left font-bold uppercase lg:max-w-[70%] mt-6'>Fé, esperança e amor em ação <span className='text-OrangeP'>todos os dias</span></h1>
                    <p className='text-TextG mt-6'>A partir da década de 50, o Sr. Aldo Surian será o novo proprietário da Fazenda São José do Paraíso, onde será construída uma bela torre anexada à capela.</p>
                    <p className='text-TextG mt-2'>Nos anos 70, com novo proprietário, Sr. Guerino Supertti, a fazenda passará a se chamar Fazenda São Sebastião do Paraíso. Após seu falecimento, em 1997, a propriedade ficará sob posse de seus herdeiros.</p>
                    <p className='text-TextG mt-2'>A Fazenda São José do Paraíso, continuando a ser dividida entre os herdeiros e vendida a novos proprietários, tornou-se uma região de pequenos sitiantes dedicados à lavoura de café.No final dos anos 80, em 1989, a fazenda será adquirida de D. Leontina Russo e recebida em doação para a instalação do Mosteiro do Paraíso, tendo a Capela de São José como sede do mosteiro. Era o final dos anos 80, um período marcado por uma visão eclesial favorável ao florescimento de novas comunidades.</p>
                    <p className='text-TextG mt-2'>Em 1996, com a aprovação diocesana, o Pe. Nilton muda-se da Paróquia de Torrinha para a Capela do Paraíso. Logo depois, chegam os primeiros vocacionados.</p>
                    <div className='flex items-center text-OrangeP justify-center mt-6 gap-1 lg:justify-start'>
                        <img src="icon-sub.svg" alt="" />
                        <p className='text-center lg:text-left'>Rodovia Cezarino Mariano, KM 12,5 - Bairro Paraíso - Torrinha/SP - CEP 17360-000</p>
                    </div>
                    <article className='mt-6 flex flex-col flex-wrap gap-y-6 lg:flex-row'>
                        {iconsData.map((icon, index) => (
                            <div key={index} className='flex items-center w-full gap-2 lg:w-1/2'>
                                <img src={icon.src} alt={icon.text} />
                                <p className='text-TextG font-semibold'>{icon.text}</p>
                            </div>
                        ))}
                    </article>

                    <div className='mt-14'>
                        <a target='_blank' className='bg-OrangeP px-6 py-4 rounded-full uppercase' href="https://wa.me/5514998306263?text=Estou%20entrando%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20mosteiro.">Entre em contato</a>
                    </div>
                </article>
            </div>
        </section>
    );
}
