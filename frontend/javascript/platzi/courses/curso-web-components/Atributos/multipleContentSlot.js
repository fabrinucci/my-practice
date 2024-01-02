class myElement extends HTMLElement{
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <section>
      <h2 class='title'>
        <slot name='title'></slot>
      </h2>

      <div>
        <p><slot name='paragraph'></slot></p>
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