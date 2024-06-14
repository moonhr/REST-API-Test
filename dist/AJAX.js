import { url } from "./url.js";
import { MakeLi } from "./MakeLi.js";
/**
 * * ajax
 */
export const AJAX = () => {
    const main = document.getElementById("main");
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET', url, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log("데이터 받은 후 조회");
            const result = JSON.parse(xhr.responseText);
            console.log(result.response.body.items);
            const items = result.response.body.items;
            const ul = document.createElement("ul");
            MakeLi(items, ul);
            const div = document.createElement("div");
            console.log("2");
            div.appendChild(ul);
            main.appendChild(div);
        }
    };
    xhr.send();
};
