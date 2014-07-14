'use strict';
var APP = (function() {
    console.log('index.js');
    
    //var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var stagePadding = 10;
    
    var Api = function(){
	this.createCanvas = function() {
		//create canvas
		var canvas = document.createElement('canvas');
		//When value width is between 1273 and 1280,display is ok.
		//canvas.width = screenWidth - stagePadding * 3;
		canvas.width = 1280;
		canvas.height = screenHeight - stagePadding * 3 - 60;
		canvas.setAttribute('class','stage');
		document.body.appendChild(canvas);
		
		return canvas;
	};
	
    };
    
    var app = new Api();

    return app;

})(APP || {});
