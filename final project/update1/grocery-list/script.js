const groceries = document.querySelector(".groceries")[0];
const clear = document.querySelector("#clear");
const allItems = document.querySelector("#allItems");
const userInput = document.querySelector("#user-input");

clear.addEventListener("click", function () {
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addItem();
    }
})

function addItem() {
    let h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function () {
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
}