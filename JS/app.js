let numeros = []

function generarNumero() {
    let numero = document.querySelector('#generarNumero');
    numero = Math.floor(Math.random() * 9 + 1);
    console.log(numeros)
    console.log(numero)

    let nuevoNumero = document.getElementById('nuevoNumero')
    nuevoNumero.innerHTML = numero;

    console.log(numeros.includes(numero));

    if (numeros.includes(numero)) {
        console.log('repetido')
    } else {
        numeros.push(numero);
        numeros.sort()
        let listadoNumeros = document.getElementById('listadoNumeros')
        listadoNumeros.innerHTML = numeros;
    }
}