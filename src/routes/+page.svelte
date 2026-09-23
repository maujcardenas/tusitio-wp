<script>
    const servicios = [
        {
            id: "dom",
            nombre: "Dominio .com, .net, .org",
            rec: "anual",
            precio: 16,
            cat: "Dominio",
        },
        {
            id: "h6",
            nombre: "Hosting 6Gb",
            rec: "anual",
            precio: 80,
            cat: "Hosting",
        },
        {
            id: "h10",
            nombre: "Hosting 10Gb",
            rec: "anual",
            precio: 100,
            cat: "Hosting",
        },
        {
            id: "h14",
            nombre: "Hosting 14Gb",
            rec: "anual",
            precio: 120,
            cat: "Hosting",
        },
        {
            id: "e1",
            nombre: "Plan 1-3 correos 1Gb/c",
            rec: "anual",
            precio: 12,
            cat: "Correo",
        },
        {
            id: "e4",
            nombre: "Plan 4-10 correos 1Gb/c",
            rec: "anual",
            precio: 32,
            cat: "Correo",
        },
        {
            id: "e10",
            nombre: "Plan 10-50 correos 1Gb/c",
            rec: "anual",
            precio: 48,
            cat: "Correo",
        },
        {
            id: "ep",
            nombre: "Plan 1 correo premium 30Gb",
            rec: "anual",
            precio: 30,
            cat: "Correo",
        },
        {
            id: "w1",
            nombre: "Desarrollo pág. mediana (5-8 sec)",
            rec: "único",
            precio: 180,
            cat: "Desarrollo",
        },
        {
            id: "w2",
            nombre: "Desarrollo pág. grande (>8 sec)",
            rec: "único",
            precio: 280,
            cat: "Desarrollo",
        },
        {
            id: "w3",
            nombre: "Desarrollo pág. mediana + Ecommerce",
            rec: "único",
            precio: 300,
            cat: "Desarrollo",
        },
    ];

    const successStories = [
        {
            title: "Nia Party",
            description:
                "Eventos infantiles para la ciudad de Utrech en Holanda",
            image: "/images/brand/port-niaparty.jpg",
            alt: "Proyecto 1",
        },
        {
            title: "Actor Performer",
            description:
                "Portafolio artístico para un grupo de ensayos, actuación y artes performáticas.",
            image: "/images/brand/port-actor-performer-screen.jpg",
            alt: "Proyecto 2",
        },
        {
            title: "Himchari TKD",
            description:
                "Academia de Tae Kwon Do en Quito, con cursos y seguimiento de ascensos",
            image: "/images/brand/port-himcharitkd-screen.jpg",
            alt: "Proyecto 3",
        },
        {
            title: "Mamallacta Lodge",
            description:
                "Hotel en Papallacta, Napo, con una propuesta diferente e identidad de marca colorida",
            image: "/images/brand/port-mamallacta-screen.jpg",
            alt: "Proyecto 4",
        },
        {
            title: "Flight Level Studios",
            description:
                "Inicialmente un sitio portafolio de fotografía de aviación, ahora además un Broker y Manager de Aeroplanos basado en Florida, EEUU",
            image: "/images/brand/port-flightlevelstudios-screen.jpg",
            alt: "Proyecto 5",
        },
        {
            title: "InDomus Ec",
            description:
                "Consultoría financiera y contable para empresas en Quito, también con servicios internacionales",
            image: "/images/brand/port-indomusec-screen.jpg",
            alt: "Proyecto 6",
        },
    ];

    let seleccionados = [];
    $: totalCalculado = seleccionados.reduce(
        (sum, item) => sum + item.precio,
        0,
    );

    function toggleServicio(servicio) {
        if (seleccionados.includes(servicio)) {
            seleccionados = seleccionados.filter((s) => s.id !== servicio.id);
        } else {
            seleccionados = [...seleccionados, servicio];
        }
    }
</script>

<!-- Hero Section -->
<section
    class="hero"
    style="background-image: url('/images/brand/banner-tusitiowp.jpg');"
