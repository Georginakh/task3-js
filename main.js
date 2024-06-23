var title = "<h1> my faviorte programming languages is : </h1>"
document.querySelector ("div").innerHTML += title;

var languages = ['JavaScript', 'Python', 'C'];
var showList="";
for(var i=0; i<3 ; i++){
    showList += "<li>" + languages[i] + "</li>"
}

document.querySelector ("ul").innerHTML = showList;