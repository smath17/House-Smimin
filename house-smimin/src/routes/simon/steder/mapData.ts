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

export const mapMarkers: MarkerData[] = [
  // House markers
  {
    id: 'ishavsvej',
    position: { lat: 57.466358598436514, lng: 9.803489716697532 },
    title: 'ishavsvej',
    type: 'house',
    infoContent: '<div><h3>Ishavsvej</h3><p>Location: 57.466, 9.803</p></div>'
  },
  {
    id: 'kaerparken',
    position: { lat: 57.45280311473584, lng: 9.989951748854576 },
    title: 'kærparken',
    type: 'house',
    infoContent: '<div><h3>Kærparken</h3><p>Location: 57.453, 9.990</p></div>'
  },
  {
    id: 'scoresbysundvej',
    position: { lat: 57.01925947426525, lng: 9.950380324970169 },
    title: 'scoresbysundvej',
    type: 'house',
    infoContent: '<div><h3>Scoresbysundvej</h3><p>Location: 57.019, 9.950</p></div>'
  },
  {
    id: 'bredhoj',
    position: { lat: 56.19109362885152, lng: 9.55286008042207 },
    title: 'bredhøj',
    type: 'house',
    infoContent: '<div><h3>Bredhøj</h3><p>Location: 56.191, 9.553</p></div>'
  },
  // Education markers
  {
    id: 'skallerupSkole',
    position: { lat: 57.46075238734557, lng: 9.869798523024473 },
    title: 'skallerup skole',
    type: 'education',
    infoContent: '<div><h3>Skallerup Skole</h3><p>Educational Institution</p><p>Location: 57.461, 9.870</p></div>'
  },
  {
    id: 'hpr',
    position: { lat: 57.456822380411, lng: 9.997013057952872 },
    title: 'HPR',
    type: 'education',
    infoContent: '<div><h3>HPR</h3><p>Educational Institution</p><p>Location: 57.457, 9.997</p></div>'
  },
  {
    id: 'eucNord',
    position: { lat: 57.45854347143067, lng: 10.014588178479217 },
    title: 'EUC Nord',
    type: 'education',
    infoContent: '<div><h3>EUC Nord</h3><p>Educational Institution</p><p>Location: 57.459, 10.015</p></div>'
  },
  {
    id: 'aauBasis',
    position: { lat: 57.053461265434066, lng: 9.91171798933991 },
    title: 'AAU Basis',
    type: 'education',
    infoContent: '<div><h3>AAU Basis</h3><p>Educational Institution</p><p>Location: 57.053, 9.912</p></div>'
  },
  {
    id: 'aauCassiopeia',
    position: { lat: 57.012339714420726, lng: 9.991050405703254 },
    title: 'AAU cassiopeia',
    type: 'education',
    infoContent: '<div><h3>AAU Cassiopeia</h3><p>Educational Institution</p><p>Location: 57.012, 9.991</p></div>'
  }
];

export const mapConfig = {
  center: { lat: 57.31971035919828, lng: 10.03577420973761 },
  zoom: 9,
  mapTypeId: 'roadmap'
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
