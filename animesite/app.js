const MenuBtn = document.getElementById("Menu-Btn")
const OtherNavbar = document.getElementById("Other-Navbar")
MenuBtn.onclick = ()=>{
    if (OtherNavbar.classList.contains("show")) {
        OtherNavbar.classList.remove("show")
    }
    else{
        OtherNavbar.classList.add("show")
    }
}
var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}













































