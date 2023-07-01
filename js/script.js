$(document).ready(function () {
  /* PRICING FUNCTION
   * ------------------------------------------------------ */
  var pricingBtn = $(".switch-btn > button");

  pricingBtn.click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(".switch-btn .btn:first-child").hasClass("active")) {
      subscriptionPlan("99", "/monthly");
    } else {
      subscriptionPlan("1,000", "/yearly");
    }
  });

  function subscriptionPlan(price, term) {
    $(".price-info .price").text(price);
    $(".price-info .term").text(term);
  }

  /* ACCORDION
   * ------------------------------------------------------ */
  $(".accordion-toggle").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active").siblings("h4").removeClass("active");
    }
    $(this).next().slideToggle("fast");
    $(".accordion-content").not($(this).next()).slideUp("fast");
  });
})