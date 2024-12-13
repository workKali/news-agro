import path from "path";
import fs from "fs/promises";
import { NewsCountryModel } from "../models/core/NewsCountry.model";
import { BaseResponseDTO } from "../models/dtos/BaseResponse.dto";

async function getCountryNews(
  countryId: number,
  language: "es" | "en" = "es"
): Promise<BaseResponseDTO> {
  const routeCWD = process.cwd();
  
  const filePath = path.join(routeCWD, "/assets/news-climate.json");
  const fileString = await fs.readFile(filePath, "utf8");
  const jsonFile = JSON.parse(fileString) as NewsCountryModel;

  const countryData = jsonFile.countries.find((i) => i.countryId == countryId);
  if (!countryData) return { success: false, data: null };

  const today = new Date();
  const newsResponse = countryData.advertisements
    .filter(
      (i) => i.isActive && (!i.activeUntil || today <= new Date(i.activeUntil))
    )
    .map((i) => ({
      link: i.link,
      reference: i.reference,
      titles: i[language].title,
      subtitle: i[language].subtitle,
    }));

  return {
    data: {
      daysNoDisplayAgain: jsonFile.daysNoDisplayAgain,
      advertisements: newsResponse,
    },
    success: true,
  };
}

export default { getCountryNews };
