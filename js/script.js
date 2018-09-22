var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close-button");
var feedbackname = popup.querySelector(".modal-name");
var feedbackemail = popup.querySelector(".modal-email");
var feedbacktext = popup.querySelector("textarea");
var form = popup.querySelector("form");
var slide1 = document.querySelector(".slide1"); 
var slide2 = document.querySelector(".slide2"); 
var slide3 = document.querySelector(".slide3");
var slider_radio1 = document.querySelector(".slider-radio1");
var slider_radio2 = document.querySelector(".slider-radio2");
var slider_radio3 = document.querySelector(".slider-radio3");
var background = document.querySelector(".site-wrapper"); 

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Клик по кнопке обратной связи");
	popup.classList.add("modal-show");

    feedbackname.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	
	if (!feedbackname.value || !feedbackemail.value || !feedbacktext.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});

slider_radio1.addEventListener("click", function (evt) {
	evt.preventDefault();
	background.classList.remove("background-2");
	background.classList.remove("background-3");
	background.classList.add("background-1");
	slide2.classList.remove("slide-show");
	slide3.classList.remove("slide-show");
	slide1.classList.add("slide-show");
	slider_radio2.classList.remove("current-slider-radio");
	slider_radio3.classList.remove("current-slider-radio");
	slider_radio1.classList.add("current-slider-radio");
});

slider_radio2.addEventListener("click", function (evt) {
	evt.preventDefault();
	background.classList.remove("background-1");
	background.classList.remove("background-3");
	background.classList.add("background-2");
	slide1.classList.remove("slide-show");
	slide3.classList.remove("slide-show");
	slide2.classList.add("slide-show");
	slider_radio1.classList.remove("current-slider-radio");
	slider_radio3.classList.remove("current-slider-radio");
	slider_radio2.classList.add("current-slider-radio");
});

slider_radio3.addEventListener("click", function (evt) {
	evt.preventDefault();
	background.classList.remove("background-2");
	background.classList.remove("background-1");
	background.classList.add("background-3");
	slide2.classList.remove("slide-show");
	slide1.classList.remove("slide-show");
	slide3.classList.add("slide-show");
	slider_radio2.classList.remove("current-slider-radio");
	slider_radio1.classList.remove("current-slider-radio");
	slider_radio3.classList.add("current-slider-radio");
});