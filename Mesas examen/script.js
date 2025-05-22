let alumnos = [{
    nombre: "Santiago Hernández",
    email: "Santy.hernandez24@gmail.com",
    materia: "Programación"
}, {
    nombre: "Mateo Figueroa",
    email: "Mattfigueroa21@gmail.com",
    materia: "Química 3"
}, {
    nombre: "Alan Simeone",
    email: "Alanelcrack33@gmail.com",
    materia: "Introducción a la pastelería 1"
}, {
    nombre: "Gonzalo Bermudez",
    email: "GonzitaaaaaB@gmail.com",
    materia: "Educación física 4"
}, {
    nombre: "Ariel Carnicero",
    email: "ElCarniceroo666@gmail.com",
    materia: "Veterinaria 2"
}];

const boton = document.querySelector(".boton-confirmar");

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = ` 
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
        document.querySelector(".grid-container").innerHTML+= htmlCode;
}

boton.addEventListener("click",()=>{
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
    }
})