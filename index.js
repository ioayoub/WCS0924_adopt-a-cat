const cards = document.querySelector(".cards");
cards.innerHTML = "";

const animalsToAdopt = [
  {
    name: "Lucky",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tiffanie_at_cat_show.jpg/199px-Tiffanie_at_cat_show.jpg",
  },
  {
    name: "Symba",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tiffany4_%282018%3B_cropped_2023%29.jpg/240px-Tiffany4_%282018%3B_cropped_2023%29.jpg",
  },
  {
    name: "Léo",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Norskskogkatt_Evita_3.JPG/245px-Norskskogkatt_Evita_3.JPG",
  },
  {
    name: "Milo",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/CyprusShorthair.jpg/320px-CyprusShorthair.jpg",
  },
  {
    name: "Charly",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Highlander-7.jpg/293px-Highlander-7.jpg",
  },
];

const ADOPTME_TEXT = "Adopt Now";

function createCard(animal) {
  // const name = animal.name;
  // const picture = animal.picture;

  const { name, picture } = animal;

  const figure = document.createElement("figure");
  figure.classList.add("card");
  cards.appendChild(figure);

  const figureImage = document.createElement("img");
  figureImage.classList.add("card-img");
  figureImage.src = picture;
  figureImage.alt = `Image de chat ${name}`;
  figure.appendChild(figureImage);

  const figCaption = document.createElement("figcaption");
  figCaption.classList.add("card-body");
  figure.appendChild(figCaption);

  const figCaptionTitle = document.createElement("h2");
  figCaptionTitle.classList.add("card-title");
  figCaptionTitle.textContent = name;
  figCaption.appendChild(figCaptionTitle);

  const figCaptionButton = document.createElement("button");
  figCaptionButton.classList.add("card-button");
  figCaptionButton.textContent = ADOPTME_TEXT;

  figCaptionButton.addEventListener("click", () => alert(`${name} adopted !`));

  figCaption.appendChild(figCaptionButton);
}

animalsToAdopt.forEach(createCard);
