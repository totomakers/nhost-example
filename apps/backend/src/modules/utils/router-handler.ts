import { Request, Response } from "express";

export const routeHandler =
  (cb: (req: Request, res: Response) => PromiseLike<void> | void) =>
  (req: Request, res: Response) => {
    cb(req, res);
  };
