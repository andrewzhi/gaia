'use strict';
var APP = (function(){
    
    const BUILD_ITEM = [
        {
            msg : 'canvas(w:1270,h:710),fill color -> error',
            whAry : [1270,710]
        },
        {
            msg : 'canvas(w:1273,h:710),fill color -> ok, ' +
                  'canvas(w:1273~1280,h:710) -> ok',
            whAry : [1273,710]
        },
        {
            msg : 'canvas(w:1190,h:500),fill color -> error',
            whAry : [1190,500]
        },
        {
            msg : 'canvas(w:1208,h:500),fill color -> ok, ' +
                  'canvas(w:1208~1248,h:500) -> ok',
            whAry : [1208,500]
        },
        {
            msg : 'canvas(w:481,h:320),fill color -> error',
            whAry : [481,320]
        },
        {
            msg : 'canvas(w:480,h:320),fill color -> ok, ' +
                  'canvas(w:472~480,h:320) -> ok',
            whAry : [480,320]
        },
        {
            msg : 'canvas(w:1270,h:710),draw image -> error',
            whAry : [1270,710],
            imgFlag : true
        },
        {
            msg : 'canvas(w:1273,h:710),draw image -> ok, ' +
                  'canvas(w:1273~1280,h:710) -> ok',
            whAry : [1273,710],
            imgFlag : true
        }
        
    ];
    
    //load data into createDom
    function buildByData(){
        var k = BUILD_ITEM.length;
        for(var i =0 ;i < k ; i++){
            var obj = BUILD_ITEM[i];
            createCanvasDom(obj.msg, obj.whAry,
                            obj.imgFlag || false, obj.gupFlag || true);
        }
    }
    
    //create canavs,message
    function createCanvasDom(msg, whAry, imgFlag, gpuFlag){

        //message
        var read = document.createElement('h2');
        read.innerHTML = msg;
        document.body.appendChild(read);
        
        //canvas
        var canvas = document.createElement('canvas');
        canvas.width = whAry[0];
        canvas.height = whAry[1];
        canvas.setAttribute('class','stage');
        document.body.appendChild(canvas);
        
        //set getContext
        var stage = null;
        if (gpuFlag) {
            stage = canvas.getContext('2d');
        } else {
            stage = canvas.getContext('2d',{willReadFrequently:true});
        }
        
        //fill color or draw image
        if (!imgFlag) {
            stage.fillStyle = 'rgb(100,100,100)';
            stage.fillRect(0,0,whAry[0],whAry[1]);
        } else {
            var img = new Image();
            img.src='../images/test.jpg';
            img.onload = function(){
                    stage.drawImage(this,0,0);
            };
        }
        
    }
    
    //module
    var app = {};
    app.init = function(){
         buildByData();
    };
    
    return app;

})();

window.onload = function(){
    APP.init();
};