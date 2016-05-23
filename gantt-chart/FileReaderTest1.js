/*
This JavaScript file contains the code to load
a text file asynchronously and display it in the
browser.

Source: http://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api
*/

window.onload = function(){
  // gather the important HTML elements here and
  // set as variables
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');

  // setup an event listener to manage the file load
  // as an asynchronous event...e.g., have to wait
  // until it's fully loaded.
  fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var txtType = /text.*/;  // test if it's a text file

    if(file.type.match(txtType)) {
      var reader = new FileReader();

      reader.onload = function(e){
        fileDisplayArea.innerText = reader.result;
      }

      var csvData = reader.readAsText(file);
      return(csvData);

    } else {
      fileDisplayArea.innerText = "File not supported!"
    }
  });
}
