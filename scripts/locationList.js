import { database } from "./aquariumData.js";

export const locationList = () => {
  // Generate an HTML representation of each location
  let locationThingsHTML = "";
  let locationObj = database.locations
  for (const locationItem of locationObj) {
    locationThingsHTML += `
        <article class="locations">
            <section class="location">
                <h3>${locationItem.name}</h3>
                <p>Country: ${locationItem.country}</p>
                <p>Description: ${locationItem.description}</p>
            </section>
        </article>
    `;
  }
  
  return locationThingsHTML;
};