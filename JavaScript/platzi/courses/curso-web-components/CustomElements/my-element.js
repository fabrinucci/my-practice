const template = document.createElement('div');
template.innerHTML = `
  <style>
    .text {
      color: orange;
    }
    p {
      color: blue;
    }
  </style>
  <p class='text'>Hello friends</p>
  <p>Today was a good day</p>
`

class myElement extends HTMLElement{
  constructor() {
    super();
  }
  connectedCallback() {
    this.p.textContent = 'Hello world';
    this.append(this.p)
    this.append(template);
  }
}

customElements.define('my-element', myElement);