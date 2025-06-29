function suma(){
    let n1 =parseInt(document.getElementById("numero1").value);
    let n2 =parseInt(document.getElementById("numero2").value);
    let suma = n1 + n2;
    document.getElementById("Resultado").value = suma;
    
}

function resta(){
    let n1 =parseInt(document.getElementById("numero1").value);
    let n2 =parseInt(document.getElementById("numero2").value);
    let resta = n1-n2;
    document.getElementById("Resultado").value = resta;
}

function division(){
    let n1 =parseInt(document.getElementById("numero1").value);
    let n2 =parseInt(document.getElementById("numero2").value);
    let division = n1/n2;
    document.getElementById("Resultado").value = division;
}

function multiplicacion(){
    let n1 =parseInt(document.getElementById("numero1").value);
    let n2 =parseInt(document.getElementById("numero2").value);
    let multiplicacion = n1*n2;
    document.getElementById("Resultado").value = multiplicacion;
}