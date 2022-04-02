const setTheme = (e) =>{
    const target = e.target;
    const body = document.getElementsByTagName('body');
    if(target.id){
        console.log(target.id)
        body[0].className = target.id
    }
}