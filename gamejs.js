var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext('2d');
var raf;
var m;
var n;
var ux;
var uy;
var u;
var v;
var str = {
  cx: 240,
  cy: 540,
  cvx: 0,
  cvy: 0,
  cr: 18,
  color: 'green',
  mass: 8,
  draw: function() {
    ctx2.beginPath();
    ctx2.arc(this.cx, this.cy, this.cr, 0, Math.PI * 2, true);
    ctx2.closePath();
    ctx2.fillStyle = this.color;
    ctx2.fill();
  }
};
function drawcookies(r) {
	ctx2.beginPath();
    ctx2.arc(cookies[r].cx, cookies[r].cy,15, 0, Math.PI * 2, true);
    ctx2.closePath();
    ctx2.fillStyle = cookies[r].color;
    ctx2.fill();
}
// cookies
var p = 325;
var q = 325;
var radia = Math.PI/6;
var radian = Math.PI/3;
var cookies = 		[{cx:325,cy:325,cr:15,cvx:0,cvy:0,color: "#ff0066",mass:5},
		   		{cx:30*Math.cos(radian)+p,cy:30*Math.sin(radian)+q,cr:15,cvx:0,cvy:0,color:"#1a1a1a",mass:5,cu:0,cux:0,cuy:0,cv:0},
		   		{cx:30*Math.cos(2*radian)+p,cy:30*Math.sin(2*radian)+q,cr:15,cvx:0,cvy:0,color:"#ffff66",mass:5,cu:0,cux:0,cuy:0,cv:0},
		   		{cx:30*Math.cos(0*radian)+p,cy:30*Math.sin(0*radian)+q,cr:15,cvx:0,cvy:0,color:"#ffff66",mass:5,cu:0,cux:0,cuy:0,cv:0},
		   		{cx:30*Math.cos(-radian)+p,cy:30*Math.sin(-radian)+q,cr:15,cvx:0,cvy:0,color:"#1a1a1a",mass:5,cu:0,cux:0,cuy:0,cv:0},
		   		{cx:30*Math.cos(Math.PI)+p,cy:30*Math.sin(Math.PI)+q,cr:15,cvx:0,cvy:0,color:"#1a1a1a",mass:5,cu:0,cux:0,cuy:0,cv:0},
		   		{cx:30*Math.cos(4*radian)+p,cy:30*Math.sin(4*radian)+q,cr:15,cvx:0,cvy:0,color:"#ffff66",mass:5,cu:0,cux:0,cuy:0,cv:0},
		   		{cx:60*Math.cos(0*radia)+p,cy:60*Math.sin(0*radia)+q,cr:15,cvx:0,cvy:0,color:"#ffff66",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:52*Math.cos(1*radia)+p,cy:52*Math.sin(1*radia)+q,cr:15,cvx:0,cvy:0,color:"#1a1a1a",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:60*Math.cos(2*radia)+p,cy:60*Math.sin(2*radia)+q,cr:15,cvx:0,cvy:0,color:"#ffff66",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:52*Math.cos(3*radia)+p,cy:52*Math.sin(3*radia)+q,cr:15,cvx:0,cvy:0,color:"#1a1a1a",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:60*Math.cos(4*radia)+p,cy:60*Math.sin(4*radia)+q,cr:15,cvx:0,cvy:0,color:"#ffff66",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:52*Math.cos(5*radia)+p,cy:52*Math.sin(5*radia)+q,cr:15,cvx:0,cvy:0,color:"#1a1a1a",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:60*Math.cos(6*radia)+p,cy:60*Math.sin(6*radia)+q,cr:15,cvx:0,cvy:0,color:"#ffff66",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:52*Math.cos(7*radia)+p,cy:52*Math.sin(7*radia)+q,cr:15,cvx:0,cvy:0,color:"#1a1a1a",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:60*Math.cos(8*radia)+p,cy:60*Math.sin(8*radia)+q,cr:15,cvx:0,cvy:0,color:"#ffff66",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:52*Math.cos(9*radia)+p,cy:52*Math.sin(9*radia)+q,cr:15,cvx:0,cvy:0,color:"#1a1a1a",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:60*Math.cos(10*radia)+p,cy:60*Math.sin(10*radia)+q,cr:15,cvx:0,cvy:0,color:"#ffff66",mass:5,cu:0,cux:0,cuy:0,cv:0},
				{cx:52*Math.cos(11*radia)+p,cy:52*Math.sin(11*radia)+q,cr:15,cvx:0,cvy:0,color:"#1a1a1a",mass:5,cu:0,cux:0,cuy:0,cv:0}];
