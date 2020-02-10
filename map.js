(function(win){
    function Map(width,height,bgColor){
        this.width=width
        this.height=height
        this.bgColor=bgColor
        this.ele=document.getElementById('map')
    }
    Map.prototype.init=function(){
        this.ele.style.width=this.width+'px'
        this.ele.style.height=this.height+'px'
        this.ele.style.backgroundColor=this.bgColor
    }
    win.Map=Map
 }(window));