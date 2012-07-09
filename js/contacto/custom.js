$(document).ready(function(){
	//pagina 02.html
	$(".fancybox2").fancybox({
		'width'				: '80%',
		'height'			: '80%',
		'autoScale'			: false,
		'type'				: 'iframe',
		helpers: {	                        
                overlay : {
                        speedIn : 500,
                        opacity : 0.2
                }
        }
	});
	
	// pagina map.html
	$('.fancybox').fancybox({       	
		openEffect : 'elastic',
			openSpeed  : 200,

			closeEffect : 'elastic',
			closeSpeed  : 200,
			closeBtn  : false,
        helpers: {	                        
                overlay : {
                        speedIn : 500,
                        opacity : 0.2
                }
        }
	});	
	
});
var map;
        function initialize() {
        	var latlng = new google.maps.LatLng( -12.065071404326462, -77.01436400413513);
            var myOptions = {
              zoom: 8,
              center: latlng,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
           
           map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
           
           google.maps.event.addListener(map, 'zoom_changed', function() {
                setTimeout(moveToDarwin, 100);
            });
            
             
           //marcador
            var images='img/contacto/map-marker.png';
            var marker = new google.maps.Marker({
                position: latlng, 
                map: map,
                icon:images, 
                title:"Gamarra"
            });
    
            google.maps.event.addListener(marker, 'click', function() {
                map.setZoom(17);
            });
            
            //poligono
            var poligono;
            var coords=[
              new google.maps.LatLng( -12.061338904445288, -77.01552540063858),
              new google.maps.LatLng( -12.062666138044566, -77.01533764600754),
              new google.maps.LatLng( -12.064074677187968, -77.01519548892975),
              new google.maps.LatLng( -12.06670550422136, -77.01486825942993),
              new google.maps.LatLng( -12.068365823444994, -77.01461613178253),
              new google.maps.LatLng( -12.071723151579937, -77.01416015625),
              new google.maps.LatLng( -12.072583460143068, -77.01402872800827),
              new google.maps.LatLng( -12.07242084105326, -77.01333940029144),
              new google.maps.LatLng( -12.072266090537418, -77.01288342475891),
              new google.maps.LatLng( -12.071925114509082, -77.01160132884979),
              new google.maps.LatLng( -12.069142209315324, -77.01195672154427),
              new google.maps.LatLng( -12.068087792822825, -77.01212301850319),
              new google.maps.LatLng( -12.067029437768513, -77.01225847005844),
              new google.maps.LatLng( -12.066347471950584, -77.01231881976128),
              new google.maps.LatLng( -12.063786150219375, -77.01271042227745),
              new google.maps.LatLng( -12.062427446320525, -77.01287135481834),
              new google.maps.LatLng( -12.06102283302476, -77.01305106282234),
              new google.maps.LatLng( -12.061153983037004, -77.01395764946938),
              new google.maps.LatLng( -12.061240542009957, -77.01490178704262),
              new google.maps.LatLng( -12.061338904445288, -77.01552540063858)
              
            ];
            poligono = new google.maps.Polygon({
                paths: coords,
                strokeColor: "#FF0000",
                strokeOpacity: 0.2,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.09
            });
            poligono.setMap(map);
            
            //infowindow            
            var informacion='<section id="infowindow">'+
							'<h1>Blaxxer S.A.</h1>'+
							'<div>'+
							'Encuentrenos en Jr. Antonio Bazzo 691 - 306 Gamarra la Victoria.'+			
							'&nbsp;&nbsp;&nbsp;&nbsp;<a class="fancybox" href="img/contacto/gamarra1.jpg" data-fancybox-group="gallery" title="Altura de la cuadra 5 Gamarra">ver mas...</a>'+				
							'</div>'+
							'<figure>'+
							'<div id="marco_infowindow">'+
							'<a class="fancybox" href="img/contacto/gamarra1.jpg" data-fancybox-group="gallery" title="Al frente del Parque Canepa"><img src="img/contacto/encuentranos.jpg" /></a>'+
							'</div>'+
							'</figure>'+
							'</section>';
            var infowindow = new google.maps.InfoWindow({
                content:informacion
            });
            google.maps.event.addListener(marker,'mouseover',function(){
                infowindow.open(map,marker);
            });
            
        }
        function moveToDarwin() {
            var darwin = new google.maps.LatLng( -12.064795993250833,  -77.01470732688904);
            map.setCenter(darwin);
        }