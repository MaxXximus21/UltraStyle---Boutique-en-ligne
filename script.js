var cookies = document.cookie

let PanierList = [];
var panierString = "";
var index = 0;
PanierShowed = false;
var pos;
const panierFrame = document.getElementById("idk");

let coShowed = false

let unameInput = document.getElementById("uname");
let passwordInput = document.getElementById("password");

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function openPanier() {
    if (PanierShowed == false) {
        panierFrame.style.display = "block";
        PanierShowed = true;
        refreshPanier()
        //document.getElementById("idk").innerHTML = PanierList
    } else if (PanierShowed == true) {
        panierFrame.style.display = "none";
        PanierShowed = false;
    }
}
function AddToPanier(GlassesName) {
    PanierList.push(GlassesName);
//    let cookies = 
    panierString = ""
    for (const i of PanierList) {
        panierString += i.toString()+","
    }
    const d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString(); 
    document.cookie = "panierList=" + panierString+ ";" + expires + ";path=/";
    refreshPanier();
}
function deleteFromPanier(articleName) {
    PanierList.splice(PanierList.indexOf(articleName), 1);
    panierString = ""
    for (const i of PanierList) {
        panierString += i.toString()+","
    }
    const d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString(); 
    document.cookie = "panierList=" + panierString+ ";" + expires + ";path=/";
    refreshPanier()
    //refreshPanier()
}

function refreshPanier() {
    while (panierFrame.hasChildNodes()) {
        panierFrame.firstChild.remove()      
    }
    index = 0;
    PanierList = getCookie("panierList").split(",")
    for (const i of PanierList) {
        if (i !="") {
            const frame = document.getElementById("Idk").cloneNode(true);
            panierFrame.appendChild(frame);
            frame.style.display = "block";
            frame.innerHTML = i;
            frame.setAttribute("name", i);
            pos = 4 + 12*index;
            frame.style.top = pos.toString() + "%";
            index += 1;
        } else if (i =="") {
            PanierList.splice(PanierList.indexOf(i), 1);
        }
    };
}

function ahahcookies() {
    while (true) {
        alert("Who have actived cookies xD")
    }
}

let score = 0
let questionindex = 1
function ReponseQuestion(name, Qindex) {
    if (name == "good" && Qindex == questionindex) {
        alert("You are right.")
        score += 1
        questionindex +=1
        document.getElementById("scoreTxt").innerHTML = "Score: "+ score.toString()
        if (score == 8) {
            alert("GG! You won! EZ PZ LEMON SQUEEZI!")
        }
    }else {
         alert("Noob")
    }
}
function ResetScore() {
    score = 0
    questionindex = 1
    document.getElementById("scoreTxt").innerHTML = "Score: "+ score.toString()
}
function openCo() {
    if (coShowed == false) {
        document.getElementById("coFrame").style.display = "block";
        coShowed = true;
    }else{
        document.getElementById("coFrame").style.display = "none" ;
        coShowed = false ;
    }
}
function connexion() {
    if (unameInput.value && passwordInput.value) {
        alert("Welcome " + unameInput.value)
    } else {
        alert("One of the argument or more are missing.")
    }
}

//const boutton = document.getElementById("BouttonFuyant");
//document.addEventListener("mousemove", (souris) => {
//    const rect = boutton.getBoundingClientRect();
//    while (true) {
//        let dist = Math.sqrt((souris.clientX- rect.x)*(souris.clientX- rect.x)+(souris.clientY- rect.y)*(souris.clientY- rect.y))
//        console.log(dist)
//    }
//})
