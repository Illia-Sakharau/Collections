import express from 'express';
import usersRouter from './routers/usersRouter.js';
import dotnet from 'dotenv';

dotnet.config()

const PORT = process.env.PORT || 8080;

const app = express();


app.get('/', (req, res) => {res.send('Server worked')})
app.use(express.json());
app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
