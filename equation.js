function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  //The parseFloat() function parses a string 
  //and returns a floating point number.
  document.getElementById("outputCelsius").innerHTML=(valNum-32)/1.8;
}
function temperatureConverter2(valNum) {
  valNum = parseFloat(valNum);
  //The parseFloat() function parses a string 
  //and returns a floating point number.
  document.getElementById("outputFehrenhei").innerHTML=(valNum*1.8)+32;
}