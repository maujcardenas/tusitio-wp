<script>
    // Sintaxis moderna de Svelte 5
    let { servicios = [] } = $props();

    // Estado reactivo para las selecciones del usuario
    let selecciones = $state({
        dominio: false,
        hosting: "",
        diseno: "",
        correos: "",
        premiumQty: 1,
        consultoria: false,
    });

    // Función derivada que calcula el carrito/resumen en tiempo real
    let resumen = $derived.by(() => {
        let items = [];
        const obtenerServicio = (id) => servicios.find((s) => s.id === id);

        if (selecciones.dominio) {
            const s = obtenerServicio("dom");
            if (s) items.push({ ...s, qty: 1, subtotal: s.precio });
        }
        if (selecciones.hosting) {
            const s = obtenerServicio(selecciones.hosting);
            if (s) items.push({ ...s, qty: 1, subtotal: s.precio });
        }
        if (selecciones.diseno) {
            const s = obtenerServicio(selecciones.diseno);
            if (s) items.push({ ...s, qty: 1, subtotal: s.precio });
        }
        if (selecciones.correos) {
            const s = obtenerServicio(selecciones.correos);
            if (s) {
                // Si es el plan premium, usamos la cantidad que eligió el usuario
                const qty =
                    s.id === "ep" ? Math.max(1, selecciones.premiumQty) : 1;
                items.push({ ...s, qty, subtotal: s.precio * qty });
            }
        }
        if (selecciones.consultoria) {
            const s = obtenerServicio("c1");
            if (s) items.push({ ...s, qty: 1, subtotal: s.precio });
        }

        return items;
    });

    // Total derivado a partir del resumen
    let totalCalculado = $derived(
        resumen.reduce((sum, item) => sum + item.subtotal, 0),
    );
</script>

