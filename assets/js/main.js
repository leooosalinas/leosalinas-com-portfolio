// Contenido de las fotografías y de las tarjetas de la galería del portfolio.
const photos = [
    {
        title: "Igna",
        description: "Igna. Nos conocimos durante mi época produciendo eventos, particularmente nos conocimos produciendo 'FestiGame'. Retrato en El Raval.",
        location: "El Raval, Barcelona",
        image: "https://leosalinas.com/img/photos/igna-lopez-barrio-raval.jpg",
        alt: "Igna López",
        frame: "#1a1a1a",
        frameSize: 1
    },
    {
        title: "Rafael",
        description: "Rafa, dueño del Atòmïc Bar en Gràcia. Observando la calle durante un día de Festa Major.",
        location: "Atòmïc Bar - Gràcia, Barcelona",
        image: "https://leosalinas.com/img/photos/rafa-atomic-bar.jpeg",
        alt: "Rafael de Atòmïc Bar",
        frame: "#ba8d5b",
        frameSize: 3
    },
    {
        title: "Paola, Entre Latas",
        description: "Paola debe ser de las personas que más acostumbro a ver sonreír en el barrio.",
        location: "'Entre Latas' - Gràcia, Barcelona",
        image: "https://leosalinas.com/img/photos/paola-entre-latas.jpeg",
        alt: "Paola de Entre Latas",
        frame: "#241c18",
        frameSize: 5
    },
    {
        title: "Timón",
        description: "Timón, el perro más noble del barrio de Gràcia en Atòmïc Bar.",
        location: "Atòmïc Bar - Gràcia, Barcelona",
        image: "https://leosalinas.com/img/photos/timon-atomic-bar.jpg",
        alt: "Timón en Atòmïc Bar",
        frame: "#fff",
        frameSize: 2
    },
    {
        title: "La Pemy",
        description: "Pablo y Pemy disfrutando de una tarde de descanso en el sofá.",
        location: "Ñuñoa - Santiago, Chile",
        image: "https://leosalinas.com/img/photos/pablo-pemy.jpg",
        alt: "Pablo y Pemy",
        frame: "#d8b888",
        frameSize: 4,
        ratio: "3 / 2"
    },
    {
        title: "Care' Hiena en Hornopirén",
        description: "Paseo por el sur de Chile junto a Care' Hiena y el Volcán Hornopirén de fondo.",
        location: "Hornopirén, Chile",
        image: "https://leosalinas.com/img/photos/care-hiena-volcan-hornopiren.jpg",
        alt: "Care Hiena en Chile",
        frame: "#1a1a1a",
        frameSize: 1
    },
    {
        title: "Yelli & Simy",
        description: "Retrato cotidiano de Yelli y Simy en la pastelería del barrio.",
        location: "Gràcia, Barcelona",
        image: "https://leosalinas.com/img/photos/yelli-simy-pastisseria.jpeg",
        alt: "Yelli y Simy Pastisseria",
        frame: "#5c2419",
        frameSize: 3
    },
    {
        title: "Citroën en El Clot",
        description: "Un vehículo clásico aparcado pacientemente entre las calles del barrio de El Clot.",
        location: "El Clot, Barcelona",
        image: "https://leosalinas.com/img/photos/citroen-parked-barcelona-el-clot.jpg",
        alt: "Citroën aparcado en El Clot",
        frame: "#6e543c",
        frameSize: 5
    }
];

