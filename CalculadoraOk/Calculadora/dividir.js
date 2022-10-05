function dividir (a, b) {
    return a == 0 || b == 0 ? "No se puede dividir por cero" : a / b;
}

module.exports = dividir

// Contemplar el escenario donde si alguno de los dos parámetros es cero, la función retornará "No se puede dividir por cero".