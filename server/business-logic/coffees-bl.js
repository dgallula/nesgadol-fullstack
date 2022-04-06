 import coffeesDal from "../data-layers-logic/coffees-dal.js"


const getAll = async () => {
    return await coffeesDal.getAll()
}

const addCoffee = async (body) => {
    return await coffeesDal.addCoffee(
         body.name, body.price, body.strehght, body.usersId)
}

const deleteCoffee = async (id) => {
    return await coffeesDal.deleteCoffee(id)
}

export {
    getAll,
    addCoffee,
    deleteCoffee
}