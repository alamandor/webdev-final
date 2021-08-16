$(function () {
  const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("project-animation");
      }
    });
  });

  const proj1 = document.getElementById("project-1");
  const proj2 = document.getElementById("project-2");
  const proj3 = document.getElementById("project-3");

  observer.observe(proj1);
  observer.observe(proj2);
  observer.observe(proj3);

  // Animate to section when nav is clicked
  $("nav a").click(function (e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass("no-scroll")) return;

    e.preventDefault();
    let heading = $(this).attr("href");
    let scrollDistance = $(heading).offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 1
    );
  });
});
