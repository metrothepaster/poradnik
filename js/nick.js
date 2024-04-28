function zapiszTekst() {
    var tekst = document.getElementById("textInput").value;
    localStorage.setItem("zapisanyTekst", tekst);
    console.log("Zapisano tekst: " + tekst);
    // Możesz dodać kod do przekierowania do innego pliku HTML tutaj, jeśli to konieczne
    // np. window.location.href = "inne_plik.html";
}