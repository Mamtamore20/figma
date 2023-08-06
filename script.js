document.getElementById('add-to-cart').addEventListener('click', function() {
    const price = 50; // Product price
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = price * quantity;
    const currentTotal = parseFloat(document.getElementById('total-price').innerText.substring(1));
    const newTotal = currentTotal + totalPrice;
    
    document.getElementById('total-price').innerText = '$' + newTotal.toFixed(2);
  });
  
  document.getElementById('buy-now').addEventListener('click', function() {
    alert('Thank you for your purchase!');
  });