import express from 'express';
import cors from 'cors'
import { getScrapperInfo } from './services/scrapperService.js';
import { NotFoundException } from './exceptions/NotFoundException.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send("pong");
});

app.get('/scrapper-service/:brand', async (req, res) => {
    try {
        res.status(200)
        res.json(await getScrapperInfo(req.params.brand));
    } catch (error) {
        if (error instanceof NotFoundException) {
            res.status(error.statusCode).send(error.message);
        } else {
            console.log(error)
            res.status(500).send(error.message);
        }
    }
});

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});