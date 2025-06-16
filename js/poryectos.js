document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Martin J. Web",
            description: "Sitio del concejal con enfoque político, accesibilidad y contacto directo con los ciudadanos.",
            image: "/assets/img/proyectos/portada MJ.png",
            link: "https://martinjuez.com",
            color: "#60F3A5",
        },
        {
            title: "Microbollos Group Web",
            description: "Landing page corporativa para empresa familiar. Identidad clara y diseño institucional moderno.",
            image: "/assets/img/proyectos/portada mggropu.png",
            link: "https://microbollosgroup.com.ar",
            color: "#58C3FF",
        },
        {
            title: "Blog Personal Interactivo",
            description: "Plataforma dinámica con artículos, comentarios y una UI intuitiva para fomentar la lectura digital.",
            image: "/assets/img/proyectos/portada blog.png",
            link: "https://blog-de-arte.vercel.app/",
            color: "#FFFFFF",
        }
    ];

    const container = document.getElementById("project-grid");
    container.className = "max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-14";

    projects.forEach((project, index) => {
        const card = document.createElement("a");
        card.href = project.link ?? "#";
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        card.className = `
            p-6 bg-black/50 backdrop-blur-md rounded-2xl border transition-transform duration-500 ease-in-out
            min-h-[420px] flex flex-col items-center text-center opacity-0
        `;

        // Aplicar bordes y animaciones
        card.style.borderColor = project.color;
        card.style.animation = `fadeInUp 800ms ease forwards`;
        card.style.animationDelay = `${index * 250}ms`;

        // Efecto hover con eventos JS para controlar boxShadow, scale y outline (simula ring)
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = `0 0 30px ${project.color}`;
            card.style.transform = "scale(1.05)";
            card.style.outline = `4px solid ${project.color}`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
            card.style.transform = "scale(1)";
            card.style.outline = "none";
        });

        card.innerHTML = `
            <div class="w-full mb-6 overflow-hidden rounded-xl border-2" 
                style="aspect-ratio: 16 / 9; border-color: ${project.color};">
                <img src="${project.image}" alt="${project.title}" 
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy" />
            </div>
            <h3 class="text-2xl font-extrabold mb-4" style="color: ${project.color};">
                ${project.title}
            </h3>
            <p class="text-[#F5F5F5] leading-relaxed px-2">
                ${project.description}
            </p>
        `;

        container.appendChild(card);
    });
});

(function injectFadeInUpAnimation() {
    if (document.getElementById("tailwind-fadeInUp-animation")) return;
    const style = document.createElement("style");
    style.id = "tailwind-fadeInUp-animation";
    style.textContent = `
        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(40px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
})();
