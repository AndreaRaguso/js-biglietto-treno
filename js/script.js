let km = prompt("Quanti km percorrerai?");
let eta = prompt("Quanti anni hai?");
let prezzo = 0;
prezzo = km * 0.21;

if (eta < 18){
    sconto = prezzo/100*20
    prezzo = prezzo - sconto;
}

else if (eta >= 65){
    sconto = prezzo/100*40
    prezzo = prezzo - sconto;
}

else{

}

document.writeln(prezzo.toFixed(2));