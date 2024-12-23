<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout Page with Editable Cart</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .container h2 {
            margin-bottom: 20px;
            text-align: center;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-group input, 
        .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        .btn {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        .btn:hover {
            background-color: #45a049;
        }
        .summary, .products {
            margin: 20px 0;
        }
        .product-quantity {
            width: 60px;
            padding: 5px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Checkout</h2>
    <div class="products">
        <h3>Products</h3>
        <div class="form-group">
            <label for="product">Product</label>
            <select id="product">
                <option value="Product 1" data-price="10">Product 1 ($10)</option>
                <option value="Product 2" data-price="20">Product 2 ($20)</option>
                <option value="Product 3" data-price="30">Product 3 ($30)</option>
            </select>
        </div>
        <div class="form-group">
            <label for="quantity">Quantity</label>
            <input type="number" id="quantity" value="1" min="1">
        </div>
        <button type="button" class="btn" onclick="addProduct()">Add to Cart</button>
    </div>

    <form id="checkout-form">
        <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" required>
        </div>
        <div class="form-group">
            <label for="city">City</label>
            <input type="text" id="city" name="city" required>
        </div>
        <div class="form-group">
            <label for="state">State</label>
            <input type="text" id="state" name="state" required>
        </div>
        <div class="form-group">
            <label for="zip">Zip Code</label>
            <input type="text" id="zip" name="zip" required>
        </div>
        <div class="form-group">
            <label for="country">Country</label>
            <input type="text" id="country" name="country" required>
        </div>
        <div class="form-group">
            <label for="payment">Payment Method</label>
            <select id="payment" name="payment" required>
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="paypal">PayPal</option>
            </select>
        </div>
        <button type="button" class="btn" onclick="submitOrder()">Place Order</button>
    </form>

    <div class="summary" id="summary"></div>
</div>

<script>
    let cart = [];

    function addProduct() {
        let productSelect = document.getElementById('product');
        let quantityInput = document.getElementById('quantity');
        
        let product = productSelect.options[productSelect.selectedIndex].value;
        let price = productSelect.options[productSelect.selectedIndex].dataset.price;
        let quantity = parseInt(quantityInput.value);

        cart.push({ product, price, quantity });

        updateSummary();
    }

    function updateSummary() {
        let summary = '<h3>Cart Summary</h3>';
        let total = 0;

        cart.forEach((item, index) => {
            let itemTotal = item.price * item.quantity;
            total += itemTotal;
            summary += `
                <p>${item.product} - $${item.price} x 
                <input type="number" class="product-quantity" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                = $${itemTotal}</p>`;
        });

        summary += `<p><strong>Total: $${total}</strong></p>`;
        
        document.getElementById('summary').innerHTML = summary;
    }

    function updateQuantity(index, newQuantity) {
        newQuantity = parseInt(newQuantity);
        if (newQuantity > 0) {
            cart[index].quantity = newQuantity;
            updateSummary();
        }
    }

    function submitOrder() {
        let form = document.getElementById('checkout-form');
        if (form.checkValidity()) {
            let formData = new FormData(form);
            let summary = `
                <h3>Order Summary</h3>
                <p><strong>Name:</strong> ${formData.get('name')}</p>
                <p><strong>Email:</strong> ${formData.get('email')}</p>
                <p><strong>Address:</strong> ${formData.get('address')}, ${formData.get('city')}, ${formData.get('state')}, ${formData.get('zip')}, ${formData.get('country')}</p>
                <p><strong>Payment Method:</strong> ${formData.get('payment')}</p>
            `;

            cart.forEach(item => {
                let itemTotal = item.price * item.quantity;
                summary += `<p>${item.product} - $${item.price} x ${item.quantity} = $${itemTotal}</p>`;
            });

            let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            summary += `<p><strong>Total: $${total}</strong></p>`;

            document.getElementById('summary').innerHTML = summary;
        } else {
            alert('Please fill out all required fields.');
        }
    }
</script>

</body>
</html>
