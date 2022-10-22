const button = document.querySelector(".btn1");
button.addEventListener("click", (event) => {
  let x = event.pageX - button.offsetLeft;
  let y = event.pageY - button.offsetTop;
  let ripple = document.createElement("span");
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  button.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 500);
});
const sortbtn = document.querySelectorAll(".btn");
sortbtn.forEach((btn) => {
  btn.addEventListener("mouseover", (event) => {
    const x = event.pageX - btn.offsetLeft;
    const y = event.pageY - btn.offsetTop;
    btn.style.setProperty("--x-pos", x + "px");
    btn.style.setProperty("--y-pos", y + "px");
  });
});
