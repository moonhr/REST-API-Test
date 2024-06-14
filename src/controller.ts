const endpoint = `http://apis.data.go.kr/6300000/kickBoard`

const keyName = `SP6poFNj53tVrUmPFA7YiAuohTBnOXQ%2BUE4J6uq0ItPV49i%2Bu2%2FVXlNUnq5v3WumEyZthjVOj9wG%2FotkQW%2F5kg%3D%3D`;

const url = `${endpoint}/getkickBoard?serviceKey=${keyName}&pageNo=1&numOfRows=1000`;


console.log(url);

const AJAX = () => {
  const xhr = new XMLHttpRequest()
  console.log(xhr);
  xhr.open('GET', url, true)
  
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("데이터 받은 후 조회")
    
      const result = JSON.parse(xhr.responseText)
      console.log(result)
    }
  }
}
AJAX();