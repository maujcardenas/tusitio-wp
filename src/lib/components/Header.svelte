<script>
    let menuOpen = false;
    import LinkedInLogo from "$lib/components/LinkedInLogo.svelte";
    import YouTubeLogo from "$lib/components/YouTubeLogo.svelte";
    import WhatsAppLogo from "$lib/components/WhatsAppLogo.svelte";
</script>

<header>
    <div class="container">
        <div class="logo">
            <a href="/" class="brand-link">
                <img
                    src="/images/brand/tusitiowp-logo-darkbg-t.png"
                    alt="Logo Tu Sitio WP"
                />
            </a>
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
                <a href="#linkedin" aria-label="LinkedIn">
                    <LinkedInLogo />
                </a>
                <a href="#youtube" aria-label="YouTube">
                    <YouTubeLogo />
                </a>
                <a href="https://wa.me/593984029541" aria-label="WhatsApp">
                    <WhatsAppLogo />
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

    .brand-link img {
        max-width: 150px;
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
