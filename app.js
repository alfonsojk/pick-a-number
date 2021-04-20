var min = 1;
var max = 20;
var aleatorio = Math.floor(Math.random() * max - min +1) + min;
var intentos = 0;
var nombre = prompt('Bienvenido al juego adivina el número ¿Cúal es tu nombre?');
var numero;

for(intentos; intentos < 5; intentos++){
    numero = parseInt(prompt(nombre +' , ingresa un número entre el '+ min + ' y el ' + max));
    
    if (numero >= min && numero <= max){
        if(numero < aleatorio){
            alert('El número que ingresaste es bajo');
        } else if(numero > aleatorio){
            alert('El número que ingresaste es alto');
        } else if (numero == aleatorio){
            break;
        }
    } else {
        alert('Debes ingresar un número entre ' + min + ' y el ' + max)
    }
}
if(numero == aleatorio ){
    alert('Felicidades adivinaste el número en ' + (intentos + 1) + ' intentos' );
} else{
    alert('Agotaste tus intentos, el número era ' + aleatorio)
}