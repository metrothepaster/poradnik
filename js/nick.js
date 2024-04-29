function zapiszTekst() {
    var tekst = document.getElementById("textInput").value;
    localStorage.setItem("zapisanyTekst", tekst);
    console.log("Zapisano tekst: " + tekst);

}
