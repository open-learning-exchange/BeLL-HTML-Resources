// JavaScript Document
var scores = 0;
var parsedFiles=0;
function loadXml(e){if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}xmlhttp.onreadystatechange=parseXMLDoc;xmlhttp.open("GET",e,true);xmlhttp.send()}function parseXMLDoc(){if(xmlhttp.readyState==4){if(xmlhttp.responseXML){if(parsedFiles==0){var e=xmlhttp.responseXML.documentElement.getElementsByTagName("Id")[0].textContent;parsedFiles++;loadXml("../../student/"+e+"/variable.xml")}else{var t=xmlhttp.responseXML.documentElement.getElementsByTagName("score");var n=t[0].getElementsByTagName("Elem");var r=t[0].getElementsByTagName("Elem").length;scores=n[0].getElementsByTagName("Data")[0].childNodes[0].nodeValue}}}}function getScore(){return scores}var scores=0;var parsedFiles=0