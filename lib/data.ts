export type Lang = "es" | "en";

export interface NavItem {
  key: string;
  href: string;
}

export const navItems: NavItem[] = [
  { key: "home", href: "#inicio" },
  { key: "bio", href: "#bio" },
  { key: "shows", href: "#shows" },
  { key: "contact", href: "#contacto" },
];

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      bio: "Bio",
      shows: "Shows",
      contact: "Contacto",
    },
    hero: {
      title: "DUO RINGS",
      subtitle: "PERFORMING ARTS   |   AERIAL RINGS DUO   |   FLORA ARACAMA & NICO BUSSO",
      quote: "\"Creating Experiences. Creating Emotions.\"",
      scroll: "Scroll",
    },
    bio: {
      heading: "QUIÉNES SOMOS",
      readMore: "Leer más",
      readLess: "Leer menos",
      paragraphs: [
        "Flora Aracama y Nico Busso son una pareja argentina de atletas, artistas y emprendedores de alto rendimiento. Juntos crearon Duo Rings™, un acto de anillas aéreas único en su estilo que combina deporte, gimnasia y arte en una experiencia para la industria del entretenimiento.",
        "Sus presentaciones se caracterizan por una combinación única de riesgo, confianza, conexión, fuerza y acrobacias originales, creando momentos que cautivan a la audiencia y dejan una huella emocional duradera. En el corazón de su trabajo existe una misión muy simple: generar experiencias que las personas recuerden mucho después de que termine el espectáculo.",
        "Impulsados por valores como la excelencia, la creatividad, la atención al detalle, la disciplina y la gratitud, Flora y Nico llevan el mismo nivel de compromiso tanto dentro como fuera del escenario. Su asociación artística está construida sobre años de dedicación al movimiento, la innovación y la búsqueda constante de nuevos límites en las anillas aéreas.",
        "A lo largo de su trayectoria, han desarrollado un lenguaje propio que combina la precisión técnica de la gimnasia de alto rendimiento con la sensibilidad artística del circo contemporáneo. Cada acto es pensado como una obra en sí misma, donde cada transición, cada mirada y cada figura aérea contribuyen a una narrativa visual coherente y emocionante.",
        "Su trabajo los ha llevado a colaborar con algunas de las producciones más prestigiosas del mundo, desde residencias de Cirque du Soleil hasta programas de talentos internacionales, pasando por galas, giras de arenas y producciones teatrales de gran formato. En cada escenario, su objetivo es el mismo: conectar con el público y generar una experiencia memorable.",
        "Hoy, Duo Rings™ continúa explorando nuevas posibilidades creativas para las anillas aéreas, desarrollando actos originales, contenido audiovisual y formaciones que comparten su metodología con artistas de distintas partes del mundo. Su visión es clara: seguir creando arte que inspire, emocione y trascienda fronteras.",
      ],
    },
    shows: {
      heading: "SHOWS",
      watchVideo: "Ver video",
      current: "Actual",
    },
    contact: {
      heading: "BE IN TOUCH",
      cta: "Contact",
    },
    footer: {
      training: "Entrena como Duo Rings →",
      copyright: "© 2026 Duo Rings",
    },
  },
  en: {
    nav: {
      home: "Home",
      bio: "Bio",
      shows: "Shows",
      contact: "Contact",
    },
    hero: {
      title: "DUO RINGS",
      subtitle: "PERFORMING ARTS   |   AERIAL RINGS DUO   |   FLORA ARACAMA & NICO BUSSO",
      quote: "\"Creating Experiences. Creating Emotions.\"",
      scroll: "Scroll",
    },
    bio: {
      heading: "ABOUT US",
      readMore: "Read more",
      readLess: "Read less",
      paragraphs: [
        "Flora Aracama and Nico Busso are an Argentine duo of high-performance athletes, artists, and entrepreneurs. Together, they created Duo Rings™, a unique aerial rings act that seamlessly blends sport, gymnastics, artistry, and entertainment into a powerful visual experience.",
        "Their performances are defined by a distinctive combination of risk, trust, connection, strength, and original acrobatics, creating moments that captivate audiences and leave lasting emotional impressions. At the heart of their work is a simple mission: to create experiences that people will remember long after the curtain falls.",
        "Driven by values of excellence, creativity, attention to detail, discipline, and gratitude, Flora and Nico bring the same level of commitment both on and off the stage. Their artistic partnership is built on years of dedication to mastering movement and pushing the boundaries of what is possible on aerial rings.",
        "Throughout their career they have developed a unique language that combines the technical precision of high-performance gymnastics with the artistic sensitivity of contemporary circus. Every act is conceived as a work in itself, where each transition, each glance and each aerial figure contributes to a coherent and exciting visual narrative.",
        "Their work has led them to collaborate with some of the world's most prestigious productions, from Cirque du Soleil residencies to international talent shows, gala events, arena tours and large-scale theatrical productions. On every stage, their goal remains the same: to connect with the audience and create a memorable experience.",
        "Today, Duo Rings™ continues to explore new creative possibilities for aerial rings, developing original acts, audiovisual content and training programmes that share their methodology with artists from around the world. Their vision is clear: to keep creating art that inspires, moves and transcends borders.",
      ],
    },
    shows: {
      heading: "SHOWS",
      watchVideo: "Watch video",
      current: "Current",
    },
    contact: {
      heading: "BE IN TOUCH",
      cta: "Contact",
    },
    footer: {
      training: "Train like Duo Rings →",
      copyright: "© 2026 Duo Rings",
    },
  },
};

