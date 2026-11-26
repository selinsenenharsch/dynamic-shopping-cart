# Dynamic Shopping Cart

A simple shopping cart web application built with HTML, CSS, and vanilla JavaScript for Per Scholas Lab 5.1 (Dynamic Content Creation).

## Features
- Add products with a name and price
- Update item quantity and recalculate the total price
- Remove items from the cart and update the total price
- Basic validation for empty product names and invalid or non-positive prices

Reflection Questions
1. How did you dynamically create and append new elements to the DOM?
I used document.createElement() to make a new <li>, <span>, <input>, and Remove <button>. Then I used .appendChild() to put those pieces inside the <li>, and put the <li> into the cart list (<ul>).
2. What steps did you take to ensure accurate updates to the total price?
I used one totalPrice variable and updated it with updateTotalPrice() using .toFixed(2) for cents. I added the price when an item was added, updated the difference when the quantity changed, and subtracted price * qty when an item was removed.
3. How did you handle invalid input for product name or price?
I checked if the product name was empty or if the price was blank, 0, or negative. If anything was invalid, I showed an alert() message and used return to stop the function so no broken item got added.
4. What challenges did you face when implementing the remove functionality?
I had to make sure clicking Remove deleted only that specific row using event.target.closest('li'), and I had to subtract that item's full price from the total before removing it from the page.