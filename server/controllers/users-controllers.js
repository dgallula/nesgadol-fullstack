import express from 'express';
// import { addCustomer, getAll, deleteCustomer } from '../bl/customers-bl.js';

const usersRouter = express.Router();

usersRouter.get('/users', async (_, res) => {
    let result = await getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    usersRouter
}