
/* =====================================================
   MCA TECH SOLUTIONS
   MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENU MOVIL
    ========================= */

    const menuButton = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    const closeMobileMenu = (restoreFocus = false) => {
        if (!menuButton || !mobileMenu) return;

        mobileMenu.classList.remove("active");
        menuButton.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");

        if (restoreFocus) {
            menuButton.focus();
        }
    };

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen = !mobileMenu.classList.contains("active");

            mobileMenu.classList.toggle("active", isOpen);
            menuButton.classList.toggle("open", isOpen);

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

        });

        /* Cerrar al seleccionar una opción */

        mobileMenu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {
                closeMobileMenu();
            });

        });

        /* Cerrar al tocar fuera del menú */

        document.addEventListener("click", (event) => {

            if (!mobileMenu.classList.contains("active")) return;

            const clickDentroMenu =
                mobileMenu.contains(event.target);

            const clickBoton =
                menuButton.contains(event.target);

            if (!clickDentroMenu && !clickBoton) {
                closeMobileMenu();
            }

        });

        /* Cerrar con Escape */

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                mobileMenu.classList.contains("active")
            ) {
                closeMobileMenu(true);
            }

        });

    }

    /* =========================
       ELEMENTOS ANIMADOS
    ========================= */

    const revealElements = document.querySelectorAll(".reveal");
    const revealSections = document.querySelectorAll(".reveal-section");

    /* Evitar contenido oculto si no hay IntersectionObserver */

    if (!("IntersectionObserver" in window)) {

        revealElements.forEach((element) => {
            element.classList.add("active");
        });

        revealSections.forEach((section) => {
            section.classList.add("visible");
        });

        return;
    }

    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -20px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

    /* =========================
       ANIMACION DE SECCIONES
    ========================= */

    const sectionObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -20px 0px"
        }
    );

    revealSections.forEach((section) => {
        sectionObserver.observe(section);
    });

});
