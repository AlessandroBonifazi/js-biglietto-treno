// Control
console.log('JS OK!');

// Variables
const km = prompt('How many km would you like to travel?');
document.getElementById("km").innerHTML = 'Your trip: ' + km + ' km';

const age = prompt('How old are you?');

const price = (km * 0.21);


// Discount
if (age < 18) {
    // under 18
    let total = (price - (20 * price / 100)).toFixed(2);
    document.getElementById("total").innerHTML = 'Final price: ' + total + '€';
    document.getElementById("discount").innerHTML = 'Discount: 20%';

} else if (age > 65) {
    // over 65
    let total = (price - (40 * price / 100)).toFixed(2);
    document.getElementById("total").innerHTML = 'Final price: ' + total + '€';
    document.getElementById("discount").innerHTML = 'Discount: 40%';

} else {
    // standard price
    let total = price.toFixed(2);
    document.getElementById("total").innerHTML = 'Final price: ' + total + '€';

}
