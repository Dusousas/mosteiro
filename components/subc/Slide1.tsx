import React from 'react';

export default function Slide1() {
    return (
        <>
            <section className='flex bg-BegeP py-10 px-4 flex-col mt-10 lg:border-l-[1px] lg:border-OrangeP lg:flex-row'>

                <div className='lg:w-[50%] lg:px-10'>
                    <div className='flex items-center justify-center gap-1 lg:justify-start'>
                        <img src="icon-sub.svg" alt="" />
                        <h2 className='text-center lg:text-left'>Almoço no mosteiro</h2>
                    </div>
                    <p className='text-black text-center font-semibold mt-4 lg:text-left'>Compartilhe momentos especiais conosco! Participe dos nossos <span className='text-OrangeP'>almoços mensais</span> e desfrute de uma refeição única.</p>
                    <p className='text-TextG text-center mt-6 lg:text-left'>Junte-se a nós para momentos de comunhão e sabor! Todo mês, preparamos um almoço especial, unindo tradição, aconchego e uma culinária irresistível. Venha viver essa experiência única e compartilhar bons momentos em um ambiente acolhedor.</p>
                    <p className='text-TextG text-center mt-2 lg:text-left'>Além de saborear pratos preparados com carinho e ingredientes selecionados, nossos almoços mensais são uma oportunidade para fortalecer laços, celebrar a fé e desfrutar da serenidade do mosteiro. Uma experiência que une tradição, hospitalidade e bons momentos em família.</p>
                    <div className='flex justify-center mt-6 lg:justify-start'>
                        <a className='bg-OrangeP px-6 py-4 rounded-r-full uppercase text-white' target='_blank' href="https://wa.me/5514998306263?text=Gostaria%20de%20saber%20mais%20sobre%20o%20almoço%20no%20mosteiro.">Consultar datas</a>
                    </div>
                </div>

                <img className='rounded-bl-[100px] mt-4 lg:w-[50%] lg:mt-0 max-w-[647px] max-h-[578px]' src="slides/slidealmoco.jpg" alt="" />

            </section>
        </>
    );
}
