


window.print = (restaurantsArr) => {

  restaurantsArr.forEach(restaurant => {
  const card = `<div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>`         
    console.log(restaurant);
  });
  
};


































// var message = document.getElementById("message");
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(initAutocomplete);
//     } else {
//         message.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// //iniciando la funcion del callback de la url
// function initAutocomplete(position) {
//     const mapElement = document.getElementById('map')
//     const objMap = {
//     center: {lat: position.coords.latitude, lng: position.coords.longitude},
//     zoom: 13,
//     mapTypeId: 'roadmap'
// }
//     var map = new google.maps.Map(mapElement, objMap);

//     // Crea el cuadro de búsqueda y vincúlalo al elemento UI.
//     var input = document.getElementById('pac-input');
//     var searchBox = new google.maps.places.SearchBox(input);
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//     // Parcializa los resultados de SearchBox hacia la vista del mapa actual.
//     map.addListener('bounds_changed', function() {
//       searchBox.setBounds(map.getBounds());
//     });

//     var markers = [];
// // Escucha el evento disparado cuando el usuario selecciona una predicción y recupera
//     // más detalles para ese lugar
//     searchBox.addListener('places_changed', function() {
//       var places = searchBox.getPlaces();

//       if (places.length == 0) {
//         return;
//       }

     
// // Borrar los marcadores anteriores.
//       markers.forEach(function(marker) {
//         marker.setMap(null);
//       });
//       markers = [];


// // Para cada lugar, obtenga el icono, el nombre y la ubicación.
//       var bounds = new google.maps.LatLngBounds();
//       places.forEach(function(place) {
//         if (!place.geometry) {
//           console.log("Returned place contains no geometry");
//           return;
//         }
//         var icon = {
//           url: place.icon,
//           size: new google.maps.Size(71, 71),
//           origin: new google.maps.Point(0, 0),
//           anchor: new google.maps.Point(17, 34),
//           scaledSize: new google.maps.Size(25, 25)
//         };

        
        

        
//         // Crea un marcador para cada lugar.
//         markers.push(new google.maps.Marker({
//           map: map,
//           icon: icon,
//           title: place.name,
//           position: place.geometry.location
//         }));

//         if (place.geometry.viewport) {
//           // Solo los geocódigos tienen una ventana gráfica.
//           bounds.union(place.geometry.viewport);
//         } else {
//           bounds.extend(place.geometry.location);
//         }
//       });
//       map.fitBounds(bounds);
//     });
//   }

//   var cardsInfo = (place) => {
   
//     places.forEach(function(place) {
//       ;
//     });
   
// }
  