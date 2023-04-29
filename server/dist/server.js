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
const express_1 = __importDefault(require("express"));
require("dotenv/config");
require("express-async-errors");
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const middleware_1 = require("./middleware/");
const connect_1 = require("./db/connect");
const auth_1 = __importDefault(require("./middleware/auth"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const jobsRoutes_1 = __importDefault(require("./routes/jobsRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const __dirnames = path_1.default.resolve();
//middleware & security
if (process.env.NODE_ENV !== "production") {
    app.use((0, morgan_1.default)("dev"));
}
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, xss_clean_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.resolve("../client/build")));
//routes
app.use("/api/v1/auth", authRoutes_1.default);
app.use("/api/v1/jobs", auth_1.default, jobsRoutes_1.default);
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirnames, "../client/build", "index.html"));
});
// error handling
app.use(middleware_1.notFoundMiddleware);
app.use(middleware_1.errorHandlerMiddleware);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.connectDB)(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
