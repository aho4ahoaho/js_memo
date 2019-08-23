/*localStorage.setItem("test", "value");
localStorage.setItem("test2", "value2");
localStorage.setItem("日本語への対応は", "大丈夫そうだね");
localStorage.setItem("list", "test;test2;日本語への対応は");*/
'use strict';
let title;

function list_view(){
    while (document.getElementById("list").firstChild) {
        document.getElementById("list").removeChild(document.getElementById("list").firstChild);
      }
    let array = localStorage.getItem("list").replace("null","").split(";"); //配列の中にWebストレージのリストの値を代入する。
    array.forEach(function (value) {//配列の数だけリストに表示しておく
        document.getElementById("list").insertAdjacentHTML("afterbegin", `<p class="list" onclick="list_click(this)" id=`+value+`>` + value + "</p>");
    });
}

function list_click(value) {//リストがクリックされた場合にtitleのIDを利用してWebストレージのキーを呼び出す。
    title = value.id;//現在開いているファイルのキーをグローバル変数に残しておく
    document.getElementById("titlebox").value = title;
    document.getElementById("textbox").value = localStorage.getItem(title);
}

function submit(){
    let titlebox = document.getElementById("titlebox").value;
    let textbox = document.getElementById("textbox").value;//入力されているデータを取得する。
    let list = localStorage.getItem("list");
    list +=titlebox+";";//リストにタイトルを追記する。
    localStorage.removeItem(title);//前回の分のデータを一度削除する。
    list = list.replace(title+";","");//前回の分のキーも削除する。
    localStorage.setItem("list",list);//リストを更新する。
    localStorage.setItem(titlebox,textbox);//タイトルをキーに本文を保存する。
    list_view()//リストをリロードする。
}

list_view();