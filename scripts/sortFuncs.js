import { database } from "./aquariumData.js";

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""
    let fishObj = database.fish //this is the array
    for (const fishItem of fishObj) {
        if (fishItem.length % 3 === 0) {
            holyFish += `
                <article>
                <img src="${fishItem.image}" alt="${fishItem.name} is a ${fishItem.species}">
                    <div>
                        <ul class="data">
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
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = ""
    let fishObj = database.fish //this is the array
    for (const fishItem of fishObj) {
        if (fishItem.length % 3 !== 0 && fishItem.length % 5 === 0) {
            soldierFish += `
                <article>
                <img src="${fishItem.image}" alt="${fishItem.name} is a ${fishItem.species}">
                    <div>
                        <ul class="data">
                            <li>Name: ${fishItem.name}</li>
                            <li>Species: ${fishItem.species}</li>
                            <li>Length: ${fishItem.length}</li>
                            <li>Location: ${fishItem.location}</li>
                            <li>Diet: ${fishItem.diet}</li>
                        </ul>
                    </div>
                </article>
            `
        }
    }
    return soldierFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let normalFish = ""
    let fishObj = database.fish //this is the array
    for (const fishItem of fishObj) {
        if (fishItem.length % 3 !== 0 && fishItem.length % 5 !== 0) {
            normalFish += `
                <article>
                <img src="${fishItem.image}" alt="${fishItem.name} is a ${fishItem.species}">
                    <div>
                        <ul class="data">
                            <li>Name: ${fishItem.name}</li>
                            <li>Species: ${fishItem.species}</li>
                            <li>Length: ${fishItem.length}</li>
                            <li>Location: ${fishItem.location}</li>
                            <li>Diet: ${fishItem.diet}</li>
                        </ul>
                    </div>
                </article>
            `
        }
    }
    return normalFish
}