const setTheme = (e) =>{
    const target = e.target;
    const body = document.getElementsByTagName('body');
    if(target.id){
        console.log(target.id)
        body[0].className = target.id
    }
}

const oper = [];

const clickBtn = (e) =>{
    const num = e.target.innerText;
    const inputNum = document.querySelector('.inputNum');
    const stack = [...inputNum.value];
    if(+ num){
        stack.push(num)
    }else if(num==='-'||num==='+'||num==='/'||num==='x'){
        opertor(stack, num, oper, inputNum.value);
        console.log('함수 밖: ',oper)
    }else if(num==='DEL'){
        stack.pop();
    }else if(num==='.'){
        decimalPoint(stack)
    }else if(num==='RESET'){
        
    }else if(num==='='){

    }
    console.log("satck: ",stack)

    inputNum.value = stack.join('');
    // console.log(inputNum.value)

}

const opertor = (stack, num, oper) =>{
    // console.log("!(+ stack[stack.length-1])",!(+ stack[stack.length-1]))
    if(!(+ stack[stack.length-1])){
        return;
    }else{
        const tmp = oper.pop();
        const div = document.querySelector(".inputNum2");
        if(!tmp){
            console.log("tmp not")
            div.innerText = stack.join('');
            // stack 비우기
            console.log("satck: ",stack)
            oper.push(num);
        }else{
            div.innerText = ''
        }
        console.log("tmp:"+tmp);
        // stack.push(num);
        // TODO 위로 숫자들이 올라가야함
    }
}

const decimalPoint = (stack)=>{
    // 바로 앞에 숫자일 경우 
    if((+ stack[stack.length-1])){
        stack.push('.')
    }else if(!(stack[stack.length-1]==='.')){
        stack.push('0');
        stack.push('.');
    }
}