import express from 'express';
import dotenv from 'dotenv'
// import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import ProductRouter from './routes/product.routes.js';
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/user',Router)
app.use("/api/products", ProductRouter);

dotenv.config();




Connection()

app.listen(8080,() => console.log('listening on port 8080'));

// DefaultData();