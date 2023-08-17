const modalElem = document.querySelector("#modal");
const modalTitleElem = document.querySelector("#modal-title");
const modalAuthorElem = document.querySelector("#modal-author");
const modalCateElem = document.querySelector("#modal-cate");
const modalDescElem = document.querySelector("#modal-desc");

/**
 * @param {string} title
 * @param {string} authorName
 * @param {string} category
 * @param {string} desc
 */
function openProjectModal(title, authorName, category, desc) {
  modalTitleElem.innerText = title;
  modalAuthorElem.innerText = authorName;
  modalCateElem.innerText = category;
  modalDescElem.innerText = desc;

  modalElem.style.display = "";
}

function closeProjectModal() {
  modalElem.style.display = "none";
}

document.querySelector(".project-modal").addEventListener("click", () => {
  closeProjectModal();
});

document.querySelector(".project-modal__container").addEventListener("click", (e) => {
  e.stopPropagation();
});

document.querySelector(".project-modal__close").addEventListener("click", (e) => {
  closeProjectModal();
});
