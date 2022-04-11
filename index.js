const setTheme = (e) => {
  const target = e.target;
  const body = document.getElementsByTagName("body");
  if (target.id) {
    console.log(target.id);
    body[0].className = target.id;
  }
};

// 일단 eval 사용 -> 이후에 수정
// output: [inputNum, expression]
const opertor = (numArr, expression, oper) => {
  if (expression[expression.length - 1] === "=") {
    const ex = document.querySelector(".expression");
    ex.innerText = "";
    return [numArr, " " + numArr + " " + oper];
  }
  if (expression === "") {
    return [numArr, " " + numArr + " " + oper];
  } else {
    return [
      eval((expression + numArr).replace(/x/gi, "*")),
      " " + numArr + " " + oper,
    ];
  }
};
let flag = true; // 숫자가 뒤에 더 붙어야 하는 경우 true, 숫자를 다 지우고 다시 작성해야 하는 경우 false

const clickBtn = (e) => {
  const btn = e.target.innerText; // 클릭한 버튼
  const inputNum = document.querySelector(".inputNum");
  const expression = document.querySelector(".expression");
  if (btn === "." && !inputNum.value.includes(".")) {
    // .을 눌렀을 경우 inputNum에 .이 없는 경우만 추가
    inputNum.value += ".";
  } else if (btn === "DEL") {
    // DEL 버튼을 눌렀을 때
    const tmp = [...inputNum.value];
    tmp.pop();
    if (tmp.length === 0) tmp.push("0");
    inputNum.value = tmp.join("");
    flag=true;
  } else if (btn === "-" || btn === "+" || btn === "/" || btn === "x" || btn==='=') {
    flag = false;
    const [input, div] = opertor(inputNum.value, expression.innerText, btn);
    inputNum.value = input;
    expression.innerText += div;

  } else if (btn === "RESET") {
    inputNum.value = 0;
    expression.innerText = "";
    flag = true;
  } else if (!isNaN(btn)) {
    // 숫자버튼을 클릭했을 경우
    console.log("flag: ", flag)
    if (!flag) {
      inputNum.value = "";
      flag = true;
    }
      if (expression.innerText[expression.innerText.length - 1] === "=") {
        expression.innerText = "";
      }
      if (inputNum.value[0] === "0") inputNum.value = "";
      inputNum.value += btn;
    
  }
};
