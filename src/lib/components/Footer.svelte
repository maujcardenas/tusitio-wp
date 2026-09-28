<footer>
    <div class="footer-grid">
        <div class="col">
            <span class="brand-title">Tu Sitio WP</span>
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
            <p>
                Adquiere un sitio web Wordpress y gestiona tu presencia en línea
                sin complicaciones. Hosting de alta calidad. Acompañamiento
                experto. Precios y procesos transparentes. Educación continua en
                tecnologías web.
            </p>
        </div>
        <div class="col">
            <h4 class="col-title">Menú Principal</h4>
            <a href="/">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="/blog">Educación</a>
        </div>
        <div class="col">
            <h4 class="col-title">Contacto y Redes</h4>
            <a href="mailto:info@ejemplo.com">info@ejemplo.com</a>
            <a href="#whatsapp">WhatsApp</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#youtube">YouTube</a>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: #0c325a;
        border-top: 1px solid #2a2829;
        padding: 3rem 2rem;
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
    .footer-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    .col {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .col a {
        color: #e0f2fe;
    }
    .brand-title {
        color: #ffffff;
        font-weight: bold;
        font-size: 1.2rem;
    }
    .col-title {
        color: #ffffff;
    }
    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
