let input = document.querySelector('#inputBox');
let buttons = document.querySelectorAll("button");
let str = "";
let arr = Array.from(buttons);
//console.log(arr);
arr.forEach((btn) =>{
    btn.addEventListener("click",(e) =>{
        if(e.target.innerHTML === "AC"){
            str = "";
            console.log(str);
            input.value = str;
        }else if(e.target.innerHTML === "DEL"){
            str = str.substring(0, str.length-1);
            console.log(str);
            input.value = str;
        }else if(e.target.innerHTML === "="){
            str = eval(str);
            console.log(str);
           input.value = str;
        }else{
            str += e.target.innerHTML;
            console.log(str);
            input.value = str;        }
    })
})