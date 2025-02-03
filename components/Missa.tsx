import Image from 'next/image';
import React from 'react';

export default function Missa() {
  return (
    <>
      <section className="py-10">
        <div className="maxW">
          <div className="flex w-full items-center justify-center gap-1">
            <Image src="/icon-sub.svg" alt="Ícone Missa" width={20} height={20} priority />
            <h2>Participe das nossas missas</h2>
          </div>
          <h1 className="text-4xl text-black text-center font-bold uppercase mt-6">Todos os domingos</h1>
          <h1 className="text-OrangeP text-4xl font-bold uppercase text-center">às 09h00</h1>

          <article className="flex flex-col lg:flex-row gap-8 mt-6 justify-center items-center">
            {/* Imagem maior */}
            <div className="relative w-full max-w-[600px] h-[500px] lg:h-[722px]">
              <Image
                className="rounded-br-[20%] object-cover"
                src="/missa3.jpg"
                alt="Imagem da missa"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority />
            </div>

            {/* Coluna com imagens menores */}
            <div className="hidden lg:flex lg:flex-col lg:gap-4">
              {['missa1.jpg', 'missa2.jpg', 'about1.jpg'].map((img, index) => (
                <div key={index} className="relative w-[450px] h-[230px]">
                  <Image
                    className="rounded-br-[20%] object-cover"
                    src={`/${img}`}
                    alt={`Imagem ${index + 1}`}
                    fill
                    sizes="450px"
                  />
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
