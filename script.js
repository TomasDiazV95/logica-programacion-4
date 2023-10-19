function fibonacci(num){
    let arr = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < num; i++){
        arr.push(a);
        let mientras = a;
        a = b;
        b = mientras + b;
    }
    return arr;
}

function recargarPagina(){
    location.reload();
}

function imprimir() {
    let num = document.getElementById('inputNumero').value;

    while(isNaN(num)){
        alert('Error, ingresa números');
        recargarPagina();
        return;
    }

    const numero = parseFloat(num);
    const fibo = fibonacci(numero);

    const resultado = document.getElementById('resultado');
    resultado.innerText = `La serie es ${fibo}`;
}