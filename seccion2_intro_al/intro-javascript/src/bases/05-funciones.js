//funciones
const saludar = function(nombre){
    return `Hola ${nombre}`
}
console.log(saludar("Mario"))

//arrow function
const saludar2 = (nombre)=>{
    return `Hola ${nombre} desde arrowfunction`
}
console.log(saludar2("Alberto"))

const saludar3 = (nombre)=>`Hola ${nombre} desde arrowfunction simplificada`;

console.log(saludar3("Alberto"))

const usuarioActivo = (nombre)=>({
    uid : "23asd",
    username : nombre
});
console.log(usuarioActivo("mario"))