function changeBackground(){
    let currentMode = sessionStorage.getItem("mode")
    if (currentMode == "LIGHT") {
        // Switch to Dark mode
        console.log("switching to dark mode")
        // document.body.style.backgroundColor = '#000000';
        // document.body.style.color = '#FAEBD7';
        
        document.body.style.backgroundColor = '#F0E68C';
        document.body.style.color = '#696969';
        sessionStorage.setItem("mode","DARK");

        // Khakhi: #F0E68C; Dimgrey #696969
    }
    else {
        // Switch to light mode
        console.log("switching to light mode")
        document.body.style.backgroundColor = '#FFFFFF';
        // document.body.style.color = '#696969';
        document.body.style.color = '#000000';
        sessionStorage.setItem("mode","LIGHT");
    }
}

function largerImage(image) {
    image.style.scale = "120%"
}

function returnNorm(image) {
    image.style.scale = "100%"
}

function onPageLoad() {
    let currentMode = sessionStorage.getItem("mode")
    if (currentMode == "LIGHT") {
        document.body.style.backgroundColor = '#FFFFFF';
        // document.body.style.color = '#696969';
        document.body.style.color = '#000000';
    }
    else {
        // document.body.style.backgroundColor = '#000000';
        // document.body.style.color = '#FAEBD7';
        document.body.style.backgroundColor = '#F0E68C';
        document.body.style.color = '#696969';
       
    }
}

/*
// Change Fontsize psuedocode:
// 1. Loop through each element of the page 
// 2. For each element, retrieve the font-size property
//      NOTE: font-size is a string that has the size as well as px (as text). 
// 3. Convert font-size string by stripping out "px"
// 4. Now, depending on the menu option selected (i.e. small / normal / large), 
//      multiply the font-size value (from step 3) by either 0.8 / 1.0 / 1.2.
// 5. Store current Font size mode in sessionstorage
// 6. Before multiplying by the appropriate value, always convert to normal size and then apply the
//      appropriate multiplication factor
// NOTE: Not currently enabled, as the code was getting a bit too complicated

function changeFontSizeForAll(element, multiplier){

    let curFontMode = sessionStorage.getItem("fontmode")

    if (curFontMode == "small") {
        mutliplier = 0.8

    }
    else if (curFontMode == "large") {
    }
    else {

    }

    // Get font-size for the current element
    let currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    // Logic:
    //  If the current mode is 'small', then set the
    if (currentSize) {    
        currentSize = parseFloat(currentSize.replace("px",""));
        element.style.fontSize = (currentSize * 1.2) + "px";
        for(var i=0; i < element.children.length; i++){
            changeFontSizeForAll(element.children[i], multiplier);
        }
    }
}

function changeFontSize(param1) {

    //changeFontSizeForAll(document.body.mainElement)

    // Set the font size
    let mainElement;
    mainElement = document.getElementsByTagName('main')[0];
    changeFontSizeForAll(mainElement)
    // mainElement.style.fontSize = "1.3em";

    // let h1Element;
    //h1Element = document.getElementById("h1Header").style.fontSize = param1;
    // h1Element = document.getElementsByClassName("h1Header")[0].style.fontSize = "1.3em";

    // Now save the font size in session storage object
}

*/