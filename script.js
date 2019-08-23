/*localStorage.setItem("test", "value");
localStorage.setItem("test2", "value2");
localStorage.setItem("日本語への対応は", "大丈夫そうだね");
localStorage.setItem("list", "test;test2;日本語への対応は");*/
'use strict';
let title;

let array = localStorage.getItem("list").replace(null,"").split(";");
array.forEach(function (value) {
    document.getElementById("logo").insertAdjacentHTML("afterend", `<p class="list" onclick="list_click(this)" id=`+value+`>` + value + "</p>");
});

function list_click(value) {
    console.log(value.id);
    title = value.id;
    document.getElementById("titlebox").value = title;
    document.getElementById("textbox").value = localStorage.getItem(title);
}

function submit(){
    let titlebox = document.getElementById("titlebox").value;
    let textbox = document.getElementById("textbox").value;
    let list = localStorage.getItem("list");
    list +=titlebox+";";
    localStorage.removeItem(title);
    list = list.replace(title+";","");
    localStorage.setItem("list",list);
    localStorage.setItem(titlebox,textbox);
}