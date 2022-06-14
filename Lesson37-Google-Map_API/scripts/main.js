// API KEY --> AIzaSyDNsSFGxw-9GC49fm4-MIsM2mGLJ3146rk
// GOOGLE MAP - CALLED IN MAP URL
function initMap() {
  let map;
  
  // load and create map
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(52.22547475432068, 22.276943619862553),
    zoom: 4,
    mapTypeId: "satellite",    
  });
  
  // images array
  const image = [
    {
    name:'Mirinka Kotze',
    url: "https://ca.slack-edge.com/T02HPNVTZ7T-U02HD4W7YER-fcaef182ddba-512",
    scaledSize: new google.maps.Size(60, 70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    },
    {
    name:'Haleema Sameena',
    url: "https://ca.slack-edge.com/T02HPNVTZ7T-U02HD4WFY93-422466d781fd-512",
    scaledSize: new google.maps.Size(60, 70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    },
    {
    name:'Mall Haas',
    url: "https://ca.slack-edge.com/T02HPNVTZ7T-U02HC0CF2MQ-0c102288600a-512",
    scaledSize: new google.maps.Size(60, 70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    },
  {
    name:'Raluca Băceanu',
    url: "https://ca.slack-edge.com/T02HPNVTZ7T-U02J5PYNBCY-23ee1ef91eab-512",
    scaledSize: new google.maps.Size(60, 70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    },
    {
    name:'Hassen Ahmed',
    url: "https://ca.slack-edge.com/T02HPNVTZ7T-U02JB1AU048-23532f5da343-512",
    scaledSize: new google.maps.Size(60, 70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    },
    {
    name:'Muzaffer Rende',
    url: "https://ca.slack-edge.com/T02HPNVTZ7T-U02HE63D5L4-b188de104d05-512",
    scaledSize: new google.maps.Size(60, 70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    },
  {
    name:'Alex Ordynski',
    url: "https://ca.slack-edge.com/T02HPNVTZ7T-U02H4DREHTQ-4733ae7e88ac-512",
    scaledSize: new google.maps.Size(60, 70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    },
]
  // coordinates array
  const features = [
    {
      name: 'Mirinka Kotze',
      position: new google.maps.LatLng(59.36637129990946, 17.99704471833556),      
    },    
    {
      name: 'Haleema Sameena',
      position: new google.maps.LatLng(59.22079022762899, 17.937983317114234),      
    },   
    {
      name: 'Mall Haas',
      position: new google.maps.LatLng(59.431285281804556, 24.769260091156706),      
    },    
    {
      name: 'Raluca Băceanu',
      position: new google.maps.LatLng(44.423334155322735, 26.012878918115014),      
    },  
    {
      name: 'Hassen Ahmed',
      position: new google.maps.LatLng(59.236069446273255, 17.839677400309043),      
    },    
    {
      name: 'Muzaffer Rende',
      position: new google.maps.LatLng(52.19343273416053, 20.899325058038187),      
    },  
    {
      name: 'Alex Ordynski',
      position: new google.maps.LatLng(49.23052066839969, 28.467679689472735),      
    }, 
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      title: features[i].name,
      icon: image[i],
      map: map,
    });
  }
}
