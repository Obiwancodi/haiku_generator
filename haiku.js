var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var array1 = [];
var array2 = [];
var array3 = [];
var array5 = [];
var array7 = [];

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
   var lines = data.toString().split("\n"),
       lineSplit
   lines.forEach(function(line){    
    lineSplit = line.split("  ");

    if(lineSplit[1]) {
    	var sy = lineSplit[1].match(/\d+/g)
	}
    
    if (sy) {

    	if(sy.length === 1) {

    		array1.push(lineSplit[0])

    	}

    	else if(sy.length === 2){

    		array2.push(lineSplit[0])
    	}

    	else if(sy.length === 3) {

    		array3.push(lineSplit[0])
    	}
    	
    	else if(sy.length === 5)
    		{
    			array5.push(lineSplit[0])
    		}
    	else if (lineSplit[1].match(/\d+/g).length === 7)
     	{
    		array7.push(lineSplit[0]);
    	}    
    
    	}

  });   
}

formatData(cmudictFile);

var storageObj = {

	"1" : array1,
	"2" : array2,
	"3" : array3,
	"5": array5,
	"7": array7,
	

}

var structure = {

	"line1" : 5,
	"line2" : 7,
	"line3" : 5
}

var line_types = [1,2,3,5,7];

var makePoem = function() {

	

	for(x in structure) {

		var len = structure[x]
		var line = "";
		while (len > 0) {
			var syllabe = line_types[Math.floor(Math.random() * (line_types.length))];
				
				while(syllabe > len) {
					syllabe = line_types[Math.floor(Math.random() * (line_types.length))];
			}
			//console.log(syllabe + " THIS IS SYLABB");
			len = len - syllabe
			//console.log(len + " THIS IS LEN")
			syllabe = syllabe + ""
			//console.log(syllabe)
			var num =  Math.floor(Math.random() * (storageObj[syllabe].length -1 ));
			var word = storageObj[syllabe][num];
			word = word.replace(/[0-9()]/g ,'')
			line = line + " " + word;
			
 
		}

	console.log(line);

	}
}

makePoem();



