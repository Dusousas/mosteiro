import React from 'react';

export default function Fonte() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW text-black'>

                    <div className="flex w-full items-center justify-center gap-1">
                        <img src="/icon-sub.svg" alt="Ícone Missa" />
                        <h2>Fonte São José do Paraíso</h2>
                    </div>

                    <article className='flex flex-col mt-10 lg:mt-20 gap-12 lg:flex-row  '>
                        <div>
                            <p className='text-black'>No dia 19 de Março, Solenidade de São José, Esposo da Virgem Maria, nosso Padroeiro, abençoemos a “Fonte de São José do Paraíso’.
                                Aqui existe uma nascente próxima da Capela. Uma lenda singela do lugar conta que um dia qualquer, Deus, peregrino, ‘desceu do céu’ e escolheu vir descansar um pouco e, bebeu desta  fonte de águas límpidas.
                            </p>

                            <p className='text-blacks mt-2'>Neste Ano Santo Jubilar, os ‘peregrinos de esperança’, segundo o coração e as intenções do Santo Padre o Papa Francisco, ao visitar esta Fonte, manancial do Espírito, sejam saciados da ‘sede de Deus, conforme suas intenções e fortaleçam-se na  fé, na esperança, e na caridade, sob a intercessão do amado São José do Paraiso.
                                Disse o Senhor: “Virão do Norte e do Sul, do Oriente e do Ocidente, e todos sentar-se-ão à mesa”.(Lc13, 28-30)
                                E retornem para a sua missão renovados.
                            </p>
                        </div>
                        <img className='lg:w-[50%] rounded-3xl' src="fonte.jpeg" alt="" />
                    </article>
                </div>
            </section>
        </>
    );
}