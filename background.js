// var x = "console.log(document.querySelectorAll('video'));"
// chrome.tabs.executeScript({code: x});

var x = "var x = document.getElementsByClassName(\"left\")[0].getElementsByClassName(\"class-date\")[0].innerText;";
var y = "var y = document.getElementsByClassName(\"left\")[0].getElementsByClassName(\"classList\")[0].innerText;";
// var z = return ({url: document.querySelectorAll(\"video\")[0][\"src\"], filename: \"xyz\"})
// chrome.downloads.download({url: result[0][0], filename: result[0][1]})
chrome.browserAction.onClicked.addListener(function(tab){chrome.tabs.executeScript({file: "download.js"}, function(result){chrome.downloads.download({url: result[0][0], filename: result[0][1]})})});
