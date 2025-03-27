function validarmensajes(){

    

    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    const div = document.createElement("DIV");
    const formulario = document.getElementById('formulario');




    const asun = asunto.value.trim();
    const mensa = mensaje.value.trim();


    
       
        // Validar asunto (cualquier caracter hasta 20 caracteres)
        if (asun.length > 20) {
            div.classList.add("error");
            div.textContent = 'el asunto no puede exceder los 20 caracteres.';
            formulario.insertBefore(div, formulario.firstChild);
            setTimeout(function () {
                div.style.display = "none";
            }, 5000);
            asunto.focus();

            
            return false;
        }

        // Validar mensaje (cualquier caracter hasta 200 caracteres)
        if (mensa.length > 200) {
            div.classList.add("error");
            div.textContent = 'el mensaje no puede exceder los 200 caracteres.';
            formulario.insertBefore(div, formulario.firstChild);
            setTimeout(function () {
                div.style.display = "none";
            }, 5000);
            mensaje.focus();

            
            return false;
        }
        
}
function validarinventario(){
    const nombre = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');
    const marca = document.getElementById('marca');
    const precio = document.getElementById('precio');
    const cantidad = document.getElementById('cantidad');

    
    const name = nombre.value.trim();
    const des = descripcion.value.trim();
    const mar = marca.value.trim();
    const prec = precio.value.trim();
    const cant = cantidad.value.trim();

    if (!/^[A-Za-z\s]+$/.test(name)) {
        div.classList.add("error");
        div.textContent = 'Los nombres solo pueden contener letras y espacios.';
        formulario.insertBefore(div, formulario.firstChild);
        setTimeout(function () {
            div.style.display = "none";
            
        }, 5000);
        nombre.focus();
                

        return false;
    }
        // Validar descripcion (cualquier caracter hasta 200 caracteres)
        if (des.length > 200) {
            div.classList.add("error");
            div.textContent = 'la descripcion no puede exceder los 200 caracteres.';
            formulario.insertBefore(div, formulario.firstChild);
            setTimeout(function () {
                div.style.display = "none";
            }, 5000);
            descripcion.focus();

            
            return false;
        }
        // Validar marca (cualquier caracter hasta 20 caracteres)
        if (mar.length > 20) {
            div.classList.add("error");
            div.textContent = 'la marca no puede exceder los 20 caracteres.';
            formulario.insertBefore(div, formulario.firstChild);
            setTimeout(function () {
                div.style.display = "none";
            }, 5000);
            marca.focus();

            
            return false;
        }
        // Validar precio (solo números y máximo 10 dígitos)
        if (!/^\d{10}$/.test(prec)) {
            div.classList.add("error");
            div.textContent = 'El precio debe contener solo números y máximo 10 dígitos.';
            formulario.insertBefore(div, formulario.firstChild);
            setTimeout(function () {
                div.style.display = "none";
            }, 5000);

            precio.focus();

            return false;
        }
        // Validar cantidad (solo números, min 1 dígito)
        if (!/^\d{1}$/.test(cant)) {
            div.classList.add("error");
            div.textContent = 'El precio debe contener solo números y máximo 10 dígitos.';
            formulario.insertBefore(div, formulario.firstChild);
            setTimeout(function () {
                div.style.display = "none";
            }, 5000);

            cantidad.focus();

            return false;
        }
}
function validarusuario(){
    const id = document.getElementById('id');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const contraseña = document.getElementById('contraseña');
    
    const div = document.createElement("DIV");
    const formulario = document.getElementById('formulario');

    const id_user = id.value.trim();
    const name = nombre.value.trim();
    const lname = apellido.value.trim();
    const email = correo.value.trim();
    const tel = telefono.value.trim();
    const dire = direccion.value.trim();
    const pass = contraseña.value.trim();

     // Validar cédula (solo números y máximo 20 dígitos)
     if (!/^\d{7,10}$/.test(id_user)) {
        div.classList.add("error");
        div.textContent = 'la cedula debe contener solo números y máximo de 7 a 10 dígitos.';
        formulario.insertBefore(div, formulario.firstChild);
        setTimeout(function () {
            div.style.display = "none";
        }, 5000);   
        id.focus();
        
        return false;
    }
    // Validar nombres (solo letras y espacios)
    //console.log(!/^[A-Za-z\s]+$/.test('hernan'))
    //console.log(nombre)
    if (!/^[A-Za-z\s]+$/.test(name)) {
        div.classList.add("error");
        div.textContent = 'Los nombres solo pueden contener letras y espacios.';
        formulario.insertBefore(div, formulario.firstChild);
        setTimeout(function () {
            div.style.display = "none";
            
        }, 5000);
        nombre.focus();
                

        return false;
    }
    // Validar apellido (solo letras y espacios)
    if (!/^[A-Za-z\s]+$/.test(lname)) {
        div.classList.add("error");
        div.textContent = 'El apellido solo acepta letras mas no numeros.';
        formulario.insertBefore(div, formulario.firstChild);
        setTimeout(function () {
            div.style.display = "none";
        }, 5000);
        apellido.focus();
        
        return false;
    }
    // Validar formato de correo electrónico
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        div.classList.add("error");
        div.textContent = 'El formato del correo electrónico no es válido.';
        formulario.insertBefore(div, formulario.firstChild);
        setTimeout(function () {
            div.style.display = "none";
        }, 5000);
        correo.focus();
        
        return false;
    }
    // Validar teléfono (solo números y máximo 10 dígitos)
    if (!/^\d{10}$/.test(tel)) {
        div.classList.add("error");
        div.textContent = 'El teléfono debe contener solo números y máximo 10 dígitos.';
        formulario.insertBefore(div, formulario.firstChild);
        setTimeout(function () {
            div.style.display = "none";
        }, 5000);

        telefono.focus();

        return false;
    }

    // Validar dirección (cualquier caracter hasta 100 caracteres)
    if (dire.length > 100) {
        div.classList.add("error");
        div.textContent = 'La dirección no puede exceder los 100 caracteres.';
        formulario.insertBefore(div, formulario.firstChild);
        setTimeout(function () {
            div.style.display = "none";
        }, 5000);
        direccion.focus();

        
        return false;
    }
    // Validar contraseña (cualquier caracter hasta 20 caracteres)
    if (pass.length > 20) {
        div.classList.add("error");
        div.textContent = 'La contraseña no puede exceder los 20 caracteres.';
        formulario.insertBefore(div, formulario.firstChild);
        setTimeout(function () {
            div.style.display = "none";
        }, 5000);
        contraseña.focus();

        
        return false;
    }

}