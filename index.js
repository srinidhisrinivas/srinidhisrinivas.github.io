var fs = require('fs');
var files = fs.readdirSync('C:/Users/Srinidhi/Documents/writing/*.txt')
function displayThings(){
	var allText = document.getElementById('allText');
	allText.innertext = files.toString();
}