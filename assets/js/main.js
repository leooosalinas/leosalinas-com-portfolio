// Contenido de la galería y los proyectos, separado de la plantilla HTML.
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

const projects = [
    {
        title: "Director de Contenidos | FestiGame",
        description: "Desde el 2013, y hasta el 2019, fui parte del equipo de producción para el festival de cultura gamer más importante de Chile, liderando el área de contenidos y creando experiencias de marca.",
        action: "Cuéntame más",
        actionHref: "#contacto",
        images: [
            ["https://leosalinas.com/img/works/festigame-2015-pablo-tatabo-seba-caceres-animacion-pubico.jpg?auto=format&fit=crop&w=800&q=80", "Pablo Tatabo y Seba Cáceres animando al público en FestiGame 2015"],
            ["https://leosalinas.com/img/works/festigame-2014-estacion-mapocho.jpg?auto=format&fit=crop&w=800&q=80", "Asistentes y público en FestiGame 2014"],
            ["https://leosalinas.com/img/works/festigame-2017-leonardo-salinas-entrevista-cnn-chile.jpg?auto=format&fit=crop&w=800&q=80", "Entrevista Leonardo Salinas en CNN Chile relacionado a FestiGame 2017"],
            ["https://leosalinas.com/img/works/festigame-2017-mario-kempes-leonardo-salinas-fernando-palomo.jpg?auto=format&fit=crop&w=800&q=80", "Mario Kempes, Leonardo Salinas y Fernando Palomo en FestiGame 2017"],
            ["https://leosalinas.com/img/works/festigame-2019-ed-boon-leonardo-salinas-fatal1ty.jpeg?auto=format&fit=crop&w=800&q=80", "Ed Boon, Leonardo Salinas y Fatal1ty en FestiGame 2019"],
            ["https://leosalinas.com/img/works/festigame-2017-booth-playstation.jpg?auto=format&fit=crop&w=800&q=80", "Booth de PlayStation en FestiGame 2017"],
            ["https://leosalinas.com/img/works/festigame-2017-entrada-publico.jpg?auto=format&fit=crop&w=800&q=80", "Entrada del público en FestiGame 2017"]
        ]
    },
    {
        title: "Jefe de Comunicaciones | LUX Fight League",
        description: "Entre 2021 y 2023, lideré el área de comunicaciones y contenidos para la liga de Artes Marciales Mixtas (MMA) más importante de Latinoamérica, desarrollando storytelling; contenidos gráficos, audiovisuales; campañas de marketing y más.",
        action: "Revisar trabajos",
        actionHref: "#contacto",
        images: [
            ["https://leosalinas.com/img/works/lux-fight-league-leonardo-marco-beltran-karate-kid.jpg?auto=format&fit=crop&w=800&q=80", "Reel Karate Kid con Marco Beltrán en LUX Fight League"],
            ["https://leosalinas.com/img/works/lux-fight-league-leonardo-salinas-uriel-kart-challenge.jpg?auto=format&fit=crop&w=800&q=80", "Reel Uriel Kart Challenge para LUX Fight League"],
            ["https://leosalinas.com/img/works/lux-fight-league-leonardo-salinas-lazy-boy-rodriguez.jpg?auto=format&fit=crop&w=800&q=80", "Lazy Boy Rodríguez peleando para LUX Fight League"],
            ["https://leosalinas.com/img/works/lux-fight-league-lux-030-fight-card.jpg?auto=format&fit=crop&w=800&q=80", "Reel LUX 030 Fight Card para LUX Fight League"],
            ["https://leosalinas.com/img/works/lux-fight-league-leonardo-salinas-favoritos-underdogs.jpg?auto=format&fit=crop&w=800&q=80", "Votación Favoritos vs Underdogs para LUX Fight League"],
            ["https://leosalinas.com/img/works/lux-fight-league-leonardo-salinas-lux-023-marco-beltran-fito-rubio.jpg?auto=format&fit=crop&w=800&q=80", "Afiche LUX 023 Marco Beltrán vs Fito Rubio para LUX Fight League"]
        ]
    },
    {
        title: "Editor General | Juegaesports.com",
        description: "Levantamiento de proyecto web relacionado a contenido exclusivo de esports en Latinoamérica.",
        action: "Ver proyecto",
        actionHref: "#contacto",
        //external: true,
        images: [
            ["https://leosalinas.com/img/works/juegaesports-adverso-valorant-leonardo-salinas.jpg?auto=format&fit=crop&w=800&q=80", "Adverso Valorant en Juegaesports.com"],
            ["https://leosalinas.com/img/works/juegaesports-kru-blaze-valorant-leonardo-salinas.jpg?auto=format&fit=crop&w=800&q=80", "KRU Blaze Valorant en Juegaesports.com"],
            ["https://leosalinas.com/img/works/juegaesports-valorant-masters-santiago-leonardo-salinas.jpg?auto=format&fit=crop&w=800&q=80", "Valorant Masters en Juegaesports.com"],
            ["https://leosalinas.com/img/works/juegaesports-ea-fc-26-leonardo-salinas.jpg?auto=format&fit=crop&w=800&q=80", "EA FC 26 en Juegaesports.com"],
            ["https://leosalinas.com/img/works/juegaesports-mmonch-valorant-leonardo-salinas.jpg?auto=format&fit=crop&w=800&q=80", "MMONCH Valorant en Juegaesports.com"],
            ["https://leosalinas.com/img/works/juegaesports-counter-strike-2-leonardo-salinas.jpg?auto=format&fit=crop&w=800&q=80", "Counter-Strike 2 en Juegaesports.com"],
            ["https://leosalinas.com/img/works/juegaesports-vct-americas-valorant-leonardo-salinas.jpg?auto=format&fit=crop&w=800&q=80", "VCT Americas Valorant en Juegaesports.com"],
            ["https://leosalinas.com/img/works/juegaesports-agardash-ea-fc-leonardo-salinas.jpg?auto=format&fit=crop&w=800&q=80", ""]
        ]
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

// Dibuja las fotografías en orden aleatorio y los proyectos con sus imágenes.
function renderPhotos() {
    const randomizedPhotos = shuffleItems(photos);

    const renderGroup = (group, offset) => group.map((photo, index) => `
        <button class="photo-card" type="button" data-photo-index="${offset + index}" aria-label="Ver fotografía: ${photo.alt}">
            <span class="photo-frame photo-frame-${photo.frameSize}" style="--frame-color: ${photo.frame}">
                <span class="photo-image" style="--photo-ratio: ${photo.ratio || "4 / 5"}">
                    <img src="${photo.image}" alt="${photo.alt}" loading="lazy" width="800" height="1200">
                </span>
            </span>
        </button>
    `).join("");

    document.querySelector("#photo-grid-first").innerHTML = renderGroup(randomizedPhotos.slice(0, 4), 0);
    document.querySelector("#photo-grid-second").innerHTML = renderGroup(randomizedPhotos.slice(4), 4);
}

function renderProjects() {
    document.querySelector("#project-list").innerHTML = projects.map((project, index) => `
        <article class="project">
            <div class="project-heading">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
            <div class="carousel-wrap">
                <button class="carousel-arrow previous" type="button" data-carousel="${index}" data-direction="-1" aria-label="Anterior imagen">‹</button>
                <div class="project-carousel" id="carousel-${index + 1}">
                    ${shuffleItems(project.images).map(([src, alt]) => `<img src="${src}" alt="${alt}" loading="lazy">`).join("")}
                </div>
                <button class="carousel-arrow next" type="button" data-carousel="${index}" data-direction="1" aria-label="Siguiente imagen">›</button>
            </div>
            <a class="project-action" href="${project.actionHref}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${project.action}</a>
        </article>
    `).join("");
}

// Permite arrastrar los carruseles y repetir las imágenes al llegar a sus extremos.
function enableCarouselDragging() {
    document.querySelectorAll(".project-carousel").forEach(carousel => {
        const originals = [...carousel.children];
        const cloneItems = () => originals.map(image => {
            const clone = image.cloneNode(true);
            clone.alt = "";
            clone.setAttribute("aria-hidden", "true");
            return clone;
        });
        carousel.append(...cloneItems(), ...cloneItems());

        const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;
        const setWidth = originals.reduce((width, image) => width + image.getBoundingClientRect().width, 0)
            + gap * originals.length;
        carousel.scrollLeft = setWidth;
        carousel.addEventListener("scroll", () => {
            if (carousel.scrollLeft <= 5) {
                carousel.scrollLeft += setWidth;
            } else if (carousel.scrollLeft >= setWidth * 2 - 5) {
                carousel.scrollLeft -= setWidth;
            }
        });

        let startX = 0;
        let startScroll = 0;

        carousel.addEventListener("pointerdown", event => {
            if (event.pointerType === "mouse" && event.button !== 0) return;
            startX = event.clientX;
            startScroll = carousel.scrollLeft;
            carousel.classList.add("is-dragging");
            carousel.setPointerCapture(event.pointerId);
        });

        carousel.addEventListener("pointermove", event => {
            if (!carousel.hasPointerCapture(event.pointerId)) return;
            carousel.scrollLeft = startScroll - (event.clientX - startX) * 1.5;
        });

        const stopDragging = () => carousel.classList.remove("is-dragging");
        carousel.addEventListener("pointerup", stopDragging);
        carousel.addEventListener("pointercancel", stopDragging);
        carousel.addEventListener("lostpointercapture", stopDragging);
    });
}

// Conecta las tarjetas, el modal fotográfico y las flechas de los carruseles.
function bindInteractions() {
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

    document.querySelector("#project-list").addEventListener("click", event => {
        const button = event.target.closest("[data-carousel]");
        if (!button) return;
        const carousel = document.querySelector(`#carousel-${Number(button.dataset.carousel) + 1}`);
        carousel.scrollBy({
            left: Number(button.dataset.direction) * carousel.clientWidth * .65,
            behavior: "smooth"
        });
    });

    enableCarouselDragging();
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
    renderProjects();
    bindInteractions();
});
