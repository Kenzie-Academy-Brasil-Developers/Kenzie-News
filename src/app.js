class KenzieNewsApi {
  static async noticias() {
    const kenzieUri = `https://kenzie-news-api.herokuapp.com/api/news`;
    const data = await fetch(`${kenzieUri}`)
      .then((res) => res.json())
      .then((res) => {
        CriarCards.bannerCards(res);
        CriarCards.createCards(res);
      });
    return data;
  }
}
KenzieNewsApi.noticias();

class CriarCards {
  static bannerCards(noticia) {
    const secaoInfo = document.createElement("section");
    const main = document.querySelector("main");

    let divImg = document.createElement("div");
    let divTextos = document.createElement("div");
    let figCarrossel = document.createElement("img");
    let fonte = document.createElement("p");
    let tagH1 = document.createElement("h1");
    let categoria = document.createElement("span");


    secaoInfo.classList.add("secaoBanner");
    divTextos.classList.add("divTextos__banner");
    divImg.classList.add("divImg__banner");


    const findImg = noticia.find((elem) => {
      if (elem.titulo.includes("Silmara")) {
        figCarrossel.src = elem.imagem;
        categoria.innerText = elem.categoria;
        tagH1.innerText = elem.titulo;
        fonte.innerText = `Fonte: ${elem.fonte}`;
      }
    });

    divImg.append(figCarrossel)
    divTextos.append(categoria, tagH1, fonte)
    secaoInfo.append(divImg, divTextos);
    main.append(secaoInfo);
    return secaoInfo;
  }

  static createCards(noticia) {
    const secaoInfo = document.createElement("section");
    const main = document.querySelector("main");

    secaoInfo.classList.add("secaoNews");


    const noticiaPercorrida = noticia.forEach((elem, inx, arr) => {
      let div = document.createElement("div");
      let divImg = document.createElement("div");
      let divTextos = document.createElement("div");

      let img = document.createElement("img");
      let categoria = document.createElement("span");
      let tagH1 = document.createElement("h1");
      let resumo = document.createElement("h2");
      let fonte = document.createElement("p");

      div.classList.add("cardDivs");
      divImg.classList.add("divImg");
      divTextos.classList.add("divTextos");

      img.src = elem.imagem;
      categoria.innerText = elem.categoria;
      tagH1.innerText = elem.titulo;
      resumo.innerText = elem.resumo;
      fonte.innerText = `Fonte: ${elem.fonte}`;

      divTextos.append(categoria, tagH1, resumo, fonte);
      divImg.append(img);
      div.append(divImg, divTextos);
      secaoInfo.append(div);
      main.append(secaoInfo);
      return secaoInfo;
    });
  }
}
CriarCards.bannerCards();
CriarCards.createCards();
// CriarCards.bannerCards();
