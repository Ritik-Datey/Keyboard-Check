const key = document.getElementById('key');
const keyCode =document.querySelector("#keyCode");

window.addEventListener("keydown", (e) => {
    key.innerText = `key you press : ${e.key === " "? "space" : e.key}`;
    keyCode.innerText = `key code is : ${e.keyCode}`
})

