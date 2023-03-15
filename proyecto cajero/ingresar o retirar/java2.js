let sumas = document.getElementById('suma');
let numero2 = document.getElementById('numero2')
let root = document.getElementById('root')
let resta = document.getElementById('restar');
let numero3 = document.getElementById('numero3')
let root2 = document.getElementById('root2')

let dinero4 = 500
let dinero5 = 300
let dinero6 = 250
let dinero7 = 100
let dinero8 = 50
let dinero9 = 10


let manuel1 = [120];
let javier1 = [350];
let fabricio1 = [700];

















    







let moneda = JSON.parse(localStorage.getItem("dinero1"))
let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
let moneda4 = JSON.parse(localStorage.getItem("dinero3"))




//suma manuel
function sumardinero4() {

    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero4))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero4 + dinero4))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero4 - dinero4))
    }
    

};
function sumardinero5() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero5))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero5 + dinero5))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero5 - dinero5))
    }


};1
function sumardinero6() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero6))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero6 + dinero6))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero6 - dinero6))
    }

};
function sumardinero7() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero7))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero7 + dinero7))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero7 - dinero7))
    }

   
};
function sumardinero8() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero8))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero8 + dinero8))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero8 - dinero8))
    }
    

    
};
function sumardinero9() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero9))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero4 + dinero4))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero4 - dinero4))
    }

   
};

//suma javier
function sumarplata4() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero4))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero4 + dinero4))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero4 - dinero4))
    }

    
};
function sumarplata5() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero5))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero5 + dinero5))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero5 - dinero5))
    }

   
};
function sumarplata6() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero6))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero6 + dinero6))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero6 - dinero6))
    }

    
};
function sumarplata7() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero7))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero7 + dinero7))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero7 - dinero7))
    }

    
};
function sumarplata8() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero8))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero8 + dinero8))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero8 - dinero8))
    }

    
};
function sumarplata9() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero9))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero9 + dinero9))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero9 - dinero9))
    }

   
};

//suma fabricio
function sumardolares4() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero4))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero4 + dinero4))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero4 - dinero4))
    }

   
};
function sumardolares5() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero5))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero5 + dinero5))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero5 - dinero5))
    }

   
};
function sumardolares6() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero6))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero6 + dinero6))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero6 - dinero6))
    }

   
};
function sumardolares7() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero7))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero7 + dinero7))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero7 - dinero7))
    }

   
};
function sumardolares8() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero8))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero8 + dinero8))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero8 - dinero8))
    }

   
};
function sumardolares9() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero9))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero4 + dinero9))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero4 - dinero9))
    }

   
};









//resta manuel
function restardinero44() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero4))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero4 + dinero4))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero4 - dinero4))
    }


   
};

function restardinero55() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero5))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero5 + dinero5))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero5 - dinero5))
    }


   
};

function restardinero66() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero6))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero6 + dinero6))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero6 - dinero6))
    }


  
};

function restardinero77() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero7))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero7 + dinero7))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero7 - dinero7))
    }


   
};

function restardinero88() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero8))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero8 + dinero8))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero8 - dinero8))
    }


   
};

function restardinero99() {
    let moneda = JSON.parse(localStorage.getItem("dinero1"))
    let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero9))
    if(JSON.parse(localStorage.getItem("dinero1")) >=990){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda - dinero9 + dinero9))
    }
    if(JSON.parse(localStorage.getItem("dinero1")) <=10){
        let moneda1 = localStorage.setItem("dinero1", JSON.stringify( moneda + dinero9 - dinero9))
    }


    
};

//resta javier
function restarplata44() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero4))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero4 + dinero4))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero4 - dinero4))
    }


   
};

function restarplata55() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero5))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero5 + dinero5))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero5 - dinero5))
    }


   
};

function restarplata66() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero6))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2- dinero6 + dinero6))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero6 - dinero6))
    }


    
};

function restarplata77() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero7))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero7 + dinero7))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero7 - dinero7))
    }


   
};

function restarplata88() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero8))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero8 + dinero8))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero8 - dinero8))
    }


    
};

function restarplata99() {
    let moneda2 = JSON.parse(localStorage.getItem("dinero2"))
    let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero9))
    if(JSON.parse(localStorage.getItem("dinero2")) >=990){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 - dinero9 + dinero9))
    }
    if(JSON.parse(localStorage.getItem("dinero2")) <=10){
        let moneda1 = localStorage.setItem("dinero2", JSON.stringify( moneda2 + dinero9 - dinero9))
    }


  
};

//resta fabricio
function restardolares44() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero4))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4- dinero4 + dinero4))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero4 - dinero4))
    }


  
};

function restardolares55() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero5))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero5 + dinero5))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero5 - dinero5))
    }


    
};

function restardolares66() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero6))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero6 + dinero6))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero6 - dinero6))
    }


   
};

function restardolares77() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero7))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero7 + dinero7))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero7 - dinero7))
    }


   
};

function restardolares88() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero8))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero8 + dinero8))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero8 - dinero8))
    }


   
};

function restardolares99() {
    let moneda4 = JSON.parse(localStorage.getItem("dinero3"))
    let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero9))
    if(JSON.parse(localStorage.getItem("dinero3")) >=990){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 - dinero9 + dinero9))
    }
    if(JSON.parse(localStorage.getItem("dinero3")) <=10){
        let moneda1 = localStorage.setItem("dinero3", JSON.stringify( moneda4 + dinero9 - dinero9))
    }


    
};
















function salir1(boton5) {

    window.location = "/cajero/manuel.html"

};

function salir2(boton6) {

    window.location = "/cajero/javier.html"

};

function salir3(boton7) {

    window.location = "/cajero/fabricio.html"

};




let resultado1 = document.getElementById("resultado00")
let resultado2 = document.getElementById("resultado11")
let resultado3 = document.getElementById("resultado22")

 
if( window.location.href == 'http://127.0.0.1:5500/ingresar%20o%20retirar/saldo-manuel.html'){
    resultado1.innerHTML = `<p class="">$ ${moneda}</p>`
  
}
if( window.location.href == 'http://127.0.0.1:5500/ingresar%20o%20retirar/saldo-javier.html'){
    resultado2.innerHTML = `<p class="">$ ${moneda2}</p>`
  
}
if( window.location.href == 'http://127.0.0.1:5500/ingresar%20o%20retirar/saldo-fabricio.html'){
    resultado3.innerHTML = `<p class="">$ ${moneda4}</p>`
  
}















