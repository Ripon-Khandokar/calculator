
function number (button){
   document.getElementById("display").innerText += button;
  
}

function operator(simbal){
   document.getElementById("display").innerText += simbal;

}

function result(){
    let x = document.getElementById("display").innerText;
    let result = eval(x);
    document.getElementById("display").innerText = result;
}

function clear(h){
    let x = document.getElementById("display").value;
    x = h;
}
