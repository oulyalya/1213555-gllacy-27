// var button = document.querySelector(".btn-modal");
// var modal = document.querySelector(".modal-callback");
// var wrapper = document.querySelector(".modal-wrapper");
// var form = querySelector("callback-form");
// var close = document.querySelector(".modal-close");
// var name = querySelector("#name");
// var mail = querySelector("#email");
// var text = querySelector("#message");

// button.addEventListener("click", function(evt) {
// 	evt.preventDefault();
// 	modal.classList.add("modal-show");
// 	wrapper.classList.add("modal-show-wrapper");
// })


var open = document.querySelector(".open-modal")
var modal = document.querySelector(".modal-callback");
var background = document.querySelector(".modal-wrapper");
var close = modal.querySelector(".modal-close");
var person = modal.querySelector("[name=namesurname]");
var email = modal.querySelector("[name=email]");
var form = modal.querySelector(".callback-form")

var isStorageSupport = true;
var storage = "";
  
try {
	storage = localStorage.getItem("person");
	} catch (err) {
	isStorageSupport = false;
}

open.addEventListener("click", function(evt) {
	evt.preventDefault();
	background.classList.add("modal-show-wrapper");
	modal.classList.add("modal-show");
	if(storage) {
		person.value = storage;
		email.focus();
	} else {
		person.focus();
	}	
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	background.classList.remove("modal-show-wrapper");
})

form.addEventListener("submit", function (evt) {
	if (!person.value || !email.value) {
		evt.preventDefault();
		// modal.classList.remove("modal-error");
  //   	modal.offsetWidth = popup.offsetWidth;
    	modal.classList.add("modal-error");
	}	else {
		if (isStorageSupport) {
        localStorage.setItem("person", person.value);
    	}
	}	
});

window.addEventListener("keydown", function(evt) {
	evt.preventDefault();
	if (background.classList.contains("modal-show-wrapper")) {
		background.classList.remove("modal-show-wrapper");
		modal.classList.remove("modal-error");
	}
})

background.addEventListener("click", function(evt) {
	evt.preventDefault();
	if (background.classList.contains("modal-show-wrapper")) {
		background.classList.remove("modal-show-wrapper");
	}
})