// Sustituye estos ejemplos por los datos definitivos; las descripciones admiten hasta 40 caracteres.
const galleryItems = [
    {
        category: "Estrategia y Marca",
        title: "Juegaesports.com",
        description: "Co-Fundador & Editor General para plataforma de noticias y contenido de esports en Latinoamérica.",
        image: "https://leosalinas.com/img/portfolio/juegaesports-mmonch-valorant-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
        alt: "Juegaesports.com, Noticias y Contenido de Esports en Latinoamérica",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/juegaesports-mmonch-valorant-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Mmonch, jugadora profesional de VALORANT, Juegaesports.com"
            },
            {
                src: "https://leosalinas.com/img/portfolio/counter-strike-juegaesports-almendruza-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "El fracaso silencioso de Counter-Strike 2, escrito por Almendruza, Juegaesports.com"
            },
            {
                src: "https://leosalinas.com/img/portfolio/ea-fc-26-global-qualifier-juegaesports-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Los mejores jugadores de Latinoamérica rumbo al Global Qualifier EA FC 26"
            },
            {
                src: "https://leosalinas.com/img/portfolio/adverso-valorant-juegaesports-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Adverso, jugador profesional de VALORANT, Juegaesports.com"
            }
        ],
        href: "#",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "Kaos Latin Gamers",
        description: "Director de Proyecto para relanzamiento de club de esports con presencia en Chile.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/agardash-kaos-latin-gamers-klg-fifa-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Matías 'Agardash' Flores, Pro Player EA FC, Kaos Latin Gamers"
            },
            {
                src: "https://leosalinas.com/img/portfolio/emilio-cordero-kaos-latin-gamers-klg-pokemon-tcg-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Emilio Cordero, Pro Player Pokémon TCG, Kaos Latin Gamers"
            },
            {
                src: "https://leosalinas.com/img/portfolio/juan-andree-kaos-latin-gamers-klg-pokemon-tcg-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Juan Andree, Pro Player Pokémon TCG, Kaos Latin Gamers"
            },
            {
                src: "https://leosalinas.com/img/portfolio/valorant-kaos-latin-gamers-klg-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Equipo VALORANT, Kaos Latin Gamers"
            }
        ],
        href: "#",
        newTab: false
    },
    {
        category: "Estrategia y Marca",
        title: "Ring Royale",
        description: "Lead de Estrategia de Marca y Comunicación en la fase de pre-lanzamiento de nuevo evento de boxeo entre celebridades en México.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/ring-royale-karely-ruiz-marcela-mistral-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Karely Ruiz vs Marcela Mistral, Ring Royale"
            },
            {
                src: "https://leosalinas.com/img/portfolio/ring-royale-poncho-de-nigris-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Poncho de Nigris, Ring Royale"
            },
            {
                src: "https://leosalinas.com/img/portfolio/ring-royale-arena-monterrey-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Ring Royale, 15 de marzo 2026, Arena Monterrey"
            }
        ],
        href: "#",
        newTab: false
    },
    {
        categories: ["Estrategia y Marca", "Eventos"],
        title: "FestiGame Chile & Colombia",
        description: "Director de Contenidos para uno de los eventos masivos de videojuegos y cultura gaming más importante de Sudamérica.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/festigame-coca-cola-chile-2018-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "FestiGame Coca-Cola 2018"
            },
            {
                src: "https://leosalinas.com/img/portfolio/festigame-booth-playstation-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "FestiGame, booth PlayStation"
            },
            {
                src: "https://leosalinas.com/img/portfolio/festigame-publico-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "FestiGame, público en escenario principal"
            },
            {
                src: "https://leosalinas.com/img/portfolio/festigame-publico-entradas-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "FestiGame, entrada público"
            },
            {
                src: "https://leosalinas.com/img/portfolio/festigame-fifa-stage-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "FestiGame, Final FIFA, relatado por Fernando Palomo y Mario Alberto Kempes"
            },
            {
                src: "https://leosalinas.com/img/portfolio/festigame-just-dance-pedro-morales-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "FestiGame, competencia Just Dance, Pedro Morales"
            },
            {
                src: "https://leosalinas.com/img/portfolio/festigame-fanta-animadores-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "FestiGame Fanta, animadores"
            },
            {
                src: "https://leosalinas.com/img/portfolio/festigame-entrevista-cnn-chile-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "FestiGame, entrevista Leonardo Salinas en CNN Chile"
            },
            {
                src: "https://leosalinas.com/img/portfolio/festigame-ed-boon-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Ed Boon (co-creador de Mortal Kombat) junto a Leonardo Salinas, Director de Contenido de FestiGame"
            }
        ],
        href: "#",
        newTab: false
    },
    {
        category: "Estrategia y Marca",
        title: "LUX Fight League",
        description: "Jefe de Comunicaciones para la liga de Artes Marciales Mixtas (MMA) con más reconocimiento en México y Latinoamérica.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/lux-fight-league-leonardo-salinas-lux-023-marco-beltran-fito-rubio.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "LUX Fight League, LUX 023, Marco Beltrán vs Fito Rubio"
            },
            {
                src: "https://leosalinas.com/img/portfolio/lux-fight-league-lux-030-fight-card.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "LUX Fight League, Fight Card, LUX 030"
            },
            {
                src: "https://leosalinas.com/img/portfolio/lux-fight-league-030-bam-bam-valenzuela-nayib-lopez-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "LUX Fight League, Ivan Bam Bam Valenzuela vs Nayib El Cachorro López"
            },
            {
                src: "https://leosalinas.com/img/portfolio/lux-fight-league-lux-021-monterrey-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "LUX Fight League, LUX 021, Ponte Al Tiro Monterrey"
            },
            {
                src: "https://leosalinas.com/img/portfolio/lux-fight-league-erik-silva-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "LUX Fight League, Erik The King Silva, Featherweight Champion"
            },
            {
                src: "https://leosalinas.com/img/portfolio/lux-fight-league-leonardo-salinas-lazy-boy-rodriguez.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "LUX Fight League, Lazy Boy Rodríguez"
            }
        ],
        href: "#",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "Land Vegas",
        description: "Lead de Comunicación y Marca para proyecto de casino y entretenimiento digital a través de gafas de Realidad Virtual (VR).",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/land-vegas-vr-person-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Land Vegas, Gaming Metaverse, VR Person"
            },
            {
                src: "https://leosalinas.com/img/portfolio/land-vegas-event-g2e-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Land Vegas, Gaming Metaverse, G2E Event"
            },
            {
                src: "https://leosalinas.com/img/portfolio/land-vegas-gaming-metaverse-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Land Vegas, Gaming Metaverse"
            }
        ],
        href: "#",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "Sprint Gaming",
        description: "Social Media Lead para empresa de servicios de casino en vivo, con sede en San Lorenzo, Paraguay.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/sprint-gaming-live-dealer-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Live Dealer de Sprint Gaming"
            },
            {
                src: "https://leosalinas.com/img/portfolio/sprint-gaming-mobile-games-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Mobile Games de Sprint Gaming"
            },
            {
                src: "https://leosalinas.com/img/portfolio/sprint-gaming-jesus-campos-ceo-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Jesús Campos, CEO de Sprint Gaming"
            }
        ],
        href: "#",
        newTab: false
    },
    {
        category: "Estrategia y Marca",
        title: "Symi Pastisseria",
        description: "Especialista en Marca y Contenido Digital para exclusiva pastelería artesanal en el barrio de Sants, en Barcelona.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/symi-pastisseria-dulces-historias-amor-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Dulces historias de amor, creadas por Symi Pastisseria"
            },
            {
                src: "https://leosalinas.com/img/portfolio/symi-pastisseria-bombones-san-valentin-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Bombones de San Valentín en Symi Pastisseria"
            },
            {
                src: "https://leosalinas.com/img/portfolio/symi-pastisseria-postre-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Postre en Symi Pastisseria"
            },
            {
                src: "https://leosalinas.com/img/portfolio/symi-pastisseria-obrador-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Obrador Symi Pastisseria"
            },
            {
                src: "https://leosalinas.com/img/portfolio/symi-pastisseria-linda-parenzan-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Linda Parenzan, fundadora de Symi Pastisseria"
            }
        ],
        href: "#",
        buttonText: "Ver proyecto",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "Rostisseria Tony's",
        description: "Levantamiento de Marca y Branding para popular local de pollos asados y comida preparada en Palamós, Girona.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/rostisseria-tonys-carta-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Rostisseria Tony's, Carta"
            },
            {
                src: "https://leosalinas.com/img/portfolio/rostisseria-tonys-motos-delivery-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Rostisseria Tony's, Moto Delivery"
            },
            {
                src: "https://leosalinas.com/img/portfolio/rostisseria-tonys-local-palamos-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Rostisseria Tony's, Local, Palamós, Girona"
            },
            {
                src: "https://leosalinas.com/img/portfolio/rostisseria-tonys-logo-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Rostisseria Tony's, Logo"
            }
        ],
        href: "#",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "Atòmïc Bar",
        description: "Desarrollo de carta online y QR de acceso para popular bar en el centro de La Vila de Gràcia, en Barcelona",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/atomic-bar-homepage-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Atòmïc Bar, Homepage"
            },
            {
                src: "https://leosalinas.com/img/portfolio/atomic-bar-carta-online-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Atòmïc Bar, Carta Online"
            }
        ],
        href: "#",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "Nailash Experience",
        description: "Lanzamiento integral de marca y estrategia visual para Centro de Estética en El Prat de Llobregat",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/nailash-experience-papeleria-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Nailash Experience, Papelería"
            },
            {
                src: "https://leosalinas.com/img/portfolio/nailash-experience-carta-servicios-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Nailash Experience, Carta de Servicios"
            },
            {
                src: "https://leosalinas.com/img/portfolio/la-femme-beauty-alba-grima-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "La Femme Beauty, Alba Grima"
            },
            {
                src: "https://leosalinas.com/img/portfolio/nailash-experience-unas-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Nailash Experience, Servicio de Uñas"
            }
        ],
        href: "#",
        newTab: false
    },
    {
        category: "Estrategia y Marca",
        title: "Coworking Epicentre Palamós",
        description: "Desarrollo de contenido corporativo para las redes sociales de un espacio de trabajo y coworking ubicado en Palamós, Girona",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/epicentre-coworking-palamos-desenvolupa-idees-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Coworking Epicentre Palamós, desenvolupa les teves idees"
            },
            {
                src: "https://leosalinas.com/img/portfolio/epicentre-coworking-palamos-recepcio-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Coworking Epicentre Palamós, recepció"
            },
            {
                src: "https://leosalinas.com/img/portfolio/epicentre-coworking-palamos-info-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Coworking Epicentre Palamós, info de contacto"
            },
            {
                src: "https://leosalinas.com/img/portfolio/epicentre-coworking-palamos-espai-treball-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Coworking Epicentre Palamós, espai de treball"
            },
            {
                src: "https://leosalinas.com/img/portfolio/epicentre-coworking-palamos-horari-funcionament-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Coworking Epicentre Palamós, horari de funcionament"
            },
            {
                src: "https://leosalinas.com/img/portfolio/epicentre-coworking-palamos-jornada-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
                alt: "Coworking Epicentre Palamós, jornada de trabajo"
            }
        ],
        href: "#",
        newTab: true
    },
    {
        category: "Eventos",
        title: "Formula-E Santiago ePrix 2020",
        description: "FIA Runner para el Santiago ePrix 2020 de Formula-E, realizado en el Parque O'Higgins.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/formula-e-fia-runner-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Santiago ePrix 2020 Formula E, Leonardo Salinas, FIA Runner"
            },
            {
                src: "https://leosalinas.com/img/portfolio/formula-e-stewards-office-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Santiago ePrix 2020 Formula E, Steward's Office"
            },
            {
                src: "https://leosalinas.com/img/portfolio/formula-e-rear-car-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Santiago ePrix 2020 Formula E, rear of a Racing Car"
            },
            {
                src: "https://leosalinas.com/img/portfolio/formula-e-front-wing-tcheetah-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Santiago ePrix 2020 Formula E, front wing from Tcheetah Racing Team"
            },
            {
                src: "https://leosalinas.com/img/portfolio/formula-e-fia-runner-podium-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Santiago ePrix 2020 Formula E, Leonardo Salinas, FIA Runner, en el podio después de la celebración"
            }
        ],
        href: "#",
        newTab: false
    },
    {
        categories: ["Estrategia y Marca", "Eventos"],
        title: "Gamertón by FestiGame (Teletón 2018)",
        description: "Co-Producción y Dirección de Contenidos para evento presencial y televisado a nivel nacional durante 'Teletón 2018'.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/gamerton-festigame-2018-logotipo-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Logotipo de Gamertón by FestiGame, durante Teletón 2018"
            },
            {
                src: "https://leosalinas.com/img/portfolio/gamerton-festigame-escenario-publico-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Escenario de Gamertón by FestiGame, durante Teletón 2018"
            },
            {
                src: "https://leosalinas.com/img/portfolio/gamerton-festigame-ignacia-antonia-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Presencia de la influencer Ignacia Antoni en Gamertón by FestiGame, durante Teletón 2018"
            },
            {
                src: "https://leosalinas.com/img/portfolio/gamerton-festigame-vr-realidad-virtual-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Espacio de Realidad Virtual (VR) en Gamertón by FestiGame, durante Teletón 2018"
            }
        ],
        href: "#",
        newTab: true
    },
    {
        categories: ["Estrategia y Marca", "Eventos"],
        title: "Expo Diversidad 2018",
        description: "Co-Productor & Gestión de Crisis de Comunicación para nuevo evento que celebra la diversidad junto a la comunidad LGBTIQ+ en Santiago de Chile.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/expo-diversidad-presentacion-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Presentación de Expo Diversidad 2018"
            },
            {
                src: "https://leosalinas.com/img/portfolio/expo-diversidad-los-40-media-partner-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Presentación de Los 40 como Media Partner de Expo Diversidad 2018"
            },
            {
                src: "https://leosalinas.com/img/portfolio/expo-diversidad-marcha-logotipo-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Marcha y Presentación de Expo Diversidad 2018 a través de marketing callejero"
            },
            {
                src: "https://leosalinas.com/img/portfolio/expo-diversidad-alessia-injoque-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Charla de Alessia Injoque durante Expo Diversidad 2018"
            },
            {
                src: "https://leosalinas.com/img/portfolio/expo-diversidad-drag-queen-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Drag Queen presente en Expo Diversidad 2018"
            },
            {
                src: "https://leosalinas.com/img/portfolio/expo-diversidad-drag-queens-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Show de Drag Queens en Expo Diversidad 2018"
            }
        ],
        href: "#",
        newTab: false
    },
    {
        category: "Eventos",
        title: "ExpoNauta 2014 & 2015",
        description: "Co-Producción de Contenidos y Apoyo Logístico para feria y encuentro tecnológico escolar, producido para el Ministerio de Educación de Chile.",
        images: [
            {
                src: "https://leosalinas.com/img/portfolio/exponauta-logotipo-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Logotipo de ExpoNauta"
            },
            {
                src: "https://leosalinas.com/img/portfolio/exponauta-taller-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Taller para escolares en ExpoNauta"
            },
            {
                src: "https://leosalinas.com/img/portfolio/exponauta-layout-2014-asistentes-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Layout de ExpoNauta 2014"
            },
            {
                src: "https://leosalinas.com/img/portfolio/exponauta-layout-2015-asistentes-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Layout de ExpoNauta 2015"
            },
            {
                src: "https://leosalinas.com/img/portfolio/exponauta-taller-robotica-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Taller de Robótica durante ExpoNauta"
            },
            {
                src: "https://leosalinas.com/img/portfolio/exponauta-taller-computacion-leonardo-salinas.webp?auto=format&fit=crop&w=900&q=80",
                alt: "Taller de Computación en ExpoNauta"
            }
        ],
        href: "#",
        newTab: true
    },
    /*
    {
        category: "Vídeos",
        title: "Conversaciones reales",
        description: "Voces y relatos en primera persona",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
        alt: "Micrófono en un espacio de grabación",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Vídeos",
        title: "Un minuto de Barcelona",
        description: "Barcelona en sesenta segundos",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
        alt: "Cámara capturando una escena urbana",
        href: "https://example.com/video-barcelona",
        newTab: true
    },
    {
        category: "Proyectos Propios",
        title: "Mapa de rincones",
        description: "Una guía personal de rincones favoritos",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
        alt: "Mapa abierto para planificar una ruta",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Proyectos Propios",
        title: "Archivo de ideas",
        description: "Un espacio para guardar nuevas ideas",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
        alt: "Cuaderno abierto con notas e ideas",
        href: "https://example.com/archivo-de-ideas",
        newTab: true
    },
    {
        category: "Proyectos Propios",
        title: "Ventanas de Barcelona",
        description: "Postales de la ciudad entre edificios",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80",
        alt: "Vista de una ciudad entre edificios",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Proyectos Propios",
        title: "Cuaderno de barrio",
        description: "Notas sobre la vida cotidiana del barrio",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
        alt: "Libros y cuaderno sobre una mesa",
        href: "https://example.com/cuaderno-de-barrio",
        newTab: true
    },
    {
        category: "Proyectos Propios",
        title: "Pequeñas exploraciones",
        description: "Rutas para salir a explorar sin prisa",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        alt: "Paisaje natural durante una exploración",
        href: "#contacto",
        newTab: false
    }
        */
];

