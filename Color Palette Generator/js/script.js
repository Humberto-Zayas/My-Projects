var html = '';
var red;
var green;
var blue;
var rgbColor;

var counter = 0;

function makeColor() {
red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

}

function generate() {
while ( counter < 10) {
  makeColor();
  counter += 1;
}

document.write(html);

}

generate();