//if (typeof p2r !== 'undefined') {p2r = "earth";}
// default werte setzen
var P2DM = 0.2;
var P3DM = 0;
var P4DM = 0;
var P5DM = 0;
var P6DM = 0;
var P7DM = 0;
var P8DM = 0;
var P9DM = 0;
var P2Abst = 145;
var P3Abst = 240;
var P4Abst = 240;
var P5Abst = 240;
var P6Abst = 240;
var P7Abst = 240;
var P8Abst = 240;
var P9Abst = 240;
var artisatani = "inactive";
cameraposition = 700;

// SONNE, PLANETEN UND MONDE KONFIGURATION 
if (p2r === "earth") {
var trabant1 = 'moon';
var P1 = 'earth';
var P2 = trabant1;
//var P2DM = 22;
//var P2Abst = 100;
cameraposition = 700;
var artisatani = "active";

} else if (p2r === "sun") {
var P1 = 'sun';
var P2 = 'earth';
//var P2DM = 22;
//var P2Abst = 100;
var artisatani = "inactive";
cameraposition = 700;

} else if (p2r === "solarsystem") {
var trabant1 = 'moon';
var trabant2 = '';
var trabant3 = '';
var P1 = 'sun';
var P2 = 'mercury';
var P2DM = 0.2;
var P2Abst = 200;
// venus_surface or venus_atmosphere: 
var P3 = 'venus_atmosphere'; 
var P3DM = 0.2;
var P3Abst = 300;
var P4 = 'earth';
var P4DM = 0.2;
var P4Abst = 400;
var P5 = 'mars';
var P5DM = 0.2;
var P5Abst = 500;
var P6 = 'jupiter';
var P6DM = 0.2;
var P6Abst = 600;
var P7 = 'saturn';
var P7DM = 0.2;
var P7Abst = 700;
var P8 = 'uranus';
var P8DM = 0.2;
var P8Abst = 800;
var P9 = 'neptune';
var P9DM = 0.2;
var P9Abst = 900;
var artisatani = "inactive";
cameraposition = 2000;


} else if (p2r === "test") {
var trabant1 = 'moon';
var P1 = 'earth';
var P2 = trabant1;
//var P2DM = 22;
//var P2Abst = 100;
var artisatani = "inactive";
cameraposition = 700;


} else {
var trabant1 = 'moon';
var P1 = 'sun';
var P2 = 'earth';
//var P2DM = 22;
//var P2Abst = 100;
var artisatani = "active";
cameraposition = 700;
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