// Inserta el header y el footer compartidos en cada página.
async function loadComponents() {
    const placeholders = [...document.querySelectorAll("[data-include]")];
    await Promise.all(placeholders.map(async placeholder => {
        const path = placeholder.dataset.include;
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`No se pudo cargar ${path}: ${response.status}`);
        }
        placeholder.outerHTML = await response.text();
    }));
}

// Devuelve una copia barajada para poder aleatorizar fotos sin cambiar los datos originales.
function shuffleItems(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
        const otherIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[otherIndex]] = [shuffled[otherIndex], shuffled[index]];
    }
    return shuffled;
}

// Mantiene la cuadrícula fotográfica existente y sus datos editables.
function renderPhotos() {
    const randomizedPhotos = shuffleItems(photos);

    const renderGroup = (group, prioritizeFirstImage = false) => group.map((photo, index) => `
        <button class="photo-card" type="button" data-photo-index="${photos.indexOf(photo)}" aria-label="Ver fotografía: ${photo.alt}">
            <span class="photo-frame photo-frame-${photo.frameSize}" style="--frame-color: ${photo.frame}">
                <span class="photo-image" style="--photo-ratio: ${photo.ratio || "4 / 5"}">
                    <img src="${photo.image}" alt="${photo.alt}" loading="${prioritizeFirstImage && index === 0 ? "eager" : "lazy"}" decoding="async" ${prioritizeFirstImage && index === 0 ? 'fetchpriority="high"' : ""} width="800" height="1200">
                </span>
            </span>
        </button>
    `).join("");

    // Prioriza una imagen inicial; el resto de la cuadrícula se carga al acercarse a la vista.
    document.querySelector("#photo-grid-first").innerHTML = renderGroup(randomizedPhotos.slice(0, 4), true);
    document.querySelector("#photo-grid-second").innerHTML = renderGroup(randomizedPhotos.slice(4));
}

