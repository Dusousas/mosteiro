import React from 'react';

export default function Slide2() {
    return (
        <>
            <section className='flex bg-BegeP py-10 px-4 flex-col mt-10 lg:border-l-[1px] lg:border-OrangeP lg:flex-row'>

                <div className=' lg:w-[50%] lg:px-10'>
                    <div className='flex items-center justify-center gap-1 lg:justify-start'>
                        <img src="icon-sub.svg" alt="" />
                        <h2 className='text-center lg:text-left'>Agromonges Chocolate</h2>
                    </div>
                    <p className='text-black text-center font-semibold mt-4 lg:text-left'>Descubra o Sabor da Tradição! Participe da experiência única da nossa <span className='text-OrangeP'>fábrica de chocolates</span>, onde cada doce é feito artesanalmente com carinho e dedicação.</p>
                    <p className='text-TextG text-center mt-6 lg:text-left'>Nossa fábrica de chocolates combina tradição e qualidade para criar doces irresistíveis. Produzimos artesanalmente pães de mel, trufas, bombons e ovos de chocolate, feitos com ingredientes selecionados e muito carinho. Cada criação carrega o sabor único do mosteiro, proporcionando uma experiência especial em cada mordida.</p>

                    <div className='flex justify-center mt-6 lg:justify-start'>
                        <a className='bg-OrangeP px-6 py-4 rounded-r-full uppercase text-white' href="">Saiba mais</a>
                    </div>
                </div>

                <img className='rounded-bl-[100px] mt-4 lg:w-[50%] lg:mt-0 max-w-[647px] max-h-[578px]' src="slides/slidechoco.jpg" alt="" />

            </section>
        </>
    );
}
