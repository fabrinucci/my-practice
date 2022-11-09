

class myElement extends HTMLElement{
  constructor() {
    super();
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>Hello world</h2>
        <div>
          <p>Example text</p>
        </div>
      </section>
    `;
    return template;
  }
  render() {
    this.append(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render()
  }
}

customElements.define('my-element', myElement);