function draw() {
  ctx2.clearRect(0,0, 900, 650);
  str.draw();
  ux = str.cvx;
  uy = str.cvy;
  u = Math.sqrt(Math.pow(ux,2) + Math.pow(uy,2));
	    if (u>=0.15) {
	    	v = u - 0.15;
	    	str.cvx = v*ux/u;
	    	str.cvy = v*uy/u;
	    } else {
	    	str.cvx = 0;
		    str.cvy = 0; 
	    }
str.cx += str.cvx;
str.cy += str.cvy;
	if (str.cy + str.cvy > 610 || str.cy + str.cvy < 40) {
	str.cvy = -str.cvy;
	}
	if (str.cx + str.cvx > 610 || str.cx + str.cvx < 40) {
	str.cvx = -str.cvx;
	}
	collison();
for(i=0 ;i< 19 ;i++)
{
	
cookies[i].cux = cookies[i].cvx;
cookies[i].cuy = cookies[i].cvy;
//console.log(cookies[i].cux + cookies[i].cuy);
  cookies[i].cu = Math.sqrt(Math.pow(cookies[i].cux,2) + Math.pow(cookies[i].cuy,2));
	    if (cookies[i].cu>=0.15) {
	    	console.log("hd");
	    	cookies[i].cv = cookies[i].cu - 0.15;
	    	cookies[i].cvx = cookies[i].cv*cookies[i].cux/cookies[i].cu;
	    	cookies[i].cvy = cookies[i].cv*cookies[i].cuy/cookies[i].cu;
	    } else {
	    	cookies[i].cvy = 0;
		    cookies[i].cvx = 0; 
	    }
cookies[i].cx += cookies[i].cvx;
cookies[i].cy += cookies[i].cvy;
	if (cookies[i].cy + cookies[i].cvy > 610 || cookies[i].cy + cookies[i].cvy < 40) {
	cookies[i].cvy = -cookies[i].cvy;
	}
	if (cookies[i].cx + cookies[i].cvx > 610 || cookies[i].cx + cookies[i].cvx < 40) {
	cookies[i].cvx = -cookies[i].cvx;
	}
	drawcookies(i);
	 //raf = window.requestAnimationFrame(draw);
}
  raf = window.requestAnimationFrame(draw);
}



function collison()
{
    for (var i = 0; i<19; i++) {
	    	if (hitTestCircle(str,cookies[i])) {
                collideBalls(str,cookies[i]);
	  	    }
	    }

    for (var i = 0; i < 19; i++) {
        c1 = cookies[i];
        for (var j = i+1; j < 19; j++) {
  	        c2 = cookies[j];
            if (hitTestCircle(c1,c2)) {
                collideBalls(c1,c2);
	  	    }
        }
    }


}

function hitTestCircle(cookie1,cookie2) {
   var retval = false;
   var dx = cookie1.cx - cookie2.cx;
   var dy = cookie1.cy - cookie2.cy;
   var distance = Math.sqrt(dx * dx + dy * dy);
   if (distance <= (cookie1.cr + cookie2.cr) ) {
      	retval = true;
   }
   return retval;
}

function collideBalls(cookie1,cookie2){
	var dx = cookie1.cx - cookie2.cx;
   	var dy = cookie1.cy - cookie2.cy;
   	var collisionAngle = Math.atan2(dy, dx);
   	console.log(collisionAngle);
   	var speed1 = Math.sqrt(cookie1.cvx * cookie1.cvx + cookie1.cvy * cookie1.cvy);
	var speed2 = Math.sqrt(cookie2.cvx * cookie2.cvx + cookie2.cvy * cookie2.cvy);

	var direction1 = Math.atan2(cookie1.cvy, cookie1.cvx);
	var direction2 = Math.atan2(cookie2.cvy, cookie2.cvx);

	var speedX1 = speed1 * Math.cos(direction1 - collisionAngle);
	var speedY1 = speed1 * Math.sin(direction1 - collisionAngle);
	var speedX2 = speed2 * Math.cos(direction2 - collisionAngle);
	var speedY2 = speed2 * Math.sin(direction2 - collisionAngle);

	var final_speedX1 = ((cookie1.mass - cookie2.mass) * speedX1 + (cookie2.mass + cookie2.mass) * speedX2)/(cookie1.mass + cookie2.mass);
	var final_speedX2 = ((cookie1.mass + cookie1.mass) * speedX1 + (cookie2.mass - cookie1.mass) * speedX2)/(cookie1.mass + cookie2.mass);

	var final_speedY1 = speedY1;
	var final_speedY2 = speedY2;
	//alert("ds");
	cookie1.cvx = Math.cos(collisionAngle) * final_speedX1 + Math.cos(collisionAngle + Math.PI/2) * final_speedY1;
	cookie1.cvy = Math.sin(collisionAngle) * final_speedX1 + Math.sin(collisionAngle + Math.PI/2) * final_speedY1;
	cookie2.cvx = Math.cos(collisionAngle) * final_speedX2 + Math.cos(collisionAngle + Math.PI/2) * final_speedY2;
	cookie2.cvy = Math.sin(collisionAngle) * final_speedX2 + Math.sin(collisionAngle + Math.PI/2) * final_speedY2;
	//alert(cookie1.cvx)
}

canvas2.addEventListener('click', function(e) {
	m = e.clientX - 350;
	n = e.clientY;
	//m -= 350;
	ux = -m + str.cx;
	uy = -n + str.cy;
	str.cvx = ux*0.3;
	str.cvy = uy*0.3;
  	raf = window.requestAnimationFrame(draw);
});

canvas2.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

str.draw();

//var i;
for(var i=0 ;i< 19 ;i++)
{
			ctx2.beginPath();
			ctx2.arc(cookies[i].cx,cookies[i].cy,cookies[i].cr,0*Math.PI,2*Math.PI);
			ctx2.fillStyle = cookies[i].color;
			ctx2.fill();
			ctx2.stroke();
}