console.log("Welcome to the main module")


import { createPlan } from "./plan.js"
import { addPlant } from "./field.js"
import { usePlant } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { field } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

const yearlyPlan = createPlan()
export const plantedSeeds = plantSeeds(yearlyPlan)
console.log(plantedSeeds)

const harvestingPlants = usePlant()
export const plants = harvestPlants(harvestingPlants)

console.log(plants)

const displayCatalog = catalog(plants)
console.log(displayCatalog)

const parentHTMLElement = document.querySelector(".messages")
parentHTMLElement.innerHTML = catalog(plants)


// take the randomly generated plan, put it in the tractor to plant the seeds, 