// Crea tarjetas Bootstrap; cada destino y la opción de nueva pestaña se configuran en galleryItems.
function renderGallery() {
    document.querySelector("#gallery-grid").innerHTML = galleryItems.map(item => `
        <div class="col gallery-item" data-gallery-categories="${(item.categories || [item.category]).join("|")}">
            <article class="card gallery-card h-100">
                ${renderGalleryImage(item)}
                <div class="card-body d-flex flex-column">
                    <h3 class="card-title h5">${item.title}</h3>
                    <p class="card-text gallery-card-description">${item.description}</p>
                    <a class="btn btn-outline-dark align-self-start mt-auto" href="${item.href}" ${item.newTab ? 'target="_blank" rel="noopener noreferrer"' : ""}>${item.buttonText || "Ver más"}</a>
                </div>
            </article>
        </div>
    `).join("");
}

// Los ítems con varias imágenes usan un carrusel; el resto conserva su imagen estática.
function renderGalleryImage(item) {
    if (!item.images || item.images.length < 2) {
        return `<img class="card-img-top gallery-card-image" src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async" width="900" height="1125">`;
    }

    return `
        <div class="gallery-carousel" data-gallery-carousel role="region" aria-roledescription="carrusel" aria-label="Imágenes de ${item.title}">
            <div class="gallery-carousel-track" data-carousel-track style="--slide-offset: 0%">
                ${item.images.map((image, index) => `
                    <div class="gallery-carousel-slide" role="group" aria-roledescription="diapositiva" aria-label="${index + 1} de ${item.images.length}" aria-hidden="${index !== 0}">
                        <img class="gallery-card-image" src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async" width="900" height="1125" draggable="false">
                    </div>
                `).join("")}
            </div>
            <button class="gallery-carousel-arrow previous" type="button" data-gallery-carousel-step="-1" aria-label="Imagen anterior: ${item.title}"><span aria-hidden="true">‹</span></button>
            <button class="gallery-carousel-arrow next" type="button" data-gallery-carousel-step="1" aria-label="Imagen siguiente: ${item.title}"><span aria-hidden="true">›</span></button>
        </div>
    `;
}

