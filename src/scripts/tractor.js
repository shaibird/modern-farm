import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { field } from "./field.js"

// accepts the yearsPlan for planting 
export const plantSeeds = (plantingPlan) => {
    
    for (const seedPlanting of plantingPlan) {
        for (const plantToPlant of seedPlanting) {
            if (plantToPlant === "Soybean") {
                addPlant(createSoybean())
            } else if (plantToPlant === "Sunflower") {
                addPlant(createSunflower())
            } else if (plantToPlant === "Corn") {
                addPlant(createCorn())
            } else if (plantToPlant === "Asparagus") {
                addPlant(createAsparagus())
            } else if (plantToPlant === "Potato") {
                addPlant(createPotato())
            } else {
                addPlant(createWheat())
            };
        }
    }
    return field
}

