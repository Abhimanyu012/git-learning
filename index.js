const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click",() => {
  console.log("hello world");
});

const box = document.getElementsByClassName("child-box")

box.addEventListener("click",()=>{
    console.log("use have clicked on this box")
})