// Check for the various File API support

if(window.FileReader && window.FileList){
  alert('Success')
}else{
  alert('The File APIs are not fully supported in this browser.')
}
