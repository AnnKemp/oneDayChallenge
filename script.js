document.getElementById("knopEen").addEventListener("click", buttonOne);
document.getElementById("knopTwee").addEventListener("click", buttonTwo);
document.getElementById("knopDrie").addEventListener("click", buttonThree);

function buttonOne(){
    // to hide/show the buttons
    document.getElementById("One").style.display="block";
    document.getElementById("Two").style.display="none";
    document.getElementById("Three").style.display = "none";
    // to change the css by class
    document.getElementById("knopEen").className="active";
    document.getElementById("knopTwee").className="inactive";
    document.getElementById("knopDrie").className="inactive";
}
function buttonTwo(){
    // to hide/show the buttons
    document.getElementById("Two").style.display="block";
    document.getElementById("One").style.display="none";
    document.getElementById("Three").style.display="none";
    // to change the css by class
    document.getElementById("knopEen").className="inactive";
    document.getElementById("knopTwee").className="active";
    document.getElementById("knopDrie").className="inactive";
}
function buttonThree() {
    // to hide/show the buttons
    document.getElementById("Three").style.display = "block";
    document.getElementById("Two").style.display = "none";
    document.getElementById("One").style.display = "none";
    // to change the css by class
    document.getElementById("knopDrie").className = "active"
    document.getElementById("knopEen").className = "inactive";
    document.getElementById("knopTwee").className = "inactive";
}