<footer>
    <div class="footer-grid">
        <div class="col">
            <span style="color: #18181B; font-weight: bold; font-size: 1.2rem;"
                >WebHosting</span
            >
            <p>
                Impulsando pequeños y medianos emprendimientos con tecnología
                robusta y asequible.
            </p>
        </div>
        <div class="col">
            <h4 style="color: #18181B;">Menú Principal</h4>
            <a href="/">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="/blog">Educación</a>
        </div>
        <div class="col">
            <h4 style="color: #18181B;">Contacto y Redes</h4>
            <a href="mailto:info@ejemplo.com">info@ejemplo.com</a>
            <a href="#whatsapp">WhatsApp</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#youtube">YouTube</a>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: #f4f4f5;
        border-top: 1px solid #71717a;
        padding: 3rem 2rem;
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
        color: #71717a;
    }
    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
