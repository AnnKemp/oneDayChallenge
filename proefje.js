/*document.getElementById("One").addEventListener("load", startCounter );

let x=0;
function startCounter(){
    alert("de functie werkt!");
    x=x+1;
}
document.getElementById("counter").innerHTML=x;*/
/* --------------------------------the tabsection --------------------------------------------------- */
document.getElementById("knopEen").addEventListener("click", buttonOne);
document.getElementById("knopTwee").addEventListener("click", buttonTwo);
document.getElementById("knopDrie").addEventListener("click", buttonThree);

function buttonOne(){
    // to hide/show the pages
    document.getElementById("One").style.display="block";
    document.getElementById("Two").style.display="none";
    document.getElementById("Three").style.display = "none";
    // to change the css by class
    document.getElementById("knopEen").className="active";
    document.getElementById("knopTwee").className="inactive";
    document.getElementById("knopDrie").className="inactive";
}
function buttonTwo(){
    // to hide/show the pages
    document.getElementById("Two").style.display="block";
    document.getElementById("One").style.display="none";
    document.getElementById("Three").style.display="none";
    // to change the css by class
    document.getElementById("knopEen").className="inactive";
    document.getElementById("knopTwee").className="active";
    document.getElementById("knopDrie").className="inactive";
}
function buttonThree() {
    // to hide/show thepages
    document.getElementById("Three").style.display = "block";
    document.getElementById("Two").style.display = "none";
    document.getElementById("One").style.display = "none";
    // to change the css by class
    document.getElementById("knopDrie").className = "active"
    document.getElementById("knopEen").className = "inactive";
    document.getElementById("knopTwee").className = "inactive";
}
/*----------------------------------check for-------------------------------------------------------------------*/
document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();

    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        let a=inputs[i];
        console.log(a.innerHTML);

        /*if (inputs.value = "") {
            alert("you have to put something in the input field of the form before submitting!")
            // break;
        } else {
            let form=document.getElementById("contact");
            form.submit();
        }*/
    }
});

