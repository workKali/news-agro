import { Request, Response } from "express";
import newsService from "../service/news.service";

export async function getCountryNews(req: Request, res: Response) {
  const { language } = req.query;
  const data = await newsService.getCountryNews(
    Number(req.params.countryId),
    language as any
  );
  res.json(data);
}
