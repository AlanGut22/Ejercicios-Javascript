let dias = Number(prompt("Ingrese de cuantos días es mensualidad (15 - 30 días o 3 meses): "));

if (dias === 15) {
    alert(`El valor de la mensualidad por ${dias} días es: 18000.`);
} else if (dias === 30) {
    alert(`El valor de la mensualidad por ${dias} días es: 35000.`);
} else if (dias === 3) {
    alert(`El valor de la mensualidad por ${dias} meses es: 86000.`);
} else {
    alert("Días no válidos.");
}