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
