import express from 'express';
 import { addCoffee, getAll, deleteCoffee } from '../business-logic/coffees-bl';

const coffeesRouter = express.Router();

coffeesRouter.get('/coffees', async (_, res) => {
    let result = await getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

coffeesRouter.post('/coffees', async (req, res) => {
    let result = await addCoffee(req.body);

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
    let result = await deleteCoffee(req.params.id);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    coffeesRouter
}