 // Sale end time (e.g., 24 hours from now)
 const saleEndTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours

 const saleBanner = document.getElementById('sale-banner');
 const countdown = document.getElementById('countdown');

 // Update the countdown every second
 const interval = setInterval(function() {
     const now = new Date().getTime();
     const distance = saleEndTime - now;

     if (distance <= 0) {
         clearInterval(interval);
         saleBanner.classList.remove('active');
         countdown.innerHTML = "Sale Ended!";
     } else {
         saleBanner.classList.add('active');
         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
         countdown.innerHTML = ` | ${hours}h ${minutes}m ${seconds}s left`;
     }
 }, 1000);



let logocontainer = document.querySelector("logocontainer");
window.addEventListener(scroll,() =>{
    logocontainer.classList.toggle("active",window.scrollY > 0);

})