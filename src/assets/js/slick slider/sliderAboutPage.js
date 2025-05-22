// Start Slider 3
$(document).ready(function () {
  $(".sliderLogos-black").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 7,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 7,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 7,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });
});
//  End Slider 3
