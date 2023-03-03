import { Request, Response } from "express";
import { nanoid } from "nanoid";

export const callMeInFunction = (req: Request, res: Response) => {
  res.status(200).send(`Hello ${nanoid()} ${req.query.name} Incroyable ACS`);
};
