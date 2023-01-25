if (screen.availWidth > screen.availHeight) {
    console.log("computer");
    document.write("<link rel=\"stylesheet\" href=\"styleL.css\" >")
} else {
    console.log("phone");
    document.write("<link rel=\"stylesheet\" href=\"styleM.css\" >")
    document.getElementById('comsi').innerHTML = "Phone"
}

if (10 > 5) {
    console.log("10");
}

let worlfs = 0.03 * screen.availHeight;
document.getElementById('worl').style.fontSize = JSON.stringify(worlfs);

let cr = Math.floor((Math.random() * 300000) / 100000) + 1;
console.log(cr);

function stnclick() {
    document.getElementById('ussi').innerHTML = "You: Rock";
    document.getElementById('user').src = "rock.png"
    document.getElementById('worl').style.visibility = "visible"
    if (cr == 1) {
        document.getElementById('worl').innerHTML = "TIE"
        document.getElementById('worl').style.color = "#ffd700"
            // document.getElementById('worl').style.border = "2.5vw solid #ffd700"
        document.getElementById('worl').style.borderColor = "#ffd700"
        document.getElementById('com').src = "rock.png"
        document.getElementById('comsi').innerHTML = document.getElementById('comsi').innerHTML + ": Rock ";
    }
    if (cr == 2) {
        document.getElementById('worl').innerHTML = "lost"
        document.getElementById('worl').style.color = "f00"
            // document.getElementById('worl').style.border = "2.5vw solid #f00"
        document.getElementById('worl').style.borderColor = "#f00"
        document.getElementById('com').src = "paper.png"
        document.getElementById('comsi').innerHTML = document.getElementById('comsi').innerHTML + ": Paper";
    }
    if (cr == 3) {
        document.getElementById('worl').innerHTML = "won"
        document.getElementById('worl').style.color = "#0f0"
        document.getElementById('worl').style.borderColor = "#0f0"
        document.getElementById('com').src = "scissor.png"
        document.getElementById('comsi').innerHTML = document.getElementById('comsi').innerHTML + ": Rock ";
    }
    document.getElementById("btnplay1").disabled = "true";
    document.getElementById("btnplay2").disabled = "true";
    document.getElementById("btnplay3").disabled = "true";
    setTimeout(function() {
        alert("Thanks for playing");
        window.location.reload();
    }, 1000);
}

function papclick() {
    document.getElementById('ussi').innerHTML = "You: Paper";
    document.getElementById('user').src = "paper.png"
    document.getElementById('worl').style.visibility = "visible"
    if (cr == 2) {
        document.getElementById('worl').innerHTML = "TIE"
        document.getElementById('worl').style.color = "#ffd700"
            // document.getElementById('worl').style.border = "2.5vw solid #ffd700"
        document.getElementById('worl').style.borderColor = "#ffd700"
        document.getElementById('com').src = "paper.png"
            // document.getElementById('comsi').innerHTML = "Paper";
        document.getElementById('comsi').innerHTML = document.getElementById('comsi').innerHTML + ": Paper";
    }
    if (cr == 3) {
        document.getElementById('worl').innerHTML = "lost"
        document.getElementById('worl').style.color = "f00"
            // document.getElementById('worl').style.border = "2.5vw solid #f00"
        document.getElementById('worl').style.borderColor = "#f00"
        document.getElementById('com').src = "scissor.png"
            // document.getElementById('comsi').innerHTML = "Scissor";
        document.getElementById('comsi').innerHTML = document.getElementById('comsi').innerHTML + ": Scissor ";
    }
    if (cr == 1) {
        document.getElementById('comsi').innerHTML = "Rock";
        document.getElementById('worl').innerHTML = "won"
        document.getElementById('worl').style.color = "#0f0"
            // document.getElementById('worl').style.border = "2.5vw solid #0f0"
        document.getElementById('worl').style.borderColor = "#0f0"
        document.getElementById('com').src = "rock.png"
        document.getElementById('comsi').innerHTML = document.getElementById('comsi').innerHTML + ": Rock ";
    }
    document.getElementById("btnplay1").disabled = "true";
    document.getElementById("btnplay2").disabled = "true";
    document.getElementById("btnplay3").disabled = "true";
    setTimeout(function() {
        alert("Thanks for playing");
        window.location.reload();
    }, 1000);
}

function sciclick() {
    document.getElementById('ussi').innerHTML = "You: Scissor";
    document.getElementById('user').src = "scissor.png"
    document.getElementById('worl').style.visibility = "visible"
    if (cr == 3) {
        document.getElementById('worl').innerHTML = "TIE"
        document.getElementById('worl').style.color = "#ffd700"
            // document.getElementById('worl').style.border = "2.5vw solid #ffd700"
        document.getElementById('worl').style.borderColor = "#ffd700"
            // document.getElementById('comsi').innerHTML = "Scissor";
        document.getElementById('comsi').innerHTML = document.getElementById('comsi').innerHTML + ": Scissor";
        document.getElementById('com').src = "scissor.png"
    }
    if (cr == 1) {
        // document.getElementById('comsi').innerHTML = "Rock";
        document.getElementById('worl').innerHTML = "lost"
        document.getElementById('worl').style.color = "f00"
            // document.getElementById('worl').style.border = "2.5vw solid #f00"
        document.getElementById('worl').style.borderColor = "#f00"
        document.getElementById('com').src = "rock.png"
        document.getElementById('comsi').innerHTML = document.getElementById('comsi').innerHTML + ": Rock";
    }
    if (cr == 2) {
        document.getElementById('worl').innerHTML = "won"
        document.getElementById('worl').style.color = "#0f0"
            // document.getElementById('worl').style.border = "2.5vw solid #0f0"
        document.getElementById('worl').style.borderColor = "#0f0"
            // document.getElementById('comsi').innerHTML = "Paper";
        document.getElementById('comsi').innerHTML = document.getElementById('comsi').innerHTML + ": Paper";
        document.getElementById('com').src = "paper.png"
    }
    document.getElementById("btnplay1").disabled = "true";
    document.getElementById("btnplay2").disabled = "true";
    document.getElementById("btnplay3").disabled = "true";
    setTimeout(function() {
        alert("Thanks for playing");
        window.location.reload();
    }, 1000);
}