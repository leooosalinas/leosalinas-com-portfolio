// Edita estos cuatro proyectos: media, metadatos, etiquetas, título y tamaño visual.
// Usa layout: "wide" para una columna o layout: "half" para compartir la fila.
const projects = [
    {
        title: "Co-fundador de una plataforma de noticias y contenido de esports en Latinoamérica",
        description: "(Descripción pendiente)",
        href: "#",
        newTab: false,
        date: "2025",
        location: "Latinoamérica",
        tags: ["Dirección", "Branding", "Edición de Contenidos"],
        layout: "half",
        media: {
            type: "video",
            src: "https://leosalinas.com/img/portfolio/juegaesports-short-video.mp4",
            poster: "https://leosalinas.com/img/portfolio/juegaesports-mmonch-valorant-leonardo-salinas.jpg?auto=format&fit=crop&w=1600&q=85",
            alt: "Mmonch, jugadora profesional de VALORANT, para Juegaesports.com"
        }
    },
    {
        title: "Aportando al pre-lanzamiento de un nuevo evento de boxeo entre celebridades en México",
        description: "Lideré la estrategia de marca y comunicación durante la fase de pre-lanzamiento de Ring Royale.",
        href: "#",
        newTab: false,
        date: "Oct-Dic 2025",
        location: "México",
        tags: ["Estrategia de marca", "Comunicación", "Eventos en vivo"],
        layout: "half",
        media: {
            type: "video",
            src: "https://leosalinas.com/img/portfolio/ring-royale-leonardo-salinas.mp4",
            poster: "https://leosalinas.com/img/portfolio/ring-royale-leonardo-salinas.webp?auto=format&fit=crop&w=1200&q=80",
            alt: "Teaser Ring Royale"
        }
        /*media: {
            type: "youtube",
            videoId: "4QqMuQL2T3k",
            poster: "https://leosalinas.com/img/portfolio/ring-royale-teaser-corona-leonardo-salinas.webp?auto=format&fit=crop&w=1200&q=80",
            alt: "Teaser de Ring Royale"
        }*/
    },
    {
        title: "Liderando la comunicación, contenido y storytelling para una liga profesional de MMA",
        description: "Dirigí las comunicaciones y la producción de contenido para LUX Fight League y sus eventos en vivo.",
        href: "#",
        newTab: false,
        date: "2021-2023",
        location: "México",
        tags: ["Dirección de Comunicación", "Artes Marciales Mixtas", "Eventos en Vivo"],
        layout: "half",
        media: {
            type: "video",
            src: "https://leosalinas.com/img/portfolio/peleas-mma-lux-fight-league.mp4",
            poster: "https://leosalinas.com/img/portfolio/lux-fight-league-marco-beltran-karate-kid-leonardo-salinas.webp?auto=format&fit=crop&w=1200&q=80",
            alt: "Reel Marco Beltrán, Karate Kid, LUX Fight League"
        }
    },
    {
        title: "Trayendo de regreso a la escena competitiva a un club de esports de Chile",
        description: "Estuve detrás del proyecto que puso de vuelta a Kaos Latin Gamers (KLG) a competir en videojuegos como EA FC, VALORANT y Pokémon TCG.",
        href: "#",
        newTab: false,
        date: "2024-2025",
        location: "Chile (Remoto)",
        tags: ["Esports", "Dirección General", "Eventos en Vivo"],
        layout: "half",
        media: {
            type: "video",
            src: "https://leosalinas.com/img/portfolio/kaos-latin-gamers-leonardo-salinas.mp4",
            poster: "https://leosalinas.com/img/portfolio/kaos-latin-gamers-leonardo-salinas.webp?auto=format&fit=crop&w=1200&q=80",
            alt: "Reel Kaos Latin Gamers KLG"
        }
    },
    {
        title: "Dirigiendo actividades y contenidos para un evento masivo de videojuegos y cultura gaming",
        description: "Una sesión fotográfica para mostrar productos frescos y la vida cotidiana del comercio local.",
        href: "#",
        newTab: false,
        date: "2013-2019",
        location: "Chile",
        tags: ["Dirección de Contenidos", "Gaming", "Eventos Masivos"],
        layout: "half",
        media: {
            type: "video",
            src: "https://leosalinas.com/img/portfolio/festigame-leonardo-salinas.mp4",
            poster: "https://leosalinas.com/img/portfolio/festigame-leonardo-salinas.webp?auto=format&fit=crop&w=1200&q=80",
            alt: "Reel FestiGame Chile"
        }
    }
];

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
        location: "Gràcia, Barcelona",
        image: "https://leosalinas.com/img/photos/rafa-atomic-bar.jpeg",
        alt: "Rafael de Atòmïc Bar",
        frame: "#ba8d5b",
        frameSize: 3
    },
    {
        title: "Paola, Entre Latas",
        description: "Paola debe ser de las personas que más acostumbro a ver sonreír en el barrio.",
        location: "Gràcia, Barcelona",
        image: "https://leosalinas.com/img/photos/paola-entre-latas.jpeg",
        alt: "Paola de Entre Latas",
        frame: "#241c18",
        frameSize: 5
    },
    {
        title: "Timón",
        description: "Timón, el perro más noble del barrio de Gràcia en Atòmïc Bar.",
        location: "Gràcia, Barcelona",
        image: "https://leosalinas.com/img/photos/timon-atomic-bar.jpg",
        alt: "Timón en Atòmïc Bar",
        frame: "#fff",
        frameSize: 2
    },
    {
        title: "La Pemy",
        description: "Pablo y Pemy disfrutando de una tarde de descanso en el sofá.",
        location: "Ñuñoa, Santiago de Chile",
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

let youtubeApiPromise;
const youtubePlayers = new WeakMap();

function shuffleItems(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
        const otherIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[otherIndex]] = [shuffled[otherIndex], shuffled[index]];
    }
    return shuffled;
}

