<script>
    import LinkedInLogo from "$lib/components/LinkedInLogo.svelte";
    import YouTubeLogo from "$lib/components/YouTubeLogo.svelte";
    import WhatsAppLogo from "$lib/components/WhatsAppLogo.svelte";

    // Estado reactivo en Svelte 5 usando $state
    let menuOpen = $state(false);

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header>
    <div class="header-container">
        <!-- Fila Superior -->
        <div class="top-bar">
            <div class="logo">
                <a href="/" class="brand-link">
                    <img
                        src="/images/brand/tusitiowp-logo-darkbg-t.png"
                        alt="Logo Tu Sitio WP"
                        width="1000"
                        height="500"
                    />
                </a>
            </div>

            <div class="top-actions-desktop">
                <a href="/login" class="login-link">Iniciar sesión</a>

                <div class="social-icons">
                    <a href="#linkedin" aria-label="LinkedIn">
                        <LinkedInLogo />
                    </a>
                    <a href="#youtube" aria-label="YouTube">
                        <YouTubeLogo />
                    </a>
                    <a
                        href="https://wa.me/593984029541"
                        aria-label="WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsAppLogo />
                    </a>
                </div>
            </div>

            <button
                class="mobile-toggle"
                onclick={toggleMenu}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
            >
                ☰
            </button>
        </div>

        <!-- Fila Inferior / Menú Desplegable Móvil -->
        <div class="navigation-wrapper {menuOpen ? 'open' : ''}">
            <nav class="main-nav">
                <a href="/">Inicio</a>
                <a href="/portafolio">Portafolio</a>
                <a href="/testimonios">Testimonios</a>
                <a href="/especialidades">Especialidades</a>
                <a href="/precios">Precios y servicios</a>
                <a href="/paquetes-todo-1">Paquetes predeterminados</a>
                <a href="/blog">Educación y Recursos</a>
                <a href="/contacto">Contacto</a>
            </nav>

            <!-- Acciones móviles (Login y Socials se integran al menú en móvil) -->
            <div class="mobile-actions">
                <a href="/login" class="login-link">Iniciar sesión</a>
                <div class="social-icons">
                    <a href="#linkedin" aria-label="LinkedIn">
                        <LinkedInLogo />
                    </a>
                    <a href="#youtube" aria-label="YouTube">
                        <YouTubeLogo />
                    </a>
                    <a
                        href="https://wa.me/593984029541"
                        aria-label="WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsAppLogo />
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #0c325a;
        border-bottom: 1px solid #2a2829;
        z-index: 1000;
    }

    .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    /* --- Fila Superior --- */
    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .brand-link {
        display: inline-block;
        line-height: 0;
    }

    .brand-link img {
        width: 100%;
        max-width: 150px;
        height: auto;
        aspect-ratio: 2 / 1;
        object-fit: contain;
    }

    .top-actions-desktop {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .login-link {
        color: #ffffff;
        font-weight: 600;
        text-decoration: none;
        padding: 0.4rem 0.8rem;
        border: 1px solid #ffffff;
        border-radius: 4px;
        transition:
            background-color 0.2s,
            color 0.2s;
    }

    .login-link:hover {
        background-color: #ffffff;
        color: #0c325a;
    }

    .social-icons {
        display: flex;
        align-items: center;
        gap: 0.85rem;
    }

    /* --- Fila Inferior (Navegación Principal) --- */
    .main-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .main-nav a {
        color: #ffffff;
        font-weight: 500;
        font-size: 0.95rem;
        text-decoration: none;
        transition: opacity 0.2s;
    }

    .main-nav a:hover {
        opacity: 0.8;
    }

    .mobile-toggle,
    .mobile-actions {
        display: none;
    }

    /* --- Diseño Responsivo (Móvil y Tablets) --- */
    @media (max-width: 900px) {
        .top-bar {
            border-bottom: none;
        }

        .top-actions-desktop {
            display: none;
        }

        .mobile-toggle {
            display: block;
            background: none;
            border: none;
            font-size: 1.75rem;
            color: #ffffff;
            cursor: pointer;
            padding: 0;
        }

        .navigation-wrapper {
            display: none;
            flex-direction: column;
            gap: 1.5rem;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #0c325a;
            padding: 1.5rem;
            border-bottom: 1px solid #2a2829;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .navigation-wrapper.open {
            display: flex;
        }

        .main-nav {
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            gap: 1rem;
        }

        .main-nav a {
            font-size: 1.1rem;
            width: 100%;
        }

        .mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-actions .login-link {
            text-align: center;
        }
    }
</style>
