import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { router } from './routes';
import db from './config/mogose'

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

db().then(() => {
    console.log('Conección exitosa')
})

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
