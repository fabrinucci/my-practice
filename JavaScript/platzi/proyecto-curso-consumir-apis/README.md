
https://thecatapi.com

## HTML

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Michis App</title>
    <link
      rel="stylesheet"
      href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Michis App</h1>
    </header>

    <section id="random-cats">
    </section>
    <button onclick="getRandomCats()">Recargar</button>

    <h2>Michis favoritos</h2>
    <section id="favorite-cats">
    </section>
    <script src="./main.js"></script>
  </body>
</html>
```

## CSS

```
header {
  background-color: rgb(9, 84, 170);
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

header h1 {
  margin: 0
}

#random-cats, #favorite-cats{
  width: 100vw;
  margin-top: .5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: stretch;
  align-items: stretch;
  gap: 1rem;

}

.random-cat, .favorite-cat{
  width: 100%;
  height: minmax(250px,1fr);
  margin: 0 .5rem 0 .5rem;
}

.random-cat img, .favorite-cat img {
  width: calc(100% - 1rem);
  aspect-ratio: 1;
  object-fit: cover;
}

.random-cat button, .favorite-cat button{
  width: calc(100% - 1rem);
}
```

## JS

```

const btn = document.querySelector("button");
const API_KEY = "66b3728e-94c3-4db0-8d56-c256b911a0dd";

function createArticle(options) {
  const article = document.createElement("article");
  const image = document.createElement("img");
  const button = document.createElement("button");

  article.setAttribute("id", `${options.id}`);
  article.setAttribute("class", `${options.class}`);

  image.setAttribute("src", `${options.url}`);

  button.setAttribute("onClick", `${options.func}('${options.id}')`);
  button.textContent = options.text;

  article.append(image, button);

  return article;
}

async function getRandomCats() {
  const catUrlApi = `https://api.thecatapi.com/v1/images/search?limit=6`;

  const response = await fetch(catUrlApi, {
    cache: "no-cache",
    headers: { "x-api-key": API_KEY },
  });
  const data = await response.json();

  const randomCatsSection = document.getElementById("random-cats");

  while (randomCatsSection.firstChild.className === "random-cat") {
    randomCatsSection.removeChild(randomCatsSection.firstChild);
  }

  const fragment = new DocumentFragment();

  data.forEach((cat) => {
    const article = createArticle({
      id: `${cat.id}`,
      class: "random-cat",
      url: `${cat.url}`,
      text: "Agregar a Favoritos",
      func: "saveCat",
    });
    fragment.append(article);
  });
  randomCatsSection.prepend(fragment);
}

async function getFavoriteCats() {
  const catUrlApi = `https://api.thecatapi.com/v1/favourites`;

  const response = await fetch(catUrlApi, { headers: {"x-api-key": API_KEY}});
  const data = await response.json();

  const randomCatsSection = document.getElementById("favorite-cats");
  
  while (randomCatsSection.lastChild.className === "favorite-cat") {
    randomCatsSection.removeChild(randomCatsSection.lastChild);
  }
  
  const fragment = new DocumentFragment();
  data.forEach((cat) => {
    const article = createArticle({
      id: `${cat.id}`,
      class: "favorite-cat",
      url: `${cat.image.url}`,
      text: "Remover de Favoritos",
      func: "removeCat",
    });
    fragment.append(article);
  });
  randomCatsSection.append(fragment);
}
const removeCat = async (favoriteID) => {
  const remove = await fetch(`https://api.thecatapi.com/v1/favourites/${favoriteID}`, {
    headers: { "x-api-key": API_KEY },
    method: "DELETE",
  });
  const data = await remove.json();
  if(data.message === 'SUCCESS'){
    const catPost = document.getElementById(`${favoriteID}`);
    catPost.remove();
  }
};

const saveCat = async (catID) => {
  const save = await fetch(`https://api.thecatapi.com/v1/favourites/`, {
    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image_id: String(catID) }),
    method: "POST",
  });

  const data = await save.json();
  if(data.message === 'SUCCESS'){
    const randomCatsSection = document.getElementById("favorite-cats");
      const article = createArticle({
        id: `${data.id}`,
        class: "favorite-cat",
        url: `https://cdn2.thecatapi.com/images/${catID}.jpg`,
        text: "Remover de Favoritos",
        func: "removeCat",
      });
      randomCatsSection.append(article);
  }
};

btn.addEventListener("click", getRandomCats);
getRandomCats();
getFavoriteCats();

```


## DocumentFragment

* La interfaz DocumentFragment representa un objeto de documento mínimo que no tiene padre. 
* Se utiliza como una **versión ligera** de Document que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar. 
* La gran diferencia se debe al hecho de que el **DocumentFragment** no forma parte de la estructura de árbol del documento activo.
* Los cambios realizados en el fragmento no afectan el documento (incluso en reflow) ni inciden en el rendimiento cuando se realizan cambios.

EventTarget <- Node <- DocumentFragment

* Esta interfaz no tiene propiedades específicas, pero hereda las de su padre, Node, e implementa los de la interfaz ParentNode.


* El método DocumentFragment.prepend() inserta un conjunto de objetos Node o String antes del primer hijo del fragmento de documento. 

```
  let fragment = new DocumentFragment();
  let div = document.createElement("div");
  let p = document.createElement("p");
  fragment.append(p);
  fragment.prepend(div);

  fragment.children

```