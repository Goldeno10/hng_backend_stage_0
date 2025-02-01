// How to run the code
// 1. Open your terminal
// 2. Navigate to the directory where the file is saved
// 3. Run the command "npm install express"
// 4. Run the command "npm install @types/express"
// 5. Run the command "npm install typescript"
// 6. Run the command "npm install ts-node"
// 7. Run the command "ts-node index.ts"
// 8. Open your browser and navigate to "http://localhost:3000"

import express, { Express, Request, Response } from "express";

const app: Express = express();

// My email address
const email: string = "ibrahimmuhammad271@gmail.com";

// current time in iso8601 format
const currentTime: string = new Date().toISOString();

// GitHub Address
const github: string = "www.github.com/Goldeno10";

// CORS Handling
app.use((req: Request, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Body Parser
app.use(express.json());

// Route
app.get("/", (req: Request, res: Response) => {
  res.json({
    email: email,
    currentTime: currentTime,
    github: github,
  });
});

// Server
app.listen(3000, () => console.log("Server running on port 5000"));
