let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let list = document.getElementById("list-el");

inputBtn.addEventListener("click", () => {
  if (inputEl.value !== "") {
    myLeads.push(inputEl.value);
    renderList();
  }
  inputEl.value = "";
});

function renderList() {
  list.innerHTML = "";
  for (let i = 0; i < myLeads.length; i++) {
    const li = document.createElement("li");
    li.textContent = myLeads[i];
    list.append(li);
  }
}
