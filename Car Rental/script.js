//--------------------------Part 1-------------------------------------
var buttons = document.querySelectorAll(".btn");
var cards = document.querySelectorAll(".item");

buttons.forEach(function (element) {
    element.addEventListener("click", myClick);

    function myClick() {
        var btnText = this.textContent.toLowerCase();
        cards.forEach(function (element) {
            if (btnText == "all") {
                element.style.display = "block";
            }
            else if (element.classList.contains(btnText)) {
                element.style.display = "block";
            }
            else {
                element.style.display = "none";
            }
        })
    }
})

var carImage = document.querySelectorAll("img");
carImage.forEach(function (image) {
    image.addEventListener("mouseover", myMouseOver);
    image.addEventListener("mouseout", myMouseOut);

    function myMouseOver() {
        this.style.width = "100%";
        this.style.height = "70%";
    }
    function myMouseOut() {
        this.style.width = "100%";
        this.style.height = "55%";
    }
})
//--------------------------Part 1-------------------------------------


//--------------------------Part 2-------------------------------------
var car_model = document.querySelectorAll(".card-text");
var inputField = document.querySelector("#searchBox");
var car_description = document.querySelectorAll(".card-title")

inputField.addEventListener("keyup", mySearch);

function mySearch() {
    var inputText = inputField.value.toLowerCase();
    var i = 0
    car_model.forEach(function (element) {
        if (element.textContent.toLowerCase().includes(inputText) || car_description[i].textContent.toLowerCase().includes(inputText)) {
            cards[i].style.display = "block";
        }
        else {
            cards[i].style.display = "none";
        }
        i++;
    })
}
//--------------------------Part 2-------------------------------------