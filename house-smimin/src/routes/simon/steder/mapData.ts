export interface MarkerData {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  type: 'house' | 'education';
  infoContent: string;
}

// Info window styles
export const infoWindowStyles = `
  <style>
    .info-container {
      font-size: 16px;
      padding: 0;
      margin: 0;
    }
    .info-title {
      font-weight: bold;
      font-size: 18px;
      margin: 0;
    }
    .info-text {
      font-size: 16px;
      margin: 0;
    }
  </style>
`;

export const mapMarkers: MarkerData[] = [
  // House markers
  {
    id: 'ishavsvej',
    position: { lat: 57.466358598436514, lng: 9.803489716697532 },
    title: 'ishavsvej',
    type: 'house',
    infoContent: `${infoWindowStyles}<div class="info-container"><h1 class="info-title">Ishavsvej 4</h1><h3 class="info-text">Født og opvokset i udkanten</h3><p>1998-2007</p></div>`
  },
  {
    id: 'kaerparken',
    position: { lat: 57.45280311473584, lng: 9.989951748854576 },
    title: 'kærparken',
    type: 'house',
    infoContent: `${infoWindowStyles}<div class="info-container"><h1 class="info-title">Kærparken 9</h1><h3 class="info-text">Det mindste værelse</h3><p>Det hyggeligste hjem</p><p>~2007-2019</p></div>`
  },
  {
    id: 'scoresbysundvej',
    position: { lat: 57.01925947426525, lng: 9.950380324970169 },
    title: 'scoresbysundvej',
    type: 'house',
    infoContent: `${infoWindowStyles}<div class="info-container"><h3 class="info-title">Scoresbysundvej 8, 1. 9</h3><p class="info-text">1-Værelses studiebolig</p><p class="info-text">~2019-2024</p></div>`
  },
  {
    id: 'bredhoj',
    position: { lat: 56.19109362885152, lng: 9.55286008042207 },
    title: 'bredhøj',
    type: 'house',
    infoContent: `${infoWindowStyles}<div class="info-container"><h3 class="info-title">Bredhøj 6 2. mf</h3><p class="info-text">101 kvm voksenfri* gamerhule</p><p class="info-text">2024-Nu</p></div>`
  },
  {
    id: 'airbnb',
    position: { lat: 56.17505710634319, lng: 9.77194150093056 },
    title: 'Airbnb',
    type: 'house',
    infoContent: `${infoWindowStyles}<div class="info-container"><h3 class="info-title">Airbnb</h3><p class="info-text">3 måneder under prøveperiode som midtjyde tilflytter</p></div>`
  },
  // Education markers
  {
    id: 'skallerupSkole',
    position: { lat: 57.46075238734557, lng: 9.869798523024473 },
    title: 'skallerup skole',
    type: 'education',
    infoContent: `${infoWindowStyles}<div class="info-container"><h3 class="info-title">Skallerup Skole</h3><p class="info-text">Folkeskole 0-3. klasse</p><p class="info-text">Uanede mængder frihed</p></div>`
  },
  {
    id: 'hpr',
    position: { lat: 57.456822380411, lng: 9.997013057952872 },
    title: 'HPR',
    type: 'education',
    infoContent: `${infoWindowStyles}<div class="info-container"><h3 class="info-title">Hjørring Private Realskole</h3><p class="info-text">Folkeskole 4-9. klasse</p><p class="info-text">For de snobbede og rige</p><p class="info-text"></p></div>`
  },
  {
    id: 'eucNord',
    position: { lat: 57.45854347143067, lng: 10.014588178479217 },
    title: 'EUC Nord',
    type: 'education',
    infoContent: `${infoWindowStyles}<div class="info-container"><h3 class="info-title">EUC Nord</h3><p class="info-text">HTX</p><p class="info-text">Begyndelsen på mit peak</p><p class="info-text">2015-2017</p></div>`
  },
  {
    id: 'aauBasis',
    position: { lat: 57.053461265434066, lng: 9.91171798933991 },
    title: 'AAU Basis',
    type: 'education',
    infoContent: `${infoWindowStyles}<div class="info-container"><h3 class="info-title">AAU Basis</h3><p class="info-text">2 første semestre af Datalogi</div>`
  },
  {
    id: 'aauCassiopeia',
    position: { lat: 57.012339714420726, lng: 9.991050405703254 },
    title: 'AAU cassiopeia',
    type: 'education',
    infoContent: `${infoWindowStyles}<div class="info-container"><h3 class="info-title">AAU Cassiopeia</h3><p class="info-text">House of Computer Science</p><p>Datalogi</p><p class="info-text">Peak hygge og memes</p><p class="info-text">2017-2023</p></div>`
  }
];

export const mapConfig = {
  center: { lat: 57.31971035919828, lng: 10.03577420973761 },
  zoom: 9,
  mapTypeId: 'roadmap'
};

// Map styles to hide Google's default points of interest
export const mapStyles = {
  hideGoogleMarkers: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.attraction",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.place_of_worship",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.sports_complex",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.medical",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.school",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit.station",
      stylers: [{ visibility: "off" }]
    }
  ],
  showGoogleMarkers: [] // Empty array shows default styling
};

export const mapIcons = {
  house: {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#2563eb">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    `),
    scaledSize: { width: 32, height: 32 },
    anchor: { x: 16, y: 32 }
  },
  education: {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#000000">
        <path d="M9.5 14C9.5 14 9 13.32 9 12.5c0-.82.5-1.5.5-1.5s.5.68.5 1.5c0 .82-.5 1.5-.5 1.5M12 2L2 7l10 5 10-5-10-5zM2 17v3h2v-3H2zm4 0v3h2v-3H6zm4 0v3h2v-3h-2zm4 0v3h2v-3h-2zm4 0v3h2v-3h-2z"/>
        <path d="M12 13l-7-3.5v3l7 3.5 7-3.5v-3L12 13z"/>
      </svg>
    `),
    scaledSize: { width: 32, height: 32 },
    anchor: { x: 16, y: 32 }
  }
};
