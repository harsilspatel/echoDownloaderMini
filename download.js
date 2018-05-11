var date = document.getElementsByClassName("left")[0].getElementsByClassName("class-date")[0].innerText;
var name = document.getElementsByClassName("left")[0].getElementsByClassName("classList")[0].innerText.slice(0, 7);

var url = document.querySelectorAll("video")[0]["src"];
var fullname = name + " " + date + ".mp4";

[url, fullname];