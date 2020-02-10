//贪吃蛇
/**
 * 1.如何创建小蛇，使用动态方式创建小蛇
 * 2.小蛇如何动，第二段到头的位置，第三段到第二段的位置，头往前走一位
 * 3.小蛇如何改变方向，使用e.keyCode获取键盘左上右下的值
 * 4.小蛇如何增长，当小蛇的头到达食物的坐标时，得到小蛇的最后一段，然后创建一个新的对象，复制进去，再往body数组push
 */
(function(win){
    function Snake(width,height,dire,sudu){
        this.width=width
        this.height=height
        this.dire=dire
        this.sudu=sudu
        this.body=[
            {x:3,y:1,color:'red'},
            {x:2,y:1,color:'yellow'},
            {x:1,y:1,color:'yellow'}
        ]
    }
    Snake.prototype.init=function(map){
        map.ele.removeChild(map.ele.lastElementChild)
        var snakeBody=document.createElement('div')
        for(var i=0;i<this.body.length;i++){
            var div=document.createElement('div')
            div.style.width=this.width+'px'
            div.style.height=this.height+'px'
            div.style.position='absolute'
            div.style.left=(this.body[i].x)*(this.width)+'px'
            div.style.top=(this.body[i].y)*(this.height)+'px'
            div.style.backgroundColor=this.body[i].color
            // div.style.backgroundImage='url("images/long.png")'
            snakeBody.appendChild(div)
        }
        map.ele.appendChild(snakeBody)
    }
    Snake.prototype.move=function(map,food,rd){

        window.timeId=setInterval(function(){
            var i=this.body.length-1
            if(this.dire=='right'){
                for(;i>0;i--){
                    this.body[i].x=this.body[i-1].x
                    this.body[i].y=this.body[i-1].y
                }
                this.body[0].x=this.body[0].x+1
                var x=(food.ele.offsetLeft)/(food.width)
                var y=(food.ele.offsetTop)/(food.height)
                if(this.body[0].x==x&&this.body[0].y==y){
                    var obj=this.body[this.body.length-1]
                    this.body.push({
                        x:obj.x,
                        y:obj.y,
                        color:obj.color
                    })
                    food.init(rd,map)
                }
                this.init(map)
            }else if(this.dire=='left'){
                for(;i>0;i--){
                    this.body[i].x=this.body[i-1].x
                    this.body[i].y=this.body[i-1].y
                }
                this.body[0].x=this.body[0].x-1
                var x=food.ele.offsetLeft/food.width
                var y=food.ele.offsetTop/food.height
                if(this.body[0].x==x&&this.body[0].y==y){
                    var obj=this.body[this.body.length-1]
                    this.body.push({
                        x:obj.x,
                        y:obj.y,
                        color:obj.color
                    })
                    food.init(rd,map)
                }
                this.init(map)
            }else if(this.dire=='up'){
                for(;i>0;i--){
                    this.body[i].x=this.body[i-1].x
                    this.body[i].y=this.body[i-1].y
                }
                this.body[0].y=this.body[0].y-1
                var x=food.ele.offsetLeft/food.width
                var y=food.ele.offsetTop/food.height
                if(this.body[0].x==x&&this.body[0].y==y){
                    var obj=this.body[this.body.length-1]
                    this.body.push({
                        x:obj.x,
                        y:obj.y,
                        color:obj.color
                    })
                    food.init(rd,map)
                }
                this.init(map)
            }else{
                for(;i>0;i--){
                    this.body[i].x=this.body[i-1].x
                    this.body[i].y=this.body[i-1].y
                }
                this.body[0].y=this.body[0].y+1
                var x=food.ele.offsetLeft/food.width
                var y=food.ele.offsetTop/food.height
                if(this.body[0].x==x&&this.body[0].y==y){
                    var obj=this.body[this.body.length-1]
                    this.body.push({
                        x:obj.x,
                        y:obj.y,
                        color:obj.color
                    })
                    food.init(rd,map)
                }
                this.init(map)
            }
            if(this.body[0].x<0||this.body[0].y<0){
                clearInterval(window.timeId)
                alert('游戏结束')
            }
            if(this.body[0].x>=(map.width)/(this.width)||this.body[0].y>=(map.height)/(this.height)){
                clearInterval(window.timeId)
                alert('游戏结束')
            }
        }.bind(this),this.sudu)
        document.onkeyup=function(e){
            switch(e.keyCode){
                case 37:
                    this.dire='left'
                    break;
                case 38:
                    this.dire='up'
                    break;
                case 39:
                    this.dire='right'
                    break;
                case 40:
                    this.dire='down'
                    break
            }
        }.bind(this)
    }
    Snake.prototype.stop=function(){
        clearInterval(window.timeId)
    }   
    win.Snake=Snake
 }(window));