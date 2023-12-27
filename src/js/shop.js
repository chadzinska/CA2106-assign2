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

// This removes items not in the specified price range, I went slightly insane because of one missing set of brackets while writing this
$("#shop-apply-filters").click(function () {
  let minPrice = parseFloat($("#min-price").val());
  let maxPrice = parseFloat($("#max-price").val()); // Get the values of the input fields

  if (!isNaN(minPrice) && !isNaN(maxPrice)) {
    // Makes sure the inputs are valid numbers
    $(".shop-item").each(function () {
      // Loops through all shop items
      let price = parseFloat($(this).find(".shop-price").text()); // This refers to whichever shop item the current iteration of the loop is on
      // Finds the text showing the price in the html document
      if (price >= minPrice && price <= maxPrice) {
        $(this).show();
      } else {
        $(this).hide();
      }
      // ^ Pretty self explanatory I think
    });
  } else {
    // backup in case user mis-inputs
    alert("Please only input numbers into both fields");
    $(".shop-item").show();
  }
});
