
import Hero from "../components/Hero";


export default function Home() {

    return (
        <>
            <section className="amaviz-home" id="home">
                <Hero />

                <div className="amaviz-home-text">
                    <p className="amaviz-welcome-text">Bienvenidos a Amavíz</p>
                    <p className="amaviz-slogan-text">LA SALUD DE TU PIEL ES NUESTRA PRIORIDAD</p>
                    <p className="amaviz-paragraph-text">En nuestro spa encontrarás un espacio diseñado para tu bienestar, donde
                        cada tratatamiento está pensado para ayudarte a relajarte, renovar tu energía y cuidar tu piel en un ambiente de trabquilidad y armonía.</p>
                </div>

            </section>
        </>
    );

}