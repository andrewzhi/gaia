'use strict';
(function(){
    console.log('webgl_test.js');
    
    // canvas 1
    var t1 = document.createElement('h2');
    t1.innerHTML='canvas.fill color,(w:1270,h:710)';
    document.body.appendChild(t1);
    
    var canvas1 = document.createElement('canvas');
    canvas1.width = 1270;
    canvas1.height = 710;
    canvas1.setAttribute('class','stage');
    document.body.appendChild(canvas1);
    
    var stage1 = canvas1.getContext('2d');
    stage1.fillStyle = 'rgb(100,100,100)';
    stage1.fillRect(0,0,1200,710);
    
    // canvas 2
    var t2 = document.createElement('h2');
    t2.innerHTML='wegl,(w:1270,h:710),canvas.getContext("2d")';
    document.body.appendChild(t2);
        
    var canvas2 = document.createElement('canvas');
    canvas2.width = 1270;
    canvas2.height = 710;
    canvas2.setAttribute('class','stage');
    document.body.appendChild(canvas2);
    
    // webGL init
    initWebgl(canvas2);
    
    // canvas 3
    var t3 = document.createElement('h2');
    t3.innerHTML='wegl,(w:1270,h:710),' +
                 'canvas.getContext("2d",{willReadFrequently:true})';
    document.body.appendChild(t3);
        
    var canvas3 = document.createElement('canvas');
    canvas3.width = 1270;
    canvas3.height = 710;
    canvas3.setAttribute('class','stage');
    document.body.appendChild(canvas3);
    
    // webGL init
    initWebgl(canvas3);

    
    //STEP 1: init WebGL stage
    function initWebgl(canvas){
        // global var
        window.gl = null;
      
        try {
            window.gl = canvas.getContext('webgl') ||
                 canvas.getContext('experimental-webgl');
        } catch(e) {
            console.log(e);
        }
        
        // config stage
        if (window.gl) {
            window.gl.clearColor(0.3, 0.3, 0.3, 1.0); //color:black,alpha:1.0
            window.gl.enable(window.gl.DEPTH_TEST); // Z-buffer
            window.gl.depthFunc(window.gl.LEQUAL);
            // 清除深度缓存的颜色
            window.gl.clear(window.gl.COLOR_BUFFER_BIT |
                            window.gl.DEPTH_BUFFER_BIT);
        } else {// NOT supported WebGL
            console.log('Unable to initialize WebGL.' +
                        'Your browser may not support it.');
        }
        
        window.gl.viewport(0, 0, canvas.width, canvas.height);
    }
    
   
      
})();