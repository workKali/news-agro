import express from "express";
import { getCountryNews } from "../controller/news.controller";
const router = express.Router();

router.get("/country/:countryId", getCountryNews);

export default router;
