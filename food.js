//食物
(function(win){
    function Food(width,height,bgColor){
        this.width=width
        this.height=height
        this.bgColor=bgColor
        this.ele=document.getElementById('food')
    }
    Food.prototype.init=function(rd,map){
        this.ele.style.width=this.width+'px'
        this.ele.style.height=this.height+'px'
        this.ele.style.backgroundColor=this.bgColor
        this.ele.style.left=rd.init((map.width)/(this.width),0)*this.width+'px'
        this.ele.style.top=rd.init((map.height)/(this.height),0)*this.height+'px'
    }
    win.Food=Food
 }(window));