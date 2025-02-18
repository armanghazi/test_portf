//fizzbuzz
// 
const numeroFizzBuzz=20;
for (let i=1;i<= numeroFizzBuzz;i++){
    if (i% 3 ===0){
        console.log("Fizz");

    }else if (i% 5 ===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

















const numeroFinal= 500;
let resultado=0;

for (let i=1; i<numeroFinal;i++){
    resultado= resultado+i;
    resultado+=i;
}
console.log("El valor final es:", resultado);


const numeroFinal1= 10;
let resultado1=1;

for (let i=1; i<numeroFinal1;i++){
    resultado1= resultado1+i;
    resultado1*=i;
}
console.log("El valor del factorial es:", resultado1);







let frutas =["manzana", "banana", "pera","melon"];

console.log(frutas[0])

for(let i = 0;i < frutas.length; i++){
    if (frutas[i] !=="pera"){
        
    console.log(frutas[i])
}else {
    console.log("no me gusta esta fruta");
}}


for (let i=1; i<10;i++){
    console.log(i*2);}





















































const usarios = [
    {
        nombre: "usario 1",
        email: "usarrio1@gmail.com",
        edad:47
    },
    {
        nombre: "usario 2",
        email: "usarrio2@gmail.com",
        edad:18
    },
    {
        nombre: "usario 3",
        email: "usarrio3@gmail.com",
        edad:68
    },

]; 

console.log(usarios[0]);














console.log ("Hello world");

const name = "Arman Ghaziaskari Naeini";
const age = 47;
const city = "Bilbao";
const country = "Spain";

let nombre = "Arman 3153"; //string

nombre="Otro";
let edad = 47; //number

let esVerdad = true; //false -> boolean
let usuario1="usario1"
let listaDeUsarios = [usuario1, "usuario2", "usuario3"]; //array  o listo de elementos

let usario = {
    nombre: "mi nombre",
    email: "mimail@mail.com",
    edad: 47
} //tipo objeto

//console.log(nombre);
//console.log(edad);
//console.log(esVerdad);
//console.log(listaDeUsarios);
//console.log(usario);

nombre= "Otro nombre";
console.log(usario.edad);


