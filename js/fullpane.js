function fullpane(){

	$.template( "pane-template", $('#fullpane-block').html() );

	function closeFullPane(){
		$('.fullpane').jAnimate('fadeOutDown fast exited', function(self){ $(self).hide() });
		$('body').css('overflow', 'scroll');
		history.pushState("", document.title, window.location.pathname + window.location.search);
		return false;
	}

	$('.fullpane .close').click(function(e){
		closeFullPane();
		e.preventDefault();
		return false;
	});

	$('.open-pane').on('click', function(e){
		//alert('clicked');
		$('.fullpane').html( $.tmpl( "pane-template", works[$(this).data('work')]) );
		$('.fullpane').show().jAnimate('fadeInUp fast');
		$('body').css('overflow', 'hidden');
		$('.fullpane .close').click(function(){
			closeFullPane();
			e.preventDefault();
			return false;
		});
		e.preventDefault();
		window.location.hash = $(this).attr('href').substr(1);
	});

	if(document.workPage){
		$('.open-pane[data-hash="' + document.workPage + '"').click();
	}

};
