$(".cart-item").hide();
// By default all cart items are hidden.

// Each shop item has an "itemInCart" value. When the cart page loads, it checks
// each item for this value, then displays it if it is "true"

if (localStorage.getItem("pieTinInCart") === "true") {
  $("#cart-pie-tin").show();
}

// Every cart item has a remove button.
// Clicking it hides the element and sets its "itemInCart" to false

$("#pie-tin-remove").click(function () {
  localStorage.setItem("pieTinInCart", "false");
  $("#cart-pie-tin").hide();
});

if (localStorage.getItem("barbequeInCart") === "true") {
  $("#cart-barbeque").show();
}

$("#barbeque-remove").click(function () {
  localStorage.setItem("barbequeInCart", "false");
  $("#cart-barbeque").hide();
});

if (localStorage.getItem("spoonInCart") === "true") {
  $("#cart-spoon").show();
}

$("#spoon-remove").click(function () {
  localStorage.setItem("spoonInCart", "false");
  $("#cart-spoon").hide();
});

if (localStorage.getItem("standMixerInCart") === "true") {
  $("#cart-stand-mixer").show();
}

$("#stand-mixer-remove").click(function () {
  localStorage.setItem("standMixerInCart", "false");
  $("#cart-stand-mixer").hide();
});

if (localStorage.getItem("dutchOvenInCart") === "true") {
  $("#cart-dutch-oven").show();
}

$("#dutch-oven-remove").click(function () {
  localStorage.setItem("DutchOvenInCart", "false");
  $("#cart-dutch-oven").hide();
});

if (localStorage.getItem("fryingPanInCart") === "true") {
  $("#cart-frying-pan").show();
}

$("#frying-pan-remove").click(function () {
  localStorage.setItem("fryingPanInCart", "false");
  $("#cart-frying-pan").hide();
});
