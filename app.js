let numeros = []

function generarNumero() {

    let numero = document.querySelector('#generarNumero');
    numero = Math.floor(Math.random() * 99 + 1);
    numeros.push(numero)
    console.log(numeros)
    console.log(numero)

 
        if (numero !== numeros[numeros.length ,-1]) {
            console.log('prueba');
        } else {
            console.log('repite?')
        }
    

    let nuevoNumero = document.getElementById('nuevoNumero')
    nuevoNumero.innerHTML = numero;

    let listadoNumeros = document.getElementById('listadoNumeros')
    listadoNumeros.innerHTML = numeros;

}