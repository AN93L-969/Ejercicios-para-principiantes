/* A continuación obserbara lineas de codigo que corresponden a pequellos
ejercicios que fueron realizados con el fin de practicar.

Tomar en cuenta que algunos resultados no se veran reflejados en prompt ni
en alerts, sino que por la consola del navegador a la cual puede acceder
con la tecla 'F12' dentro de la pagina de este programa.*/

//Desafio 1

let nombreDeUsuario = "Lua";
console.log(nombreDeUsuario);
let edadUsuario = 25;
console.log(edadUsuario);
let numeroDeVentas = 50;
let saldoDisponibe = 1000;

let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

nombreDeUsuario = prompt("Ingresa tu nombre de usuario: ");
console.log(nombreDeUsuario);
edadUsuario = prompt("Ingresa tu edad: ");
console.log(edadUsuario);

if (edadUsuario >= 18){
    alert("¡Puedes  obtener tu licencia de conducir!");
}else{
    alert("¡Usted no puede obtener su licencia de conducir por ser menor de edad!");
}

// FIN Desafio 1

//Desafio 2
/*
Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
*/
let diaSelecionado = prompt('Que día de la semana es hoy?');

if (diaSelecionado == 'Sábado' || diaSelecionado == 'Domingo'){
    alert('¡Buen fin de semana!');
}else{
    alert('¡Buena semana!');
}

/*
Verifica si un número ingresado por el usuario es positivo o negativo.
Muestra una alerta informativa.
*/
let numeroUsuario = prompt('Ingresa un número: ');

if (numeroUsuario > 0){
    alert('El número que ingreso es positivo');
}else if (numeroUsuario < 0){
    alert('El número que ingreso es negativo');
}else{
    alert('El número que ingreso es ' + numeroUsuario);
}

/*
Crea un sistema de puntuación para un juego. Si la puntuación es mayor 
o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, 
muestra "Intentalo nuevamente para ganar.".
*/

let puntos = 0;
console.log('Puntos actuales: ' + puntos);

if(diaSelecionado == 'Sábado' || diaSelecionado == 'Domingo'){
    puntos += 50;
}

console.log('Puntos actuales: ' + puntos);

if(numeroUsuario > 0){
    puntos += 50;
}

console.log('Puntos actuales: ' + puntos);

if (puntos >= 100){
    alert('¡Felicidades, has ganado! Tu puntuación fue de: ' + puntos);
}else{
    alert('Intentalo nuevamanete para alcanzar 100 puntos o más y ganar, tu puntuación fue de: ' + puntos);
}

/*
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo.
*/

let saldoActual = '$1344.50';

alert(`El saldo actual de su cuenta es de: ${saldoActual}`);

/*
Pide al usuario que ingrese su nombre mediante un prompt. Luego,
muestra una alerta de bienvenida usando ese nombre.
*/

let nombreUsuario = prompt('Ingrese se nombre: ');

alert('¡Te damos una cordial bienvenida ' + nombreUsuario + '!');

//FIN Desafio 2

//Desafio 3

/*
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle
'while'. Muestra cada número.
*/

let contador1 = 1;

while(contador1 <= 10){
    console.log('Iteración número: ' + contador1);
    contador1 ++;
}

/*
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle
'while'. Muestra cada número.
*/

let contador2 = 10;

while(contador2 >= 0){
    console.log('Iteración número: ' + contador2);
    contador2 --;
}

/*
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 
0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/

let contador3 = 0;
let numeroIngresado = 0;
numeroIngresado = prompt('Ingresa un número para indicar el limite de la cuenta regresiva: ');

while(numeroIngresado >= contador3){
    console.log('Itereación número: ' + numeroIngresado);
    numeroIngresado --;
}

/*
Crea un programa de cuenta progresiva. Pide un número y cuenta desde
0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/

let contador4 = 0;
let numeroIngresadoUsuario = 0;
numeroIngresadoUsuario = prompt('Ingresa un número para indicar el limite de la cuenta progresiva: ');

while(contador4 <= numeroIngresadoUsuario){
console.log('Itereación número: ' + contador4);
contador4 ++;
}

//FIN Desafio 3

//Desafio 4

/*
Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
*/
console.log('Bienvenido a la consola de tu programa!!')

/*
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log
para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
*/

let nombre1 = 'Angel';

console.log(`¡Hola, ${nombre1}!`);


/*
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para 
mostrar el mensaje "¡Hola, [tu nombre]!".
*/

let nombre2 = 'Angel';

alert(`¡Hola, ${nombre2}!`);


/*
Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación 
que más te gusta?. Luego, almacena la respuesta en una variable y muestra la 
respuesta en la consola del navegador.
*/

let respuesta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');

console.log(respuesta);


/*
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores 
numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena 
el resultado en una tercera variable llamada "resultado". Utiliza console.log para 
mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
*/

let valor1 = 6;
let valor2 = 9;
let resultado1 = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado1}`);


/*
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores 
numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena 
el resultado en una tercera variable llamada "resultado". Utiliza console.log 
para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a 
[resultado]." en la consola.
*/

let valorUno = 9;
let valorDos = 6;
let resultado2 = valorUno - valorDos;

console.log(`La diferencia entre ${valorUno} y ${valorDos} es igual a ${resultado2}`);


/*
Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
utiliza un if para verificar si la persona es mayor o menor de edad y muestra 
un mensaje apropiado en la consola.
*/

let edad = prompt('Ingresa tu edad:');

if (edad < 18){
    console.log(`Usted tiene ${edad} años, por ende es menor de edad.`);
}else{
    console.log(`Usted tiene ${edad} años, por ende es mayor de edad.`);
}


/*
Crea una variable "numero" y solicita un valor con prompt. Luego, verifica 
si es positivo, negativo o cero utilizando un if-else y muestra el mensaje 
correspondiente.
*/

let numero = prompt('Ingrese un número cualquiera:');

if (numero > 0){
    alert(`El número ${numero} que ingreso es positivo.`);
}else if (numero < 0){
    alert(`El número ${numero} que ingreso es negativo.`);
}else{
    alert(`El número que ingreso es ${numero}.`);
}


/*
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
*/

let numeros = 1;

while(numeros <= 10){

    console.log(numeros);
    numeros ++;
}


/*
Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else 
para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" 
o "Reprobado" en la consola.
*/

let nota = 5;

if (nota >= 7){
    console.log('Aprobado');
}else{
    console.log('Reprobado');
}


/*
Utiliza Math.random para generar cualquier número aleatorio y muestra ese 
número en la consola.
*/

let numRandom1 = Math.random();

console.log(numRandom1);


/*
Utiliza Math.random para generar un número entero entre 1 y 10 y muestra 
ese número en la consola.
*/

let numRandom2 = Math.floor(Math.random() * 10) + 1;

console.log(numRandom2);


/*
Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra 
ese número en la consola.
*/

let numRandom = Math.floor(Math.random() * 1000) + 1;

console.log(numRandom);

//FIN Desafio 4