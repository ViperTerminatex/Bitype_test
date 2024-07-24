ballance = document.getElementById("ballance");

var balance = 0;

function fivebitsbought(){
    alert("you got 5 bits!");
    balance += 5;
    localStorage.setItem("balance", balance);
}

window.onload = function (){
    localStorage.getItem("balance", balance);
}

function getFF(){
    if(balance <= "5"){
        let gotfont = true;
    }
    if(gotfont = true){
        alert("AAA-IU3-B55-099");
        balance - 5;
        localStorage.setItem("balance", balance);
    }
    if(balance > "5"){
        console.error("not enough bits!");
    }
}