// Añade controles de flechas y desplazamiento por arrastre a cada carrusel configurado.
function bindGalleryCarousels() {
    document.querySelectorAll("[data-gallery-carousel]").forEach(carousel => {
        const track = carousel.querySelector("[data-carousel-track]");
        const slides = [...track.children];
        let activeIndex = 0;
        let pointerStartX = 0;
        let pointerStartY = 0;
        let dragOffset = 0;
        let isHorizontalDrag = false;
        let activePointerId = null;

        const showSlide = index => {
            activeIndex = (index + slides.length) % slides.length;
            track.style.setProperty("--slide-offset", `${activeIndex * -100}%`);
            track.style.setProperty("--drag-offset", "0px");
            slides.forEach((slide, slideIndex) => {
                slide.setAttribute("aria-hidden", String(slideIndex !== activeIndex));
            });
        };

        carousel.addEventListener("click", event => {
            const button = event.target.closest("[data-gallery-carousel-step]");
            if (!button) return;

            showSlide(activeIndex + Number(button.dataset.galleryCarouselStep));
        });

        carousel.addEventListener("pointerdown", event => {
            if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
            if (event.target.closest("[data-gallery-carousel-step]")) return;

            pointerStartX = event.clientX;
            pointerStartY = event.clientY;
            dragOffset = 0;
            isHorizontalDrag = false;
            activePointerId = event.pointerId;
            carousel.setPointerCapture(event.pointerId);
        });

        carousel.addEventListener("pointermove", event => {
            if (!carousel.hasPointerCapture(event.pointerId)) return;

            const deltaX = event.clientX - pointerStartX;
            const deltaY = event.clientY - pointerStartY;
            if (!isHorizontalDrag && Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 5) {
                isHorizontalDrag = true;
                carousel.classList.add("is-dragging");
            }

            if (!isHorizontalDrag) return;
            event.preventDefault();
            dragOffset = deltaX;
            track.style.setProperty("--drag-offset", `${dragOffset}px`);
        });

        const finishDrag = event => {
            if (event.pointerId !== activePointerId) return;
            const shouldAdvance = event.type === "pointerup"
                && isHorizontalDrag
                && Math.abs(dragOffset) > carousel.clientWidth * .15;
            activePointerId = null;
            if (carousel.hasPointerCapture(event.pointerId)) {
                carousel.releasePointerCapture(event.pointerId);
            }
            carousel.classList.remove("is-dragging");

            if (shouldAdvance) {
                showSlide(activeIndex + (dragOffset < 0 ? 1 : -1));
            } else {
                track.style.setProperty("--drag-offset", "0px");
            }

            isHorizontalDrag = false;
        };

        carousel.addEventListener("pointerup", finishDrag);
        carousel.addEventListener("pointercancel", finishDrag);
        carousel.addEventListener("lostpointercapture", finishDrag);
    });
}