export interface Show {
  slug: string;
  year: string;
  yearEn: string;
  location: string;
  locationEn?: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  featured?: "agt" | "cirque";
  videoUrl?: string;
  images: string[];
}

export const shows: Show[] = [
  {
    slug: "blinded-by-delight",
    year: "Actual",
    yearEn: "Current",
    location: "Friedrichstadt-Palast, Berlín",
    titleEs: "Blinded by Delight Show",
    titleEn: "Blinded by Delight Show",
    descEs:
      "Actualmente, Flora y Nico forman parte de Blinded by Delight, la producción más reciente del Friedrichstadt-Palast de Berlín, el escenario teatral más grande del mundo. Este emblemático e histórico palacio, reconocido por presentar algunos de los mejores actos acrobáticos internacionales, cuenta con el auspicio de Swarovski y, en esta edición, con el diseño de vestuario del reconocido diseñador Jeremy Scott. Para esta producción, Flora y Nico concibieron, diseñaron y crearon su propio acto de anillas aéreas, integrando su visión artística y décadas de experiencia en el alto rendimiento. Show dirigido por el director Oliver Hoppman.",
    descEn:
      "Flora and Nico are currently part of Blinded by Delight, the latest production at the Friedrichstadt-Palast in Berlin, the largest theatre stage in the world. This iconic, historic palace — renowned for presenting some of the finest international acrobatic acts — is sponsored by Swarovski and, in this edition, features costume design by the acclaimed designer Jeremy Scott. For this production, Flora and Nico conceived, designed and created their own aerial rings act, bringing together their artistic vision and decades of high-performance experience. Directed by Oliver Hoppman.",
    images: ["/media/shows/blinded-1.jpg"],
  },
  {
    slug: "gala-leipzig-2025",
    year: "2025",
    yearEn: "2025",
    location: "European Gymnastics Championships Closing Gala",
    titleEs: "Gala Leipzig 2025",
    titleEn: "Gala Leipzig 2025",
    descEs:
      "Producido por Feuerwerk der Turnkunst, Duo Rings™ fue parte del espectáculo de cierre del Campeonato Europeo de Gimnasia Artística 2025 en la ciudad de Leipzig, Alemania.",
    descEn:
      "Produced by Feuerwerk der Turnkunst, Duo Rings™ performed as part of the closing gala of the 2025 European Artistic Gymnastics Championships in Leipzig, Germany.",
    videoUrl: "https://www.youtube.com/watch?v=vC-eZk9rZb0&t=5s",
    images: ["/media/shows/gala-1.jpg", "/media/shows/gala-2.jpg", "/media/shows/gala-3.jpg"],
  },
  {
    slug: "superfly-2025",
    year: "2025",
    yearEn: "2025",
    location: "Feuerwerk der Turnkunst On Stage",
    titleEs: "Superfly Show",
    titleEn: "Superfly Show",
    descEs:
      "Producción en gira de Feuerwerk der Turnkunst, la compañía de espectáculos gimnásticos más reconocida de Europa. Duo Rings™ formaron parte de Superfly, presentando su acto de anillas aéreas en teatros de diferentes ciudades de Alemania.",
    descEn:
      "A touring production by Feuerwerk der Turnkunst, Europe's most renowned gymnastics show company. Duo Rings™ were part of Superfly, presenting their aerial rings act in theatres across various German cities.",
    images: ["/media/shows/superfly-1.jpg", "/media/shows/superfly-2.jpg"],
  },
  {
    slug: "heilbronner-2024",
    year: "2024–2025",
    yearEn: "2024–2025",
    location: "Heilbronn, Alemania",
    locationEn: "Heilbronn, Germany",
    titleEs: "Heilbronner Weihnachtscircus",
    titleEn: "Heilbronner Weihnachtscircus",
    descEs:
      "Duo Rings™ formó parte del tradicional espectáculo navideño de la ciudad de Heilbronn, Alemania, una producción que reúne cada año a algunos de los mejores actos acrobáticos y artísticos internacionales. Para esta ocasión, presentaron su acto original de anillas aéreas acompañado por su música original de tango, fusionando fuerza, conexión y acrobacia con una estética elegante, sensual y sofisticada. Una propuesta artística que combina la pasión del tango argentino con la precisión del alto rendimiento, creando una experiencia única para la audiencia.",
    descEn:
      "Duo Rings™ took part in the traditional Christmas show of Heilbronn, Germany, a production that gathers some of the world's finest acrobatic and artistic acts every year. For this occasion, they performed their original aerial rings act accompanied by their own original tango music, blending strength, connection and acrobatics with an elegant, sensual and sophisticated aesthetic specially adapted to the atmosphere of the event. An artistic proposal that merges the passion of Argentine tango with high-performance precision, creating a unique experience for the audience.",
    videoUrl: "https://www.youtube.com/watch?v=4-6aAAe0QEc",
    images: [
      "/media/shows/heilbronner-1.jpg",
      "/media/shows/heilbronner-2.jpg",
      "/media/shows/heilbronner-3.jpg",
      "/media/shows/heilbronner-4.jpg",
      "/media/shows/heilbronner-5.jpg",
    ],
  },
  {
    slug: "got-talent-chile-2024",
    year: "2024",
    yearEn: "2024",
    location: "Chilevisión, Santiago de Chile",
    locationEn: "Chilevisión, Santiago de Chile",
    titleEs: "Got Talent Chile",
    titleEn: "Got Talent Chile",
    descEs:
      "Duo Rings™ participó en Got Talent Chile, el reconocido programa de talentos de Chilevisión grabado en Santiago de Chile. Presentaron su acto original de anillas aéreas ante una audiencia nacional y un prestigioso jurado integrado por la actriz Leonor Varela, el actor Francisco Reyes, la presentadora Diana Bolocco y el histórico animador Antonio Vodanovic, bajo la conducción de Julián Elfenbein. Su presentación permitió mostrar la combinación única de fuerza, riesgo, conexión y creatividad que caracteriza a Duo Rings™, llevando su propuesta artística a una de las plataformas televisivas más importantes de Chile.",
    descEn:
      "Duo Rings™ appeared on Got Talent Chile, the renowned talent show broadcast by Chilevisión and filmed in Santiago de Chile. They performed their original aerial rings act before a national audience and a prestigious jury made up of actress Leonor Varela, actor Francisco Reyes, presenter Diana Bolocco and the legendary host Antonio Vodanovic, hosted by Julián Elfenbein. Their performance showcased the unique blend of strength, risk, connection and creativity that defines Duo Rings™, bringing their artistry to one of Chile's most important television platforms.",
    images: ["/media/shows/chile-1.jpg", "/media/shows/chile-2.jpg"],
  },
  {
    slug: "la-tarumba-quereres-2024",
    year: "2024",
    yearEn: "2024",
    location: "Perú",
    locationEn: "Peru",
    titleEs: "La Tarumba – Quereres",
    titleEn: "La Tarumba – Quereres",
    descEs:
      "Durante la temporada 2024, Duo Rings formó parte de Quereres, el espectáculo del 40.º aniversario de La Tarumba, una de las compañías de circo y artes escénicas más importantes de Perú, participando como artistas internacionales invitados con su acto original de anillas aéreas. La producción realizó funciones en Lima, Trujillo y Arequipa, llevando una propuesta que combina acrobacia, emoción, música en vivo y narrativa visual a miles de espectadores en todo el Perú.",
    descEn:
      "During the 2024 season, Duo Rings were part of Quereres, the show marking the 40th anniversary of La Tarumba, one of Peru's most important circus and performing-arts companies, appearing as invited international artists with their original aerial rings act. The production ran in Lima, Trujillo and Arequipa, bringing a blend of acrobatics, emotion, live music and visual storytelling to thousands of spectators across Peru.",
    images: ["/media/shows/tarumba-1.jpg", "/media/shows/tarumba-2.jpg"],
  },
  {
    slug: "reesh-esch-2024",
    year: "2024",
    yearEn: "2024",
    location: "Biennale d'Esch, Luxemburgo",
    locationEn: "Biennale d'Esch, Luxembourg",
    titleEs: "REESH Evol",
    titleEn: "REESH Evol",
    descEs:
      "Duo Rings™ participó en REESH 2024, una producción al aire libre presentada en el marco de la Biennale d'Esch, Luxemburgo. El espectáculo fue creado por Sean McKeown y producido por VF Art Projects, bajo la codirección de Crystal Manich y Mukhtar Omar Sharif, reconocidos creadores con trayectoria en producciones de Cirque du Soleil. La propuesta reunió a artistas internacionales de distintas disciplinas en una experiencia inmersiva de gran formato que combinó acrobacia, música, teatro y movimiento en espacios urbanos. Como parte de la producción, Duo Rings™ presentaron su acto de anillas aéreas, aportando su característico lenguaje de fuerza, conexión y vuelo a una de las celebraciones culturales más destacadas de la región, con música original de Damian Mahler.",
    descEn:
      "Duo Rings™ took part in REESH 2024, an open-air production presented within the Biennale d'Esch, Luxembourg. The show was created by Sean McKeown and produced by VF Art Projects, co-directed by Crystal Manich and Mukhtar Omar Sharif, acclaimed creators with a background in Cirque du Soleil productions. The piece brought together international artists from different disciplines in a large-scale immersive experience combining acrobatics, music, theatre and movement across urban spaces. As part of the production, Duo Rings™ performed their aerial rings act, contributing their signature language of strength, connection and flight to one of the region's most notable cultural celebrations, with original music by Damian Mahler.",
    images: [
      "/media/shows/reesh-1.jpg",
      "/media/shows/reesh-2.jpg",
      "/media/shows/reesh-3.jpg",
      "/media/shows/reesh-4.jpg",
    ],
  },
  {
    slug: "flic-flac-2023",
    year: "2023–2024",
    yearEn: "2023–2024",
    location: "Núremberg, Alemania",
    locationEn: "Nuremberg, Germany",
    titleEs: "Flic Flac X-Mas Show",
    titleEn: "Flic Flac X-Mas Show",
    descEs:
      "Duo Rings™ formó parte de la temporada navideña 2023–2024 de Flic Flac en la ciudad de Núremberg, Alemania, una de las producciones de circo contemporáneo más reconocidas de Europa. Bajo la dirección de Larissa Kastein, presentaron su acto original de anillas aéreas, una propuesta que combina fuerza, sensualidad, elegancia y una estética rockera distintiva. Dentro de una producción de gran formato que reúne a artistas internacionales de primer nivel, Duo Rings™ llevaron al escenario una performance cargada de conexión, riesgo y sofisticación, fusionando la potencia acrobática con una fuerte identidad artística.",
    descEn:
      "Duo Rings™ were part of Flic Flac's 2023–2024 Christmas season in Nuremberg, Germany, one of Europe's most renowned contemporary circus productions. Directed by Larissa Kastein, they performed their original aerial rings act — a piece blending strength, sensuality, elegance and a distinctive rock aesthetic. Within a large-scale production featuring top international artists, Duo Rings™ brought a performance full of connection, risk and sophistication to the stage, fusing acrobatic power with a strong artistic identity.",
    videoUrl: "https://www.youtube.com/watch?v=Hi4cWDQ8LXM&t=22s",
    images: [
      "/media/shows/flicflac-1.jpg",
      "/media/shows/flicflac-2.jpg",
      "/media/shows/flicflac-3.jpg",
      "/media/shows/flicflac-4.jpg",
      "/media/shows/flicflac-5.jpg",
    ],
  },
  {
    slug: "salieri-2023",
    year: "2023",
    yearEn: "2023",
    location: "Legnago, Italia",
    locationEn: "Legnago, Italy",
    titleEs: "Salieri Circus Award",
    titleEn: "Salieri Circus Award",
    descEs:
      "Duo Rings™ fue parte del Salieri Circus Award en Legnago, Italia, un festival internacional que celebra la unión entre las artes circenses y la música clásica en vivo. Para esta ocasión, presentaron una versión especial de su acto de anillas aéreas inspirada en El Vals de las Flores de Tchaikovsky, acompañados por una orquesta sinfónica en vivo. La performance destacó por su estilo elegante, etéreo, romántico y sublime, combinando la delicadeza artística con la fuerza y la precisión técnica que caracterizan a Duo Rings™.",
    descEn:
      "Duo Rings™ took part in the Salieri Circus Award in Legnago, Italy, an international festival celebrating the union of circus arts and live classical music. For this occasion, they presented a special version of their aerial rings act inspired by Tchaikovsky's Waltz of the Flowers, accompanied by a live symphony orchestra. The performance stood out for its elegant, ethereal, romantic and sublime style, combining artistic delicacy with the strength and technical precision that define Duo Rings™.",
    videoUrl: "https://www.youtube.com/watch?v=UHD3IqBFGE8",
    images: ["/media/shows/salieri-1.jpg", "/media/shows/salieri-2.jpg"],
  },
  {
    slug: "france-got-talent-2023",
    year: "2023",
    yearEn: "2023",
    location: "M6, París, Francia",
    locationEn: "M6, Paris, France",
    titleEs: "La France a un Incroyable Talent",
    titleEn: "La France a un Incroyable Talent",
    descEs:
      "Duo Rings™ participó en la temporada 2023 de La France a un Incroyable Talent, el reconocido programa de talentos emitido por la cadena nacional M6 en Francia. Durante su paso por el programa realizaron tres destacadas presentaciones, llevando al público y al jurado una propuesta artística única que combina amor, pasión, creatividad y acrobacia de alto nivel en el único acto de anillas aéreas en dúo de su estilo. Su performance recibió una gran ovación del público, destacándose por la conexión genuina entre ambos artistas, la originalidad de sus figuras y la combinación de fuerza, elegancia y riesgo que caracteriza a Duo Rings™. La edición fue presentada por Karine Le Marchand y contó con un jurado integrado por Hélène Ségara, Marianne James, Éric Antoine y Sugar Sammy.",
    descEn:
      "Duo Rings™ appeared in the 2023 season of La France a un Incroyable Talent, the renowned talent show broadcast by France's national channel M6. Throughout the show they delivered three standout performances, bringing audiences and judges a unique artistic proposal blending love, passion, creativity and high-level acrobatics in the only duo aerial rings act of its kind. Their performance earned a great ovation from the audience, praised for the genuine connection between the two artists, the originality of their figures and the mix of strength, elegance and risk that defines Duo Rings™. The season was hosted by Karine Le Marchand, with a jury made up of Hélène Ségara, Marianne James, Éric Antoine and Sugar Sammy.",
    images: ["/media/shows/france-1.jpg", "/media/shows/france-2.jpg"],
  },
  {
    slug: "spain-got-talent-2023",
    year: "2023",
    yearEn: "2023",
    location: "Telecinco, España",
    locationEn: "Telecinco, Spain",
    titleEs: "Spain Got Talent – All Stars",
    titleEn: "Spain Got Talent – All Stars",
    descEs:
      "Duo Rings™ participó en el especial Spain Got Talent: All Stars, emitido por Telecinco, una producción televisiva que reúne a algunos de los mejores talentos de distintas ediciones de Got Talent alrededor del mundo en un formato internacional de alto nivel. El programa fue presentado por Santi Millán, con la participación del jurado habitual compuesto por Edurne, Risto Mejide, Dani Martínez y Paula Echevarría, figuras reconocidas de la televisión y el entretenimiento en España. En este escenario, Duo Rings™ presentó una performance de anillas aéreas con una estética sensual, elegante y de alto impacto visual, destacando por su conexión, precisión técnica y fuerte identidad artística dentro de una selección de talentos de élite internacional.",
    descEn:
      "Duo Rings™ took part in the Spain Got Talent: All Stars special, broadcast by Telecinco, a television production bringing together some of the best talents from different Got Talent editions around the world in a high-level international format. The show was hosted by Santi Millán, with the regular jury of Edurne, Risto Mejide, Dani Martínez and Paula Echevarría, well-known figures of Spanish television and entertainment. On this stage, Duo Rings™ delivered an aerial rings performance with a sensual, elegant and visually striking aesthetic, standing out for their connection, technical precision and strong artistic identity within a selection of elite international talent.",
    images: ["/media/shows/spain-1.jpg", "/media/shows/spain-2.jpg"],
  },
  {
    slug: "rising-symphony-2023",
    year: "2023",
    yearEn: "2023",
    location: "KKL Luzern, Suiza",
    locationEn: "KKL Luzern, Switzerland",
    titleEs: "Rising a Circus Symphony",
    titleEn: "Rising a Circus Symphony",
    descEs:
      "Duo Rings™ formó parte de Rising a Circus Symphony en el emblemático KKL Luzern (Lucerne Culture and Congress Centre), una producción que fusiona música sinfónica en vivo con artes circenses de alto nivel. El espectáculo contó con la participación de la Orquesta Sinfónica de Lucerna y fue producido por Obrass Concerts, reuniendo a músicos y artistas internacionales en una experiencia escénica única donde la música clásica y la acrobacia se encuentran en tiempo real. En esta ocasión, Duo Rings™ presentó su acto de anillas aéreas en diálogo directo con la orquesta, integrando su lenguaje de fuerza, conexión y movimiento dentro de una interpretación sinfónica de gran formato inspirada en la obra de Lalo, en un entorno de máxima excelencia artística en uno de los auditorios más prestigiosos de Europa.",
    descEn:
      "Duo Rings™ were part of Rising a Circus Symphony at the iconic KKL Luzern (Lucerne Culture and Congress Centre), a production that fuses live symphonic music with high-level circus arts. The show featured the Lucerne Symphony Orchestra and was produced by Obrass Concerts, gathering international musicians and artists in a unique experience where classical music and acrobatics meet in real time. On this occasion, Duo Rings™ performed their aerial rings act in direct dialogue with the orchestra, weaving their language of strength, connection and movement into a large-scale symphonic interpretation inspired by the work of Lalo, in a setting of the highest artistic excellence at one of Europe's most prestigious auditoriums.",
    videoUrl: "https://www.youtube.com/watch?v=ZvVJ2S-U20U",
    images: ["/media/shows/rising-1.jpg", "/media/shows/rising-2.jpg"],
  },
  {
    slug: "chateau-garrigue-2022",
    year: "2022",
    yearEn: "2022",
    location: "Toulouse, Francia",
    locationEn: "Toulouse, France",
    titleEs: "Christmas Show – Château de la Garrigue",
    titleEn: "Christmas Show – Château de la Garrigue",
    descEs:
      "Duo Rings™ formó parte del Christmas Show en el Château de la Garrigue, una elegante y exclusiva producción navideña en la región de Toulouse, Francia, realizada en un entorno privado para la familia Hassim. En este escenario refinado e íntimo, presentaron su acto de anillas aéreas, combinando fuerza, conexión y acrobacia con una estética sensual, sutil y sofisticada, especialmente adaptada a la atmósfera del evento. Una performance de alto impacto emocional donde cada movimiento se vivió de cerca, potenciando la magia y la experiencia del público.",
    descEn:
      "Duo Rings™ took part in the Christmas Show at Château de la Garrigue, an elegant and exclusive holiday production in the Toulouse region of France, held in a private setting for the Hassim family. On this refined, intimate stage, they performed their aerial rings act, combining strength, connection and acrobatics with a sensual, subtle and sophisticated aesthetic specially adapted to the atmosphere of the event. A performance of high emotional impact where every movement was experienced up close, heightening the magic and the experience.",
    videoUrl: "https://www.youtube.com/watch?v=jgwnfJ6yS1g",
    images: [
      "/media/shows/chateau-1.jpg",
      "/media/shows/chateau-2.jpg",
      "/media/shows/chateau-3.jpg",
      "/media/shows/chateau-4.jpg",
    ],
  },
  {
    slug: "spirit-show-2022",
    year: "2022–2023",
    yearEn: "2022–2023",
    location: "Alemania — Arena Tour (22 ciudades)",
    locationEn: "Germany — Arena Tour (22 cities)",
    titleEs: "Spirit Show – Germany Tour",
    titleEn: "Spirit Show – Germany Tour",
    descEs:
      "Duo Rings™ formó parte del Spirit Show, una de las giras de arenas más grandes de Alemania, que recorrió 22 ciudades en distintos estadios y venues de gran formato. La producción incluyó presentaciones en escenarios icónicos como el Olympiastadion de Múnich, donde fueron vistos por más de 20.000 personas en una sola función, y el Uber Arena Berlin, también con audiencias de más de 20.000 espectadores. Bajo la dirección de Heidi Aguilar y con música original de Rick Jurde, Duo Rings™ presentó un acto de anillas aéreas de alto impacto emocional, combinando fuerza, conexión y narrativa escénica, con una propuesta artística que emocionó hasta las lágrimas al público.",
    descEn:
      "Duo Rings™ were part of the Spirit Show, one of Germany's largest arena tours, travelling to 22 cities across major stadiums and large-format venues. The production included performances at iconic venues such as the Olympiastadion in Munich, where they were seen by more than 20,000 people in a single show, and the Uber Arena Berlin, also with audiences of over 20,000. Directed by Heidi Aguilar and with original music by Rick Jurde, Duo Rings™ delivered an aerial rings act of high emotional impact, combining strength, connection and stage narrative in an artistic piece that moved audiences to tears.",
    videoUrl: "https://www.youtube.com/watch?v=u7k4me61WEw&t=1s",
    images: [
      "/media/shows/spirit-1.jpg",
      "/media/shows/spirit-2.jpg",
      "/media/shows/spirit-3.jpg",
      "/media/shows/spirit-4.jpg",
      "/media/shows/spirit-5.jpg",
    ],
  },
  {
    slug: "agt-season-17",
    year: "2022",
    yearEn: "2022",
    location: "NBC, EE.UU.",
    locationEn: "NBC, USA",
    titleEs: "America's Got Talent — Season 17",
    titleEn: "America's Got Talent — Season 17",
    descEs:
      "Duo Rings™ participó en America's Got Talent, uno de los programas de talentos más importantes del mundo, emitido por la cadena NBC en Estados Unidos y con alcance global. El programa fue presentado por Terry Crews y el jurado estuvo conformado por Simon Cowell, Heidi Klum, Howie Mandel y Sofía Vergara, referentes internacionales del entretenimiento y la televisión. Su presentación en el escenario se volvió viral y tuvo fuerte repercusión en la televisión argentina, destacándose por su originalidad dentro del formato de anillas aéreas en dúo. La performance recibió una ovación del jurado y del público, consolidando su impacto dentro de la competencia y llevando su arte a una audiencia internacional masiva.",
    descEn:
      "Duo Rings™ appeared on America's Got Talent, one of the world's most important talent shows, broadcast by NBC in the United States with global reach. The show was hosted by Terry Crews, with a jury of Simon Cowell, Heidi Klum, Howie Mandel and Sofía Vergara, international icons of entertainment and television. Their performance went viral and had strong resonance on Argentine television, standing out for its originality within the duo aerial rings format. The act earned an ovation from both jury and audience, cementing its impact in the competition and bringing their art to a massive international audience.",
    featured: "agt",
    images: ["/media/shows/agt-1.jpg", "/media/shows/agt-2.jpg"],
  },
  {
    slug: "circo-italia-latina-2022",
    year: "2022",
    yearEn: "2022",
    location: "Latina, Italia",
    locationEn: "Latina, Italy",
    titleEs: "Festival Internazionale del Circo d'Italia",
    titleEn: "Festival Internazionale del Circo d'Italia",
    descEs:
      "Duo Rings™ formó parte del Festival Internazionale del Circo d'Italia 2022, realizado en la ciudad de Latina, Italia. Duo Rings presentó su acto de anillas aéreas dentro de la programación del festival, destacándose por su propuesta de dúo, conexión y acrobacia original.",
    descEn:
      "Duo Rings™ were part of the Festival Internazionale del Circo d'Italia 2022, held in the city of Latina, Italy. Duo Rings performed their aerial rings act within the festival programme, standing out for their duo format, connection and original acrobatics.",
    images: [
      "/media/shows/latina-1.jpg",
      "/media/shows/latina-2.jpg",
      "/media/shows/latina-3.jpg",
      "/media/shows/latina-4.jpg",
    ],
  },
  {
    slug: "elefante-de-oro-girona",
    year: "2021",
    yearEn: "2021",
    location: "Girona, Cataluña",
    locationEn: "Girona, Catalonia",
    titleEs: "Festival Internacional de Circ – Elefante de Oro",
    titleEn: "Festival Internacional de Circ – Golden Elephant",
    descEs:
      "Duo Rings™ participó en el Festival Internacional de Circ – Elefante de Oro en Girona, Cataluña, en el marco de su 10.º aniversario, marcando su primera presentación en Europa con su acto de anillas aéreas. En esta ocasión, presentaron por primera vez su performance con música original en vivo interpretada por la Orquesta de París, elevando la propuesta a una experiencia sinfónica y escénica de gran impacto. El acto, protagonizado por un dúo de hombre y mujer, se destacó por su originalidad, conexión y lenguaje acrobático innovador, cautivando a la audiencia con una propuesta nunca antes vista.",
    descEn:
      "Duo Rings™ took part in the Festival Internacional de Circ – Elefante de Oro in Girona, Catalonia, during its 10th anniversary edition, marking their first performance in Europe with their aerial rings act. On this occasion, they premiered their performance with original live music played by the Orchestra of Paris, elevating the piece into a symphonic and theatrical experience of great impact. The act — a man-and-woman duo — stood out for its originality, connection and innovative acrobatic language, captivating audiences with something never seen before.",
    images: ["/media/shows/girona-1.jpg"],
  },
  {
    slug: "tu-si-que-vales-2021",
    year: "2021",
    yearEn: "2021",
    location: "Mediaset Italia (Canale 5), Roma",
    locationEn: "Mediaset Italia (Canale 5), Rome",
    titleEs: "Tú Sí Que Vales",
    titleEn: "Tú Sí Que Vales",
    descEs:
      "Duo Rings™ participó en el programa de televisión Tú Sí Que Vales, emitido por Canale 5 (Mediaset Italia), uno de los formatos de talentos más vistos de la televisión italiana y europea. El programa es conducido por Belén Rodríguez, Martín Castrogiovanni y Alessio Sakara, con un jurado integrado por Maria De Filippi, Gerry Scotti, Rudy Zerbi y Teo Mammucari, junto al jurado popular del público en estudio. La grabación se realizó en la ciudad de Roma, donde Duo Rings realizó su primera presentación en televisión europea, sorprendiendo al jurado y al público con su acto original de anillas aéreas en dúo.",
    descEn:
      "Duo Rings™ appeared on the television show Tú Sí Que Vales, broadcast by Canale 5 (Mediaset Italia), one of the most-watched talent formats on Italian and European television. The show is hosted by Belén Rodríguez, Martín Castrogiovanni and Alessio Sakara, with a jury of Maria De Filippi, Gerry Scotti, Rudy Zerbi and Teo Mammucari, alongside the studio audience's popular jury. Filmed in Rome, this was Duo Rings' first appearance on European television, surprising both jury and audience with their original duo aerial rings act.",
    images: ["/media/shows/girona-1.jpg"],
  },
  {
    slug: "cirque-joya",
    year: "2018–2020",
    yearEn: "2018–2020",
    location: "Riviera Maya, México — Vidanta",
    locationEn: "Riviera Maya, Mexico — Vidanta",
    titleEs: "Cirque du Soleil – JOYÀ",
    titleEn: "Cirque du Soleil – JOYÀ",
    descEs:
      'Duo Rings™ formó parte del espectáculo residente JOYÀ de Cirque du Soleil, presentado en la Riviera Maya, México, dentro del complejo Vidanta. Desde 2018 hasta 2020, participaron con su acto de anillas aéreas en esta producción de formato "dinner show", una experiencia inmersiva que combina gastronomía, teatro y artes escénicas en un entorno íntimo y de alto nivel artístico. Su presencia aportó una propuesta de fuerza, conexión y acrobacia dentro de una de las residencias más emblemáticas del Cirque du Soleil en Latinoamérica.',
    descEn:
      'Duo Rings™ were part of Cirque du Soleil\'s resident show JOYÀ, staged in the Riviera Maya, Mexico, within the Vidanta complex. From 2018 to 2020, they performed their aerial rings act in this "dinner show" format, an immersive experience combining gastronomy, theatre and performing arts in an intimate, high-level artistic setting. Their presence brought strength, connection and acrobatics to one of Cirque du Soleil\'s most emblematic residencies in Latin America.',
    featured: "cirque",
    videoUrl: "https://www.youtube.com/watch?v=9AAtGKfrBEM",
    images: [],
  },
  {
    slug: "cirque-septimo-dia",
    year: "2016–2018",
    yearEn: "2016–2018",
    location: "Latinoamérica",
    locationEn: "Latin America",
    titleEs: "Cirque du Soleil × Soda Stereo – Sépt7imo Día",
    titleEn: "Cirque du Soleil × Soda Stereo – Sépt7imo Día",
    descEs:
      "Duo Rings formó parte de Sépt7imo Día – No Descansaré, la mega producción de Cirque du Soleil en colaboración con PopArt Music y la música de Soda Stereo, considerada uno de los espectáculos más importantes del entretenimiento en vivo en América Latina. El show fue un récord histórico de ventas, superando más de 1 millón de tickets vendidos en menos de un año, con una gira que recorrió múltiples países de América y una respuesta de público sin precedentes. En Buenos Aires, el espectáculo tuvo una de sus residencias más icónicas en el Estadio Luna Park, donde realizó 73 funciones completamente agotadas. Dirigido por Michel Laprise, el show fusionó acrobacia, teatro físico y el universo musical de Soda Stereo en una experiencia inmersiva única.",
    descEn:
      "Duo Rings were part of Sépt7imo Día – No Descansaré, the mega-production by Cirque du Soleil in collaboration with PopArt Music and the music of Soda Stereo, considered one of the most important live-entertainment shows in Latin America. The show broke historic sales records, selling more than 1 million tickets in under a year, with a tour across multiple countries in the Americas and an unprecedented audience response. In Buenos Aires, it held one of its most iconic residencies at the Luna Park Stadium, with 73 completely sold-out performances. Directed by Michel Laprise, the show fused acrobatics, physical theatre and the musical universe of Soda Stereo into a unique immersive experience.",
    featured: "cirque",
    images: [
      "/media/shows/septimo-1.jpg",
      "/media/shows/septimo-2.jpg",
      "/media/shows/septimo-3.jpg",
      "/media/shows/septimo-4.jpg",
      "/media/shows/septimo-5.jpg",
      "/media/shows/septimo-6.jpg",
    ],
  },
  {
    slug: "seleccion-argentina",
    year: "2006–2016",
    yearEn: "2006–2016",
    location: "El origen",
    locationEn: "The beginning",
    titleEs: "Selección Argentina de Gimnasia",
    titleEn: "Argentine National Gymnastics Team",
    descEs:
      "Flora y Nico formaron parte de la Selección Argentina de Gimnasia durante más de 10 años, representando al país en disciplinas de gimnasia artística y rítmica respectivamente. A lo largo de sus carreras deportivas, compitieron a nivel nacional e internacional, consolidándose entre los mejores atletas de Argentina. Ambos se destacaron dentro del top 5 del ranking nacional y participaron en importantes competencias como los Juegos ODESUR, Juegos Panamericanos, Juegos Sudamericanos y diversos torneos internacionales. Su historia comenzó en el Centro Nacional de Alto Rendimiento Deportivo (CeNARD), donde se conocieron cuando Flora tenía 15 años y Nico 17, entrenando dentro del sistema de alto rendimiento argentino. Esa base deportiva marcó el inicio de un recorrido que luego evolucionaría hacia el mundo del circo contemporáneo, el alto rendimiento artístico y la creación de Duo Rings™.",
    descEn:
      "Flora and Nico were part of the Argentine National Gymnastics Team for over 10 years, representing the country in artistic and rhythmic gymnastics respectively. Throughout their athletic careers they competed nationally and internationally, establishing themselves among Argentina's top athletes. Both ranked within the national top 5 and competed in major events such as the ODESUR Games, the Pan American Games, the South American Games and various international tournaments. Their story began at the National High-Performance Sports Centre (CeNARD), where they met when Flora was 15 and Nico 17, training within the Argentine high-performance system. That athletic foundation marked the beginning of a journey that would later evolve into the world of contemporary circus, high-level artistic performance and the creation of Duo Rings™.",
    images: [],
  },
];

