import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList() // ALL of our HTML text

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()


// Render each HTML string to the correct DOM element
export const renderFishToDOM = (textHTML) => {
    const fishyList = document.getElementById("fishList");
    if (fishyList) {
        fishyList.innerHTML = textHTML;
    } else {
        console.error("fishList ain't here");
    }
 };

renderFishToDOM(fishHTML);

export const renderTipsToDOM = (textHTML) => {
    const tippyList = document.getElementById("tipList");
    if (tippyList) {
        tippyList.innerHTML = textHTML;
    } else {
        console.error("tipList ain't here");
    }
 };

 renderTipsToDOM(tipHTML);

export const renderLocationsToDOM = (textHTML) => {
    const locList = document.getElementById("locationList");
    if (locList) {
        locList.innerHTML = textHTML;
    } else {
        console.error("locationList ain't here");
    }
 };

 renderLocationsToDOM(locationHTML);