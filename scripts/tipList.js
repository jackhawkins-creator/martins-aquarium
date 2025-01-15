import { database } from "./aquariumData.js";

export const tipList = () => {
  // Generate an HTML representation of each tip
  let tipThingsHTML = "";
  let tipObj = database.tips
  for (const tipItem of tipObj) {
    tipThingsHTML += `
        <ul class="tips">
            <li class="tip">Tip: ${tipItem.topic}</li>
            <li class="tip">${tipItem.text}</li>
        </ul>
    `;
  }
  
  return tipThingsHTML;
};