import { Request, Response } from "express";

export const routeHandler =
  (cb: (req: Request, res: Response) => PromiseLike<any> | any) =>
  (req: Request, res: Response) => {
    cb(req, res);
  };
