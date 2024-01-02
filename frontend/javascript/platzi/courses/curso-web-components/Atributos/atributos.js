class myElement extends HTMLElement{
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
    
    this.title = this.getAttribute('title');
    this.parrafo = this.getAttribute('parrafo');
    this.img = this.getAttribute('img');
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