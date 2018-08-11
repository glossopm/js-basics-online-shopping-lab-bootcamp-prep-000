var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item_object = {itemName: item, itemPrice: Math.floor((Math.random() *100) +1)}
 cart.push(item_object)
 return `${item} has been added to your cart.`
}
addToCart("cake")
addToCart("cheese")
function viewCart() {
  if (cart.length > 0) {
    var names = {}
    var contents = ""
    for (var i = 0; i < cart.length; ++i) {
      names = cart[i]
      contents += `${names.itemName}at $${names.itemPrice}, and`
    }
    contents = contents.slice(0, -2)
    return `In your cart, you have ${contents}.`
  }
  else {
    return "Your shopping cart is empty."
  }
}
viewCart()
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
