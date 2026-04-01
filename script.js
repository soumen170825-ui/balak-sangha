
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
document.getElementById("playerForm")?.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("successMsg").innerText =
"Registration Successful! We will contact you soon.";

this.reset();

});

let players = JSON.parse(localStorage.getItem("players")) || [];

document.getElementById("playerForm")?.addEventListener("submit", function(e){

e.preventDefault();

let player = {
name:document.getElementById("name").value,
age:document.getElementById("age").value,
position:document.getElementById("position").value,
phone:document.getElementById("phone").value
};

players.push(player);

localStorage.setItem("players",JSON.stringify(players));

document.getElementById("successMsg").innerText =
"Player Registered Successfully";

this.reset();

});

function loadPlayers(){

let table=document.getElementById("playerTable");

players.forEach((p,i)=>{

let row=`
<tr>
<td>${p.name}</td>
<td>${p.age}</td>
<td>${p.position}</td>
<td>
<a href="https://wa.me/91${p.phone}" target="_blank">
Contact
</a>
</td>

<td>
<button onclick="deletePlayer(${i})">Delete</button>
</td>

</tr>
`;

table.innerHTML+=row;

});

}

function deletePlayer(index){

players.splice(index,1);

localStorage.setItem("players",JSON.stringify(players));

location.reload();

}

loadPlayers();
