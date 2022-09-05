function videoPlay(id) {
  const url = 'https://platzivideo.com';
  console.log(`Se esta reproduciendo desde la url: ${url}`);
}

function videoPause(id) {
  const url = 'https://platzivideo.com';
  console.log(`Pausamos la url: ${url}`);
}

export class PlatziClass {
  constructor({
    name,
    videoId
  }) {
    this.name = name;
    this.videoId = videoId
  }

  reproducir() {
    videoPlay(this.videoId)
  }

  pausar() {
    videoPause(this.videoId)
  }
}

const jspoo = new PlatziClass({
  name: 'Clase numero 2: Abstraccion',
  videoId: 2
})

jspoo.reproducir()

console.log(jspoo);