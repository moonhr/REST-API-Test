/**
 * * 배열의 value값을 ul의 li로 추가
 * @param arr 
 * @param ul 
 */
export const MakeLi = (arr: string[], ul: HTMLUListElement) => {

  arr.forEach((element: string) => {
    const itemValue: object[] = [];
    const li = document.createElement("li");
    itemValue.push(Object.values(element));
    li.textContent = itemValue.toLocaleString();
    ul.appendChild(li);
  });
}