const Hundelcarousel = (id) => {
  $("#owl-one").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
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

  $("#owl-two").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
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

  $(`#owl-two${id}`).owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
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

  $("#owl-three").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
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

  $("#owl-Four").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
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
};

export default Hundelcarousel;
