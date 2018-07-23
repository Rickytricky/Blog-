(function programaEjercicio() {
    //Declaro los valores del dinero que tenga el Usuario
    var dineros = prompt("¿Cuanto dinero tienes disponible?");
    var valorDolar = prompt("¿Cuanto es el valor del dolar al día de hoy?");
    var cuantosComprar = prompt("¿Cuantos dolares vas a compra?");
    var costoTotal = Number(cuantosComprar) * Number(valorDolar);
    // while(dineros => costoTotal){
    // cuantosComprar = prompt("¿Cuantos dolares vas a compra?");
    // costoTotal = Number(cuantosComprar) * Number(valorDolar);

    if (costoTotal < dineros) {
        alert(`Tu saldo ahora es: $${dineros - costoTotal} mxn \nCompraste: $${cuantosComprar} usd`)
    }

    if (costoTotal > dineros) {
        alert("No cuentas con saldo suficiente, adiós.")
    }
    // }
})();