var requestURL = 'https://jrrnoonan.github.io/Spruce-Finance/';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    alert([0]["cik"])
}