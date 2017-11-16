var Main = {};

Main.Canvas = document.getElementById("canvas");
Main.Context = Main.Canvas.getContext('2d');
Main.frameNo = 0;
Main.obstacle = [];

function startGame() {
    Main.gamePiece = new component(90, 20, "black", 10, 220);
    Main.interval = setInterval(updateGameArea, 15);
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    
    this.update = function (){
        ctx = Main.Context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
    }

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    }

}

function updateGameArea() {
    var a, minWidth, maxWidth, xPosition;

    for (i = 0; i < Main.obstacle.length; i += 1) {
        if (Main.gamePiece.crashWith(Main.obstacle[i])) {
            Main.obstacle[i] = new component(20, 20, "red", a - xPosition, 0)
            Main.obstacle[i].gra
            
        }     
    }
    
    Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);
    Main.frameNo += 1;
    
    if (Main.frameNo == 1 || everyinterval(55)) {
        a = Main.Canvas.width;
        minWidth = 10;
        maxWidth = 300;
        xPosition = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
        Main.obstacle.push(new component(20, 20, "red", a - xPosition, 0));
    }    

    for (i = 0; i < Main.obstacle.length; i += 1) {
        Main.obstacle[i].y += 1;
        Main.obstacle[i].update();
          
        if (Main.obstacle[i].y > 280) {
            Main.obstacle[i].y = 280;
            Main.Context.font = "25px Arial";
            Main.Context.textAlign ="center";
            Main.Context.fillText("Game Over", Main.Canvas.width/2, Main.Canvas.height/2);
            clearInterval(Main.interval);
        }
        
    }
   
    Main.gamePiece.newPos();
    Main.gamePiece.update();
    
    if (Main.gamePiece.x < 0) {
        Main.gamePiece.x = 0;
    }

    if (Main.gamePiece.x > 260) {
        Main.gamePiece.x = 260;
    }
   
}

function move() {
    $("#left").mouseenter(function(){
        Main.gamePiece.speedX = -2.75;
    });

    $("#left").mouseleave(function(){
        Main.gamePiece.speedX = 0;
    });
    
    $("#right").mouseenter(function(){
        Main.gamePiece.speedX = 2.75;
    });
    
    $("#right").mouseleave(function(){
        Main.gamePiece.speedX = 0;
    });
}

function everyinterval(n) {
    if ((Main.frameNo / n) % 1 == 0) {return true;}
    return false;
}


$(document).ready(function(){
    startGame();
    move();
});