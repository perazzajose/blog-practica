
const botonswitch = document.querySelector("#switch");

botonswitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
     botonswitch.classList.toggle('active');
});