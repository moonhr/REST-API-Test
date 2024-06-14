import {url} from "./url.js"
import {MakeLi} from "./MakeLi.js"

const main = document.createElement("main");

/**
 * * ajax
 */
export const AJAX = () => {
  const xhr = new XMLHttpRequest()
  console.log(xhr);
  xhr.open('GET', url, true)

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("데이터 받은 후 조회")

      const result = JSON.parse(xhr.responseText)
      console.log(result.response.body.items)

      const items: string[] = result.response.body.items
      const ul = document.createElement("ul")
      
      MakeLi(items, ul);

      const div = document.createElement("div");
      div.appendChild(ul);
      main.appendChild(div);
    }
  }
  xhr.send();
}