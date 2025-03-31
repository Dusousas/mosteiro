import React from 'react';

export default function Slide4() {
    return (
        <>
            <section className='flex bg-BegeP py-10 px-4 flex-col mt-10 lg:border-l-[1px] lg:border-OrangeP lg:flex-row'>

                <div className='lg:w-[50%] lg:px-10'>
                    <div className='flex items-center justify-center gap-1 lg:justify-start'>
                        <img src="icon-sub.svg" alt="" />
                        <h2 className='text-center lg:text-left'>Lola Agromonges</h2>
                    </div>
                    <p className='text-black text-center font-semibold mt-4 lg:text-left'>Encontre paz e doçura! Na <span className='text-OrangeP'>Loja Agromonges</span>, você descobre chocolates artesanais e artigos religiosos cuidadosamente selecionados para nutrir corpo e alma.</p>
                    <p className='text-TextG text-center mt-2 lg:text-left'>Nossa loja oferece uma experiência única, combinando a tradição dos chocolates finos com a espiritualidade dos artigos religiosos. Cada detalhe é pensado para trazer aconchego e inspiração ao seu dia. Venha conhecer e se encantar com nossos produtos especiais.</p>
                    <div className="flex items-center gap-1 mt-4">
                        <img src="icon-sub.svg" alt="Ícone" />
                        <h5 className="text-center font-medium text-OrangeP">Rua Angelo Bortolai, 338 - Centro, Torrinha-SP</h5>
                    </div>
                    <div className='flex justify-center mt-6 lg:justify-start'>
                        <a className='bg-OrangeP px-6 py-4 rounded-r-full uppercase text-white' href="https://wa.me/5514997193688" target="_blank" rel="noopener noreferrer">Fale conosco</a>
                    </div>
                </div>

                <img className='rounded-bl-[100px] mt-4 lg:w-[50%] lg:mt-0 max-w-[647px] max-h-[578px] object-cover' src="slides/slideloja.png" alt="" />

            </section>
        </>
    );
}
