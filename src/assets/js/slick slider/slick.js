// Start Slider 1

$(document).ready(function () {
  $(".sliderBlogs").slick({
    prevArrow: $(".leftBlog"),
    nextArrow: $(".rightBlog"),
    infinite: true,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 3.5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3.5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3.2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3.5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });
  // Define an array of texts and images based on the slides
  const slideContent = [
    {
      title: "Infused is at the forefront of health innovation",
      fullText:
        "Enlightened Health AI takes your wellness journey to new heights with advanced predictive analytics. Gain access to intelligent health solutions that illuminate the path to a healthier, more informed you.",
      shortText:
        "Enlightened Health AI takes your wellness journey to new heights with advanced predictive analytics...",
      img: "./images/sectionFour-slide1.png",
    },
    {
      title: "AI-Powered Wellness Solutions",
      fullText:
        "Discover AI-driven insights that help you take control of your health and well-being with personalized recommendations and actionable health data.",
      shortText:
        "Discover AI-driven insights that help you take control of your health and well-being...",
      img: "./images/sectionFour-slide2.png",
    },
    {
      title: "Transforming Healthcare with AI",
      fullText:
        "Our cutting-edge AI technology is reshaping healthcare, providing smarter and faster solutions for both patients and medical professionals.",
      shortText:
        "Our cutting-edge AI technology is reshaping healthcare, providing smarter and faster solutions...",
      img: "./images/sectionFour-slide3.png",
    },
    {
      title: "Next-Gen AI for a Healthier Future",
      fullText:
        "Explore the future of AI in healthcare and how it enhances daily life for a better tomorrow with advanced data analysis and predictive insights.",
      shortText:
        "Explore the future of AI in healthcare and how it enhances daily life for a better tomorrow...",
      img: "./images/sectionFour-slide4.png",
    },
  ];

  // Update content with animations when slide changes
  $(".sliderBlogs").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(
        ".sectionFour-part2 h1, .fxTexts-part1 p, #slideActive, .readMoreBtn"
      ).fadeOut(300, function () {
        $(".sectionFour-part2 h1").text(slideContent[nextSlide].title);
        $(".fxTexts-part1 p").html(
          `${slideContent[nextSlide].shortText} <b class="color-linearGradient readMoreBtn">Read more</b>`
        );
        $("#slideActive").attr("src", slideContent[nextSlide].img);

        $(
          ".sectionFour-part2 h1, .fxTexts-part1 p, #slideActive, .readMoreBtn"
        ).fadeIn(500);
      });
    }
  );

  // Handle "Read More" Click
  $(document).on("click", ".readMoreBtn", function () {
    const currentSlideIndex = $(".sliderBlogs").slick("slickCurrentSlide");
    $(".fxTexts-part1 p").html(`${slideContent[currentSlideIndex].fullText}`);
  });
});
//  End Slider 1
// Start Slider 2
$(document).ready(function () {
  $(".sliderLogos1").slick({
    infinite: true,
    slidesToShow: 3.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3.2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3.5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3.3,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });
});
//  End Slider 2
// Start Slider 3
$(document).ready(function () {
  $(".sliderLogos2").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3.2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3.4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3.3,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });
});
//  End Slider 3
