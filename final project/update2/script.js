// calculator.html


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

    document.querySelector("#riddle-title").innerHTML = `<u>Title</u>: ${riddle[0].title}`;
    document.querySelector("#riddle-question").innerHTML = `<u>Question</u>: ${riddle[0].question}`;
    document.querySelector("#riddle-answer").innerHTML = `<u>Answer</u>: ${riddle[0].answer}`;
});