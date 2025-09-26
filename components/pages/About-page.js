import "../layout/Social-buttons.js";
import "../ui/Optimized-image.js";

class About extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      .content {
        display: flex;
        -moz-column-gap: 2rem;
            column-gap: 2rem;
        align-items: center;
      }

      span {
        font-weight: bold;
      }

      img {
        width: 20rem;
        height: 20rem;
        transform: rotateY(180deg);
        border-radius: 2rem;
        background-color: rgb(var(--color-sky));
      }

      .me {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>
        @import "/index.css";
        ${About.styles}
      </style>
      <div class="content">
        <article>
          <h1>Soy Miguel Higuita, desarrollador web.</h1>
          <p>Soy <span>desarrollador web con 4 años de experiencia</span> creando soluciones digitales robustas y escalables. Mi especialidad es el desarrollo front-end, donde construyo interfaces de usuario intuitivas y responsivas. Mi objetivo es transformar ideas complejas en código limpio, mantenible y de alto rendimiento.</p>
          <p>Mi compromiso con la calidad se refleja en la atención al detalle. Esta minuciosidad me permite crear una experiencia de usuario fluida, coherente y entregar productos pulidos. <span>Considero que los pequeños detalles son los que marcan la diferencia entre un buen producto y uno que realmente destaque.</span></p>
          <p>Mi motivación principal se centra en lo esencial: colaborar para construir productos digitales de calidad que sean útiles, eficientes y ofrezcan una experiencia excepcional al usuario. <span>Busco que cada aspecto técnico, por complejo que sea, se traduzca en simplicidad y valor para el cliente.</span></p>
        </article>
        <article class="me">
          <optimized-image src="miguel-higuita" alt="Miguel Higuita"></optimized-image>
          <social-buttons></social-buttons>
        </article>
      </div>
    `;
  }
}

customElements.define("about-page", About);
