function sumar (a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'Debe ingresar un número';
    } else {
        return a + b;
    }
}

module.exports = sumar