import 'bootstrap'
import './../sass/style.scss'
import { Propietario, sumaNumeros, datosInmuebles } from './clases/Propietario'

console.log(Propietario)
console.log(sumaNumeros(2, 5))
console.log(datosInmuebles)
console.log("Hola desde Webpack!")
let a = 7;

let x = 10

let f = { nombre: "oscar" }

const otro = {
    nombre
} = f

let numeros = [10, 29, 38]

let suma = (n1, n2) => n1 + n2

let arregloNumeros = numeros.map(numero => numero + 10)

console.log(arregloNumeros)