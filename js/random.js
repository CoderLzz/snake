//随机数
(function(win){
    function Random(){};
    Random.prototype.init=function(max,min){
        return parseInt(Math.random()*(max-min)+min)
    }
    win.Random=Random
 }(window));