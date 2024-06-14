import {url} from "./url.js"

const root = document.getElementById('root')!;
const main = document.createElement("main");
root.appendChild(main);

const button = document.createElement("button")
button.textContent = "대전광역시 전동킥보드 주차장"

main.appendChild(button)

const AJAX = () => {
  const xhr = new XMLHttpRequest()
  console.log(xhr);
  xhr.open('GET', url, true)

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("데이터 받은 후 조회")

      const result = JSON.parse(xhr.responseText)
      console.log(result.response.body.items)

      //items 타입 선언 해야함
      const items: string[] = result.response.body.items

      const itemArr: object[] = [];
      const itemKey: object[] = [];

      const ul = document.createElement("ul")

      items.forEach((element: string) => {
        const itemValue: object[] = [];
        const li = document.createElement("li");

        itemArr.push(Object.entries(element));
        // console.log(element)
        itemKey.push(Object.keys(element));
        itemValue.push(Object.values(element));

        li.textContent = itemValue.toLocaleString();
        ul.appendChild(li);
      });
      const div = document.createElement("div");

      div.appendChild(ul);

      main.appendChild(div);
      

    }
  }

  xhr.send();
}

button.addEventListener('click', AJAX)
