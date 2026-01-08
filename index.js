
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = ["Abhimanyu ", "Aman ", "Avy"];
let list = document.getElementById("list-el");

inputBtn.addEventListener("click", () => {
  for (let i = 0; i < myLeads.length; i++) {
    // list.innerHTML += "<li>" + myLeads[i] + "</li>";
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    list.append(li)
}
});
