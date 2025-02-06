import React from 'react';

export default function Contact() {
    return (
        <section
            className="py-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/contactBG.jpg')" }}
        >
            <div className="text-black maxW flex justify-end">

                <article className='bg-white lg:w-[50%] flex justify-center'>
                    <form className='flex flex-col py-20  gap-4 w-[75%]' action="">
                        <h1 className='text-4xl uppercase text-OrangeP font-bold'>Entre em contato</h1>
                        <h2 className='text-black font-normal'>Nos conte sobre você, a sua experiência aqui no Mosteiro, críticas, sugestões e elogios, ou mesmo nos peça orações. Evoluir é ouvir as críticas, crescer é compreender as sugestões e sonhar passa primeiro pelos elogios!</h2>
                        <input className='border-b-2 border-OrangeP px-4 py-2 outline-none' placeholder='Seu Nome' type="text" name="" id="" />
                        <input className='border-b-2 border-OrangeP px-4 py-2 outline-none' placeholder='Seu Telefone' type="text" name="" id="" />
                        <input className='border-b-2 border-OrangeP px-4 py-2 outline-none' placeholder='Seu Email' type="text" name="" id="" />
                        <textarea className='border-b-2 border-OrangeP px-4 py-2 resize-none outline-none' rows={4} placeholder='Escreva sua mensagem aqui' name="" id=""></textarea>
                        <div>
                        <button className='bg-OrangeP px-10 mt-6 py-4 rounded-full uppercase text-white'>Enviar</button>
                        </div>
                    </form>

                </article>
            </div>
        </section>
    );
}
