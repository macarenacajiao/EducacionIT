//1-DOM
const frm = document.querySelector("form");
const user = document.querySelector("input[name=user]")
const pass = document.querySelector("input[name=password]")
const dni = document.querySelector("input[name=dni]")
    //2-EVENTOS
frm.addEventListener("submit", handleSubmit);
//3-CALLBACK
function handleSubmit(e) {
    e.preventDefault();
    console.log("event", e);
    /*Validar EN EL SUBMIT
    if(user.value != "" && pass.value != "" && dni.value !=""){
    frm.submit();
    }
    else{
    console.error ("Revisar datos");
    }*/
    if (validate(user) && validate(pass) && validate(dni)) {
        frm.submit;
    } else {
        console.error("Error");
    }
}
//4-FUNCIONES
function validate(nodo) {

	nodo.classList.remove ("ok", "error"); //saca las clases

    if (nodo.value != "") {
        //Está OK!
        nodo.classList.add("ok");
        return true;
    } 
    else {
        //Error!
        nodo.classList.add("error");
        return false;
    }
}
