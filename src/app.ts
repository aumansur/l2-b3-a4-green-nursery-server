import express, { Request, Response } from "express";
import cors from "cors";

import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";

const app = express();

app.use(express());
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//! install and setup server
app.use("/api/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("hey  Sports facility  server is running 😎");
});

app.use(globalErrorHandler);

app.use(notFound);
export default app;
