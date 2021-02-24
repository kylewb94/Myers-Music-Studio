$(document).ready(function($) {	
		
	// Remove location hash
	
	function removeLocationHash() {
		var noHashURL = window.location.href.replace(/#.*$/, '');
		window.history.replaceState('', document.title, noHashURL) 
	}
	window.addEventListener("popstate", function(event) {
		removeLocationHash();
	});
	window.addEventListener("hashchange", function(event) {
		event.preventDefault();
		removeLocationHash();
	});
	window.addEventListener("load", function() {
		removeLocationHash();
	});
	
	
	// Back to top button
	
	var btn = $('#button');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '200');
	});
	
	
	// Smooth scrolling
	
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 400);
		return false;
	});	
	
	// AJAX form submission
	
	document.querySelector("form").addEventListener("submit", handleSubmit);

	const handleSubmit = (e) => {
		e.preventDefault()
		let myForm = document.getElementById('contact');
		let formData = new FormData(myForm)
		fetch('/', {
			method: 'POST',
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString()
		}).then(() => alert('Lesson inquiry successfully submitted. I will get back to you soon!')).catch((error) => alert(error))
	}

});	