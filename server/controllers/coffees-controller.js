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

coffeesRouter.post('/coffees', async (req, res) => {
    let result = await addCoffees(req.body);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }

        res.send(result)
    }
})

coffeesRouter.delete('/coffees/:id', async (req, res) => {
    let result = await deleteCoffees(req.params.id);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    coffeesRouter
}