	var micolor = "White";
	var escala = 0.5;

window.addEventListener("load", function(){
	var c=document.getElementById("iconologin");
	var cxt=c.getContext("2d");
	cxt.strokeStyle=(micolor);
	cxt.lineWidth = 2;

	cxt.beginPath();
	cxt.moveTo(15,1);
	cxt.lineTo(15,10);
	cxt.stroke();

	cxt.beginPath();
	cxt.arc(escala*30,escala*20,escala*15,Math.PI*1.3,Math.PI*1.7,true);
	cxt.closePath;
	cxt.stroke();
});
	
