//objetos literales
const persona = {
    nombre : "mario",
    apellido : "saldaña",
    edad : "25",
    direccion : {
        ciudad : "New York",
        zip : 1231231,
        lat : 14.3232,
        lng : 1233.20,
    }
}
// console.table(persona);
const persona2 = {...persona};//creando un clon de persona 
persona2.nombre = "alberto"
console.log(persona, persona2)