import express from 'express';
// import { addCustomer, getAll, deleteCustomer } from '../bl/customers-bl.js';

const coffeesRouter = express.Router();

coffeesRouter.get('/coffes', async (_, res) => {
    let result = await getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    coffeesRouter
}