export const manageSpinner = (status, container) => {
  let statusIcon = status;
  const spinnerContainer = document.getElementById("spinnerContainer");
  if (statusIcon) {
    spinnerContainer.classList.remove("hidden");
    container.classList.add("hidden");
  } else {
    spinnerContainer.classList.add("hidden");
    container.classList.remove("hidden");
  }
};

export const createLabelTag = (values) => {
  //   console.log(values);
  const labelTag = values.map((ele) => {
    if (ele == "bug") {
      return `<span class="bg-[#FECACA] text-[#EF4444] font-semibold w-auto capitalize text-center flex justify-center items-center px-3 rounded-2xl gap-1 py-1 "><i class="fa-solid fa-bug"></i>${ele}</span> `;
    } else if (ele == "help wanted") {
      return `<span  class="bg-[#FDE68A] text-[#F59E0B] font-semibold w-auto capitalize text-center flex justify-center items-center px-3 rounded-2xl gap-1 py-1 "><i class="fa-solid fa-life-ring"></i> ${ele}</span> `;
    } else {
      return `<span  class="bg-[#CBFADB] text-[#00A96E] font-semibold w-auto capitalize text-center flex justify-center items-center px-3 rounded-2xl gap-1 py-1  ">
  <i class="fa-brands fa-flutter"></i>${ele}
</span>`;
    }
  });

  return labelTag.join(" ");
};
export const noDataFound = () => {
  return `<section class="flex flex-col flex-1 w-screen  items-center justify-center  text-center py-28 bg-gray-50">
  <!-- Icon -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-16 w-16 text-gray-400 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M9 14l2-2 4 4M7 10h10M7 6h10M7 2h10" />
  </svg>

  <!-- Message -->
  <h2 class="text-2xl font-semibold text-gray-700 mb-2">No Data Found</h2>
  <p class="text-gray-500">We couldn’t find any results for your search.</p>

  <!-- Optional Action Button -->
  <button
    class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
  >
    Reload
  </button>
</section>`;
};

const statusIcon = (status) => {
  if (status === "closed") {
    return `<span class="bg-[#F0E2FF] w-6 rounded-full h-6 flex justify-center items-center">
   <i class="fa-regular fa-circle-check text-[#A855F7]"></i>
      </span> `;
  } else {
    return `<span class="bg-[#CBFADB] w-6 rounded-full h-6 flex justify-center items-center">
      <span class=" w-4  h-4  border-dotted  border-2 border-[#00A96E] rounded-full"></span>
      </span> `;
  }
};

export const authorNameStyle = (name) => {
  //   const name = "sarah_dev";
  const names = name.split("_");
  const capitalize = names.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  return capitalize.join(" ");
};

export function createCard(cardsContainer, cardInfo) {
  const card = document.createElement("div");
  card.innerHTML = `<div    onclick="my_modal_5.showModal()" id="${cardInfo.id}" class="card w-full h-full bg-base-100 shadow-sm border-t-6 ${cardInfo.status == "closed" ? "border-t-[#A855F7]" : "border-t-[#00A96E]"}">

   <div class=" card-body h-full pb-0 ">
     <div class="flex justify-between ">
    ${statusIcon(cardInfo.status)}

     <span 
     class="font-semibold w-16 capitalize text-center flex justify-center items-center px-3 rounded-2xl 
   ${
     cardInfo.priority === "high"
       ? "bg-[#FECACA] text-[#EF4444]"
       : cardInfo.priority === "medium"
         ? "bg-[#FDE68A] text-[#F59E0B] "
         : "bg-[#CBFADB] text-[#00A96E]"
   }"> 
    <span>${cardInfo.priority}</span>
    </span>
  </div>
   

   <h2 class="text-xl font-bold pt-4 flex-1">${cardInfo.title}</h2>
   <p class="flex-1">${cardInfo.description}</p>

   

 <div class=" flex justify-start gap-2 items-end text-xs">
   ${createLabelTag(cardInfo.labels)}
  </div>

   </div>
   <div class="divider"></div>
   <div class="card-body pt-0">
   <p>${authorNameStyle(cardInfo.author)}</p>
   <p>${new Date(cardInfo.createdAt).toLocaleDateString()}</p>
   </div>
</div> `;
  cardsContainer.appendChild(card);
}

export const addAndRemoveBtnClass = (container, child) => {
  const allBtn = container.querySelector("#allBtn");
  const closedBtn = container.querySelector("#closedBtn");
  const openBtn = container.querySelector("#openBtn");
  const addStyleBtn = container.querySelector(`#${child}`);

  allBtn.classList.add("btn-outline");
  closedBtn.classList.add("btn-outline");
  openBtn.classList.add("btn-outline");
  addStyleBtn.classList.remove("btn-outline");
};
