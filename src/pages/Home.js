import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home">
      <h1>Bem-vindo à <span className="destaque">TechNova</span></h1>
      <p>
        Especialistas em soluções digitais: websites modernos, sistemas sob medida e
        suporte tecnológico para empresas.
      </p>
      <p>
        Explore nossos <a href="/produtos">produtos e serviços</a> ou
        <a href="/contato"> entre em contato</a> para iniciar seu projeto.
      </p>
    </section>
  );
}
