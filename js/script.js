function getSize() {
    var size = document.getElementById("sizes").value;
    return parseInt(size);
}
function getFlavour() {
    var flavour = document.getElementById("crusts").value;
    return parseInt(flavour);
}
function getTopping() {
    var topping = document.getElementById("toppings").value;
    return parseInt(topping);
}
function getNumber() {
    var number = document.getElementById("number").value;
    return parseInt(number);
}
function calculateTotal() {
    var results = (getSize() + getFlavour() + getTopping()) * getNumber();
    alert("You have ordered " + getNumber("") + " Pizza " + " which amounts to Kshs. " + results + " Thank you ");
    prompt("Enter your location");
    alert("Your order has been received and will be delivered in a short while. Delivery fee is kshs 150.");
}
function calculate() {
    var results = (getSize() + getFlavour() + getTopping()) * getNumber();

    alert("You have ordered " + getNumber("") + " Pizza " + " which amounts to Kshs. " + results + " Your order is ready for pickup at our station along Moi Avenue . Contact us for more information. Thank you.");

}
