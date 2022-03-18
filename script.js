console.log("awik");

function calc(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let pilihan = document.getElementById("pilihan").value;

    if(pilihan === "+"){
        document.getElementById("result").value = num1 + num2;
    }

    if(pilihan === "-"){
        document.getElementById("result").value = num1 - num2;
    }

    if(pilihan === "x"){
        document.getElementById("result").value = num1 * num2;
    }

    if(pilihan === "/"){
        document.getElementById("result").value = num1 / num2;
    }
}