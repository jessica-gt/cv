//magic scroll des images du portfolio
// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.to(".animate", 0.6, {rotationY: 360});

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 100})//=>changer duration pour changer position end
				.setTween(tween)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);

//ecrit
	var controller = new ScrollMagic.Controller();
	// build scenes
		var revealElements = document.getElementsByClassName("digit");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 40,												 // start a little later
								triggerHook: 0.4,
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							//.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
							.addTo(controller);
		}