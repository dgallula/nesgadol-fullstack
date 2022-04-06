import  express from "express";
import cors from 'cors'
import { coffeesRouter } from "./controllers/coffees-controller.js";
import { usersRouter } from "./controllers/users-controllers.js";


const app = express();

app.use(express.json())
app.use(cors())

 app.use('/api', coffeesRouter)
 app.use('/api', usersRouter)



app.listen(5000, () => {
    console.log('Server started on port 5000');
})