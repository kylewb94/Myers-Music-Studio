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

	
	// Disable invalid form submission
	
	(function() {
		'use strict';
		window.addEventListener('load', function() {
			// Fetch forms for Bootstrap validation styles
			var forms = document.getElementsByClassName('needs-validation');
			// Loop over and prevent submission
			var validation = Array.prototype.filter.call(forms, function(form) {
				form.addEventListener('submit', function(event) {
					if (form.checkValidity() === false) {
						event.preventDefault();
						event.stopPropagation();
					}
					form.classList.add('was-validated');
				}, false);
			});
		}, false);
	})();
	
	
	// AJAX form submission
	
	(function ($) {
		'use strict';
		var form = $('#contact'),
			form_data;

		form.submit(function (e) {
			e.preventDefault();
			form_data = $(this).serialize();
			$.ajax({
				type: 'POST',
				url: form.attr('action'),
				data: form_data,
				success: function () {
					alert('Lesson inquiry successfully submitted. I will get back to you soon!')
				}
			});
			return false;
		});

	})(jQuery);

});	