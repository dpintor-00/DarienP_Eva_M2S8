// USUARIOS REGISTRADOS //

let users = ["JORGE", "RODRIGO", "PABLO"],
    pass = ["1111", "2222", "3333"],
    saldo = [44400, 55500, 66600],
    position, usuario, clave;

// INICIO CAJERO //

alert("Bienvenido/a a Banca en Línea");
do {
    usuario = prompt("Ingrese su usuario");
    usuario = usuario.toUpperCase();
    clave = prompt("Ingrese su clave");
    position = parseInt(10);
    let indice = parseInt(0);
    for (indice; indice < users.length; indice++) {
        if (usuario == users[indice]) {
            position = indice;
        };
    };

    if (clave == pass[position]) {
        alert("Bienvenido " + usuario);
    } else {
        alert("Clave y/o usuario incorrecto, vuelva a intentar");
    };

} while (usuario != users[position] || clave != pass[position]);

// MENÚ SESIÓN INICIADA //

do {
    operacion = prompt("A continuación seleccione una operación: \n1.- Consultar saldo \n2.- Giro \n3.- Depósito \n4.- Cerrar sesión")
    switch (parseInt(operacion)) {
        case 1:
            alert("Su saldo actual es $" + saldo[position])
            break;
        case 2:
            let giro = prompt("Su saldo actual es $" + saldo[position] + "\nIngrese monto a girar");
            if (giro > saldo[position]) {
                alert("Su saldo actual es de $" + saldo[position] + "\nNo posee saldo suficiente");
            } else if (giro < 0) {
                alert("No se pudo realizar esta operación")
            } else {
                saldo[position] = (saldo[position] - parseInt(giro));
                alert("Su nuevo saldo es $" + saldo[position]);
            };
            break;
        case 3:
            let deposito = prompt("Su saldo actual es $" + saldo[position] + "\nIngrese monto a depositar");
            if (deposito > 0) {
                saldo[position] = (saldo[position] + parseInt(deposito));
                alert("Su nuevo saldo es $" + saldo[position]);
            } else {
                alert("No es una operación válida");
            };
            break;
        case 4:
            alert("¡Hasta pronto! \nPara proceder, pulse ENTER\nSi desea iniciar otra sesión, pulse F5")
            break;
        default:
            alert("Ingrese una operación válida")
    }
} while (operacion != 4);