
function login(){

let pass=document.getElementById("password").value;

if(pass=="1954"){
window.location="admin.html";
}

else{
alert("Wrong Password");
}

}

function addNotice(){

let text=document.getElementById("notice").value;

let div=document.createElement("div");

div.innerHTML=text;

document.getElementById("noticeBoard").appendChild(div);

}

function addPlayer(){

let text=document.getElementById("player").value;

let div=document.createElement("div");

div.innerHTML=text;

document.getElementById("playerList").appendChild(div);

}

function addMatch(){

let text=document.getElementById("match").value;

let div=document.createElement("div");

div.innerHTML=text;

document.getElementById("matchList").appendChild(div);

}

function uploadImage(){

let file=document.getElementById("imageUpload").files[0];

let reader=new FileReader();

reader.onload=function(){

let img=document.createElement("img");

img.src=reader.result;

document.querySelector(".gallery").appendChild(img);

}

reader.readAsDataURL(file);

}
