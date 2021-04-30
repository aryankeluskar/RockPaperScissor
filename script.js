if (screen.availWidth > screen.availHeight) {
    console.log("computer");
    document.write("<link rel=\"stylesheet\" href=\"styleL.css\" >")
} else {
    console.log("phone");
    document.write("<link rel=\"stylesheet\" href=\"styleM.css\" >")
}

if (10 > 5) {
    console.log("10");
}

let cr = Math.floor((Math.random() * 300000) / 100000) + 1;
console.log(cr);

function stnclick() {
    document.getElementById('user').src = "rock.png"
    document.getElementById('worl').style.visibility = "visible"
    if (cr == 1) {
        document.getElementById('worl').innerHTML = "TIE"
        document.getElementById('worl').style.color = "#ffd700"
        document.getElementById('worl').style.border = "2.5vw solid #ffd700"
        document.getElementById('com').src = "rock.png"
    }
    if (cr == 2) {
        document.getElementById('worl').innerHTML = "lost"
        document.getElementById('worl').style.color = "f00"
        document.getElementById('worl').style.border = "2.5vw solid #f00"
        document.getElementById('com').src = "paper.png"
    }
    if (cr == 3) {
        document.getElementById('worl').innerHTML = "won"
        document.getElementById('worl').style.color = "#0f0"
        document.getElementById('worl').style.border = "2.5vw solid #0f0"
        document.getElementById('com').src = "scissor.png"
    }
    document.getElementById("btnplay1").disabled = "true";
    document.getElementById("btnplay2").disabled = "true";
    document.getElementById("btnplay3").disabled = "true";
    setTimeout(function() { alert("Refresh to Play Again!"); }, 3000);
}

function papclick() {
    document.getElementById('user').src = "paper.png"
    document.getElementById('worl').style.visibility = "visible"
    if (cr == 2) {
        document.getElementById('worl').innerHTML = "TIE"
        document.getElementById('worl').style.color = "#ffd700"
        document.getElementById('worl').style.border = "2.5vw solid #ffd700"
        document.getElementById('com').src = "paper.png"
    }
    if (cr == 3) {
        document.getElementById('worl').innerHTML = "lost"
        document.getElementById('worl').style.color = "f00"
        document.getElementById('worl').style.border = "2.5vw solid #f00"
        document.getElementById('com').src = "scissor.png"
    }
    if (cr == 1) {
        document.getElementById('worl').innerHTML = "won"
        document.getElementById('worl').style.color = "#0f0"
        document.getElementById('worl').style.border = "2.5vw solid #0f0"
        document.getElementById('com').src = "rock.png"
    }
    document.getElementById("btnplay1").disabled = "true";
    document.getElementById("btnplay2").disabled = "true";
    document.getElementById("btnplay3").disabled = "true";
    setTimeout(function() { alert("Refresh to Play Again!"); }, 1000);
}

function sciclick() {
    document.getElementById('user').src = "scissor.png"
    document.getElementById('worl').style.visibility = "visible"
    if (cr == 3) {
        document.getElementById('worl').innerHTML = "TIE"
        document.getElementById('worl').style.color = "#ffd700"
        document.getElementById('worl').style.border = "2.5vw solid #ffd700"
        document.getElementById('com').src = "scissor.png"
    }
    if (cr == 1) {
        document.getElementById('worl').innerHTML = "lost"
        document.getElementById('worl').style.color = "f00"
        document.getElementById('worl').style.border = "2.5vw solid #f00"
        document.getElementById('com').src = "rock.png"
    }
    if (cr == 2) {
        document.getElementById('worl').innerHTML = "won"
        document.getElementById('worl').style.color = "#0f0"
        document.getElementById('worl').style.border = "2.5vw solid #0f0"
        document.getElementById('com').src = "paper.png"
    }
    document.getElementById("btnplay1").disabled = "true";
    document.getElementById("btnplay2").disabled = "true";
    document.getElementById("btnplay3").disabled = "true";
    setTimeout(function() { alert("Refresh to Play Again!"); }, 1000);
}