$(document).ready(function(){

	var main = {
		header: function(){
			var windowheight = $(window).height();
			$('[data-height]').height(windowheight);
			$('[data-valign]').css('top', function(){
				return ($('header').height() - $(this).height())/2 + $(window).scrollTop()/3;
			});
			$('header').css('position', 'inherit');
		},
		menuScrollTo: function(e){
			menu.blocked = false;
			$('#hamburger').trigger('click');
			var target = $(e.currentTarget).attr('href');
			$('body, html').animate({
		        scrollTop: $(target).offset().top
		    }, 1000);
		},
		headerContent: function(){
			var offset = $(window).scrollTop();
			var opacity = 1 - Math.abs(offset)/550;
			var blur = offset/150;
		}
	}

	var menu = {
		blocked: false,
		openedClass: 'is-open',
		closedClass: 'is-closed',
		showEffect: 'fadeInLeft fast',
		hideEffect: 'fadeOutLeft fast',
		toggle: function(e){
			var target = '[data-nav=' + $(e.currentTarget).data('nav-control') + ']';
			$(e.currentTarget).hasClass(this.openedClass) ?
				this.close(e.currentTarget, target) :
				this.open(e.currentTarget, target);
		},
		open: function(e, target){
			var self = this;
			if(!this.blocked){
				this.blocked = true;
				$(target).animateEnd(this.hideEffect);
				$(target).show();
				$(target).animateAndCall(this.showEffect, function(){
					$(target).animateEnd(this.showEffect);
					self.blocked = false;
				});
				$(e).removeClass(self.closedClass).addClass(self.openedClass);
				$(target).removeClass(self.closedClass).addClass(self.openedClass);
			}
		},
		close: function(e, target){
			var self = this;
			if(!this.blocked){
				this.blocked = true;
				$(target).animateEnd(this.showEffect);
				$(target).animateAndCall(this.hideEffect, function(){
					$(target).animateEnd(this.hideEffect);
					$(target).hide();
					self.blocked = false;
				});
				$(e).removeClass(self.openedClass).addClass(self.closedClass);
				$(target).removeClass(self.openedClass).addClass(self.closedClass);
			}
		},
	}

	var initialize = {
		hash: function(){
		  var hash = window.location.hash.substr(1);
		  if(hash.indexOf('work-') >= 0)
		    document.workPage = hash.substr(5);
		  else
		    document.workPage = false;
		},
		wow: function(){
			new WOW().init();
		},
		template: function(){
  		$.template( "work-template", $('#work-block').html() );
			$.each(works, function(i, work){
		    work['id'] = i;
		    $.tmpl( "work-template", work).appendTo( "#portfolio" );
		  });
		},
		fullpane: function(){
  		fullpane();
		},
		gridScrollFx: function(){
			new GridScrollFx( document.getElementById( 'portfolio' ), {
		    viewportFactor : 0.8
		  });
		},
		init: function(){
			this.wow();
			this.template();
			this.fullpane();
			this.gridScrollFx();
		}
	}

	main.header();

	$(window).bind('load ready resize scroll', function(e){
		main.header();
	});

	$(window).bind('load ready scroll', function(){
		main.headerContent();
	});

	$('[data-nav-control]').bind('click', function(e){
		menu.toggle(e);
	});

	$('nav ul [href*="#"]').bind('click', function(e){
		main.menuScrollTo(e);
		return false;
	});

	$('nav').bind('click', function(e){
		menu.blocked = false;
		$('#hamburger').trigger('click');
		return false;
	});

	initialize.init();

});
