"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const news_controller_1 = require("../controller/news.controller");
const router = express_1.default.Router();
router.get("/country/:countryId", news_controller_1.getCountryNews);
exports.default = router;
