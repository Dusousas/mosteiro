import Image from 'next/image';
import React, { useState } from 'react';

export default function Missa() {

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "galeria/Galeria1.webp",
    "galeria/Galeria2.webp",
    "galeria/Galeria3.webp",
    "galeria/Galeria4.webp",
    "galeria/Galeria5.webp",
    "galeria/Galeria6.webp",
    "galeria/Galeria7.webp"
  ];

  const openLightbox = (index: React.SetStateAction<number>) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (lightboxOpen) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <>
      <section id='missas' className="py-20 bg-BegeP">
        <div className="maxW">
          <div className="flex w-full items-center justify-center gap-1">
            <Image src="/icon-sub.svg" alt="Ícone Missa" width={20} height={20} priority />
            <h2>Participe das nossas missas</h2>
          </div>
          <h1 className="text-4xl text-black text-center font-bold uppercase mt-6">Todos os domingos</h1>
          <h1 className="text-OrangeP text-4xl font-bold uppercase text-center">às 09h00</h1>
          <article className="flex flex-col lg:flex-row gap-8 mt-6 justify-center items-center">
            <div className="relative w-full max-w-[600px] h-[500px] lg:h-[722px]">
              <Image className="rounded-br-[100px] object-cover" src="/mainmissa.webp" alt="Imagem da missa" fill sizes="(max-width: 1024px) 90vw, 50vw" priority />
            </div>

            <div className="hidden lg:flex lg:flex-col lg:gap-4">
              {['missa1.webp', 'missa2.webp', 'about1.webp'].map((img, index) => (
                <div key={index} className="relative w-[450px] h-[230px]">
                  <Image className="rounded-br-[100px] object-top object-cover" src={`/${img}`} alt={`Imagem ${index + 1}`} fill sizes="450px" />
                </div>
              ))}
            </div>
          </article>

          <article className='py-20'>
            <div className="flex w-full items-center justify-center gap-1">
              <Image src="/icon-sub.svg" alt="Ícone Missa" width={20} height={20} priority />
              <h2>Missa do cio da terra</h2>
            </div>
            <p className='text-TextG mt-6 text-center lg:max-w-[80%] lg:mx-auto'>A "Missa do Cio da Terra", celebrada por ocasião da Solenidade de Jesus Cristo, Rei do Unierso, final do Ano Litúrgico, é uma das espressões de louvor celebrada pela comunidade rural com a participação de fiéis de muitos lugares da região.</p>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-4 md:hidden">
                {galleryImages.map((img, index) => (
                  <div key={index} className="aspect-square w-full cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(index)}>
                    <Image className="rounded-lg object-cover" src={`/${img}`} alt={`Imagem ${index + 1} da galeria`} fill sizes="(max-width: 768px) 100vw, 50vw" quality={80} />
                  </div>
                ))}
              </div>

              <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
                <div className="aspect-square cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(0)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[0]}`} alt="Imagem 1 da galeria" fill sizes="(max-width: 1024px) 50vw, 33vw" quality={80} />
                </div>
                <div className="aspect-square cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(1)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[1]}`} alt="Imagem 2 da galeria" fill sizes="(max-width: 1024px) 50vw, 33vw" quality={80} />
                </div>
                <div className="aspect-square cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(2)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[2]}`} alt="Imagem 3 da galeria" fill sizes="(max-width: 1024px) 50vw, 33vw" quality={80} />
                </div>
                <div className="aspect-square cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(3)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[3]}`} alt="Imagem 4 da galeria" fill sizes="(max-width: 1024px) 50vw, 33vw" quality={80} />
                </div>
                <div className="col-span-2 aspect-video cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(4)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[4]}`} alt="Imagem 5 da galeria" fill sizes="(max-width: 1024px) 100vw, 66vw" quality={80} />
                </div>
                <div className="aspect-square cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(5)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[5]}`} alt="Imagem 6 da galeria" fill sizes="(max-width: 1024px) 50vw, 33vw" quality={80} />
                </div>
                <div className="aspect-square cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(6)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[6]}`} alt="Imagem 7 da galeria" fill sizes="(max-width: 1024px) 50vw, 33vw" quality={80} />
                </div>
              </div>

              <div className="hidden lg:grid grid-cols-5 grid-rows-5 gap-4 h-[800px]">
                <div className="col-span-2 row-span-2 cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(0)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[0]}`} alt="Imagem 1 da galeria" fill sizes="40vw" quality={80} />
                </div>
                <div className="row-span-3 col-start-3 cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(1)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[1]}`} alt="Imagem 2 da galeria" fill sizes="20vw" quality={80} />
                </div>
                <div className="row-span-2 col-start-4 cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(2)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[2]}`} alt="Imagem 3 da galeria" fill sizes="20vw" quality={80} />
                </div>
                <div className="row-span-5 col-start-5 cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(3)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[3]}`} alt="Imagem 4 da galeria" fill sizes="20vw" quality={80} />
                </div>
                <div className="col-start-4 row-start-3 cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(4)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[4]}`} alt="Imagem 5 da galeria" fill sizes="20vw" quality={80} />
                </div>
                <div className="col-span-2 row-span-2 col-start-3 row-start-4 cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(5)}>
                  <Image className="rounded-lg object-cover" src={`/${galleryImages[5]}`} alt="Imagem 6 da galeria" fill sizes="40vw" quality={80} />
                </div>
                <div className="col-span-2 row-span-3 col-start-1 row-start-3 cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => openLightbox(6)}>
                  <Image className="rounded-lg object-cover object-center" src={`/${galleryImages[6]}`} alt="Imagem 7 da galeria" fill sizes="40vw" quality={80} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10" aria-label="Fechar visualizador">&times;</button>
            <div className="absolute top-4 left-4 text-white text-lg">{currentImageIndex + 1} / {galleryImages.length}</div>
            <div className="w-full h-full max-w-6xl max-h-screen flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image src={`/${galleryImages[currentImageIndex]}`} alt={`Imagem ${currentImageIndex + 1} ampliada`} fill className="object-contain" sizes="100vw" quality={100} priority />
              </div>
            </div>
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70" aria-label="Imagem anterior">&larr;</button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70" aria-label="Próxima imagem">&rarr;</button>
          </div>
        </div>
      )}
    </>
  );
}