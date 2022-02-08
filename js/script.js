$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".menu-btn").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
      $(".menu-btn").removeClass("sticky");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () 
{
  fields.firstName = document.getElementById("firstName");
  fields.lastName = document.getElementById("lastName");
  fields.phoneNumber = document.getElementById("phoneNumber");
  fields.email = document.getElementById("email");
  fields.newsletter = document.getElementById("newsletter");
  fields.question = document.getElementById("question");
});

function isNotEmpty(value) 
{
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}

function isEmail(email) 
{
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) 
{
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}

function isValid() 
{
  var valid = true;

  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.phoneNumber, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.question, isNotEmpty);
  valid &= arePasswordsEqual();

  return valid;
}

class User {
  constructor(firstName, lastName, phoneNumber, email, newsletter, question) 
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.newsletter = newsletter;
    this.question = question;
  }
}

/* script portfolio*/
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 5000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});