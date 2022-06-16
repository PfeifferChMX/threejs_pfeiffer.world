// SONNE, PLANETEN UND MONDE KONFIGURATION 

if (p2r == earth) {
var trabant1 = 'moon';
var P1 = 'earth';
var P2 = trabant1;
} else if (p2r == sun) {
var P1 = 'sun';
var P2 = 'earth';
} else if (p2r == solarsystem) {
var trabant1 = 'moon';
var trabant2 = '';
var trabant3 = '';
var sol1 = 'sun';
var P1 = 'mercury';
var P2 = 'venus';
var P3 = 'earth';
var P4 = 'mars';
var P5 = 'jupiter';
var P6 = 'saturn';
var P7 = 'uranus';
var P8 = 'neptune';
} else if (p2r == test) {
var trabant1 = 'moon';
var P1 = 'earth';
var P2 = trabant1;
} else {
var trabant1 = 'moon';
var trabant2 = '';
var trabant3 = '';
var P1 = 'sun';
var P2 = 'earth';
}

// originale planetenfolge
// trabant1 = 'moon';
// sol1 = 'sun';  
// P1 = 'mercury';  // P2 = 'venus';  
// P3 = 'earth';    // P4 = 'mars';   
// P5 = 'jupiter';  // P6 = 'saturn'; 
// P7 = 'uranus';   // P8 = 'neptune';

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
