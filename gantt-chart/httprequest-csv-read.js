// Read a csv file into a key value pair array

function readTextFile(file){
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function(){
    if(rawFile.readyState === 4){
      if(rawFile.status === 200 || rawFile.status === 0){
        var allText = rawFile.responseText;
        alert(allText);
      }
    }
  }
  rawFile.send(allText);
}

var fPath = "file:///Users/matthewpietrzykowski/Documents/projects/predix-dev/javascript/gantt-chart/gantt-data-test1.csv";
var csvString = readTextFile(fPath);
alert(csvString);
