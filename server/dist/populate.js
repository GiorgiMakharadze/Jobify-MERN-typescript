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
const promises_1 = require("fs/promises");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const connect_1 = require("./db/connect");
const Job_1 = __importDefault(require("./models/Job"));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.connectDB)(process.env.MONGO_URL);
        yield Job_1.default.deleteMany();
        const filePath = path_1.default.join(__dirname, "mock-data.json");
        const jsonData = yield (0, promises_1.readFile)(filePath, "utf8");
        const jsonProducts = JSON.parse(jsonData);
        yield Job_1.default.create(jsonProducts);
        console.log("Success!!!");
        process.exit(0);
    }
    catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
});
start();
