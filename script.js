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

let cr = Math.round(Math.random() * 3);
console.log(cr);