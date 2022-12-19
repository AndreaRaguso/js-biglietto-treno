let km = prompt("Quanti km percorrerai?");
let eta = prompt("Quanti anni hai?");
let prezzo = 0;
const tratta = 0.21; //In modo tale che se il costo cambierà sara facile sostituirlo
prezzo = km * tratta;

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

document.getElementById("prezzo").innerHTML = (prezzo.toFixed(2) + " €");