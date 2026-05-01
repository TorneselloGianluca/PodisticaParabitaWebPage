import React from 'react';
import Video from '../assets/video1.mp4';

const MiglioriMomenti = () => {
  // Inserisci qui i "Copia indirizzo immagine" presi da Facebook
  const fotoGalleria = [
    { 
      id: 1, 
      url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/681715851_1516914736950271_2936602138636359794_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iwN-dRnQoKEQ7kNvwECAFse&_nc_oc=Adq8455Q21uGsRw8a6eu_meolXJGEekgodO1BcvHa6oaIanEt6L17oSmhq31VDJDlLiuwAxuyGtl5T273lCzEaf4&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=ITCTsa-HVlmqsSbdQGlPrQ&_nc_ss=7b2a8&oh=00_Af6Pks1pvu666Yj0S39EXVNl7gbCaVK2e7_f0BuIVle8DA&oe=69FA4A18', 
      size: 'large', 
      titolo: 'Otranto 2026' 
    },
    { 
      id: 2, 
      url: 'https://scontent.ffco2-1.fna.fbcdn.net/v/t39.30808-6/680236024_1517469846894760_7621572383817527110_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0BpCLyfJqHgQ7kNvwGvRvx6&_nc_oc=AdpAQUyXB6U7VVVaN1VxU0IwaabzibaXm5dGQ8rCV_PCRfNNXWDpaJ8Elocjft3TN2x0Q5w8jgr4oCb9mTPxR0VM&_nc_zt=23&_nc_ht=scontent.ffco2-1.fna&_nc_gid=Z5Nm5Q3gExRxs2M5VCkzgA&_nc_ss=7b2a8&oh=00_Af6w-YahLWw8LX0WoJ_yli14_eUEkLX6iUGH-cNRVqaW6Q&oe=69FA5C91', 
      size: 'small', 
      titolo: 'International Half Marathon Bucarest 2026, Marco Cataldo' 
    },
    { 
      id: 3, 
      url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/678766703_1516902603618151_3508963526300434816_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KJFhF_EHllEQ7kNvwE3eLTo&_nc_oc=AdpDTjKwjSI-xrpm3fRO7v35ic_pOUW49NrdNIqWoWJ33Aa4c1jvvlGagpUGEUmJ-Sc0p8dYReVwkS50VJ2yFl9U&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=m4unYAizCCTMr_0VJZSWTQ&_nc_ss=7b2a8&oh=00_Af4_ZzD7zoPMjSxh4xx89X4uRzrh8iIGOmaSjW64jInOzQ&oe=69FA6113', 
      size: 'small', 
      titolo: 'Granata 2026, Luigi Nicoletti' 
    },
    { 
      id: 4, 
      url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/672097792_1512274160747662_8470035265107180692_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=q6Nw3Knbp8AQ7kNvwG4pwNj&_nc_oc=Ado4r6YppuhYas23FoQ-3ZcOQOtjzh9wngRqhBWQWfEYaSGIUuiCWV3Po3go4DoCk2e4l9hJJEasongdW05hAMse&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=dtHxI32fBoRRM9v0ZthUZg&_nc_ss=7b2a8&oh=00_Af60EEW7p-Z3gknKoCu-YPlp4-Ta785TOeJEPzNhBPsVlg&oe=69FA396D', 
      size: 'small', 
      titolo: 'Massafra, Antonella Pellico, Campionessa Regionale di Categoria,' 
    },
    { 
      id: 5, 
      url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/677186847_1512271930747885_39236835961461822_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0q5R92ODgf0Q7kNvwGB8U31&_nc_oc=Adr7T9HeezWaC-S7vPm6CIgrD0coLII408i4Mzo6YgrDLIyRNa1dKcFz5I4QfdXNALy6uJ9zQEtGkRe-GDXrw6-u&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=M6VhXeifuS3wAZyEvalDqQ&_nc_ss=7b2a8&oh=00_Af6jhQm8TH5cRCu-BT5rfYgFo_U0LDEN4NOcu3Je5zOtAA&oe=69FA5034', 
      size: 'large', 
      titolo: 'Ruffano 2026' 
    },
    
    { 
      id: 6, 
      url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/670985424_1505611634747248_1006625617007885675_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=h1uKawrpd6YQ7kNvwE75OjX&_nc_oc=Adrd4b3KvxGKsMH7-f5Wi5fnLQdom3EDC2Z6GKSRQjqmFu4BOyBFB4mE3wm0c56UhFBmu9zXQ9_4aHM0gJO5xXeK&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=-qoKkHUsQoHejoXlUiCsNQ&_nc_ss=7b2a8&oh=00_Af4zXwWTk4OWvm8X8YsfKSM2_EOTvr5WuA7UWxIFVhJ2XQ&oe=69FA39D3', 
      size: 'small', 
      titolo: 'Piera, Wizz Air Maratona di Milano 2026' 
    },
    {
        id: 7,
        url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/648838579_1476387977669614_7803734888831386831_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=FssSefGy5KsQ7kNvwHafG75&_nc_oc=AdpEkzFYjzIvuwwjmJcx3_xNMd-yhFZsWvLBEsrAWPa1TgOMjE0Zbtdm3oTe1cEX2NT8r8PVjYzfSTR0RIeSxVIr&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=JOjXrAOB-FkE9VFnCFbNWw&_nc_ss=7b2a8&oh=00_Af7RM6BCK2H1SGZkfMX2g-BADN4S0zCmHv3ZdoL6BSV3Dg&oe=69FA5D77',
        size: 'medium',
        titolo: 'Lido Pizzo, Riserva Naturale di Gallipoli, 2026'
    },
    {
        id: 8,
        url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/644592192_1471938354781243_4866744269130839448_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=PVz9RQcrtfIQ7kNvwHKDu85&_nc_oc=AdocICpo_dAtESUoaZjh74RUAKUSxOtpb2agRACT_4ZUqJbFrUAYuEVm_h5Q-oTzi7sfjwGx7zSoyKjEVE-CtqRZ&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=ZDvyh0xM4j4VzAEg8CxIFw&_nc_ss=7b2a8&oh=00_Af5MyYqgndfoyK3Ol3AFaVa_8Sw8Sfg98OZVwkhQkiXOyw&oe=69FA3971',
        size: 'medium',
        titolo: 'Alessandro, Bologna 2026'
    },
    {
        id: 9,
        url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/641534813_1464683088840103_7055098704895033634_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=f9vXtwodVZ4Q7kNvwGtF-Db&_nc_oc=AdpkekJaZLrw2KWVLg98zHF8p96JJsC41iJoEk-bv-E2A4KBreL6g_8Yn9Q-OPzBBBHIScI85kpISN6Y3qHyBj3C&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=U0ke2ZVopfjm4ksyj7deCA&_nc_ss=7b2a8&oh=00_Af5gPJJ_efl4GW1B9xnDdATtTNsIdmGVu-ieiY4uDb738Q&oe=69FA4DB3',
        size: 'small',
        titolo: 'Antonella Pellico, Coelmo Napoli city half marathon 2026'
    },
    {
        id: 10,
        url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/634924494_1461206319187780_3112706459956240232_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0xsgB5DASQcQ7kNvwGeSndX&_nc_oc=AdqOcXl38oHZ0UJ6nu2mrgd766BhJ78u6E1R83TjKwJx_GEcauR8lyeh81z1y0m75urltidG2JY6s7uXKCtXcM2L&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=RKEe5APBpoaX2UMy3oQrGA&_nc_ss=7b2a8&oh=00_Af4_a4hKBLLs2qmqOFf8yY7wQJKUnOyVVm2LV4V4UkKS5g&oe=69FA65A4',
        size: 'large',
        titolo: 'Riccardo Tornesello, Romeo&Giulietta Half Marathon Verona 2026'
    },
    {
        id: 11,
        url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/601836613_1413321783976234_7900650312683819829_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pICsdiWLfpAQ7kNvwEuK5if&_nc_oc=AdqP2uI8LOC0dHDvdaVPJrO28dW0x8aFc1JDEAiSC6EIgr_-Bs6oKFZDwH0KqPz7xyuwONPXRhS5s2cuPbXVbp4_&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=2xlh17MWEzwLmrYrTuiENg&_nc_ss=7b2a8&oh=00_Af5Rzp6v5NSF9xG_JpZ4AOSyHdM9LoGOV63gXC-xmI7jZA&oe=69FA37F0',
        size: 'small',
        titolo: '"La Mandra", Calimera 2025'
    },
    {
        id: 12,
        url: 'https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/598670010_1409680501007029_4753573442900223037_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=njL_av5TgogQ7kNvwEfek1R&_nc_oc=Adry5rU16t3ul_zueUwIp9DHDgQiIgt-AesdRYlVJssBx8DK5Tl3pxVYKcHfqAQ2qSilsd3xwwgSsXfQGinibOLj&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=uGp5095owWEvkUZEcgARBw&_nc_ss=7b2a8&oh=00_Af7LZ5V3nFCmILT39lvJiISRJMMrTc3DDhoGoo8ngG4fpA&oe=69FA4CA2',
        size: 'small',
        titolo: 'Assemblea dei Soci Natale 2025, Parabita'
    },


//https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/598670010_1409680501007029_4753573442900223037_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=njL_av5TgogQ7kNvwEfek1R&_nc_oc=Adry5rU16t3ul_zueUwIp9DHDgQiIgt-AesdRYlVJssBx8DK5Tl3pxVYKcHfqAQ2qSilsd3xwwgSsXfQGinibOLj&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=uGp5095owWEvkUZEcgARBw&_nc_ss=7b2a8&oh=00_Af7LZ5V3nFCmILT39lvJiISRJMMrTc3DDhoGoo8ngG4fpA&oe=69FA4CA2

    /*
    
    {
        id: 9,
        url: '',
        size: 'medium',
        titolo: ''
    },
    
    */

  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* === HERO SECTION (Ottimizzata Mobile) === */}
      <section className="py-6 md:py-12 px-3 md:px-8">
        <div className="max-w-7xl mx-auto relative h-[400px] md:h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover object-top scale-110 -translate-y-6 md:-translate-y-10"
          >
            <source src={Video} type="video/mp4" />
          </video>
          
          {/* Overlay più scuro per leggere meglio su schermi piccoli */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-4">
              Migliori <br /> 
              <span className="text-blue-500 drop-shadow-lg">Momenti</span>
            </h1>
            <div className="w-12 h-1 bg-blue-500 mb-4 md:hidden"></div>
            <p className="text-white/90 uppercase tracking-[0.2em] font-black text-[10px] md:text-sm">
              L'essenza della nostra corsa
            </p>
          </div>
        </div>
      </section>

      {/* === GRIGLIA FOTOGRAFICA (Responsive) === */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Usiamo grid-flow-dense per riempire i buchi lasciati dai riquadri grandi */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 grid-flow-row-dense">
          
          {fotoGalleria.map((foto) => (
            <div 
              key={foto.id}
              className={`
                relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg bg-slate-200 group
                ${foto.size === 'large' ? 'col-span-2 row-span-2 h-[450px] md:h-[700px]' : 'h-[200px] md:h-[330px]'}
                ${foto.size === 'medium' ? 'col-span-2 md:col-span-1 h-[250px] md:h-[330px]' : ''}
              `}
            >
              <img 
                src={foto.url} 
                alt={foto.titolo}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  // Fallback se il link di Facebook scade o non carica
                  e.target.src = "https://placehold.co/600x800/0047FF/FFFFFF?text=Podistica+Parabita";
                }}
              />
              
              {/* Overlay testo - Visibile sempre su mobile, hover su desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-8">
                <p className="text-white font-black uppercase tracking-tighter text-sm md:text-xl leading-none">
                  {foto.titolo} <br/>

                </p>
              </div>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default MiglioriMomenti;