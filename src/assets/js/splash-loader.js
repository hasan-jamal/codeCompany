// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const progressCircle = document.querySelector(".progress-ring-circle");
  const percentageElement = document.querySelector(".percentage");
  const stageCurrent = document.querySelector(".stage-current");
  const stageNext = document.querySelector(".stage-next");
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");
  const title = document.querySelector(".content h1");
  const paragraph = document.querySelector(".content p");
  const shapes = document.querySelectorAll(".shape");

  // Calculate the circumference of the circle
  const radius = progressCircle.getAttribute("r");
  const circumference = 2 * Math.PI * radius;

  // Color stages
  const colorStages = [
    { accent: "#38bdf8", bg: "#0f172a" }, // Stage 1: Blue
    { accent: "#818cf8", bg: "#131c2e" }, // Stage 2: Indigo
    { accent: "#c084fc", bg: "#1a2234" }, // Stage 3: Purple
    { accent: "#fb7185", bg: "#1e283a" }, // Stage 4: Pink
  ];

  // Set initial stroke-dasharray and stroke-dashoffset
  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;

  // Initialize GSAP timeline
  const tl = gsap.timeline();

  // Animate in the shapes
  tl.to(shapes, {
    scale: 1,
    duration: 2,
    stagger: 0.3,
    ease: "power3.out",
  });

  // Progress animation
  tl.to(
    progressCircle,
    {
      strokeDashoffset: 0,
      duration: 5,
      ease: "power1.inOut",
      onUpdate: function () {
        // Calculate and update percentage
        const progress = Math.round(
          (1 - progressCircle.style.strokeDashoffset / circumference) * 100
        );
        percentageElement.textContent = progress;

        // Update colors based on progress
        updateColors(progress);

        // Grow shapes based on progress
        updateShapes(progress);
      },
    },
    0
  );

  // Animate to completion
  tl.to([stageCurrent, stageNext], {
    y: "-=30",
    duration: 0.8,
    ease: "power2.inOut",
  })
    .to(preloader, {
      y: "-100vh",
      duration: 1.2,
      ease: "power3.inOut",
      delay: 0.8,
    })
    .set(
      content,
      {
        visibility: "visible",
      },
      "<"
    )
    .to(
      content,
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "<0.3"
    )
    .to(
      [title, paragraph],
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      },
      "<0.2"
    )
    .set(preloader, {
      display: "none",
    });

  // Function to update colors based on progress
  function updateColors(progress) {
    const stage = Math.floor(progress / 25);
    if (stage < colorStages.length) {
      progressCircle.style.stroke = colorStages[stage].accent;
      document.documentElement.style.setProperty(
        "--color-dark",
        colorStages[stage].bg
      );
      document.documentElement.style.setProperty(
        "--color-accent-1",
        colorStages[0].accent
      );
      document.documentElement.style.setProperty(
        "--color-accent-2",
        colorStages[1].accent
      );
      document.documentElement.style.setProperty(
        "--color-accent-3",
        colorStages[2].accent
      );
      document.documentElement.style.setProperty(
        "--color-accent-4",
        colorStages[3].accent
      );
    }
  }

  // Function to update shapes based on progress
  function updateShapes(progress) {
    const scaleValue = 1 + progress / 100;

    if (progress > 25) {
      gsap.to(shapes[0], {
        scale: scaleValue,
        ease: "power1.out",
        duration: 0.5,
      });
    }
    if (progress > 50) {
      gsap.to(shapes[1], {
        scale: scaleValue,
        ease: "power1.out",
        duration: 0.5,
      });
    }
    if (progress > 75) {
      gsap.to(shapes[2], {
        scale: scaleValue,
        ease: "power1.out",
        duration: 0.5,
      });
    }
  }
});
