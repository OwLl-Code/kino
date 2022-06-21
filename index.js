const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
    if (!event.target.classList.contains("booked")){
        event.target.classList.toggle("active");
        totalPrice = schemeSvg.querySelectorAll(".active").length * cost;
        totalPriceTag.textContent = totalPrice;
    }
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



function myFunc() {
    document.getElementById("ddown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


var modal = document.getElementById('id01');

//modal pop-up
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}