

const getAll = async () => {
    return await coffeesDal.getAll()
}

const addCoffee = async (body) => {
    return await coffeesDal.addCoffees(
         body.name, body.price, body.strehght, body.usersId)
}

const deleteCoffee = async (id) => {
    return await coffeesDal.deleteCoffee(id)
}

export {
    getAll,
    addUser,
    deleteUser
}