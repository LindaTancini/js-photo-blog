console.log("Ciao Linda");

//PRENDO ELEMENTO CONTAINER
const containerElement = document.getElementById("container");
console.log(containerElement);
// PRENDO I DATI API DA POSTMAN
axios
  .get("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => {
    const arrayElementAPI = response.data;
    console.log(arrayElementAPI);
    // CREO UNA VARIABILE CHE CONTERRA' IL CONTENUTO DA METTERE  NELL'HTML
    let newPolaroid = "";
    // CICLO FOR PER PRENDERE ELEMENTI NELL'ARRAY API, PARTO DA INDICE 1 PER AVERE 6 ELEMENTI IN PAGINA
    for (let i = 1; i < arrayElementAPI.length; i++) {
      // SALVO IL SUO INDICE IN UNA VARIABILE
      const element = arrayElementAPI[i];
      // DENTRO LA VARIABILE CHE HO CREATO, METTO DENTRO LA STRUTTURA HTML
      newPolaroid += `
          <div class="polaroid">
              <img class="pin" src="img/pin.svg" alt="Pin" />
              <img class="photo" src="${element.url}" alt="${element.title}" />
              <div class="caption">${element.title} - ${element.date}</div>
          </div>
        `;
    }
    // A CICLO TERMINATO, STAMPO IN PAGINA HTML AGGIUNGENDO GIA' ALLA POLAROID PRESENTE USANDO +=
    containerElement.innerHTML += newPolaroid;
  })
  .catch((error) => {
    console.error("error");
  });
