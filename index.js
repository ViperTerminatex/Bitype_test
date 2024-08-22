cammandsS = document.getElementById("cammandsS");
const WDYLATW = document.getElementById("WDYLATW");
commentV = WDYLATW.value;

function Commented(){
    var commentV = WDYLATW.value;
    alert(commentV);
}


function htadonwload(){
    alert("this is not the actual one because we are having trouble getting the real text editor/IDE ready.")
}

function lansel(){
    alert("still me worked on :(")
}

function coffegive(){
    coffee = true
    document.getElementById("coffeimg").src = "./Icons/coffee-filled.png";
}

let maxS = 100;
let minS = 1;

function secretBtn(){
    command = prompt("what is the commad?");

    if(command === "steve"){
        alert("STEVE");
    }

    if (command === "NG") {
        let number = Math.floor(Math.random() * (maxS - minS + 1) + minS);
        alert("Its 1-100 and plz wait for 3 secounds");
        setTimeout(() => {
            alert(number);
        }, 3000);
    } else if (command > 1) {
        let result = maxS * minS;
        alert(result);
    }
}

function infowindow(){
    const infoW = window.open("", "", "200, 200");
    infoW.document.write(`
            <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INFO</title>
    <style>
        body{
            background-color:gray;
        }

        .info{
            text-align:center;
            color:white;
            font-weight:bold;
            font-family;Arial;
            font-size:2rem;
        }
    </style>
    </head>
    <body>
        <p class="info">Welcome to the official website for BItype, the ultimate text editor for coders and planners! With BItype, you can explore various code snippets and download the app for free. Designed primarily for Java but supporting a wide range of programming languages, BItype is perfect for coding, planning, and much more.

Key Features:

Multi-language Support: Code in any programming language.
Auto-correction: Assistance with coding and planning.
Focused Design: While it excels in coding, BItype also offers powerful planning tools.
Stay tuned for a wide range of upcoming features that will enhance your coding and planning experience with BItype!</p>



    </body>
    </html>
    `);
    setTimeout(() => {
        infoW.close()
    }, 19000);

}

window.onload = function (){
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("Bitype", {
                body: "Welcome", // The text inside the notification
                icon: "./Icons/bits.png", // Path to an icon image (optional)
                tag: "unique-tag" // A tag to identify the notification (optional)
            });
        }
    });
    
}

