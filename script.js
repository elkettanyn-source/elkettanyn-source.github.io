 
   var typed = new Typed(".text", {
  strings: ["Web Developer","Full-stack"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

  AOS.init({
    duration: 1000,
    once: true
  });
 

  
(function(){
  emailjs.init("s4A0N_RElU5QSJqfg");  
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_pmxq80l",
    "template_l9vwrn4",
    this
  ).then(function(){
    alert("Message sent successfully ✅");
  }, function(error){
    alert("Failed to send message ❌");
    console.log(error);
  });

  this.reset();
});
 
