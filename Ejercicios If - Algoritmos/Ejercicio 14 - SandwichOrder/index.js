let sandwich = prompt("¿De qué tamaño es el sandwich? (Pequeño/Grande)");
let tocineta = prompt("¿Quiere tocineta? (si/no)");
let jalapeño = prompt("¿Quiere jalapeño? (si/no)");
let pavo = prompt("¿Quiere pavo? (si/no)");
let queso = prompt("¿Quiere queso? (si/no)");


if (sandwich == "pequeño") {
    precioBase = 6000;
} else if (sandwich == "grande") {
    precioBase = 12000;
} else {
    alert("Tamaño no válido. Ingrese 'pequeño' o 'grande'.");
}

costoTocineta = (tocineta === "si") ? 3000 : 0;
costoJalapeño = 0;
costoPavo = (pavo === "si") ? 3000 : 0;
costoQueso = (queso === "si") ? 2500 : 0;

costoTotal = precioBase + costoTocineta + costoJalapeño + costoPavo + costoQueso;

alert(`Resumen del Pedido:
    Tamaño del Sandwich: ${sandwich}
    Precio del Sandwich: $${precioBase}
    Tocineta: $${costoTocineta}
    Jalapeño: $${costoJalapeño}
    Pavo: $${costoPavo}
    Queso: $${costoQueso}
    Total a pagar: $${costoTotal}`);