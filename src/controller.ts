import {AJAX} from "./AJAX.js"

const root = document.getElementById('root')!;
const main = document.createElement("main")
main.setAttribute("id", "main");
root.appendChild(main);
const button = document.createElement("button")
button.textContent = "대전광역시 전동킥보드 주차장"
main.appendChild(button)

button.addEventListener('click', AJAX)