import { loadData } from "./api.js";
import { createCard } from "./utils.js";
const init = async () => {
  const cardsContainer = document.getElementById("issuesCardSection");

  const data = await loadData();

  data.forEach((cardInfo) => {
    createCard(cardsContainer, cardInfo);
  });
};

init();
