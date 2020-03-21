var open = document.querySelector(".open-modal")
var modal = document.querySelector(".modal-callback");
var background = document.querySelector(".modal-wrapper");
var close = modal.querySelector(".modal-close");
var person = modal.querySelector("[name=namesurname]");
var email = modal.querySelector("[name=email]");
var form = modal.querySelector(".callback-form");
var message = modal.querySelector("[name=message]")



open.addEventListener("click", function(evt) {
	evt.preventDefault();
	background.classList.add("modal-show-wrapper");
	modal.classList.add("modal-show");
	person.focus();	
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	background.classList.remove("modal-show-wrapper");
})


form.addEventListener("submit", function (evt) {
	if (!person.value || !email.value) {
		evt.preventDefault();
		if (!person.value) {
			person.focus();
		}
		if (!email.value) {
			email.focus();
		}
	}	
});