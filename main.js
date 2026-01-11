
function getVat() {
    const priceBox = document.getElementById("priceBox");
    const price = +priceBox.value;
    const vat = price * 0.18;
    alert(`price: ${price}, vat: ${vat}`);
}
