'use strict';
let title;
let new_title;


function list_view(){
    while (document.getElementById("list").firstChild) {
        document.getElementById("list").removeChild(document.getElementById("list").firstChild);
      }
    let array = localStorage.getItem("list").replace("null;","").replace(";;",";").split(";"); //配列の中にWebストレージのリストの値を代入する。
    array.forEach(function (value) {//配列の数だけリストに表示しておく
        if(value != ""){
            document.getElementById("list").insertAdjacentHTML("afterbegin", `<p class="list" onclick="list_click(this)" id=`+value+`>` + value + "</p>");
        }
    });
}

function list_click(value) {//リストがクリックされた場合にtitleのIDを利用してWebストレージのキーを呼び出す。
    title = value.id;//現在開いているファイルのキーをグローバル変数に残しておく
    document.getElementById("titlebox").value = title;
    document.getElementById("textbox").value = localStorage.getItem(title);
    new_title = false;
}
function new_list(){
    document.getElementById("titlebox").value = ""
    document.getElementById("textbox").value = ""
    new_title = true;
}

function save(){
    let titlebox = document.getElementById("titlebox").value;
    let textbox = document.getElementById("textbox").value;//入力されているデータを取得する。
    let list = localStorage.getItem("list");
    list +=titlebox+";";//リストにタイトルを追記する。
    if(new_title != true){
        localStorage.removeItem(title);//前回の分のデータを一度削除する。
        list = list.replace(title+";","");//前回の分のキーも削除する。
    }
    localStorage.setItem("list",list);//リストを更新する。
    localStorage.setItem(titlebox,textbox);//タイトルをキーに本文を保存する。
    list_view()//リストをリロードする。
}

list_view();