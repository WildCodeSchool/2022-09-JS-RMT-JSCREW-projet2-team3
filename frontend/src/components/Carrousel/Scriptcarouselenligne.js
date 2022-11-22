const Hundelcarousel = () => {
  if ($(".bbb_viewed_slider").length) {
    let viewedSlider = $(".bbb_viewed_slider");

    viewedSlider.owlCarousel({
      loop: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 6000,
      nav: false,
      dots: false,
      responsive: {
        // Quantité d'image :
        0: { items: 3.5 },
        575: { items: 3.5 },
        768: { items: 4.5 },
        991: { items: 6.5 },
        1199: { items: 8.5 },
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
};

export default Hundelcarousel;
