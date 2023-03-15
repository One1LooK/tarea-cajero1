

let rut = null;
let contraseña = null;

let root = document.getElementById('root')
let root0 = document.getElementById('root0')
function datos() {

    rut = document.getElementById("rut").value;
    contraseña = document.getElementById("contraseña").value;

    //manuel
    if (rut === "11223344-5" && contraseña === '1122') {
        window.location = "/cajero/manuel.html"
    }
    //fabricio
    else if (rut === "12345678-9" && contraseña === '1234') {
        window.location = "/cajero/fabricio.html"
    }
    //javier
    else if (rut === "98765432-1" && contraseña === '4321') {
        window.location = "/cajero/javier.html"
    }
    else if (rut !== "11223344-5" && rut !== "12345678-9" && rut !== "98765432-1") {
        root.innerHTML = `<p> El rut ${rut} es incorrecto </p>`
    }
    else if (contraseña !== '1122' && contraseña !== '1234' && contraseña !== '4321') {
        root0.innerHTML = `<p> La contraseña ${contraseña} es incorrecta </p>`
    }

};





function salir() {

    window.location = "/cajero/index.html"

}






