import { loadData, loadDataById } from "./api.js";
import { authorNameStyle, createCard, createLabelTag } from "./utils.js";
const cardsContainer = document.getElementById("issuesCardSection");
const modalContainer = document.getElementById("modal-container");

const init = async () => {
  const data = await loadData();

  data.forEach((cardInfo) => {
    createCard(cardsContainer, cardInfo);
  });
};

init();

cardsContainer.addEventListener("click", (event) => {
  const id = event.target.closest(".card").id;
  const modalCard = document.createElement("div");
  modalContainer.replaceChildren();
  const init = async () => {
    const data = await loadDataById(id);

    modalCard.innerHTML = `<div class="card w-full  bg-base-100 ">
  <div class="card-body w-full">
    <h2 class="font-bold text-xl md:text-2xl">${data.title}</h2>
<div class="flex md:items-center gap-2 justify-start pb-3 pt-1 flex-col md:flex-row ">
<button class="bg-[#CBFADB] text-[#00A96E] font-semibold w-16 capitalize text-center flex justify-center items-center px-3 rounded-2xl" >Opened</button>
<div class="flex items-center gap-1">
<span class="w-2 rounded-full h-2 bg-gray-500 inline-block"></span>
<span class=" inline-block">Opened By ${authorNameStyle(data.assignee) ? `${authorNameStyle(data.assignee)}` : "Chan Badsha Bhuiyan"}</span></div>
<div class="flex items-center gap-1">
<span class="w-2 rounded-full h-2 bg-gray-500 inline-block"></span>
<span>${new Date(data.updatedAt).toLocaleDateString()}</span>
</div>
</div>

    <div class=" flex justify-start gap-2 items-end text-xs">
  ${createLabelTag(data.labels)}
    </div>
    <p class="pt-3">${data.description}</p>
       <div
          class="flex justify-around items-center rounded-lg bg-gray-200 py-6"
        >
            <div>
            <p>Assignee:</p>
            <h3 class="font-bold text-base md:text-lg">${authorNameStyle(data.assignee) ? `${authorNameStyle(data.assignee)}` : "Chan Badsha Bhuiyan"}</h3>
            </div>

            <div>
            <p>Priority:</p>
           <span class="font-semibold w-full capitalize text-center flex justify-center items-center px-3 rounded-2xl text-base   ${
             data.priority === "high"
               ? "bg-[#FECACA] text-[#EF4444]"
               : data.priority === "medium"
                 ? "bg-[#FDE68A] text-[#F59E0B] "
                 : "bg-[#CBFADB] text-[#00A96E]"
           }">
         ${data.priority}
           </span>
            </div>
        </div>
  </div>
</div>`;

    modalContainer.appendChild(modalCard);
  };

  init();
});
