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
  console.log("!!!!!!!", expression, expression[expression.length - 1]);
  if (expression[expression.length - 1] === "=") {
    const ex = document.querySelector(".expression");
    ex.innerText = "";
    return [numArr, " " + numArr + " " + oper];
  }
  console.log(expression);
  if (expression === "") {
    console.log("비어있따고고고오롱롱ㄹ");
    return [numArr, " " + numArr + " " + oper];
  } else {
    const num = expression.split("");
    console.log("opertor() - expression: ", expression);
    console.log("opertor(): ", eval((expression + numArr).replace(/x/gi, "*")));
    return [
      eval((expression + numArr).replace(/x/gi, "*")),
      " " + numArr + " " + oper,
    ];
  }
};

const clickBtn = (e) => {
  const btn = e.target.innerText; // 클릭한 버튼
  const inputNum = document.querySelector(".inputNum");
  const expression = document.querySelector(".expression");
  let flag = true; // 숫자가 늘어나는 경우 true
  if (btn === ".") {
    if (!inputNum.value.includes(".")) {
      inputNum.value += ".";
    }
  } else if (btn === "DEL" && flag) {
    const tmp = [...inputNum.value];
    tmp.pop();
    if (tmp.length === 0) tmp.push("0");
    inputNum.value = tmp.join("");
  } else if (
    btn === "-" ||
    btn === "+" ||
    btn === "/" ||
    btn === "x" ||
    btn === "="
  ) {
    flag = false;
    const [input, div] = opertor(inputNum.value, expression.innerText, btn);
    console.log(input, div);
    inputNum.value = input;
    expression.innerText += div;
  } else if (btn === "RESET") {
    inputNum.value = 0;
    expression.innerText = "";
    flag = true;
  } else {
    // 숫자버튼을 클릭했을 경우
    if (!flag) {
      flag = true;
      inputNum.value = "";
    }
    if (expression.innerText[expression.innerText.length - 1] === "=") {
      expression.innerText = "";
    }
    if (inputNum.value[0] === "0") inputNum.value = "";
    inputNum.value += btn;
  }
};