export const partnerLogos = [
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/68651d91f30b952b837c4b0c.png",
    alt: "Partner logo 1",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/6865155cf92707f1a61e32f9.png",
    alt: "Partner logo 2",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/6865155c38934f73f41aba5b.png",
    alt: "Partner logo 3",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/6865155cd60a231f8b780feb.png",
    alt: "Partner logo 4",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/6895d7d6649372f8cdcfcadb.png",
    alt: "Partner logo 5",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/6865155cd60a233c23780fea.png",
    alt: "Partner logo 6",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/68651340d60a2373ad77fccc.png",
    alt: "Partner logo 7",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/6865155cd60a233816780fe9.png",
    alt: "Partner logo 8",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/6865155cf9270748fa1e32fa.png",
    alt: "Partner logo 9",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/6865155c38934f7dd51aba5a.png",
    alt: "Partner logo 10",
  },
  {
    src: "https://assets.cdn.filesafe.space/fUgdbkBCuxZwFNmjhlGI/media/6865155cd60a230806780fe8.png",
    alt: "Partner logo 11",
  },
];

export const socialLinks = [
  {
    label: "@duorings",
    href: "https://www.instagram.com/duorings/",
    iconPath:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "@floraracama",
    href: "https://www.instagram.com/floraracama/",
    iconPath:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "@bussonico",
    href: "https://www.instagram.com/bussonico/",
    iconPath:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheRingsMethod",
    iconPath:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];