// Muestra únicamente las tarjetas de la categoría seleccionada y actualiza el estado accesible.
function bindGalleryFilters() {
    document.querySelector(".gallery-filters").addEventListener("click", event => {
        const button = event.target.closest("[data-gallery-filter]");
        if (!button) return;

        const category = button.dataset.galleryFilter;
        document.querySelectorAll("[data-gallery-filter]").forEach(filterButton => {
            const isActive = filterButton === button;
            filterButton.classList.toggle("active", isActive);
            filterButton.setAttribute("aria-pressed", String(isActive));
        });

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document.querySelectorAll(".gallery-item").forEach(item => {
            const itemCategories = item.dataset.galleryCategories.split("|");
            const isVisible = category === "all" || itemCategories.includes(category);
            item.getAnimations().forEach(animation => animation.cancel());
            item.classList.toggle("d-none", !isVisible);

            // Anima las tarjetas que aparecen y respeta la preferencia de movimiento reducido.
            if (isVisible && !reduceMotion) {
                item.animate([
                    { opacity: 0, transform: "translateY(.5rem) scale(.98)" },
                    { opacity: 1, transform: "translateY(0) scale(1)" }
                ], { duration: 240, easing: "ease-out" });
            }
        });
    });
}

// Conecta las fotografías con el modal de Bootstrap.
function bindPhotoModal() {
    const modalElement = document.querySelector("#photo-modal");
    const photoModal = bootstrap.Modal.getOrCreateInstance(modalElement);

    document.querySelector("#galeria").addEventListener("click", event => {
        const card = event.target.closest("[data-photo-index]");
        if (!card) return;
        const photo = photos[Number(card.dataset.photoIndex)];
        document.querySelector("#modal-image").src = photo.image;
        document.querySelector("#modal-image").alt = photo.alt;
        document.querySelector("#modal-title").textContent = photo.title;
        document.querySelector("#modal-description").textContent = photo.description;
        document.querySelector("#modal-location").textContent = photo.location;
        photoModal.show();
    });
}

// Inicializa la página cuando los componentes compartidos ya están disponibles.
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await loadComponents();
    } catch (error) {
        console.error("Error al cargar los componentes de la página.", error);
        return;
    }

    renderPhotos();
    renderGallery();
    bindGalleryCarousels();
    bindGalleryFilters();
    bindPhotoModal();
});
