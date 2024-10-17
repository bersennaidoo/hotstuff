$(document).ready(function() {
  var $tooltipTriggerElements = $('[data-bs-toggle="tooltip"]')
  $tooltipTriggerElements.each((i, elem) => {
    new bootstrap.Tooltip(elem)
  })
})

$(document).ready(function() {
  var $addToCartToast = $(".js-cartToast")

  $(".js-addToCart").on("click", function() {
    new bootstrap.Toast($addToCartToast).show()
  })
})

$(document).ready(function() {
  var $addToWishlistToast = $(".js-wishlistToast")
  var $addToWishlist = $(".js-addToWishlist")

  $addToWishlist.each((i, e) => {
    $(e).on("click", function() {
      new bootstrap.Toast($addToWishlistToast).show()
    })
  })
})

$(document).ready(function() {
  var $addAllToCartToast = $(".js-addAllToast")
  var $addAllToCartButton = $(".js-addAllToCart")
  
  $addAllToCartButton.each((i, e) => {
    $(e).on("click", function() {
      new bootstrap.Toast($addAllToCartToast).show()
    })
  })
})
