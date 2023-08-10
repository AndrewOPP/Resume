
const point = document.querySelectorAll(".letter");

const arr = [...point]

arr.map(item => {
    item.addEventListener("mouseover", function () {
        let color = '#' + Math.random().toString(16).slice(3, 9);
        this.style.color = color;
        this.style.webkitTextStroke = color;
    }); 


    item.addEventListener("mouseout", function () {
        const node = this;
        setTimeout(function () {
        node.style.color = "#ebddbf";
        node.style.webkitTextStroke = "2px grey";
        }, 4000)

    });
})


const navList = document.querySelectorAll(".header-nav-list-item");
console.log(navList);
const arrNavList = [...navList]
 
arrNavList.map(item => {
    item.addEventListener("mouseover", function () {
      let color = '#' + Math.random().toString(16).slice(3, 9);
        this.style.webkitTextStroke = color;
        this.style.color = color;
       
    }); 


    item.addEventListener("mouseout", function () {
        const node = this;
        setTimeout(function () {
        node.style.color = "#ebddbf";
         node.style.webkitTextStroke = "1px grey";
        }, 1000)

    });
})


// confetti


// const button = document.querySelector("#clickMeButtom")

// button.addEventListener("click", () => {
// let duration = 5 * 1000;
// let animationEnd = Date.now() + duration;
// let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

// function randomInRange(min, max) {
//   return Math.random() * (max - min) + min;
// }

// var interval = setInterval(function() {
//   var timeLeft = animationEnd - Date.now();

//   if (timeLeft <= 0) {
//     return clearInterval(interval);
//   }

//   var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
//   confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
//   confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
// }, 250);

// })



// SMOOTHSCROLL

ScrollSmoother.create(
  {
    smooth: 1.4,
    effects: true
  }
)
gsap.fromTo(".smoothscroll", { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: ".smoothscroll",
    start: "centre",
    scrub: true
  }
})
