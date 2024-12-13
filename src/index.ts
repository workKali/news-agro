import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import newsRoute from './routes/news.route';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors())

app.use("/news", newsRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
