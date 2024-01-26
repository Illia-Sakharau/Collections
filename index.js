import express from 'express';
import usersRouter from './routers/usersRouter.js';
import authRouter from './routers/authRouter.js';
import collectionsRouter from './routers/collectionsRouter.js';
import tagsRouter from './routers/tagsRouter.js';
import themesRouter from './routers/themesRouter.js';
import dotnet from 'dotenv';
import cors from 'cors';

dotnet.config()

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({
  origin: '*',
}));
app.get('/', (req, res) => {res.send('Server worked')})
app.use(express.json());
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/collections', collectionsRouter);
app.use('/tags', tagsRouter);
app.use('/themes', themesRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
