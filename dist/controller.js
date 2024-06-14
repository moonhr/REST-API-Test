"use strict";
const endpoint = `http://apis.data.go.kr/1400000/forestStusService`;
const keyName = `SP6poFNj53tVrUmPFA7YiAuohTBnOXQ%2BUE4J6uq0ItPV49i%2Bu2%2FVXlNUnq5v3WumEyZthjVOj9wG%2FotkQW%2F5kg%3D%3D`;
const url = `${endpoint}/getfirestatsservice?serviceKey=${keyName}&numOfRows=1000&pageNo=1&searchStDt=20240101&searchEdDt=20240613`;
console.log(url);
const AJAX = () => {
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log("데이터 받은 후 조회");
            //* 얘 왜 안돼?
            // const result = JSON.parse(xhr.responseText)
            //* 얘 왜 돼?
            const result = new DOMParser().parseFromString(xhr.responseText, 'text/xml');
            console.log(result);
        }
    };
};
AJAX();
