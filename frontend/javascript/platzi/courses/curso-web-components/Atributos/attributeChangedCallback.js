class myElement extends HTMLElement{
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }
  static get observedAttributes() {
    return ['title', 'parrafo', 'img']; // los atributos que no aparezcan aqui no seran observados
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[attr] = newValue;
    }
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
          <img src=${this.img}/>
          <p>${this.parrafo}</p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  
  getStyles() {
    return `
      <style>
        .title {
          color: blue;
        }
      </style>
    `
  }
  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render()
  }
}

customElements.define('my-element', myElement);