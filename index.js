var fs = require('fs');
var files = fs.readdirSync('writing/*.txt');
function displayThings(){
	var allText = document.getElementById('allText');
	allText.innertext = 'reach';
}