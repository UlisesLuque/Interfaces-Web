/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

(function(){
	function cargaContextoCanvas(idCanvas){
			var elemento = document.getElementById(idCanvas);
			if(elemento && elemento.getContext){
				var contexto = elemento.getContext('2d');
			if(contexto){
				return contexto;
			}
		}
	return false;
	}



	$(document).ready(function(){
		contextos = []
		ids = ["barra1", "barra2", "barra3", "barra4", "barra5"];
		for(i=0; i<ids.length; i++){
			contextos.push(cargaContextoCanvas(ids[i]));
		}

		var width = $(".barra").css("width");
		$(".barra").attr("width", width);

		var widthNumeric = width.split("px")[0];


		function dibujarBarra(contexto, width, porcentaje){
			contexto.lineWidth = 5;
			contexto.beginPath();
			contexto.moveTo(0, 2);
			contexto.lineTo(width * porcentaje, 2);
			contexto.strokeStyle = "cyan";
			contexto.stroke();

			contexto.beginPath();
			contexto.moveTo(width * porcentaje, 2);
			contexto.lineTo(width, 2);
			contexto.strokeStyle = "white";
			contexto.stroke();
		}

		dibujarBarra(contextos[0], widthNumeric, 0.7);
		dibujarBarra(contextos[1], widthNumeric, 0.7);
		dibujarBarra(contextos[2], widthNumeric, 0.8);
		dibujarBarra(contextos[3], widthNumeric, 0.8);
		dibujarBarra(contextos[4], widthNumeric, 0.9);
	});
})();





