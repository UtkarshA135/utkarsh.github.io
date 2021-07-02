let windwin = document.getElementsByClassName("windwin")[0]
let windexplor = document.getElementsByClassName("windexplor")[0]
let windsearch = document.getElementsByClassName("windsearch")[0]
let windsett = document.getElementsByClassName("windsett")[0]
let widgetsd = document.getElementsByClassName("widgetsd")[0]

let explor = document.getElementsByClassName("explor")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let search = document.getElementsByClassName("search")[0]
let setting = document.getElementsByClassName("setting")[0]
let widget=document.getElementsByClassName("widgets")[0]
let notes=document.getElementsByClassName("notes")[0]
let camera=document.getElementsByClassName("camera")[0]
let paint=document.getElementsByClassName("paint")[0]
let calculator=document.getElementsByClassName("calculator")[0]


let spotify = document.getElementsByClassName("spotify")[0]
let google=document.getElementsByClassName("google")[0]
let folder=document.getElementsByClassName("folder")[0]
let thispc=document.getElementsByClassName("this-pc")[0]
let trash=document.getElementsByClassName("trash")[0]
let sticky=document.getElementsByClassName("sticky")[0]
let cmd = document.getElementsByClassName("cmd")[0]
let vscode = document.getElementsByClassName("vscode")[0]
let todo = document.getElementsByClassName("todo")[0]
// let sticky = document.getElementsByClassName("zoom")[0]




widgetsd.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(widget.style.right == "-50px"){
        widget.style.right = "-655px"
    }
    else{
        widget.style.right = "-50px"
    }
})
widgetsd.addEventListener("click", ()=>{
    console.log("clicked");
    if(widget.style.right == "-50px"){
        widget.style.right = "-655px"
    }
    else{
        widget.style.right = "-50px"
    }
})



windwin.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
windwin.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})



windsett.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(setting.style.bottom == "50px"){
        setting.style.bottom = "-655px"
    }
    else{
        setting.style.bottom = "50px"
    }
})
windsett.addEventListener("click", ()=>{
    console.log("clicked");
    if(setting.style.bottom == "50px"){
        setting.style.bottom = "-655px"
    }
    else{
        setting.style.bottom = "50px"
    }
})



windsearch.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(search.style.bottom == "50px"){
        search.style.bottom = "-655px"
    }
    else{
        search.style.bottom = "50px"
    }
})
windsearch.addEventListener("click", ()=>{
    console.log("clicked");
    if(search.style.bottom == "50px"){
        search.style.bottom = "-655px"
    }
    else{
        search.style.bottom = "50px"
    }
})



windexplor.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(explor.style.bottom == "50px"){
        explor.style.bottom = "-655px"
    }
    else{
        explor.style.bottom = "50px"
    }
})
windexplor.addEventListener("click", ()=>{
    console.log("clicked");
    if(explor.style.bottom == "50px"){
        explor.style.bottom = "-655px"
    }
    else{
        explor.style.bottom = "50px"
    }
})


google.addEventListener("click", ()=>{
window.open("https://www.google.com","popup",'width=850,height=600')
})
spotify.addEventListener("click", ()=>{
    console.log('====================================');
    console.log();
    console.log('====================================');
   playSongs();
  
})
// folder.addEventListener("click", ()=>{
//     console.log("check");
//     let folder = document.createElement("div");
//     folder.classList.add("folder");
//     let atag = document.createElement("a");
//     atag.href=`file:///C:/Users/Hp/Desktop/Code%20With%20Harry/`;
//   document.querySelector("body").append(folder);
//   atag.click();
// })

trash.addEventListener("click", ()=>{
    console.log("check");
    let folder = document.createElement("div");
    folder.classList.add("folder");
    let atag = document.createElement("a");
    atag.href=`file:///C:/$Recycle.Bin/`;
  document.querySelector("body").append(folder);
  atag.click();
})
cmd.addEventListener("click", ()=>{
    window.open("https://utkarsha135.github.io/cmd-port/","popup","width:800,height:600");
})

thispc.addEventListener("click", ()=>{
    console.log("check");
    let folder = document.createElement("div");
    folder.classList.add("folder");
    let atag = document.createElement("a");
    atag.href=`file:///C:/Users/Hp/Desktop/`;
  document.querySelector("body").append(folder);
  atag.click();
})


vscode.addEventListener("click", ()=>{
    window.open('./PepSnap/vscode.html','popup','width=850,height=600');
})

todo.addEventListener("click", ()=>{
    window.open("https://fast-sierra-69225.herokuapp.com/",'popup','width=850,height=600');
})

notes.addEventListener("click", ()=>{
    playSongs();
})

camera.addEventListener("click", ()=>{
    window.location.assign("./PepSnap/index.html");
})

paint.addEventListener("click", ()=>{
    window.location.assign("./whiteboard/activity/index.html");
})

calculator.addEventListener("click", ()=>{

})

function myFunction() {
    window.open('./terminal/index.html','popup','width=900,height=600');
  }
  function playSongs(){
    window.open('https://open.spotify.com/embed/playlist/2WKT9LWsW6YD8OPc70mTXF','popup','width=900,height=600');
  }
// google.addEventListener("click", ()=>{
//     window.location.assign("index1.html");
// })
{/* <iframe src="https://open.spotify.com/embed/playlist/2WKT9LWsW6YD8OPc70mTXF" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
// var defaultImage = "http://...";
// document.getElementsByTagName('body')[0].style.backgroundImage = localStorage.getItem('back') ? "url('"+localStorage.getItem('back')+"')" : "url('"+defaultImage+"')";
// function changebackground(){
//   var url =  document.getElementById('bgchanger').value;
//   document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + url + "')";
//   localStorage.setItem('back',url);
// }
function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
  
    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
      hrs = hrs - 12;
      period = "PM";
    }
  
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
  
    let time = `${hrs}:${mins}:${secs} ${period}`;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText = time;
  }
  
  clock();
  function date(){
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("date").innerText = today;
  }
  date();