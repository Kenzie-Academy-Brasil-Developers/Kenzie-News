class KenzieNewsApi {
  static async noticias() {
    const kenzieUri = `https://kenzie-news-api.herokuapp.com/api/news`;
    const data = await fetch(`${kenzieUri}`)
      .then((res) => res.json())
      .then((res) => {
        CriarCards.createCards(res);
      });
    return data;
  }
}
KenzieNewsApi.noticias();

class CriarCards {
  static createCards(noticia) {
    const secaoInfo = document.createElement("section");
    const main = document.querySelector("main");

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
CriarCards.createCards();
// CriarCards.NoticiaPrincipal();
