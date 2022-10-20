const kilometers = parseFloat(prompt("Benvenuto! Quanti chilometri dura il suo viaggio?"));
var price = parseFloat(kilometers * 0.21).toFixed(2);
console.log("Il prezzo del biglietto è", price,"€");
const age = parseInt(prompt("verifica se hai diritto ad uno sconto, quanti anni hai?"));
if (age < 18) {
    var newprice = parseFloat(price * 0.80).toFixed(2);
    console.log("Avendo meno di 18 anni hai diritto ad uno sconto del 20%. Il prezzo del biglietto è", newprice,"€");
}
else if (age > 65) {
    var newprice = (price * 0.60);
    console.log("avendo più di 65 anni hai diritto ad uno sconto del 40%. Il prezzo del biglietto è", newprice,"€");
}
else {
    console.log("Purtroppo non hai diritto ad alcuno sconto")
}