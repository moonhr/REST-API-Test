"use strict";
console.log('메롱');
const endpoint = `http://apis.data.go.kr/1400000/forestStusService`;
const keyName = `SP6poFNj53tVrUmPFA7YiAuohTBnOXQ%2BUE4J6uq0ItPV49i%2Bu2%2FVXlNUnq5v3WumEyZthjVOj9wG%2FotkQW%2F5kg%3D%3D`;
const url = `${endpoint}/getfirestatsservice?serviceKey=${keyName}&numOfRows=1000&pageNo=1&searchStDt=20240101&searchEdDt=20240613`;
console.log(url);
