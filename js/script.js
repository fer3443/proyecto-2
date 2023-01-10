if(document.title ==="Formulario"){
    const inputNombre= document.querySelector("#nombre")
    const inputApellido= document.querySelector("#apellido")
    const inputEdad= document.querySelector("#edad")
    const inputMail= document.querySelector("#user")
    const inputTelefono= document.querySelector("#telefono")
    const inputCalle= document.querySelector("#calle")
    const inputNumero= document.querySelector("#numero")
    const inputCiudad= document.querySelector("#ciudad")
    const inputSexo= document.querySelectorAll('input[name="sexo"]')
    const formulario= document.querySelector("#form")
    const boton= document.querySelector("#botonRegistro")
    const notificacion= document.querySelector("#notificacion")
    let personal= []
    
    if(localStorage.getItem("personal")){
        personal= JSON.parse(localStorage.getItem("personal"))
    }
    
    class Personal {
        constructor(
            nombre,
            apellido,
            edad,
            mail,
            telefono,
            domicilio,
            sexo
        ){
            this.nombre= nombre
            this.apellido= apellido
            this.edad= edad
            this.mail= mail
            this.telefono= telefono
            this.domicilio= domicilio
            this.sexo= sexo
        }
    }

    boton.addEventListener("click", (e)=> {
        e.preventDefault()
        const nombre= inputNombre.value
        const apellido= inputApellido.value
        const edad= inputEdad.value
        const mail= inputMail.value
        const telefono= inputTelefono.value
        const calle= inputCalle.value
        const numero= inputNumero.value
        const ciudad= inputCiudad.value
        let sexo
        inputSexo.forEach((inputSexo)=>{
            if(inputSexo.checked) sexo= inputSexo.value
        })
        if(
            !nombre ||
            !apellido ||
            !edad ||
            !mail ||
            !telefono ||
            !calle ||
            !numero ||
            !ciudad ||
            !sexo
        ) {
            alert("No puedes dejar campos vacíos")
            return false
        }
        const domicilio = {
            calle: calle,
            numero: numero,
            ciudad: ciudad,
        }
        const nuevoPersonal = new Personal (
            nombre,
            apellido,
            edad,
            mail,
            telefono,
            domicilio,
            sexo
        )
        personal.push(nuevoPersonal)
        form.reset()
        localStorage.setItem("personal", JSON.stringify(personal))
        notificacion.style.opacity="1"
        notificacion.style.transition="all 0.5s"
        setTimeout(() => {
            notificacion.style.opacity="0"
        }, 3000);
    })
}

if(document.title==="Index") {
    const tbody= document.querySelector("#tbody")
    const personalAMostrar= JSON.parse(localStorage.getItem("personal"))
    const tableRow= document.createElement("tr")
    tableRow.innerHTML= `
    <td>${personal.apellido}</td>
    <td>${personal.nombre}</td>
    <td>${personal.edad}</td>
    <td>${personal.mail}</td>
    <td>${personal.telefono}</td>
    <td>${personal.domicilio}</td>
    <td>${personal.sexo}</td>
    <td><button>Eliminar</button></td>
    `
    tbody.appendChild(tableRow)//ver como agregar datos a la tabla
}