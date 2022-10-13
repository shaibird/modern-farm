

// create a function that iterates through the recieved plants array
//if the plant is corn, only put half of the output in the new array
//else put the plantztotal output in the harvested array



export const harvestPlants = (plantsArray) => {
    let harvestedPlants = []
    for (const plants of plantsArray) {
        let output = ""
        if (plants.type === "corn") {
            output = plants.output / 2;
            // console.log(output)
        } else { 
            output = plants.output
            // console.log(output)
        } 
            for (let i = 0; i < output; i++) {
                harvestedPlants.push(plants)}
        
        }
     return harvestedPlants 
}
