import { database } from "./aquariumData.js";

export const fishList = () => {
  // Generate an HTML representation of each fish
  let fishThingsHTML = "";
  let fishObj = database.fish
  for (const fishItem of fishObj) {
    fishThingsHTML += `
        <article>
            <img src="${fishItem.image}" alt="${fishItem.name} is a ${fishItem.species}">
            <div>
                <ul>
                    <li>Name: ${fishItem.name}</li>
                    <li>Species: ${fishItem.species}</li>
                    <li>Length: ${fishItem.length}</li>
                    <li>Location: ${fishItem.location}</li>
                    <li>Diet: ${fishItem.diet}</li>
                </ul>
            </div>
        </article>
    `;
  }
  
  return fishThingsHTML;
};