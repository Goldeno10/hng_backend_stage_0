"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// My email address
const email = "ibrahimmuhammad271@gmail.com";
// Project GitHub Address
const github = "https://github.com/Goldeno10/hng_backend_stage_0";
// CORS Handleing
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
// Body Parsre Middlware
app.use(express_1.default.json());
// Route
app.get("/", (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({
        email: email,
        current_datetime: currentTime,
        github_url: github,
    });
});
// Servre
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
