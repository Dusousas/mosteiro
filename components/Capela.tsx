import React from 'react';
import Image from "next/image";


export default function Capela() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW text-black'>
                    
                    <div className="flex w-full items-center justify-center gap-1">
                        <img src="/icon-sub.svg" alt="Ícone Missa" />
                        <h2>Capela</h2>
                    </div>
                    <h1 className="text-4xl text-black text-center font-bold uppercase mt-6">
                        Capela das <span className="text-OrangeP">Mil mulheres</span>
                    </h1>

                    <article className='flex flex-col mt-20 gap-12 lg:flex-row  '>
                        <img src="capela.png" alt="" />
                        <div>
                            <p className='text-black'>Pensada como sendo um símbolo feminino, o seu formato se destoa por não ter uma face abrangente, mesmo sendo voltada às devotas de Maria. Com o desenvolvimento prático da mesma, foi utilizado em seu processo criativo os mais diversos elementos e atributos que compôe a sutileza feminina: Uma rosa, vitrais, o sentido maternal da vida, meigas como sempre são e sensíveis ao simples toque da natureza em suas vidas. Foram dessas informações, que vieram da imaginação do Padre Nilton em sonhos, que juntamente com a dupla de arquitetos Mariana Spigolon Barbosa e seu pai, juntos desenvolveram sketchs com as ideias para poder iniciar o seu desenvolvimento. Tomando forma, sendo feita alterações, ideias e correções, eis que a capela ganhou seus diagramas complementares, a sua base estava desenvolvida, e o seu desenho já estava, pois, adiantado. Criado todo o projeto do mesmo pelos arquitetos, ele foi apresentado para as pessoas, que vieram a aderir a ideia de juntas, auxiliar com valores na sua concepção e criação em terreno no Mosteiro. A ajuda será feita por apenas mulheres, que doarão valores para a construção do local, como que sendo simbolicamente o local feminino de devoção a Maria, sendo pois, o projeto que poderá trazer maior respaldo religioso, cultural na cidade de Torrinha para aqueles que tem o interesse de conhecer mais sobre essa que é, de longe, a mãe mais popular da história do mundo atual.</p>
                            <div className='flex flex-col gap-y-4 justify-between items-center mt-8 lg:flex-row'>
                                <div>
                                    <p className='uppercase text-OrangeP text-center font-semibold lg:text-left'>Ajude contribuindo:</p>
                                    <p className='text-black'>PIX: <span>capeladasmilmulheres@gmail.com</span></p>
                                </div>

                                <div>
                                    <img className='w-[100px]' src="qrcode.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}