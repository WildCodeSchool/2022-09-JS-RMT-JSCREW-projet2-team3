$(document).ready(function () {
  if ($(".bbb_viewed_slider").length) {
    let viewedSlider = $(".bbb_viewed_slider");

    viewedSlider.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 6000,
      nav: false,
      dots: false,
      responsive: {
        // Quantité d'image :
        0: { items: 3 },
        575: { items: 3 },
        768: { items: 4 },
        991: { items: 6 },
        1199: { items: 8 },
      },
    });

    if ($(".bbb_viewed_prev").length) {
      let prev = $(".bbb_viewed_prev");
      prev.on("click", function () {
        viewedSlider.trigger("prev.owl.carousel");
      });
    }

    if ($(".bbb_viewed_next").length) {
      let next = $(".bbb_viewed_next");
      next.on("click", function () {
        viewedSlider.trigger("next.owl.carousel");
      });
    }
  }
});
