import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from './database/dbConnection.js';

import router  from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

dbConnection();

const PORT = 4000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
