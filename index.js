// var tl=gsap.timeline()
// tl.from("li #home-link",{
//     scale:10,
//     duration:1
// })
// tl.from("li #about-link",{
//     duration:1,
//     scale:10
// })
// tl.from("li #projects-link",{
//     duration:1,
//     scale:10
// })
// tl.from("li #contact-link",{
//     duration:1,
//     scale:10
// })
// gsap.from(".left",{
//     opacity:-10,
//     scale:10,
    
// })
gsap.from(".about-card",{
    x:-5000,
    scrollTrigger:
    {
        trigger:".about-container .about-card",
        scroller:"body",
        start:"top 90%",
        end:"bottom 90%",
        scrub:1
    }
})

var tl=gsap.timeline()
tl.from("#heading",{
    y:1200,
    // scrollTrigger:".navContent #heading"
})
tl.from("#homeContainer",{
       x:-10000,

})
tl.from("#aboutContainer",{
       x:-10000,

})
tl.from("#projectsContainer",{
       x:-10000,

})
tl.from("#contactContainer",{
       x:-10000,

})
  document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }); 
  const name = "Divya Shakti";
  const typedSpan = document.getElementById("typed-name");
  let index = 0;

  function typeWriter() {
    if (index < name.length) {
      typedSpan.textContent += name.charAt(index);
      index++;
      setTimeout(typeWriter, 150); // speed of typing
    } else {
      setTimeout(() => {
        typedSpan.textContent = "";
        index = 0;
        typeWriter(); // start again
      }, 2000); // delay before repeating
    }
  }

  window.addEventListener("DOMContentLoaded", typeWriter);

// const textElement = document.getElementById("name");
// const text = textElement.textContent; // Get the text content of the paragraph

// function animateText() {
//     textElement.textContent = ""; // Clear the original text

//     text.split('').forEach((letter, index) => {
//         const span = document.createElement('span');
//         span.textContent = letter === ' ' ? '\u00A0' : letter; // Use non-breaking space for visibility
//         span.classList.add('letter');
//         span.style.animationDelay = `${index * 0.1}s`; // Delay for each letter
//         textElement.appendChild(span);
//     });

//     // Reset the animation after a delay equal to the total animation time
//     setTimeout(() => {
//         animateText(); // Call the function again to restart the animation
//     }, text.length * 100 + 1000); // Total time for animation + 1 second pause
// }

// // Start the animation
// animateText();
// const textElement1 = document.getElementById("what");
// const text1 = textElement1.textContent; // Get the text content of the paragraph

// function animateText1() {
//     textElement1.textContent = ""; // Clear the original text

//     text1.split('').forEach((letter, index) => {
//         const span = document.createElement('span');
//         span.textContent = letter === ' ' ? '\u00A0' : letter; // Use non-breaking space for visibility
//         span.classList.add('letter');
//         span.style.animationDelay = `${index * 0.1}s`; // Delay for each letter
//         textElement1.appendChild(span);
//     });

//     // Reset the animation after a delay equal to the total animation time
//     setTimeout(() => {
//         animateText1(); // Call the function again to restart the animation
//     }, text.length * 100 + 1000); // Total time for animation + 1 second pause
// }

// // Start the animation
// animateText1();

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior

    // Get the services section
    var contactSection = document.getElementById('contact');

    // Show the services section and scroll to it
    contactSection.style.display = "block";  // Make the services section visible
    contactSection.scrollIntoView({ behavior: 'smooth' });  // Scroll smoothly to the services section
});


document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
  
    // Get the services section
    var contactSection = document.getElementById('about');
  
    // Show the services section and scroll to it
    contactSection.style.display = "block";  // Make the services section visible
    contactSection.scrollIntoView({ behavior: 'smooth' });  // Scroll smoothly to the services section
  }); 
