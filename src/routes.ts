import { Request, Response, Router } from "express"
import { app } from "./app";

const router = Router();

router.post('users', (req: Request, res: Response) => {
  return res.status(201).send();
})

export { router };