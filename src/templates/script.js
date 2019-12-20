module.exports = {
    'main': `console.log(document.querySelector("#playArea"));
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 23);
              };
    })();
    $(function(){
      $(window).resize(function(){
        $("#playArea").attr({
          'width': $('body').width(),
          'height': $('body').height()
        });
        
        width = $('body').width();
        height = $('body').height();
        
      });
      $(window).resize();
    });
    
    var Point = function(){
      this._size = 0.5;
      this._x = 0;
      this._y = 0;
      this._direction = 0;
      this._velocity = 0;
      this._distances = [];
      this._neighboors = [];
      this._randomization = 0;
    
      this.__collection = null;
      
      
      this._step = function(aCollection){
    
        var modifiedVelocity = this._velocity*1 * ((Math.random() * this._randomization+1)/10);
        var direction = (Math.random()*2%2 >1)?-1:1;
    
        this._direction =  this._direction*1 + ((Math.random() * this._randomization) * direction);
        var radianAngle = this._direction * Math.PI / 180;
    
        
        this._x = (this._x * 1) + (modifiedVelocity * Math.cos(radianAngle) * 1);
        this._y = (this._y * 1) + (modifiedVelocity * Math.sin(radianAngle) * 1);
    
        if(this._x > width) this._x = 0;
        if(this._x < 0) this._x = width;
        if(this._y > height) this._y = 0;
        if(this._y < 0) this._y = height;
     
        this.__collection = aCollection;
        
    
      }
      
      this._computeNeighboors = function() {
        if(this.__collection == null)  return;
    
        aCollection = this.__collection;
        this._distances = [];
        for(i=0; i < aCollection.length; i++){
          
          if(aCollection[i]._x != this._x &&
             aCollection[i]._y != this._y){
    
    
            this._distances.push({
              pointIndex: i,
              pointObj: aCollection[i],
              distance: Math.sqrt( 
                Math.pow((this._x - aCollection[i]._x), 2) + 
                Math.pow((this._y - aCollection[i]._y), 2)
              )
            });
          }
        }
        this._distances.sort(function(a,b){ 
          defaultReturn = 0;
          if(a.distance < b.distance) defaultReturn = -1;
          if(a.distance > b.distance) defaultReturn = 1;
          return defaultReturn
    
        });
        
        this._neighboors = this._distances.slice(0,3);
      }
    
      
      this.draw = function(context){
        this._computeNeighboors();

        context.lineWidth = 0.005;
        context.strokeStyle = 'rgba(0,255,213,0.5)';
        
        context.beginPath();    
        for(i=0; i<this._neighboors.length; i++) {
    
            context.moveTo(this._x, this._y);
            context.lineTo(this._neighboors[i].pointObj._x,   this._neighboors[i].pointObj._y);
          
            context.lineWidth = 0.10 + 5 / this._neighboors[i].distance;
        }
        context.closePath();
    
        context.stroke();
        
        context.beginPath();
        context.arc(this._x, this._y, this._size*this._velocity, 0, 2 * Math.PI, false);
        context.fillStyle = 'rgb(0, 255, 213, 0.5)';
        context.strokeStyle = 'rgba(0,255,213,0.5)';
        context.lineWidth = 0.005;
        context.fill();
        context.stroke();
        
        context.beginPath();
        context.arc(this._x, this._y, this._size, 0, 2 * Math.PI, false);
        context.fillStyle = 'rgba(0,255,213,0.5)';
        context.fill();
         
      }
    }
    
    
    var aPoints = [];
    var can, ctx, interval, width, height;
    var numPoints = 70;
    
    function init() {
      can = document.getElementById("playArea");
      ctx = can.getContext("2d");
      width = $('body').width();
      height = $('body').height();
      
      for(x=0; x<numPoints; x++){
        var newPoint = new Point();
        newPoint._size = (Math.random() * (8 - 0.5) + 0.1).toFixed(2);
        newPoint._x = (Math.random() * width).toFixed(0);
        newPoint._y = (Math.random() * height).toFixed(0);
        newPoint._direction = (Math.random() * 360).toFixed(2);
        newPoint._velocity = (Math.random() * (1 - 0.1) + 0.01).toFixed(2);
        newPoint._randomization = (Math.random() * (10 - 0) + 0).toFixed(2);
        aPoints.push(newPoint);
      }
    
      animate();
    }
    
    function animate(){
      for(x=0; x<numPoints; x++){
        aPoints[x]._step(aPoints);
      }
      requestAnimFrame( animate );
      draw();
    }
    
    function draw(){
      ctx.save();
    
      ctx.clearRect(0,0,width,height);
      
      for(x=0; x<numPoints; x++){
        aPoints[x].draw(ctx);
      }
      
      ctx.restore();
    }
    
    init();`
}