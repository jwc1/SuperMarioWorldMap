

let map;
// initMap is now async
async function initMap() {
    // Request libraries when needed, not in the script tag.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    // Short namespaces can be used.
    map = new Map(document.getElementById("map"), {
        center: { lat: 34.66822327029929, lng: 135.43036551221135 },
        zoom: 18,
        mapId: '23590b1347872a11'
    });
    
    const markers = [
        [
            "Yoshi's House",
            34.66794972477843,
            135.43200165965436,
            "/assets/yoshi.png",
            45,
            45
        ],
        [
            "You're here",
            34.66835123903054, 
            135.43060691329785,
            "/assets/here.png",
            45,
            45
        ],
         [
            "Ghost House",
            34.66806374211575, 
            135.4298284169153,
            "/assets/ghost.jpg",
            45,
            45
        ],
         [
            "Castle",
            34.667316844263816, 
            135.43053805182498,
            "/assets/castle.png",
            45,
            45
        ],
         [
            "Warp Pipe",
            34.6680143121481, 
            135.42848464841015,
            "/assets/pipe.png",
            45,
            45
        ],
         [
            "Star World",
            34.66864421396308, 
            135.43171569837276,
            "/assets/star world.jpg",
            45,
            45
        ],
         [
            "Mushroom",
            34.66879201566264, 
            135.42983815213483,
            "/assets/mushroom.svg",
            45,
            45
             
        ],
        [
            "Flower",
            34.66907977037622, 
            135.42896233907842,
            "/assets/flower.jpg",
            45,
            45
             
        ],
    ];
    
    for(let i =0; i<markers.length; i++){
        const currmarker = markers[i];
        
        const marker = new google.maps.Marker({
        position: {lat: currmarker[1], lng: currmarker[2]},
        map: map,
        title: currmarker[0],
        icon: {
            url: currmarker[3],
            scaledSize: new google.maps.Size(currmarker[4], currmarker[5])
        },
        animation: google.maps.Animation.DROP
        });

        const infowindow = new google.maps.InfoWindow({
            content: currmarker[0],
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
} 


initMap();
