"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
function getCountryNews(countryId_1) {
    return __awaiter(this, arguments, void 0, function* (countryId, language = "es") {
        const routeCWD = process.cwd();
        const filePath = path_1.default.join(routeCWD, "/assets/news-climate.json");
        const fileString = yield promises_1.default.readFile(filePath, "utf8");
        const jsonFile = JSON.parse(fileString);
        const countryData = jsonFile.countries.find((i) => i.countryId == countryId);
        if (!countryData)
            return { success: false, data: null };
        const today = new Date();
        const newsResponse = countryData.advertisements
            .filter((i) => i.isActive && (!i.activeUntil || today <= new Date(i.activeUntil)))
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
    });
}
exports.default = { getCountryNews };
