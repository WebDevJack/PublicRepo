/*

  ES6 Throttling the execution of scripts attached to "scroll" DOM events. Drastically reduces load on JS engine, as scroll events 
  can trigger many times on one scroll, E.G on mobile. Throttling limits the amount of times the event can trigger per a set time.

*/

let myFunc = () => { 
  console.log("throttled event"); 
};
  
let throttling = (someFunc, delay) => {
  // function you want to throttle + delayed time in millisecs e.g 1000
  let storedTime = Date.now();
  return () => {
    if ((storedTime + delay - Date.now()) < 0) {
      someFunc();
      storedTime = Date.now();
    }
  };
};

/* Without Throttling!

$(window).scroll(myFunc); // JQUERY
window.addEventListener("scroll", myFunc); // Native JS

*/

// With Throttling

$(window).scroll(throttling(myFunc, 1000)); // JQUERY

/* or */

window.addEventListener("scroll", throttling(myFunc, 1000)); // Native JS
