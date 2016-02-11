$(document).ready(function(){
	var flechas = document.getElementsByClassName("flecha");
	var flecha1 = flechas[0];
	var flecha2 = flechas[1];
	var nav = document.getElementById("nav");
	var html = document.getElementsByTagName("html")[0];
	var imagenes = ["img/casasRurales.jpg", "img/gestorTareas.jpg", "img/blog.jpg"];
	var links = ["http://ulisesluque.github.io/Interfaces-Web/practicas/CasasRurales/","http://ulisesluque.github.io/Interfaces-Web/practicas/blog/"];
	var titulosSlide = ["Casas rurales", "Gestor de tareas", "Blog"];
	var i = 0;


	$("#contenedor").height($(window).height()- $("#nav").height());

	if($(window).width() > 768) 
		$("#filtro").height($(window).height()- $("#nav").height());
	else
		$("#filtro").height($(window).height());

	$(window).resize(function(){
		$("#filtro").css({
			"background": "no-repeat url('img/Undo.jpg')",
			"background-size": "cover",
			"background-position": "center"

		})
		$('#filtro video').css("display", "none");
	});
	

	$(window).on("scroll", function(){
		if($(window).scrollTop() < 100){
			$('#filtro video')[0].play();
		} else{
			$('#filtro video')[0].pause();
		}
	});

	$(flecha1).on("click", function(event){
		event.preventDefault();
		event.stopPropagation();
		if(i>0)
			i--;
		else
			i=imagenes.length-1;
		$("#slide").css("background", "url('"+imagenes[i]+"')");
		$("#slide").css("background-size", "cover");
		$("#slide").css("background-position", "center");
		$("#linkSlide").attr("href", links[i]);
		$("#tituloSlide").html(titulosSlide[i]);
	});

	$(flecha2).on("click", function(event){
		event.preventDefault();
		event.stopPropagation();
		if(i<imagenes.length-1)
			i++;
		else
			i = 0;
		$("#slide").css("background", "url('"+imagenes[i]+"')");
		$("#slide").css("background-size", "cover");
		$("#slide").css("background-position", "center");
		$("#linkSlide").attr("href", links[i]);
		$("#tituloSlide").html(titulosSlide[i]);
	});

	$(window).on("scroll", function(){
		scroll = html.scrollTop;
		if(scroll  < $(window).height() - nav.offsetHeight){
			$("#nav").css("position", "relative");
			$("#nav").css("top", "0");
			$("#nav").css("margin", "0 0 0 0")
		} else {
			$("#nav").css("position", "fixed");
			$("#nav").css("top", "0");
			$("#nav").css("margin", "0")
		}
	});



})