//gsap animations



//hamburger menu functionality
const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });//this is for the hamburger menu

// Close nav when any link is clicked (only in mobile view)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default jump

    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile menu on small screens
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
    }
  });
});

//if anyone reloads the page,it will scroll to the top
 window.addEventListener('load', function () {
    if (location.hash) {
      history.replaceState(null, '', location.pathname); // remove hash
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
  });

const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // revert when out of view
        }
      });
    }, { threshold: 0.3 }); // trigger when 30% is visible

    document.querySelectorAll(".animate-text").forEach(el => observer.observe(el));
  


    
    // cursor movement

    let inCursor=document.querySelector(".innerCursor");
    let outCursor=document.querySelector(".outerCursor");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      let x=e.clientX;
       let y=e.clientY;
       inCursor.style.left=`${x}px`;
       inCursor.style.top=`${y}px`;

       outCursor.style.left=`${x}px`;
       outCursor.style.top=`${y}px`;
    }