import { plants } from './main.js'

export const catalog = (harvestedFoodArray) => {
    
    let catalogHTML = '<article class="allPlants"><div class="plantParent>"'
    

    for (const toCatalog of plants) {

        catalogHTML += `<div class='plant'>${toCatalog.type}</div>`
    }
    catalogHTML += `</div></article>`

    return catalogHTML

}