//template string
const nombre = "mario";
const apellido = "saldaña"
// const nombreCompleto = nombre + " "+apellido;
const nombreCompleto =  `Hola mundo soy ${nombre} ${apellido}`
console.log(nombreCompleto)

function getSaludo(nombre){
    return "Hola " + nombre

}
console.log(`saludo ${getSaludo(nombre)}`)
