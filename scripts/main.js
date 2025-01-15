import { fishList } from './fishList.js'
/* import { tipList } from './tipList.js'
import { locationList } from './locationList.js' */

// Generate the fish list
const fishHTML = fishList() // ALL of our HTML text
/*
// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()
*/

// Render each HTML string to the correct DOM element
export const renderToDOM = (textHTML) => {
    const fishyList = document.getElementById("fishList");
    if (fishyList) {
        fishyList.innerHTML = textHTML;
    } else {
        console.error("fishList ain't here");
    }
 };

renderToDOM(fishHTML);