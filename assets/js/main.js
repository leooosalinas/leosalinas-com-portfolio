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
        image: "https://leosalinas.com/img/works/juegaesports-mmonch-valorant-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
        alt: "Juegaesports.com, Noticias y Contenido de Esports en Latinoamérica",
        href: "https://example.com/estrategia-estudio-norte",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "Kaos Latin Gamers",
        description: "Director de Proyecto para relanzamiento de club de esports con presencia en Chile.",
        image: "https://leosalinas.com/img/works/agardash-kaos-latin-gamers-klg-fifa-leonardo-salinas.jpg?auto=format&fit=crop&w=900&q=80",
        alt: "Kaos Latin Gamers. Club de esports con sede en Chile.",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Estrategia y Marca",
        title: "Ring Royale",
        description: "Lead de Estrategia de Marca y Comunicación en la fase de pre-lanzamiento de nuevo evento de boxeo entre celebridades en México.",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80",
        alt: "Equipo trabajando en una estrategia de marca",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Estrategia y Marca",
        title: "Symi Pastisseria",
        description: "Especialista en Marca y Contenido Digital para exclusiva pastelería artesanal en el barrio de Sants, en Barcelona.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
        alt: "Reunión de trabajo para una estrategia de comunicación",
        href: "https://example.com/mercado-vivo",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "Sprint Gaming",
        description: "Social Media Lead para empresa de servicios de casino en vivo con ambientación temática digital, con sede en Paraguay.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
        alt: "Espacio creativo preparado para una sesión de marca",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Estrategia y Marca",
        title: "Land Vegas",
        description: "Lead de Comunicación y Marca para proyecto de casino y entretenimiento digital a través de gafas de Realidad Virtual (VR).",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        alt: "Documentos de planificación sobre una mesa",
        href: "https://example.com/marca-horizonte",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "LUX Fight League",
        description: "Jefe de Comunicaciones para la liga de Artes Marciales Mixtas (MMA) con más reconocimiento en México y Latinoamérica.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        alt: "Documentos de planificación sobre una mesa",
        href: "https://example.com/marca-horizonte",
        newTab: true
    },
    {
        category: "Estrategia y Marca",
        title: "Rostisseria Tony's",
        description: "Levantamiento de Marca y Branding para popular local de pollos asados y comida preparada en Palamós, Girona.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        alt: "Documentos de planificación sobre una mesa",
        href: "https://example.com/marca-horizonte",
        newTab: true
    },
    {
        category: "Eventos",
        title: "FestiGame",
        description: "Director de Contenidos para uno de los eventos masivos de videojuegos y cultura gaming más importante de Sudamérica.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
        alt: "Retrato de una persona en exterior",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Fotos",
        title: "Luz de tarde",
        description: "La última luz sobre el paisaje",
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80",
        alt: "Paisaje iluminado por la luz cálida del atardecer",
        href: "https://example.com/fotos-luz-de-tarde",
        newTab: true
    },
    {
        category: "Fotos",
        title: "Calles de Gràcia",
        description: "Una mirada cotidiana a Gràcia",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
        alt: "Calle de ciudad al anochecer",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Fotos",
        title: "Texturas del barrio",
        description: "Detalles que cuentan la vida del barrio",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",
        alt: "Detalle arquitectónico de un edificio",
        href: "https://example.com/fotos-texturas",
        newTab: true
    },
    {
        category: "Fotos",
        title: "Un domingo tranquilo",
        description: "Una pausa entre montañas y lagos",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
        alt: "Paisaje de montaña junto a un lago",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Vídeos",
        title: "Historias en movimiento",
        description: "Pequeñas historias, grandes momentos",
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=80",
        alt: "Cámara de vídeo preparada para grabar",
        href: "https://example.com/video-historias",
        newTab: true
    },
    {
        category: "Vídeos",
        title: "Sesión en el estudio",
        description: "Detrás de cámaras en una producción",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
        alt: "Equipo de rodaje durante una producción audiovisual",
        href: "#contacto",
        newTab: false
    },
    {
        category: "Vídeos",
        title: "Crónicas del festival",
        description: "La energía de un festival en vivo",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
        alt: "Público disfrutando de un festival",
        href: "https://example.com/video-festival",
        newTab: true
    },
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

    const renderGroup = group => group.map(photo => `
        <button class="photo-card" type="button" data-photo-index="${photos.indexOf(photo)}" aria-label="Ver fotografía: ${photo.alt}">
            <span class="photo-frame photo-frame-${photo.frameSize}" style="--frame-color: ${photo.frame}">
                <span class="photo-image" style="--photo-ratio: ${photo.ratio || "4 / 5"}">
                    <img src="${photo.image}" alt="${photo.alt}" loading="lazy" width="800" height="1200">
                </span>
            </span>
        </button>
    `).join("");

    document.querySelector("#photo-grid-first").innerHTML = renderGroup(randomizedPhotos.slice(0, 4));
    document.querySelector("#photo-grid-second").innerHTML = renderGroup(randomizedPhotos.slice(4));
}

// Crea tarjetas Bootstrap; cada destino y la opción de nueva pestaña se configuran en galleryItems.
function renderGallery() {
    document.querySelector("#gallery-grid").innerHTML = galleryItems.map(item => `
        <div class="col gallery-item" data-gallery-category="${item.category}">
            <article class="card gallery-card h-100">
                <img class="card-img-top gallery-card-image" src="${item.image}" alt="${item.alt}" loading="lazy" width="900" height="1125">
                <div class="card-body d-flex flex-column">
                    <h3 class="card-title h5">${item.title}</h3>
                    <p class="card-text gallery-card-description">${item.description}</p>
                    <a class="btn btn-outline-dark align-self-start" href="${item.href}" ${item.newTab ? 'target="_blank" rel="noopener noreferrer"' : ""}>Ver más</a>
                </div>
            </article>
        </div>
    `).join("");
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
            const isVisible = category === "all" || item.dataset.galleryCategory === category;
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
    bindGalleryFilters();
    bindPhotoModal();
});
