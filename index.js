
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const description = document.getElementById("description").value;

  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#todoEntry");

  const clone = template.content.cloneNode(true);
  clone.querySelector("#todoTitle").textContent = title;
  clone.querySelector("#todoDescription").textContent = description;

  tbody.appendChild(clone);

});