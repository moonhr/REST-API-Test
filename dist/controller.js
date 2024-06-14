"use strict";
const endpoint = `http://apis.data.go.kr/6300000/kickBoard`;
const keyName = `SP6poFNj53tVrUmPFA7YiAuohTBnOXQ%2BUE4J6uq0ItPV49i%2Bu2%2FVXlNUnq5v3WumEyZthjVOj9wG%2FotkQW%2F5kg%3D%3D`;
const url = `${endpoint}/getkickBoard?serviceKey=${keyName}&pageNo=1&numOfRows=1000`;
console.log(url);
const AJAX = () => {
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET', url, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log("데이터 받은 후 조회");
            const result = JSON.parse(xhr.responseText);
            console.log(result.response.body.items);
            //items 타입 선언 해야함
            const items = result.response.body.items;
            const root = document.getElementById('root');
            const main = document.createElement("main");
            const itemArr = [];
            const itemKey = [];
            const ul = document.createElement("ul");
            items.forEach((element) => {
                const itemValue = [];
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
            // console.log(itemKey);
            //console.log(itemValue);
            // div.innerHTML = itemValue.toString();
            // console.log(itemArr.toLocaleString())
            main.appendChild(div);
            root.appendChild(main);
        }
    };
    xhr.send();
};
AJAX();
