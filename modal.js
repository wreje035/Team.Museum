function popup(id) {
	// get the modal container
	let modal = document.querySelector("#"+id);

	// get the close-button inside the modal
	let closeButton = modal.querySelector(".close-button");

	// toggle the show-modal style
	modal.classList.toggle("show-modal");

	// register a click handler for the close-button
	closeButton.onclick = function () {
		// toggle the show-modal style again
		modal.classList.toggle("show-modal");
	};

}