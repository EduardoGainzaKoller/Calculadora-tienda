function calculateRow(denomination, qtyId, valueId) {
    const qty = document.getElementById(qtyId).value;
    const value = denomination * qty;
    document.getElementById(valueId).innerText = value.toFixed(2);
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    const valueCells = document.querySelectorAll('tbody td[id^="value"]');
    valueCells.forEach(cell => {
        total += parseFloat(cell.innerText);
    });
    document.getElementById('totalValue').innerText = total.toFixed(2);
}
