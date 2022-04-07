const setTheme = (e) =>{
    const target = e.target;
    const body = document.getElementsByTagName('body');
    if(target.id){
        console.log(target.id)
        body[0].className = target.id
    }
}


// const oper = [];
// const expression = [];  // 인풋 숫자 위 식
// const clickBtn = (e) =>{
//     const num = e.target.innerText; // 현재 누른 숫자
//     const inputNum = document.querySelector('.inputNum');   
//     const div = document.querySelector(".inputNum2");
//     let stack = [...inputNum.value];    //inputNum에 있는 모든 숫자를 stack에
//     if(+ num){  // 숫자를 눌렀을 경우
//         stack.push(num)
//     }else if(num==='-'||num==='+'||num==='/'||num==='x'){   // 연산자를 눌렀을 경우
//         stack = opertor(stack, num, oper);
//     }else if(num==='DEL'){
//         stack.pop();
//     }else if(num==='.'){
//         decimalPoint(stack)
//     }else if(num==='RESET'){
        
//     }else if(num==='='){

//     }
//     if(stack[0]==='0'){
//         stack.shift();
//     }
//     inputNum.value = stack.join('');

// }

// const opertor = (stack, num, oper) =>{
//     // console.log("!(+ stack[stack.length-1])",!(+ stack[stack.length-1]))
//     if(!(+ stack[stack.length-1])){
//         return stack;
//     }else{
//         const tmp = oper.pop();
//         const div = document.querySelector(".inputNum2");
//         if(!tmp){
//             div.innerText = (stack.join('')+num);
//             console.log(num)
//             // stack 비우기
//             oper.push(num);
//             return stack;
//         }else{
//             switch (tmp) {
//                 case '+':
//                     const divNum = div.innerText;
//                     div.innerText = ''
//                     return ((+ stack.join(''))+(+ divNum)).toString().split('');
//                     break;
            
//                 default:
//                     break;
//             }
//             console.log("tmp: ",tmp)
//         }
//         // stack.push(num);
//         // TODO 위로 숫자들이 올라가야함
//     }
// }

// const decimalPoint = (stack)=>{
//     // 바로 앞에 숫자일 경우 -> stack 가 비어 있지 않은 경우 + stack에 .이 없는 경우
//     if(stack.length>0&&!stack.includes('.')){
//         stack.push('.');
//     }else{

//     }

// }
// output: [inputNum, expression]
const opertor =(numArr, expression, oper)=>{
    console.log(expression);
    if(expression===''){
        console.log('비어있따고고고오롱롱ㄹ')
        return [numArr, ' '+numArr+' '+oper]
    }else{
        const num = expression.split('');
        const oper2 = num.pop();
        // console.log("expression arr: ",num)
        // console.log("expression 마지막: ",oper2)
        switch (expression[expression.length-1]) {
            case '+':
                num.push(oper);
                num.push(' ')
                num.push(numArr);
                calculation(num);
                return [(+ num.join('') + + numArr), ' '+numArr+' '+oper];
                break;
        
            default:
                break;
        }
        return  ''
    }
}

const calculation = arr=>{
    console.log("arr: ",arr)
    console.log("type arr: ", typeof arr)
    const str = arr.join('').split(' ');
    // const tmp = str.split(' ');
    console.log("str: ",str)
    const oper1 = ['x','/'];
    const oper2 = ['+','-'];
    // while(str.length>1){
    // }
    for(let i =0;i<str.length;i++){
        const multi = str.indexOf('x');
        const divi = str.indexOf('/');
        const plus = str.indexOf('+');
        const minu = str.indexOf('-')
        console.log(tmp2)

        // if(isNaN(str[i])){
        //     console.log('숫자가 아님')
        // }
        // if(str[i]===''){
        //     console.log('비어있음', str[i])
        // }else  console.log(str[i])
    }
    // let i = 1;
    // while(true){
    //     if(isNaN(str[i])){
    //         console.log('숫자가 아님');
    //     }
    //     i++
    //     if(str[i]==='') break;
    // }
    // console.log("tmp: ",tmp)
}

let flag = true; // 숫자가 늘어나는 경우 true
const clickBtn = (e) =>{
    const btn = e.target.innerText; // 클릭한 버튼
    const inputNum = document.querySelector('.inputNum');
    const expression = document.querySelector('.expression');
    if(+ btn){  // 숫자버튼을 클릭했을 경우
        if(!flag){
            flag = true;
            inputNum.value = ''
        }
        if(inputNum.value[0]==='0')
            inputNum.value = ''
        inputNum.value+=btn;
    }else if(btn==='DEL'&&flag){
        const tmp = [...inputNum.value]
        tmp.pop();
        if(tmp.length===0) tmp.push('0')
        inputNum.value = tmp.join('');
    }else if(btn==='-'||btn==='+'||btn==='/'||btn==='x'){
        flag = false;
        const [input, div] = opertor(inputNum.value, expression.innerText, btn);
        console.log(input, div)
        inputNum.value = input;
        expression.innerText += div;
    }

}




/* 
식에 아무것도 없을 경우
- 가장 처음연산자 눌러도 반응 x
- 숫자를 클릭할 시 해당 숫자가 input에 push 하여 추가됨
- input에 숫자가 있는 상태로 연산자를 클릭할 경우 숫자와 연산자를 식에 올림 input에는 숫자 그대로

식에 하나이상 있는 경우
- input에 위 식의 결과값
- 가장 처음 연산자 눌러도 반응 x
- 처음 숫자를 클릭할시 input의 숫자가 지워지고 누른 숫자로 변경
- 그 이후는 위와 동일

'.'일 경우
- input에 하나만 가능
- 가장 마지막에 누를 경우 무시하고 식에 올림

'RESET"일 경우
- 식과 input에 있던 정보 모두 삭제

'='일 경우
- 식이 없을 경우 input 숫자와 = 이 식으로 올라감
- 식이 있고 input에 식의 결과값이 있을 경우(숫자를 누르지 않은 경우) 
    input의 수를 식의 마지막에 삽입하여 계산
*/