

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