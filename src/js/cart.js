$(".cart-item").hide();
// By default all cart items are hidden.

let subtotal = parseFloat($("#subtotal").html());
// Initialise the subtotal as 0

let pieTinPrice = parseFloat($("#pie-tin-price-cart").html());
let barbequePrice = parseFloat($("#barbeque-price-cart").html());
let spoonPrice = parseFloat($("#spoon-price-cart").html());
let standMixerPrice = parseFloat($("#stand-mixer-price-cart").html());
let dutchOvenPrice = parseFloat($("#dutch-oven-price-cart").html());
let fryingPanPrice = parseFloat($("#frying-pan-price-cart").html());

// Each shop item has an "itemInCart" value.
// When the cart page loads, it checks each item for this value
// If it's true, it displays the item and adds its price to the total

if (localStorage.getItem("pieTinInCart") === "true") {
  $("#cart-pie-tin").show();
  $("#subtotal").html(parseFloat($("#subtotal").html()) + pieTinPrice);
}

// Every cart item has a remove button.
// Clicking it hides the element and sets its "itemInCart" to false and subtracts its price from the total

$("#pie-tin-remove").click(function () {
  localStorage.setItem("pieTinInCart", "false");
  $("#cart-pie-tin").hide();
  $("#subtotal").html(parseFloat($("#subtotal").html()) - pieTinPrice);
});

if (localStorage.getItem("barbequeInCart") === "true") {
  $("#cart-barbeque").show();
  $("#subtotal").html(parseFloat($("#subtotal").html()) + barbequePrice);
}

$("#barbeque-remove").click(function () {
  localStorage.setItem("barbequeInCart", "false");
  $("#cart-barbeque").hide();
  $("#subtotal").html(parseFloat($("#subtotal").html()) - barbequePrice);
});

if (localStorage.getItem("spoonInCart") === "true") {
  $("#cart-spoon").show();
  $("#subtotal").html(parseFloat($("#subtotal").html()) + spoonPrice);
}

$("#spoon-remove").click(function () {
  localStorage.setItem("spoonInCart", "false");
  $("#cart-spoon").hide();
  $("#subtotal").html(parseFloat($("#subtotal").html()) - spoonPrice);
});

if (localStorage.getItem("standMixerInCart") === "true") {
  $("#cart-stand-mixer").show();
  $("#subtotal").html(parseFloat($("#subtotal").html()) + standMixerPrice);
}

$("#stand-mixer-remove").click(function () {
  localStorage.setItem("standMixerInCart", "false");
  $("#cart-stand-mixer").hide();
  $("#subtotal").html(parseFloat($("#subtotal").html()) - standMixerPrice);
});

if (localStorage.getItem("dutchOvenInCart") === "true") {
  $("#cart-dutch-oven").show();
  $("#subtotal").html(parseFloat($("#subtotal").html()) + dutchOvenPrice);
}

$("#dutch-oven-remove").click(function () {
  localStorage.setItem("dutchOvenInCart", "false");
  $("#cart-dutch-oven").hide();
  $("#subtotal").html(parseFloat($("#subtotal").html()) - dutchOvenPrice);
});

if (localStorage.getItem("fryingPanInCart") === "true") {
  $("#cart-frying-pan").show();
  $("#subtotal").html(parseFloat($("#subtotal").html()) + fryingPanPrice);
}

$("#frying-pan-remove").click(function () {
  localStorage.setItem("fryingPanInCart", "false");
  $("#cart-frying-pan").hide();
  $("#subtotal").html(parseFloat($("#subtotal").html()) - fryingPanPrice);
});

$("#checkout-button").click(function () {
  let estimatedTotal = parseFloat($("#subtotal").html()) + 8;
  alert(
    "Estimated shipping: €8. Total: €" +
      estimatedTotal +
      " - no need to give us your card details :)"
  );
});
