<script>
    export let servicios = [];

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

    <div class="calculadora card">
        <h3>Personaliza tu Paquete</h3>
        <p>
            Selecciona los servicios que necesitas para estimar tu inversión
            inicial:
        </p>

        <div class="grid-3 options-grid">
            {#each servicios as s}
                <label class="checkbox-label">
                    <input
                        type="checkbox"
                        on:change={() => toggleServicio(s)}
                    />
                    <span class="service-label-text"
                        >{s.nombre} (+${s.precio})</span
                    >
                </label>
            {/each}
        </div>

        <div class="calculator-footer">
            <h3 class="total-text">
                Total Estimado: ${totalCalculado}
            </h3>
            <button class="btn">Enviar Solicitud por Correo</button>
        </div>
    </div>
</section>

<style>
    .card {
        background-color: #00233d;
        border: 1px solid #71717a;
        border-radius: 12px;
        overflow: hidden;
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

    .calculadora {
        padding: 2rem;
        margin-top: 2rem;
    }

    .grid-3 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }

    .options-grid {
        margin: 1.5rem 0;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }

    .service-label-text {
        color: #71717a;
    }

    .calculator-footer {
        border-top: 1px solid #71717a;
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .total-text {
        color: #18181b;
        margin: 0;
    }
</style>
