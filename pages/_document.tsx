import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags Essenciais */}
        <title>Agromonges - Mosteiro do paraíso</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Agromonges - Mosteiro do paraíso" />
        <meta name="description" content="Venha conhecer o Agromonges - Mosteiro do paraíso. Eventos, turismo e uma cafeteria incrível no interior de São Paulo." />
        <meta name="keywords" content="mosteiro, Torrinha, turismo, espiritualidade, paisagens, eventos, café, interior de São Paulo" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agromonges - Mosteiro do paraíso" />
        <meta property="og:description" content="Venha conhecer o Agromonges - Mosteiro do paraíso. Eventos, turismo e uma cafeteria incrível no interior de São Paulo." />
        <meta property="og:image" content="/igreja.png" />
        <meta property="og:url" content="https://seusite.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agromonges - Mosteiro do paraíso" />
        <meta name="twitter:description" content="Venha conhecer o Agromonges - Mosteiro do paraíso. Eventos, turismo e uma cafeteria incrível no interior de São Paulo." />
        <meta name="twitter:image" content="/igreja.png" />

        <link rel="icon" type="image/png" sizes="16x16" href="/igreja.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
