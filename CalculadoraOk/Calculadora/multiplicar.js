function multiplicar (a, b) {
    return a == 0 || b == 0 ? 0 : a * b;
}

module.exports = multiplicar

// Contemplar el escenario donde si alguno de los dos parámetros es cero, la función retornará cero.