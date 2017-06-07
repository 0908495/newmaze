class Canvas {

    constructor(){

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var canvasWidth = window.innerWidth;
        var canvasHeight = window.innerHeight;
        var code = new Image();
        code.src = './images/code0.png' 
        var img = new Image();
        img.src = './images/level1.png'
        img.onload = function(){
            ctx.drawImage(code,600,0,600,150)
            ctx.drawImage(img,300,150,1220,780);
        }

    }
}