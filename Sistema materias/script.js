const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e) => {
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green")
    }
})

const validarCampos = () => {
    let error = [];
    if (nombre.value.lenght < 5 || nombre.value.lenght > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido"
        return error;
    } else if (email.value.lenght < 5 ||
               email.value.lenght > 40 ||
               email.value.indexOf("@") == -1 ||
               email.value.indexOf(".") == -1) {
                error[0] = true;
                error[1] = "El email es invalido";
                return error;
               } else if (materia.value < 4 || materia.value > 40) {
                error[0] = true;
                error[1] = "La materia no existe";
               }

               error[0] = false;
               return error;
            }