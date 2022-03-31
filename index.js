const setTheme = (e) =>{
    const target = e.target;
    const body = document.getElementsByTagName('body');
    body[0].className = target.id
}