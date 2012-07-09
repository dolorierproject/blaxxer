	
	jQuery(document).ready(function($) {
		FlowSlider(".flow_slider", {
			animation: "Transition",
			animationOptions: {
				transition: new FlowSlider
					.Transition
						.CubicBezier(0.345, 1.650, 0.535, 0.795)
							.transition
			}
		});
	});

	jQuery(document).ready(function($) {
		FlowSlider(".flow_slider2", {
			animation: "Transition",
			animationOptions: {
				transition: new FlowSlider
					.Transition
						.CubicBezier(0.345, 1.650, 0.535, 0.795)
							.transition
			},
			animationOptions: {snap: true},
			marginStart: 0,
			marginEnd: 0,
			infinite: true,
			position: 0.0,
			controllers: ["Event", "Event"],
			controllerOptions: [
				{
					el: ".btn-right",
					step: 542
				},
				{
					el: ".btn-left",
					step: -542
				}
			]
			
		});
	});

	$(document).ready(function() {
		
		$("#link1").click(function(e){
			ocultar_todo();
			$("#categoria_maxi1").slideDown('slow');
		});
		
		$("#link2").click(function(e){
			ocultar_todo();
			$("#categoria_maxi2").slideDown('slow');
		});
		
		$("#link3").click(function(e){
			ocultar_todo();
			$("#categoria_maxi3").slideDown('slow');
		});
		
		$("#link4").click(function(e){
			ocultar_todo();
			$("#categoria_maxi4").slideDown('slow');
		});
		
		$("#link5").click(function(e){
			ocultar_todo();
			$("#categoria_maxi5").slideDown('slow');
		});
		
		$("#link6").click(function(e){
			ocultar_todo();
			$("#categoria_maxi6").slideDown('slow');
		});
		
		$("#link7").click(function(e){
			ocultar_todo();
			$("#categoria_maxi7").slideDown('slow');
		});
		
		$("#link8").click(function(e){
			ocultar_todo();
			$("#categoria_maxi8").slideDown('slow');
		});
		
		$("#link9").click(function(e){
			ocultar_todo();
			$("#categoria_maxi9").slideDown('slow');
		});
		
		$("#link10").click(function(e){
			ocultar_todo();
			$("#categoria_maxi10").slideDown('slow');
		});
		
		function ocultar_todo(){ 
			$("#categoria_maxi0").fadeOut(0);
			$("#categoria_maxi1").fadeOut(0);
			$("#categoria_maxi2").fadeOut(0);
			$("#categoria_maxi3").fadeOut(0);
			$("#categoria_maxi4").fadeOut(0);
			$("#categoria_maxi5").fadeOut(0);
			$("#categoria_maxi6").fadeOut(0);
			$("#categoria_maxi7").fadeOut(0);
			$("#categoria_maxi8").fadeOut(0);
			$("#categoria_maxi9").fadeOut(0);
			$("#categoria_maxi10").fadeOut(0);
		}
	});
	