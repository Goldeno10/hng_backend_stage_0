import express, { Express, Request, Response } from "express";

const app: Express = express();

// My email address
const email: string = "ibrahimmuhammad271@gmail.com";

// Project GitHub Address
const github: string = "https://github.com/Goldeno10/hng_backend_stage_0";

// CORS Handleing
app.use((req: Request, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Body Parsre Middlware
app.use(express.json());

// Route
app.get("/", (req: Request, res: Response) => {
  const currentTime: string = new Date().toISOString();

  res.json({
    email: email,
    current_datetime: currentTime,
    github_url: github,
  });
});

// Servre
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
