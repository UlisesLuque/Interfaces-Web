window.addEventListener("load", function(){
	var menu = document.getElementById("menu");
	var nav = document.getElementById("left");
	var main = document.getElementsByTagName("main");

	var aside = document.getElementsByTagName("aside");
	var section = aside[0].getElementsByTagName("section")[0];
	var articulos = document.getElementById("tareas").childNodes;

	var eNuevaTarea = document.getElementById("nuevaTarea");

	var eFor = document.getElementsByTagName("form")[0];

	eNuevaTarea.addEventListener("click", function(){
		if(eFor.style.display=="none"){
			eFor.style.display="block";
			nav.style.width = "40%";
		} else {
			eFor.style.display="none";
			
		}
	})

	for (var i = articulos.length - 1; i >= 0; i--) {
		articulos[i].addEventListener("click", function(){
			for (var j = 1; j < articulos.length; j+=2){
				articulos[j].getElementsByTagName("h1")[0].style.background = "#2196f3";
				articulos[j].getElementsByTagName("h1")[0].style.color = "white";
				articulos[j].getElementsByTagName("h1")[0].style.borderBottom= "none";
			}
			this.getElementsByTagName("h1")[0].style.borderBottom= "solid 1px #424242";
			this.getElementsByTagName("h1")[0].style.background = "white";
			this.getElementsByTagName("h1")[0].style.color = "#2196f3";
			var nodo = this.cloneNode(true);
			section.removeChild(section.getElementsByTagName("article")[0]); 
			section.appendChild(nodo);
		});
	}



	menu.addEventListener("click", function(){
		if(nav.style.display=="none"){
			main[0].style.paddingLeft = "17em";
			main[0].style.paddingRight += "26em";
			nav.style.display="block";
		}
		else{
			main[0].style.paddingLeft = "2em";
			nav.style.display="none";
		}

	});
})


