// import customersDal from '../dal/customers-dal.js';

const getAll = async () => {
    return await usersDal.getAll()
}

const addUser = async (body) => {
    return await usersDal.addUser(
         body.firstName, body.familyName, body.phone,body.email, body.password, body.statusId)
}

const deleteUser = async (id) => {
    return await usersDal.deleteUser(id)
}

export {
    getAll,
    addUser,
    deleteUser
}