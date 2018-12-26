// Creating variables
var hero={x:375,y:250,live:50},updates=0,dx,dy,brc=1;
class Zombie{
    constructor(){
        this.x = Math.random()*8000;
        this.y = Math.random()*6000;
        this.sx = 50+Math.random()*50;
        this.sy = 50+Math.random()*50;
        this.live = this.sx * this.sy / 100;
        this.dx = 0;
        this.dy = 0;
    }
    move(){
 if (this.live > 0){
        if (this.dx > 3) this.dx = 3;
        if (this.dx < -3) this.dx = -3;
        if (this.dy > 3) this.dy = 3;
        if (this.dy < -3) this.dy = -3;
        this.x += this.dx;
        this.y += this.dy;
 }
    }
    draw(){
        drawImage(zombie, this.x, this.y, this.sx, this.sy);
               context.fillStyle="red";
        if (this.live > 0){
        context.fillRect(this.x-this.live/2+this.sx/2, this.y-20, this.live, 10);
    }
    }
}
class Bullet{
    constructor(x_, y_, sx_, sy_){
        this.x = x_;
        this.y = y_;
        this.sx = sx_;
        this.sy = sy_;

    }
    
    draw(){
   drawImage(bullet,this.x, this.y, 10, 10,);
    }
}
bullet=[];
for (let i=0;i<1000;++i){
    bullet[i] = new Bullet();
}
   var enemy = [];
for (let i=0; i<5; ++i){
    enemy[i] = new Zombie();
}
function update() { 
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
     if (hero.live > 0){
    if(isKeyPressed[87]){
            hero.y-=5;
    }
        if(isKeyPressed[83]){
            hero.y+=5;
    }
        if(isKeyPressed[65]){
            hero.x-=5;
    }
        if(isKeyPressed[68]){
            hero.x+=5;
    }
     }
    ++updates;
    
    for (let i=0; i<5; ++i){
             if (enemy[i].live > 0){
    enemy[i].move();
    }
    }
    for (let i=0; i<5; ++i){
                       if (enemy[i].live > 0){
        if(enemy[i].x>=800){
            enemy[i].x=-50;
                enemy[i].dx += Math.random()*0.4 - 0.2;
        enemy[i].dy += Math.random()*0.4 - 0.2;    
        }
          if(enemy[i].x<=-50){
            enemy[i].x=800;
                      enemy[i].dx += Math.random()*0.4 - 0.2;
        enemy[i].dy += Math.random()*0.4 - 0.2;
        }
          if(enemy[i].y>=600){
            enemy[i].y=-50;
                      enemy[i].dx += Math.random()*0.4 - 0.2;
        enemy[i].dy += Math.random()*0.4 - 0.2;
        }
          if(enemy[i].y<=-50){
            enemy[i].y=600;
                      enemy[i].dx += Math.random()*0.4 - 0.2;
        enemy[i].dy += Math.random()*0.4 - 0.2;
        }
}
    }
        for (let i=0; i<5; ++i){
    if(updates%50==0){
                enemy[i].dx += Math.random()*2 - 1;
       enemy[i].dy += Math.random()*2 - 1;
    }
        }
            if(hero.x>=750){
            hero.x-=5;
        }
          if(hero.x<=0){
            hero.x+=5;
        }
          if(hero.y>=550){
            hero.y-=5;
        }
          if(hero.y<=0){
            hero.y+=5;
        }
     for (let i=0; i<5; ++i){
      if(hero.x>enemy[i].x){
          ++enemy[i].x;
      }   
        if(hero.y>enemy[i].y){
          ++enemy[i].y;
      }    
        if(hero.x<enemy[i].x){
          --enemy[i].x;
      }    
       if(hero.y<enemy[i].y){
          --enemy[i].y;
      }        
     }

    bullet[i=1].x+=dx;
   bullet[i=1].y+=dy;
    for (let i=0;i<bullet.length;++i){
if(bullet[i].x<=0 || bullet[i].x>=800 || bullet[i].y<=0 || bullet[i].y>=600){
    brc=1;
}
}
    
     for (let i=0; i<5; ++i){
          if (hero.live > 0){
                 if (enemy[i].live > 0){
    if(areColliding(hero.x,hero.y,40,50,enemy[i].x,enemy[i].y,enemy[i].sx,enemy[i].sy)){
        --hero.live;
    }
  
           if(areColliding(bullet.x,bullet.y,10,10,enemy[i].x,enemy[i].y,enemy[i].sx,enemy[i].sy)){
        --enemy[i].live;

        }
        }
}
     }


}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    drawImage(backIndustry,0, 0, 800, 600);
             if (hero.live > 0){
       drawImage(heroStand,hero.x,hero.y,40,50);
         }
         if (hero.live > 0){
    context.fillRect(hero.x,hero.y-20,hero.live,10);
         }
    for (let i=0; i<5; ++i){
             if (enemy[i].live > 0){
      enemy[i].draw();
             }
    }
    for (let i=0; i<bullet.length; ++i){
     bullet[i].draw();
             }

             if(enemy[i=0].live<=0 && enemy[i=1].live<=0 && enemy[i=2].live<=0 && enemy[i=3].live<=0 && enemy[i=4].live<=0){
                         context.font="120px Times New Roman";
            context.fillText("!You Win!",100,300);
         }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    for(i=0;i<bullet.lenght;++i){
  if (hero.live > 0){
  prb=1;
    if (brc==1){
        bullet[i].x=hero.x+10;
       bullet[i].y=hero.y+10;
    }
    if(brc==1 ){
  dx=(mouseX-hero.x)/50;
dy=(mouseY-hero.y)/50;    
          brc--;
          gg=0;
        prb=0;
    }
  }
        }
};