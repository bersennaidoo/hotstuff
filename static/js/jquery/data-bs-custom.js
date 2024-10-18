// Adds tooltip to security code
$(document).ready(function () {
  var $tooltipTriggerElements = $('[data-bs-toggle="tooltip"]');
  $tooltipTriggerElements.each((i, elem) => {
    new bootstrap.Tooltip(elem);
  });
});

// adds toast to add to cart
$(document).ready(function () {
  var $addToCartToast = $(".js-cartToast");

  $(".js-addToCart").on("click", function () {
    new bootstrap.Toast($addToCartToast).show();
  });
});

// adds toast to add to wishlist
$(document).ready(function () {
  var $addToWishlistToast = $(".js-wishlistToast");
  var $addToWishlist = $(".js-addToWishlist");

  $addToWishlist.each((i, e) => {
    $(e).on("click", function () {
      new bootstrap.Toast($addToWishlistToast).show();
    });
  });
});

// adds toast to add all to cart
$(document).ready(function () {
  var $addAllToCartToast = $(".js-addAllToast");
  var $addAllToCartButton = $(".js-addAllToCart");

  $addAllToCartButton.each((i, e) => {
    $(e).on("click", function () {
      new bootstrap.Toast($addAllToCartToast).show();
    });
  });
});

// remove from wishlist
$(document).ready(function () {
  var $rmFromWishListButtons = $(".js-removeFromWishlist");
  var $rmFromWishlistToast = $(".js-rmwishlistToast");

  $rmFromWishListButtons.each((i, b) => {
    $(b).on("click", function () {
      new bootstrap.Toast($rmFromWishlistToast).show();
      $(this).closest(".card").remove();
    });
  });
});

// remove from cart toast
$(document).ready(function () {
  var $rmFromCartButtons = $(".js-removeFromCart");
  var $rmFromCartToast = $(".js-rmcartToast");

  $rmFromCartButtons.each((i, b) => {
    $(b).on("click", function () {
      new bootstrap.Toast($rmFromCartToast).show();
      $(this).parent().parent().remove();
    });
  });
});

// adjust input values count +-
$(document).ready(function () {
  var $prodQtyInputGrpList = $(".js-productQuantity");

  $prodQtyInputGrpList.each((i, elem) => {
    var $prodQtyInput = $(elem).find(".form-control");
    var $prodQtySubButton = $(elem).find(".btn").eq(0);
    var $prodQtyAddButton = $(elem).find(".btn").eq(1);

    $($prodQtySubButton).on("click", function () {
      if ($prodQtyInput.val() > 1) {
        $($prodQtyInput).val((i, oldval) => {
          return parseInt(oldval, 10) - 1;
        });
      }
    });
    $($prodQtyAddButton).on("click", function () {
      $($prodQtyInput).val((i, oldval) => {
        return parseInt(oldval, 10) + 1;
      });
    });
  });
});

/*$(document).ready(function() {
  var $rmFromWishListButtons = $(".js-removeFromWishlist")
  $rmFromWishListButtons.each((i, b) => {
    $(b).on("click", function() {
      $("#my-toast").toast("show")
    })
  })
})*/