<section id="servicios">
    <h2>Listado de Servicios y Precios</h2>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Servicio</th>
                    <th>Tipo</th>
                    <th>Recurrencia</th>
                    <th>Precio (USD)</th>
                </tr>
            </thead>
            <tbody>
                {#each servicios as s}
                    <tr>
                        <td class="font-medium">{s.nombre}</td>
                        <td><span class="badge">{s.tipo}</span></td>
                        <td>{s.rec}</td>
                        <td class="precio-td">${s.precio}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <div class="calculadora card">
        <div class="card-header">
            <h3>Personaliza tu Paquete</h3>
            <p class="subtitle">
                Selecciona los servicios que necesitas para estimar tu inversión
                inicial:
            </p>
        </div>

        <div class="form-sections">
            <!-- SECCIÓN: DOMINIO -->
            <div class="section-group">
                <h4>Escoge si necesitas dominio:</h4>
                <label class="radio-label">
                    <input type="checkbox" bind:checked={selecciones.dominio} />
                    <span class="service-label-text">
                        Dominio .com, .net, .org (+$16/anual)
                    </span>
                </label>
            </div>

            <!-- SECCIÓN: HOSTING -->
            <div class="section-group">
                <h4>Escoge qué tipo de hosting necesitas:</h4>
                <label class="radio-label">
                    <input
                        type="radio"
                        name="hosting"
                        value=""
                        bind:group={selecciones.hosting}
                    />
                    <span class="service-label-text"
                        >Ninguno (ya tengo hosting)</span
                    >
                </label>
                {#each servicios.filter((s) => s.tipo === "Hosting") as h}
                    <label class="radio-label">
                        <input
                            type="radio"
                            name="hosting"
                            value={h.id}
                            bind:group={selecciones.hosting}
                        />
                        <span class="service-label-text"
                            >{h.nombre} (+${h.precio}/{h.rec})</span
                        >
                    </label>
                {/each}
            </div>

            <!-- SECCIÓN: DISEÑO WEB -->
            <div class="section-group">
                <h4>Escoge qué tan grande es el diseño web que necesitas:</h4>
                <label class="radio-label">
                    <input
                        type="radio"
                        name="diseno"
                        value=""
                        bind:group={selecciones.diseno}
                    />
                    <span class="service-label-text">Ninguno</span>
                </label>
                {#each servicios.filter((s) => s.tipo === "Diseño Web") as w}
                    <label class="radio-label">
                        <input
                            type="radio"
                            name="diseno"
                            value={w.id}
                            bind:group={selecciones.diseno}
                        />
                        <span class="service-label-text"
                            >{w.nombre} (+${w.precio}/{w.rec})</span
                        >
                    </label>
                {/each}
            </div>

            <!-- SECCIÓN: CORREOS -->
            <div class="section-group">
                <h4>Escoge si necesitas plan de correos:</h4>
                <label class="radio-label">
                    <input
                        type="radio"
                        name="correos"
                        value=""
                        bind:group={selecciones.correos}
                    />
                    <span class="service-label-text">Ninguno</span>
                </label>

                {#each servicios.filter((s) => s.tipo === "Correos") as c}
                    <div class="correo-option">
                        <label class="radio-label">
                            <input
                                type="radio"
                                name="correos"
                                value={c.id}
                                bind:group={selecciones.correos}
                            />
                            <span class="service-label-text"
                                >{c.nombre} (+${c.precio}/{c.rec})</span
                            >
                        </label>

                        <!-- Input condicional para cantidad de correos premium -->
                        {#if c.id === "ep" && selecciones.correos === "ep"}
                            <div class="premium-qty">
                                <label for="premium-qty-input"
                                    >¿Cuántos correos premium necesitas?</label
                                >
                                <input
                                    id="premium-qty-input"
                                    type="number"
                                    min="1"
                                    max="50"
                                    bind:value={selecciones.premiumQty}
                                />
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>

            <!-- SECCIÓN: CONSULTORÍA -->
            <div class="section-group">
                <h4>Consultoría adicional:</h4>
                <label class="radio-label">
                    <input
                        type="checkbox"
                        bind:checked={selecciones.consultoria}
                    />
                    <span class="service-label-text">
                        1 hora de consultoría (+$25/único)
                    </span>
                </label>
            </div>
        </div>

        <!-- RESUMEN FINAL -->
        {#if resumen.length > 0}
            <div class="resumen">
                <h4>Resumen de tu selección:</h4>
                <ul>
                    {#each resumen as item}
                        <li>
                            <span class="resumen-nombre">
                                {item.nombre}
                                {#if item.qty > 1}<span class="qty-badge"
                                        >x{item.qty}</span
                                    >{/if}
                            </span>
                            <span class="resumen-precio">${item.subtotal}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}

        <div class="calculator-footer">
            <div>
                <span class="total-label">Total Estimado</span>
                <h3 class="total-text">${totalCalculado}</h3>
            </div>
            <button class="btn">Enviar Solicitud por Correo</button>
        </div>
    </div>
</section>

<style>
    /* Estilos generales y Tabla (Modo claro/neutro para legibilidad) */
    #servicios h2 {
        color: #1e293b;
        margin-bottom: 1.5rem;
    }

    .table-responsive {
        overflow-x: auto;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        margin-bottom: 3rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background-color: #ffffff;
        color: #334155;
    }

    th,
    td {
        border-bottom: 1px solid #e2e8f0;
        padding: 1rem;
        text-align: left;
    }

    th {
        background-color: #f8fafc;
        color: #0f172a;
        font-weight: 600;
    }

    .font-medium {
        font-weight: 500;
        color: #0f172a;
    }

    .precio-td {
        font-weight: 600;
        color: #0284c7;
    }

    .badge {
        background-color: #e0f2fe;
        color: #0369a1;
        padding: 0.25rem 0.6rem;
        border-radius: 9999px;
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    /* Calculadora (Modo Oscuro Elegante para alto contraste) */
    .card {
        background-color: #0f172a; /* Slate 900 */
        color: #f8fafc;
        border: 1px solid #334155;
        border-radius: 12px;
        box-shadow: 0 4px 20px -2px rgb(0 0 0 / 0.2);
        padding: 2.5rem;
    }

    .card-header h3 {
        margin-top: 0;
        font-size: 1.5rem;
        color: #f8fafc;
    }

    .subtitle {
        color: #94a3b8;
        margin-bottom: 2rem;
        font-size: 1.05rem;
    }

    .section-group {
        background-color: #1e293b; /* Slate 800 */
        padding: 1.5rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        border: 1px solid #334155;
    }

    .section-group h4 {
        margin-top: 0;
        margin-bottom: 1.2rem;
        color: #e2e8f0;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .radio-label {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
        padding: 0.6rem 0.5rem;
        border-radius: 6px;
        transition: background-color 0.2s;
    }

    .radio-label:hover {
        background-color: #334155;
    }

    .service-label-text {
        color: #cbd5e1;
        font-size: 1rem;
    }

    input[type="radio"],
    input[type="checkbox"] {
        width: 1.25rem;
        height: 1.25rem;
        accent-color: #38bdf8;
        cursor: pointer;
    }

    .premium-qty {
        margin-left: 2.25rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: #0f172a;
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid #334155;
        border-left: 4px solid #38bdf8;
    }

    .premium-qty label {
        color: #94a3b8;
        font-size: 0.9rem;
    }

    .premium-qty input {
        width: 100px;
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #475569;
        background-color: #1e293b;
        color: #f8fafc;
        font-size: 1rem;
    }

    /* Caja de Resumen */
    .resumen {
        margin: 2rem 0;
        padding: 1.5rem;
        background-color: #0f172a;
        border: 1px dashed #475569;
        border-radius: 8px;
    }

    .resumen h4 {
        margin-top: 0;
        color: #38bdf8;
        border-bottom: 1px solid #334155;
        padding-bottom: 0.75rem;
        margin-bottom: 1rem;
    }

    .resumen ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .resumen li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
        color: #cbd5e1;
    }

    .qty-badge {
        background-color: #38bdf8;
        color: #0f172a;
        padding: 0.1rem 0.4rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: bold;
        margin-left: 0.5rem;
    }

    .resumen-precio {
        font-weight: 600;
        color: #f8fafc;
    }

    /* Footer / Total */
    .calculator-footer {
        border-top: 1px solid #334155;
        padding-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: space-between;
        align-items: flex-end;
    }

    .total-label {
        color: #94a3b8;
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        font-weight: 600;
        display: block;
        margin-bottom: 0.25rem;
    }

    .total-text {
        color: #38bdf8;
        margin: 0;
        font-size: 2.25rem;
        line-height: 1;
    }

    .btn {
        background-color: #0284c7;
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-size: 1.05rem;
        font-weight: 600;
        cursor: pointer;
        transition:
            background-color 0.2s,
            transform 0.1s;
    }

    .btn:hover {
        background-color: #0369a1;
    }

    .btn:active {
        transform: scale(0.98);
    }
</style>
