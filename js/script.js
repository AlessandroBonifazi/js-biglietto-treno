// Control
console.log('JS OK!');

// Variables
const km = prompt('How many km would you like to travel?');

const age = prompt('How old are you?');

const price = (km * 0.21);

// Discount
if (age < 18) {
    // under 18
    let total = (price - (20 * price / 100));
    console.log('price:', total.toFixed(2))
    // document.getElementById("total").value = total;

} else if (age > 65) {
    // over 65
    let total = (price - (40 * price / 100));
    console.log('price:', total.toFixed(2))
} else {
    let total = price;
    console.log('price:', total.toFixed(2))

}
