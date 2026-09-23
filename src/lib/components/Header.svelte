<script>
    let menuOpen = false;
</script>

<header>
    <div class="container">
        <div class="logo">
            <a href="/" class="brand-link">Tu Sitio WP</a>
        </div>

        <button
            class="mobile-toggle"
            on:click={() => (menuOpen = !menuOpen)}
            aria-label="Abrir menú"
        >
            ☰
        </button>

        <nav class={menuOpen ? "open" : ""}>
            <a href="/">Inicio</a>
            <a href="/blog">Blog</a>
            <div class="social-icons">
                <!-- LinkedIn SVG -->
                <a href="#linkedin" aria-label="LinkedIn">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        class="icon-svg"
                    >
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        />
                    </svg>
                </a>
                <!-- YouTube SVG -->
                <a href="#youtube" aria-label="YouTube">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        class="icon-svg"
                    >
                        <path
                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                        />
                    </svg>
                </a>
                <!-- WhatsApp SVG -->
                <a href="#whatsapp" aria-label="WhatsApp">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        class="icon-svg"
                    >
                        <path
                            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                        />
                    </svg>
                </a>
            </div>
        </nav>
    </div>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #00233d;
        border-bottom: 1px solid #71717a;
        z-index: 1000;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .brand-link {
        color: #ffffff;
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: none;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    nav a {
        color: #ffffff;
        font-weight: 500;
        text-decoration: none;
    }

    .social-icons {
        display: flex;
        gap: 1rem;
    }

    .icon-svg {
        fill: #ffffff;
        display: block;
    }

    .mobile-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #ffffff;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .mobile-toggle {
            display: block;
        }

        nav {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #00233d;
            padding: 1rem 0;
            border-bottom: 1px solid #71717a;
        }

        nav.open {
            display: flex;
        }
    }
</style>