async function loadComponents() {
    const includes = [...document.querySelectorAll("[data-include]")];
    await Promise.all(includes.map(async element => {
        const response = await fetch(element.dataset.include);
        if (!response.ok) {
            throw new Error(`No se pudo cargar ${element.dataset.include}: ${response.status}`);
        }
        element.outerHTML = await response.text();
    }));

    document.querySelector(".site-footer")?.removeAttribute("id");
}

function renderProjects() {
    const grid = document.querySelector("#project-grid");

    grid.innerHTML = projects.map(project => {
        const newTabAttributes = project.newTab ? 'target="_blank" rel="noopener noreferrer"' : "";
        const media = project.media.type === "youtube" ? `
            <div class="project-video youtube-player" data-video-id="${project.media.videoId}" data-lazy-poster="${project.media.poster}" aria-label="Reproducir o pausar video: ${project.media.alt}" aria-pressed="false" aria-busy="true" tabindex="0" role="button">
                <div class="youtube-player-frame"></div>
            </div>
        ` : project.media.type === "video" ? `
            <video class="project-video" data-lazy-src="${project.media.src}" data-lazy-poster="${project.media.poster}" aria-label="Reproducir o pausar video: ${project.media.alt}" aria-pressed="false" muted loop playsinline preload="none" tabindex="0" role="button"></video>
        ` : `
            <img src="${project.media.src}" alt="${project.media.alt}" loading="lazy" decoding="async">
        `;
        return `
            <article class="project-card${project.layout === "wide" ? " project-card--wide" : ""}">
                <div class="project-media">${media}</div>
                <p class="project-meta">
                    <span>${project.date}</span>
                    <span>${project.location}</span>
                    ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
                </p>
                <h3><a href="${project.href}" ${newTabAttributes}>${project.title}</a></h3>
                <p class="project-description"><a href="${project.href}" ${newTabAttributes}>${project.description}</a></p>
            </article>
        `;
    }).join("");

    bindProjectVideos(grid);
}

function loadYouTubeIframeApi() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (youtubeApiPromise) return youtubeApiPromise;

    youtubeApiPromise = new Promise((resolve, reject) => {
        const previousCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            try {
                previousCallback?.();
            } finally {
                resolve(window.YT);
            }
        };

        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        script.onerror = () => reject(new Error("No se pudo cargar YouTube IFrame Player API."));
        document.head.append(script);
    });

    return youtubeApiPromise;
}

