let valor = false
while(valor != true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Lanzar el dado \n 2 No lanzar el dado`));
    switch (opcion){
        case 1 :
            
            let dados = Math.floor(Math.random()*7) + 1;

            alert(`El número que cayó en el dado es: ${dados}`);

            if (dados % 2 == 0) { 
                alert(`El número que cayó ${dados} es par.`);
            } else {
                alert(`El número que cayó ${dados} es impar.`);
            }
            break;
        
        case 2 : valor = true; break;
    } 
}