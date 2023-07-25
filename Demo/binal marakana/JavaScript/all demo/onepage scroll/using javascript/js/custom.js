let Links = document.querySelectorAll("a");


window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  // console.log("top",fromTop);
  Links.forEach(link => {
    let section = document.querySelector(link.hash);
    // console.log("section",section);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});


Links.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