function showYouTubeFallback(container, error) {
    console.error(`No se pudo cargar el video de YouTube "${container.getAttribute("aria-label")}".`, error);
    container.setAttribute("aria-busy", "false");

    const link = document.createElement("a");
    link.href = `https://www.youtube.com/watch?v=${encodeURIComponent(container.dataset.videoId)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Ver este video en YouTube";
    container.replaceChildren(link);
}

function loadYouTubeVideo(container) {
    if (container.dataset.playerInitialized) return;
    container.dataset.playerInitialized = "true";

    const poster = container.dataset.lazyPoster;
    if (poster) {
        container.style.backgroundImage = `url("${poster}")`;
        container.style.backgroundPosition = "center";
        container.style.backgroundSize = "cover";
        delete container.dataset.lazyPoster;
    }

    loadYouTubeIframeApi().then(YT => {
        if (!container.isConnected) return;

        const videoId = container.dataset.videoId;
        const player = new YT.Player(container.querySelector(".youtube-player-frame"), {
            videoId,
            playerVars: {
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                fs: 0,
                loop: 1,
                modestbranding: 1,
                mute: 1,
                origin: window.location.origin,
                playsinline: 1,
                playlist: videoId,
                rel: 0
            },
            events: {
                onReady: event => {
                    event.target.mute();
                    event.target.playVideo();
                    container.dataset.playbackRequested = "true";
                    container.setAttribute("aria-pressed", "true");
                    container.setAttribute("aria-busy", "false");
                },
                onStateChange: event => {
                    const isPlaying = event.data === YT.PlayerState.PLAYING
                        || event.data === YT.PlayerState.BUFFERING;
                    container.dataset.playbackRequested = String(isPlaying);
                    container.setAttribute("aria-pressed", String(isPlaying));
                },
                onError: event => {
                    showYouTubeFallback(container, new Error(`YouTube Player error ${event.data}.`));
                },
                onAutoplayBlocked: () => {
                    container.dataset.playbackRequested = "false";
                    container.setAttribute("aria-pressed", "false");
                    console.error(`YouTube bloqueó la reproducción automática de "${container.getAttribute("aria-label")}".`);
                }
            }
        });

        youtubePlayers.set(container, player);
    }).catch(error => {
        showYouTubeFallback(container, error);
    });
}

function toggleYouTubePlayback(container) {
    const player = youtubePlayers.get(container);
    if (!player || !window.YT?.PlayerState) return;

    const state = player.getPlayerState();
    const isPlaying = container.dataset.playbackRequested === "true"
        || state === window.YT.PlayerState.PLAYING
        || state === window.YT.PlayerState.BUFFERING;

    if (isPlaying) {
        player.pauseVideo();
        container.dataset.playbackRequested = "false";
        container.setAttribute("aria-pressed", "false");
    } else {
        player.mute();
        player.playVideo();
        container.dataset.playbackRequested = "true";
        container.setAttribute("aria-pressed", "true");
    }
}

function bindProjectVideos(container) {
    const loadNativeVideo = video => {
        if (!video.src && video.dataset.lazySrc) {
            video.autoplay = true;
            video.poster = video.dataset.lazyPoster;
            video.src = video.dataset.lazySrc;
            delete video.dataset.lazySrc;
            delete video.dataset.lazyPoster;
            video.load();
        }
    };

    const playVideo = video => {
        loadNativeVideo(video);
        if (video.paused) {
            video.play().catch(error => {
                console.error(`No se pudo reproducir el video "${video.getAttribute("aria-label")}".`, error);
            });
        }
    };

    const videoObserver = "IntersectionObserver" in window
        ? new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                if (entry.target.matches(".youtube-player")) {
                    loadYouTubeVideo(entry.target);
                } else {
                    loadNativeVideo(entry.target);
                }
                videoObserver.unobserve(entry.target);
            });
        }, { rootMargin: "200px 0px" })
        : null;

    container.querySelectorAll(".project-video").forEach(video => {
        if (videoObserver) {
            videoObserver.observe(video);
        } else if (video.matches(".youtube-player")) {
            loadYouTubeVideo(video);
        } else {
            loadNativeVideo(video);
        }

        if (video.matches(".youtube-player")) {
            video.addEventListener("click", () => toggleYouTubePlayback(video));
            video.addEventListener("keydown", event => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                toggleYouTubePlayback(video);
            });
            return;
        }

        video.addEventListener("click", () => {
            if (video.paused) {
                playVideo(video);
            } else {
                video.pause();
            }
        });

        video.addEventListener("keydown", event => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            if (video.paused) {
                playVideo(video);
            } else {
                video.pause();
            }
        });

        video.addEventListener("play", () => video.setAttribute("aria-pressed", "true"));
        video.addEventListener("pause", () => video.setAttribute("aria-pressed", "false"));
    });
}

function renderPhotos() {
    const randomizedPhotos = shuffleItems(photos);
    const renderGroup = group => group.map(photo => `
        <button class="photo-card" type="button" data-photo-index="${photos.indexOf(photo)}" aria-label="Ver fotografía: ${photo.alt}">
            <span class="photo-frame photo-frame-${photo.frameSize}" style="--frame-color: ${photo.frame}">
                <span class="photo-image" style="--photo-ratio: ${photo.ratio || "4 / 5"}">
                    <img src="${photo.image}" alt="${photo.alt}" loading="lazy" decoding="async" width="800" height="1200">
                </span>
            </span>
        </button>
    `).join("");

    document.querySelector("#photo-grid-first").innerHTML = renderGroup(randomizedPhotos.slice(0, 4));
    document.querySelector("#photo-grid-second").innerHTML = renderGroup(randomizedPhotos.slice(4));
}

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

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await loadComponents();
    } catch (error) {
        console.error("Error al cargar los componentes de la página.", error);
        return;
    }

    renderProjects();
    renderPhotos();
    bindPhotoModal();
});
