//Ensures none of this runs before the page loads

// Each shop item has an "add to cart button". When you press it, you set its itemInCart value to true.
// When the cart page loads, it checks which items have this value, and displays them.

$("#pie-tin-add").click(function () {
  localStorage.setItem("pieTinInCart", "true"); // Logs the variable in local storage so it can be used between pages
  // ^ For some reason this line works when true is a string but not when it's a boolean
});

$("#barbeque-add").click(function () {
  localStorage.setItem("barbequeInCart", "true");
});

$("#spoon-add").click(function () {
  localStorage.setItem("spoonInCart", "true");
});

$("#stand-mixer-add").click(function () {
  localStorage.setItem("standMixerInCart", "true");
});

$("#dutch-oven-add").click(function () {
  localStorage.setItem("dutchOvenInCart", "true");
});

$("#frying-pan-add").click(function () {
  localStorage.setItem("fryingPanInCart", "true");
});
