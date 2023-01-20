$(document).ready(function(){
	if ($(window).width() > 900) {
		$('#fullpage').fullpage({
			anchors: ['slide','about-us', 'offerings', 'projects', 'contacts'],
			//sectionsColor: ['#FFF', '#1BBC9B', '#7E8F7C'],
			css3: false
	//		scrollOverflow: true
		});
	} else {
		$('#fullpage').fullpage({
			anchors: ['slide','about-us', 'offerings', 'projects', 'contacts'],
			//sectionsColor: ['#FFF', '#1BBC9B', '#7E8F7C'],
			css3: false,
			autoScrolling: false,
			fitToSection: false
	//		scrollOverflow: true
		});
		
	}
	
	
	$('.project-slide-con').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		responsiveClass:true,
		items: 3,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	});
	
	
	AOS.init({
        easing: 'ease-in-out-sine'
    });
	
	$('.partners-row .open').click(function(){
		var res = $(this).attr('res');
		
		$(this).parents('.partners-row').fadeOut(500, function(){
			$('.partners-hidden .partners-row[res="'+res+'"]').fadeIn(500);
		});
	});
	
	$('.partners-row .close-row').click(function(){
		$(this).parents('.partners-row').fadeOut(500, function(){
			$('.partners-row-main').fadeIn(500);
		});
	});
	
	
	// Javascript to enable link to tab
	var url = document.location.toString();
	if (url.match('#')) {
		$('.nav-tabs a[data-target="#' + url.split('#')[1] + '"]').tab('show');
	} 

	// Change hash for page-reload
	$('.nav-tabs a').on('shown.bs.tab', function (e) {
		window.location.hash = e.target.hash;
	});
});