>
    <div class="hero-content">
        <h1>Soluciones Web para tu Emprendimiento</h1>
        <p style="color: #18181B;">
            Hosting confiable y diseño profesional sin complicaciones.
        </p>
        <div style="margin-top: 1rem;">
            <a href="#servicios" class="btn">Ver Servicios</a>
            <a href="#contacto" class="btn" style="background-color: #18181B;"
                >Contáctanos</a
            >
        </div>
    </div>
</section>

<div class="layout-container">
    <!-- Portafolio -->
    <section>
        <h2>Nuestros Casos de Éxito</h2>
        <div class="grid-2">
            {#each successStories as story}
                <div class="card">
                    <img src={story.image} alt={story.alt} />
                    <div class="card-body">
                        <h3 style="color: #18181B;">{story.title}</h3>
                        <p>{story.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- Reviews Embed -->
    <section>
        <h2>Opiniones de Clientes (Google Business)</h2>
        <div
            class="card"
            style="padding: 2rem; text-align: center; background-color: #F8F3F2;"
        >
            <p><em>[Embed Widget de Google Business Reviews iría aquí]</em></p>
        </div>
    </section>

    <!-- Ventajas Categorías -->
    <section>
        <h2>Nuestras Especialidades</h2>
        <div class="grid-3">
            <div class="card card-body">
                <h3>Hosting & Dominios</h3>
                <p>
                    Servidores rápidos no saturados con registro de dominio
                    incluido a precios transparentes.
                </p>
            </div>
            <div class="card card-body">
                <h3>Correos Corporativos</h3>
                <p>
                    Comunicación profesional y encriptada, desde planes básicos
                    hasta almacenamiento premium.
                </p>
            </div>
            <div class="card card-body">
                <h3>Desarrollo Web</h3>
                <p>
                    Páginas estáticas y Ecommerce diseñadas a la medida,
                    enfocadas en conversión.
                </p>
            </div>
            <div class="card card-body">
                <h3>Mantenimiento</h3>
                <p>
                    Monitoreo continuo de uptime, seguridad y actualizaciones
                    preventivas.
                </p>
            </div>
            <div class="card card-body">
                <h3>Aprendizaje WP</h3>
                <p>
                    Capacitación técnica para que administres tu propio
                    contenido con total independencia.
                </p>
            </div>
        </div>
    </section>

    <!-- Tabla de Servicios y Calculadora -->
    <section id="servicios">
        <h2>Listado de Servicios y Precios</h2>
        <div class="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Servicio</th>
                        <th>Recurrencia</th>
                        <th>Precio (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {#each servicios as s}
                        <tr>
                            <td>{s.nombre}</td>
                            <td>{s.rec}</td>
                            <td>${s.precio}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <div class="calculadora card" style="margin-top: 2rem;">
            <h3>Personaliza tu Paquete</h3>
            <p>
                Selecciona los servicios que necesitas para estimar tu inversión
                inicial:
            </p>

            <div class="grid-3" style="margin: 1.5rem 0;">
                {#each servicios as s}
                    <label class="checkbox-label">
                        <input
                            type="checkbox"
                            on:change={() => toggleServicio(s)}
                        />
                        <span style="color: #71717A;"
                            >{s.nombre} (+${s.precio})</span
                        >
                    </label>
                {/each}
            </div>

            <div
                style="border-top: 1px solid #71717A; padding-top: 1rem; display: flex; justify-content: space-between; align-items: center;"
            >
                <h3 style="color: #18181B; margin: 0;">
                    Total Estimado: ${totalCalculado}
                </h3>
                <button class="btn">Enviar Solicitud por Correo</button>
            </div>
        </div>
    </section>

    <!-- Diferenciación -->
    <section>
        <h2>¿Por qué elegirnos?</h2>
        <p>
            Nos diferenciamos por mantener <strong>precios transparentes</strong
            >
            sin costos ocultos, ofrecer <strong>apoyo técnico constante</strong>
            y garantizar el rendimiento usando
            <strong>servidores no saturados</strong>, optimizando la latencia y
            la estabilidad para tu proyecto.
        </p>
    </section>

    <!-- Paquetes Todo Incluido -->
    <section>
        <h2>Paquetes Todo Incluido</h2>
        <div class="grid-2">
            <div class="card card-body">
                <h3 style="color: #18181B;">Solo Instalación de WP</h3>
                <ul>
                    <li>Hosting 6Gb - $80</li>
                    <li>1 Dominio - $16</li>
                </ul>
                <h4 style="color: #002E52;">Total: $96/anual</h4>
            </div>
            <div class="card card-body">
                <h3 style="color: #18181B;">Instalación WP + Correos</h3>
                <ul>
                    <li>Hosting 6Gb - $80</li>
                    <li>1 Dominio - $16</li>
                    <li>1-3 correos 1Gb - $12</li>
                </ul>
                <h4 style="color: #002E52;">Total: $108/anual</h4>
            </div>
            <div class="card card-body">
                <h3 style="color: #18181B;">Paquete Página Web Mediana</h3>
                <ul>
                    <li>Hosting, Dominio y Correos - $108/anual</li>
                    <li>Desarrollo página mediana - $180</li>
                </ul>
                <h4 style="color: #002E52;">Total Inicial: $288</h4>
            </div>
            <div class="card card-body">
                <h3 style="color: #18181B;">Paquete E-commerce</h3>
                <ul>
                    <li>Hosting, Dominio y Correos - $108/anual</li>
                    <li>Desarrollo E-commerce - $300</li>
                </ul>
                <h4 style="color: #002E52;">Total Inicial: $408</h4>
            </div>
        </div>
    </section>

    <!-- Formulario Contacto -->
    <section id="contacto">
        <div class="grid-2">
            <div class="card card-body">
                <h2>Contáctanos</h2>
                <form>
                    <div class="form-group">
                        <label style="color: #18181B;">Nombre</label>
                        <input
                            type="text"
                            class="input-field"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div class="form-group">
                        <label style="color: #18181B;">Correo</label>
                        <input
                            type="email"
                            class="input-field"
                            placeholder="correo@ejemplo.com"
                        />
                    </div>
                    <div class="form-group">
                        <label style="color: #18181B;">Mensaje</label>
                        <textarea class="input-field" rows="4"></textarea>
                    </div>
                    <button type="button" class="btn">Enviar Mensaje</button>
                </form>
            </div>
            <div>
                <img
                    src="https://via.placeholder.com/600x450"
                    alt="Nuestro Personal"
                    style="height: 100%; object-fit: cover;"
                />
            </div>
        </div>
    </section>

    <!-- Educación -->
    <section>
        <h2>Educación y Aprendizaje</h2>
        <p>
            Visita nuestro <a href="/blog">Blog</a> para aprender a manejar WordPress
            e impulsar tu presencia digital.
        </p>
    </section>
</div>

<style>
    .layout-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    section {
        margin: 4rem 0;
    }
    .hero {
        background-size: cover;
        background-position: center;
        padding: 6rem 2rem;
        text-align: center;
        background-color: #f3f6f4;
    }
    .hero-content {
        max-width: 600px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.9);
        padding: 2rem;
        border-radius: 12px;
        border: 1px solid #71717a;
    }
    .grid-2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
    .grid-3 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
    .card {
        background-color: #00233d;
        border: 1px solid #71717a;
        border-radius: 12px;
        overflow: hidden;
    }
    .card-body {
        padding: 1.5rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
    th,
    td {
        border: 1px solid #71717a;
        padding: 0.75rem;
        text-align: left;
    }
    th {
        background-color: #00233d;
        color: #18181b;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }
    .calculadora {
        padding: 2rem;
    }

    .form-group {
        margin-bottom: 1rem;
    }
    .input-field {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #71717a;
        border-radius: 4px;
        background-color: #f3f6f4;
        color: #18181b;
        box-sizing: border-box;
    }
</style>
