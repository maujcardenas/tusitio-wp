<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import SuccessStories from "$lib/components/SuccessStories.svelte";
    import ReviewsEmbed from "$lib/components/ReviewsEmbed.svelte";
    import Specialties from "$lib/components/Specialties.svelte";
    import ServicesCalculator from "$lib/components/ServicesCalculator.svelte";
    import WhyChooseUs from "$lib/components/WhyChooseUs.svelte";
    import Packages from "$lib/components/Packages.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";
    import LearnCallout from "$lib/components/LearnCallout.svelte";

    const servicios = [
        {
            id: "dom",
            nombre: "Dominio .com, .net, .org",
            rec: "anual",
            precio: 16,
            tipo: "Dominio",
        },
        {
            id: "h6",
            nombre: "Hosting 6Gb",
            rec: "anual",
            precio: 80,
            tipo: "Hosting",
        },
        {
            id: "h10",
            nombre: "Hosting 10Gb",
            rec: "anual",
            precio: 100,
            tipo: "Hosting",
        },
        {
            id: "h14",
            nombre: "Hosting 14Gb",
            rec: "anual",
            precio: 120,
            tipo: "Hosting",
        },
        {
            id: "e1",
            nombre: "Plan 1-3 correos 1Gb/c",
            rec: "anual",
            precio: 12,
            tipo: "Correos",
        },
        {
            id: "e4",
            nombre: "Plan 4-10 correos 1Gb/c",
            rec: "anual",
            precio: 32,
            tipo: "Correos",
        },
        {
            id: "e10",
            nombre: "Plan 10-50 correos 1Gb/c",
            rec: "anual",
            precio: 48,
            tipo: "Correos",
        },
        {
            id: "ep",
            nombre: "Plan 1 correo premium 30Gb",
            rec: "anual",
            precio: 30,
            tipo: "Correos",
        },
        {
            id: "w1",
            nombre: "Desarrollo pág. mediana (5-8 sec)",
            rec: "único",
            precio: 180,
            tipo: "Diseño Web",
        },
        {
            id: "w2",
            nombre: "Desarrollo pág. grande (>8 sec)",
            rec: "único",
            precio: 280,
            tipo: "Diseño Web",
        },
        {
            id: "w3",
            nombre: "Desarrollo pág. mediana + Ecommerce",
            rec: "único",
            precio: 300,
            tipo: "Diseño Web",
        },
        {
            id: "c1",
            nombre: "1 hora de consultoría",
            rec: "único",
            precio: 25,
            tipo: "Consultoría",
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
</script>

<HeroSection />

<div class="layout-container">
    <SuccessStories stories={successStories} />
    <ReviewsEmbed />
    <Specialties />
    <ServicesCalculator {servicios} />
    <WhyChooseUs />
    <Packages />
    <LearnCallout />
    <ContactForm />
</div>

<style>
    .layout-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    :global(section) {
        margin: 4rem 0;
    }
</style>
