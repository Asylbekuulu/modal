const modalOver = document.querySelector(".overlay");
const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const contentOver = document.querySelector(".content")

function openModal(){
    console.log("true")
    modalOver.style.opacity = 1;
    contentOver.style.opacity = 1;
    openBtn.style.display = "none";
}

function closeModal(){
    modalOver.style.opacity = 0;
    contentOver.style.opacity = 0;
    openBtn.style.display = "block";
}

openBtn.addEventListener("click", openModal);
closeBtn.onclick = closeModal;

window.onclick = function(event) {
    if(event.target == modalOver){
        closeModal();
    }
}
