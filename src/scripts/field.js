
// field array will store all of the plants. takes input from tractor.js
export let field = []

// function to add a seed to the field
export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const corn of seed) {
            field.push(corn)
        }
    } else {
        
        field.push(seed)
    }
        return field
    }

    export const usePlant = () => {
        return field.map(field => ({...field}))
    }