function webGlWrapper() {
	// Define variables
	this.canvas = document.getElementById("canvas");
  	this.objectsToRender = [];
  	this.gl = null;

  	// Init WebGl
    this.initGL(canvas);
}

webGlWrapper.prototype.initGL = function(canvas) {
  this.canvas = document.getElementById("canvas");
  this.gl = canvas.getContext("experimental-webgl");
};

webGlWrapper.prototype.render = function() {
  // TODO
  this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
  this.gl.enable(this.gl.DEPTH_TEST);
};