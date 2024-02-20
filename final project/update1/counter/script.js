let count = 0;

const changeCount = (num) => {
    count += num;
    document.querySelector("#count").innerHTML = count;
}