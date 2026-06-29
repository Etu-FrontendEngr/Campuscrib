

document.addEventListener("DOMContentLoaded", function () {
  let index = 0;

  function showSlide() {
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".cities-homes");

    if (!track || slides.length === 0) return;

   const slideWidth = slides[0].offsetWidth + 20;;
    track.style.transform = "translateX(" + (-slideWidth * index) + "px)";
  }

  function nextSlide() {
    const slides = document.querySelectorAll(".cities-homes");
    const container = document.querySelector(".slider-window");

    if (!container || slides.length === 0) return;

   const slideWidth = slides[0].offsetWidth + 20;;
    const visibleSlides = Math.floor(container.offsetWidth / slideWidth);

    if (index < slides.length - visibleSlides) {
      index++;
    }

    showSlide();
  }

  function prevSlide() {
    if (index > 0) {
      index--;
    }
    showSlide();
  }

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});





document.addEventListener("DOMContentLoaded", function () {

  let productIndex = 0;

  function showProductSlide() {
    const track = document.querySelector(".product-track");
    const cards = document.querySelectorAll(".bundle-card");
    const container = document.querySelector(".product-window");

    if (!track || !container || cards.length === 0) return;

      const trackStyles = window.getComputedStyle(track);
      const gap = parseFloat(trackStyles.gap) || 0;

  const cardWidth = cards[0].offsetWidth + gap;
  const visibleCards = Math.floor(container.offsetWidth / cardWidth);

  // Ensure productIndex is within bounds

    if (productIndex > cards.length - visibleCards) {
      productIndex = Math.max(0, cards.length - visibleCards);
    }

    track.style.transform = `translateX(-${productIndex * cardWidth}px)`;
  }

  function nextProduct() {
    const cards = document.querySelectorAll(".bundle-card");
    const container = document.querySelector(".product-window");

    if (!container || cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20;
    const visibleCards = Math.floor(container.offsetWidth / cardWidth);

    if (productIndex < cards.length - visibleCards) {
      productIndex++;
    }

    showProductSlide();
  }

  function prevProduct() {
    if (productIndex > 0) {
      productIndex--;
    }

    showProductSlide();
  }

  // ✅ expose buttons
  window.nextProduct = nextProduct;
  window.prevProduct = prevProduct;

  // ✅ INIT SLIDER (YOU MISSED THIS)
  showProductSlide();

  // ✅ FIX RESPONSIVENESS
  window.addEventListener("resize", showProductSlide);


  // ✅ THUMBNAIL LOGIC (keep here too)
  document.querySelectorAll(".bundle-card").forEach(card => {
    const mainImage = card.querySelector(".mainImage");
    const title = card.querySelector(".title");
    const desc = card.querySelector(".desc");
    const thumbs = card.querySelectorAll(".thumb");

    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        mainImage.classList.add("fade");

        setTimeout(() => {
          mainImage.src = thumb.src;
          title.textContent = thumb.dataset.title;
          desc.textContent = thumb.dataset.desc;

          mainImage.classList.remove("fade");
        }, 200);

        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
// SCROLL FADE-IN EFFECT
// ===============================

// Select all elements with the "reveal" class
const sections = document.querySelectorAll(".reveal");

// Function to check if elements are in view
function handleScrollReveal() {

  const screenHeight = window.innerHeight;

  sections.forEach((section) => {

    const sectionTop = section.getBoundingClientRect().top;

    // Adjust this number to control when animation starts
    const triggerPoint = 100;

    // If section is visible on screen
    if (sectionTop < screenHeight - triggerPoint) {
      section.classList.add("active");
    } else {
      section.classList.remove("active"); // remove if you don’t want it to fade out again
    }

  });
}

// Run when user scrolls
window.addEventListener("scroll", handleScrollReveal);

// Run once when page loads
window.addEventListener("load", handleScrollReveal);
});

window.onscroll = function () {
  showButton();
};

function showButton() {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", function(){
  const nameInput = document.getElementById("signupName");
  const emailInput = document.getElementById("signupEmail");
  const phoneInput = document.getElementById("signupNumber")
  const passwordInput = document.getElementById("signupPassword");
  const continueBtn = document.getElementById("continueBtn");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const numberError = document.getElementById("numberError");
  const emailLoginInput = document.getElementById("loginEmail");
  const passwordLoginInput = document.getElementById("loginPassword");
  const loginBtn = document.getElementById("loginBtn");
  const loginemailError = document.getElementById("LoginemailError");
  const loginpasswordError = document.getElementById("LoginpasswordError");

  function validateLoginEmail(){
    const email = emailLoginInput.value;
    const isValid = email.includes("@") && email.includes(".com");
    loginemailError.textContent = isValid ? "" : "Email invalid, kindly enter a valid email";
    return isValid;
  }

  function validateLoginPassword(){
    const password = passwordLoginInput.value;
    const hasMinLength = password.length >= 8;
    const hasNumber = /[0-9]/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    let message = "";
    if (!hasMinLength) message = "Password must be at least 8 characters";
    else if (!hasNumber) message = "Password must include a number";
    else if (!hasLetter) message = "Password must includes a letter";
    loginpasswordError.textContent = message;
    return hasMinLength && hasNumber && hasLetter;
  }

function validateEmail() {
  const email = emailInput.value;
  const isValid = email.includes("@") && email.includes(".com");
  emailError.textContent = isValid ? "" : "Email invalid, kindly enter a valid email";
  return isValid;
}

function validatePassword(){
const password = passwordInput.value;
const hasMinLength = password.length >= 8;
const hasNumber = /[0-9]/.test(password);
const hasLetter = /[a-zA-Z]/.test(password);

let message = "";

if (!hasMinLength) message = "Password must be at least 8 characters";
else if (!hasNumber) message = "Password must include a number";
else if (!hasLetter) message = "Password must includes a letter";

passwordError.textContent = message;

return hasMinLength && hasNumber && hasLetter;
}

function validateNumber(){
  const PhoneNumber = phoneInput.value;
  const hasNumber = /[0-9]/.test(PhoneNumber);
  const hasMaxLength = PhoneNumber.length <= 11;

  let message = "";

  if (!hasNumber) message = "PhoneNumber is invalid, must be numbers";
  if (!hasMaxLength) message = "PhoneNumber must be maximum 11 characters";

  numberError.textContent = message;

  return hasNumber && hasMaxLength;
}

function ValidateForm() {
  const isNameValid = nameInput.value.trim() !== "";
  const isPhoneValid = validateNumber();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isLoginEmail = validateLoginEmail();
  const isLoginPassword = validateLoginPassword();

  const isValid = isNameValid && isPhoneValid && isEmailValid && isPasswordValid;
  const isOkay = isLoginEmail && isLoginPassword;

  continueBtn.disabled = !isValid
  loginBtn.disabled = !isOkay
}
emailInput.addEventListener("input", ValidateForm);
passwordInput.addEventListener("input", ValidateForm);
nameInput.addEventListener("input",ValidateForm);
phoneInput.addEventListener("input",ValidateForm);
passwordLoginInput.addEventListener("input",ValidateForm);
emailLoginInput.addEventListener("input",ValidateForm);


const switchButtons = document.querySelectorAll(".account-switch");

switchButtons.forEach(button => {
button.addEventListener("click", (e) => {
 e.preventDefault();

//Check which form the button is inside/
      const parentForm = button.closest("form");

       if (parentForm.id === "signupForm") {
         signupForm.classList.remove("active");
         loginForm.classList.add("active");
       } else {
         loginForm.classList.remove("active");
         signupForm.classList.add("active");
       }
     });
   });

   // Default form
   signupForm.classList.add("active");

 });

const map = L.map('map').setView([6.5244, 3.3792], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

navigator.geolocation.getCurrentPosition(function(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

map.setView([lat,lon], 13);



L.marker([lat, lon]).addTo(map)
.bindPopup("You're here!")
.openPopup();
}, function() {
  console.log("Location access denied");
});

// const SignupBtn = document.getElementById("signup-button");

// SignupBtn.addEventListener(
//   "click", function() {
//     window.location.href =
//     "auth.html"; 
// });