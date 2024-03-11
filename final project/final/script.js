// calculator.html
const display = document.querySelector(".display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// counter.html
let count = 0;

const changeCount = (num) => {
    if (num != 0) {
        count += num;
        document.querySelector(".count").innerHTML = count;
    } else {
        count = 0;
        document.querySelector(".count").innerHTML = count;
    }
}

// hex-color-picker.html
const randomColor = () => {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
    document.querySelector(".hex-code").innerHTML = color.toUpperCase();
}

// riddles.html
addEventListener("load", async () => {
    const riddleAPI = await fetch("https://api.api-ninjas.com/v1/riddles", {
        method: "GET",
        headers: { "X-Api-Key": "lGsAyLWYhrP/sOLMrrdxIA==BzCJrJut9g98gwzm" }
    });
    const riddle = await riddleAPI.json();

    document.querySelector("#riddle-title").innerHTML += riddle[0].title;
    document.querySelector("#riddle-question").innerHTML += riddle[0].question;
    document.querySelector("#riddle-answer").innerHTML += riddle[0].answer;
});

//tip-calculator.html
const amount = document.querySelector("#amount");
const guests = document.querySelector("#guest");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector(".tip-amount");

function calculateTip() {
    const tip = ((amount.value * quality.value) / guests.value).toFixed(2);

    amount.value = "";
    guests.value = "";
    quality.value = "";

    if (tip === "NaN") {
        tipAmount.innerHTML = "Tip $0 each";
        tipAmount.style.display = "block";
    } else {
        tipAmount.innerHTML = `Tip &dollar;${tip} each`;
        tipAmount.style.display = "block";
    }
}

// todo.html
const itemsArr = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
const itemInput = document.querySelector(".items-input");

itemInput.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        const item = itemInput.value;
        createImage(item);
    }
});

document.querySelector("#enter").addEventListener("click", () => {
    const item = itemInput.value;
    createImage(item);
});

function createImage(item) {
    itemsArr.push(item);
    localStorage.setItem("items", JSON.stringify(itemsArr));
    location.reload();
}

function displayItems() {
    let items = "";
    for (let i = 0; i < itemsArr.length; i++) {
        items += `
        <div class="item">
            <div class="input-controller">
                <textarea class="todo" disabled>${itemsArr[i]}</textarea>
                <div class="edit-controller">
                    <i class="fa-solid fa-circle-check deleteBtn"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                </div>
            </div>

            <div class="update-controller" style="display: none;">
                <i class="fa-solid fa-floppy-disk saveBtn"></i>
                <i class="fa-solid fa-xmark cancelBtn"></i>
            </div>
        </div>
        `;
    }
    document.querySelector(".todo-list").innerHTML = items;

    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
}

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i); });
    });
}

function deleteItem(i) {
    itemsArr.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArr));
    location.reload();
}

function activateEditListeners() {
    const editBtn = document.querySelectorAll(".editBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");

    document.querySelector(".todo").style.color = "hsl(0, 0%, 20%)";

    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            updateController[i].style.display = "block";
            inputs[i].disabled = false;
        });
    });
}

function activateSaveListeners() {
    let saveBtn = document.querySelectorAll(".saveBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");

    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => { updateItem(inputs[i].value, i); });
    });
}

function updateItem(text, i) {
    itemsArr[i] = text;
    localStorage.setItem("items", JSON.stringify(itemsArr));
    location.reload();
}

function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll(".cancelBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");

    cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none";
            inputs[i].disabled = true;
        });
    });
}

function displayDate() {
    let date = new Date().toString().split(" ");
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
}

window.onload = function () {
    displayDate();
    displayItems();
}

// contact.html
if (document.referrer == "https://formspree.io/thanks") {
    window.history.back();
}