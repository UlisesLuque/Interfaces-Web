$(document).ready(function(){
	var flechas = document.getElementsByClassName("flecha");
	var flecha1 = flechas[0];
	var flecha2 = flechas[1];
	var nav = document.getElementById("nav");
	var html = document.getElementsByTagName("html")[0];
	var imagenes = ["img/casasRurales.jpg", "img/gestorTareas.jpg", "img/blog.jpg"];
	var links = ["http://ulisesluque.github.io/Interfaces-Web/practicas/CasasRurales/", "http://ulisesluque.github.io/Interfaces-Web/practicas/GestorTareas/","http://ulisesluque.github.io/Interfaces-Web/practicas/blog/"];
	var titulosSlide = ["Casas rurales", "Gestor de tareas", "Blog"];
	var i = 0;


	$("#contenedor").height($(window).height()- $("#nav").height());
	$("#filtro").height($(window).height()- $("#nav").height());

	$(window).resize(function(){
		$("#contenedor").height($(window).height()- $("#nav").height());
		$("#filtro").height($(window).height()- $("#nav").height());
		$("#tituloSlide").width($("#slide").width());

	});

	$("#aInicio").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: 0}, 500);
	});

	$("#aFormacion").on("click", function(e){
		e.preventDefault();
			$("html, body").animate({scrollTop: $("#formacion").offset().top - ($("#nav").height())}, 500);	
	});

	$("#aContacto").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: $("#contacto").offset().top - $("#nav").height()}, 500);
	});

	$("#portfolio").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: $("#portf").offset().top - $("#nav").height()}, 500);
	});
	

	$(window).on("scroll", function(){
		if($(window).scrollTop() < 100){
			$('#filtro video')[0].play();
		} else{
			$('#filtro video')[0].pause();
		}
	});

	$("#tituloSlide").width($("#slide").width());

	$(flecha1).on("click", function(event){
		event.preventDefault();
		event.stopPropagation();
		if(i>0)
			i--;
		else
			i=imagenes.length-1;
		$("#slide").animate({opacity: 0}, function(){
			$("#slide").css("background", "url('"+imagenes[i]+"')");
			$("#slide").css("background-size", "cover");
			$("#slide").css("background-position", "center");
			$("#linkSlide").attr("href", links[i]);
			$("#tituloSlide span").html(titulosSlide[i]);
			$("#slide").animate({opacity: 1});
		});

	});

	$(flecha2).on("click", function(event){
		event.preventDefault();
		event.stopPropagation();
		if(i<imagenes.length-1)
			i++;
		else
			i = 0;
		$("#slide").animate({opacity: 0}, function(){
			$("#slide").css("background", "url('"+imagenes[i]+"')");
			$("#slide").css("background-size", "cover");
			$("#slide").css("background-position", "center");
			$("#linkSlide").attr("href", links[i]);
			$("#tituloSlide span").html(titulosSlide[i]);
			$("#slide").animate({opacity: 1});
		});


	});

	$(window).on("scroll", function(){
		scroll = $("html").scrollTop();
		if(scroll  < $(window).height() - $("nav").outerHeight()){
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