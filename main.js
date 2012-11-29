function webGlWrapper() {
	// Define variables
	this.canvas = document.getElementById("canvas");
  	this.objectsToRender = [];
  	this.gl = null;

  	// Init WebGl
    this.initGL(canvas);
    this.initShaders();

    // Temp test
    this.initBuffers();
    this.render();
}

webGlWrapper.prototype.initGL = function(canvas) {
	try {
		this.gl = canvas.getContext("experimental-webgl");
      	this.gl.viewportWidth = canvas.width;
      	this.gl.viewportHeight = canvas.height;
    } 
    catch(e) {
    	console.error(e);
    }
    if (!gl) {
      alert("Could not initialise WebGL!");
    }
    this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
    this.cameraMatrix = mat4.perspective(45, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 100.0, pMatrix);
};
webGlWrapper.prototype.initShaders = function() {
	//TODO
};


webGlWrapper.prototype.initBuffers = function() {
	var triangleVertexPositionBuffer = this.gl.createBuffer();
	this.gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
	var vertices = [
         0.0,  1.0,  0.0,
        -1.0, -1.0,  0.0,
         1.0, -1.0,  0.0
    ];
    this.gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
    triangleVertexPositionBuffer.itemSize = 3;
    triangleVertexPositionBuffer.numItems = 3;
    this.objectsToRender.push(triangleVertexPositionBuffer)

    var squareVertexPositionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    vertices = [
         1.0,  1.0,  0.0,
        -1.0,  1.0,  0.0,
         1.0, -1.0,  0.0,
        -1.0, -1.0,  0.0
    ];
    this.gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
    squareVertexPositionBuffer.itemSize = 3;
    squareVertexPositionBuffer.numItems = 4;
};

webGlWrapper.prototype.render = function() {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    var pMatrix;
    mat4.perspective(45, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 100.0, pMatrix);
    mat4.identity(mvMatrix);


};