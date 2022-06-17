//var p2r = "sun";
const artificialsatellitesani = "false";
// SONNE, PLANETEN UND MONDE KONFIGURATION 
if (p2r === "earth") {
var trabant1 = 'moon';
var P1 = 'earth';
var P2 = trabant1;
const artificialsatellitesani = "false";
} else if (p2r === "sun") {
var P1 = 'sun';
var P2 = 'earth';
} else if (p2r === "solarsystem") {
var trabant1 = 'moon';
var trabant2 = '';
var trabant3 = '';
var P1 = 'sun';
var P2 = 'mercury';
var P3 = 'venus_atmosphere'; 
// venus_surface or venus_atmosphere
var P4 = 'earth';
var P5 = 'mars';
var P6 = 'jupiter';
var P7 = 'saturn';
var P8 = 'uranus';
var P9 = 'neptune';
} else if (p2r === "test") {
var trabant1 = 'moon';
var P1 = 'earth';
var P2 = trabant1;
} else {
var trabant1 = 'moon';
var P1 = 'sun';
var P2 = 'earth';
}

// originale planetenfolge
// trabant1 = 'moon'
// sun mercury 'venus_surface or venus_atmosphere' 
// earth mars jupiter saturn uranus neptune

// UMSCHALTEN TAG UND NACHT

var jetzt = new Date().getHours();

if (jetzt >= 5 && jetzt <= 20) {
bild = 'day';
} else {
bild = 'night';
}
// ueberschreiben zum testen bei bedarf:
//bild = 'day';
//bild = 'night';
