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
    // CICLO FOR PER PRENDERE ELEMENTI NELL'ARRAY API
    for (let i = 0; i < arrayElementAPI.length; i++) {
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
    // PRENDO ELEMENTO DELLE FOTO, LO AGGIUNGO DENTRO DOVE RICEVO I DATI DELLE API DA AXIOS
    const photoElement = document.querySelectorAll(".photo");
    console.log(photoElement);
    // CICLO FOR PER AGGIUNGERE L'EVENT LISTENER A TUTTE LE FOTO
    for (let i = 0; i < photoElement.length; i++) {
      const photo = photoElement[i];

      photo.addEventListener("click", function () {
        console.log("Ho cliccato sulla foto");
        if (overlayElement.classList.contains("hidden")) {
          overlayElement.classList.remove("hidden");
        } else {
          // INVECE SE L'OVERLAY E' VISIBILE, LO NASCONDO
          overlayElement.classList.add("hidden");
        }
      });
    }
  })
  .catch((error) => {
    console.error("error");
  });

// PRENDO GLI ELEMENTI IN PAGINA PER APRIRE E CHIUDERE L'OVERLAY
// PRENDO ELEMENTO OVERLAY
const overlayElement = document.getElementById("overlay");
console.log(overlayElement);
// PRENDO ELEMENTO BOTTONE
const buttonElement = document.querySelector(".btn-close");
console.log(buttonElement);
// PRENDO ELEMENTO IMG OVERLAY
const imgOverlayElement = document.querySelector(".img-overlay");
console.log(imgOverlayElement);

// AGGIUNGO L'EVENTO PER CHIUDERE L'OVERLAY
buttonElement.addEventListener("click", function () {
  // NASCONDO L'OVERLAY
  console.log("ho cliccato sul bottone");
  overlayElement.classList.add("hidden");
});
