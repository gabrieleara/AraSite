function parallaxH() {
	this.elem;
	this.text;
	this.MAX_SCROLL = 400;
	this.SCROLL_RATIO = 4; /* TODO: check if ok */

	function scrollHandler() {
		var opacity = (this.MAX_SCROLL - $(window).scrollTop()) / this.MAX_SCROLL;
		
		this.elem.css("transform", "translateY(" + $(window).scrollTop() / this.SCROLL_RATIO + "px)");
		this.text.css("opacity", opacity);
	}
	
	function setup() {
		this.elem = $("#welcome-header-block");
		this.text = this.elem.find("h1, p");
		
		$(window).scroll(scrollHandler.bind(this));
		
		scrollHandler.call(this);
	}

	$(document).ready(setup.bind(this));
}

var parallax = new parallaxH();