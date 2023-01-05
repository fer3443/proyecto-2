if(document.title ==="Formulario"){
    const inputNombre= document.querySelector("#nombre")
    const inputApellido= document.querySelector("#apellido")
    const inputEdad= document.querySelector("#edad")
    const inputMail= document.querySelector("#user")
    const inputTelefono= document.querySelector("#telefono")
    const inputCalle= document.querySelector("#calle")
    const inputNumero= document.querySelector("#numero")
    const inputCiudad= document.querySelector("#ciudad")
    const inputSexo= document.querySelector("input[name=sexo]")
    const boton= document.querySelector("#botonRegistro")
    let personal= []
    
    if(localStorage.getItem("personal")){
        personal= JSON.parse(localStorage.getItem("personal"))
    }
}