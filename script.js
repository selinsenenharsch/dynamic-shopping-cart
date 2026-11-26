const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    const qtyInput = item.querySelector('input[type="number"]');
    const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
    updateTotalPrice(-(price * qty));
    item.remove();
}

addProductButton.addEventListener('click', function () {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);

    if (name === '' || isNaN(price) || price <= 0) {
        alert('Please enter a valid product name and a price greater than 0.');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('cart-item');
    li.dataset.price = price;

    const itemText = document.createElement('span');
    itemText.textContent = `${name} - $${price.toFixed(2)}`;

    const qtyInput = document.createElement('input');
    qtyInput.type = 'number';
    qtyInput.min = '1';
    qtyInput.value = '1';
    qtyInput.style.width = '60px';
    let prevQty = 1;

    qtyInput.addEventListener('change', function () {
        let newQty = parseInt(qtyInput.value, 10);

        // If someone types 0, a negative number, or leaves it blank, snap back to 1
        if (isNaN(newQty) || newQty < 1) {
            newQty = 1;
            qtyInput.value = '1';
        }

        const diff = newQty - prevQty; // How many more (or fewer) items?
        updateTotalPrice(price * diff);
        prevQty = newQty;
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', removeItem);

    li.appendChild(itemText);
    li.appendChild(qtyInput);
    li.appendChild(removeBtn);

    cart.appendChild(li);

    updateTotalPrice(price);

    productNameInput.value = '';
    productPriceInput.value = '';
});


