import React from 'react';


export default function Slide3() {
    return (
        <>
            <section className='flex bg-BegeP py-10 px-4 flex-col mt-10 lg:border-l-[1px] lg:border-OrangeP lg:flex-row'>

                <div className='lg:w-[50%] lg:px-10'>
                    <div className='flex items-center justify-center gap-1 lg:justify-start'>
                        <img src="icon-sub.svg" alt="" />
                        <h2 className='text-center lg:text-left'>Agromonges Cafeteria</h2>
                    </div>
                    <p className='text-black text-center font-semibold mt-4 lg:text-left'>Sabores que Aconchegam! Desfrute de momentos especiais em nossa <span className='text-OrangeP'>cafeteria</span>, onde aromas e sabores se encontram em um ambiente acolhedor.</p>
                    <p className='text-TextG text-center mt-2 lg:text-left'>Nossa cafeteria é o lugar perfeito para relaxar e saborear bebidas feitas com grãos selecionados e de alta qualidade. Oferecemos uma variedade de cafés, chás e acompanhamentos deliciosos, preparados com todo o carinho para proporcionar momentos de acolhimento e tranquilidade. Venha se reconectar com a paz e o sabor em cada xícara.</p>
                    <div className='flex justify-center mt-6 lg:justify-start'>
                        <a className='bg-OrangeP px-6 py-4 rounded-r-full uppercase text-white' href="">Saiba mais</a>
                    </div>
                </div>

                <img className='rounded-bl-[100px] mt-4 lg:w-[50%] lg:mt-0 max-w-[647px] max-h-[578px]' src="slides/slidecafe.jpg" alt="" />

            </section>
        </>
    );
}
